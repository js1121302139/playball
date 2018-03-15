<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/navBar/navBar";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang='less'>
@import "reset.css";
@font-face {
  font-family: 'iconfont';  /* project id 589236 */
  src: url('//at.alicdn.com/t/font_589236_tj0ir2q937v3rf6r.eot');
  src: url('//at.alicdn.com/t/font_589236_tj0ir2q937v3rf6r.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_589236_tj0ir2q937v3rf6r.woff') format('woff'),
  url('//at.alicdn.com/t/font_589236_tj0ir2q937v3rf6r.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_589236_tj0ir2q937v3rf6r.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
input{
  outline: none;
}
</style>
