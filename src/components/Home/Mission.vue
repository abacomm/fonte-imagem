<template>
    <section id="mission">
      <div class="row mission">
        <div class="col-md-8 offset-md-2 px-md-0 text-md-center">
          <!-- <h2 class="big-h2">Missão</h2> -->
          <blockquote>
            <p><span class="double-quote">&ldquo;</span>An idea is something you have. An ideology is something that has you.</p>
            <p>"Uma ideia é algo que você tem. Uma ideologia é algo que tem você."</p>
            <cite>Morris Berman</cite>
          </blockquote>
        </div>
      </div>
    </section>    
</template>

<style lang="scss">

.mission {

  margin-top: -11.5rem;
  @media (min-width: 576px) {
    margin-top: -8rem;
  }
  @media (min-width: 768px) {
    margin-top: -4.5rem;
  } 
  @media (min-width: 992px) {
    margin-top: 0;
  }    
}

blockquote {
  position: relative;
  .double-quote {
    content: "";
    position: absolute;
    top: 0;
    left: -2rem;
    font-size: 20rem;
    font-weight: bold;
    line-height: .6;
    opacity: .07;
  }
  p:nth-child(1) {
    font-size: 1.5rem;
    font-style: italic;
    margin-top: 0;
    @media(min-width: 992px) {
      margin-top: 1.5rem;
    }
  }
  p:nth-child(4) {
    
  }
}

</style>

