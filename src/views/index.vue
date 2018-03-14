<template>
  <div class="index">
    <router-view></router-view>
    <NavBar></NavBar>
  </div>
</template>

<style scoped lang='less'>
.index{
  padding-bottom: 50px
}
</style>

<script>
import NavBar from "../components/navBar/navBar";
export default {
  name: "index",
  components: {
    NavBar
  },
  data() {
    return {};
  }
};
</script>
