<template>
  <el-col :span="8" class="card">
    <div class="grid-content">
      <span class="title">{{ title }}</span>
      <span class="content">{{ data }}</span>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "CustomCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    data: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.grid-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.title {
  height: 40px;
  padding-left: 10px;
  font-size: 18px;
  line-height: 40px;
  text-align: left;
}
.content {
  height: 100px;
  font-size: 60px;
  font-weight: 500;
  line-height: 100px;
}
</style>
