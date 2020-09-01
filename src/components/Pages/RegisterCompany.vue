<template>
  <section class="container-fluid fundo">
    <div class="margin_custom">
      <div class="row shadow-lg p-3 mb-5 bg-white rounded">
        
        <div class="col-12 col-md-6">
            <div class="form-row">
              <div class="form-group col-md-5">
                <label for="inputPassword4">CNPJ*</label>
                <input type="number" class="form-control" v-model="cnpj" placeholder="Insira o CNPJ aqui" />
              </div>
              <div class="form-group col-md-7">                
                <label for="inputEmail4">Razão social*</label>
                <input type="text" class="form-control" v-model="company_name" placeholder="Insira o nome aqui"/>
              </div>
            </div>
            <hr class="custom_linha">
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="inputCEP">CEP</label>
                    <div class="input-group-prepend">
                      <input type="number" class="form-control" v-model="cep" id="inputCEP" pattern="[0-9]+$"/>
                      <button class="ml-1 btn _btn_go" @click="ebuscaCep()"><i class="fa fa-search"></i></button>
                    </div>
                </div>

                <div class="form-group col-md-9">
                    <label for="inputAddress">Endereço</label>
                    <input type="text" class="form-control" v-model="logradouro"/> 
                </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputCity">Bairro</label>
                <input type="text" class="form-control" v-model="bairro"/>
              </div>
              <div class="form-group col-md-6">
                <label for="inputCity">Cidade</label>
                <input type="text" class="form-control" v-model="cidade"/>
              </div>
              <div class="form-group col-md-2">
                    <label for="inputCity">Estado</label>
                    <input type="text" class="form-control" v-model="estado"/>
              </div>
            </div>

            <div class="form-group">
              <label>Complemento</label>
              <input type="text" class="form-control" v-model="complemento" placeholder="Insira aqui o complemento"/>
            </div>
            <br>
            <hr class="custom_linha">  
            
            <div class="form-row mt-5">
                <div class="form-group col-md-4">
                    <button class="btn btn-customization btn-lg btn-block" @click="eCallRouter()">Gravar</button>
                </div>
                <div class="form-group col-md-4 offset-md-4">
                    <button class="btn btn-customization_oco btn-lg btn-block">Consultar</button>
                </div>
            </div>       
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center">
          <figure class>
            <img src="@/img/page/typeservice.png" class="img-fluid" alt="help" width="500" />
          </figure>
        </div>

      </div>
    </div>
    
    <div v-if="sho == true && inf==1" v-on="eFecharAlert()">
        <eAlertDanger>{{  frase }}</eAlertDanger>
    </div>
    <div v-else-if="sho == true && inf==2" v-on="eFecharAlert()">
        <eAlertWarning>{{  frase }}</eAlertWarning>
    </div>   

  </section>
</template>

<script>
import eAlertDanger from  '@/components/Alerts/AlertDanger.vue';
import eAlertWarning from  '@/components/Alerts/AlertWarning.vue';
export default {
  components:{eAlertDanger, eAlertWarning},
  data() {
    return{
      cep:'',
      cnpj:'',
      company_name:'',
      logradouro:'',
      cidade:'',
      bairro:'',
      estado:'',
      complemento:'',
      inf: 0,
      frase: '',
      sho: '',
    }
  },
  methods:{
    eAlert(x){ 
      this.inf = x;
    },
    eFecharAlert(){  //fecha o alert com 3000
      setTimeout(() => {
        this.sho=false;  
      }, 3000);  
    },
    ebuscaCep(){
      if(!this.cep == ''){
        if((this.cep).length == 8 ){
          this.$http.get('https://viacep.com.br/ws/'+this.cep+'/json/')
            .then(res => {
              if(res.data.erro){
                this.inf = 2;
                this.sho = true;
                this. frase = "CEP não localizado!";
              }else{
                console.log(res.data)
                this.logradouro = res.data.logradouro
                this.cidade = res.data.localidade
                this.bairro = res.data.bairro
                this.estado = res.data.uf
                this.complemento = res.data.complemento
              }
            })     
            .catch((error) => {
              this.inf = 1;
              this.sho = true;
              this. frase = error;
            })
        }else{
          this.inf = 2;
          this.sho = true;
          this. frase = "CEP invalido!";
        }  
      }else{
        this.inf = 2;
        this.sho = true;
        this. frase = "CEP vazio!";
      }
    }
  }
};
</script>

<style scoped>
.fundo{
  position: absolute;
}
.margin_custom {
  margin-right: 50px;
  margin-left: 50px;
}
.custom_linha{
    background-color: #9BC764;
}
.custom_img{
    cursor: pointer;

}
.custom_link_upload{
    text-decoration: underline;
    font-size: 20px;
    cursor: pointer;
}
.btn-customization{
    color: #FFFFFF;
    background-color: #3ecb90;
    border-color: #3ecb90;
    
    font-size: 20px;
}
.btn-customization:hover{
    color: #FFFFFF;
    background-color: #37b480;
    border-color: #37b480;
}

.btn-customization_oco{
    color: #013d52;
    background-color: #FFFFFF;
    border-color: #013d52;
    
    font-size: 20px;
}
.btn-customization_oco:hover{
    color: #FFFFFF;
    background-color: #013d52;
    border-color: #013d52;
}
._btn_go{
    color: #37b480;
    background-color: #FFFFFF;
    border-color: #37b480;
}
._btn_go:hover{
  color: #FFFFFF;
  background-color: #37b480;
  border-color: #37b480;
}
</style>