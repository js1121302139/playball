<template>
  <div class="selecSession">
    <x-header :left-options="{backText: ''}">选择场地</x-header>
    <div class="chooseDate" ref="dateWrappers">
       <div class="dateList">
            <div class="dateItem" v-for="item in 7" :key="item">
                <p class="week">今日</p>
                <p class="day">3.6</p>
            </div>
       </div>
    </div>
    <!-- 选择场地和时间 -->
    <div class="chooseDateSession"  ref="sessionList">
        <div class="container" ref="DateSessionContainer">
            <div class="dateList" ref="dateList" :class="{dateListActive :scroll2Date}">
                <div class="dateItem" v-for="item in 10" :key="item">
                    <span>10:00</span>
                    <span>11:00</span>
                </div>
            </div>
            <div class="sessionList">
                <div class="container" :style="`width:${width}px`">
                    <div class="sessionListItem" ref="sessionListItem" v-for="item in 10" :key="item">
                        <div class="sessionNum">
                            {{item}}号场
                        </div>
                        <div class="moneyList" v-for="items in 10" :key="items">
                            $3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 显示选择的场 -->
    <div class="showChooseSession" ref="showChooseSession">
        <div class="container">
            <div class="chooseItem" :key="item" v-for="item in 10">
                <div class="Tit">
                    18:00 ~ 19:00
                </div>
                <div class="sessionType">
                    1号场(室内场)
                </div>
            </div>
        </div>   
    </div>

    <x-button mini type="primary">primary</x-button>
  </div>
</template>

<script type="text/ecmascript-6">
import { XHeader, XButton, InlineLoading } from "vux";
import BScroll from "better-scroll";
import Scroll from "@/components/scroll/scroll";
export default {
  name: "selecSession",
  data() {
    return {
      scroll: null,
      scroll2: null,
      scroll2Date: false,
      scroll3: null,
      width: 0
    };
  },
  components: {
    XHeader,
    Scroll,
    XButton,
    InlineLoading
  },
  methods: {},
  mounted() {
    let sessionListItems = this.$refs.sessionListItem;
    sessionListItems.map(item => {
      this.width += item.clientWidth + 5;
      this.$refs.DateSessionContainer.style.height += item.clientHeight + 5 +'px';
    });
    this.scroll = new BScroll(this.$refs.dateWrappers, {
      probeType: 3,
      scrollX: true,
      scrollY: true,
      click: true,
      tap: true
    });
    this.scroll2 = new BScroll(this.$refs.sessionList, {
      click: true,
      freeScroll: true,
      mouseWheel: true,
      probeType: 3,
      pullDownRefresh: false,
      pullUpLoad: false,
      scrollX: true,
      scrollY: true,
      startY: 0,
      scrollbar: {
        fade: false,
        interactive: true
      }
    });
    this.scroll2.on("scroll", pos => {
      if (pos.x < 0) {
        this.scroll2Date = Math.abs(pos.x) > 10;
        this.$refs.dateList.style.left = Math.abs(pos.x) + "px";
      }
    });
    this.scroll3 = new BScroll(this.$refs.showChooseSession, {
      probeType: 1,
      scrollX: true,
      scrollY: false,
      click: true,
      tap: true
    });
  }
};
</script>

<style scoped lang="less">
.showChooseSession {
  display: flex;
  overflow: hidden;
  .container {
    display: flex;
    padding-left: 5px;
  }
  .chooseItem {
    display: flex;
    width: 110px;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid #f0f;
    margin-right: 5px;
    .Tit {
      padding: 0 10px;
      height: 20px;
      background: #f0f;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
    }
    .sessionType {
      text-align: center;
      padding: 4px 3px;
      font-size: 13px;
    }
  }
}
.chooseDate {
  display: flex;
  flex: 1;
  padding: 10px 0px;
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
  border-bottom: 1px solid #333;
  .dateList {
    display: flex;
    .dateItem {
      display: flex;
      flex-direction: column;
      width: 85px;
      height: 63.5px;
      align-items: center;
      justify-content: center;
      .week {
        margin-bottom: 5px;
        font-size: 27.5px;
        color: #333333;
      }
      .day {
        font-size: 11px;
        color: #333333;
      }
    }
  }
}
.chooseDateSession {
  position: relative;
  display: flex;
  overflow: hidden;
  height: 300px;
  .container {
    display: flex;
    .dateList {
      display: flex;
      flex-direction: column;
      width: 50px;
      padding-top: 34px;
      margin-right: 4px;
      .dateItem {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 30px;
        padding: 4px 0px;
        margin-bottom: -3px;
        margin-bottom: 5px;
        background: #f8f8f8;
        span {
          margin-bottom: 3px;
          font-size: 12px;
          color: #333;
        }
      }
    }
    .dateListActive {
      position: relative;
      z-index: 999;
    }
  }

  .sessionList {
    .container {
      display: flex;
      width: 600px;
      .sessionListItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3px 0px;
        margin-right: 5px;
        .sessionNum {
          padding: 4px 0;
          width: 100%;
          text-align: center;
          background: #f8f8f8;
          margin-bottom: 10px;
          font-size: 14px;
        }
        .moneyList {
          font-size: 18px;
          height: 38px;
          line-height: 38px;
          padding: 0 12px;
          margin-bottom: 5px;
          background: chartreuse;
        }
      }
    }
  }
}
</style>
