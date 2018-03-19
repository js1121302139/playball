<template>
  <div class="scroll" ref="scrollView">
      <div class="container">
          <div class="dowLoding" v-if="isDowLoad">
              <slot name="dowLoding"></slot>
          </div>
        <slot>
        </slot>
         <div class="upLoding" v-if="isUpLoding">
              <slot name="upLoding"></slot>
          </div>
      </div>

  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import { type } from "os";
export default {
  name: "scroll",
  components: {},
  props: {
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
    freeScroll: {
      type: Boolean,
      default: false
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    },
    pullDownRefresh: {
      type: Boolean,
      default: true
    },
    startX: {
      type: Boolean,
      default: true
    },
    startX: {
      type: Boolean,
      default: false
    },
    isDowLoad:{
        type:Boolean,
        default:false
    },
    isUpLoding:{
        type:Boolean,
        default:false
    }
  },
  data() {
    return {
      isDowLoding: false
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
      let scroll = new BScroll(container,{
        click:true,
        tap:true,

      })
    },
    scrollInit() {

      let wrapper = this.$refs.scrollView;
      this.scrollViewOption(this.position,wrapper)

    }
  },
  created() {},
  mounted() {
    this.scrollInit();
  },
  watch:{
      isDowLoad(val,oldVal){
        if(val){
            this.isDowLoding = false;
            val = false;
        }else{
            this.isDowLoding = true;
        }
         console.log(val+"888")
         console.log(this.isDowLoding+"999")
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
