<template>
  <section class="conteiner-fluid">
    <div class="section--banner">
      <div class="conteiner-sup">
        <div class="section--banner__block">
          <h1 class="font1 mb-5"><strong>A solução que faltava para organizar seus contratos</strong></h1>
          <div class="font2 mb-5">
            Conheça o Organiza e rapido pratico e seguro.
          </div>
          <div class="mb-5">
            <button class="btn btn-create" @click="eChamaRotaCreateLogin()">Crie sua conta agora</button>
          </div>
        </div>
      </div>      
    </div>
    <div class="conteiner-sup ">
      <div class="d-flex justify-content-center mt-5 mb-5">
        <h1 class="font3">Conheça as vantagens do Organiza</h1>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 d-flex justify-content-center ">
          <div class="row">
            <div class="col-3 col-md-4 offset-md-3">
              <figure class="">
                <img src="@/img/page/tempo.png" class="img-fluid">
              </figure> 
            </div>
            <div class="col-9 col-md-5 mt-5">
              <h5 class="vant1">Não perca tempo</h5>
              <div class="">
                <p>Tudo online. Utilize Organiza para agilidar e estruturar seus contratos.</p>
              </div>
            </div>
          </div>    
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center">
          
            <div class="row">
              <div class="col-3 col-md-4 offset-md-2">
                <figure class="">
                  <img src="@/img/page/result.png" class="img-fluid">
                </figure> 
              </div>
              <div class="col-9 col-md-5 mt-5">
                <h5 class="vant1">Resultados rápido</h5>
                <div class="">
                  <p>Ao economizar tempo e energia, agora você tem tempo de sobra para focar nos procedimentos.</p>
                </div>
              </div>
            </div>    
         
        </div>
      </div>
      
    </div>
  </section>
    
</template>

<script>
export default {
  methods: {
    eChamaRotaCreateLogin(){
            this.$router.push('/createlogin')
        },
  }

}
</script>

<style scoped>
.conteiner-sup{
  margin-right: 50px;
  margin-left: 50px;
}
.font1{
  color: #013d52;
  font-size: 50px;
}
.font2{
  font-size: 40px;
  color: #29bc55;
}
.font3{
  font-size: 2.1rem;

  color: #29bc55;

}
.vant1{
  color: #008978;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.section--banner {
  background-position: center center;
  background-size: cover;
  min-height: 500px;
  background-image: url(../../img/cliente.png);
}
.section--banner__block {
    margin: 40px;
    max-width: 660px;
    bottom: auto;
    margin-left: 0;
}
.btn-create{
    background-color: #013d52;
    color: #FFFFFF;
    font-weight: 500;
    margin-top: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 45px;
    padding-right: 45px ;
}
.btn-create:hover{
  background-color: #024f6b;
  border-color: #024f6b;
}
</style>