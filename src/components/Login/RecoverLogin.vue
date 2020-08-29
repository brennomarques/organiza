<template>
  <div class="conteiner">
      <div class="row">
          <div class="col-12 col-md-6 d-flex justify-content-center">
              <figure class="">
                <img src="@/img/page/recoverlogin.png" class="img-fluid" alt="help" width="500">
              </figure>
          </div>
          <div class="col-12 col-md-6 align-self-center">
            <div class="">
                <h1 class="font1">Esqueceu sua senha?</h1>
                <p class="mb-4"><strong>Você receberá um e-mail com link.</strong></p>
                <form action="" class="">
                    <div class="form-group row">
                        <div class="col-sm-7">
                            <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group row mb-0">
                        <div class="col-sm-7">
                            <p class="font-link float-right" @click="eChamaRota()">Login</p>
                        </div>
                    </div>
                    <button class="btn btn-button-copiar">Recuperar senha</button>
                </form>
            </div>      
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        eChamaRota(){
            this.$router.push('/login')
        }
    }

}
</script>

<style scoped>
.font1{
    color: #3ecb90;
}
.font2{
  font-size: 1.6rem;
}
.font-link{
    color: #45996c;
    cursor: pointer;
    text-decoration: none;
}
.font-link:hover{
    cursor: pointer;
    text-decoration: underline;
}
.btn-button-copiar{
  color: #FFFFFF;
  background-color: #3ecb90;
  border-color: #3ecb90;
  font-size: 17px;
  width: 160px;
}
.btn-button-copiar:hover{
  color: #FFFFFF;
  background-color: #35aa79;
  border-color: #35aa79;
}  
</style>