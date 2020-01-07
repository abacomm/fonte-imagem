<template>
  <Layout>

    <Hero />

    <Mission class="section-separation" />

    <HelpCards class="section-separation" />

    <Exams class="section-separation" />
    
    <Team class="section-separation" />
    
    <Articles class="section-separation" />

  </Layout>
</template>

<script>

import Exams from '~/components/Home/Exams.vue'
import Articles from '~/components/Home/Articles.vue'
import Hero from '~/components/Home/Hero.vue'
import Mission from '~/components/Home/Mission.vue'
import HelpCards from '~/components/Home/HelpCards.vue'
import Team from '~/components/Home/Team.vue'

export default {
  metaInfo: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: "Carlos Gomes Cabral" },
      { name: "description", content: "A Fonte Imagem é a clínica referência em diagnóstico por imagem no Rio de Janeiro" },
      { name: "keywords", content: "diagnóstico por imagem, saúde, inovação, concierge, medicina diagnóstica" },
      { key: 'og:title', name: 'og:title', content: 'Fonte Imagem - Seja bem-vindo!' },
      { key: 'twitter:title', name: 'twitter:title', content: 'Fonte Imagem - Seja bem-vindo!' }      
    ]    
  },
  components: { Team, Mission, HelpCards, Articles, Exams, Hero }
}
</script>

<style lang="scss">

.section-separation {
  margin: 9rem 0;
}

.big-h2 {
    @media (min-width: 992px) {
        font-size: 2.2222rem;
        line-height: 1.3;
        margin-bottom: 1.5rem;
    }   
}

</style>
