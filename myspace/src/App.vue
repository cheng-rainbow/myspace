<template>
  <div>
    <NavBar/>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import NavBar from './components/NavBar'

export default {
  name : "App",
  components: {
    NavBar// 注册 NavBar 组件
  }
}
</script>


<style>

</style>
