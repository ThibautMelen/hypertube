<template>
    <section class="profile">

        <header>
            <comp-nav v-if="true"/>
        </header>

        <section class="user">
            <h1>MA PAGE PROFILE</h1>
        </section>

    </section>
</template>

<script>
import compNav from  '../components/Nav'

export default {
    data () {
        return {
            hello: `hey what's up`
        }
    },
    components: {
        compNav,
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

@import '../styles/_global.scss';


/*****************************************************************
	LARGE SCREEN
*****************************************************************/

section.profile {


    section.user  {
        // GLOBAL
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        // background-color: #fff;
        padding: 90px 4% 20px 4%;
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

    }
}




</style>