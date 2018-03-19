<template>
  <div class="mall">
    <Scroll :position="{
      position:'absolute',
      width:100,
      top:0,
      bottom:'50px'
    }"
    :loadOver="loadOver"
    @scrollIn="scrollIn"
    @upLoading="uploading"
    >
      <li v-for="item in list">{{item}}</li>
    </Scroll>
  </div>
</template>

<style scoped lang='less'>
  .mall{
    position: absolute;
    top: 0;
    bottom: 50px;
    width: 100%;
    overflow: hidden;
  }
</style>

<script>
import Scroll from "@/components/scroll/scroll";
export default {
  name: "mall",
  components: {
    Scroll
  },
  data(){return{
    loadOver:false,
    list:50
  }},
  methods:{
    scrollIn(pos){
      //console.log(pos)
    },
    uploading(){
      setTimeout(()=>{
        this.list+=10;
      },1000)
      console.log(111)
      console.log('上拉')
      this.loadOver =  this.list;
    }
  }
};
</script>
