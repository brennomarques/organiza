<template>
  <section class="container">

    <div class="row">
      <div class="col col-md-12">
        <div class="float-left">
          <img src="@/img/page/adicionar.png" class="custom_img" width="35" />
        </div>
        <div class="float-left">
            <label class="custom_link_upload ml-2">Clique e adicione o contrato</label>
          <!-- <p class="custom_link_upload ml-2">Clique e adicione o contrato</p> -->
        </div>
      </div>
    </div>

    
    <!-- <label for="exampleFormControlFile1">Exemplo de input de arquivo</label> -->
    <!-- <input type="file" class="form-control-file" id="exampleFormControlFile1"> -->
  

    <div class="row">
      <div class="col-12 col-md-10 mb-3 bg-light">
        <button class="round-button">X</button>
        <div class>
          <label class="font_title_upload mb-0">Contrato de aluguel do carro UP!.pdf</label>
          <p class="text-muted">Tamaho: 621.3 KB</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
    // data(){
    //     return{
    //         files:[{
    //             filename:'',
    //         }]
    //     }
    // },
    // methods:{
    //     eAdd(){
    //         this.files.push({ filename: ''});
    //     },
    //     eRemore(){
    //         this.files = this.files.filter(u => u !== file);
    //     }
    // }
};
</script>

<style scoped>
.font_size_calc {
  font-size: 13px;
  color: #6c757d !important;
}
.font_title_upload {
  color: #212529;
}
.round-button {
  width: 20px;
  height: 20px;
  border: #3ecb90;
  border-radius: 50%;
  color: #f5f5f5;
  text-align: center;
  background: #3ecb90;
  font-size: 10px;
  font-weight: bold;
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
.custom_link_upload{
    text-decoration: underline;
    font-size: 1.5rem;
    cursor: pointer;
    position: static;
}
.custom_img{
  cursor: pointer;
}
</style>