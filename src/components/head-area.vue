<template>
  <div>
    <el-header class="header">
      <div class="title">宿舍管理系统</div>
      <div>
        <div v-if="!isLogin" class="join">
          <el-button type="text" class="login" @click="openLoginDialog"
            >登录</el-button
          >
          <el-button type="text" class="register">注册</el-button>
        </div>
        <div v-else class="avatar">
          <el-avatar :size="40" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </el-header>
    <el-dialog title="加入我们" :visible.sync="dialogFormVisible" width="500px">
      <el-tabs v-model="tabsType" :stretch="true">
        <el-tab-pane label="登陆" name="loginForm">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :label-width="formLabelWidth"
            :rules="rules"
          >
            <el-form-item label="用户名" prop="username">
              <el-input
                v-model="loginForm.username"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="loginForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="registerForm">
          <el-form
            ref="registerForm"
            :model="registerForm"
            :rules="rules"
            :label-width="formLabelWidth"
          >
            <el-form-item label="用户名" prop="username">
              <el-input
                v-model="registerForm.username"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="registerForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="validForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import avatar from "../assets/img/avatar.jpg";
import Cookies from "js-cookie";
import { mapState } from "vuex";
export default {
  name: "HeaderArea",

  data() {
    return {
      tabsType: "loginForm",
      dialogFormVisible: false,
      circleUrl: avatar,
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        username: "",
        password: "",
      },
      formLabelWidth: "80px",
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 16, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },

  computed: {
    ...mapState(["userInfo", "isLogin"]),
  },

  mounted() {},

  methods: {
    openLoginDialog() {
      this.dialogFormVisible = true;
    },
    validForm() {
      this.$refs[this.tabsType].validate((valid) => {
        if (valid) {
          const isLogin = this.tabsType === "loginForm";
          const url = isLogin ? "/api/user/login" : "/api/user/register";
          const { username, password } = isLogin
            ? this.loginForm
            : this.registerForm;
          this.$axios
            .post(url, { username, password })
            .then((res) => {
              Cookies.set("token", res.data.token, { expires: 1 });
              this.$store.commit("setUserInfo", res.data);
              localStorage.setItem("userInfo", JSON.stringify(res.data));
              this.$store.commit("setLogin", true);
              this.$message.success("登录成功!");
              this.dialogFormVisible = false;
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          this.$message.error("验证失败，请检查填写信息");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  line-height: 60px;
  color: #333333;
  text-align: center;
  background-color: #b3c0d1;
}
.header {
  display: flex;
  justify-content: space-between;
}
.login,
.register {
  color: #333333;
}
.avatar {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
