<template>

    <section class="reset">
        <!-- NAV -->
        <nav>
            <img src="../assets/cornflux.png" alt="">
        </nav>

        <!-- BG WALLPAPER -->
        <div class="bg-cover">
        </div>

        <!-- BOX -->
        <div class="box-container">
            <div class="box fadeInDownBig">
                <h2>Forgot Password ?</h2>
                <form @submit.prevent="reset()">
                    <p><i>We will send you an email with instructions on how to reset your password.</i></p>
                    <md-field>
                        <label>Email</label>
                        <md-input type="email" v-model="formdata.email"></md-input>
                    </md-field>
                    <button class="reset-button hvr-forward">Email Me !</button>
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
                email:''
            }
        }
    },
    components: {
    },
    computed: {
    },
    methods:{
        //reset FORM
        async reset () {
            let data = {
                email: this.formdata.email,                
            }
            console.log(data);
            // AXIOS BDD

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

section.reset {
    nav  {
        position: fixed;
        display: flex;
        align-items: center;
        z-index: 1;
        height: 100px;
        width: 100%;
        padding: 5px 4% 0px 4%;
        img {
            width: 150px;
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
        background-image: url("../assets/bgreset.jpg")!important;
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

section.reset div.box-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    top: 150px;
    height: 100vh;
    align-items: center;
    div.box {
        width: 450px;
        background: #ffffffd4;;
        border-radius: 20px;
        padding: 60px 60px 50px 60px;
        h2 {
            color: $joker;
            font-size: 30px;
        }
        form {
            padding-top: 20px;
            input {
                -webkit-text-fill-color: #424242!important;
            }
            button.reset-button {
                color: #fff;
                background: $poseidon;
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
                color: $joker;
            }
        }

    }

}

</style>