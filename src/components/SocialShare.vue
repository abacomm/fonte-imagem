<template>
    <div class="social-share">
        <p class="social-share__title">Compartilhe:</p>
        <ul class="social-share__list">
            <li class="social-share__item">
                <a aria-hidden="true" class="facebook" :href="'https://www.facebook.com/sharer/sharer.php?u=' + url" target="_blank" rel="noopener noreferrer">
                <font-awesome :icon="['fab', 'facebook']"/>
                </a>            
            </li>
            <li class="social-share__item">
                <a aria-hidden="true" class="twitter" :href="'https://www.twitter.com/share?url=' + url" target="_blank" rel="noopener noreferrer">
                <font-awesome :icon="['fab', 'twitter']"/>
                </a>        
            </li> 
            <li class="social-share__item">
                <a aria-hidden="true" class="linkedin" :href="'https://www.linkedin.com/shareArticle?url=' + url" target="_blank" rel="noopener noreferrer">
                <font-awesome :icon="['fab', 'linkedin']"/>
                </a>        
            </li>                    
        </ul>   
    </div>      
</template>

<script>
export default {
  props: {
      hasRotation: { type: Boolean, required: false },
      url: { type: String, required: true }
  },
}
</script>

<style lang="scss">

.social-share {

    display: flex;
    align-items: center;   

    * {
        display: flex;
    }

    &__title {
        color: $text-color !important;
        margin: 0;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: .7px;
        font-size: .77rem;
        hyphens: manual !important;      
    }

    &__list {
        margin: 0;
        padding-left: 1.5rem;
        
        a {
            font-size: 1.5rem;
            transform: scale(.85);
            line-height: 1;
            transition: all .2s ease;

            &:hover {
                color: $accent-color-2;
                transform: scale(1);
            }              
        }
    }

    &__item:not(:last-child) {
        margin-right: 1.5rem;

    }

}

.facebook {
    color: #3B5899;
}

.twitter {
    color: #55ACEE;
}

.linkedin {
    color: #0175AE;
}


</style>

