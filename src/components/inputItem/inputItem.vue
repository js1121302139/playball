<template>
  <div class="inputItem iconfont">
    <div class="inputIco ">
      <span v-html="ico"></span>
    </div>
    <div class="inputData">
      <input type="text" :placeholder="placeholder">
    </div>
  </div>
</template>

<style scoped lang='less'>
.inputItem {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  height: 1.875rem;
  .inputIco{
    display: flex;
    margin-right: .4375rem;
    span{
      font-size: 1.5625rem;;
    }
  }
  .inputData{
    display: flex;
    flex: 1;
    input{
      width: 100%;
    }
  }
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 0.0625rem;
    transform: scaleY(0.5);
    position: absolute;
    bottom: 0;
    left: 0;
    background: #333;
  }
}
</style>

<script>
export default {
  name: "inputItem",
  props:[
    'ico',
    'placeholder'
  ]
};
</script>
