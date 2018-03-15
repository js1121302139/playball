<template>
  <div class="searchBox" :class="{ isTop : isTop }">
    <div class="Address" @click="openPage('address',{Tit:'搜索-北京'})">
      <p>福州</p>
      <span class="iconfont add-ico">&#xe60e;</span>
    </div>
    <div class="searchBox iconfont">
      <input type="text" @focus="openPage('searchPage',{Tit:'搜索-北京'})" placeholder="输入球馆名称,地址">
      <span class="search-ico">&#xe61a;</span>
    </div>
    <div class="Message iconfont">
      <span class="Message-ico">&#xe6a5;</span>
      <span class="MessageNum">22</span>
    </div>
  </div>
</template>

<style scoped lang='less'>
.isTop{
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: 999;
  background: #fff;
}
.searchBox {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 3.125rem;
  .Address {
    display: flex;
    height: 3.125rem;
    align-items: center;
    font-size: 0.9375rem;
    color: #333;
    .add-ico {
      font-size: 1rem;
    }
  }
  .searchBox {
    position: relative;
    display: flex;
    height: 2.1875rem;
    input {
      flex: 1;
      height: 1.25rem;
      text-indent: 1.5625rem;
      outline: none;
      border:1px solid #cecece;
      background: #ccc;
      border-radius: 1.25rem;
    }
    .search-ico {
      position: absolute;
      left: 1.5625rem;
      font-size: 1.5rem;
    }
  }
  .Message {
    position: relative;
    display: flex;

    .Message-ico {
      font-size: 1.25rem;
    }
    .MessageNum {
      position: absolute;
      display: block;
      padding: 2px 4px;
      font-size: 0.75rem;
      left: .375rem;;
      top: -0.625rem;;
      border-radius: .5rem;;
      background: #f00;
    }
  }
}
</style>

<script>
export default {
  name: "searchBox",
  props:{
    isTop:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{

    }
  },
  created(){
      console.log();
  },
  methods:{
    openPage(view, item) {
      this.$router.push({ name: view, params: item});
    }
  },
  mounted(){

  }
};
</script>
