
<template>
  <div class="searchPage">
    <TopBar :Tit="$route.params.Tit"></TopBar>
     <div class="searchBox">
        <div class="searchInput">
          <input type="text" placeholder="输入名字，地址，商圈">
        </div>
        <div class="searchBtn">
          搜索
        </div>
    </div>
    <div class="searchList" v-if="false">
      <div class="listItem" :key="item" v-for="item in 10">
        <div class="top">
          <p class="name">xxxxx馆</p>
          <span class="distance">>100m</span>
        </div>
        <div class="address">
          地址：xxxxxxxxx
        </div>
      </div>
    </div>
    <div class="searchHistoryList" v-if="false">
      <div class="searchHistoryTit">
        <span>搜索历史</span>
        <p>清空搜索记录</p>
      </div>
      <div class="historyList">
        <span class="listItem">lanq</span>
        <span class="listItem">lanq</span>
        <span class="listItem">lanq</span>
        <span class="listItem">lanq</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
.searchBox {
  display: flex;
  align-items: center;
  height: 3.125rem;
  padding: 0 0.75rem;
  background: #ccc;
  .searchInput {
    display: flex;
    flex: 1;
    align-items: center;
    height: 2.1875rem;
    input {
      height: 2.1875rem;
      flex: 1;
      border: none;
      padding: 0;
      border-radius: 2.1875rem;
      text-indent: 0.9375rem;
      background: #fff;
    }
  }
  .searchBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.125rem;
    height: 2.1875rem;
    margin-left: 0.625rem;
    border-radius: 0.625rem;
    background: #f0f;
  }
}
.searchList {
  .listItem {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: .625rem 12px;
    border-bottom: .0625rem solid #333;
    .top {
      display: flex;
      flex: 1;
      justify-content: space-between;
      margin-bottom: 10px;
      .distance{
        font-size: 13px;
        color: #333;
      }
    }
    .address {
      font-size: .8125rem;
      color: #ccc;
    }
  }
}
.searchHistoryList {
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
  .searchHistoryTit {
    display: flex;
    flex: 1;
    height: 1.5625rem;
    align-items: center;
    justify-content: space-between;
  }
  .historyList {
    display: flex;
    margin-top: 20px;
    .listItem {
      padding: 0.1875rem 0.3125rem;
      margin: 0 0.1875rem;
      border-radius: 0.1875rem;
      font-size: 0.8125rem;
      background: #ccc;
    }
  }
}
</style>

<script>
import TopBar from "../../../components/topBar/topBar";
export default {
  name: "searchPage",
  components: {
    TopBar
  }
};
</script>

