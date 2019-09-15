<template>
    <section class="settings">

        <header>
            <comp-nav v-if="true"/>
        </header>

        <section class="container">
            <div class="editProfile">
                <h1>Edit profile</h1>

                <div class="box fadeInDownBig">
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
                    
                        <button class="settings-button hvr-forward">Edit Settings</button>
                    </form>
                </div>
                
            </div>

        </section>

    </section>
</template>

<script>
import compNav from  '../components/Nav'

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
        compNav,
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

/*****************************************************************
	LARGE SCREEN
*****************************************************************/
section.settings {

    section.container  {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 85px 20% 20px 20%;

        div.editProfile {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            padding: 30px 20px;
            width: 100%;

            h1 {
                color: $eb;
                font-size: 25px;
                font-weight: 700;
                margin-bottom: 20px;
            }


            button.settings-button {
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
        }
    }


}



/*****************************************************************
    MIDDLE SCREEN
*****************************************************************/
@media screen and (max-width: 900px) {
    section.settings  {

    }
}


/*****************************************************************
    SMALL SCREEN
*****************************************************************/
@media screen and (max-width: 550px) {
    section.container  {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 85px 0 20px 0!important;

        div.editProfile {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            padding: 30px 20px;
            width: 100%;

        }
    }

}




</style>