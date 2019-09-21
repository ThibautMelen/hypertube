<template>

    <section class="login">
        <!-- NAV -->
        <nav>
            <img class="bounceInDown" src="../assets/logo/logo_large_cornflux.png" alt="Logo Cornflux">
        </nav>

        <!-- BG WALLPAPER -->
        <div class="bg-cover">
        </div>

        <!-- BOX -->
        <div class="box-container">
            <div class="box lightSpeedIn">
                <h2>Sign in</h2>
                <form @submit.prevent="login()">
                    <md-field>
                        <label>Username</label>
                        <md-input type="text" v-model="formdata.username"></md-input>
                    </md-field>
                    <md-field>
                        <label>Password</label>
                        <md-input type="password" v-model="formdata.password"></md-input>
                    </md-field>
                    <button class="login-button hvr-forward">Sign In</button>
                    <router-link tag="a" to="/reset1" class="another">Forgot Password ?</router-link>
                    <router-link tag="a" to="/register" class="another">Sign Up Now !</router-link>
                </form>
            </div>
        </div>
    </section>

</template>

<script>

import axios from 'axios'
import helpers from '../helpers'

export default {
    data () {
        return {
            //INPUT INFOS
            formdata:{
                username:'',
                password:''
            }
        }
    },
    components: {
    },
    computed: {
    },
    methods:{
        //LOGIN FORM
        async login () {
            let data = {    
                username: this.formdata.username,    
                password: this.formdata.password    
            }
            console.log(data)

            try {
                const res = await axios.post('http://localhost:3000/users/login', data);
                console.log(res.data);
                console.log(res.status);

                if (res.data.success) {
                    this.$cookies.set('user_token', res.data.token)
                    this.$store.commit('SET_USER', res.data.userInfos)
                    this.$router.push('/')
                }
                else {
                    alert(helpers.getErrorMessage('loginError'))
                }
            } catch (ex) {
                console.log(ex)
            }
        },
    },
    created() {
    },
    mounted (){
    }
}

</script>

<style lang="scss" scoped>

@import '../styles/_global.scss';

section.login {
    nav  {
        position: fixed;
        display: flex;
        align-items: center;
        z-index: 1;
        height: 150px;
        width: 100%;
        padding: 5px 4% 0px 4%;
        img {
            width: 200px;
        }
    }
    div.bg-cover {
        min-height: 100%;
        min-width: 100%;
        display: block;
        position: relative;
        background-color: $gotham;
    }
    div.bg-cover::after {
        content: "";
        background-image: url("../assets/bglogin.jpg")!important;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; 
        opacity: 0.5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: fixed;
        z-index: 0;
        width: 100vw;
        height: 100vh;
        opacity: 0.2;
    }
}

section.login div.box-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    top: 150px;
    height: 100vh;
    align-items: center;
    div.box {
        width: 450px;
        background: #00000078;
        border-radius: 20px;
        padding: 60px 60px 50px 60px;
        h2 {
            color: white;
            font-size: 30px;
        }
        form {
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            input {
                -webkit-text-fill-color: white!important;
            }
            button.login-button {
                color: #fff;
                background: $blood;
                padding: 15px;
                width: 100%;
                text-align: center;
                font-size: 17px;
                border-radius: 10px;
                margin: 15px 0px;
                cursor: pointer;
            }
            a.another {
                cursor: pointer;
                color: #424242;
            }
        }
    }

}

</style>