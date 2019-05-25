<template>
  <div class="page-register">
    <!-- 头部导航区域 -->
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号?</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <!-- 中间表单区域 -->
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="registerForm.userName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            auto-complete="off"
            @input="input"
          ></el-input>
          <div class="pw-strength">
            <div :class="['bar',strongthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("用户名必须为6-16位的字母数字下划线组成"));
      } else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validateRePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      strongthClass: "", //判断密码强度来动态添加不同的类名 显示不同的宽度
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      rules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
        rePassword: [{ validator: validateRePassword, trigger: "blur" }],
        userName: [{ validator: validateUser, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 校验表单整体
    submitForm(registerForm) {
      this.$refs[registerForm].validate(valid => {
        if (valid) {
          // 请求接口
          api.getRegister({
            params: this.registerForm
          }).then(res => {
            if(res.data.status == 'success'){
              // 注册成功后,跳转路由到登录页面
              this.$router.push({name: 'login'})
            }else{
              alert(res.data.msg)
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 密码强度校验
    input() {
      var regStr = /(\w)+/g;
      var regNum = /(\d)+/g;
      var reg = /_/g;
      // 正则匹配同时有下划线，数字，字母的密码,强度为strong
      var strongth =
        this.registerForm.password.match(reg) &&
        this.registerForm.password.match(regNum) &&
        this.registerForm.password.match(regStr);

      if (this.registerForm.password.length > 20 || (this.registerForm.password.length > 6 && strongth))
      {
        this.strongthClass = "strong";
      } else if (this.registerForm.password.length <= 6)
      {
        this.strongthClass = "week";
      } else if (!this.registerForm.password)
      {
        this.strongthClass = "";
      } else {
        this.strongthClass = "normal";
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>


