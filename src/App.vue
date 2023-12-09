<template>
  <el-container class="container">
    <head-area>Header</head-area>
    <el-container>
      <sider-bar></sider-bar>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeadArea from "./components/head-area.vue";
import SiderBar from "./components/side-bar.vue";
import Cookies from "js-cookie";
export default {
  name: "AppView",
  components: {
    HeadArea,
    SiderBar,
  },
  created() {
    let token = Cookies.get("token");
    let userInfo = localStorage.getItem("userInfo");
    if (token && userInfo) {
      this.$store.commit("setUserInfo", userInfo);
      this.$store.commit("setLogin", true);
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.el-main {
  line-height: 160px;
  color: #333333;
  text-align: center;
  background-color: #e9eef3;
}
</style>
