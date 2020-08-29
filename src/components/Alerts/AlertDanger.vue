<template>

    <div class="alert-cust danger-a custom-a animated fadeIn">
        <div class="row">
            <div class="col-11 col-md-11 d-flex justify-content-md-center">
                
                <i class="fa fa-times-circle fa-lg mr-2 mt-1"></i>
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
.danger-a{
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
</style>