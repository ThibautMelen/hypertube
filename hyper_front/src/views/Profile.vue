<template>
    <section class="profile">

        <header>
            <comp-nav v-if="true"/>
        </header>

        <section v-if="userinfo" class="user">
            <div class="head">
                <img :src="this.userinfo.profilePic" alt="">
                <div class="info">
                    <h1>{{this.userinfo.firstName}} {{this.userinfo.lastName}}</h1>
                    <h2>@{{this.userinfo.username}}</h2>
                    <h3>{{trad[`lng`][$store.state.user.language]}}</h3>
                </div>
            </div>

            <comp-catalog :title="trad[`lastShow`][$store.state.user.language]" v-if="true"/>

            <div class="last_show">

            </div>
        </section>

    </section>
</template>

<script>
import compNav from  '../components/Nav'
import compCatalog from  '../components/Catalog'
import axios from 'axios'
import {getErrorMessage} from '../helpers'
import trad from '../trad'

export default {
    data () {
        return {
            userinfo: null,
            trad
        }
    },
    components: {
        compNav,
        compCatalog
    },
    computed: {
    },
    methods:{
        async getUser() {
            try {
                if (this.$route.params.id) {
                    const res = await axios.get(`http://localhost:3000/users/${this.$route.params.id}`, {withCredentials: true});
                    console.log(res.data);
                    console.log(res.status);

                    if (res.data.success) {
                        if (res.data.user) {
                            this.userinfo = res.data.user
                        }
                        else {
                            this.$router.push('/')
                        }
                    }
                    else {
                        alert(getErrorMessage(res.data.error))
                    }
                }
                else {
                    this.$router.push('/')
                }
            } catch (ex) {
                console.log(ex)
            }
        }
    },
    created() {
    },
    mounted (){
        this.getUser()
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