<template>
    <section class="home">
        <header>
            <comp-nav v-if="true"/>
        </header>
        <h1>Home</h1>
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
        compNav
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

section.home {
    h1 {
        color: $white;
    }
    nav  {
    }

}

</style>