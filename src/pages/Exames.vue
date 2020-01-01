<template>
  <Layout>
    <h1>Exames</h1>
    <div class="row">
      <div class="col-lg-8">
        <p>Nossos exames priorizam o seu conforto. Você terá acesso aos nossos médicos no Consultório de Imagem e poderá tirar todas as suas dúvidas. Trabalhamos para ajudar seu médico a escolher o melhor tratamento possível para você.</p>
      </div>
    </div>
    <div class="list-container">
      <figure class="full-image" />
      <p class="d-none d-sm-block">Selecione abaixo uma opção de exame e entenda como se preparar:</p>
      <ul class="nav-tabs">
        <li class="nav-tabs__list"><a href="#" class="nav-tabs__item">Ressonância</a></li>
        <li class="nav-tabs__list"><a href="#" class="nav-tabs__item">Tomografia</a></li>
        <li class="nav-tabs__list"><a href="#" class="nav-tabs__item">Ultrassonografia</a></li>
        <li class="nav-tabs__list"><a href="#" class="nav-tabs__item">Ecocardiografia</a></li>
        <li class="nav-tabs__list"><a href="#" class="nav-tabs__item">Cardiologia</a></li>
        <li class="nav-tabs__list"><a href="#" class="nav-tabs__item">Exames Gráficos</a></li>
      </ul>    
    </div>
    <div class="row">
      <div class="col-lg-7 exam-about">
        <h2 class="exam-about__title">Sobre a resonância</h2>
        <p>Para chegar a esses resultados, os pesquisadores analisaram dados de 98 pessoas – em sua maioria mulheres – que sofriam de duas a 15 crises de enxaqueca por mês. Durante seis semanas, os participantes responderam a dois questionários por dia sobre consumo de café, além da prática de outras atividades desencadeantes da doença (consumo de álcool, estado menstrual, clima, exercício físico e humor). Os voluntários ainda descreveram os sintomas da enxaqueca que sofreram durante o período do estudo e de que forma trataram. Também foram coletados histórico médico e demográfico. 

Ao final do acompanhamento, a equipe analisou os dados, considerando os fatores de risco para enxaqueca. A análise mostrou que o consumo de três xícaras de café – ou outras bebidas cafeinadas – estava associado ao maior risco de dores de cabeça tanto no dia do consumo quanto no dia seguinte. Essa relação não foi encontrada para a ingestão de uma ou duas bebidas com cafeína.

Apesar dos resultados, os cientistas esclarecem que o estudo foi observacional e, portanto, não foi possível estabelecer uma relação de causa e efeito. Eles aconselham, porém, que os indivíduos propensos a crises de enxaqueca fiquem atentos à ingestão de cafeína.</p>
      </div>
      <div class="col-lg-5 exam-preparation">
        <h4 class="exam-preparation__title"><font-awesome :icon="['fas', 'info-circle']"/>Como se preparar</h4>
        <div class="exam-preparation__search">
          <font-awesome :icon="['fas', 'search']"/>
          <input type="text" placeholder="Digite para buscar...">
        </div>
        <div class="exam-preparation__file mb-3">
          <font-awesome :icon="['fas', 'file-pdf']"/>
          <g-link to="/">Ressonância Magnética Da Pelve Para Endometriose (Protocolo Dra. Alice Brandão)</g-link>
        </div>
        <div class="exam-preparation__file mb-3">
          <font-awesome :icon="['fas', 'file-pdf']"/>
          <g-link to="/">Defecografia Por Ressonância</g-link>
        </div>
        <div class="exam-preparation__file mb-3">
          <font-awesome :icon="['fas', 'file-pdf']"/>
          <g-link to="/">Neurografia Por Ressonância De Plexo Lombossacro E Braquial</g-link>
        </div>                
      </div>
    </div> 
  </Layout>
</template>

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

  > * {
    flex: 0 0 50%;
    @media(min-width: 768px) {
      flex: 0 0 33.3333%;
    }
    @media(min-width: 992px) {
      flex: none;
    }    

  }
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;

  &__list {
    position: relative;
    padding: .66rem 1rem;
    transition: all .2s ease;
    background-color: $off-white;


    &:hover {
      background-color: $accent-color-1;
      > * {
        color: #fff;
      }
      @media(min-width: 992px) {
        > * {
          color: $accent-color-1;
        }        
        transform: translateY(-1px);
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

  &__item {
    font-size: .77rem;
    line-height: 1.5;
    font-weight: 500;
    //color: $accent-color-1;
        
    @media(min-width: 768px) {
      font-size: .88rem;
    }
  }
}


.full-image { 
  margin-left: calc(-100vw / 2 + 62.5rem / 2);
  margin-right: calc(-100vw / 2 + 62.5rem / 2);  
  background: url("../assets/images/img-exames-bg.png") no-repeat center;
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
      //height: 15rem;
  }
}
</style>
