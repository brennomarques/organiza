<template>
    <div class="alert-cust alert-cust-sucess custom-a animated fadeIn" >
        <div class="row">
            <div class="col-11 col-md-11 d-flex justify-content-md-center">
                <i class="fa fa-check-circle fa-lg mr-2 mt-1"></i>
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

<style>
.alert-cust{
    padding: .75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    text-align: center;
}
.alert-cust-sucess{
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
}
.custom-a{
  position: absolute;
  top: 0;
  left: 25%;
  height: 45px;
  width: 900px;
}

</style>