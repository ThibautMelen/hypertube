<template>
    <section class="settings">

        <header>
            <comp-nav v-if="true"/>
        </header>

        <section class="container">
            <div class="editProfile">
                <h1>{{$t('auth.editSet')}}</h1>

                <div class="box fadeInDownBig">
                    <form @submit.prevent="update()">
                        <md-field>
                            <label>{{$t('auth.fName')}}</label>
                            <md-input type="text" v-model="formdata.firstName"></md-input>
                        </md-field>
                        <md-field>
                            <label>{{$t('auth.lName')}}</label>
                            <md-input type="text" v-model="formdata.lastName"></md-input>
                        </md-field>
                        <md-field>
                            <label>{{$t('auth.username')}}</label>
                            <md-input type="text" v-model="formdata.username"></md-input>
                        </md-field>
                        <md-field>
                            <label for="font">{{$t('auth.lang')}}</label>
                            <md-select name="font" id="font" type="text" v-model="formdata.language">
                                <md-option value="french">Français</md-option>
                                <md-option value="english">English</md-option>
                            </md-select>
                        </md-field>
                        <md-field>
                            <label>Email</label>
                            <md-input type="email" v-model="formdata.email"></md-input>
                        </md-field>
                        <md-field>
                            <label>{{$t('auth.pass')}}</label>
                            <md-input type="password" v-model="formdata.password">></md-input>
                        </md-field>
                    
                        <button class="settings-button hvr-forward">{{$t('auth.editSet')}}</button>
                    </form>
                </div>
                
            </div>

        </section>

    </section>
</template>

<script>
import compNav from  '../components/Nav'
import axios from 'axios'
import {getErrorMessage} from '../helpers'
import i18n from '../i18n'

export default {
    data () {
        console.log(this.$store.state.user)
        return {
            formdata: {
                firstName: this.$store.state.user.firstName,
                lastName: this.$store.state.user.lastName,
                username: this.$store.state.user.username,
                language: this.$store.state.user.language,
                email: this.$store.state.user.email,
                password: ''
            }
        }
    },
    components: {
        compNav,
    },
    computed: {
    },
    methods:{
        async update () {
            let data = {
                firstName: this.formdata.firstName,
                lastName: this.formdata.lastName,
                username: this.formdata.username,
                language: this.formdata.language,
                email: this.formdata.email,
                password: this.formdata.password
            }
            console.log(data)

            // this.$i18n.locale = data.language;
            // this.$router.push({
            //     params: { lang: data.language }
            // })

            try {
                const res = await axios.patch('http://localhost:3000/users/update', data, {withCredentials: true});
                console.log(res.data)

                if (res.data.success) {
                    alert('Infos successfully updated !')
                    this.formdata.password = ''

                    if (res.data.updatedUser) {
                        console.log(res.data.updatedUser)
                        this.$store.commit('SET_USER', res.data.updatedUser)
                    }
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