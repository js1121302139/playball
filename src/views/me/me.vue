<template>
  <div class="me">
    <blur :blur-amount=40 :url="url">
      <p class="center"><img :src="url"></p>
      <div class="userInfo">
        <p class="userName">name</p>
        <div class="userLabe">
          <span>队长</span>
          <span>队长</span>
          <span>队长</span>
          <span>队长</span>
        </div>
      </div>
    </blur>
    <Flexbox class="meInfo"  >
      <div class="container">
        <FlexboxItem class="meInfoItem" @click.native="openPage('meInfo',{})">
          <span class="iconfont meInfoIco">&#xe62b;</span>
          <p>我的信息</p>
        </FlexboxItem>
        <FlexboxItem class="meInfoItem">
          <span class="iconfont meInfoIco">&#xe66b;</span>
          <p>球队信息</p>
        </FlexboxItem>
      </div>
    </Flexbox>
    <group>
      <cell-box is-link>
        <span class="iconfont box-ico">&#xe66b;</span> 我的比赛
      </cell-box>
      <cell-box is-link>
        <span class="iconfont box-ico">&#xe66b;</span> 我的订单
      </cell-box>
      <cell-box is-link>
        <span class="iconfont box-ico">&#xe66b;</span> 收藏
      </cell-box>
    </group>
  </div>
</template>


<style scoped lang='less'>
.me {
}
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
  .userName {
    text-align: center;
    font-size: 18px;
    color: #ffffff;
  }
  .userLabe {
    margin-top: 5px;
    display: flex;
    flex: 1;
    justify-content: center;
    span {
      display: inline-block;
      padding: 3px 5px;
      margin: 0 3px;
      font-size: 12px;
      color: #333;
      background: rgba(255, 255, 255, 0.65);
      border-radius: 3px;
    }
  }
}
.meInfo {
  margin-top: 10px;
  .container {
    padding: 10px 0;
    display: flex;
    flex: 1;
    justify-content: space-between;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.406);
  }
  .meInfoItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #333;
    .meInfoIco {
      text-align: center;
      font-size: 40px;
      margin-bottom: 5px;
    }
  }
  .meInfoItem:last-child {
    border: none;
  }

}
.box-ico{
    font-size: 24px;
    margin-right: 12px;
  }
</style>

<script>
import { Blur, Flexbox, FlexboxItem, Group, Cell, CellBox } from "vux";
export default {
  name: "me",
  components: {
    Blur,
    Flexbox,
    FlexboxItem,
    Group,
    CellBox
  },
  data() {
    return {
      url: "https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg"
    };
  },
  methods:{
    openPage(view, item) {
      this.$router.push({ name: view, params: { ...item, Tit: "bb" } });
    }
  }
};
</script>
