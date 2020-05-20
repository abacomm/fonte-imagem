<template>
  <div class="modal-parent" :class="{'active': open}" @click.prevent="closeModal">
    <div class="modal" :class="{'active': open}">
      <button class="modal-close" @click.prevent="closeModal">&times;</button>
      <div class="modal-content">
        <h2>Prezado Cliente</h2>
        <p>O seu exame de Sorologia ou PCR para COVID-19 somente aparecerá cadastrado no sistema após a liberação do resultado.</p>
        <button @click.prevent="closeModal" class="modal-button">Ok</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ModalCovid',
    props: {
      open: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      closeModal () {
        this.$emit('close')
      }
    }
  }
</script>
<style scoped>
  .modal-parent {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    visibility: hidden;
    opacity: 0;
    z-index: 10000;
    transition: ease-in-out .2s all;
  }
  .modal-parent.active {
    opacity: 1;
    visibility: visible;
    transition: ease-in-out .2s all;
  }
  .modal {
    width: 640px;
    padding: 20px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    visibility: hidden;
    opacity: 0;
    z-index: 10010;
    transition: ease-in-out .2s all;
    background: #ffffff;
    box-shadow: 0 3px 3px 3px rgba(0,0,0,0.3);
  }
  .modal.active{
    opacity: 1;
    visibility: visible;
    transition: ease-in-out .2s all;
  }
  .modal-close{
    background: transparent;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 32px;
    height: 32px;
    font-size: 40px;
    display: flex;
    color: #404040;
    align-items: center;
    justify-content: center;
    border: none;
  }
  .modal-close i {
    font-size: 30px
  }
  .modal-content h2 {
    color: #057E7D;
    font-size: 24px;
  }
  .modal-button{
    margin: 30px auto 0;
    border: 1px solid #057E7D;
    border-radius: 50px;
    padding: 0 1rem;
    background: #fff;
    color: #057E7D;
    height: 54px;
    line-height: 52px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease-in-out .2s all;
    
  }
  .modal-button:hover{
    background: #057E7D;
    color: #ffffff;
    transition: ease-in-out .2s all;
  }
  .modal-button i {
    font-style: normal;
    font-size: 28px;
    margin-right: 5px;
  }
  @media all and (max-width: 680px) {
    .modal {
      width: calc(100% - 10px);
    }
    .modal p{
      font-size: 15px;
    }
    .modal-button{
      margin-top: 20px;
      height: 45px;
      font-size: 16px;
    }
  }
  @media all and (max-width: 680px){
    .modal {
      width: 100%;
    }
  }
</style>