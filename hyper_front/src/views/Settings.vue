<template>
    <section class="settings">

        <header>
            <comp-nav v-if="true"/>
        </header>

        <section class="container">
            <div class="editProfile">
                <h1>{{trad[`editSet`][$store.state.user.language]}}</h1>

                <div class="box fadeInDownBig">
                    <form @submit.prevent="update()">
                        <md-field :class="{'md-invalid': $v.formdata.firstName.$error}">
                            <label>{{trad[`fName`][$store.state.user.language]}}</label>
                            <md-input type="text" v-model="$v.formdata.firstName.$model"></md-input>
                            <span class="md-error">There is an error</span>
                        </md-field>
                        <md-field :class="{'md-invalid': $v.formdata.lastName.$error}">
                            <label>{{trad[`lName`][$store.state.user.language]}}</label>
                            <md-input type="text" v-model="$v.formdata.lastName.$model"></md-input>
                            <span class="md-error">There is an error</span>
                        </md-field>
                        <md-field :class="{'md-invalid': $v.formdata.username.$error}">
                            <label>{{trad[`username`][$store.state.user.language]}}</label>
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
                            <label>{{trad[`editSet`][$store.state.user.language]}}</label>
                            <md-input type="password" v-model="$v.formdata.password.$model"></md-input>
                            <span class="md-error">There is an error</span>
                        </md-field>

                        <comp-slctimg v-model="$v.formdata.selectedProfilePic.$model" />
                    
                        <button class="settings-button hvr-forward">{{trad[`editSet`][$store.state.user.language]}}</button>
                    </form>
                </div>
                
            </div>

        </section>

    </section>
</template>

<script>
import compNav from  '../components/Nav'
import compSlctimg from  '../components/Slctimg'
import axios from 'axios'
import {getErrorMessage} from '../helpers'
import trad from '../trad'
import { required, minLength, maxLength, between, email, alpha, alphaNum } from 'vuelidate/lib/validators'

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
                password: '',
                selectedProfilePic: this.$store.state.user.profilePic,
            },
            trad
        }
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
                strong: value => !value || (value.length >= 6 && value.match(/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/)) ? true : false
            },
            selectedProfilePic: {
                required
            }
        },
    },
    components: {
        compNav,
        compSlctimg
    },
    computed: {
    },
    methods:{
        async update () {
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
            console.log(data)

            try {
                const res = await axios.patch('http://localhost:3000/users/update', data, {withCredentials: true});
                console.log(res.data)

                if (res.data.success) {
                    alert('Infos successfully updated !')
                    this.formdata.password = ''

                    if (res.data.updatedUser) {
                        console.log(res.data.updatedUser)
                        this.$store.commit('SET_USER', res.data.updatedUser)
                        this.$router.push('/');
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