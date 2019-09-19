<template>
    <section class="profile">

        <header>
            <comp-nav v-if="true"/>
        </header>

        <section class="user">
            <div class="head">
                <img src="https://s3.eu-west-3.amazonaws.com/pikomit/users/5bffc19e34651952dd0ada21/Pw4X4LyTnD6aWDixGggskqzCYK81Ji1564665526290_400px.jpg" alt="">
                <div class="info">
                    <h1>{{this.userinfo.first_name}} {{this.userinfo.last_name}}</h1>
                    <h2>@{{this.userinfo.username}}</h2>
                    <h3 v-if="this.userinfo.language == 'FR'">Français 🥖</h3>
                    <h3 v-if="this.userinfo.language == 'EN'">Anglais ☕️</h3>
                </div>
            </div>

            <comp-catalog :title="$t('home.last')" v-if="true"/>

            <div class="last_show">

            </div>
        </section>

    </section>
</template>

<script>
import compNav from  '../components/Nav'
import compCatalog from  '../components/Catalog'

export default {
    data () {
        return {
            userinfo:{
                first_name:'Jack',
                last_name:'Sparow',
                username:'JackSp77',
                language:'FR'
            }
        }
    },
    components: {
        compNav,
        compCatalog
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

section.profile {

    section.user {
        // GLOBAL
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        padding: 90px 4% 20px 4%;

        div.head {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            img {
                width: 150px;
                height: 150px;
                left: 15px;
                border-radius: 70px;
                border: 7px solid $white;
                margin-right: 20px;
            }
            div.info {
                h1 {
                    color: $deepurple;
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                h2, h3 {
                    color: $yoda;
                    font-style: italic;
                    font-size: 16px;
                    margin-top: 5px;
                }
            }

        }

    }

}



/*****************************************************************
    MIDDLE SCREEN
*****************************************************************/
@media screen and (max-width: 900px) {
    section.profile  {

    }
}


/*****************************************************************
    SMALL SCREEN
*****************************************************************/
@media screen and (max-width: 550px) {
    section.profile  {
        section.user {
            padding: 90px 1% 20px 1%;
        }
    }
}




</style>