<template>
    <section id="help-cards">
      <div class="help-cards">
        <h4 class="help-cards__title">Como podemos ajudar?</h4>
        <div class="row">
          <div class="col-xl-4 col-md-6 mb-4 mb-xl-0">
            <div class="help-cards__container">
              <g-image alt="Imagem do card de resultado de exames" class="help-cards__image help-cards__image--1" src="../../assets/images/img-cards-resultado.svg"></g-image>
              <h2 class="help-cards__header">Resultado de exames</h2>
              <p class="help-cards__text">A Fonte Imagem imprime seus exames para serem retirados na clínica ou disponibiliza os resultados online.<br><br><a class="help-cards__link" href="#" @click.prevent="goToFooter">Clique aqui para resultado ou impressão de exames</a></p>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 mb-4 mb-xl-0">
            <div class="help-cards__container">
              <g-image alt="Imagem do card de preparo de exames" class="help-cards__image help-cards__image--2" src="../../assets/images/img-cards-preparo.svg"></g-image>
              <h2 class="help-cards__header">Preparo de exames</h2>
              <p class="help-cards__text">Acesse ou baixe os arquivos com as recomendações e instruções de preparo para todos os nossos exames.<br><br><g-link class="help-cards__link" to="/exames/">Clique aqui para conhecer nossos exames</g-link></p>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 mb-4 mb-xl-0">
            <div class="help-cards__container">
              <g-image alt="Imagem do card de agendamento de exames" class="help-cards__image help-cards__image--3" src="../../assets/images/img-cards-agendamento.svg"></g-image>
              <h2 class="help-cards__header">Agendamento de exames</h2>
              <p class="help-cards__text">Agendar exames conosco é simples e sem burocracia. <br>Ligue para o número: <br><span class="help-cards__emphasis">(21) 3591-6886</span> <br><br><a rel="noopener noreferrer" class="help-cards__link" href="https://api.whatsapp.com/send?1=pt_BR&phone=5521997897973" target="_blank">Ou clique aqui para abrir o Whatsapp</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>    
</template>

<script>
export default {
  methods: {
    goToFooter () {
      this.$scrollTo('footer', 666, {
        easing: 'ease-in-out'
      })
    }    
  }
}
</script>


<style lang="scss">

.help-cards {
    margin: 4.5rem 0 7.5rem;
    position: relative;

    &::after {   
    @media(min-width: 1200px) {
        content: "";
        position: absolute;
        height: 16rem;
        width: 100%;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(to right, #EAF2F5, transparent);
        z-index: -999;      
        transform: translate(25%, 15%);
    }    
  }

  &__emphasis {
    color: $primary-color;
  }

  &__title {
    font-size: .77rem;
    font-weight: 500;
    text-align: left;
    @media(min-width: 768px) {
      text-align: center;
    }
    text-transform: uppercase;
    color: $accent-color-1;
    margin-bottom: 3rem;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 45%;
        left: 0;
        width: 0;
        @media(min-width: 768px) {
            width: 33%;
        }       
        @media(min-width: 992px) {
            width: 37%;
        }     
        height: 1px;
        background-color: rgba($primary-color, .12);
    }

    &::after {
        content: "";
        position: absolute;
        top: 45%;
        right: 0;
        width: 47%;
        @media(min-width: 768px) {
            width: 33%;
        }       
        @media(min-width: 992px) {
            width: 37%;
        }            
        height: 1px;
        background-color: rgba($primary-color, .12);
    }
  }

  &__container {
    padding: 1rem;
    box-shadow: 5px 10px 30px rgba($primary-color, .12);
    background-color: #fff;
    border-radius: .33rem;
    overflow: hidden;      
  }

  &__image {
    &--1 {
      transform: translate(-1rem, -1rem);
    }

    &--2 {
      transform: translate(-1rem, -1rem);
    }

    &--3 {
      transform: translate(-1.5rem, -1.5rem);
    }
  }

  &__header {
    margin-bottom: 1.5rem;
    font-weight: 500;
    @media (min-width: 992px) {
      font-size: 1.22rem;
    }
  }

  &__text, &__link {
    font-size: .88rem;
  }

  &__link {
    font-weight: 500;
    color: $accent-color-1;
  }  
}
</style>

