<template>
    <div class="container-fluid flex flex-col sm:flex-row text-center justify-evenly mt-6 mb-10 mx-10 px-4">
        <!-- <div @click="clickPhone" class="m-auto">
            <div v-if="changetext === true">
                <p class="font-bold">+66830644271</p>
            </div>
            <div v-else class="mx-6 sm:mx-16 text-4xl sm:text-5xl md:text-6xl social-icon">
                    <font-awesome-icon icon="mobile-screen-button" />
            </div>
        </div> -->
        <div class="w-full mx-auto m-2 sm:mx-4 text-xl sm:text-3xl md:text-5xl social-icon border-2 border-black rounded-full py-2 px-4">
            <a href="tel:+66830644271" target="_blank">PHONE</a>
        </div>
        <div class="w-full mx-auto m-2 sm:mx-4 text-xl sm:text-3xl md:text-5xl social-icon border-2 border-black rounded-full py-2 px-4">
            <a href="mailto:thatthana.d@gmail.com" target="_blank">MAIL</a>
        </div>
        <div class="w-full mx-auto m-2 sm:mx-4 text-xl sm:text-3xl md:text-5xl social-icon border-2 border-black rounded-full py-2 px-4">
            <a href="https://github.com/BallThatthana" target="_blank">GITHUB</a>
        </div>
        <div class="w-full mx-auto m-2 sm:mx-4 text-xl sm:text-3xl md:text-5xl social-icon border-2 border-black rounded-full py-2 px-4">
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

.container-fluid {
    max-width: 1200px;
}

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
    font-size: 200%; /*150 is default */
    transform: translate(2px);
}
}
</style>