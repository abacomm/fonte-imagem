<template>
    <section id="help-cards">
      <div class="help-cards">
        <h4 class="help-cards__title">Como podemos ajudar?</h4>
        <div class="row">
          <div class="col-xl-4 col-md-6 mb-4 mb-xl-0">
            <div class="help-cards__container">
              <g-image alt="Imagem do card de resultado de exames" class="help-cards__image" src="../../assets/images/img-home-top-cards.svg"></g-image>
              <h2 class="help-cards__header">Resultado de exames</h2>
              <p class="help-cards__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorum voluptatibus, quos velit eius necessitatibus.<br></p>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 mb-4 mb-xl-0">
            <div class="help-cards__container">
              <g-image alt="Imagem do card de preparo de exames" class="help-cards__image" src="../../assets/images/img-home-top-cards.svg"></g-image>
              <h2 class="help-cards__header">Preparo de exames</h2>
              <p class="help-cards__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorum voluptatibus, quos velit eius necessitatibus.</p>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 mb-4 mb-xl-0">
            <div class="help-cards__container">
              <g-image alt="Imagem do card de agendamento de exames" class="help-cards__image" src="../../assets/images/img-home-top-cards.svg"></g-image>
              <h2 class="help-cards__header">Agendamento de exames</h2>
              <p class="help-cards__text"><a rel="noopener noreferrer" class="help-cards__link" href="https://api.whatsapp.com/send?1=pt_BR&phone=5521997897973" target="_blank">Clique aqui para abrir o aplicativo do Whatsapp na web.</a> <br><br>Ou ligue para o número: <br>(21) 3591-6886 </p>
            </div>
          </div>
        </div>
      </div>
    </section>    
</template>

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
        transform: translate(25%, 25%);
    }    
  }

  &__title {

    font-size: .77rem;
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
    transform: translate(-1rem, -1rem);
  }

  &__header {
    margin-bottom: 1.5rem;
    @media (min-width: 992px) {
      font-size: 1.22rem;
    }
  }

  &__text {

  }

  &__link {
    font-weight: 500;
    color: $accent-color-1;
  }  
}
</style>

