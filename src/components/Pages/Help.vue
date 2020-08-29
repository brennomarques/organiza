<template>
  <section class="container-fluid fundo">
    <div class="conteiner-sup">

      <div class="conteiner">
          <div class="row">

            <div class="col-12 col-md-6 d-none d-sm-block">
              <figure class="">
                <img src="@/img/page/help.png" class="img-fluid float-right" alt="help" width="550">
              </figure>
            </div>

            <div class="col-12 col-md-6">
              <div class="help-font">
                <h1 class="font1">Está com dúvidas sobre o Procedimento?</h1>
                <div class="mt-3">
                  <p class="font2">Veja as categorias mais utilizadas na rotina de atendimento.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="conteiner mt-5">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3">
            <div class="articles-block">
              <h6 class="articles-block__title">Windows DLL</h6>
              <div class="row">
                <div class="col-12">

                  <p class="block__list__item">Token SafeNet -> eToken.dll</p>
                  <p class="block__list__item">Token Epass2003 -> eps2003csp11.dll</p>
                  <p class="block__list__item">SmartCard Oberthur -> OcsCryptoki.dll</p>
                  <p class="block__list__item">SmartCard Morpho -> aetpkss1.dll</p>
                  <p class="block__list__item">Certificado BirdId -> bird-pkcs11.dll</p>                

                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="articles-block">
              <h6 class="articles-block__title">Linux DLL</h6>
              <div class="row">
                <div class="col-12">
                  
                  <p class="block__list__item">Token SafeNet -> libeTPkcs11.so</p>
                  <p class="block__list__item">Token Epass2003 -> libcastle.so.1.0.0.so</p>
                  <p class="block__list__item">SmartCard Oberthur -> libOcsCryptoki.so</p>
                  <p class="block__list__item">SmartCard Morpho -> libetoken.so.9.1.7</p>
                  <p class="block__list__item">Certificado BirdId -> birdid-pkcs11.so</p>                

                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="articles-block">
              <h6 class="articles-block__title">Mac DLL</h6>
              <div class="row">
                <div class="col-12">
                  
                  <p class="block__list__item">Token SafeNet -> libeTPkcs11.dylib</p>
                  <p class="block__list__item">Token Epass2003 -> libcastle.1.0.0.dylib</p>
                  <p class="block__list__item">SmartCard Oberthur -> libOcsCryptoki.dylib</p>
                  <p class="block__list__item">SmartCard Morpho -> libaetpkss.dylib</p>
                  <p class="block__list__item">Certificado BirdId -> birdid-pkcs11.dylib</p>                

                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="articles-block">
              <h6 class="articles-block__title">Java Bloqueando</h6>
              <div class="row">
                <div class="col-12">
                  
                  <p class="block__list__item">https://emissor.ca.inf.br</p>
                  <p class="block__list__item">https://emissor.ca.inf.br:443</p>
                  <p class="block__list__item">https://emissor.ca.inf.br:8080</p>
                  <p class="block__list__item">http://emissor.ca.inf.br</p>
                  <p class="block__list__item">http://emissor.ca.inf.br:443</p>                

                </div>
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
  data() {
    return {
      checkds:[],
      midia: '',
      modelo: ''
    }
  },  
  computed: {
    recebemidia(){//recebe o status, qual o driver foi selecionado
      return this.$store.state.service
    }
  },
  methods: {
    eVerifiqueCheckds(x){//condição para marcar os checks, caso adicione mais almente a condição de para do FOR
      for(var i=0;i<=4;i++){
        if (i==x){
          this.checkds[i] = true;
        }else{
          this.checkds[i] = false;
        }
      }
    },
  }
}
</script>

<style scoped>
.fundo{
  background: white;
  position: absolute;
  height: 100%;
}
.conteiner-sup{
    margin-right: 50px;
    margin-left: 50px;
}
.help-font{
  max-width: 400px;
}
.font1{
  color: #3ecb90;
  font-size: 32px;
}
.font2{
  font-size: 1.6rem;
}
/* bloco duvida */
.articles-block {
    margin-bottom: 30px;
    padding: 15px;
    border: 1px solid #f3f3f3;
    border-radius: 5px;
}
.articles-block__title {
  border-bottom: 1px solid #3ecb90;
  padding-bottom: 15px;
  font-size: 1.4rem;
  color: #3ecb90;
}
.block__list__item {
  color: #013d52;
  font-size: 1rem;
}


.cust-img{
  margin-top: 150px;
}
.bb{
  border: 1px solid red;
}

</style>