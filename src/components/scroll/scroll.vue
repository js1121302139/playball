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
    scrollInit() {
      let options = {
        probeType: 3,
        startY: true,
        click: true,
        tap: true,
        pullDownRefresh: {
          threshold: 50,
          stop: 20
        },
        pullUpLoad: {
          threshold: 50
        }
      };
      let scroll = new BScroll(this.$refs.scrollView, options);
      //   scroll, scrollEnd, pullingUp, pullingDown
      scroll.on("scroll", pos => {
        this.$emit("scrollIn", pos);
      });
      scroll.on("pullingDown", pos => {
        this.isDowLoding = true;
        console.log(this.pullUpLoad);
        this.$emit("pullingDown");
        scroll.finishPullDown();
      });
      scroll.on("pullingUp", pos => {
        this.$emit("pullingUp");
        scroll.finishPullUp();
      });
      scroll.on("scrollEnd", pos => {
        this.$emit("scrollIn", pos);
      });
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
