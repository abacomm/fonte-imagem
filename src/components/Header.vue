<template>
    <div style="margin-bottom: 13rem" :class="{ 'white-text': isWhite && !hitPosition }">
          <div class="fixed-top" :class="{ resized: hitPosition }">
            <div class="top-bar d-none d-lg-block">
                <div class="row">
                    <div class="col-12">
                        <small><font-awesome :icon="['fas', 'phone-alt']"/>&nbsp;(21) 3591-6886&nbsp;&nbsp;|&nbsp;&nbsp;<font-awesome :icon="['fab', 'whatsapp']"/>&nbsp;(21) 3591-6886&nbsp;&nbsp;|&nbsp;&nbsp;<font-awesome :icon="['fas', 'map-marker-alt']"/>&nbsp;Rua Fonte da Saudade, 277 - Lagoa, RJ&nbsp;&nbsp;&nbsp;<g-link to="https://netpacs.fonteimagem.com.br/Netpacs-web/login?"><button class="colored-button">Acesso do Médico</button></g-link></small>
                    </div>
                </div>
            </div>
            <div class="header-container" style="max-height: 5rem;" :class="{ resized : hitPosition }">
                <header class="header" style="max-height: 3rem;">
                    <div class="logo-container">
                        <div class="logo-container__bg" :class="{ resized: hitPosition }"></div>
                        <g-link to="/"><g-image :class="{ resized : hitPosition }" alt="Imagem da logo Fonte Imagem" src="../assets/images/logo-colored.svg" width="157" /></g-link>
                    </div>

                    <nav role="navigation">
                        <ul class="desktop-navigation__nav" :class="{ resized : hitPosition }">
                            <li class="desktop-navigation__nav__item"><g-link class="desktop-navigation__nav__anchor" to="/quem-somos/">Quem Somos</g-link></li>
                            <li class="desktop-navigation__nav__item"><g-link class="desktop-navigation__nav__anchor" to="/exames/">Exames</g-link></li>
                            <li class="desktop-navigation__nav__item"><g-link class="desktop-navigation__nav__anchor" to="/artigos/">Artigos</g-link></li>
                            <li class="desktop-navigation__nav__item"><g-link class="desktop-navigation__nav__anchor" to="/equipe/">A Equipe</g-link></li>
                            <li class="desktop-navigation__nav__item"><g-link class="desktop-navigation__nav__anchor" to="/convenios/">Convênios</g-link></li>
                            <li class="desktop-navigation__nav__item"><g-link class="desktop-navigation__nav__anchor" to="/contato/">Contato</g-link></li>
                        </ul>
                    </nav>   

                    <div class="mobile-navigation">
                        <input type="checkbox" class="mobile-navigation__checkbox" id="navi-toggle">
                        <label for="navi-toggle" class="mobile-navigation__button">
                        <span class="mobile-navigation__icon"></span>
                        </label>
                        <div class="mobile-navigation__background">&nbsp;</div>

                        <nav class="mobile-navigation__nav">
                            <ul class="mobile-navigation__list">
                                <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/">Home</g-link></li>
                                <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/quem-somos/">Quem Somos</g-link></li>
                                <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/exames/">Exames</g-link></li>
                                <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/artigos/">Artigos</g-link></li>
                                <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/equipe/">A Equipe</g-link></li>
                                <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/convenios/">Convênios</g-link></li>
                                <li class="mobile-navigation__item"><g-link class="mobile-navigation__link" to="/contato/">Contato</g-link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
          </div>
    </div>

</template>

<script>
export default {
  props: {
    isWhite: { type: Boolean, required: false },
  },
  data: () => ({
    scrollPosition: 0,
    hitPosition: false
  }),
  created() {
    if (process.isClient) {
      window.addEventListener('scroll', this.getScrollEvent)
    }
  },
  destroyed(){
    if (process.isClient) {
      window.removeEventListener('scroll', this.getScrollEvent)
    }
  },  
  computed: {
    getFirstPosts() {
      return this.$static.allPost.edges.slice(Math.max(this.$static.allPost.edges.length - 3, 0))
    },     
  },
  methods: {
    getScrollEvent () {
      if (process.isClient) {
        this.scrollPosition = window.pageYOffset
        if (this.scrollPosition >= 70  ) {
          this.hitPosition = true
        } else {
          this.hitPosition = false
        }
      }
    }      
  }
      
}
</script>


<style lang="scss">

.colored-button {
    @include colored-button(darken($accent-color-1, 7%));
    padding: .4rem .5rem .35rem;
    font-size: .66rem;
    letter-spacing: 0;
}

.top-bar {
    text-align: right;
    padding: .5rem 0;
    z-index: 1000;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, transparent 30%, rgba(0,0,0,.12) 100%);
      width: 100%;
      height: 1px;
    }
}

.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 .88rem;
  z-index: 900;
  transition: all .35s ease;

  &.resized {
    &::before {
      content: "";
      position: absolute;
      background-color: #fff;
      top: 0;
      left: 0;
      right: 0;
      height: 5.38rem;
      width: 100vw;
      box-shadow: 0 10px 20px -10px rgba($primary-color, .12);
    }
  }
}

.white-text {
  * {
    color: #fff !important;
  }
}

.header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 0 1.5rem 0;
    transition: padding 0.2s ease;

    @media(min-width: 576px) {
      max-width: 540px;
    }   
    @media(min-width: 768px) {
      max-width: 720px;
    }   
    @media(min-width: 992px) {
      max-width: 960px;
    }   
    @media(min-width: 1200px) {
      max-width: 1140px;
    }
    
    margin: 0 auto;     

    .logo-container {
      padding: 1rem 0 0;
      position: relative;
      transition: all .2s ease;

      @media(min-width: 992px) {
          padding: 1rem;
          transform: translateY(-3rem);
      }

      img {
        transition: transform .35s ease;
        transform-origin: 0% 5%;
        &.resized {
          transform: scale(.65);
        }
        transform: translateX(1rem);
        @media(min-width: 992px) {
          transform: translateX(0);
        }
      }

      &__bg {
          position: absolute;
          top: 0;
          left: -.2rem;
          width: 200px;
          height: 146px;
          border-radius: 0 0 1rem 1rem;
          background-color: #fff;
          z-index: -9;
          opacity: 1;
          transition: all .2s ease;

          &.resized {
            opacity: 0;
          }
      }      
    }
}

.desktop-navigation__nav {
  
  display: none;
  transition: margin .35s ease;

  @media (min-width: 992px) {
    display: block;
    margin-top: 1.5rem;

    &.resized {
      margin-top: .4rem;
    }
  }

  list-style-type: none;
  margin-bottom: 0 !important;

  @media(min-width: 768px) {
    height: 1.15rem;
  }

  &__item:not(:last-child) {
    @media (min-width: 576px) {
      margin-right: 1.55rem;
    }
  }

  &__item, &__anchor {
    display: inline-block;
    position: relative;
    color: #a7b2c0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: .77rem;
    line-height: 1;
    letter-spacing: 0.75px;
    padding-bottom: 1rem;
    
    ul {
      display: none;
    }
    
    &:hover,
    &.active--exact {
      cursor: pointer;
      color: $primary-color;
    }       
  }
}

// Mobile version
.mobile-navigation {
  @media (min-width: 992px) {
    display: none;
    z-index: -99999;
    visibility: none;
  }

  &__checkbox {
    display: none;
  }

  &__button {
    background-color: #fff;
    height: 4rem;
    width: 4rem;
    position: fixed;
    top: 1rem;
    right: 1rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba($primary-color, 0.12);
    text-align: center;
    cursor: pointer;
  }

  &__background {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    background-image: radial-gradient(
      $accent-color-1,
      darken($accent-color-1, 10%)
    );
    z-index: 1000;
    transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &__nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    opacity: 0;
    width: 0;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &__brand {
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.1;
  }

  &__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    list-style: none;
    text-align: center;
    padding: 0;
    width: 100%;
  }

  &__item {
    margin: 1rem 0;
  }

  &__link {
    font-size: 1.35rem;
    color: #fff;
  }

  &__checkbox:checked ~ &__background {
    transform: scale(48);
  }

  &__checkbox:checked ~ &__nav {
    opacity: 1;
    width: 100%;
  }

  &__icon {
    position: relative;
    margin-top: 2rem;

    &,
    &::before,
    &::after {
      width: 1.5rem;
      height: 2px;
      background-color: $primary-color;
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.5rem;
    }
    &::after {
      top: 0.5rem;
    }
  }

  &__checkbox:checked + &__button &__icon {
    background-color: transparent;
  }

  &__checkbox:checked + &__button &__icon::before {
    top: 0;
    transform: rotate(135deg);
  }

  &__checkbox:checked + &__button &__icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
}

</style>

