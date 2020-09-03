<template>
  <section class="container-fluid fundo">
    <div class="margin_custom">
      <div class="row shadow-lg p-3 mb-5 bg-white rounded">
        <div class="col-12 col-md-5 offset-md-1 d-none d-lg-block">
          <figure class="">
            <img src="@/img/page/certa3.png" class="img-fluid" alt="help" width="500" />
          </figure>
        </div>

        <div class="col-12 col-md-6">

            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputPassword4">CNPJ*</label>
                <div class="input-group-prepend">
                  <input type="number" v-model="cnpj" class="form-control" placeholder="Insira o CNPJ aqui"/>
                  <button class="ml-1 btn _btn_go">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
              <div class="form-group col-md-8">                
                <label for="inputEmail4">Razão social</label>
                <input type="text" v-model="razao" class="form-control" placeholder="Insira o nome aqui"/>
              </div>
            </div>
            <hr class="custom_linha">

            <Upload/>       

            <hr class="custom_linha">
            
            <ResponsiblePerson/>
            valor:{{eDadosPessoa()}}
            <hr class="custom_linha">
            <div class="form-row mt-5">
              <div class="form-group col-md-5">
                <button class="btn btn-customization btn-lg btn-block" @click="eSaveData()">Salvar</button>
              </div>
            </div> 
        </div>

      </div>
    </div>
  </section>
</template>

<script>

import ResponsiblePerson from '../Pages/ResponsiblePerson'
import Upload from '../Pages/UploadDoc'

export default {
  components:{ResponsiblePerson, Upload},
  data(){
    return{
      cnpj:'',
      razao:''
    }
  },  
  methods:{
    eDadosPessoa(){
      return this.$store.state.dadosPessoas
    },
    eSaveData(){
      if(this.cnpj == ''){
        console.log('Informe o CNPJ!')
      }else{
        console.log('Faz: '+this.cnpj+':'+this.razao)
      }
    }
    
  }
};
</script>

<style scoped>
.fundo {
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
    font-size: 1.5rem;
    cursor: pointer;
    position: static;
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

</style>
