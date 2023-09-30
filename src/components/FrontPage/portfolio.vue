<template>
    <div class="container-fluid portfolio-section">
        <div>
            <h2>Portfolio</h2>
            <h3 class="text-center container m-auto max-w-5xl text-base sm:text-lg">These are websites I've developed myself.</h3>
        </div>
        <div
            class="container">
            <div class="card">
                <div class="img-text-section">
                    <a href="https://martechsecrets.web.app/" target="_blank">
                    <img class="card-img" src="https://www.postmediasolutions.com/wp-content/uploads/2022/09/AudienceTargeting-1024x704.jpg" alt="Facebook-interests-finder-app"/>
                    </a>
                    <div class="card-text">
                        <h5 class="card-title font-bold">Facebook interest finder</h5>
                        <p class="card-description">Nagivating through Facebook hidden interests, to reach new audiences, that most of other people can't see</p>
                    </div>
                </div>
                <div class="icon-div">
                    <i class="fa-brands fa-js"></i>
                </div>
            </div>
            <div class="card">
                <div class="img-text-section">
                <a href="https://encode-decode-url.web.app/" target="_blank">
                <img class="card-img" src="https://www.commontools.org/articles/images/10/1.svg" alt="encode-decode-app"/>
                </a>
                <div class="card-text">
                    <h5 class="card-title font-bold">Encode-Decode URL</h5>
                    <p class="card-description">Easily encode and decode url that suits your need.</p>
                </div>
                </div>
                <div class="icon-div"><i class="fab fa-vuejs"></i></div>
            </div>
            <div class="card">
                <div class="img-text-section">
                    <a href="https://converrpage.com" target="_blank">
                    <img class="card-img" src="data:image/png;base64,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" alt="converrpage-logo"/>
                    </a>
                    <div class="card-text my-2">
                        <h5 class="card-title font-bold">ConverrPage</h5>
                        <p class="card-description">Business Website of ConverrPage created by Wordpress. Mainly use Elementor plugin and custom css.</p>
                    </div>
                </div>
                <div class="icon-div"><i class="fa-brands fa-wordpress"></i></div>
            </div>
            <div class="card">
                <div class="img-text-section">
                    <a href="https://guitarrich.net" target="_blank">
                    <img class="card-img" src="../../assets/guitarrich-logo.jpg" alt="guitarrich-logo"/>
                    </a>
                    <div class="card-text my-2">
                        <h5 class="card-title font-bold">Guitar Rich</h5>
                        <p class="card-description">Blog & Affiliate website for guitar and music.</p>
                    </div>
                </div>
                <div class="icon-div"><i class="fa-brands fa-wordpress"></i></div>
            </div>
            <div class="card">
                <div class="img-text-section">
                    <a href="https://thaispaburapa.com/" target="_blank">
                        <img class="card-img" src="https://meghaviwellness.com/wp-content/uploads/2023/06/couplee-main.jpg"/>
                    </a>
                    <div class="card-text">
                        <h5 class="card-title font-bold">Thai Spa Burapa</h5>
                        <p class="card-description">Website of Spa and Massage school in Trat</p>
                    </div>
                </div>
                <div class="icon-div"><i class="fa-brands fa-wordpress"></i></div>
            </div>
            <div class="card">
                <div class="img-text-section">
                    <a href="https://ballthatthana.com" target="_blank">
                        <img class="card-img" src="data:image/png;base64,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" alt="ballthatthana-logo"/>
                    </a>
                    <div class="card-text my-2">
                        <h5 class="card-title font-bold">My Wordpress Website</h5>
                        <p class="card-description">Where I share about digital marketing and much more.</p>
                    </div>
                </div>
                <div class="icon-div">
                    <i class="fa-brands fa-wordpress"></i>
                </div>
            </div>
        </div>
        <div class="my-6">
            <hr>
        </div>
        <div class="mb-6">
            <h3 class="mt-4 mb-2 text-center mx-auto max-w-5xl text-xl sm:text-2xl font-semibold">These are projects I've managed.</h3>
        </div>
        <div class="container">
            <div class="card">
                <div class="img-text-section">
                    <img class="card-img" src="data:image/png;base64,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" alt="converrpage-logo"/>
                    <div class="card-text overflow-hidden">
                        <h5 class="card-title font-bold">ConverrPage</h5>
                        <p class="card-description">Product Manager/ Webmaster</p>
                        <p class="card-description"> A web app that allows users to craft their own website or salepage easily, without any coding skills. Support most of social media tracking</p>
                    </div>
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

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 1200px;
    gap: 10px;
    box-sizing: border-box;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    margin: 10px 0;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    max-width: 300px;
    height: 400px;
    background-color: #93B1A6;
    background: #93B1A6;
    color: white;
    padding: 20px;
    margin: 10px 20px;
    border-radius: 10px;
    flex-grow: 1;
}


img {
  width: 100%;
  max-width: 300px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
}

.icon-div {
    text-align: center;
}

.card-description{
    height: 50px;
}

@media(max-width:768px) {
    .card {
        /* flex: 0 0 calc(50% - 10px); */
        margin: 20px;
    }
}


.card:hover, .card-image {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
}

.card-text {
    width: 100%;
    overflow: hidden;
}

.portfolio-section{
    background-color: #5C8374;
}

h2, h3, h4, h5, p {
    color: white;
}

</style>