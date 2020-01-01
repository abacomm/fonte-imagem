<template>
    <form
        class="form__group text-left" 
        name="rodape" 
        method="post" 
        @submit.prevent="handleSubmit" 
        action="/sucesso/"
        data-netlify="true"
        netlify-honeypot="bot-field">

        <div class="form__radio-group">
            <input type="radio" class="form__radio-input" id="resultado" value="resultado" name="opcao" v-model="formData.opcao" required="true">
            <label for="resultado" class="form__radio-label">
            <span class="form__radio-button"></span>
            Resultado</label>
        </div>
        <div class="form__radio-group">
            <input type="radio" class="form__radio-input" id="impressao" value="impressao" name="opcao" v-model="formData.opcao" required="true">
            <label for="impressao" class="form__radio-label">
            <span class="form__radio-button"></span>
            Impressão</label>
        </div>
        <div class="protocol">
            <input class="protocol__input" type="number" name="protocolo" v-model="formData.protocolo" placeholder="Número do protocolo" required="true">
            <p hidden>
                <label> Não preencha esse campo se você for um humano: <input name="bot-field" /> </label>
            </p>                
            <button class="protocol__btn" type="submit">Enviar</button>          
        </div>
    </form>    
</template>

<script>
export default {
    data: () => ({
        formData: {
            opcao: "",
            protocolo: ""
        }
    }),
    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
        },
        handleSubmit(e) {
            if (this.formData.opcao === 'resultado' && this.formData.protocolo != '') {
                window.open('https://netpacs.fonteimagem.com.br/Netpacs-paciente/#/login-externo/' + this.formData.protocolo, '_blank');
            } else {
                fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: this.encode({
                        'form-name': e.target.getAttribute('name'),
                        ...this.formData,
                    }),
                })
                .then(() => this.$router.push('/sucesso'))
                .catch(error => alert(error))
            }
        }
    }    
}
</script>

<style lang="scss">

.protocol {
    display: block;
    margin-top: 1rem;
    @media(min-width: 576px) {
        display: flex;
    }

    &__input {
        width: 100%;;
        @media(min-width: 576px) {
            max-width: 22.22rem;
        }
        margin-bottom: 0 !important;
        padding: .45rem 1rem;
        outline: 0;
        border-radius: .22rem;
        border: 1px solid transparent;
        margin-bottom: 1.5rem;
        background-color: lighten($light-grey, 19%);
        transition: border-color .2s ease; 

        &:active, &:focus {
            border-color: $accent-color-1;
        }
    }

    &__btn {
        @include colored-button($accent-color-1);
        display: block;
        width: 100%;
        height: 2.5rem;
        text-align: center;
        margin-top: 1rem;
        @media(min-width: 576px) {
            display: flex;
            width: 7rem;
            margin-left: .5rem;
            margin-top: 0;
        }
    }
}

</style>


