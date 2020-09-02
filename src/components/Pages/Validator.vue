<template>
  <section class="container-fluid fundo">
      <div class="margin_custom">
          <div class="row shadow-lg p-3 mb-5 bg-white rounded">

              <div class="container">
                <div class="row">
                  <div class="col 12">
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label for="inputPassword4" class="custom_cor_font">CNPJ*</label>
                        <div class="input-group-prepend">
                          <input type="number" class="form-control" placeholder="Insira o CNPJ aqui" />
                          <button class="ml-1 btn _btn_go">
                            <i class="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                      <div class="form-group col-md-6">                
                        <label for="inputEmail4" class="custom_cor_font">Razão social</label>
                        <input type="text" class="form-control" placeholder="Insira o nome aqui"/>
                      </div>

                      <div class="form-group col-md-2">
                        <label class="custom_cor_font">Status</label>
                        <select class="custom-select">
                          <option selected>Todos</option>
                          <option value="1">Aprovado</option>
                          <option value="2">Recusado</option>
                          <option value="3">Análise</option>
                        </select>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
              <div class="container-fluid"><br></div>
              <button class="btn btn-primary" data-toggle="modal" data-target="#ExemploModalCentralizado">Abrir PDF</button>
              <RenderPDF/>

              <table class="table table-lg">
                <thead>
                  <tr>
                    <th scope="col" class="d-none d-lg-block custom_cor_font">#</th>
                    <th scope="col" class="custom_cor_font">CNPJ</th>
                    <th scope="col" class="custom_cor_font">Razão Social</th>
                    <th scope="col" class="d-none d-lg-block custom_cor_font">Usuário</th>
                    <th scope="col" class="custom_cor_font">Nome Arquivo</th>
                    <th scope="col" class="d-none d-lg-block custom_cor_font">Tamanho</th>
                    <th scope="col" class="custom_cor_font">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" class="d-none d-lg-block">1</th>
                    <td>121254215950124</td>
                    <td>Organiza negocio inteligentes</td>
                    <td class="d-none d-lg-block">ronaldo.lima</td>
                    <td>contrato social empresa que tem tudo</td>
                    <td class="d-none d-lg-block">251.25 KB</td>
                    <td>Aprovado</td>
                  </tr>
                  <tr>
                    <th scope="row" class="d-none d-lg-block">2</th>
                    <td>32154262012458</td>
                    <td>Thornton solucção eletrica</td>
                    <td  class="d-none d-lg-block">felipe.marthins</td>
                    <td>Contrado social mathis de sousa</td>
                    <td  class="d-none d-lg-block">512.2 KB</td>
                    <td>Recusado</td>
                  </tr>
                  <tr>
                    <th scope="row" class="d-none d-lg-block">3</th>
                    <td>21549876310254</td>
                    <td>twitter sociação de moedas</td>
                    <td  class="d-none d-lg-block">Wesley.follman</td>
                    <td>Arquivo de social de tudo</td>
                    <td  class="d-none d-lg-block">5162.2 KB</td>
                    <td>Análise</td>
                  </tr>
                </tbody>
              </table>    
          </div>
      </div>
  </section>
</template>

<script>
import RenderPDF from './PDF/RenderPDF'
export default {
  components:{RenderPDF}
}
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
    background-color: #013d52;
  }
  ._btn_go{
    color: #013d52;
    background-color: #FFFFFF;
    border-color: #013d52;
  }
  ._btn_go:hover{
    color: #FFFFFF;
    background-color: #013d52;
    border-color: #013d52;
  }
  .custom_cor_font{
    color: #013d52
  }
</style>