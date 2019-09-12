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
                        <!-- <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default> -->
                    </video>
                </vue-plyr>

            </section>


            <aside class="infoMovie">
                <h1>{{ this.movie.title}}</h1>
                <h2>{{ this.movie.date}}</h2>
                <ul>
                    <li v-for="(item, index) in this.movie.genres" :key="index" class="hvr-up-min">{{ item }}</li>
                </ul>
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
                genres: [ "Action", "Adventure", "Sci-Fi", "Thriller"],
                cover: "https://img.yts.lt/assets/images/movies/16_Blocks_2006/large-cover.jpg"
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
        justify-content: space-around;
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
        }

        aside.infoMovie {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            background-color: #eef1f7;
            padding: 30px 20px;
            width: 100%;
            max-width: 400px;
            border-radius: 10px;
            box-shadow: 0 0 14px #00000036;
            margin-bottom: 20px;
            overflow: scroll;

            h1 {
                font-size: 22px;
                font-weight: 700;
                color: $deepurple;
            }
            h2 {
                margin-top: 5px;
                font-size: 18px;
                font-style: italic;
                color: $poseidon;
            }

            li {
                display: inline-block;
                padding: 10px;
                border-radius: 10px;
                background-color: #adb4b9;
                margin: 10px;
                margin-left: 0;
                font-size: 16px;
                color: $white;
            }



        }
    }



/*****************************************************************
    MIDDLE SCREEN
*****************************************************************/
@media screen and (max-width: 900px) {

}


/*****************************************************************
    SMALL SCREEN
*****************************************************************/
@media screen and (max-width: 550px) {

}



}


</style>