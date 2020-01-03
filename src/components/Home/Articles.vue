<template>

    <section id="articles mt-5">
      <div class="row mt-5">
        <div class="col-md-8 offset-md-2 px-md-0 text-md-center">
          <h2 class="big-h2">Nossos Artigos</h2>
          <p>Nossos médicos têm inúmeras publicações em diversos veículos de mídia impressa e TV e este é o espaço onde eles se dedicam à compartilhar artigos e novidades com nossos clientes.</p>          
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
        <div class="col-12 text-md-center">
          <g-link to="/artigos/" tag="button" class="articles-btn">Veja mais</g-link>
        </div>
      </div>              
    </section>

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
import ArticleCards from '../../components/ArticleCards.vue'

export default {
  components: { ArticleCards }
}
</script>


<style lang="scss">

.articles-btn {
    @include outline-button;
    margin-bottom: 3rem;
}

</style>

