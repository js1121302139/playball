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
    <div class="dateList" ref="wrapper">
       <ul>
         <li v-for="item in 5" :key="item">
            <div class="dateItem">
                <p class="dateDay">今天</p>
                <p class="dateDayNum">3月13日</p>
                <p class="dateBtn">yd</p>
            </div>
         </li>
       </ul>
    </div>
    <div class="hallTip">
      <titBar title="温馨提示"></titBar>
      <p class="hallTipTxt">
        1/消费多少送多少现金卷.
      </p>
    </div>
    <div class="hallAddress ">
      <span class="address-ico iconfont">&#xe619;</span>
      <span class="addressTxt">仓山区浦上大道274号仓山万达金街A9楼二层(仓山万达一号门)</span>
      <span class="tel-ico iconfont">&#xe6a9;</span>
    </div>

    <div class="commentsList">
      <titBar title="用户评价"></titBar>
      <div class="commentsItem" v-for="item in 10" :key="item">
          <div class="userInfo">
            <img v-lazy="'http://www.3dmgame.com/uploads/allimg/150804/153_150804102337_1.jpg'" alt="">
            <div class="userCommentsInfo">
                <div class="userName">
                  <span class="name">良心会痛</span>
                  <rater v-model="RaterNum" disabled :font-size="12" :min="0"></rater>
                  <x-button plain type="primary" class="isEffective" :text="'有用 ' +RaterNum"></x-button>
                </div>
                <div class="commentsDate">
                  2017-11-19 20:22:34 评价
                </div>
            </div>
          </div>
          <div class="userCommentsTxt">
            如果我欠了别人很多钱你该怎么办？正在我期待着
            儿子说‘父债子还’时儿子说那咱们搬家吧！上幼儿
            园的女儿做完作业后让我检查.
          </div>
      </div>
    </div>
     <XButton class="showMore" :text="'查看更多评论'"/>
  </div>
</template>

<style scoped lang='less'>
.showMore {
  height: 35px;
  line-height: 35px;
  background: #fff;
      font-size: 13px;
      color: #FF5F5F;
  &::after{
    border: none;
    border-top: 1px solid #333;
    border-radius: 0;

  }
}
.commentsList {
  position: relative;
  height: 394px;
  overflow: hidden;
  background: #fff;
  .commentsItem {
    display: flex;
    flex-direction: column;
    padding: 20px 12px;
    border-bottom: 1px solid #e6e6e6;
    background: #fff;
    .userInfo {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin-right: 12px;
      }
      .userCommentsInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1;
        justify-content: space-around;
        .userName {
          display: flex;
          align-items: center;
          flex: 1;
          width: 100%;
          .name {
            font-size: 15px;
            margin-right: 9px;
            color: #333;
          }
        }
        .isEffective {
          line-height: 20px;
          margin: 0;
          margin-left: 40px;
          padding: 1px 12px;
          font-size: 11px;
          flex: 1;
        }
      }
      .commentsDate {
        color: #999;
        font-size: 12px;
        margin-top: 8px;
      }
    }
    .userCommentsTxt {
      padding-left: 60px;
      font-size: 13px;
      color: #333;
      line-height: 16px;
    }
  }
}
.hallInfo {
  width: 100%;
  overflow: hidden;
  background: #f7f7f7;
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
    ul {
      display: flex;
    }
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
  .hallTip {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 14px 11px;
    margin: 10px 0;
    background: #fff;
    .titBar {
      height: 22px;
      margin-bottom: 15px;
      .titTxt {
        font-size: 14px;
      }
    }
    .hallTipTxt {
      font-size: 12px;
      color: #333;
    }
  }
  .hallAddress {
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px 11px;
    background: #fff;
    margin-bottom: 10px;
    &::after {
      position: absolute;
      content: "";
      display: block;
      width: 1px;
      height: 40px;
      right: 63px;
      background: #000;
    }
    .address-ico {
      margin-right: 9px;
    }
    .addressTxt {
      line-height: 20px;
    }
    .tel-ico {
      padding: 0 7px 0 19px;
      height: 50px;
    }
    .address-ico,
    .tel-ico {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
  }
}
</style>

<script>
import titBar from "@/components/titBar/titBar";
import TopBar from "../../../components/topBar/topBar";
import BScroll from "better-scroll";
import { Rater, XButton } from "vux";
export default {
  name: "hallInfo",
  components: {
    TopBar,
    titBar,
    Rater,
    XButton
  },
  data() {
    return {
      RaterNum: 3,
      hellService: [
        {
          tit: "场地设施"
        }
      ]
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      tap: true,
      scrollX: true,
      scrollY: false
    });
  }
};
</script>
