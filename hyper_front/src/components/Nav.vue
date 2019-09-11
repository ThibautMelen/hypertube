<template>

    <nav>
        <!-- LOGO LEFT -->
        <router-link tag="a" to="/" class="logo hvr-up">
            <img class="bounceInDown" src="../assets/logo/logo_large_cornflux.png" alt="Logo Cornflux">
            <img class="bounceInLeft" src="../assets/logo/logo_min_cornflux.png" alt="Logo Cornflux">
        </router-link>

        <!-- INFO USER -->
        <div v-if="online" class="info">

            <!-- SEARCH -->
            <md-autocomplete
                class="search"
                v-model="selectedEmployee"
                :md-options="movies"
                md-layout="box">
                <label>Search...</label>
            </md-autocomplete>


            <!-- NOTIF -->
            <router-link class="notif hvr-up" tag="div" to="/">
                <div v-if="newNotif"></div>
                <svg viewBox="0 0 480.12 500"><path d="M181.51,431.49a71.37,71.37,0,0,0,51.06,68.15h0a71,71,0,0,0,90.94-68.14v-4h-142Z" transform="translate(-12.44 -2.5)"></path><path d="M488.73,364.77h0a30.89,30.89,0,0,0-1.73-2.65l.25-.23-50.83-50.83V186.45l-.05-6.43h-.09A185.65,185.65,0,0,0,399.67,76.2,183.85,183.85,0,0,0,76.08,134.82,184.07,184.07,0,0,0,68.82,180h-.23v131L20.67,359l-2.89,2.92.24.22a30.89,30.89,0,0,0-1.73,2.65A28.64,28.64,0,0,0,37,407.44v.29H468v-.28a28.64,28.64,0,0,0,20.73-42.67Z" transform="translate(-12.44 -2.5)"></path></svg>
            </router-link>

            <!-- ACCOUNT -->
            <div class="account">
                <img v-bind:src="`${userInfos.avatar}`" alt="avatar" class="hvr-up-min">
                <ul>
                    <router-link tag="a" to="/"><li>Profile</li></router-link>
                    <router-link tag="a" to="/"><li>Settings</li></router-link>
                    <a @click="logout()"><li>log out</li></a>
                </ul>
            </div>

        </div>

        <!-- AUTH RIGHT -->
        <div v-else class="auth">
            <router-link tag="a" to="/login" class="logo">
                <button class="hvr-up-min">login</button>
            </router-link>
            <router-link tag="a" to="/register" class="logo">
                <button class="hvr-up-min">register</button>
            </router-link>
        </div>

    </nav>

</template>



<script>

export default {
    data () {
        return {
            online: true,
            userInfos: {
                avatar: `https://s3.eu-west-3.amazonaws.com/pikomit/users/5d65017a357f9252bb73cd7a/zuc02XS4fqstLtESOZGAiVEgl6MjpF1566900850741_400px.jpg`
            },
            newNotif: false,
            selectedEmployee: null,
            movies: [
                'Avengers: Endgame ',
                'Spider-Man: Far From Home',
                'Toy Story 4',
                'Incredibles 2',
                'Once Upon a Time In Hollywood',
                'Inglourious Basterds',
                'Django Unchained',
                'Fury',
                'The Last: Naruto the Movie',
                'OSS 117',
                'Breaking Badel camino',
                'El Camino',
                'Shutter Island',
                'The Wolf of Wall Street'
            ]
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
nav {
    // GLOBAL
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 5px 4% 0px 4%;
    background-image: linear-gradient(90deg,#26303f 0,#26303f 0,#303d54 81%,#303d54);
    box-shadow: 0px 50px 50px -50px $arkham;

    //LOGO LEFT
    a.logo {
        img:nth-child(1) { display: block; width: 140px; }
        img:nth-child(2) { display: none }
    }

    // INFO
    div.info {
        display: flex;
        align-items: center;

        // SEARCH
        div.search {
            width: 30vw;
            min-width: 150px;
            margin: unset;
            margin-right: 25px;
            border-radius: 18px;
            box-shadow: unset;
            background-color: $vador!important;
        }

        // NOTIF
        div.notif {
            cursor: pointer;
            width: 24px;
            height: auto;
            padding-top: 7px;
            margin-right: 15px;
            fill: $eb;

            div {
                width: 20px;
                height: 20px;
                background: $love;
                border-radius: 50px;
                position: absolute;
                margin: -5px 0px 0px -5px;
            }        
        }

        // ACCOUNT INFO
        div.account {
            cursor: pointer;
            padding: 0 15px;
            z-index: 2;

            // AVATAR
            img {
                border-radius: 100%;
                width: 45px;
                box-shadow: 2px 2px 15px 0px $arkham;
                &:hover {
                    box-shadow: 5px 5px 20px 5px $arkham;
                }
            }

            // WRAPPER
            ul {
                visibility: hidden;
                opacity: 0;
                z-index: 200;
                position: absolute;
                top: 70px;
                right: calc(4% + 15px);
                width: 210px;
                background-color: $blackpearl;
                box-shadow: 10px 10px 20px 20px $vador;
                border-radius: 5px;
                
                transform: translateY(25px);
                transition: all .2s ease-in-out;
                
                // LIST
                li {
                    color: $eb;
                    padding: 20px 30px;
                    border-bottom : 2px solid #ffffff0d;
                    font-weight: 500;
                    font-size: 15px;
                    &:hover {
                        background-color: #a7b3b325;
                        transition: all .2s ease-in-out;
                    }
                }

                // LOGOUT
                a:nth-last-child(1) li{
                    text-align: right;
                    text-transform: uppercase;
                    white-space: nowrap;
                    font-weight: 300;
                    color: $love;
                    font-size: 14px;
                    border-bottom: none;
                }
            }

            // OPEN IT
            &:hover ul{
                visibility: visible;
                opacity: 1;
                transform: translateY(0);
            }

        }


    }

    //AUTH
    div.auth {
        a button {
            cursor: pointer;
            width: calc(10vw + 10px);
            min-width: 110px;
            height: 41px;
            box-shadow: 0 0 14px 2px rgba(0,0,0,.12);
            border-radius: 19px;
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 600;
            color: $white;
            background-color: $deepurple;
            box-shadow: 0 0 14px 2px rgba(0,0,0,.12);
        }
        a:nth-child(1) button {
            margin-right: 15px;
            background-color: $yoda;
        }
    }


}




/*****************************************************************
	MIDDLE SCREEN
*****************************************************************/
@media screen and (max-width: 900px) {
    nav {
        //LOGO LEFT
        a.logo {
            img:nth-child(1) { width: 120px; }
            img:nth-child(2) { display: none }
        }
    }
}


/*****************************************************************
	SMALL SCREEN
*****************************************************************/
@media screen and (max-width: 550px) {
    nav {
        //LOGO LEFT
        a.logo {
            img:nth-child(1) { display: none }
            img:nth-child(2) { display: block; width: 18px; }
        }
        ul {
            width: 100%!important;
            position: absolute!important;
            right: 0!important;
            top: unset!important;
            bottom: 0!important;
        }
        div.notif {
            margin-right: 0px!important;
        }
        div.search {
            margin-right: 15px!important;
        }
    }
}




</style>