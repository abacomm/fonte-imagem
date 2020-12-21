<template>
  <Layout>
    <h1>Convênios</h1>
    <div class="row">
      <div class="col-lg-7">
        <p>Descubra todo os convênios com os quais trabalhamos atualmente na Fonte Imagem.</p>
      </div>
    </div>
    <div class="row align-items-start">
      <div class="convenio-list">
        <div class="convenio-item">
          <p>AMS Petrobrás</p>
        </div>
        <div class="convenio-item">
          <p>Bacen</p>
        </div>
        <div class="convenio-item">
          <p>Bradesco Saúde</p>
        </div>
        <div class="convenio-item">
          <p>Camperj</p>
        </div>
        <div class="convenio-item">
          <p>Fapes</p>
        </div>
        <div class="convenio-item">
          <p>GoldenCross</p>
        </div>
        <div class="convenio-item">
          <p>Mediservice</p>
        </div>
        <div class="convenio-item">
          <p>Mútua dos Magistrados</p>
        </div>
        <div class="convenio-item">
          <p>OMINT</p>
        </div>
        <div class="convenio-item">
          <p>Real Grandeza</p>
        </div>
        <div class="convenio-item">
          <p>Salud Valor</p>
        </div>
        <div class="convenio-item">
          <p>SulAmerica Saúde</p>
        </div>        
        <div class="convenio-item">
          <p>Unafisco Saúde</p>
        </div>
        <div class="convenio-item">
          <p>Unimed (endometriose)</p>
        </div>
        <div class="convenio-item">
          <p>Vale do Rio Doce</p>
        </div>
        <div class="convenio-item">
          <p>World Medic Assist</p>
        </div>
        <div class="convenio-item">
          <p>CAMARJ</p>
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
