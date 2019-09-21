<template>

    <section class="catalog">
        <h1>{{title}}</h1>

        <div v-if="loading" class="spinner-container">
            <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
        </div>
        <div class="listMovies">
            <h2 v-if="!loading && (!catalog || catalog.length < 1)">No results matching your query 😔</h2>
            <router-link tag="div" :to="`/player/${item.id}`" v-for="(item, index) in catalog" :key="index">
                <div class="hvr-up-min infoMovie" :style="{'background-image':`url(${item.image})`}">
                    <p>{{ item.title }}</p>
                    <p>{{ item.year }} ● {{ parseFloat(item.runtime / 60).toFixed(2) }}h ● {{ item.rating }} ⭐️</p>
                    <p></p>
                </div>
            </router-link>
        </div>

    </section>

</template>



<script>

export default {
    props: ['title', 'catalog', 'loading'],
    data () {
        return {
        }
    },
    components: {
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

/*****************************************************************
	IMPORTING STYLE
*****************************************************************/
@import '../styles/_global.scss';



/*****************************************************************
	LARGE SCREEN
*****************************************************************/
section.catalog {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 80px;
    // padding: 15px 4%;

    h1 {
        color: $white;
        font-size: 24px;
        margin: 15px 0px 35px 0px;
        text-align: center;
    }

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

            div.infoMovie {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            
                p {
                    color: $white;
                    background-color: #22303eea;
                    padding: 5px 35px 5px 35px;
                    font-size: 17px;
                    white-space: nowrap;
                    width: 100%;
                    text-align: center;
                }
                p:first-child {
                    padding: 15px 35px 5px 35px;
                    border-radius: 15px 15px 0px 0px;
                }
            }



        }
    }
}




/*****************************************************************
	MIDDLE SCREEN
*****************************************************************/
@media screen and (max-width: 900px) {
    section.catalog {
        
    }
}


/*****************************************************************
	SMALL SCREEN
*****************************************************************/
@media screen and (max-width: 550px) {
    section.catalog {
        
    }
}




</style>