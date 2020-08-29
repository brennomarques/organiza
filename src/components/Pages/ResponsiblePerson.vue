<template>
  <section class="container mt-3">
    <div class="row">
      <div class="col-12 col-md-10 pt-3 bg-light">
        <button class="round-button">X</button>
        <div class="form-group">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Nome do Responsável</label>
              <input type="text" class="form-control" placeholder="Insira o nome aqui" />
            </div>
            <div class="form-group col-md-4">
              <label>Responsabilidades</label>
              <select class="custom-select">
                <option selected>---Selecione---</option>
                <option value="1">Sócio</option>
                <option value="2">Administrador</option>
                <option value="3">Responsável Legal</option>
                <option value="4">Cotista</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-10">
              <input type="text" class="form-control" placeholder="Digite observação aqui." />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
    .round-button {
        width:25px;
        height:25px;
        border: #3ecb90;
        border-radius: 50%;
        color:#f5f5f5;
        text-align:center;
        background: #3ecb90;
        font-size:15px;
        font-weight:bold;
        cursor: pointer;
        position: absolute;
        right: -10px;
        top: -10px;
        z-index: 2;
    }
    .round-button:hover {
        background: rgb(80, 197, 148);
        border: rgb(80, 197, 148);
    }
</style>