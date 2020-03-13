<template>
    <Layout>
        <h3 class="mb-4">Assunto: {{ $page.tag.title }}</h3>

        <section id="search-post">
            <div class="row">
                <div class="col-12 mb-5">
                    <div class="search-input">
                        <label for="search" class="sr-only">Buscar</label>
                        <div class="icon"><font-awesome :icon="['fas', 'search']"/></div>
                        <input type="text" name="search" id="search" placeholder="Digite para filtrar..." v-model="search">
                    </div>
                </div>
            </div>
        </section>

        <div v-if="filteredList.length > 0">
            <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-6" v-for="post in filteredList" :key="post.node.id">
                    <ArticleCards 
                        :image="post.node.featured_image"
                        :date="post.node.date"
                        :category="post.node.category.id"
                        :categoryPath="post.node.category.path"
                        :postPath="post.node.path"
                        :title="post.node.title"
                        :text="post.node.excerpt"
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

    </Layout>    
</template>

<page-query>
query($id: ID!){
    tag(id: $id) {
        title
        belongsTo {
            edges {
            node {
                ... on Post {
                    id
                    title
                    excerpt
                    date (format: "DD/MM/YYYY", locale: "pt-BR")
                    category {
                        id
                        path
                    }
                    path
                    featured_image (quality: 80)
                }
            }
            }
        }
    }
}
</page-query>

<script>
import ArticleCards from '../components/ArticleCards.vue'

export default {
    data: () => ({
        search: ''
    }), 
    
    computed: {
        filteredList() {
            return this.$page.tag.belongsTo.edges.filter(post => {
                return post.node.title.toLowerCase().includes(this.search.toLowerCase().trim())
            })
        }
    },
    
    components: { ArticleCards }
}
</script>
