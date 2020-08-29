<template>
  <section class="container-fluid fundo">
    <div v-if="maska1 == '' ">
      <p v-on="eCarregarDados()"></p>
    </div>
    <div class="conteiner-sup">

      <div class="form-group pt-5 ml-3">
        <div class="row">
          <div class="col-md-6 ">
            <div class="">
                
                <div v-if="recebemidia == '' ">
                  <h1 class="font2"><strong>Certificado A1</strong></h1>
                </div>
                <div v-else>
                  <h1 class="font2"><strong>{{ recebemidia }}: {{ eSolicitation }}</strong></h1>
                </div>

                <p class="font1 mt-3 mb-5">Selecione os procedimentos realizados ou descreva.</p>
                <div>
                  <form class="">
                    <div class="form-row">
                      <div class="form-group col-md-5   ">

                        <form class="was-validated">
                          <div class="form-group">
                            <label for="exampleFormControlSelect1">Selecione a máscara:</label>

                            <select class="custom-select" required v-model="text"> 
                              <option value="">---Opções---</option>

                              <option v-for="item in maska1" :value="item.registro" :key="item.id">
                                {{item.id}} : {{ item.descricao }}
                              </option>

                            </select>
                            <div class="invalid-feedback">Selecione pelo menos uma máscara de atendimento</div>
                          </div>
                        </form>

                      </div>

                      <div class="form-check form-check-inline col-md-6 ml-5">
                        
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="Check1" v-model="check1" @click="eInsertLinha()">
                          <label class="custom-control-label" for="Check1">Instalado Java</label>
                        </div>

                        <div class="custom-control custom-checkbox ml-4">
                          <input type="checkbox" class="custom-control-input" id="Check2" v-model="check2">
                          <label class="custom-control-label" for="Check2">Configurado Java</label>
                        </div>

                      </div>
                    </div>
                    
                    <form class="was-validated ">
                      <div class="mb-3">
                        <label for="validationTextarea">Máscara de atendimento:</label>
                        <textarea class="form-control is-invalid" rows="10" id="validationTextarea" v-model="text" placeholder="Digite um texto aqui." required></textarea>
                      </div>
                    </form>                    
                  </form>

                </div>

                <div class="form-row mt-5">
                  <div class="form-group col-md-3">
                    <button class="btn btn-button-copiar" @click="eCopy()">Copiar Máscara</button>
                  </div>
                  
              </div>      
              
            </div>

          </div>

          <div class="col-md-5 cust-img offset-1">
            <img src="@/img/page/certa1.png" class="img-fluid float-right" width="600">
          </div>

        </div>
        
      </div> 
      <div v-if="sho == true && inf==1" v-on="eFecharAlert()">
        <eAlertDanger>{{  frase }}</eAlertDanger>
      </div>
      <div v-else-if="sho == true && inf==2" v-on="eFecharAlert()">
        <eAlertSucess>{{  frase }}</eAlertSucess>
      </div>

    </div>
  </section>
</template>

<script>
import eAlertSucess from '@/components/Alerts/AlertSucess';

export default {
  components: {eAlertSucess},
  data(){
    return {
      inf: 0,
      frase: '',
      sho: '',
      maska1: [], 
      text: '',
      check1: '',
      check2: '',
      installjava: '\n\nREALIZADO O DOWNLOAD E INSTALAÇÃO DO JAVA.',
      configjava: '\n\nREALIZADA A CONFIGURAÇÃO DO JAVA PARA ABRIR O EMISSOR.'
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
    eCopy() {
      try {
        var copyText = document.querySelector("#validationTextarea");
        copyText.select();
        document.execCommand("copy");

        this.inf = 2;
        this.sho = true;
        this. frase = "Máscara Copiada!";

      } catch (error) {
        this.inf = 1;
        this.sho = true;
        this. frase = error;
      }
    },
    eFecharAlert(){  //fecha o alert com 3000
        setTimeout(() => {
            this.sho=false; 
        }, 1000);  
    },
    eAlert(x){ 
        this.inf = x;
    }, 
    eInsertLinha(){
      
      var size = this.text.length; //recebe o comprimento da string
      var aux = this.text;
      var cont = 0; 
      var position = 0;

      for (var i = 0; i <= size ; i++) {
       
        if(aux[i] == "."){
          cont = cont+1;
          if(cont == 2){
            if((aux[i+1] == "P")){
              cont = cont-1;  
            }else{
              position = i;
              i = (size + size);
            }
          }
        }

      }

      //console.log("Dados:"+this.installjava.substring(0, 44));


      if(!this.check1 == true){
        this.text = aux.substring(0,position+1) + this.installjava + aux.substring(position+1, (size-position+1));
      }else if(!this.check1 == false){
        this.text = '';
        console.log("Install java")  
      }else if(this.check2 == true){
        this.text = aux.substring(0,position+1) + this.configjava + aux.substring(position+1, (size-position+1));
      }else if(this.check2 == false){
        this.text = '';
        console.log("config java")
      }
    },
    eCarregarDados(){
      try{
        this.$http.get('a1').then(res=>{
          this.maska1 = res.data
        })
      }catch(error){
        this.inf = 2;
        this.sho = true;
        this. frase = error;
      }

    }
  }  

}
</script>

<style scoped>
.fundo{
  background: #145650;
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
  background-color: #9BC764;
  border-color: #9BC764;
  font-size: 17px;
  width: 160px;
}
.btn-button-copiar:hover{
  color: #FFFFFF;
  background-color: #aac589;
  border-color: #aac589;
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
}
.cust-img{
  margin-top: 150px;
}
.bb{
  border: 1px solid red;
}

</style>