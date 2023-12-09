<template>
  <el-container class="container">
    <el-row :gutter="20" class="kanban">
      <custom-card title="实时在寝人数" data="1324" />
      <custom-card title="实时在寝人数" data="1324" />
      <custom-card title="实时在寝人数" data="1324" />
    </el-row>
    <el-row>
      <div id="charts"></div>
    </el-row>
  </el-container>
</template>

<script>
import customCard from "../components/custom-card.vue";
export default {
  name: "HomePage",
  components: {
    customCard,
  },

  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["A", "B", "C"],
          axisTick: {
            alignWithLabel: true,
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150],
            type: "line",
            smooth: true,
          },
        ],
      },
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const chartBox = this.$echarts.init(document.getElementById("charts"));
      chartBox.setOption(this.option);
      window.addEventListener("resize", () => {
        chartBox.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
.kanban {
  width: 100%;
}
#charts {
  width: 500px;
  height: 300px;
}
</style>
