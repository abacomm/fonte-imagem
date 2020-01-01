<template>
  <Layout>
    <h1>A Equipe</h1>
    <div class="row">
      <div class="col-lg-7">
        <p>Nossos exames priorizam o seu conforto.
Você terá acesso aos nossos médicos no Consultório de Imagem e poderá tirar todas as suas dúvidas.</p>
      </div>
    </div>

    <div class="row">

      <div class="col-xl-4 col-lg-6 my-5">
        <div class="team-image">
          <g-image class="team-image__img" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1672&q=80" />
          <g-image class="team-image__pattern" src="../assets/images/img-pattern.svg" />
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 offset-xl-2 my-5">
        <div class="team-content">
          <h2 class="team-content__name">Adriana Lessa Brandão</h2>
          <h3 class="team-content__role">Especialista em Radiologia</h3>
          <p class="team-content__resume">Graduação em Medicina pela Universidade Federal do Rio de Janeiro (UFRJ), Residência Médica em Radiologia pela Universidade Federal do Rio de Janeiro (UFRJ).<br><br>

Mestrado em Radiologia pela Universidade Federal do Rio de Janeiro (UFRJ). Título de Especialista em Radiologia e Diagnóstico por Imagem pela Associação Médica Brasileira e Colégio Brasileiro de Radiologia e Diagnóstico por Imagem.</p>
          <g-link class="team-content__link" src="/"><font-awesome :icon="['fas', 'link']"/>&nbsp;&nbsp;Publicações científicas</g-link>
        </div>
      </div>

      <div class="col-xl-6 col-lg-6 my-5" >
        <div class="team-content">
          <h2 class="team-content__name">Adriana Lessa Brandão</h2>
          <h3 class="team-content__role">Especialista em Radiologia</h3>
          <p class="team-content__resume">Graduação em Medicina pela Universidade Federal do Rio de Janeiro (UFRJ), Residência Médica em Radiologia pela Universidade Federal do Rio de Janeiro (UFRJ).<br><br>

Mestrado em Radiologia pela Universidade Federal do Rio de Janeiro (UFRJ). Título de Especialista em Radiologia e Diagnóstico por Imagem pela Associação Médica Brasileira e Colégio Brasileiro de Radiologia e Diagnóstico por Imagem.</p>
          <g-link class="team-content__link" src="/"><font-awesome :icon="['fas', 'link']"/>&nbsp;&nbsp;Publicações científicas</g-link>
        </div>
      </div>
      <div class="col-xl-4 offset-xl-1 col-lg-6 my-5" >

        <div class="team-image">
          <g-image class="team-image__img" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          <g-image class="team-image__pattern" src="../assets/images/img-pattern.svg" />
        </div>

      </div>

    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Equipe',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: "Carlos Gomes Cabral" },
      { name: "description", content: "Conheça nossa equipe! Nossos médicos tem vários artigos e diversos livros publicados" },
      { name: "keywords", content: "diagnóstico por imagem, saúde, inovação, concierge, medicina diagnóstica" },
      { key: 'og:title', name: 'og:title', content: 'Fonte Imagem - Convênios' },
      { key: 'twitter:title', name: 'twitter:title', content: 'Fonte Imagem - Convênios' }      
    ]    
  },
}
</script>

<style lang="scss">

.team-image {
  position: relative;

  &__img {
    object-fit: cover;
    width: 100%;
    height: 16.66rem;
    border-radius: .44rem;
    box-shadow: 0 30px 50px -20px rgba($primary-color, .3);
    max-width: 22.22rem;
    @media(min-width: 1200px) {
      width: 22.22rem;
    }
  }

  &__pattern {
    display: none;

    @media(min-width: 768px) {
      display: block;
      position: absolute;
      z-index: -100;
      top: 1.8rem;
      left: 2rem;
    }
  }
}

.team-content {

  &__name {
    color: $primary-color;
    font-weight: bold;
    margin-bottom: 0;
  }

  &__resume {
    margin-top: 1.5rem;
    font-size: .88rem;
    line-height: 1.5;
  }

  &__link {
    font-size: .88rem;
  }
}

</style>
