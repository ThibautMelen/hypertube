<template>
    <section class="home">
        <header>
            <comp-nav v-if="true"/>

            <!-- <div class="slide">
                <div></div>
            </div>
             -->
            <carousel class="slide"
            :per-page="1"
            :mouse-drag="true"
            :pagination-enabled="false"
            :loop="true"
            :autoplay="true"
            :autoplay-timeout="5000"
            >
                <slide v-for="(slide,index) in slides" :key="index">
                    <div class="slider_bck" :style="{'background-image':`url(${slide.bck})`}">
                        <p>{{ slide.title}}</p>
                    </div>
                </slide>
            </carousel>


        </header>
        <h1>Home</h1>
    </section>
</template>

<script>

import compNav from  '../components/Nav'
import { Carousel, Slide } from 'vue-carousel';
import SlideOne from '../assets/slide/slide_1.jpg'
import SlideTwo from '../assets/slide/slide_2.jpg'
import SlideThree from '../assets/slide/slide_3.jpg'
import SlideFour from '../assets/slide/slide_4.jpg'


export default {
    data () {
        return {
            hello: `hey what's up`,
            slides:[
                {
                    title:'The Revenant',
                    bck: SlideOne
                },
                {
                    title:'Once Upon a Time In Hollywood',
                    bck: SlideTwo
                },
                {
                    title:'Avengers: Infinity War',
                    bck: SlideThree
                },
                {
                    title:'Breaking Bad',
                    bck: SlideFour
                }
            ]
        }
    },
    components: {
        compNav,
        Carousel,
        Slide
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


  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
section.home {
        div.slide {
            width: 100%;
            z-index: 0;
            div.slider_bck {
                cursor: pointer;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 10%;
                width: 100%;
                height: 300px;
                box-shadow: inset 0px 0px 20px 20px $vador;

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


</style>