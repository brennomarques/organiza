<template>
 <header><!-- inicio Cabecalho -->
    <nav class="navbar navbar-expand-md navbar-light ">
      <div class="container-fluid conteiner-sup">
        
        <router-link to="/">
          <a href="#" class="navbar-brand">
            <img src="../../img/organiza.png" width="156">
          </a>
        </router-link>       
                  
        <button class="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="nav-principal">
            <ul class="navbar-nav ml-auto">
            
                <li class="nav-item mr-4 ">
                  <router-link class="nav-link ml-3" to="/login"><h6 class="btn font-link">Fazer Login</h6></router-link>
                </li>

                <li class="nav-item ">

                  <router-link  to="/createlogin"><h6 class="btn btn-login">Criar uma Conta</h6></router-link>
                    
                </li>

            </ul>           

        </div>

      </div>
    </nav>
      <hr class="linha mt-0"/>  
    </header><!--/fim Cabecalho -->
</template>

<script>
export default {
  

}
</script>

<style scoped>
.btn-button-login{
  color: #FFFFFF;
  background-color: #3ecb90;
  border-color: #3ecb90;
  font-size: 17px;
  width: 120px;
  height: 50px;
}
.btn-button-copiar:hover{
  color: #FFFFFF;
  background-color: #35aa79;
  border-color: #35aa79;
}
.conteiner-sup{
  margin-right: 50px;
  margin-left: 50px;
}
.btn-login{
    background-color: #3ecb90;
    color: #FFFFFF;
    font-weight: bolder;
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px ;
}
.btn-login:hover{
  background-color: #35aa79;
  border-color: #35aa79;
}

.font-link{
    color: #3ecb90;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    font-size: 17px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
}
.font-link:hover{
    cursor: pointer;
    text-decoration: underline;
}
.linha{
	color: #808493;
    margin-right: 65px;
    margin-left: 64px;
}

  

</style>