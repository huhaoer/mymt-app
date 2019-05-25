<template>
    <div class="page-login">
        <div class="login-header">
            <a href="http://www.meituan.com" class="logo"></a>
        </div>
        <div class="login-panel">
            <div class="banner">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
            </div>
            <div class="form">
                <h4 v-if="error" class="tips">{{error}}</h4>
                <p>
                    <span>账号登录</span>
                </p>
                <!-- prefix-icon 添加输入框前面的图标 profile和password写在了css样式里,用的字体图标 -->
                <!-- 绑定类名显示错误状态  当前存在error错误信息且用户名为空在输入用户名处仙显示红色 -->
                <el-input :class="{'error': error && !userName}" v-model="userName" placeholder="手机号/用户名/邮箱" prefix-icon="profile"></el-input>
                <el-input :class="{'error': error && !password}" v-model="password" type="password" placeholder="请输入密码" prefix-icon="password"></el-input>
                <div class="foot">
                    <a>忘记密码?</a>
                </div>
                <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
                <p class="reg">
                    <span>还没有账号?</span>
                    <router-link :to="{name: 'register'}">免费注册</router-link>
                </p>
                <div class="oauth-wrapper J-oauth-wrapper">
                    <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
                    <div class="oauth cf">
                        <span class="oauth__link oauth__link--qq third-login-btn" data-href="/account/connect/tencent" target="_blank" id="J-third-tencent"></span>
                        <span class="oauth__link oauth__link--weibo third-login-btn" data-href="/account/connect/sina" target="_blank" id="J-third-sina"></span>
                    </div>
                    <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
                </div>
            </div>
        </div>
        <footer>
            <ul>
                <li><a href="#">关于美团</a></li>
                <li><a href="#">加入我们</a></li>
                <li><a href="#">商家入驻</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">美团手机版</a></li>
            </ul>
            <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
        </footer>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            userName: '',
            password: '',
            error: ''
        }
    },
    methods: {
        submit() {
            if(!this.userName) {
                this.error = '请输入用户名'
                return false
            }
            if(!this.password) {
                this.error = '请输入密码'
                return false
            }
            if(this.userName && this.password){
                this.error = ''
            }
            // 请求数据
            api.getLogin({
                params: {
                    userName: this.userName,
                    password: this.password
                }
            }).then(res => {
                // console.log(res)
                if(res.data.status == 'success'){
                    this.$router.push({name: 'index'})
                // 登录成功后保存用户名到vuex中,userName为注册的用户名,就不显示登录和注册按钮了
              this.$store.commit('setUserName',this.userName)
                }else{
                    this.error = res.data.msg
                }
            })
        }
    }
}
</script>
<style lang="scss">
@import '@/assets/css/login/index.scss'
</style>


