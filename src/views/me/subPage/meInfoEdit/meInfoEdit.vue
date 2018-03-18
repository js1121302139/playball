<template>
  <div class="meInfoEdit">
    <x-header  :left-options="{backText: ''}">我的信息编辑</x-header>
    <group>
       <x-input title="身高" placeholder="CM" type="number" :max="3" text-align="right" placeholder-align="right"></x-input>
       <x-input title="体重" placeholder="KG" type="number" :max="3" text-align="right" placeholder-align="right"></x-input>
       <x-input title="电话" mask="999 9999 9999" type="tel" :max="13" is-type="china-mobile" text-align="right" placeholder-align="right"></x-input>
       <datetime title="生日" :min-year="0" :max-year="9999"  format="YYYY-MM-DD HH:mm" value-text-align="right"></datetime>
       <selector title="球队位置" :options="['后卫', '前锋']" :placeholder="'选择你擅长的位置'" ></selector>
    </group>
    <group>
       <p class="introductionTit">球员简介</p>
       <x-textarea title="" :max="180" :autosize="true">

        </x-textarea>
    </group>
    <x-button class="footer" plain>确认修改</x-button>
  </div>
</template>

<style scoped lang='less'>
.introductionTit{
  padding: 4px 16px;
}
.footer{
  margin-top: 20px;
}
</style>

<script>
import { XHeader, Group, Selector, Cell, XInput, XTextarea, Datetime, XButton} from "vux";
export default {
  name: "meInfoEdit",
  components: {
    XHeader,
    Group,
    Cell,
    XInput,
    Selector,
    Datetime,
    XTextarea,
    XButton
  }
};
</script>
