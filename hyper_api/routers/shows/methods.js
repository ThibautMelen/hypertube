const axios = require('axios')
const Comment = require('../../models/comments')
const User = require('../../models/users')
const torrentStream = require('torrent-stream')

module.exports = {
    search: async (req, res) => {
        if (!req.user) {
            return res.status(400).json({success: false})
        }

        try {
            let ytsResponse = await axios.get(`https://yts.lt/api/v2/list_movies.json?query_term=${req.params.query}&sort_by=download_count&limit=20`)
            // let popCornResponse = await axios.get(`https://yts.lt/api/v2/list_movies.json?query_term=${req.params.query}&limit=20`)

            let movies = []


            console.log(ytsResponse.data)
            if (ytsResponse.data.status === 'ok' && ytsResponse.data.data.movies && ytsResponse.data.data.movies.length > 0) {
                ytsResponse.data.data.movies.forEach(movie => {
                    movies.push({
                        title: movie.title,
                        year: movie.year,
                        rating: movie.rating,
                        runtime: movie.runtime,
                        image: movie.large_cover_image,
                        id: movie.imdb_code
                    })
                })
            }

            return res.status(200).json({success: true, movies})
        }
        catch(error) {
            console.error(error)
            return res.status(500).json({success: false})
        }
    },

    popular: async (req, res) => {
        if (!req.user) {
            return res.status(400).json({success: false})
        }

        try {
            let ytsResponse = await axios.get('https://yts.lt/api/v2/list_movies.json?sort_by=download_count&limit=20')

            let movies = []

            if (ytsResponse.data.status === 'ok') {
                ytsResponse.data.data.movies.forEach(movie => {
                    movies.push({
                        title: movie.title,
                        year: movie.year,
                        rating: movie.rating,
                        runtime: movie.runtime,
                        image: movie.large_cover_image,
                        id: movie.imdb_code
                    })
                })
            }

            return res.status(200).json({success: true, movies})
        }
        catch(error) {
            console.error(error)
            return res.status(500).json({success: false})
        }
    },

    play: async (req, res) => {
        if (!req.user || !req.params.id) {
            return res.status(400).json({success: false})
        }

        try {
            let ytsResponse = await axios.get(`https://yts.lt/api/v2/list_movies.json?query_term=${req.params.id}&limit=1`)
            // let popCornResponse = await axios.get(`https://yts.lt/api/v2/list_movies.json?query_term=${req.params.query}&limit=20`)

            let movies = []

            console.log(req.params.id)


            console.log(ytsResponse.data)
            if (ytsResponse.data.status !== 'ok' || !ytsResponse.data.data.movies || ytsResponse.data.data.movies.length < 1 || !ytsResponse.data.data.movies[0]) {
                return res.status(404).json({success: false})
            }

            let parsedMovie = {
                title: ytsResponse.data.data.movies[0].title,
                year: ytsResponse.data.data.movies[0].year,
                rating: ytsResponse.data.data.movies[0].rating,
                runtime: ytsResponse.data.data.movies[0].runtime,
                image: ytsResponse.data.data.movies[0].large_cover_image,
                id: ytsResponse.data.data.movies[0].imdb_code
            }

            let comments = await Comment.find({videoId: ytsResponse.data.data.movies[0].imdb_code}).populate('user')

            res.status(200).json({success: true, movie: ytsResponse.data.data.movies[0], comments, parsedMovie})

            let user = await User.findById(req.user.userId)

            if (!user.watchedShows) {
                user.watchedShows = []
            }
            if (user.watchedShows.findIndex(v => v.id === parsedMovie.id) < 0) {
                user.watchedShows.push(parsedMovie)
            }
            user.save()
        }
        catch(error) {
            console.error(error)
            return res.status(500).json({success: false})
        }
    },

    stream: async (req, res) => {
        try {
            if (!req.user || !req.params.hash) {
                return res.status(400).json({success: false})
            }
            const engine = torrentStream(`magnet:?xt=urn:btih:${req.params.hash}`)

            engine.on('ready', function() {
                engine.files.forEach((file, i) => {
                    console.log('FILE NAME :', file.name)
                    if (file.name.includes('.mp4')) {
                        const fileSize = file.length
                        const range = req.headers.range

                        if (range) {
                            const parts = range.replace(/bytes=/, "").split("-")
                            const start = parseInt(parts[0], 10)
                            const end = parts[1] 
                            ? parseInt(parts[1], 10)
                            : fileSize - 1
                            const chunksize = (end - start) + 1
                            const stream = file.createReadStream({start, end})
                            const head = {
                            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                            'Accept-Ranges': 'bytes',
                            'Content-Length': chunksize,
                            'Content-Type': 'video/mp4',
                            }
                            res.writeHead(206, head)
                            stream.pipe(res)
                        }
                        else {
                            const head = {
                            'Content-Length': fileSize,
                            'Content-Type': 'video/mp4',
                            }
                            res.writeHead(200, head)
                            file.createReadStream().pipe(res)
                        }
                    }
                })
            })
        }
        catch(error) {
            console.error(error)
        }
    },

    comment: async (req, res) => {
        if (!req.user || !req.body || !req.body.text || !req.body.videoId) {
            return res.status(400).json({success: false})
        }

        try {
            let newComment = new Comment({
                videoId: req.body.videoId,
                user: req.user.userId,
                text: req.body.text
            })
            await newComment.save()

            return res.status(200).json({success: true})
        }
        catch(error) {
            console.error(error)
            return res.status(500).json({success: false})
        }
    } 
}
