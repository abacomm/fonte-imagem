<template>
  <Layout>
    <h1>Contato</h1>
    <g-image class="bg-contact-image d-none d-lg-block" src="https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />
    <div class="row">
      <div class="col-lg-7">
        <p>Entre em contato para pedir informações <br>e tirar suas dúvidas.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-5">
        <ContactForm />
      </div>
      <div class="col-lg-5 offset-lg-1">
        <div class="help-box">
          <div class="help-box__section">
            <h4 class="help-box__title pt-5">Concierge</h4>
            <div class="help-box__item"><font-awesome :icon="['fas', 'phone-alt']"/>&nbsp;&nbsp;(21) 3591-6886</div>
            <div class="help-box__item"><font-awesome :icon="['fab', 'whatsapp']"/>&nbsp;&nbsp;(21) 99789-7993</div>
          </div>
          <div class="help-box__section">
            <h4 class="help-box__title">E-mail</h4>
            <div class="help-box__item"><font-awesome :icon="['fas', 'envelope']"/>&nbsp;&nbsp;contato@fonteimagem.com.br</div>
            <div class="help-box__item"><font-awesome :icon="['fas', 'envelope']"/>&nbsp;&nbsp;ouvidoria@fonteimagem.com.br</div>
          </div>
          <div class="help-box__section pb-5">
            <h4 class="help-box__title">Endereço</h4>
            <div class="help-box__item"><font-awesome :icon="['fas', 'map-marker-alt']"/>&nbsp;&nbsp;Rua Fonte da Saudade, 277 Lagoa, <br>Rio de Janeiro - RJ</div>
          </div>                    
        </div>
      </div>
    </div>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5680335046795!2d-43.20442518529677!3d-22.966130484981623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd56fbddc68f9%3A0xb95aa8bf850c7fad!2sR.%20Fonte%20da%20Saudade%2C%20277%20-%20Lagoa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022471-210!5e0!3m2!1sen!2sbr!4v1576604318871!5m2!1sen!2sbr" width="100%" height="540" frameborder="0" style="border:0;" allowfullscreen="true"></iframe>
    </div>
  </Layout>
</template>

<script>
import ContactForm from "~/components/ContactForm.vue";
export default {
  metaInfo: {
    title: 'Contato',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: "Carlos Gomes Cabral" },
      { name: "description", content: "Entre em contato conosco para pedir informações, marcar exames e tirar suas dúvidas" },
      { name: "keywords", content: "diagnóstico por imagem, saúde, inovação, concierge, medicina diagnóstica" },
      { key: 'og:title', name: 'og:title', content: 'Fonte Imagem - Contato' },
      { key: 'twitter:title', name: 'twitter:title', content: 'Fonte Imagem - Contato' }      
    ]    
  },
  components: { ContactForm }
}
</script>

<style lang="scss">

  .map {
    margin-left: calc(-100vw / 2 + 62.5rem / 2);
    margin-right: calc(-100vw / 2 + 62.5rem / 2);  
    background-size: cover;
    height: 30rem;
    margin-top: 4.5rem;
    margin-bottom: 3rem;

    @media (max-width: 1199px) {
        margin-left: calc(-100vw / 2 + 52.5rem / 2);
        margin-right: calc(-100vw / 2 + 52.5rem / 2);    
    }

    @media (max-width: 991px) {
        margin-left: calc(-100vw / 2 + 39.16rem / 2);
        margin-right: calc(-100vw / 2 + 39.16rem / 2);
    }

    @media (max-width: 767px) {
        margin-left: calc(-100vw / 2 + 29.16rem / 2);
        margin-right: calc(-100vw / 2 + 29.16rem / 2);    
    }

    @media (max-width: 575px) {
        margin-left: 0;
        margin-right: 0;
    }

    @media (max-width: 479px) {
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 1.5rem;
        height: 25rem;
    }
  }

  .bg-contact-image {
    position: absolute;
    right: 0;
    z-index: -999;
    width: 24.6rem;
    height: 40.33rem;
    object-fit: cover;
    transform: translateY(-4.5rem);
  }

  .help-box {
    width: 100%;
    max-width: 20.44rem;
    background-color: #1B333F;
    padding: 0 2.22rem;
    box-shadow: 0 50px 100px 30px rgba($accent-color-1, .2);
    @media(min-width: 992px) {
     //margin-top: 0;
     transform: translateY(-5.5rem);
    }

    * {
      color: #D3F4FC;
    }

    &__title {
      font-size: .88rem;
      text-transform: uppercase;
      font-weight: 700;
      position: relative;
      margin: 2.5rem 0 1.835rem;
      
      &::after {
        content: "";
        position: absolute;
        width: 4.83rem;
        height: .11rem;
        background-color: #057E7D;
        bottom: -1rem;
        left: 0;
      }
    }

    &__item {
      font-size: .77rem;
      font-weight: 400;
      line-height: 2;
    }
  }
</style>
