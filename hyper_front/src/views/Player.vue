<template>
    <section class="player">

        <header>
            <comp-nav />
        </header>

        <section v-if="loading || !movie" class="video">
            <div v-if="loading" class="spinner-container">
                <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
            </div>
            <h2 v-else>{{trad[`notFound`][this.$store.state.user.language]}}</h2>
        </section>
        <section v-else class="video">

            <section class="videoPlayer">
                <!-- video element -->
                <vue-plyr>
                    <video poster="poster.png" src="video.mp4">
                        <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" size="1080">
                        <track kind="captions" label="English" srclang="en" src="../assets/video/caption.vtt" default>
                    </video>
                </vue-plyr>
            </section>

            <aside class="infoMovie">
                <h1>{{ this.movie.title}}</h1>
                <h2 class="eggs">{{ this.movie.year}} - {{ parseFloat(this.movie.runtime / 60).toFixed(2) }}h</h2>
                <!-- <div class="watched hvr-up-min">
                    <button @click="watched($event)" class="hvr-rectangle-in">{{trad[`watched`][$store.state.user.language]}}</button>
                </div> -->

                <div class="imbd">
                    <img class="hvr-up-min" src="../assets/logo/imbd.png" alt="">
                    <h3 class="hvr-up-min">{{ this.movie.rating}}</h3>
                </div>
                
                <ul>
                    <li v-for="(item, index) in this.movie.genres" :key="index" class="hvr-up-min">{{ item }}</li>
                </ul>

                <!-- TODO : REPLACE BY IMG YT -->
                <img class="cover-inside" :src="this.movie.large_cover_image" alt="">

                <div class="dcpt">
                    <h2>{{trad[`synopis`][$store.state.user.language]}}</h2>
                    <p>{{ this.movie.description_full }}</p>
                </div>

                <div class="cast">
                    <h2>{{trad[`director`][$store.state.user.language]}}</h2>
                    <ul>
                        <li class="hvr-up-min" v-for="(item, index) in this.oldMovie.director" :key="index">
                            <img :src="item.url_small_image" alt="">
                            <div>
                                <p>{{ item.name }}</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="cast">
                    <h2>{{trad[`casting`][$store.state.user.language]}}</h2>
                    <ul>
                        <li class="hvr-up-min" v-for="(item, index) in this.oldMovie.cast" :key="index">
                            <img :src="item.url_small_image" alt="">
                            <div>
                                <p>{{ item.name }} <i>{{trad[`play`][$store.state.user.language]}}</i></p>
                                <p>{{ item.character_name }}</p>
                            </div>
                        </li>
                    </ul>
                </div>


                <div class="comment">
                    <h2>{{trad[`comment`][$store.state.user.language]}}</h2>

                    <div class="newCom">
                        <textarea v-model="commentInput" type="text">I like so much this movie ! 💙😱</textarea>
                        <button @click="postComment" class="hvr-up-min">{{trad[`newCom`][$store.state.user.language]}}</button>
                    </div>

                    <div class="comList">
                        <ul>
                            <li class="hvr-up-min" v-for="(item, index) in this.comments" :key="index">
                                <img :src="item.user.profilePic" alt="">
                                <div>
                                    <p>{{ item.user.username }} - {{ formatDate(item.createdAt) }}</p>
                                    <p>{{ item.text }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            
            </aside>

        </section>

    </section>
</template>

<script>
import compNav from  '../components/Nav'
import axios from 'axios'
import WebTorrent from 'webtorrent'
import trad from '../trad'

export default {
    data () {
        return {
            oldMovie: {
                title: "Jurassic Park",
                date: "1993",
                time: "2h",
                imbd: "8.1",
                genres: [ "Action", "Adventure", "Sci-Fi", "Thriller"],
                yt_trailer: "iszwuX1AK6A",
                dcpt: "Huge advancements in scientific technology have enabled a mogul to create an island full of living dinosaurs. John Hammond has invited four individuals, along with his two grandchildren, to join him at Jurassic Park. But will everything go according to plan? A park employee attempts to steal dinosaur embryos, critical security systems are shut down and it now becomes a race for survival with dinosaurs roaming freely over the island.",
                cover: "https://img.yts.lt/assets/images/movies/16_Blocks_2006/large-cover.jpg",
                director: [
                {
                    name: "Steven Spidelberg",
                    url_small_image: "https://img.yts.lt/assets/images/actors/thumb/nm0000229.jpg"
                }
                ],
                cast: [
                    {
                        "name": "Bruce Willis",
                        "character_name": "Det. Jack Mosley",
                        "url_small_image": "https://yts.lt/assets/images/actors/thumb/nm0000246.jpg",
                    },
                    {
                        "name": "David Morse",
                        "character_name": "Det. Frank Nugent",
                        "url_small_image": "https://yts.lt/assets/images/actors/thumb/nm0001556.jpg",
                    },
                    {
                        "name": "Casey Sander",
                        "character_name": "Capt. Dan Gruber",
                    },
                    {
                        "name": "Tom Wlaschiha",
                        "character_name": "Bus Passenger",
                        "url_small_image": "https://yts.lt/assets/images/actors/thumb/nm0937239.jpg",
                        "imdb_code": "0937239"
                    }
                ],
            },
            movie: null,
            comments: [],
            commentInput: '',
            loading: true,
            trad
        }
    },
    components: {
        compNav,
    },
    computed: {
    },
    methods:{
        //LOGOUT
        // async watched(event) {
        //     // await alert(`You added this movie to your watched list`);
        //     this.color = "#01a3a4";
        //     this.width = "2000px";

        //     // let targetId = event.currentTarget.id;
        //     // console.log(targetId); // returns 'foo'
        //     // this

        // },
        async getVideo (id) {
            try {
                this.$store.commit('ADD_WATCHEDSHOW', id)
                
                const res = await axios.get(`http://localhost:3000/shows/play/${id}`, {withCredentials: true});
                console.log(res.data);
                console.log(res.status);

                if (res.data.success) {
                    this.movie = res.data.movie
                    this.comments = res.data.comments
                }
                this.loading = false
            } catch (ex) {
                console.log(ex)
                this.loading = false
            }
        },
        async postComment() {
            this.comments.push({
                videoId: this.$route.params.id,
                text: this.commentInput,
                user: this.$store.state.user,
                createdAt: new Date()
            })

            try {
                const data = {
                    videoId: this.$route.params.id,
                    text: this.commentInput
                }

                this.commentInput = ''

                const res = await axios.post(`http://localhost:3000/shows/comment`, data, {withCredentials: true})
                console.log(res.data);
                console.log(res.status)
            } catch (ex) {
                console.log(ex)
            }
        },
        formatDate(date) {
            date = new Date(date)

            return `${date.getDay()}/${date.getMonth()}/${date.getYear()}`
        }

    },
    created() {
    },
    mounted (){
        if (this.$route.params.id) {
            this.getVideo(this.$route.params.id)
        }
        else {
            this.$router.push('/')
        }

        // var client = new WebTorrent()
        // var magnetURI = `magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent`

        // client.on('error', function (err) {
        //     console.error('ERROR: ' + err.message)
        // })
        
        // client.add(magnetURI, function (torrent) {

        //     console.log('yooooo')
        //     console.log('Client is downloading:', torrent.infoHash)
            
        //     torrent.files.forEach(function (file) {

        //         console.log(file)
        //         file.appendTo('body')
        //     })
        // })
    }
}

</script>


<style lang="scss" scoped>

@import '../styles/_global.scss';


/*****************************************************************
	LARGE SCREEN
*****************************************************************/

section.player {
    
    section.video  {
        // GLOBAL
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        // background-color: #fff;
        padding: 90px 4% 20px 4%;

        h2 {
            color: $white;
            font-size: 20px;
            margin: 15px 0px 35px 0px;
            text-align: center;
        }

        div.spinner-container {
            width: 100%;
            text-align: center;
            margin-bottom: 30px;
        }

        section.videoPlayer  {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            max-width: 900px;
            margin-bottom: 20px;
            margin-right: 30px;
            width: 65%;
        }
        section.videoPlayer > div{
            padding: 12px;
            background: $blackpearl;
            border-radius: 10px;

        }

        aside.infoMovie {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            background-color: #eef1f7;
            padding: 30px 20px;
            min-width: 250px;
            width: 30%;
            max-width: 400px;
            max-height: 505px;
            border-radius: 10px;
            box-shadow: 0 0 14px #00000036;
            margin-bottom: 20px;
            overflow: scroll;

            h1 {
                font-size: 22px;
                font-weight: 700;
                color: $deepurple;
            }

            h2.eggs {
                margin-top: 10px;
                margin-bottom: 10px;
                font-size: 18px;
                font-style: italic;
                color: $poseidon;
            }

            div.watched button{
                cursor: pointer;
                padding: 15px 25px;
                color: $white;
                background-color: $yoda;
                font-size: 15px;
                text-transform: uppercase;
                margin: 5px 0 10px 0;
                border-radius: 15px;
                // background-color: red;

            }

            div.imbd {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                margin: 5px 0px 8px 0px;
                img {
                    width: 52px;
                    margin-right: 10px;
                }
                h3 {
                    background-color: #f5c419;
                    padding: 4px 12px;
                    font-size: 17px;
                    border-radius: 5px;
                }
            }

            ul {
                display: flex;
                justify-content: row;
                flex-direction: row;
                flex-wrap: wrap;
                li {
                    display: inline-block;
                    padding: 7px 10px;
                    border-radius: 10px;
                    background-color: #adb4b9;
                    margin: 8px 8px 0px 0px;
                    font-size: 14px;
                    color: $white;
                }
            }

            div.trailer {
                width: 100%;
                margin-top: 10px;
            }
            img.cover-inside {
                border-radius: 15px;
                margin-top: 15px;
            }
            div.dcpt {
                h2 {
                    margin-top: 15px;
                    margin-bottom: 5px;
                    font-size: 16px;
                    color: $joker;
                }
                p {
                    font-size: 14px;
                    line-height: 19px;
                    color: $joker;                 
                }
            }

            div.cast {
                width: 100%;
                h2 {
                    margin-top: 15px;
                    margin-bottom: 5px;
                    font-size: 16px;
                    color: $joker;
                }
                ul {
                    display: flex;
                    justify-content: row;
                    flex-direction: row;
                    li {
                        display: flex;
                        flex-direction: row; 
                        align-items: center;

                        width: 100%;
                        padding: 7px 10px;
                        border-radius: 10px;
                        background-color: #adb4b94f;
                        margin: 8px 8px 0px 0px;
                        font-size: 14px;
                        color: $white;

                        img {
                            border-radius: 20px;
                            width: 50px;
                            height: 50px;
                            background-color: $shut;
                            border: none;
                        }
                        div {
                            display: flex;
                            flex-direction: column;
                            margin-left: 20px;
                            p:nth-child(2) {
                                color: $yoda;
                            }
                        }
                    }
                }     
            }


            div.comment {
                width: 100%;
                h2 {
                    margin-top: 15px;
                    margin-bottom: 10px;
                    font-size: 16px;
                    color: $joker;
                }
                div.newCom {
                    display: flex;
                    flex-direction: column;
                    background-color: #eef1f7;
                    textarea {
                        border-radius: 12px;
                        padding: 11px 35px 11px 11px;
                        margin-bottom: 10px;
                        font-size: 12px;
                    }

                    button {
                        cursor: pointer;
                        padding: 10px;
                        background-color: $poseidon;
                        color: $white;
                        border-radius: 10px;
                    }
                }   
                
                div.comList {
                    ul {
                    display: flex;
                    justify-content: row;
                    flex-direction: column-reverse;
                        li {
                            display: flex;
                            flex-direction: row; 
                            align-items: flex-start;

                            width: 100%;
                            padding: 7px 10px;
                            border-radius: 10px;
                            background-color: #adb4b94f;
                            margin: 8px 8px 0px 0px;
                            font-size: 14px;
                            color: $white;

                            img {
                                border-radius: 20px;
                                width: 50px;
                                height: 50px;
                                background-color: $shut;
                                border: none;
                            }
                            div {
                                display: flex;
                                flex-direction: column;
                                margin-left: 20px;
                                p {
                                    color: $deepurple;
                                }
                                p:nth-child(2) {
                                    line-height: 15px;
                                    color: $shut;
                                }
                            }
                        }
                    }      
                }
            }

        }
    }



/*****************************************************************
    MIDDLE SCREEN
*****************************************************************/
@media screen and (max-width: 800px) {
    section.video  {
        padding: 85px 1% 20px 1%;

        section.videoPlayer  {
            margin-right: 0px;
            width: 100%!important;
        }
            aside.infoMovie {
            min-width: unset;
            width: 100%;
            max-width: unset;
            }  
    }
}


/*****************************************************************
    SMALL SCREEN
*****************************************************************/
@media screen and (max-width: 550px) {
    section.video  {
        padding: 70px 0% 0px 0%;

        section.videoPlayer > div{
            padding: unset;
        }
    }
}



}


</style>