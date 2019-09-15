<template>

    <section class="catalog">
        <h1>{{title}}</h1>

        <div class="listMovies">
            <router-link tag="div" to="/" v-for="(item, index) in catalog" :key="index">
                <div class="hvr-up-min infoMovie" :style="{'background-image':`url(${item.cover})`}">
                    <p>{{ item.title }}</p>
                    <p>{{ item.date }} ● {{ item.time }} ● {{ item.imbd }} ⭐️</p>
                    <p></p>
                </div>
            </router-link>
        </div>

    </section>

</template>



<script>

export default {
    props: ['title'],
    data () {
        return {
            
            catalog: [
                {
                    title: "16 Blocks",
                    date: "1993",
                    time: "2h",
                    imbd: "8.1",
                    cover: "https://img.yts.lt/assets/images/movies/16_Blocks_2006/large-cover.jpg"
                },
                {
                    title: "Avengers: Endgame",
                    date: "1993",
                    time: "2h",
                    imbd: "8.1",
                    cover: "https://img.yts.lt/assets/images/movies/avengers_endgame_2019/large-cover.jpg"
                },
                {
                    title: "Jurassic Park",
                    date: "1993",
                    time: "2h",
                    imbd: "8.1",
                    cover: "https://img.yts.lt/assets/images/movies/jurassic_park_1993/large-cover.jpg",
                    screen: "https://img.yts.lt/assets/images/movies/Jurassic_Park_1993/large-screenshot1.jpg"
                },
                {
                    title: "Catch Me If You Can",
                    date: "1993",
                    time: "2h",
                    imbd: "8.1",
                    cover: "https://img.yts.lt/assets/images/movies/catch_me_if_you_can_2002/large-cover.jpg"
                },
                {
                    title: "Kill Bill: Vol. 1",
                    date: "1993",
                    time: "2h",
                    imbd: "8.1",
                    cover: "https://img.yts.lt/assets/images/movies/kill_bill_vol_1_2003/large-cover.jpg"
                },
                {
                    title: "Inglourious Basterds",
                    date: "1993",
                    time: "2h",
                    imbd: "8.1",
                    cover: "https://img.yts.lt/assets/images/movies/Inglourious_Basterds_2009/large-cover.jpg"
                },
                {
                    title: "16 Blocks",
                    date: "1993",
                    time: "2h",
                    imbd: "8.1",
                    cover: "https://img.yts.lt/assets/images/movies/16_Blocks_2006/large-cover.jpg"
                },
                {
                    title: "Avengers: Endgame",
                    date: "1993",
                    time: "2h",
                    imbd: "8.1",
                    cover: "https://img.yts.lt/assets/images/movies/avengers_endgame_2019/large-cover.jpg"
                },
                {
                    title: "Jurassic Park",
                    date: "1993",
                    time: "2h",
                    imbd: "8.1",
                    cover: "https://img.yts.lt/assets/images/movies/jurassic_park_1993/large-cover.jpg",
                    screen: "https://img.yts.lt/assets/images/movies/Jurassic_Park_1993/large-screenshot1.jpg"
                },
                {
                    title: "Catch Me If You Can",
                    date: "1993",
                    time: "2h",
                    imbd: "8.1",
                    cover: "https://img.yts.lt/assets/images/movies/catch_me_if_you_can_2002/large-cover.jpg"
                },
                {
                    title: "Kill Bill: Vol. 1",
                    date: "1993",
                    time: "2h",
                    imbd: "8.1",
                    cover: "https://img.yts.lt/assets/images/movies/kill_bill_vol_1_2003/large-cover.jpg"
                },
                {
                    title: "Inglourious Basterds",
                    date: "1993",
                    time: "2h",
                    imbd: "8.1",
                    cover: "https://img.yts.lt/assets/images/movies/Inglourious_Basterds_2009/large-cover.jpg"
                },
            ],
        }
    },
    components: {
    },
    computed: {
    },
    methods:{
        //LOGOUT
        async logout() {
            await console.log(`LOG OUT`);
        }
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
    // padding: 15px 4%;

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