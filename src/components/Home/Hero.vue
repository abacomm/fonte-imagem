<template>
    <div>
        <div class="hero-svg"></div>
        <section id="hero-section">
            <div class="row hero">
                <div class="col-lg-6 px-lg-0">
                    <h1 class="big-h2">Exercendo a medicina com ética e competência</h1>
                    <p>A clínica de diagnóstico por imagem com médicos que tem um sonho em comum: Inovação e ênfase na satisfação do cliente.</p>
                    <button @click="openTour">Faça um tour virtual</button>
                </div>
                <div class="col-lg-6 text-center text-lg-right mt-5 mt-lg-0">
                <div class="hero__video">
                    <iframe title="Vídeo sobre a clínica" src="https://www.youtube.com/embed/lM02vNMRRB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    clip-path: polygon(0 0, 100% 0, 100% 74%, 0 59%);
    background: linear-gradient(180deg, darken(#3ED6BE, 15%) 20%, #03756D 75%);
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
        width: 189%;
        background-color: transparent;
        background: url("../../assets/images/img-hero-graphic_5.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top;         
    }

    @media(min-width: 992px) {
        width: 144%;
    }

    @media(min-width: 1200px) {
        width: 117%;   
    }
    
    @media(min-width: 1600px) {
        transform: translateY(-3rem);
    } 
    
    @media(min-width: 1700px) {
        transform: translateY(-5rem);
    }  
    
    @media(min-width: 1800px) {
        transform: translateY(-9rem);
    } 
    
    @media(min-width: 1900px) {
        transform: translateY(-12.5rem);
    }   

    @media(min-width: 1921px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 85rem;
        background-image: none;
        clip-path: polygon(0 0, 100% 0, 100% 74%, 0 59%);
        background: linear-gradient(180deg, #3ED6BE 20%, #03756D 75%);
    }
}

.hero {
    margin: 3rem 0 16rem 0;
    color: #fff;

    h1 {
        color: #fff;
        font-weight: 500;
    }

    button {
        @include outline-button(#fff, $accent-color-1);
        min-width: 14.38rem;
        margin-top: 3rem;
    }

    &__video {
        box-shadow: 0 2rem 4rem rgba($primary-color, .3);
        width: 100%;
        max-width: 480px;
        height: 286px;
        display: flex;
        @media(min-width: 992px) {
            transform: translateY(-1.5rem);
            margin-left: auto;
        }

        iframe {
            width: inherit;
            height: inherit;
        }
    }
}

</style>

