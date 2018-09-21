<template>
  <div id="app">
    <ProductList/>
    <hr>
    <ShopingCart/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import ShopingCart from './components/ShopingCart'

export default {
  name: 'app',
  components: {
    ProductList,
    ShopingCart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
