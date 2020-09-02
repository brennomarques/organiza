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
                  <input type="number" class="form-control" placeholder="Insira o CNPJ aqui" />
                  <button class="ml-1 btn _btn_go">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
              <div class="form-group col-md-8">                
                <label for="inputEmail4">Razão social</label>
                <input type="text" class="form-control" placeholder="Insira o nome aqui"/>
              </div>
            </div>
            <hr class="custom_linha">
            <div class="row">
              <div class="col col-md-12">
                <div class="float-left">
                  <img src="@/img/page/adicionar.png" class="custom_img" width="35">
                </div>
                <div class="float-left">
                  <p class="custom_link_upload ml-2">Clique e adicione o contrato</p>  
                </div>
              </div>
            </div>

            <Upload/><Upload/>       

            <hr class="custom_linha">
            
            <ResponsiblePerson/>

            <hr class="custom_linha">
            <div class="form-row mt-5">
              <div class="form-group col-md-5">
                <button class="btn btn-customization btn-lg btn-block">Salvar</button>
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
