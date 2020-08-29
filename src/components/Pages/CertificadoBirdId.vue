<template>
  <section class="container-fluid fundo">
    <div class="conteiner-sup">

      <div class="form-group pt-5 ml-3">
        <div class="row">

          <div class="col-md-4 cust-img ">
            <img src="@/img/page/birdid.png" class="img-fluid" width="500">
          </div>

          <div class="col-md-7 offset-md-1">
            <div class="">
                
                <div v-if="recebemidia == '' ">
                  <h1 class="font2"><strong>Certificado BirdId</strong></h1>
                </div>
                <div v-else>
                  <h1 class="font2"><strong>{{ recebemidia }}: {{eSolicitation}}</strong></h1>
                </div>

                <p class="font1 mt-3 mb-5">Selecione os procedimentos realizados ou descreva.</p>
                <div>
                  <form class="">
                    <div class="form-row">
                      <div class="form-group col-md-5 mr-5">

                        <form class="was-validated">
                          <div class="form-group">
                            <label for="exampleFormControlSelect1">Selecione a máscara:</label>
                            <select class="custom-select" required>
                              <option value="">---Opções---</option>
                              <option value="1">Emitir Certificado</option>
                              <option value="2">Trocar Senha</option>
                              <option value="3">Instalar Certificado</option>
                            </select>
                            <div class="invalid-feedback">Selecione pelo menos uma máscara de atendimento</div>
                          </div>
                        </form>

                      </div>

                      <div class="form-check form-check-inline col-md- offset-md-1">
                        
                        <div class="custom-control custom-radio custom-control-inline mr-5">
                          <input type="radio" id="radio1" name="customRadioInline1" value="token" v-model="midia" class="custom-control-input">
                          <label class="custom-control-label" for="radio1">SmartPhone</label>
                        </div>

                        <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" id="radio2" name="customRadioInline1" value="smartcard" v-model="midia" class="custom-control-input">
                          <label class="custom-control-label" for="radio2">DeskTop</label>
                        </div>
                         
                      </div>

                    </div>

                    <form class="was-validated ">
                      <div class="mb-3">
                        <label for="validationTextarea">Máscara de atendimento:</label>
                        <textarea class="form-control is-invalid" rows="10" id="validationTextarea" placeholder="Digite um texto aqui." required></textarea>
                       
                      </div>
                    </form>

                    <div class="form-row">
                      <div class="form-group col-md-3">
                        <button class="btn btn-button-copiar">Copiar Máscara</button>
                      </div>
                      <div class="form-group col-md-3">
                        <button class="btn btn-button-mai-min">Letras Maiúsculas</button>
                      </div>
                      <div class="form-group col-md-3 ">
                        <button class="btn btn-button-mai-min">Letras Minúscula</button>
                      </div>
                      <!-- <div class="form-group col-md-3">
                        <button class="btn btn-button-limpar">Limpar Campo</button>
                      </div> -->
                    </div>
                    
                  </form>

                </div>            

            </div>

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
      checkds:[],
      midia: '',
      modelo: ''
    }
  },  
  computed: {
    recebemidia(){//recebe o status, qual o driver foi selecionado
      return this.$store.state.service
    },
    eSolicitation(){//recebe o status, qual solicitação foi usada
      return this.$store.state.solicitation
    }
  },
  methods: {
    eVerifiqueCheckds(x){//condição para marcar os checks, caso adicione mais almente a condição de para do FOR
      for(var i=0;i<=4;i++){
        if (i==x){
          this.checkds[i] = true;
        }else{
          this.checkds[i] = false;
        }
      }
    },
  }
}
</script>

<style scoped>
.fundo{
  background: #3ecb90;
  color: white;
  position: absolute;
  height: 100%;
}
.conteiner-sup{
    margin-right: 50px;
    margin-left: 50px;
}
/* button */
.btn-button-copiar{
  color: #FFFFFF;
  background-color: #013d52;
  border-color: #013d52;
  font-size: 17px;
  width: 160px;
}
.btn-button-copiar:hover{
  color: #FFFFFF;
  background-color: #025775;
  border-color: #025775;
}
.btn-button-limpar{
  color: #FFFFFF;
  background-color: #d5a731;
  border-color: #d5a731;
  font-size: 17px;
  width: 160px;
}
.btn-button-limpar:hover{
  color: #FFFFFF;
  background-color: #d49d12;
  border-color: #d49d12;
}
.btn-button-mai-min{
  color: #FFFFFF;
  background-color: #17a2b8;
  border-color: #17a2b8;
  font-size: 17px;
  width: 160px;
}
.btn-button-mai-min:hover{
  color: #FFFFFF;
  background-color: #007f92;
  border-color: #17a2b8;
}

/* Fim button */
.feed{
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #FFFFFF;
}
.font1{
  font-size: 18px;
}
.font2{
  font-size: 40px;
  color: #013d52;
}
.cust-img{
  margin-top: 150px;
}
.bb{
  border: 1px solid red;
}

</style>