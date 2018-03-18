<template>
  <div class="technicalStatistics_Mod">
    <div class="topData">
      <div ref="myChart" :style="{width: '100%', height: '250px'}"></div>
      <!-- 技术统计数据 -->
      <flexbox :gutter="0" class="technicalStatistics">
        <flexbox-item>
          <div class="flex-Item">
            <p class="itemData">48/48</p>
            <p class="itemTit">首发/出场</p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-Item">
            <p class="itemData">48/48</p>
            <p class="itemTit">首发/出场</p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-Item">
            <p class="itemData">48/48</p>
            <p class="itemTit">首发/出场</p>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0" class="technicalStatistics">
        <flexbox-item>
          <div class="flex-Item">
            <p class="itemData">48/48</p>
            <p class="itemTit">首发/出场</p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-Item">
            <p class="itemData">48/48</p>
            <p class="itemTit">首发/出场</p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-Item">
            <p class="itemData">48/48</p>
            <p class="itemTit">首发/出场</p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <!-- 得分分析 -->
     <group>
      <div class="scoreAnalysis">
        <flexbox :gutter="0" class="scoreAnalysisContainer">
        <flexbox-item>
          <div class="flex-Item">
            <p class="itemData">90%</p>
            <p class="itemTit">命中率</p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-Item">
            <p class="itemData">90%</p>
            <p class="itemTit">三分球</p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-Item">
            <p class="itemData">90%</p>
            <p class="itemTit">三分命中</p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-Item">
            <p class="itemData">90%</p>
            <p class="itemTit">罚球</p>
          </div>
        </flexbox-item>
          <flexbox-item>
            <div class="flex-Item">
              <p class="itemData">90%</p>
              <p class="itemTit">罚球命中</p>
            </div>
          </flexbox-item>
      </flexbox>
      </div>
    </group>

  </div>
</template>

<style scoped lang='less'>
.technicalStatistics_Mod {
  background: #f7f7f7;
  .topData {
    padding: 0 24px;
    margin-bottom: 10px;
    background: #fff;
    .technicalStatistics {
      height: 60px;
      border-top: 1px solid #333;
      .flex-Item {
        display: flex;
        justify-content: center;
        flex-direction: column;
        P {
          text-align: center;
        }
        .itemData {
          font-size: 20px;
          margin-bottom: 5px;
        }
        .itemTit {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  .scoreAnalysis {
    padding: 0 12px;
    background: #fff;
    .scoreAnalysisContainer {
      padding: 10px 0;
      .flex-Item {
        display: flex;
        justify-content: center;
        flex-direction: column;
        P {
          text-align: center;
        }
        .itemData {
          font-size: 20px;
          margin-bottom: 2px;
        }
        .itemTit {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>

<script>
import { Flexbox, FlexboxItem, Group } from "vux";
import echarts from "echarts";
export default {
  name: "technicalStatistics_Mod",
  components: {
    Flexbox,
    FlexboxItem,
    Group
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let echart = echarts.init(this.$refs.myChart);
    echart.setOption({
      backgroundColor: "#fff",
      title: {
        text: ""
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        x: "center",
        data: []
      },
      radar: [
        {
          indicator: [
            { text: "场均得分", max: 100 },
            { text: "场均封盖", max: 100 },
            { text: "场均篮板", max: 100 },
            { text: "场均抢断", max: 100 },
            { text: "场均助攻", max: 100 }
          ],
          center: ["50%", "55%"],
          radius: 90
        }
      ],
      series: [
        {
          type: "radar",
          tooltip: {
            trigger: "item"
          },
          itemStyle: { normal: { areaStyle: { type: "default" } } },
          data: [
            {
              value: [60, 73, 85, 40, 90],
              name: "wode "
            }
          ]
        }
      ]
    });
  }
};
</script>
