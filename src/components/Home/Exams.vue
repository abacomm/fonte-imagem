<template>

    <section id="exams">
      <div class="row">

        <div class="col-lg-6">
          <div class="gallery">
            <figure class="gallery__item gallery__item--1">
              <img src="../../assets/images/img-exams-01.jpg" class="gallery__img" alt="Imagem de exame 1">
            </figure>
            <figure class="gallery__item gallery__item--2">
              <img src="../../assets/images/img-exams-02.jpg" class="gallery__img" alt="Imagem de exame 2">
            </figure>
            <figure class="gallery__item gallery__item--3">
              <img src="../../assets/images/img-exams-03.jpg" class="gallery__img" alt="Imagem de exame 3">
            </figure>
            <figure class="gallery__item gallery__item--4">
              <img src="../../assets/images/img-exams-04.jpg" class="gallery__img" alt="Imagem de exame 4">
            </figure>
            <figure class="gallery__item gallery__item--5">
              <img src="../../assets/images/img-exams-05.jpg" class="gallery__img" alt="Imagem de exame 5">
            </figure>
            <figure class="gallery__item gallery__item--6">
              <img src="../../assets/images/img-exams-06.jpg" class="gallery__img" alt="Imagem de exame 6">
            </figure>
          </div>
        </div>

        <div class="col-lg-6">
          <h2 class="big-h2">Nossos Exames</h2>
          <p>Acreditamos que a radiologia não se resume a uma fotografia do ser humano, mas sim deve ser uma janela pela qual olhamos cada paciente, em contexto com a história clínica e passado médico, com estreita relação com o médico assistente. Para nós, a imagem é o exame físico do radiologista, sendo o resultado um parecer médico, não um laudo descritivo.
            <br><br>Por isso montamos um time de médicos líderes em seus respectivos segmentos e com formação nos melhores centros do Brasil e do exterior!</p>
          <div class="row exam-list mt-5">
            <div class="col-md-6">
              <div class="row">
                <div class="col-2">
                  <font-awesome class="exam-list__icon" :icon="['fas', 'check-circle']"/>
                </div>
                <div class="col-10 pl-0 pl-md-2 pl-lg-3">
                  <g-link to="/exames/#ressonancia" class="exam-list__link">Ressonância</g-link>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-2">
                  <font-awesome class="exam-list__icon" :icon="['fas', 'check-circle']"/>
                </div>
                <div class="col-10 pl-0 pl-md-2 pl-lg-3">
                  <g-link to="/exames/" class="exam-list__link">Tomografia</g-link>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-2">
                  <font-awesome class="exam-list__icon" :icon="['fas', 'check-circle']"/>
                </div>
                <div class="col-10 pl-0 pl-md-2 pl-lg-3">
                  <g-link to="/exames/" class="exam-list__link">Ultrassonografia</g-link>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-2">
                  <font-awesome class="exam-list__icon" :icon="['fas', 'check-circle']"/>
                </div>
                <div class="col-10 pl-0 pl-md-2 pl-lg-3">
                  <g-link to="/exames/" class="exam-list__link">Cardiografia Nuclear</g-link>
                </div>
              </div>
            </div>            
            <div class="col-md-6">
              <div class="row">
                <div class="col-2">
                  <font-awesome class="exam-list__icon" :icon="['fas', 'check-circle']"/>
                </div>
                <div class="col-10 pl-0 pl-md-2 pl-lg-3">
                  <g-link to="/exames/" class="exam-list__link">Ecocardiografia e Doppler</g-link>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-2">
                  <font-awesome class="exam-list__icon" :icon="['fas', 'check-circle']"/>
                </div>
                <div class="col-10 pl-0 pl-md-2 pl-lg-3">
                  <g-link to="/exames/" class="exam-list__link">MAPA, Holter, Teste Ergométrico e Biópsia</g-link>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <g-link to="/exames/" tag="button" class="exam-btn">Saiba mais</g-link>
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<style lang="scss">

.exam-list {

  &__link {
    display: block;
    margin-bottom: 1.5rem;
  }

  &__icon {
    font-size: 1.5rem;
    color: rgba($light-grey, .5);
  }
}

.exam-btn {
    @include outline-button;
    margin: 1rem 0 3rem 0;
}


.gallery {

    position: relative;

    // display: flex;
    // align-items: flex-end;
    // justify-content: space-around;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;

    figure {
      margin-bottom: 0;
    }

    @media(max-width: 992px) {
      margin-bottom: 2rem;
    }

    @media(max-width: 500px) {
      grid-template-columns: 1fr 1fr;
    }

    @media(min-width: 992px) {

        // margin-top: 8rem;
        
        &::before {
            content: "";
            position: absolute;
            top: -3rem;
            left: -1.5rem;
            width: 100%;
            height: 100%;
            background-image: url("../../assets/images/img-tiny-pattern.svg");
            background-repeat: no-repeat;
            background-position: 0% 0%;
            z-index: -100;
        }    
  }

  @media(min-width: 992px) {
    transform: translateX(-1.5rem);
    margin-bottom: 30px;
  }  

  @media(min-width: 1200px) {
    transform: translateX(-3rem);
  }

  &__item {

    box-shadow: 0 10px 28px -5px rgba($primary-color, .3);

    &--1 {
        grid-column: span 2;
        grid-row: span 2;
    }

    @media(max-width: 500px) {
      &--2, &--3, &--4, &--5, &--6 {
        display: none;
      } 
    }       
  
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .22rem;
  }

}

</style>

