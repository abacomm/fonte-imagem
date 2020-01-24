<template>
  <Layout>
    <h1>Artigos</h1>
    <div class="row">
      <div class="col-lg-7">
        <p>Nossos médicos têm inúmeras publicações em diversos veículos de mídia impressa e TV e este é o espaço onde eles se dedicam à compartilhar artigos e novidades com nossos clientes.</p>
      </div>
      <div class="col-lg-4 offset-xl-1">
        <div class="search-input">
          <div class="icon"><font-awesome :icon="['fas', 'search']"/></div>
          <label class="sr-only" for="search">Buscar</label>        
          <input type="text" name="search" id="search" placeholder="Digite para filtrar..." v-model="search">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-5">
        <p class="results"><strong>{{ $page.allPost.totalCount }}</strong> publicações</p>
      </div>
    </div>
    <div v-if="filteredList.length > 0">
      <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6" v-for="edge in filteredList" :key="edge.node.id">
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
    </div>
    <div v-else>
        <div class="row my-4">
            <div class="col-12 empty">
                <font-awesome style="font-size: 3rem; margin-bottom: 1rem;" :icon="['fas', 'sad-tear']"/>
                <p>Sua busca não retornou resultados com as palavras digitadas. Tente novamente!</p>
            </div>
        </div>
    </div>    
    <div class="row mt-4">
      <div class="col-lg-6">
        <SocialShare url="https://www.fonteimagem.com.br/artigos/" />
      </div>
      <div class="col-lg-6 mt-5 mt-lg-0 d-flex justify-content-lg-end">
        <!-- <p>Páginas:&nbsp;&nbsp;</p> -->
        <Pager :info="$page.allPost.pageInfo" linkClass="pager" prevLabel="←" nextLabel="→" />
      </div>      
    </div>    
  </Layout>
</template>

<page-query>
query ($page: Int){
  allPost (perPage: 12, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }    
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
</page-query>

<script>
import { Pager } from 'gridsome'
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
    data: () => ({
        search: ''
    }), 
    computed: {
        filteredList() {
            return this.$page.allPost.edges.filter(post => {
                return post.node.title.toLowerCase().includes(this.search.toLowerCase().trim())
            })
        }
    },
    components: { Pager, ArticleCards, SocialShare }
}
</script>

<style lang="scss">

.pager {
  background-color: $off-white;
  border: 1px solid rgba(#000, .08);
  padding: .5rem 1rem;

  &:hover {
    background-color: lighten($light-grey, 15%);
  }
  &.active {
    background-color: $accent-color-1;
    color: #fff;
    box-shadow: 0 15px 30px -5px rgba($accent-color-1, .54);
  }
}

.results {
  color: $primary-color;
}

</style>
