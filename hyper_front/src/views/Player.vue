<template>
    <section class="player">

        <header>
            <comp-nav v-if="true"/>
        </header>

        <section class="video">

            <section class="videoPlayer">
                <!-- video element -->
                <vue-plyr>
                    <video poster="poster.png" src="video.mp4">
                        <source src="../assets/video/movie.mp4" type="video/mp4" size="1080">
                        <track kind="captions" label="English" srclang="en" src="../assets/video/caption.vtt" default>
                    </video>
                </vue-plyr>
            </section>

            <aside class="infoMovie">
                <h1>{{ this.movie.title}}</h1>
                <h2 class="eggs">{{ this.movie.date}} - {{ this.movie.time}}</h2>
                <div class="imbd">
                    <img class="hvr-up-min" src="../assets/logo/imbd.png" alt="">
                    <h3 class="hvr-up-min">{{ this.movie.imbd}}</h3>
                </div>
                
                <ul>
                    <li v-for="(item, index) in this.movie.genres" :key="index" class="hvr-up-min">{{ item }}</li>
                </ul>

                <vue-plyr class="trailer">
                    <div class="plyr__video-embed">
                        <iframe
                        :src="`https://www.youtube.com/watch?v=${this.movie.yt_trailer}`"
                        allowfullscreen allowtransparency allow="autoplay">
                        </iframe>
                    </div>
                </vue-plyr>

                <div class="dcpt">
                    <h2>Synopsis</h2>
                    <p>{{ this.movie.dcpt}}</p>
                </div>


               <div class="cast">
                    <h2>Director</h2>
                    <ul>
                        <li class="hvr-up-min" v-for="(item, index) in this.movie.director" :key="index">
                            <img :src="item.url_small_image" alt="">
                            <div>
                                <p>{{ item.name }}</p>
                            </div>
                        </li>
                    </ul>
                </div>

               <div class="cast">
                    <h2>Casting</h2>
                    <ul>
                        <li class="hvr-up-min" v-for="(item, index) in this.movie.cast" :key="index">
                            <img :src="item.url_small_image" alt="">
                            <div>
                                <p>{{ item.name }} <i>play</i></p>
                                <p>{{ item.character_name }}</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </aside>

        </section>

    </section>
</template>

<script>
import compNav from  '../components/Nav'

export default {
    data () {
        return {
            hello: `hey what's up`,
            searching: false,
            movie: {
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
        }
    },
    components: {
        compNav,
    },
    computed: {
    },
    methods:{
    },
    created() {
    },
    mounted (){
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





        }
    }



/*****************************************************************
    MIDDLE SCREEN
*****************************************************************/
@media screen and (max-width: 900px) {
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