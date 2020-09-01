<template>
  <section class="container">
      <div class="row">
        <div class="col-12 col-md-10 mb-3 bg-light">
            <button class="round-button">X</button>
            <div class="">
                <label class="font_title_upload mb-0">Contrato de aluguel do carro UP!.pdf</label>
                <p class="font_size_calc">Tamaho: 621.3 KB</p>                
            </div>
        </div>

      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    .font_size_calc{
        font-size: 13px;
        color: #6c757d!important;
    }
    .font_title_upload{
        color: #212529;
    }
    .round-button {
        width:20px;
        height:20px;
        border: #3ecb90;
        border-radius: 50%;
        color:#f5f5f5;
        text-align:center;
        background: #3ecb90;
        font-size:10px;
        font-weight:bold;
        cursor: pointer;
        position: absolute;
        right: -5px;
        top: -5px;
        z-index: 2;
    }
    .round-button:hover {
        background: rgb(80, 197, 148);
        border: rgb(80, 197, 148);
    }
</style>