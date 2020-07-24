<template>
  <Landing>

    <ModalCovid :open="open" @close="closeModal" />
    <Hero />

    <!-- <Mission /> -->

    <HelpCards />

    <Exams />
    
    <Team />
    
    <Articles />
  </Landing>
</template>

<script>

import ModalCovid from '~/components/ModalCovid'
import Exams from '~/components/Home/Exams.vue'
import Articles from '~/components/Home/Articles.vue'
import Hero from '~/components/Home/Hero.vue'
import Mission from '~/components/Home/Mission.vue'
import HelpCards from '~/components/Home/HelpCards.vue'
import Team from '~/components/Home/Team.vue'

export default {
  metaInfo: {
    title: 'Home',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: "Carlos Gomes Cabral" },
      { name: "description", content: "A Fonte Imagem é a clínica referência em diagnóstico por imagem no Rio de Janeiro" },
      { name: "keywords", content: "diagnóstico por imagem, saúde, inovação, concierge, medicina diagnóstica" },
      { key: 'og:title', name: 'og:title', content: 'Fonte Imagem - Home' },
      { key: 'twitter:title', name: 'twitter:title', content: 'Fonte Imagem - Home' }      
    ]    
  },
  components: { 
    Team, 
    Mission, 
    HelpCards, 
    Articles, 
    Exams, 
    Hero, 
    ModalCovid
  },
  // quando tirar o componente, remover aqui embaixo tb
  data () {
    return {
      open: true
    }
  },
  mounted () {
    this.open = (JSON.parse(window.sessionStorage.getItem('userViewed'))) ? false : true
  },
  methods: {
      closeModal () {
        this.open = false
        window.sessionStorage.setItem('userViewed', JSON.stringify(true))
      }
    }
}
</script>

<style lang="scss">

.big-h2 {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 700;  

    @media (min-width: 992px) {
        font-size: 2.2222rem;
        line-height: 1.3;
        margin-bottom: 1.5rem;
    }   
}

</style>
