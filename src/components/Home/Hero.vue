<template>
    <div>
        <div class="hero-svg"></div>
        <section id="hero-section" class="hero-section">
            <div class="row hero">
                <div class="col-lg-5 px-lg-0">
                    <h1 class="hero__title">Ética. Excelência. Dedicação e Acolhimento.</h1>
                    <p class="hero__subtitle">A clínica de diagnóstico por imagem que foca em inovação em satisfação do cliente.</p>
                    <button @click="openTour">Faça um tour virtual</button>
                </div>
                <div class="col-lg-6 text-center text-lg-right mt-5 mt-lg-0">
                <div class="hero__video">
                    <iframe title="Vídeo sobre a clínica" src="https://www.youtube.com/embed/weChCsLXCWk?rel=0&fs=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <!-- <iframe title="Vídeo sobre a clínica" src="https://player.vimeo.com/video/391279746" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> -->
                </div>
                </div>
            </div>
        </section>
        <!-- <g-image class="symbol-top" src="../../assets/images/symbol-overlay.svg" /> -->
    </div>
</template>

<script>
export default {
  methods: {
    openTour() {
      if (process.isClient) {
        window.open('http://tourvirtualbrasil.com.br/tour_virtual_fonte_imagem/index.html', '_blank');
      }
    }
  }    
}
</script>


<style lang="scss">

.hero-svg {

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 65rem;
    // clip-path: polygon(0 0, 100% 0, 100% 74%, 0 59%);
    clip-path: polygon(0 0, 100% 0, 100% 59%, 0 74%);
    background: linear-gradient(180deg, darken(#3ED6BE, 15%) 20%, #03756D 75%);
    transform: translateY(-5rem);
    z-index: -999;
    overflow: hidden;
  
    @media(min-width: 576px) {
        // width: 100%;
        height: 78rem;
        // background-color: transparent;
        // background: url("../../assets/images/img-hero-graphic_5.svg");
        // background-size: contain;
        // background-repeat: no-repeat;
        // background-position: top;    
    }

    @media(min-width: 768px) {
        width: 200%;
        background-color: transparent;
        background: url("../../assets/images/img-hero-graphic_5.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top;
        clip-path: none;         
    }

    @media(min-width: 992px) {
        width: 185%;
    }

    @media(min-width: 1050px) {
        width: 165%;
    }    

    @media(min-width: 1200px) {
        width: 130%;   
    }

    @media(min-width: 1340px) {
        width: 117%;   
    }

    @media(min-width: 1440px) {
        transform: translateY(-2rem);
    } 

    @media(min-width: 1535px) {
        transform: translateY(-5rem);
    }  

    @media(min-width: 1635px) {
        width: 110%;
        transform: translateY(-4rem);
    }  

    // @media(min-width: 1600px) {
    //     transform: translateY(-8rem);
    // } 
    
    @media(min-width: 1700px) {
        width: 120%;
        transform: translateY(-13rem);
    }  

    // @media(min-width: 1740px) {
    //     width: 150%;
    //     transform: translateY(-23rem);
    // }      
    
    @media(min-width: 1800px) {
        transform: translateY(-14.5rem);
    } 
    
    // @media(min-width: 1900px) {
    //     width: 130%;
    //     transform: translateY(-21.5rem);
    // }   
    // @media(min-width: 1921px) { 
    //     transform: translateY(-15rem);     
    //     width: 2300px;
    // }
     @media(min-width: 1921px) {        
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 85rem;
        background-image: none;
        transform: translateY(-19rem);
        clip-path: polygon(0 0, 100% 0, 100% 60%, 0 74%);
        background: linear-gradient(180deg, darken(#3ED6BE, 10%) 20%, #03756D 75%);
    }

}

.hero-triangle{
    display: none;
}
@media(min-width: 1921px){
    .hero-section {
        position: relative;
        &::before{
            content: '';
            background-image: url('../../assets/images/fonte-imagem-path_cut.svg');
            width: 432px;
            height: 347px;
            position: absolute;
            z-index: 1;
            left: 0;
            bottom: -200px;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: auto;
        }

        .row{
            position: relative;
            z-index: 10;
        }
    }
}
@media(min-width: 2450px){
    .hero-section::before{
        bottom: -197px;
    }
}

@media(min-width: 2900px){
    .hero-section::before{
        bottom: -194px;
    }
}

@media(min-width: 3200px){
    .hero-section::before{
        bottom: -190px;
    }
}

@media(min-width: 3600px){
    .hero-section::before{
        bottom: -188px;
    }
}

.hero {
    margin: 3rem 0 16rem 0;
    color: #fff;

    @media(max-width: 880px){
        margin-bottom: 8rem;
    }

    &__title {
        color: #fff;
        font-size: 1.5rem;
        line-height: 1.5;
        font-weight: 600;  

        @media (min-width: 992px) {
            font-size: 2.2222rem;
            line-height: 1.3;
            margin-bottom: 1.5rem;
        }          
    }

    button {
        @include outline-button-inverted($accent-color-1);
        min-width: 14.38rem;
        margin-top: 1.5rem;
    }

    &__subtitle {
        color: #BBFFF7 !important;        
    }

    &__video {
        box-shadow: 0 2rem 4rem rgba($primary-color, .3);
        width: 100%;
        // height: 290px;
        padding-bottom: 56.25%;
        display: flex;

        @media(min-width: 768px) {
            //width: 100%;
            // height: 390px;            
        }

        @media(min-width: 992px) {
            // max-width: 480px;
            // height: 270px;
            transform: translate(6rem, .35rem);
            // margin-left: auto;
        }

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}



</style>

