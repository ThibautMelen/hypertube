<template>

    <section class="register">
        <!-- NAV -->
        <nav>
            <img class="bounceInDown" src="../assets/logo/logo_large_cornflux.png" alt="Logo Cornflux">
        </nav>

        <!-- BG WALLPAPER -->
        <div class="bg-cover">
        </div>

        <!-- BOX -->
        <div class="box-container">
            <div class="box flipInY">
                <h2>{{trad[`signup`]['english']}}</h2>
                <form @submit.prevent="register()">
                    <md-field :class="{'md-invalid': $v.formdata.firstName.$error}">
                        <label>{{trad[`fName`]['english']}}</label>
                        <md-input type="text" v-model="$v.formdata.firstName.$model"></md-input>
                        <span class="md-error">There is an error</span>
                    </md-field>
                    <md-field :class="{'md-invalid': $v.formdata.lastName.$error}">
                        <label>{{trad[`lName`]['english']}}</label>
                        <md-input type="text" v-model="$v.formdata.lastName.$model"></md-input>
                        <span class="md-error">There is an error</span>
                    </md-field>
                    <md-field :class="{'md-invalid': $v.formdata.username.$error}">
                        <label>{{trad[`username`]['english']}}</label>
                        <md-input type="text" v-model="$v.formdata.username.$model"></md-input>
                        <span class="md-error">There is an error</span>
                    </md-field>
                    <md-field :class="{'md-invalid': $v.formdata.language.$error}">
                        <label for="font">Language</label>
                        <md-select name="font" id="font" type="text" v-model="$v.formdata.language.$model">
                            <md-option value="french">Français</md-option>
                            <md-option value="english">English</md-option>
                        </md-select>
                        <span class="md-error">There is an error</span>
                    </md-field>
                    <md-field :class="{'md-invalid': $v.formdata.email.$error}">
                        <label>Email</label>
                        <md-input type="email" v-model="$v.formdata.email.$model"></md-input>
                        <span class="md-error">There is an error</span>
                    </md-field>
                    <md-field :class="{'md-invalid': $v.formdata.password.$error}">
                        <label>{{trad[`pass`]['english']}}</label>
                        <md-input type="password" v-model="$v.formdata.password.$model"></md-input>
                        <span class="md-error">There is an error</span>
                    </md-field>
                    
                    <comp-slctimg v-model="$v.formdata.selectedProfilePic.$model" /> 

                    <button class="register-button hvr-forward">{{trad[`signup`]['english']}}</button>
                    <router-link tag="a" to="/login" class="another">{{trad[`signin`]['english']}}</router-link>
                </form>
            </div>
        </div>
    </section>

</template>

<script>
import trad from '../trad'
import compSlctimg from  '../components/Slctimg'
import axios from 'axios'
import {getErrorMessage} from '../helpers'
import { required, minLength, maxLength, between, email, alpha, alphaNum } from 'vuelidate/lib/validators'

export default {
    data () {
        return {
            //INPUT INFOS
            formdata:{
                firstName:'',
                lastName:'',
                username:'',
                language:'',
                email:'',
                password:'',
                selectedProfilePic: 'https://occ-0-55-56.1.nflxso.net/art/59fbc/1ce9bcd3d6f26195c1ab49cd2c691f5fc8f59fbc.png'
            },
            trad
        }
    },
    components: {
        compSlctimg
    },
    computed: {
    },
    validations: {
        formdata:{
            firstName: {
                minLength: minLength(2),
                maxLength: maxLength(30),
                required,
                alpha
            },
            lastName: {
                minLength: minLength(2),
                maxLength: maxLength(30),
                required,
                alpha
            },
            username: {
                minLength: minLength(2),
                maxLength: maxLength(30),
                alphaNum,
                required
            },
            language: {
                required,
                enum: value => ['english', 'french'].includes(value) ? true : false
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6),
                strong: value => value.match(/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/) ? true : false
            },
            selectedProfilePic: {
                required
            }
        },
    },
    methods:{
        //REGISTER FORM
        async register () {
            this.$v.$touch()
            if (this.$v.$invalid) {
                return false
            }
            let data = {
                firstName: this.formdata.firstName,
                lastName: this.formdata.lastName,
                username: this.formdata.username,
                language: this.formdata.language,
                email: this.formdata.email,
                password: this.formdata.password,
                profilePic: this.formdata.selectedProfilePic
            }
            console.log(data);

            try {
                const res = await axios.post('http://localhost:3000/users/register', data);
                console.log(res.data);
                console.log(res.status);

                if (res.data.success) {
                    this.$router.push('/login')
                }
                else {
                    alert(getErrorMessage(res.data.error))
                }
            } catch (ex) {
                console.log(ex)
            }
        }
    },
    created() {
    },
    mounted (){
    }
}

</script>

<style lang="scss" scoped>

@import '../styles/_global.scss';

section.register {
    nav  {
        // position: fixed;
        display: flex;
        align-items: center;
        z-index: 1;
        height: 150px;
        width: 100%;
        padding: 5px 4% 0px 4%;
        img {
            width: 200px;
            z-index: 5;
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
        background-image: url("../assets/bgregister.jpg")!important;
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

section.register div.box-container {
    margin-top: -20px;
    padding: 0px 0 20px 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    top: 150px;
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
            padding-top: 20px;
            input {
                -webkit-text-fill-color: white!important;
            }
            button.register-button {
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