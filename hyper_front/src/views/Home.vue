<template>
    <section class="home">

        <header>
            <comp-nav :showSearch="true" @onSearch="onSearch" />

            <div class="slider" v-if="!searchQuery">
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
                        <slide v-for="(show, index) in popularCatalog" :key="index">
                            <router-link tag="div" :to="`/player/${show.id}`" class="slider_bck hvr-up-min" :style="{'background-image':`url(${show.image})`}">
                            </router-link>
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
                        <slide v-for="(show, index) in popularCatalog" :key="index">
                            <router-link tag="div" :to="`/player/${show.id}`" class="slider_bck hvr-up-min" :style="{'background-image':`url(${show.image})`}">
                            </router-link>
                        </slide>
                    </carousel>
                </show-at>
            </div>

        </header>

        <comp-catalog
            :title="!searchQuery ? trad[`The Most Popular 🍿`][this.$store.state.user.language] : trad[`Search result 🔍`][this.$store.state.user.language]"
            :catalog="!searchQuery ? popularCatalog : searchCatalog"
            :loading="(!popularCatalog || popularCatalog.length < 1|| searchQuery) && searchLoading" />


    </section>
</template>

<script>
import compNav from  '../components/Nav'
import compCatalog from  '../components/Catalog'
import axios from 'axios'
import trad from '../trad'

import {showAt, hideAt} from 'vue-breakpoints'
import { Carousel, Slide } from 'vue-carousel';

export default {
    data () {
        return {
            searchQuery: '',
            searchDelayTimer: null,
            popularCatalog: [],
            searchCatalog: [],
            searchLoading: true,
            trad
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
        onSearch (searchQuery) {
            this.searchQuery = searchQuery
            if (searchQuery) {
                this.searchLoading = true
            }
            clearTimeout(this.delayTimer)
            this.delayTimer = setTimeout(async () => {
                try {
                    if (this.searchQuery) {
                        const res = await axios.get(`http://localhost:3000/shows/search/${this.searchQuery}`, {withCredentials: true});
                        console.log(res.data)
                        console.log(res.status)

                        if (res.data.success) {
                            this.searchCatalog = res.data.movies
                        }
                        else {
                            this.searchCatalog = []
                        }
                    }
                    else {
                        this.searchCatalog = []
                    }

                    this.searchLoading = false
                } catch (ex) {
                    console.log(ex)
                    this.searchLoading = false
                }
            }, 600)
        },
        async getPopular () {
            try {
                const res = await axios.get(`http://localhost:3000/shows/popular`, {withCredentials: true});
                console.log(res.data);
                console.log(res.status);

                if (res.data.success) {
                    this.popularCatalog = res.data.movies
                }
                this.searchLoading = false
            } catch (ex) {
                console.log(ex)
                this.searchLoading = false
            }
        },
    },
    created() {
    },
    mounted (){
        this.getPopular()
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