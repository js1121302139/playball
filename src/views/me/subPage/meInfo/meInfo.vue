<template>
  <div class="meInfo">
    <x-header  :left-options="{backText: ''}">我的信息</x-header>
    <blur :blur-amount=40 :url="url" :height=180>
      <p class="center"><img :src="url"></p>
      <div class="userInfo">
        <p class="userName">name</p>
      </div>
    </blur>
    <tab active-color="#333" bar-active-color="#35495e" class="meInfoNav">
      <tab-item selected  @on-item-click="onItemClick"><router-link :to="{name:'myInfo_Mod'}">我的信息</router-link></tab-item>
      <tab-item @on-item-click="onItemClick"><router-link :to="{name:'technicalStatistics_Mod'}">技术统计</router-link></tab-item>
    </tab>
    <router-view></router-view>
  </div>
</template>

<style scoped lang='less'>
.center {
  text-align: center;
  padding-top: 20px;
  margin-bottom: 14px;
  color: #fff;
  font-size: 18px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
}
.userInfo {
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: center;
  .userName {
    text-align: center;
    font-size: 18px;
    color: #ffffff;
  }
}
.meInfoNav{
  a{
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: #000;
  }
  .vux-tab-selected{
    a{
      color: #333;
    }
  }
}
</style>

<script>
import { XHeader, Blur, Tab, TabItem } from "vux";
export default {
  name: "meInfo",
  data() {
    return {
      url: "https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg"
    };
  },
  components: {
    XHeader,
    Blur,
    Tab,
    TabItem
  },
  methods: {
    onItemClick() {
      console.log("a");
    }
  }
};
</script>
