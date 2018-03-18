<template>
  <div class="ballTeamInfo">
       <x-header  :left-options="{backText: ''}">球队信息</x-header>
       <div class="ballTeamContainer">
          <flexbox :gutter="0" >
            <div class="imgContainer">
                <div class="BallTeamInfoImg">
                  <img slot="icon" v-lazy="'http://www.3dmgame.com/uploads/allimg/150804/153_150804102337_1.jpg'" alt="">
                </div>
            </div>
              <flexbox-item >
                  <div class="ballTeamInfoTxt">
                      <p class="ballTeamName">兄弟盟队</p>
                      <!-- 战绩 -->
                      <div class="record">
                        <span>20胜</span>
                        <span>20负</span>
                        <span>最多连胜:2</span>
                      </div>
                      <p class="introduction">
                        简介。。。。。。。
                      </p>
                  </div>
            </flexbox-item>
          </flexbox>
       </div>
        <tab active-color="#333" bar-active-color="#35495e">
          <tab-item selected @on-item-click="()=>{}">资料</tab-item>
          <tab-item @on-item-click="()=>{}">视频</tab-item>
          <tab-item @on-item-click="()=>{}">赛程</tab-item>
          <tab-item @on-item-click="()=>{}">公告</tab-item>
        </tab>
  </div>
</template>

<script type="text/ecmascript-6">
import { XHeader, Flexbox, FlexboxItem, Tab, TabItem } from "vux";
export default {
  name: "ballTeamInfo",
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    Tab,
    TabItem
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.ballTeamContainer {
  padding: 0 12px;
  margin: 20px 0;
  .imgContainer {
    flex: 0;
  }
  .BallTeamInfoImg {
    margin-right: 15px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
  }
  .ballTeamInfoTxt {
    flex: 1;
    padding-right: 20px;
    .ballTeamName {
      font-size: 24px;
      color: #000;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .record {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      span:first-child {
        color: green;
      }
      span:last-child {
        color: green;
      }
    }
    .introduction {
    }
  }
}
</style>
