<template>
    <div class="image-select-global-container">
        <button type="button" @click="() => cursor--" :disabled="cursor === 0">{{ '<' }}</button>
        <div lass="image-select-container" v-for="(item, index) in profilePics.filter((v, i) => i >= cursor && i < cursor + pageSize)" :key="index">
            <img :class="item === value ? 'image-selected' : 'image-unselected'" @click="() => $emit('input', item)" :src="item" />
        </div>
        <button type="button" @click="() => cursor++" :disabled="cursor + pageSize === profilePics.length">{{ '>' }}</button>
    </div>
</template>


<script>

export default {
    props: ['value'],
    data () {
        return {
            profilePics: [
                'https://occ-0-55-56.1.nflxso.net/art/59fbc/1ce9bcd3d6f26195c1ab49cd2c691f5fc8f59fbc.png',
                'https://occ-0-55-56.1.nflxso.net/art/ecfae/3ea10459b6f40173f068bea5ce20b578505ecfae.png',
                'https://occ-0-55-56.1.nflxso.net/art/2b3fe/fffc0a1389068ba3f6eb6dab1812d3867b52b3fe.png',
                'https://occ-0-55-56.1.nflxso.net/art/179a8/514618e1d7554648a39e294f43585ddba07179a8.png',
                'https://occ-0-55-56.1.nflxso.net/art/da147/5a205b0510286b0ce3a5a4b79c4f1ab6510da147.png',
                'https://occ-0-55-56.1.nflxso.net/art/40f84/7ad9973040eb5073ac58dd4b0854ac6da9840f84.png',
                'https://occ-0-55-56.1.nflxso.net/art/1a036/00e902c321180b125d94f5d8e8a0bd03bf01a036.png',
                'https://occ-0-55-56.1.nflxso.net/art/5410e/d6bc705b8107d2f8263c74b02fe519a3d355410e.png',
                'https://occ-0-55-56.1.nflxso.net/art/b56ca/a89ed6b162d3c5916a1b38ea4dac7812afcb56ca.png'
            ],
            pageSize: 4,
            cursor: 0
        }
    },
    watch: {
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

/*****************************************************************
	IMPORTING STYLE
*****************************************************************/
@import '../styles/_global.scss';

/*****************************************************************
	LARGE SCREEN
*****************************************************************/
.image-select-global-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 10px;
    
    img, img.image-unselected {
        cursor: pointer;
        border-radius: 15px;
        padding: 5px;
        // max-width: 120px;
    }
    img.image-selected {
        border: 4px solid $yoda;
    }

    button {
        background: none;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
    }
}




/*****************************************************************
	MIDDLE SCREEN
*****************************************************************/
@media screen and (max-width: 900px) {
    
}


/*****************************************************************
	SMALL SCREEN
*****************************************************************/
@media screen and (max-width: 550px) {

}




</style>