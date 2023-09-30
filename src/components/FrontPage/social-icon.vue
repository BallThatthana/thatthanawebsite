<template>
    <div class="container-fluid flex flex-column justify-evenly mt-6 mb-10 mx-10">
        <!-- <div @click="clickPhone" class="m-auto">
            <div v-if="changetext === true">
                <p class="font-bold">+66830644271</p>
            </div>
            <div v-else class="mx-6 sm:mx-16 text-4xl sm:text-5xl md:text-6xl social-icon">
                    <font-awesome-icon icon="mobile-screen-button" />
            </div>
        </div> -->
        <div class="mx-auto xs:mx-10 sm:mx-16 text-xl sm:text-3xl md:text-5xl social-icon">
            <a href="tel:+66830644271" target="_blank">PHONE</a>
        </div>
        <div class="mx-auto xs:mx-10 sm:mx-16 text-xl sm:text-3xl md:text-5xl social-icon">
            <a href="mailto:thatthana.d@gmail.com" target="_blank">MAIL</a>
        </div>
        <div class="mx-auto xs:mx-10 sm:mx-16 text-xl sm:text-3xl md:text-5xl social-icon">
            <a href="https://github.com/BallThatthana" target="_blank">GITHUB</a>
        </div>
        <div class="mx-auto xs:mx-10 sm:mx-16 text-xl sm:text-3xl md:text-5xl social-icon">
            <a href="https://youtube.com/@BallEcomThatthana" target="_blank">YOUTUBE</a>
        </div>
    </div>
</template>
<script>

export default{
    components: {
    },
    data(){
        return {
            changetext: false
        }
    },
    methods: {
        clickPhone(){
            this.changetext = !this.changetext;
        }
    }

}

</script>
<style scoped>

.social-icon {
    transition: color 0.3s, font-size 0.3s, transform 0.3s;
}
.social-icon:hover{
    color: grey;
    font-size: 450%;
    transform: translate(2px);
}

@media (max-width: 765px) {
.social-icon:hover{
    color: grey;
    font-size: 350%; /*150 is default */
    transform: translate(2px);
}
}
</style>