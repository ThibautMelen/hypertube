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

        <comp-catalog :title="$t('home.title')" v-if="true"/>

    </section>
</template>

<script>
import i18n from '../i18n'

import compNav from  '../components/Nav'
import compCatalog from  '../components/Catalog'

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
        compCatalog,
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



            }
        }
    }


}


</style>