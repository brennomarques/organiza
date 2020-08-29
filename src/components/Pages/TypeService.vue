<template>
  <section class="container-fluid fundo">
    <div class="conteiner-sup">

      <div class="form-group pt-5 ml-3">
        <div class="row">
          <div class="col-md-6 d-flex">
            <div class="">
                <h1 class="font2">Prepare-se para selecionar!</h1>
                <p class="font1 mt-5 mb-3">Escolha o tipo de serviço realizado:</p>
                <div>
                    <button class="btn btn-button-menu mr-5" @click="irQualMidia('Certificado A1')">Certificado A1</button>
                    <button class="btn btn-button-menu mr-5 mt-2" @click="irQualMidia('Certificado A3')">Certificado A3</button>
                    <button class="btn btn-button-menu mt-2" @click="irQualMidia('Certificado BirdId')">Certificado BirdId</button>              
                </div>            

            </div>

          </div>

          <div class="col-md-6">
            <img src="@/img/page/typeservice.png" class="img-fluid" width="600">
          </div>

        </div>
        
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
      return {
          tipomidia: '',
      }
  },
  methods: {
    eEscolhaCertificado() {
        this.$router.push('/certificadoa1')
    },
    irQualMidia(tipomidia){
        this.$store.state.service = tipomidia//manda o nome do drive.
        switch(tipomidia) {
            case "Certificado A1":
                this.$router.push('/certificadoa1')
                break;
            case "Certificado A3":
                this.$router.push('/certificadoa3')
                break;
            case "Certificado BirdId":
                this.$router.push('/certificadobirdid')
                break;    
        }
    }

  }
}
</script>

<style scoped>
.fundo{
  background: #013d52;
  color: white;
  position: absolute;
  height: 100%;
}
.conteiner-sup{
    margin-right: 50px;
    margin-left: 50px;
}
.btn-button-menu{
  color: #FFFFFF;
  background-color: #93c67c;
  border-color: #93c67c;
  border-radius: 15px;
  font-size: 20px;
  width: 200px;
}
.btn-button-menu:hover{
  color: #FFFFFF;
  background-color: #70b84e;
  border-color: #70b84e;
}
.font1{
  font-size: 18px;
}
.font2{
  font-size: 40px;
}
.bb{
  border: 1px solid red;
}
</style>