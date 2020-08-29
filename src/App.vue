<template>
  <div id="app">
    <Menu/>
    <br>
    <router-view/>
  </div>
</template>

<script>
// jQuery primeiro, depois Popper.js, depois Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery"
import "popper.js"
import "bootstrap"
import 'animate.css/animate.min.css' 
import "font-awesome/css/font-awesome.min.css";
import "../src/style/Style.css"
//import NavBarLogin from './components/Menu-pages/NavBarLogin'
import Menu from './components/Menu-pages/Menu'


export default {
  components: {Menu},
  
}
</script>

<style>
.bb{
  border: 1px solid red;
}  

</style>