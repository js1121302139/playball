<template>
  <div class="ballHallList">
     <x-header :left-options="{backText: ''}">球馆列表</x-header>
     <div class="wrapper" ref="wrapperList">
       <ul class="content">
         <li>
            <div class="hallItem" @click="c" :key="item" v-for="item in lists">
              <img v-lazy="'http://www.3dmgame.com/uploads/allimg/150804/153_150804102337_1.jpg'" alt="">
              <div class="hallInfo">
                <p class="hallName">馆馆</p>
                <rater v-model="data7" disabled :font-size="12" :min="0"></rater>
                <div class="hallAddress">
                  <p>长沙万达</p>
                  <p>1000KM</p>
                  </div>
                </div>
                <div class="hallMoney">
                  ¥100
                </div>
              </div>
         </li>
         <li v-if="isloading" class="loading">
          <InlineLoading></InlineLoading><span>加载中</span>
         </li>
       </ul>
     </div>
  </div>
</template>

<style scoped lang='less'>
.wrapper {
  position: absolute;
  top: 46px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}
.ballHallList {
  .loading {
    text-align: center;
    height: 35px;
    line-height: 35px;
  }
  .hallItem {
    display: flex;
    padding: 15px 10px;
    justify-content: space-between;
    border-bottom: 1px solid #333;
    background: #fff;
    img {
      width: 70px;
      height: 70px;
      border-radius: 35px;
      margin-right: 5px;
    }
    .hallInfo {
      flex: 1;
      margin-right: 40px;
      .hallName {
        font-size: 18px;
        color: #333;
      }
      .hallAddress {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
      }
    }
    .hallMoney {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .hallItem:last-child {
    border-bottom: none;
  }
}
</style>

<script>
import { XHeader, Panel, Rater, InlineLoading } from "vux";
import BScroll from "better-scroll";
import { setTimeout } from "timers";
export default {
  name: "ballHallList",
  components: {
    XHeader,
    Panel,
    Rater,
    InlineLoading
  },
  methods: {
    c(){
      console.log('a');
    },
    onImgError(item, $event) {
      console.log(item, $event);
    },
    uploads(pos) {
      console.log(`shangla`);
      this.isloading = true;
       if(this.lists>50){
         this.isloading = false;
         return false;
       }
      setTimeout(() => {
        this.lists += 10;
        this.scroll.finishPullUp();
        this.isloading = false;
      }, 2000);

      this.scroll.refresh();
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapperList, {
      probeType: 1,
      pullUpLoad: {
        threshold: 0
      },
      scrollbar: {
        fade: true,
        interactive: false // 1.8.0 新增
      },
      click:true,
      tap:true
    });
    this.scroll.on("pullingUp", this.uploads);
  },
  data() {
    return {
      data7: 1,
      type: "1",
      scroll: null,
      lists: 10,
      isloading: false,
      list: [
        {
          src: "http://somedomain.somdomain/x.jpg",
          fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "标题一",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: "/component/cell"
        },
        {
          src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "标题二",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: {
            path: "/component/radio",
            replace: false
          }
        }
      ]
    };
  }
};
</script>
