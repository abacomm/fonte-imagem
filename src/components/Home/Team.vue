<template>
    <section id="team">
        <div class="col-lg-7 my-5">
            <h2 class="big-h2">Nossa Equipe</h2>
            <p>Nossa equipe médica é o principal motivo do nosso sucesso.<br>Saiba mais sobre cada um, suas especialidades e publicações científicas.</p>
        </div>

        <div class="slide-container">
            <div class="slide-details">
                <p class="slide-details__category">{{ getAllTeam[activeNewsId].node.specialty }}</p>
                <h1 class="slide-details__name">{{ getAllTeam[activeNewsId].node.name | getFirstTwoNames }}</h1>
                <p class="slide-details__resume" >{{ getAllTeam[activeNewsId].node.profile | postExcerpt(95) }}</p>
                <g-link to="/equipe/" tag="button" class="slide-details__button">Saiba Mais</g-link>
                <div class="slide-details__arrows">
                  <div class="slide-details__previuos-btn" @click="goPrev"></div>
                  <div class="slide-details__next-btn" @click="goNext"></div>
                </div>
            </div>
            <g-image alt="Imagem de destaque do médico" class="slide-image d-none d-lg-block" :src="getAllTeam[activeNewsId].node.large_image" width="430" />
            <g-image alt="Imagem de destaque do médico" class="thumb-image d-block d-lg-none" :src="getAllTeam[activeNewsId].node.thumb_image" width="200" />
            <div class="slide-line d-block d-sm-none" :style="'transform: scaleX(' + lineScale + ');'" />
            <div class="slide-counter d-none d-md-block">
                <p class="slide-counter__first">{{ activeNewsId + 1 }}</p>
                <p class="slide-counter__second">{{ getAllTeam.length }}</p>
            </div>
        </div>

    </section>
</template>

<static-query>
{
  allAuthor {
	edges {
        node {
            id
            specialty
            name
            profile
            large_image
            thumb_image
        }
    }
  }
}
</static-query>

<script>
export default {
    data: () => ({
        activeNewsId: 0,
        lineScale: 0.1
    }),    
    computed: {
        getAllTeam() {
            return this.$static.allAuthor.edges.filter(val => val.node.large_image !== null)
        },     
    },      
    methods: {
        goPrev() {
            (this.activeNewsId <= 0) ? this.activeNewsId = 0 : this.activeNewsId --
        },
        goNext() {
            (this.activeNewsId >= this.getAllTeam.length - 1) ? this.activeNewsId = this.getAllTeam.length -1 : this.activeNewsId ++
        }
    },
    watch: {
        activeNewsId () {
            this.lineScale = (this.activeNewsId + 1) / this.getAllTeam.length
        }        
    },
    filters: {
      getFirstTwoNames (value) {
        if (!value) return ''
        let newValue = value
        let totalNames = value.split(' ').length
        if (totalNames === 2) {
            return newValue  
        } else {
            return value.split(' ').slice(0, -1).join(' ')  
        }
      } 
    }    
}
</script>

<style lang="scss">

.slide-container {
    margin-top: 3rem;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        width: 120%;
        @media(min-width: 480px) {
            background-color: #F1F3F8;
        }
        @media(min-width: 992px) {
            width: 100%;
        }
        height: 16rem;
        bottom: 1.5rem;
        left: 0;
        z-index: -20;        
    }
}

.slide-image {
    position: absolute;
    bottom: 1.5rem;
    right: 7.5rem;
    z-index: -10;
    width: 350px;
}

.thumb-image {
    position: absolute;
    top: -2.5rem;
    right: 0;
    width: 100px;
    height: 100px;
    box-shadow: 0 20px 40px rgba(0,0,0,.3);
    border-radius: .22rem;
    object-fit: cover;

    @media(min-width: 480px) {
        //top: -1.5rem;
        width: 115px;
        height: 115px;        
    }

    @media(min-width: 768px) {
        top: 0;
        right: -2rem;
        width: 220px;
        height: 220px;        
    }

}

.slide-line {
    height: .33rem;
    width: 110%;
    transition: transform .2s ease;
    background-color: rgba(#fff, .5);
    position: absolute;
    bottom: 0;
    left: -1rem;
    transform-origin: 0%;
}

.slide-counter {
    position: absolute;    
    right: .5rem;
    bottom: 1.5rem;

    &__first {
        font-size: 2rem;
        margin-bottom: 0;
        transform: translateX(-2rem);
    }

    &__second {
        position: relative;
        color: $light-grey;
        &::before {
            content: "";
            position: absolute;
            width: 30px;
            height: 1px;
            background-color: $light-grey;
            top: -.25rem;
            left: -1rem;
            transform: rotate(-45deg);
        }
    }
}

.slide-details {

    & * {
        color: #fff;
    }
    
    background: linear-gradient(to bottom, lighten($accent-color-1, 10%), $accent-color-1);
    transform: translateX(-9rem);
    padding: 1.5rem 6rem 1.5rem 9.5rem;
    width: 36.55rem;

    @media(min-width: 480px) {
        background: none;
        background-color: #1B333F;
    }

    &__category {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: .66rem;
    }

    &__name {
        font-size: 1.5rem;
        font-weight: 500;
        @media(min-width: 480px) {
            font-size: 3.33rem;
            font-weight: 400;
        }
        line-height: 1.1;
        max-width: 300px;
    }

    &__resume {
        max-width: 88%;
        @media(min-width: 480px) {
            max-width: 100%;
        }        
        font-size: .77rem;
        line-height: 1.33;
    }

    &__button {
        margin-top: 1.5rem;
        @include outline-button(#fff, $accent-color-1);
        border-color: rgba(#fff, .2);
    }

    &__arrows {
        display: flex;
        position: absolute;
        justify-content: space-between;
        bottom: 4rem;
        border: 1px solid rgba(#fff, .12);
        
        @media (min-width: 375px) {
            right: 7rem;
            bottom: -4rem;
        }

        @media(min-width: 480px) {
            left: none;
            right: 0;
            bottom: 1rem;
            border-style: none;
        }        
        @media(min-width: 768px) {
            right: -4rem;
            left: none;
            bottom: 0;
        }
    }

    &__previuos-btn, &__next-btn {
        width: 52vw;
        @media(min-width: 480px) {
            width: 4rem;
        }
        height: 4rem;
        background-color: #1B333F;
        transition: background-color .2s ease;

        &:hover {
            background-color: $accent-color-1;
            cursor: pointer;
        }
    }

    &__previuos-btn {
        background-image: url('../../assets/images/ic-long-arrow.svg');
        background-position: center;
        background-repeat: no-repeat;
        transform-origin: 50%;
        transform: rotate(180deg);    
    }

    &__next-btn {
        @extend .slide-details__previuos-btn;
        background-position-y: 48%;
        transform: rotate(0);
    }
}

</style>


