<template>
  <section class="container-fluid img_menu ">
    <div class="simple_margen mt-5">
      <div class="row">
        <div class="col-12 col-md-8">
          <p class="source_1">Olá, Usuario!</p>
          <div class="col-12 col-md-8 ">
            <p class="source_2">Seja bem-vindo ao Sistema de Cadastro de Empresa e Consulta.</p>
          </div>
          <p class="source_3">Escolha o que você deseja fazer:</p>

          <div class="form-row mt-5">
            <div class="form-group col-md-3">
              <button class="btn btn-customization btn-lg btn-block" @click="eCallRouter(1)">Empresa</button>
            </div>
            <div class="form-group col-md-3">
              <button class="btn btn-customization btn-lg btn-block" @click="eCallRouter(2)">Validador</button>
            </div>
            <div class="form-group col-md-3">
              <button class="btn btn-customization btn-lg btn-block" @click="eCallRouter(3)">Contrato</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods:{
    eCallRouter(x) {
      if(x == 1){
        this.$router.push('/registercompany')
      }else if(x == 2){
        this.$router.push('/validator')
      }else{
        this.$router.push('/contract')
      }
    },
  }

}
</script>

<style scoped>
  .img_menu{
    background-color: #4FB166;
    background-image: url(../../img/page/main_page.png);
    position: relative;
    background-size: cover;
    height: 100%;
    position: fixed;
    color: white;
  }
  .simple_margen{
    margin-right: 50px;
    margin-left: 50px;
  }
  .source_1{
    font-family: Branding-Light;
    font-size: 40px;
  }
  .source_2{
    font-family: Branding-Bold;
    font-size: 40px;
  }
  .source_3{
    font-family: Branding-Medium;
    font-size: 30px;
    margin-top: 4%;
  }
  .btn-customization{
    color: #FFFFFF;
    background-color: #145650;
    border-color: #145650;
    font-size: 20px;
}
.btn-customization:hover{
    color: #FFFFFF;
    background-color: #0F7366;
    border-color: #0F7366;
}
</style>