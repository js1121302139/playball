<template>
  <div class="topBar iconfont">
    <span class="back" @click="back">&#xe612;</span>
    <div class="titTxt" v-text="Tit">
        顶部导航
    </div>
    <div class="fun">
      功能
    </div>
  </div>
</template>

<style scoped lang='less'>
.topBar{
  display: flex;
  flex: 1;
  height: 2.8125rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 .75rem;
  box-shadow: 0 0 .375rem -1px rgba(0, 0, 0, 0.42);
  .back{
    width: 2.8125rem;
    height: 2.8125rem;
    line-height: 2.8125rem;
    text-align: center
  }
  .titTxt{
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .fun{
    display: flex;
    width: 2.8125rem;
    height: 2.8125rem;
    text-align: center;
    line-height: 45px;
  }
}
</style>

<script>
  export default {
    name: 'topBar',
    props:['Tit'],
    methods:{
      back(){
        this.$router.go(-1);
      }
    }
  }
</script>
