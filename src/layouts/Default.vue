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

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { Header, Footer }
};
</script>