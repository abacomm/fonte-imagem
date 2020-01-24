<template>
    <footer id="footer">
        <div class="row">
            <div class="col-lg-8 offset-lg-2 px-md-0 text-md-center">
                <div class="dashed-header"></div>
                <h2>Você Sabia?</h2>
                <p>Para sua conveniência, você pode solicitar a impressão do seu exame para buscar na clínica ou acessar o resultado pelo site, sem precisar sair de casa. Selecione a opção desejada e digite o número de protocolo:</p>
                <div class="form-box">
                    <ExamForm />
                </div>
            </div>
        </div>
        <div class="row mt-5 mb-5">
            <figure class="col-xl-3 col-md-12 mt-5 mt-md-0 mb-5 mb-xl-0 text-center text-xl-left">
                <g-image alt="Imagem da logo Fonte Imagem" src="../assets/images/logo-colored.svg" width="206" />
            </figure>
            <div class="col-xl-3 col-lg-4 text-center text-lg-left mt-4 mt-lg-0">
                <h3 class="footer-title">A Clínica</h3>
                <ul class="footer-nav">
                    <li class="fotter-nav__list"><g-link to="/quem-somos/" class="footer-nav__item">Quem Somos</g-link></li>
                    <li class="fotter-nav__list"><g-link to="/equipe/" class="footer-nav__item">A Equipe</g-link></li>
                    <li class="fotter-nav__list"><g-link to="/artigos/" class="footer-nav__item">Artigos</g-link></li>
                    <li class="fotter-nav__list"><g-link to="/exames/" class="footer-nav__item">Exames</g-link></li>
                    <li class="fotter-nav__list"><g-link to="/convenios/" class="footer-nav__item">Convênios</g-link></li>
                    <li class="fotter-nav__list"><g-link to="/contato/" class="footer-nav__item">Contato</g-link></li>
                </ul>
            </div>
            <div class="col-xl-3 col-lg-4 text-center text-lg-left mt-4 mt-lg-0">
                <h3 class="footer-title">Outros</h3>
                <ul class="footer-nav">
                    <li class="fotter-nav__list"><g-link rel="noopener noreferrer" to="http://tourvirtualbrasil.com.br/tour_virtual_fonte_imagem/index.html" target="_blank" class="footer-nav__item">Tour 360&deg;</g-link></li>
                    <li class="fotter-nav__list"><g-link rel="noopener noreferrer" to="https://netpacs.fonteimagem.com.br/Netpacs-web/login?" target="_blank" class="footer-nav__item">Acesso do Médico</g-link></li>
                </ul>
            </div>
            <div class="col-xl-3 col-lg-4 text-center text-lg-left mt-4 mt-lg-0">
                <h3 class="footer-title">Marcação de exames</h3>
                <div class="footer-nav">
                    <address>
                        Tel. (21) 3591-6886
                        <br>
                        WhatsApp: <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?1=pt_BR&phone=5521997897973" target="_blank">(21) 99789-7973</a>
                        <br>
                        <br>
                        contato@fonteimagem.com.br
                        <br>
                        ouvidoria@fonteimagem.com.br
                        <br>
                        <br>
                        <a rel="noopener noreferrer" href="https://maps.google.com/maps?q=R.+Fonte+da+Saudade,+277+-+Lagoa,+Rio+de+Janeiro+-+RJ" target="_blank">Rua Fonte da Saudade, 277 - Lagoa, Rio de Janeiro - RJ</a>
                    </address>
                </div>
            </div>                                    
        </div>
        <div class="row mt-5 mb-4">
            <div class="col-12">
                <ul class="social">
                    <li class="social__list"><a aria-hidden="true" href="https://pt-br.facebook.com/fonteimagem/" target="_blank" class="social__icon facebook" rel="noopener noreferrer"><font-awesome :icon="['fab', 'facebook-f']"/></a></li>
                    <li class="social__list"><a aria-hidden="true" href="https://www.instagram.com/fonteimagem/" target="_blank" class="social__icon instagram" rel="noopener noreferrer"><font-awesome :icon="['fab', 'instagram']"/></a></li>
                    <li class="social__list"><a aria-hidden="true" href="https://api.whatsapp.com/send?1=pt_BR&phone=5521997897973" target="_blank" class="social__icon whatsapp" rel="noopener noreferrer"><font-awesome :icon="['fab', 'whatsapp']"/></a></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-12 copyright text-center">
                <p>Copyright © {{ today }} | Fonte Imagem | Todos os direitos reservados.</p>
            </div>
        </div>
        <g-image class="img-symbol" src="../assets/images/symbol-overlay.svg" />
    </footer>
</template>

<script>
import ExamForm from '~/components/ExamForm.vue'
export default {
    data: () => ({
        today: new Date().getFullYear()
    }),
    components: { ExamForm }
}
</script>


<style lang="scss">

.img-symbol {
    position: absolute;
    left: -1.5rem;
    bottom: -3.5rem;
    width: 300px;
}

.form-box {
    margin-top: 3rem; 
        
    @media(min-width: 768px) {
        margin-top: 1.5rem;
        margin-left: auto;
        margin-right: auto;
        width: 75%;
        padding: 1.5rem;
        background-color: #fff;
        border-radius: .22rem;
        border: 1px solid rgba($primary-color, .12);
        box-shadow: 0 50px 100px -20px rgba($primary-color, .2);
        margin-bottom: 3rem;
    }
}

.dashed-header {
    
    width: 100%;
    height: 2px;
    background-image: linear-gradient(to right, #939CAF 50%, rgba(#fff, 0) 0% );
    background-position: 0 bottom; 
    background-size: 18px 1px;
    background-repeat: repeat-x;
    margin-bottom: 1.5rem;

    @media(min-width: 768px) {
        display: none;
    }
}

footer {
    margin-top: 6rem;
}

.copyright p {
    font-size: .77rem;
}

.social, .copyright {
    display: flex;
    justify-content: center;
}

.social {

    &__list:not(:last-child) {
        margin-right: 1.5rem;
    }

    &__icon {
        position: relative;
        font-size: 1.5rem;
        color: #fff;
        display: flex;
        align-items: center;
        width: 2.22rem;
        height: 2.22rem;
        border-radius: 50%;

        &.facebook {
            background-color: #3B5998;
            padding-left: .15rem;
            &:hover {
                background-color: lighten(#3B5998, 10%);
            }
        }
        &.instagram {
            background-color: #D62876;
            &:hover {
                background-color: lighten(#D62876, 10%);
            }            
        }
        &.whatsapp {
            background-color: #25D366;
            &:hover {
                background-color: lighten(#25D366, 10%);
            }            
        }                
    }

    svg {
        color: #fff;
        margin-left: .44rem;
    }
}

.footer-title {
    color: $primary-color;
    font-size: .88rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
}

.footer-nav {
    address, address * {
        font-size: .88rem;

        a {
            font-weight: 500;
            color: $accent-color-1;
        }
    }

    &__list {
        
    }

    &__item {
        color: $text-color;
        font-size: .88rem;
        line-height: 2.5;
        font-weight: 400;

        &:hover,
        &.active--exact {
            font-weight: 700;
            color: $accent-color-1;
        }          
    }
}
</style>

