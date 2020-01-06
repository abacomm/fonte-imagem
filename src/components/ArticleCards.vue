<template>
    <article class="article-card">
        <figure class="article-card__image">
          <g-link :to="postPath"><g-image :src="image" :alt="'Imagem do artigo: ' + title" /></g-link>
        </figure>
        <div class="article-card__credits">
            <small class="article-card__date">{{ date }}</small>
            <span class="article-card__divider"></span>
            <g-link class="article-card__category" :to="categoryPath"> {{ category }} </g-link>
        </div>
        <g-link :to="postPath"><h1 class="article-card__title">{{ title }}</h1></g-link>
        <p class="article-card__text">{{ text | postExcerpt(70) }}</p>
    </article>           
</template>

<script>

export default {
    props: {
      image: { type: String, required: true },
      date: { type: String, required: true },
      category: { type: String, required: true },
      title: { type: String, required: true },
      text: { type: String, required: true },
      postPath: { type: String, required: true },
      categoryPath: { type: String, required: true },
    } 
}
</script>


<style lang="scss">

.article-card {
  max-width: 20.44rem;
  overflow: hidden;
  border-radius: .22rem;
  margin-bottom: 3rem;
  box-shadow: 0 20px 50px -10px rgba($primary-color, .2);
  backface-visibility: hidden;

  &__image {
    img {
      transition: all .25s ease;
      width: 100%;
      height: 10.6rem;
      object-fit: cover;
      backface-visibility: hidden;
    }
    &:hover {
      img { 
        width: 105%; 
        filter: grayscale(100%); 
      }
    }
  }

  &__credits, &__title, &__text {
    padding: 0 1.5rem;
  }

  &__credits {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 1.5rem 0 1rem;
    * {
      text-transform: uppercase;
      font-size: .66rem;
      letter-spacing: .7px;
    }
  }

  &__divider {
    margin: 0 .5rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: $text-color;
  }

  &__category {
    color: $accent-color-1;
  }

  &__title {
    color: $primary-color;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: .5rem;
  }

  &__text {
    font-size: .77rem;
    line-height: 1.16rem;
    margin-bottom: 1.5rem;
  }
}

</style>

