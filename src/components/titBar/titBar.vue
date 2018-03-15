<template>
  <div class="titBar iconfont">
    <span v-html="ico" v-if="ico!==''"></span>
    <span class="titTxt" v-text="title"></span>
  </div>
</template>

<style scoped lang='less'>
  .titBar{
    height: 1.25rem;
    display: flex;
    flex: 1;
    justify-content: space-between;
    .titTxt{

    }
  }
</style>

<script>
  export default {
    name: 'titBar',
    props:{
      ico:{
        type:String,
        default:''
      },
      title:{
        type:String,
        default:''
      }
    }
  }
</script>
