<template>
  <Layout>
    <h1>Quem Somos</h1>
    <div class="row">
      <div class="col-lg-7">
        <p>Nosso tempo é dedicado à você! Conheça a nossa história e o motivo pelo qual somos referência no diagnóstico por imagem.</p>
      </div>
    </div>
    <figure class="full-image">
    </figure>
    <div class="row">
      <article class="col-lg-10 offset-lg-1">
        <p>A Fonte é uma clínica de diagnóstico por imagem que tem como sócios médicos com um sonho em comum: praticar a medicina valorizando os profissionais e dando a eles condições de desenvolver um trabalho com ênfase no paciente e na qualidade assistencial.

<br><br>Aberta em 2017, a Fonte é uma clínica nova, vibrante e empreendedora de corpo, mas experiente e robusta no espírito. Em um só lugar, reunimos médicos líderes em seus segmentos, com formação nos melhores centros do Brasil e do exterior.

<br><br>Acreditamos que a radiologia não se resume a uma fotografia do ser humano, mas sim deve ser uma janela pela qual olhamos cada paciente, em contexto com a história clínica e passado médico, com estreita relação com o médico assistente. Para nós, a imagem é o exame físico do radiologista, sendo o resultado um parecer médico, não um laudo descritivo.

<br><br>O tripé que sustenta a Fonte é formado por Ciência (nossos médicos têm inúmeras publicações em importantes revistas, além de vários livros publicados), Educação (participação na formação de novos profissionais e aulas em congressos e cursos) e Assistência (máquinas de ponta e foco no atendimento ao paciente).</p> 

      <g-image alt="Imagem de 'Quem Somos'" class="article-image" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" width="600" />
      <h2 class="article-subheader">O Palacete Tavares</h2>

<p>O Príncipe D. João, após percorrer o caminho de São Clemente, chegava à praia de Piaçava, nos pés do Morro da Saudade. De lá ele percorria por canoas o caminho até o Jardim Botânico, pelas águas mansas da Lagoa (hoje Rodrigo de Freitas). Junto à praia de Piaçava havia uma fonte onde, dizem, as lavadeiras portuguesas lavavam as roupas chorando a saudade da terra natal. O prefeito Pedro Ernesto criou em 1936 o bairro Fonte da Saudade, e nesse mesmo ano, o Sr Jacy Tavares comprou os lotes 1, 3 e 5 da rua Fonte da Saudade. Ele era dono da Farmácia Jacy, no Catete, e chegou a fornecer medicamentos ao Palácio Real do Catete. Em 1936 foi erguida esta sua residência apalacetada, em estilo eclético, com inspiração na idade média italiana. Nela residiu por mais de 40 anos.

<br><br>Em 2007 a casa foi tombada pelo Instituto Rio Patrimônio da Humanidade - IRPH. Segundo estudo do historiador Milton Teixeira, a casa possui rica serralheria em estilo medieval, em ferro batido e fundido, com brasões heráldicos e raros motivos zoomorfos de dragões. Entre os detalhes de serralheria mais interessantes, ressalta-se o gradil externo; as arandelas existentes no hall principal e superior, com motivos de dragõess, o guarda corpo das escadas, em motivos florais e os dois grandes lustres, feitos especialmente para a casa. Os estuques que formam uma sanca em torno dos ambientes nobres, em motivos fitomorfos acompanham o estilo da casa.

<br><br>O vão da escada ainda possui rico vitral com cena de gênero, contemporânea da construção da casa. Outros acabamentos em vitral, no banheiro e cômodos nobres ainda estão intactos. A casa possui ainda dois pequenos chafarizes com seus tanques, um externo, em azulejo e pedra, o outro, no patamar da escada, em mármore branco e carranca de bronze.

<br><br>Pela qualidade artística deste imóvel, por sua originalidade, estado excepcional de conservação e pelo fato de ser a única casa com este estilo em todo o bairro, e com ancianidade que beira os 80 anos, justificam sua preservação em todos os seus detalhes.

<br><br>A Fonte Imagem foi instalada nessa casa imponente, e após obra supervisionada pelo IRPH, temos orgulho pela oportunidade de trazer nova vida ao Palacete Tavares, preservando esse patrimônio da nossa cidade.</p>
      </article>
    </div>
    <div class="row">
      <div class="col-md-6">
        <g-image alt="Primeira imagem do rodapé" class="article-image-double" src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" width="600" />
      </div>
      <div class="col-md-6">
        <g-image alt="Segunda imagem do rodapé" class="article-image-double" src="https://images.unsplash.com/photo-1564559496476-c228d03a635a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80" width="600" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <SocialShare class="mt-5" url="https://www.fonteimagem.com.br/artigos/" />
      </div>
    </div>
  </Layout>
</template>

<script>
import SocialShare from '~/components/SocialShare.vue'

export default {
  metaInfo: {
    title: 'Quem Somos',
    meta: [
      { charset: 'utf-8' },
      { name: "author", content: "Carlos Gomes Cabral" },
      { name: "description", content: "Conheça a nossa história e como nos tornamos referência em medicina diagnóstica" },
      { name: "keywords", content: "diagnóstico por imagem, saúde, inovação, concierge, medicina diagnóstica" },
      { key: 'og:title', name: 'og:title', content: 'Fonte Imagem - Quem Somos' },
      { key: 'twitter:title', name: 'twitter:title', content: 'Fonte Imagem - Quem Somos' }      
    ]    
  },
  components: { SocialShare }  
}
</script>

<style lang="scss">

.full-image { 
  margin-left: calc(-100vw / 2 + 61.66rem / 2);
  margin-right: calc(-100vw / 2 + 61.66rem / 2);  
  background: url("../assets/images/img-about-1.jpg") no-repeat center;
  background-size: cover;
  height: 29rem;
  margin-bottom: 3rem;

  @media (max-width: 1199px) {
      margin-left: calc(-100vw / 2 + 51.5rem / 2);
      margin-right: calc(-100vw / 2 + 51.5rem / 2);    
  }

  @media (max-width: 991px) {
      margin-left: calc(-100vw / 2 + 38.16rem / 2);
      margin-right: calc(-100vw / 2 + 38.16rem / 2);
      height: 15rem;    
  }

  @media (max-width: 767px) {
      margin-left: calc(-100vw / 2 + 28.16rem / 2);
      margin-right: calc(-100vw / 2 + 28.16rem / 2);    
      height: 15rem;
  }

  @media (max-width: 575px) {
      margin-left: calc(-100vw / 2 + 26.11rem / 2);
      margin-right: calc(-100vw / 2 + 26.11rem / 2);
      height: 15rem;
  }

  @media (max-width: 479px) {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 1.5rem;
      height: 10rem;
  }

}

.article-image {
  margin: 3rem 0;
  width: 100%;
  max-height: 25.5rem;
  box-shadow: 0 50px 100px -20px rgba(#445C79, .3);
  object-fit: cover;
}

.article-image-double {
  @extend .article-image;
  margin-bottom: 0;
}

.article-subheader {
  color: $primary-color;
  font-weight: bold;
  margin-bottom: 1.5rem;
  @media(min-width: 992px) {
    margin-bottom: 3rem;
  }
}

</style>
