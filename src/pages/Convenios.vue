<template>
  <Layout>
    <h1>Convênios</h1>
    <div class="row">
      <div class="col-lg-7">
        <p>Descubra todo os convênios com os quais trabalhamos atualmente na Fonte Imagem.</p>
      </div>
    </div>
    <div class="row align-items-start">
      <!-- <figure class="col-lg-3 col-md-4 col-sm-6">
        <g-image class="logo" alt="Bradesco Saúde" src="~/assets/images/bradesco-saude-logo.png" width="200" />
      </figure>
      <figure class="col-lg-3 col-md-4 col-sm-6">
        <g-image class="logo" alt="Bacen" src="~/assets/images/bacen.jpg.jpg" width="200" />
      </figure>
      <figure class="col-lg-3 col-md-4 col-sm-6">
        <g-image class="logo" alt="Camperj" src="~/assets/images/medsculp-camperj.jpg" width="200" />
      </figure> 
      <figure class="col-lg-3 col-md-4 col-sm-6">
        <g-image class="logo" alt="AMS Petrobrás" src="~/assets/images/ams.jpg" width="200" />
      </figure>
      <figure class="col-lg-3 col-md-4 col-sm-6">
        <g-image class="logo" alt="GoldenCross" src="~/assets/images/1_linha_positiva.jpg" width="200" />
      </figure>
      <figure class="col-lg-3 col-md-4 col-sm-6">
        <g-image class="logo" alt="Media Service" src="~/assets/images/medi-service.png" width="200" />
      </figure> 
      <figure class="col-lg-3 col-md-4 col-sm-6">
        <g-image class="logo" alt="Unafisco Saúde" src="~/assets/images/marca-dourada.png" width="200" />
      </figure> 
      <figure class="col-lg-3 col-md-4 col-sm-6">
        <g-image class="logo" alt="OMINT" src="~/assets/images/omint.png" width="200" />
      </figure> 
      <figure class="col-lg-3 col-md-4 col-sm-6">
        <g-image class="logo" alt="World Medic Assist" src="~/assets/images/world-medic-assist-logo.png" width="200" />
      </figure>                                    
      <figure class="col-lg-3 col-md-4 col-sm-6">
        <g-image class="logo" alt="World Medic Assist" src="~/assets/images/fapes.svg" width="200" />
      </figure> 
      <figure class="col-lg-3 col-md-4 col-sm-6">
        <g-image class="logo" alt="World Medic Assist" src="~/assets/images/real-grandeza.png" width="200" />
      </figure> --> 
      <div class="convenio-list">
        
      
      <div class="convenio-item">
        <p>Bradesco Saúde</p>
      </div>
      <div class="convenio-item">
        <p>Bacen</p>
      </div>
      <div class="convenio-item">
        <p>Camperj</p>
      </div>
      <div class="convenio-item">
        <p>AMS Petrobrás</p>
      </div>
      <div class="convenio-item">
        <p>GoldenCross</p>
      </div>
      <div class="convenio-item">
        <p>Media Service</p>
      </div>
      <div class="convenio-item">
        <p>Unafisco Saúde</p>
      </div>
      <div class="convenio-item">
        <p>OMINT</p>
      </div>
      <div class="convenio-item">
        <p>World Medic Assist</p>
      </div>
      <div class="convenio-item">
        <p>Fapes</p>
      </div>
      <div class="convenio-item">
        <p>Real Grandeza</p>
      </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Convênios',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: "Carlos Gomes Cabral" },
      { name: "description", content: "Saiba com quais convênios trabalhamos em nossa clínica" },
      { name: "keywords", content: "diagnóstico por imagem, saúde, inovação, concierge, medicina diagnóstica" },
      { key: 'og:title', name: 'og:title', content: 'Fonte Imagem - Convênios' },
      { key: 'twitter:title', name: 'twitter:title', content: 'Fonte Imagem - Convênios' }      
    ]    
  },
}
</script>

<style lang="scss">

.logo {
  object-fit: contain;
  width: 100%;
  height: 11.11rem;
}
.convenio-list{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  margin: 3rem auto;
  padding: 0 13px
}
.convenio-item{
  height: 70px;
  display: flex;
  align-items: center;
  text-align: left;
  font-weight: bold;
  p {
    margin: 0;
  }
}
@media(max-width: 992px){
  .convenio-list{
    width: calc(100% - 20px);
    display: grid;
    padding: 0 15px;
    margin: 2rem 0;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .convenio-item{
    height: 70px
  }
}
@media(max-width: 768px){
  .convenio-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media(max-width: 450px){
  .convenio-list{
    display: grid;
    margin: 1rem 0;
    grid-template-columns: 1fr;
  }
  .convenio-item{
    height: 50px
  }
}
</style>
