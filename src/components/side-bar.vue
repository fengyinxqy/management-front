<template>
  <el-aside width="200px">
    <el-menu
      v-model="activeIndex"
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @select="handleMenuSelect"
    >
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/dormitoryManage">
        <i class="el-icon-document"></i>
        <span slot="title">宿舍管理</span>
      </el-menu-item>
      <el-menu-item index="personManage">
        <i class="el-icon-setting"></i>
        <span slot="title">人员管理</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "SideBar",

  data() {
    return {
      activeIndex: "/",
    };
  },

  mounted() {},

  methods: {
    handleMenuSelect(index) {
      this.activeIndex = index;
      this.$router.push({ path: index });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-aside {
  line-height: 200px;
  color: #333333;
  text-align: center;
  background-color: #d3dce6;
}
</style>
