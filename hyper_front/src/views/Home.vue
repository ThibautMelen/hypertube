<template>
    <section class="home">

        <header>
            <comp-nav v-if="true"/>

            <div class="slider" v-if="!searching">
                <!-- SHOW LARGE SRCEEN -->
                <hide-at breakpoint="mediumAndBelow">
                    <carousel class="slide"
                    :per-page="5"
                    :mouse-drag="true"
                    :pagination-enabled="false"
                    :loop="true"
                    :autoplay="true"
                    :autoplay-timeout="3000"
                    >
                        <slide v-for="(slide,index) in slides" :key="index">
                            <div class="slider_bck hvr-up-min" :style="{'background-image':`url(${slide.bck})`}">
                            </div>
                        </slide>
                    </carousel>
                </hide-at>

                <!-- SHOW MIN SCREEN -->
                <show-at breakpoint="mediumAndBelow">
                    <carousel class="slide"
                    :per-page="3"
                    :mouse-drag="true"
                    :pagination-enabled="false"
                    :loop="true"
                    :autoplay="true"
                    :autoplay-timeout="3000"
                    >
                        <slide v-for="(slide,index) in slides" :key="index">
                            <div class="slider_bck hvr-up-min" :style="{'background-image':`url(${slide.bck})`}">
                            </div>
                        </slide>
                    </carousel>
                </show-at>
            </div>

        </header>

        <section class="catalog">
            <h1>The Most Popular 🍿</h1>

    <div class="listMovies">
        <router-link tag="div" to="/" v-for="(item, index) in catalog" :key="index">
            <div class="hvr-up-min" :style="{'background-image':`url(${item.cover})`}">
                <p>{{ item.title }}</p>
            </div>
        </router-link>
    </div>


        </section>
    </section>
</template>

<script>
import compNav from  '../components/Nav'

import {showAt, hideAt} from 'vue-breakpoints'
import { Carousel, Slide } from 'vue-carousel';

import Slide1 from '../assets/slider/slide_1.jpg'
import Slide2 from '../assets/slider/slide_2.jpg'
import Slide3 from '../assets/slider/slide_3.jpg'
import Slide4 from '../assets/slider/slide_4.jpg'
import Slide5 from '../assets/slider/slide_4.jpg'
import Slide6 from '../assets/slider/slide_4.jpg'
import Slide7 from '../assets/slider/slide_4.jpg'
import Slide8 from '../assets/slider/slide_4.jpg'
import Slide9 from '../assets/slider/slide_4.jpg'
import Slide10 from '../assets/slider/slide_4.jpg'
import Slide11 from '../assets/slider/slide_4.jpg'
import Slide12 from '../assets/slider/slide_4.jpg'
import Slide13 from '../assets/slider/slide_4.jpg'
import Slide14 from '../assets/slider/slide_4.jpg'
import Slide15 from '../assets/slider/slide_4.jpg'


export default {
    data () {
        return {
            hello: `hey what's up`,
            searching: false,
            catalog: [
                {
                    title: "16 Blocks",
                    cover: "https://img.yts.lt/assets/images/movies/16_Blocks_2006/large-cover.jpg"
                },
                {
                    title: "Avengers: Endgame",
                    cover: "https://img.yts.lt/assets/images/movies/avengers_endgame_2019/large-cover.jpg"
                },
                {
                    title: "Jurassic Park",
                    cover: "https://img.yts.lt/assets/images/movies/jurassic_park_1993/large-cover.jpg",
                    screen: "https://img.yts.lt/assets/images/movies/Jurassic_Park_1993/large-screenshot1.jpg"
                },
                {
                    title: "Catch Me If You Can",
                    cover: "https://img.yts.lt/assets/images/movies/catch_me_if_you_can_2002/large-cover.jpg"
                },
                {
                    title: "Kill Bill: Vol. 1",
                    cover: "https://img.yts.lt/assets/images/movies/kill_bill_vol_1_2003/large-cover.jpg"
                },
                {
                    title: "Inglourious Basterds",
                    cover: "https://img.yts.lt/assets/images/movies/Inglourious_Basterds_2009/large-cover.jpg"
                },
                {
                    title: "16 Blocks",
                    cover: "https://img.yts.lt/assets/images/movies/16_Blocks_2006/large-cover.jpg"
                },
                {
                    title: "Avengers: Endgame",
                    cover: "https://img.yts.lt/assets/images/movies/avengers_endgame_2019/large-cover.jpg"
                },
                {
                    title: "Jurassic Park",
                    cover: "https://img.yts.lt/assets/images/movies/jurassic_park_1993/large-cover.jpg",
                    screen: "https://img.yts.lt/assets/images/movies/Jurassic_Park_1993/large-screenshot1.jpg"
                },
                {
                    title: "Catch Me If You Can",
                    cover: "https://img.yts.lt/assets/images/movies/catch_me_if_you_can_2002/large-cover.jpg"
                },
                {
                    title: "Kill Bill: Vol. 1",
                    cover: "https://img.yts.lt/assets/images/movies/kill_bill_vol_1_2003/large-cover.jpg"
                },
                {
                    title: "Inglourious Basterds",
                    cover: "https://img.yts.lt/assets/images/movies/Inglourious_Basterds_2009/large-cover.jpg"
                },
            ],
            slides:[
                { bck: Slide1 },
                { bck: Slide2 },
                { bck: Slide3 },
                { bck: Slide4 },
                { bck: Slide5 },
                { bck: Slide6 },
                { bck: Slide7 },
                { bck: Slide8 },
                { bck: Slide9 },
                { bck: Slide10 },
                { bck: Slide11 },
                { bck: Slide12 },
                { bck: Slide13 },
                { bck: Slide14 },
                { bck: Slide15 },
            ]
        }
    },
    components: {
        compNav,
        Carousel,
        Slide,
        hideAt,
        showAt
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

section.home {
    div.slider{
        div.slide {
            width: 100%;
            z-index: 0;
            div.slider_bck {
                cursor: pointer;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 10%;
                width: 100%;
                height: 350px;
                box-shadow: inset 0px 0px 20px 20px #212f3ede;

                display: flex;
                align-items: flex-end;
                justify-content: center;
                opacity: 1;

                p {
                    background-color: #212f3ed1;
                    color: $eb;
                    padding: 25px;
                    border-radius: 15px 15px 0px 0px;
                    font-size: 20px;
                    text-transform: uppercase;
                    font-weight: bold;
                    text-align: center;
                    box-shadow: 0px 0px 10px 7px #212f3e82;
                }
            }
        }
    }

    section.catalog {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 15px 4%;

        h1 {
            color: $white;
            font-size: 24px;
            margin: 15px 0px 35px 0px;
        }

        div.listMovies {
            display: flex;
            align-items: baseline;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;

            div {
                margin: 0px 10px 10px 0;
                cursor: pointer;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 30%;
                width: 300px;
                height: 360px;
                border-radius: 10px;

                display: flex;
                align-items: flex-end;
                justify-content: center;

                p {
                    color: $white;
                    background-color: #22303eea;
                    padding: 12px 35px;
                    border-radius: 15px 15px 0px 0px;
                    font-size: 17px;
                    white-space: nowrap;
                    width: 100%;
                    text-align: center;
                }

                // transition: all .5s ease-in-out;
                // transition-delay: .1s;

                // &:hover {
                //     width: 420px;
                // }

            }
        }
    }



}


</style>