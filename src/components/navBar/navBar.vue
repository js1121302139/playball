<template>
  <div class="navBar">
    <div class="navBarItem" :key="item.name" v-for="item in navBar">
      <img src="" alt="">
      <router-link :to="{name:item.name}"  v-text="item.navTxt"></router-link>
    </div>
  </div>
</template>

<style scoped lang='less'>
  .navBar{
    position: fixed;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    width: 100%;
    height: 3.125rem;
    background: #fff;
    &:after{
      position: absolute;
      top: 0;
      content: '';
      display: block;
      transform: scaleY(.5);
      height: 1px;
      width: 100%;
      background: #333;
    }
    .navBarItem{
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      height: 100%;
      a{
        text-decoration: none;
      }
    }
  }
</style>

<script>
export default {
  name: "navBar",
  data() {
    return {
      navBar: [
        {
          navTxt: "首页",
          name: "ballHall"
        },
        {
          navTxt: "1",
          name: "gameField"
        },
        {
          navTxt: "s",
          name: "mall"
        },
        {
          navTxt: "我的",
          name: "me"
        }
      ]
    };
  }
};
</script>
