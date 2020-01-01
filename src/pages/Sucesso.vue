<template>
    <div class="success-box">
        <g-image class="success-box__image" src="../assets/images/img-success.svg" width="200" />
        <p class="success-box__message">Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.</p>
        <a class="success-box__back" @click="$router.go(-1)"><font-awesome :icon="['fas', 'arrow-left']"/>&nbsp;Voltar</a>
    </div>

    <!-- <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 col-10 offset-1">
                <div class="success-box text-center">
                    <g-image class="success-box__image" src="../assets/images/img-success.svg" width="200" />
                    <p class="success-box__message">Suas solicitação foi enviada com sucesso! Em breve entraremos em contato.</p>
                    <a class="success-box__back" @click="$router.go(-1)"><font-awesome :icon="['fas', 'arrow-left']"/>&nbsp;Voltar</a>
                </div>
            </div>
        </div>
    </div> -->
</template>

<style lang="scss">

.success-box {
    display: block;
    text-align: center;
    margin-top: 3rem auto !important;
    background-image: linear-gradient(to bottom, #f9f9f9, transparent);

    &__image {
        margin: 3rem 0;
    }
    &__message {
        //color: $primary-color;
        padding: 0 1rem;
    }

    &__back {
        color: $accent-color-1 !important;
    }
}
</style>

