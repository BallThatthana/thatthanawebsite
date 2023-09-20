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
        <div class="mx-auto xs:mx-10 sm:mx-16 text-4xl sm:text-5xl md:text-6xl social-icon">
            <a href="tel:+660830644271"><font-awesome-icon icon="mobile-screen-button" /></a>
        </div>
        <div class="mx-auto xs:mx-10 sm:mx-16 text-4xl sm:text-5xl md:text-6xl social-icon">
            <a href="mailto:thatthana.d@gmail.com" target="_blank"><font-awesome-icon icon="fa-regular fa-envelope" /></a>
        </div>
        <div class="mx-auto xs:mx-10 sm:mx-16 text-4xl sm:text-5xl md:text-6xl social-icon">
            <a href="https://github.com/BallThatthana" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
        </div>
        <div class="mx-auto xs:mx-10 sm:mx-16 text-4xl sm:text-5xl md:text-6xl social-icon">
            <a href="https://youtube.com/@BallEcomThatthana" target="_blank"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
        </div>
    </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default{
    components: {
        FontAwesomeIcon,
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