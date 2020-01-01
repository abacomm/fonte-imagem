<template>

    <section id="articles mt-5">
      <div class="row mt-5">
        <div class="col-md-8 offset-md-2 px-md-0 text-md-center">
          <h2 class="big-h2">Nossos Artigos</h2>
          <p>Nossos médicos têm inúmeras publicações em diversos veículos de mídia impressa e TV e este é o espaço onde eles se dedicam à compartilhar artigos e novidades com nossos clientes.</p>          
        </div>      
      </div>
      <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6">
          <ArticleCards 
            image="https://images.unsplash.com/photo-1573487849427-587d8d9b5f73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1663&q=80"
            date="30 de agosto, 2019"
            category="Neurologica"
            title="Dormir menos é possível? Saiba como ter um sono melhor"
            text="Than has frequently of at slightly be on provide this, should take her in sharpness…"
          />
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <ArticleCards 
            image="https://images.unsplash.com/photo-1574985163277-3fa01bfffc86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
            date="30 de agosto, 2019"
            category="Bem estar"
            title="Endometriose: 'A dor arruinou minha vida sexual'"
            text="Than has frequently of at slightly be on provide this, should take her in sharpness…"
          />
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <ArticleCards 
            image="https://images.unsplash.com/photo-1490773996481-9ff25c7d9484?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            date="30 de agosto, 2019"
            category="Ortopedia"
            title="Fortalecimento de músculo é uma das maneiras de evitar a artrose"
            text="Than has frequently of at slightly be on provide this, should take her in sharpness…"
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

