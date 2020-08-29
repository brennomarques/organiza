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

            <li class="nav-item">
              <router-link class="nav-link ml-3" to="/registercompany">Empresa</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link ml-3" to="/contract">Contrato</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link ml-3" to="/validator">Validador</router-link>
            </li>
              
            <li class="nav-item">
              <router-link class="nav-link ml-3" to="/profile">Perfil</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link ml-3" to="/home">Sair</router-link>
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

.conteiner-sup{
  margin-right: 50px;
  margin-left: 50px;
}
.linha{
	color: #808493;
    margin-right: 65px;
    margin-left: 64px;
}

  

</style>