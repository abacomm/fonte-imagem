<template>
  <Layout>
    <h1>A Equipe</h1>
    <div class="row">
      <div class="col-lg-7">
        <p>Nossa equipe médica é o principal motivo do nosso sucesso. Saiba mais sobre cada um, suas especialidades e publicações científicas.</p>
      </div>
    </div>

    <div class="row">
      
      <div class="d-block d-lg-flex main-team-item" v-for="(edge, index) in getAllTeam" :key="edge.node.id">

        <div class="col-xl-4 col-lg-6 my-5 main-team-photo" v-if="(index % 2 === 0)">
          <div class="team-image">
            <g-image :alt="'Imagem do médico(a): ' +  edge.node.name" class="team-image__img" :src="edge.node.thumb_image" />
            <g-image alt="Imagem apenas decorativa" class="team-image__pattern" src="../assets/images/img-pattern.svg" />
          </div>          
        </div>
        <div class="col-xl-6 col-lg-6 my-5 main-team-text" v-else>
          <div class="team-content">
            <h2 class="team-content__name">{{ edge.node.name }}</h2>
            <h3 class="team-content__role">{{ edge.node.specialty }}</h3>
            <div class="team-content__resume" v-html="edge.node.content.replace(/(?:\r\n|\r|\n)/g, '<br>')"></div>
            <g-link class="team-content__link" v-if="edge.node.external_link.length > 0" :href="edge.node.external_link" target="_blank" rel="noopener noreferrer"><font-awesome :icon="['fas', 'link']"/>&nbsp;&nbsp;Currículo Lattes</g-link>
          </div>          
        </div>

        <div class="col-xl-6 col-lg-6 offset-xl-2 my-5 main-team-text" v-if="(index % 2 === 0)">
          <div class="team-content">
            <h2 class="team-content__name">{{ edge.node.name }}</h2>
            <h3 class="team-content__role">{{ edge.node.specialty }}</h3>
            <div class="team-content__resume" v-html="edge.node.content.replace(/(?:\r\n|\r|\n)/g, '<br>')"></div>
            <a class="team-content__link" v-if="edge.node.external_link.length > 0" :href="edge.node.external_link" target="_blank" rel="noopener noreferrer"><font-awesome :icon="['fas', 'link']"/>&nbsp;&nbsp;Currículo Lattes</a>
          </div>
        </div>

        <div class="col-xl-4 offset-xl-1 col-lg-6 my-5 main-team-photo" v-else>
          <div class="team-image">
            <g-image :alt="'Imagem do médico(a): ' +  edge.node.name" class="team-image__img" :src="edge.node.thumb_image"  />
            <g-image alt="Imagem apenas decorativa" class="team-image__pattern" src="../assets/images/img-pattern.svg" />
          </div>
        </div>

      </div>

    </div>

  </Layout>
</template>

<static-query>
{
  allAuthor(sortBy: "name", order: ASC, filter: { id: { nin: ["Alice Brandão", "Ilan Gottlieb"] } } ) {
    edges  {
      node {
        id
        name
        specialty
        external_link
        thumb_image
        content
      }
    }
  }
}
</static-query>

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
  computed: {
      getAllTeam() {
          return this.$static.allAuthor.edges.filter(val => val.node.thumb_image !== null)
      },     
  },   
}
</script>

<style lang="scss">

.team-image {
  position: relative;

  &__img {
    object-fit: cover;
    width: 100%;
    // height: 16.66rem;
    height: 22.22rem;
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
      bottom: -2rem;
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
    p {
      margin: 0
    }
  }

  &__link {
    font-size: .88rem;
  }
}

@media all and (max-width: 600px){
  .main-team-item.d-block{
    display: flex !important;
    flex-wrap: wrap;
    .main-team-photo{
      order: 1;
    }
    .main-team-text {
      order: 2;
    }
    .mt-5.main-team-text, .my-5.main-team-text{
      margin-top: 0 !important;
    }
  }
}

</style>
