<template>

<div>

    <header class="online" v-if="online">
        <nav>
            <img class="logo" src="../../assets/cornflux.png" alt="">
        </nav>
    </header>
    
    <header class="offline" v-else>
        <!-- NAV -->
        <nav>
            <img src="../../assets/cornflux.png" alt="">
        </nav>

        <!-- BG WALLPAPER -->
        <div class="bg-cover">
        </div>

        <!-- BOX -->
        <div class="box-container">
            <div class="box">
                <h2>Sign in</h2>
                <form>
                    <md-field>
                        <label>Email</label>
                        <md-input type="email"></md-input>
                    </md-field>
                    <md-field>
                        <label>Password</label>
                        <md-input type="password"></md-input>
                    </md-field>

                </form>
            </div>
        </div>



    </header>


</div>


</template>

<script>

// import '../../styles/_global.scss'
export default {
    data () {
        return {
            hello: `header`,
            online: false
        }
    },
    components: {
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


@import '../../styles/_global.scss';

header.online {
    display: flex;
    align-items: center;

    height: 70px;
    padding: 5px 4% 0px 4%;
    background-color: $koala;

    nav  {
        img.logo {
            width: 140px;
        }
    }
}



</style>