<template>
    <div class="container-fluid">
        <div>
            <h2>Portfolio</h2>
            <h3 class="text-center container mx-auto max-w-5xl text-base sm:text-lg">These are projects I've developed myself.</h3>
        </div>
        <div 
            class="p-10 flex justify-between items-stretch content-center flex-wrap grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-items-center items-center">
            <div class="card text-center py-6 px-4 max-w-sm rounded-xl overflow-hidden">
                <a href="https://martechsecrets.web.app/" target="_blank">
                <img class="card-img m-auto w-full aspect-square object-cover" src="https://zbase-global.zingfront.com/saasbox/resources/jpg/Facebook-interest-lists__20edf8170015769067a2e115aa823651__20edf8170015769067a2e115aa823651.jpg" alt="Facebook-interests-finder-app"/>
                <div class="card-text my-2">
                    <h5 class="card-title font-bold">Facebook interest finder</h5>
                    <p class="card-description">Nagivating through Facebook hidden interests, to reach new audiences, that most of other people can't see</p>
                </div>
                <i class="fa-brands fa-js"></i>
                </a>
            </div>
            <div class="card text-center py-6 px-4 max-w-sm rounded-xl overflow-hidden">
                <a href="https://encode-decode-url.web.app/" target="_blank">
                <img class="card-img m-auto w-full aspect-square object-cover" src="https://ds2converter.com/wp-content/uploads/2015/07/convert-icon.png" alt="encode-decode-app"/>
                <div class="card-text my-2">
                    <h5 class="card-title font-bold">Encode-Decode URL</h5>
                    <p class="card-description">Easily encode and decode url that suits your need.</p>
                </div>
                <i class="fab fa-vuejs"></i>
                </a>
            </div>
            <div class="card text-center py-6 px-4 max-w-sm rounded-xl overflow-hidden">
                <a href="https://converrpage.com" target="_blank">
                <img class="card-img m-auto w-full aspect-square object-cover" src="data:image/png;base64,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" alt="converrpage-logo"/>
                <div class="card-text my-2">
                    <h5 class="card-title font-bold">ConverrPage</h5>
                    <p class="card-description">Business Website of ConverrPage created by Wordpress. Mainly use Elementor plugin and custom css.</p>
                </div>
                <i class="fa-brands fa-wordpress"></i>
                </a>
            </div>
        </div>
        <div>
            <h3 class="mt-4 mb-2 text-center container mx-auto max-w-5xl text-xl sm:text-2xl font-semibold">These are projects I've managed.</h3>
        </div>
        <div 
            class="p-10 justify-evenly items-stretch content-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-items-center items-center m-auto">
            <div class="card text-center py-6 px-4 max-w-sm rounded-xl overflow-hidden">
                <img class="card-img m-auto w-full aspect-square object-cover" src="data:image/png;base64,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" alt="converrpage-logo"/>
                <div class="card-text my-2">
                    <h5 class="card-title font-bold">ConverrPage</h5>
                    <p class="card-description">Position: Co-owner</p>
                    <p class="card-description"> A web app that allows users to craft their own website or salepage easily, without any coding skills. Support most of marketing tools such as Facebook Pixel, Tiktok Pixel, Google Tag Manager, Line Tag</p>
                </div>
            </div>
            <!-- <div class="card text-center py-6 px-4 max-w-sm rounded-xl overflow-hidden">
                <img class="card-img m-auto w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQvFGJAZxcB-gtSN2FxGNSPKCH4D-DRdSl7aR63o0LpHgJKRen_byPvRbudfPrGsXlLx8&usqp=CAU" alt="website builing"/>
                <div class="card-text my-2">
                    <h5 class="card-title font-bold">Encode-Decode URL</h5>
                    <p class="card-description">Easily encode and decode url that suits your need.</p>
                </div>
            </div>
            <div class="card text-center py-6 px-4 max-w-sm rounded-xl overflow-hidden">
                <img class="card-img m-auto w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQvFGJAZxcB-gtSN2FxGNSPKCH4D-DRdSl7aR63o0LpHgJKRen_byPvRbudfPrGsXlLx8&usqp=CAU" alt="website builing"/>
                <div class="card-text my-2">
                    <h5 class="card-title font-bold">Title</h5>
                    <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa soluta voluptatem. Atque dolores et quos voluptatibus. Exercitationem, illum earum?</p>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
export default{

}</script>

<style scoped>
.card {
    position: relative;
    overflow: hidden;
    margin: 10px 0;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    width: auto;
    cursor: pointer;
}

.card:hover, .card-image {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
}

.card-text {
    width: 100%;
}

@media (max-width: 768px) {
    .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

</style>