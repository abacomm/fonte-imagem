<template>
  <div class="tint">  
    <div class="container">
      <div class="layout">
        <Header />            
          <transition name="fade" appear>
            <main>
              <slot />
            </main>
          </transition>
        <Footer />
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { Header, Footer },
  data: () => ({
    scroll: 0
  }),
  created(){
    if (process.isClient) {
      window.addEventListener('scroll', this.getScrollEvent)
    }
  },
  destroyed(){
    if (process.isClient) {
      window.removeEventListener('scroll', this.getScrollEvent)
    }
  },
  methods:{
    getScrollEvent () {
      if (process.isClient) {
        this.scroll = window.pageYOffset
      }
    },
    scrollTop() {
      if (process.isClient) {
        if(window.scrollY!=0) {
          setTimeout(() => {
            window.scrollTo(0,window.scrollY-30)
            this.scrollTop()
          }, 5);
        }
      }
    }
  }
};
</script>

<style lang="scss">

.tint {
  overflow: hidden;
  position: relative;
  &::before {
      content: "";
      position: absolute;
      width: 140%;
      height: 0;
      @media(min-width: 576px) {
          height: 66rem;
      }      
      @media(min-width: 768px) {
          height: 73rem;
      }
      @media(min-width: 992px) {
          height: 48rem;
      }
      @media(min-width: 1200px) {
          height: 37rem;
      }      
      background: linear-gradient(to bottom, rgba(248,250,255,1) 0%, rgba(252,253,255,1) 100%);
      left: -20%;
      bottom: 0;
  }  
}

</style>
