<template>
    <div class="conteiner">
        <div class="conteiner-sup">
            <div class="row thm mt-5">
                <div class="col-12 col-md-4 offset-md-4">
                    <div class="shadow-lg p-3 mb-5 bg-white rounded">
                        <div class="form-group row mb-5">
                            <div class="col-sm-6">                                
                                <h2 class="h3_font1">Detalhes da conta</h2>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-12 mb-3">
                                <label for="">Nome Completo</label>
                                <input type="text" class="form-control" id="validationDefault01">
                            </div>                        
                        </div>

                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="">Telefone</label>
                                <input type="text" class="form-control" id="validationDefault03">
                            </div>

                            <div class="col-md-6 mb-3">
                                <label for="">E-mail</label>
                                <div class="input-group">                                        
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                    </div>
                                    <input type="text" class="form-control" id="validationDefaultUsername" readonly>
                                </div>
                            </div>

                        </div>
                        <hr>
                        <div class="form-row">
                            <div class="col-md-6">
                                <p class="_font-link" data-toggle="modal" data-target="#alterarsenha">Alterar senha</p>
                            </div>
                            <div class="col-md-5 offset-md-1">
                                <button class="btn btn-button-copiar btn-lg btn-block" type="submit">Salvar</button>
                            </div>

                        </div>
                            

                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="alterarsenha" tabindex="-1" data-backdrop="static" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">

                    <div class="_center_div _modal_header">
                        <h5 class="modal-title">Alterar Senha</h5>
                    </div>

                    <div class="modal-body">

                        <div class="_center_div">
                            <div class="col-md-8 mb-3">
                                <label for="">Senha atual</label>
                                <input type="text" class="form-control" id="validationDefault03">
                            </div>
                        </div>

                        <div class="_center_div">
                            <div class="col-md-8 mb-3">
                                <label for="">Nova senha</label>
                                <input type="text" class="form-control" id="validationDefault03">
                            </div>
                        </div>

                        <div class="_center_div">
                            <div class="col-md-8 mb-3">
                                <label for="">Confirma nova senha</label>
                                <input type="text" class="form-control" id="validationDefault03">
                            </div>
                        </div>
                        <hr>
                            <div class="form-row">
                                <div class="form-group col-md-3 offset-md-2">
                                    <button class="btn btn-customization_oco btn-lg btn-block" data-dismiss="modal">Canelar</button>
                                </div>
                                <div class="form-group col-md-3 offset-md-2">
                                    <button class="btn btn-customization btn-lg btn-block">Salvar</button>
                                </div>
                            </div>                    
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {};
</script>

<style scoped>
.img_menu {
  background-image: url(../../img/linhas.png);
  position: relative;
  background-size: cover;
  height: 100%;
  position: fixed;
}
.h3_font1{
    color: #013d52;
}
._vant1{
  color: #008978;
  font-size: 0.8rem;
  margin-top: 6px;
}
._font-link{
    color: #45996c;
    cursor: pointer;
    text-decoration: none;
}
._font-link:hover{
    cursor: pointer;
    text-decoration: underline;
}
.btn-button-copiar{
  color: #FFFFFF;
  background-color: #3ecb90;
  border-color: #3ecb90;
  font-size: 17px;
}
.btn-button-copiar:hover{
  color: #FFFFFF;
  background-color: #35aa79;
  border-color: #35aa79;
}
._modal_header{
    background-color: #45996c;
    color: #fff;
    padding: 20px; 
}
._center_div{
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-customization{
    color: #FFFFFF;
    background-color: #3ecb90;
    border-color: #3ecb90;
    padding: 4px;
    font-size: 18px;
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
    padding: 4px;
    font-size: 18px;
}
.btn-customization_oco:hover{
    color: #FFFFFF;
    background-color: #013d52;
    border-color: #013d52;
}
</style>