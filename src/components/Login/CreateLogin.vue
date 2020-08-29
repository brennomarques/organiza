<template>
    <div class="conteiner">
        <div class="conteiner-sup">
            <div class="row thm">
                <div class="col-12 col-md-4 offset-md-4">
                    <div class="shadow-lg p-3 mb-5 bg-white rounded">
                        <div class="form-group row mb-5 justify-content-center">
                            <div class="col-sm-6">                                
                                <h2 class="font1">Criar sua conta</h2>
                            </div>
                        </div>

                        <form>
                            <div class="form-row">
                                <div class="col-md-12 mb-3">
                                    <input type="text" class="form-control" id="validationDefault01" placeholder="Nome Completo">
                                </div>                        
                            </div>

                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <input type="text" class="form-control" id="validationDefault03" placeholder="Telefone">
                                </div>

                                <div class="col-md-6 mb-3">
                                    
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                        </div>
                                        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="E-mail" >
                                    </div>
                                </div>

                            </div>
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <input type="text" class="form-control" id="validationDefault05" placeholder="Senha" >
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input type="text" class="form-control" id="validationDefault05" placeholder="Repetir senha" >
                                </div>

                            </div>
                                <p class=" vant1">O cadastro esta sujeito aprovação após a confirmação no seu e-mail.</p>
                            <div class="form-group row mt-5">
                                <div class="col-sm-12">                                
                                    <button class="btn btn-button-copiar float-right" type="submit">Criar conta</button>
                                </div>
                            </div>
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
            this.$router.push('/solicitarion')
        }
    }
}
</script>

<style scoped>

.conteiner-sup{
  margin-right: 50px;
  margin-left: 50px;
}
.vant1{
  color: #008978;
  font-size: 0.8rem;
  margin-top: 6px;
}

.thm{
    margin-top: 100px;
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
  width: 130px;
}
.btn-button-copiar:hover{
  color: #FFFFFF;
  background-color: #35aa79;
  border-color: #35aa79;
}
   
</style>