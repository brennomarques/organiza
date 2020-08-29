<template>
    <div class="alert-cust custom-a warning-a animated fadeIn">
        <div class="row">
            <div class="col-11 col-md-11 d-flex justify-content-md-center">
                <i class="fa fa-exclamation-circle mr-2 mt-1"></i>
                <slot></slot>
            </div>
            <div class="col-1 col-md-1 justify-content-between">
                <button type="button" class="close" data-dismiss="alert">
                    <span aria-hidden="true" style="font-size:20px">x</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
.alert-cust{
    padding: .75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    text-align: center;
}
.custom-a{
  position: absolute;
  top: 0;
  left: 25%;
  height: 45px;
  width: 900px;
}
.warning-a{
    background-color: #fcf8e3;
    border-color: #faf2cc;
    color: #8a6d3b;
}
</style>

