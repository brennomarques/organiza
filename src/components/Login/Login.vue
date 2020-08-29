<template>
    <div class="conteiner ">
        <div class="conteiner-sup">
            <div class="row ">
                <div class="col-12 col-md-6 d-flex justify-content-center mt-5">
                    <figure class="">
                    <img src="@/img/page/login.png" class="img-fluid" alt="help" width="500">
                    </figure>
                </div>
                <div class="col-12 col-md-6 align-self-center">
                    <div class="">
                        <h1 class="font1">Entrar no Sistema</h1>
                        <p class="mb-4"><strong>Preencha os dados abaixo</strong></p>
                        <form action="" class="">
                            <div class="form-group row">
                                <div class="col-sm-7">
                                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-7">
                                    <input type="password" class="form-control" id="inputPassword3" placeholder="Senha">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-sm-7">
                                    <p class="font-link float-right" @click="eChamaRotaRecoverLogin()">Esqueceu sua senha?</p>
                                </div>
                            </div>
                            <button class="btn btn-button-copiar" @click="eChamaRotaHome()">Entrar</button>
                        </form>
                    </div>      
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    methods:{
        eChamaRotaRecoverLogin(){
            this.$router.push('/recoverlogin')
        },
        eChamaRotaHome(){
            this.$router.push('/solicitarion');
        }
    }
}
</script>

<style scoped>
.conteiner-sup{
  margin-right: 50px;
  margin-left: 50px;
}

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