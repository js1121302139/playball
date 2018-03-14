<template>
  <div class="address">
    <TopBar :Tit="$route.params.Tit"></TopBar>
  </div>
</template>

<style scoped lang='less'>
</style>

<script>
import TopBar from '@/components/topBar/topBar'
  export default {
    name: 'SetAddress',
    components:{
      TopBar
    }
  }
</script>
