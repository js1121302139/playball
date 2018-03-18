<template>
  <div class="myInfo">
    <Group>
      <cell title="cell" value="hello" v-for="item in 4" :key="item"></cell>
    </Group>
    <group>
      <div class="introduction">
         <p class="title">球员简介:</p>
         <p class="txt"> Vestibulum sed lacus nec justo porta rhoncus non quis dui. Suspendisse id iaculis dui. Vestibulum at accumsan odio. Quisque interdum massa quis ex commodo facilisis.</p>
       </div>
    </group>
     <x-button class="footer" @click.native="openPage('meInfoEdit',{})" plain>修改信息</x-button>
  </div>
</template>

<style scoped lang='less'>
  .introduction{
    padding: 5px 12px;
    .title{
      font-size: 16px;
      margin-bottom: 4px;
    }
    .txt{
      font-size: 12px;
      color: #333;
    }
  }
  .footer{
    margin-top: 50px;
  }
</style>

<script>
import { Group, Cell, XButton } from "vux";
export default {
  name: "myInfo",
  components: {
    Group,
    Cell,
    XButton
  },
  methods:{
    openPage(view, item) {
      view && this.$router.push({ name: view, params: { ...item, Tit: "bb" } });
    }
  }
};
</script>
