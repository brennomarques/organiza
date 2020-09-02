<template>
  <section class="container mt-3">
    
    <div class="row">
      <div class="col-12 col-md-5 mb-3">
        <button class="btn btn-customization btn-lg btn-block" @click="eAdd()">
        <i class="fa fa-plus"></i>
          Pessoa envolvida
        </button>
      </div>
    </div>   
    
    <div class="row">
            
      <div class="col-12 col-md-10 pt-3 bg-light mt-2" v-for="(pessoa, idx) in pessoas" :key="idx">
          
        <button class="round-button" @click="eRemove(pessoa)">X</button>

        <div class="form-group">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Nome</label>
              <input type="text" class="form-control" v-model="pessoas.nome" placeholder="Insira o nome aqui" />
            </div>
            <div class="form-group col-md-4">
              <label>Responsabilidades</label>
              <select class="custom-select" v-model="pessoas.responsabilidade">
                <option selected>---Selecione---</option>
                <option>Sócio</option>
                <option>Administrador</option>
                <option>Responsável Legal</option>
                <option>Cotista</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-10">
              <input type="text" class="form-control" v-model="pessoas.obs" placeholder="Digite observação aqui." />
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      pessoas:[{
        nome:'',
        responsabilidade: '',
        obs: ''
      }],
    }
  },
  methods: {
    eAdd() {
      this.pessoas.push({
        nome:'',
        responsabilidade: '',
        obs: ''
      });
    },
    eRemove(pessoa) {
      this.pessoas = this.pessoas.filter(u => u !== pessoa);
    }
  }
};
</script>

<style scoped>
    .round-button {
        width:20px;
        height:20px;
        border: #3ecb90;
        border-radius: 50%;
        color:#f5f5f5;
        text-align:center;
        background: #3ecb90;
        font-size:10px;
        font-weight:bold;
        cursor: pointer;
        position: absolute;
        right: -5px;
        top: -5px;
        z-index: 2;
    }
    .round-button:hover {
        background: rgb(80, 197, 148);
        border: rgb(80, 197, 148);
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