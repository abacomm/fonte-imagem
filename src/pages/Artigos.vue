<template>
  <Layout>
    <h1>Artigos</h1>
    <div class="row">
      <div class="col-lg-7">
        <p>Writer up on feedback step the several to of date to of the she a the suspicious longer a aside</p>
      </div>
      <div class="col-lg-4 offset-xl-1">
        <div class="search-input">
          <div class="icon"><font-awesome :icon="['fas', 'search']"/></div>        
          <input type="text" name="search" id="search" placeholder="Digite para filtrar...">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-5">
        <p class="results"><strong>{{ $static.allPost.edges.length }}</strong> publicações listadas</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4 col-lg-6 col-md-6" v-for="edge in $static.allPost.edges" :key="edge.node.id">
        <ArticleCards 
          :image="edge.node.featured_image"
          :date="edge.node.date"
          :category="edge.node.category.id"
          :categoryPath="edge.node.category.path"
          :postPath="edge.node.path"
          :title="edge.node.title"
          :text="edge.node.excerpt"
        />          
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-4">
        <SocialShare url="https://www.fonteimagem.com.br/artigos/" />
      </div>
    </div>    
  </Layout>
</template>

<static-query>
{
  allPost {
    edges {
      node {
        id
        title
        featured_image (quality: 80)
        date (format: "DD/MM/YYYY", locale: "pt-BR")
        excerpt
        path
        category {
          id
          path
        }
      }
    }
  } 
}
</static-query>

<script>
import ArticleCards from '../components/ArticleCards.vue'
import SocialShare from '../components/SocialShare.vue'
export default {
  metaInfo: {
    title: 'Artigos',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: "Carlos Gomes Cabral" },
      { name: "description", content: "Leia nossos artigos e fique atualizado sobre sua saúde" },
      { name: "keywords", content: "diagnóstico por imagem, saúde, inovação, concierge, medicina diagnóstica" },
      { key: 'og:title', name: 'og:title', content: 'Fonte Imagem - Artigos' },
      { key: 'twitter:title', name: 'twitter:title', content: 'Fonte Imagem - Artigos' }      
    ]    
  },
  methods: {

  },
  components: { ArticleCards, SocialShare }
}
</script>

<style lang="scss">

.search-input {
    display: flex;
    align-items: center;
    width: 100%;
    @media(min-width: 576px) {
      max-width: 368px;
    }
    background-color: #F9FBFF;
    border-radius: 5rem;
    border: 1px solid rgba(#000, .12);
    overflow: hidden;
    height: 3rem;
    transition: all .2s ease;

    &:hover, &:active {
        border: 1px solid $accent-color-1;
    }

    input {
        width: 100%;
        padding: 0 .5rem;
        outline: 0;
        border-style: none;
        background-color: transparent;
    }

    ::placeholder {
        color: darken($light-grey, 5%);
    }
    
    .icon {
        width: 1.5rem;
        height: 100% !important;
        height: inherit;
        display: block;
        border-style: none;
        outline: 0;
        margin-left: 1rem;

        svg {
            display: block;
            margin-top: .95rem;
            font-size: 1rem;
            color: $light-grey;
        }
    }
}  


.results {
  color: $primary-color;
}

</style>
