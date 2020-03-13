<template>
    <form 
        class="contact-form" 
        :name="formData.assunto === 'Impressao' ? 'impressao' : 'contato'" 
        method="post" 
        @submit.prevent="handleSubmit" 
        action="/sucesso/"
        data-netlify="true"
        netlify-honeypot="bot-field">

        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" v-model="formData.opcao" name="opcao" value="Impressao" v-if="formData.assunto === 'Impressao'" />
        <p hidden>
            <label> Não preencha esse campo se você for um humano: <input name="bot-field" /> </label>
        </p>
        
        <div class="sender-info">
            
            <label class="contact-form__label" for="assunto">Assunto</label>
            <select class="contact-form__select" name="assunto" id="assunto" v-model="formData.assunto" required="true">
                <option value="" disabled selected>Selecione uma opção:</option>
                <option value="Resultado">Resultado de exames</option>
                <option value="Impressao">Impressão de exames</option>
                <option value="Agendamento">Agendamento</option>
                <option value="Outros">Outros</option>
            </select>        

            <label v-if="formData.assunto != 'Impressao' && formData.assunto != 'Resultado'" class="contact-form__label" for="nome">Nome</label>
            <input v-if="formData.assunto != 'Impressao' && formData.assunto != 'Resultado'" class="contact-form__input" type="text" name="nome" id="nome" placeholder="Digite seu nome" v-model="formData.nome" required="true" />
            
            <label v-if="formData.assunto != 'Impressao' && formData.assunto != 'Resultado'" class="contact-form__label" for="email">E-mail</label>
            <input v-if="formData.assunto != 'Impressao' && formData.assunto != 'Resultado'" class="contact-form__input" type="email" name="email" id="email" placeholder="Digite seu melhor e-mail" v-model="formData.email" required="true" />

            <label v-if="formData.assunto === 'Impressao' || formData.assunto === 'Resultado'" class="contact-form__label" for="protocolo">Número do protocolo</label>
            <input v-if="formData.assunto === 'Impressao' || formData.assunto === 'Resultado'" class="contact-form__input" type="number" name="protocolo" id="protocolo" placeholder="Digite seu número de protocolo" v-model="formData.protocolo" required="true" />

            <label v-if="formData.assunto != 'Impressao' && formData.assunto != 'Resultado'" class="contact-form__label" for="mensagem">Mensagem</label>
            <textarea v-if="formData.assunto != 'Impressao' && formData.assunto != 'Resultado'" class="contact-form__textarea" name="mensagem" id="mensagem" rows="4" cols="50" v-model="formData.mensagem" required="true" />

        </div>

        <button class="contact-form__button" type="submit">Enviar</button>
    </form>    
</template>


<script>
export default {
    data: () => ({
        formData: {
            assunto: "",
            opcao: 'Impressao'
        },
    }),
    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
        },
        handleSubmit(e) {
            if (this.formData.assunto === 'Resultado' && this.formData.protocolo != '') {
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

select {
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  position: relative;
  background: url("../assets/images/img-arrow-select.svg") no-repeat right center;
}

/* Remove IE arrow */
select::-ms-expand {
  display: none;
}

select {
  flex: 1;
  width: 100%;
  cursor: pointer;
}

.contact-form {

    margin: 1.5rem 0;
    width: 100%;

    @media (min-width: 992px) {
        margin-top: 3rem;
        margin-bottom: 0;
    }

    &__icon {
        color: $light-grey;
    }

    &__text {
        font-style: italic;
        font-weight: 400;
    }

    &__label {
        display: block;
        font-size: .75rem;
        margin-bottom: .15rem;
    }

    &__input, &__textarea, &__select {
        width: 100%;
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

    &__select {
        height: 2.5rem;
    }  

    ::placeholder {
        color: darken($light-grey, 5%);
    } 

    &__button {
        @include colored-button($accent-color-1);
        width: 100%;
        text-align: center;
    }
}


</style>

