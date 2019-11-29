<template>
  <div>
    <div class='scroll-top' :class="{ 'is-visible': scroll >= 200 }"  @click="scrollTop"></div>    
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

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

.scroll-top {
  display: none;

  @media (min-width: 992px) {

    display: block;
    position: fixed;
    bottom: 1.5rem;
    right: 1rem;
    width: 2.22rem;
    height: 2.22rem;
    z-index: 99999;
    background-color: #fff;
    box-shadow: 0 1rem 2rem rgba($primary-color, 0.35);

    opacity:0;
    visibility: hidden;
    transition: opacity 0.4s linear;

    &:hover {
      cursor: pointer;
    }

    &::after {
      content: "";
      position: absolute;
      // background: url("../assets/images/ic-arrow.svg") no-repeat center;
      transform: rotate(-90deg);
      width: inherit;
      height: inherit;
      top: 0%;
      left: 0%;
      transition: all .2s ease;
    }
  }  
}

.is-visible {
    opacity: 1;
    visibility: visible;
}

</style>
