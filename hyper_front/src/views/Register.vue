<template>

    <section class="register">
        <!-- NAV -->
        <nav>
            <img class="bounceInDown" src="../assets/cornflux.png" alt="">
        </nav>

        <!-- BG WALLPAPER -->
        <div class="bg-cover">
        </div>

        <!-- BOX -->
        <div class="box-container">
            <div class="box flipInY">
                <h2>Sign up</h2>
                <form @submit.prevent="register()">
                    <md-field>
                        <label>First Name</label>
                        <md-input type="text" v-model="formdata.first_name"></md-input>
                    </md-field>
                    <md-field>
                        <label>Last Name</label>
                        <md-input type="text" v-model="formdata.last_name"></md-input>
                    </md-field>
                    <md-field>
                        <label>Username</label>
                        <md-input type="text" v-model="formdata.username"></md-input>
                    </md-field>
                    <md-field>
                        <label for="font">Language</label>
                        <md-select name="font" id="font" type="text" v-model="formdata.language">
                            <md-option value="fr">Français</md-option>
                            <md-option value="en">English</md-option>
                        </md-select>
                    </md-field>
                    <md-field>
                        <label>Email</label>
                        <md-input type="email" v-model="formdata.email"></md-input>
                    </md-field>
                    <md-field>
                        <label>Password</label>
                        <md-input type="password" v-model="formdata.password">></md-input>
                    </md-field>
                
                    <button class="register-button hvr-forward">Sign Up</button>
                    <router-link tag="a" to="/login" class="another">Login</router-link>
                </form>
            </div>
        </div>
    </section>

</template>

<script>

// import '../styles/_global.scss'
export default {
    data () {
        return {
            //INPUT INFOS
            formdata:{
                first_name:'',
                last_name:'',
                username:'',
                language:'',
                email:'',
                password:''
            }
        }
    },
    components: {
    },
    computed: {
    },
    methods:{
        //REGISTER FORM
        async register () {
            let data = {
                first_name: this.formdata.first_name,
                last_name: this.formdata.last_name,
                username: this.formdata.username,
                language: this.formdata.language,
                email: this.formdata.email,
                password: this.formdata.password,
                
            }
            console.log(data);
            // AXIOS BDD
            // try {
            //     const res = await this.$api.post('/auth/register', data);
            //     console.log(res.data);
            //     console.log(res.status);
            //     //Gestion des erreurs 203
            //     if(res.data.error == "validation_error")
            //         alert(res.data.message);
            //     else if(res.data.error == "user_already_use")
            //         alert(res.data.message);
            //     else if(res.data.error == "email_already_use")
            //         alert(res.data.message);
            //     else if(res.data.success == "OK")
            //         this.$router.push('/login');
            // } catch (ex) {
            //     console.log(ex);
            // }
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