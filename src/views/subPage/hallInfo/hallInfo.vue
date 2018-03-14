<template>
  <div class="hallInfo">
    <TopBar :Tit="$route.params.Tit"></TopBar>
    <!-- 店铺环境 -->
    <div class="hallEnvironment">
      <div class="environmentImgs">
        <img src="http://www.3dmgame.com/uploads/allimg/150804/153_150804102337_1.jpg" alt="">
        <span class="ImgNum">11</span>
      </div>
      <div class="hallName">
        <p class="hallNameTxt">xxxxx</p>
        <p class="source">评分</p>
        <div class="giveService">
          <span>按摩</span>
          <span>按摩</span>
          <span>按摩</span>
          <span>按摩</span>
          <span>按摩</span>
          <span>按摩</span>
          <span>按摩</span>
          <span>按摩</span>
        </div>
      </div>
    </div>
    <div class="dateList">
        <div class="dateItem">
            <p class="dateDay">今天</p>
            <p class="dateDayNum">3月13日</p>
            <p class="dateBtn">yd</p>
        </div>
    </div>
    <div class="hallTip">
      温馨提示：
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    </div>
    <div class="hallAddress">
      <span class="address-ico">dizhi</span>
      <span class="addressTxt">dizhi</span>
      <span class="tel-ico">电话</span>

    </div>
  </div>
</template>

<style scoped lang='less'>
.hallEnvironment {
  display: flex;
  flex: 1;
  justify-content: space-between;
  .environmentImgs {
    position: relative;
    margin-right: 10px;
    img {
      width: 9.375rem;
      height: 6.25rem;
    }
    .ImgNum {
      position: absolute;
      bottom: 0.625rem;
      right: 0.3125rem;
      padding: 2px 3px;
      font-size: 0.8125rem;
      background: rgba(254, 254, 254, 0.45);
      border-radius: 0.625rem;
    }
  }
  .hallName {
    display: flex;
    flex-direction: column;
    flex: 1;
    .hallNameTxt {
      margin-bottom: 0.625rem;
      font-size: 1.5rem;
      color: #333;
    }
    .source {
      font-size: 14px;
      margin-bottom: 0.625rem;
    }
    .giveService {
      display: flex;
      flex-wrap: wrap;
      span {
        display: flex;
        background: #aaa;
        padding: 3px 6px;
        margin: 0 3px 4px 0;
        font-size: 12px;
        color: #fff;
        border-radius: 10px;
      }
    }
  }
}
.dateList {
  display: flex;
  flex: 1;
  padding: 3px 0;
  background: #ccc;
  .dateItem {
    display: flex;
    width: 85px;
    height: 65px;
    padding: 10px 0 5px;
    margin: 0 3px;
    align-items: center;
    flex-direction: column;
    background: #fff;
    p {
      display: flex;
      justify-content: center;
    }
    .dateDay {
      font-size: 14px;
      margin-bottom: 10px;
    }
    .dateDayNum {
      font-size: 12px;
      margin-bottom: 5px;
    }
    .dateBtn {
      width: 45px;
      height: 15px;
      line-height: 15px;
      text-align: center;
      font-size: 12px;
      border-radius: 15px;
      box-shadow: 0 0 2px 0px rgba(239, 16, 16, 0.45);
    }
  }
}
</style>

<script>
import TopBar from "../../../components/topBar/topBar";
export default {
  name: "hallInfo",
  components: {
    TopBar
  },
  data() {
    return {
      hellService: [{
        tit:'场地设施',

      }]
    };
  }
};
</script>
