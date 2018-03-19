<template>
  <div class="scroll" ref="scrollView">
      <div class="container">
        <slot>
        </slot>
        <load-more v-if="showLoding" tip="正在加载"></load-more>
        <load-more :show-loading="false" tip="我可是有底线的" background-color="#fbf9fe"></load-more>
        <load-more :show-loading="false" background-color="#fbf9fe"></load-more>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import { LoadMore  } from 'vux'
import { type } from "os";
export default {
  name: "scroll",
  components: {
    LoadMore
  },
  props: {
    // scroll定位
    position:{
      type:Object,
      default:{
        height:100,
        width:'100%',
        top:0,
        bottom:0,
        position:''
      }
    },
    loadOver:{
      type:'',
      default:false
    },
    showLoding:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll:null
    };
  },
  methods: {
    scrollViewOption(position,container){
      console.log(position.position)
      if(position.position=='absolute'){
        container.style.position = position.position;
        container.style.top = position.top;
        container.style.bottom = position.bottom;
        container.style.width = position.width;
        console.log(container.style)
      }
      this.scroll = new BScroll(container,{
        probeType:3,
        click:true,
        tap:true,
        pullUpLoad: {
          threshold: 0
        }
      })
      this.scroll.on('scroll',(pos)=>{
        this.$emit('scrollIn',pos)
      })

    },
    scrollInit() {
      let wrapper = this.$refs.scrollView;
      this.scrollViewOption(this.position, wrapper)
    },
    _refresh(){
      console.log('00');
      this.scroll.finishPullUp();
    }
  },
  created() {},
  mounted() {
    this.scrollInit();
    this.scroll.on('pullingUp',()=>{
      setTimeout(()=>{
        this.$emit('upLoading')
      },100)
    })
  },
  watch:{
    loadOver(val,oldVal){
      console.log(val)
      setTimeout(()=>{
        this._refresh();
      },500)
    }
  }
};
</script>

<style scoped lang="less">
.scroll {
  width: 100%;
  height: 100%;
}
</style>
