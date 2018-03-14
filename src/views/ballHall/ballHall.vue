<template>
  <div class="ballHall">
    <SearchBox />
    <swiper :list="list" ></swiper>
    <!-- 寻找场地 -->
    <div class="selectHall">
      <InputItem ico="&#xe642;" placeholder="riqia" />
      <InputItem ico="&#xe62a;" placeholder="riqia" />
      <XButton plain type="primary"
       style="margin-top:10px; border-radius:35px; height:35px; line-height:35px;"
       @click.native="openPage('ballHallList',{})">立即找场</XButton>
    </div>
    <div class="HallList">
      <TitBar title="推荐场馆"></TitBar>
      <div class="hallItem" @click.stop="openPage('hallInfo',{item})" :key="item" v-for="item in 10">
        <img src="http://www.3dmgame.com/uploads/allimg/150804/153_150804102337_1.jpg" alt="">
        <div class="itemInfo">
          <p class="hallName">数字篮球生活馆</p>
          <div class="hallScore">
            分数
          </div>
          <p class="hallAddress">仓山万达 100m</p>
        </div>
        <XButton class="btn" type="primary" @click.native.stop="openPage('Reservation',item)">预定</XButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
.Banner {
  width: 100%;
  height: 150px;
}
.selectHall {
  padding: 0 24px;
  .nowSelectHall {
    width: 100%;
    height: 1.5625rem;
    background: #ccc;
    text-align: center;
    line-height: 25px;
    border-radius: 25px;
    margin-top: 10px;
  }
}
.HallList {
  padding: 0 12px;
  .titBar {
    height: 2.1875rem;
    line-height: 2.1875rem;
    text-indent: 0.9375rem;
  }
}
.hallItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.25rem;
  background: #ccc;
  border-radius: 0.1875rem;
  margin-bottom: 0.625rem;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
    margin-right: 1.25rem;
  }
  .itemInfo {
    flex: 1;
    .hallName {
      font-size: 1.25rem;
      margin-bottom: 0.3125rem;
    }
    .hallScore {
      font-size: 0.875rem;
      margin-bottom: 0.3125rem;
    }
    .hallAddress {
      font-size: 0.75rem;
    }
  }
  .btn {
    width: 5rem;
    height: 2.1875rem;
    line-height: 2.1875rem;
    text-align: center;
    border-radius: 1.5625rem;
    &::after{
      display: none;
    }
  }
}
</style>

<script>
import SearchBox from "@/components/searchBox/searchBox";
import InputItem from "@/components/inputItem/inputItem";
import TitBar from "@/components/titBar/titBar";
import {
  Swiper,
  XButton
 } from "vux";
export default {
  name: "ballHall",
  components: {
    SearchBox,
    InputItem,
    TitBar,
    Swiper,
    XButton
  },
  data() {
    return {
      list: [
        {
          img: "https://static.vux.li/demo/1.jpg",
          title: "送你一朵fua"
        },
        {
          img: "https://static.vux.li/demo/2.jpg",
          title: "送你一辆车"
        },
        {
          img: "https://static.vux.li/demo/3.jpg",
          title: "送你一次旅行",
        }
      ]
    };
  },
  methods: {
    openPage(view, item) {
      this.$router.push({ name: view, params: { ...item, Tit: "bb" } });
    }
  }
};
</script>
