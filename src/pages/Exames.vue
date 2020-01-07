<template>
  <Layout>
    <h1>Exames</h1>
    <div class="row">
      <div class="col-lg-8">
        <p>Nossos exames priorizam o seu conforto. Você terá acesso aos nossos médicos no Consultório de Imagem e poderá tirar todas as suas dúvidas. Trabalhamos para ajudar seu médico a escolher o melhor tratamento possível para você.</p>
      </div>
    </div>
    <div class="list-container">
      <figure class="full-exam-image" />
      <p class="d-none d-sm-block">Selecione abaixo uma opção de exame e saiba como se preparar:</p>
      
      <ul class="nav-tabs">
        <li class="nav-tabs__list" v-for="edge in $static.allExam.edges" :key="edge.node.id">
          <a href="#" class="nav-tabs__item" :class="{ active: activeExam === edge.node.name  }" @click="changeActive(edge.node.name)">{{ edge.node.name }}</a></li>
      </ul>

    </div>
    <div class="row">
      <div class="col-lg-7 exam-about" v-html="getExamByName[0].node.content"></div>
      <div class="col-lg-5 exam-preparation">
        <h4 class="exam-preparation__title"><font-awesome :icon="['fas', 'info-circle']"/>Como se preparar</h4>
        <div class="exam-preparation__search">
          <font-awesome :icon="['fas', 'search']"/>
          <label class="sr-only" for="search">Buscar</label>
          <input type="text" name="search" id="search" placeholder="Digite para buscar..." v-model="search">
        </div>        
        <div v-for="(file, index) in filterPdfBySearch" :key="index">
          <div class="exam-preparation__file mb-3">
            <font-awesome :icon="['fas', 'file-pdf']"/>
            <a :href="file.link_path" target="_blank">{{ file.name }}</a>
          </div>          
        </div>
      </div>
    </div> 
  </Layout>
</template>

<static-query>
{
  allExam {
    edges {
      node {
        id
        name
        content
				pdf_files {
          name
          link_path
        }
      }
    }
  } 
}
</static-query>

<script>
export default { 
  metaInfo: {
    title: 'Exames',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: "Carlos Gomes Cabral" },
      { name: "description", content: "Priorizamos o seu conforto. Conheça todos os exames da nossa clínica" },
      { name: "keywords", content: "diagnóstico por imagem, saúde, inovação, concierge, medicina diagnóstica" },
      { key: 'og:title', name: 'og:title', content: 'Fonte Imagem - Exames' },
      { key: 'twitter:title', name: 'twitter:title', content: 'Fonte Imagem - Exames' }      
    ]    
  },
  data: () => ({
    activeExam: "Tomografia",
    search: ""
  }),
  methods: {
    changeActive(val) {
      this.activeExam = val
    }
  },  
  computed: {
    getExamByName() {
      return this.$static.allExam.edges.filter(exam => {
          return exam.node.name.toLowerCase().includes(this.activeExam.toLowerCase().trim())
      })
    },
    filterPdfBySearch() {
      return this.getExamByName[0].node.pdf_files.filter(file => {
          return file.name.toLowerCase().includes(this.search.toLowerCase().trim())
      })      
    }     
  },   
}
</script>

<style lang="scss">

.list-container {
  position: relative;

  p {
    position: absolute;
    bottom: 8.5rem;
    left: 0;
    font-weight: 500;
    font-size: .88rem;
    color: #fff;
    @media(min-width: 768px) {
      bottom: 6rem;
    }
    @media(min-width: 992px) {
      bottom: 3rem;
      font-size: 1rem;
    }    
  }
}

.exam-about {
  @media(min-width: 992px) {
    padding-right: 3rem;

    background-image: linear-gradient(#939CAF 50%, rgba(255,255,255,0) 0%);
    background-position: right;
    background-size: 1px 18px;
    background-repeat: repeat-y;  
  }

  &__title {
    color: $primary-color;
    font-weight: 700;
  }
}

.exam-preparation {
  @media(min-width: 992px) {
    padding-left: 1.5rem;
  }

  &__title {
    position: relative;
    margin-bottom: 3rem;
    text-transform: uppercase;
    font-size: .88rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: .11rem;
      background-color: $primary-color;
      left: 0;
      bottom: -.5rem;
    }
    svg {
      margin-right: .75rem;
      font-size: 1.25rem;
    }    
  }

  &__search {
    position: relative;
    border-bottom: 1px solid rgba($primary-color, .12);
    margin-bottom: 1.5rem;
    svg {
      position: absolute;
      left: 0;
      top: .25rem;
    }
    input {
      outline: 0;
      border-style: none;
      padding-left: 2rem;
    }
  }

  &__file {
    display: flex;
    align-items: flex-start;
    padding: .75rem 1rem;
    border: 1px solid rgba(#000, .08);
    border-radius: .22rem;
    box-shadow: 0 20px 30px -10px rgba($primary-color, .12);

    * {
      color: $accent-color-1;
    }

    svg {
      margin-right: 1rem;
      font-size: 1.35rem;
    }

    a {
      margin-bottom: 0;
      font-weight: 400;
      font-size: .88rem;
      transform: translateY(-.21rem);
    }
  }
}

.nav-tabs {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: $off-white;
  
  &__list {
    //transform: translateY(-.5rem);
    padding: .47rem 0;
  }
  
  &__item {
    padding: .6rem 1rem;
    transition: all .2s ease;
    background-color: $off-white;
    position: relative;
    
    &:hover, &.active {

      background-color: $accent-color-1;
      color: #fff;

      @media(min-width: 992px) {
        color: $accent-color-1;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(#000, .12);
        z-index: 100;
      }

      @media(min-width: 992px) {
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: .16rem;
          background-color: $accent-color-1;                
        }
      }
    }    
  }
}


.full-exam-image { 
  margin-left: calc(-100vw / 2 + 62.5rem / 2);
  margin-right: calc(-100vw / 2 + 62.5rem / 2);  
  background: url("../assets/images/img-exames-bg.jpg") no-repeat center;
  background-size: cover;
  height: 25rem;
  margin-top: 1.5rem;
  margin-bottom: 4.5rem;

  @media (max-width: 1199px) {
      margin-left: calc(-100vw / 2 + 52.5rem / 2);
      margin-right: calc(-100vw / 2 + 52.5rem / 2);    
  }

  @media (max-width: 991px) {
      margin-left: calc(-100vw / 2 + 39.16rem / 2);
      margin-right: calc(-100vw / 2 + 39.16rem / 2);
  }

  @media (max-width: 767px) {
      margin-left: calc(-100vw / 2 + 29.16rem / 2);
      margin-right: calc(-100vw / 2 + 29.16rem / 2);    
  }

  @media (max-width: 575px) {
      margin-left: 0;
      margin-right: 0;
      height: 20rem;
  }

  @media (max-width: 479px) {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 1.5rem;
  }
}
</style>
