<template>
  <div class="ballTeam">
    <x-header  :left-options="{backText: ''}">我的球队</x-header>
    <tab active-color="#333" bar-active-color="#35495e">
      <tab-item selected >我管理的</tab-item>
      <tab-item >我加入的</tab-item>
      <tab-item >我关注的</tab-item>
    </tab>
    <div ref="wrapper" class="wrapper">
      <group class="container" gutter="0">
        <cell is-link class="ballTeamItem" :key="item" v-for="item in 20">
            <img slot="icon" v-lazy="'http://www.3dmgame.com/uploads/allimg/150804/153_150804102337_1.jpg'" alt="">
            <div slot="after-title" class="ballTeamInfo">
                <p class="ballTeamName">破风（10人）</p>
                <div class="record">
                  <span>胜场:80场</span>
                  <span>共:90场</span>
                  <span>胜率:88%</span>
                </div>
            </div>
        </cell>
      </group>
    </div>
  </div>
</template>

<style scoped lang='less'>
.wrapper {
  position: absolute;
  top: 90px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  padding-bottom: 21px;
  .ballTeamItem {
    img {
      width: 60px;
      height: 60px;
      margin-right: 5px;
      border-radius: 30px;
    }
    .ballTeamInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .ballTeamName {
        margin-bottom: 5px;
        font-size: 16px;
      }
      .record {
        display: flex;
        justify-content: space-between;
        padding-right: 12px;
        font-size: 12px;
        color: #999;
        span:first-child {
          color: green;
        }
      }
    }
  }
}
</style>

<script>
import BScroll from "better-scroll";
import { XHeader, Group, Cell, Tab, TabItem } from "vux";
export default {
  name: "ballTeam",
  components: {
    Group,
    Cell,
    Tab,
    XHeader,
    TabItem
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {});
  }
};
</script>
