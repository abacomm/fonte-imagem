<template>
    <Layout>
        <article class="single-post">
            <!-- <div class="row">
                <div class="col-md-10 offset-md-1">
                    <h1 class="single-post__title">{{ $page.post.title }}</h1>
                    <small class="single-post__credits">Por: <g-link :to="$page.post.author.path">{{ $page.post.author.id }}</g-link>&nbsp;&nbsp;|&nbsp;&nbsp;<font-awesome class="single-post__icon" :icon="['fas', 'clock']"/>&nbsp;&nbsp;{{ $page.post.date }}</small>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-10 offset-md-1"><g-image class="single-post__image" :src="$page.post.featured_image" /></div>
            </div>
            <div class="row mt-3">
                <p class="col-md-10 offset-md-1 single-post__excerpt" v-html="$page.post.excerpt"></p>
            </div>
            <div class="row single-post__content">
                <div class="col-md-10 offset-md-1 mb-5 share">
                    <SocialShare :url="'https://www.fonteimagem.com.br'+ $page.post.path" />
                </div>
                <div class="col-md-10 offset-md-1 col-md-10 offset-md-1">
                    <p align="justify" v-html="$page.post.content"></p>
                    <p class="single-post__tag-title">tags:</p>
                    <div class="single-post__tag-list">
                        <g-link v-for="tag in $page.post.tags" :to="tag.path" :key="tag.id">{{ tag.id }}</g-link>
                    </div>
                    <vue-disqus shortname="energy-future-1" :identifier="$page.post.title"></vue-disqus>
                </div>              
            </div> -->
        </article>

    </Layout>    
</template>
<!--
<page-query>
query($path: String!){
        post(path: $path) {
            title
            date (format: "DD/MM/YYYY", locale: "pt-BR")
            excerpt
            content
            path           
            featured_image (quality: 80)
    }
}
</page-query>
-->

<script>
import SocialShare from '~/components/SocialShare.vue'

export default {
    metaInfo() {
        return {
            title: this.$page.post.title,
            meta: [
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: this.$page.post.description,
                },

                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: this.$page.post.description,
                },
            ],
        }
    },
    components: { SocialShare }
}
</script>
</script>


<style lang="scss">


</style>