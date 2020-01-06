<template>
    <section id="team">
        <div class="col-lg-7">
          <h2 class="big-h2">Nossa Equipe</h2>
          <p>Nossos exames priorizam o seu conforto. <br>Você terá acesso aos nossos médicos no Consultório de Imagem e poderá tirar todas as suas dúvidas.</p>
        </div>

        <div class="slide-container">
            <div class="slide-details">
                <p class="slide-details__category">{{ getAllTeam[activeNewsId].node.specialty }}</p>
                <h1 class="slide-details__name">{{ getAllTeam[activeNewsId].node.name | getFirstTwoNames }}</h1>
                <p class="slide-details__resume" >{{ getAllTeam[activeNewsId].node.profile | postExcerpt(100) }}</p>
                <g-link to="/equipe/" tag="button" class="slide-details__button">Saiba Mais</g-link>
                <div class="slide-details__arrows">
                  <div class="slide-details__previuos-btn" @click="goPrev"></div>
                  <div class="slide-details__next-btn" @click="goNext"></div>
                </div>      
            </div>
            <g-image alt="Imagem de destaque do médico" class="slide-image" :src="getAllTeam[activeNewsId].node.large_image" width="430" />
            <div class="slide-counter d-none d-lg-block">
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
        activeNewsId: 0
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
    margin-top: 4.5rem;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 16rem;
        bottom: 1.5rem;
        left: 0;
        background-color: #F1F3F8;
        z-index: -20;        
    }
}

.slide-counter {
    position: absolute;
    right: .5rem;
    transform: translate(-.5rem, -7rem);

    &__first {
        font-size: 2rem;
        margin-bottom: 0;
        transform: translateX(-1.5rem);
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

.slide-image {
    position: absolute;
    bottom: 1.5rem;
    right: 7.5rem;
    z-index: -10;
    width: 350px;
}

.slide-details {

    & * {
        color: #fff;
    }
    
    transform: translateX(-9rem);
    padding: 1.5rem 6rem 1.5rem 9.5rem;
    width: 36.55rem;
    background-color: #1B333F;

    &__category {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: .66rem;
    }

    &__name {
        font-size: 3.33rem;
        font-weight: 400;
        line-height: 1.1;
        min-height: 7.22rem;
    }

    &__resume {
        font-size: .77rem;
        line-height: 1.33;
    }

    &__button {
        margin-top: 1.5rem;
        @include outline-button(#fff, $accent-color-1);
    }

    &__arrows {
        position: absolute;
        right: -4rem;
        bottom: 0;
        display: flex;
    }

    &__previuos-btn, &__next-btn {
        width: 4rem;
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


