<template>
	<div>
		<div class="app-head">
		<div class="app-head-inner">
    <router-link :to="{path:'/'}">
			 <img src="../assets/logo.png" alt="">
      </router-link>
			<div class="head-nav">
				<ul class="nav-list">
           <li >{{userName}}</li>
          <li v-if="userName!==''" class="nav-pile">|</li>
          <li v-if="userName!==''">退出</li>
           <li v-if="userName!==''" class="nav-pile">|</li>
					<li v-if="userName===''" @click='logClick'>登录</li>
					<li v-if="userName===''" class="nav-pile">|</li>
					<li v-if="userName===''" @click='regClick'>注册</li>
					<li v-if="userName===''" class="nav-pile">|</li>
					<li @click='aboutClick'>关于</li>

				</ul>
			</div>
		</div>
		</div>
		<div class="app-content">
			<keep-alive>
			<router-view></router-view>	
			</keep-alive>
		</div>
		<div class="app-foot">
			<p>@ 2017 <a href="http://www.unsun.net/">广州碧辉腾乐（UNSUN）软件科技有限公司</a> </p>
		</div>
    <my-dialog :is-show='isShowAboutDialog' @on-close="closeDialog('isShowAboutDialog')">
      <p>   广州碧辉腾乐是一家专注于教学平台、大数据信息化项目策划以及开发为一体的公司，实现“互联网＋教育”信息化资源服务。公司从资源建设：”动画仿真，微课制作，课件制作”等数字媒体，依托平台数据应用化一站式管理服务。让客户更加满意，让用户体验更佳丰富。

      </p>
       <p>  公司富有激情、创新、专业的团队，始终以独特的策划、丰富的经验、强大的技术为客户提供全方位、多层次、宽领域的服务。公司所提供的产品和服务赢得了广泛的市场赞誉和客户的高度评价，相信我们的产品和服务能够满足您的业务需求。</p>
    </my-dialog >
    <my-dialog :is-show='isShowLogDialog' @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog" ></log-form>
    </my-dialog >
    <my-dialog :is-show='isShowRegDialog' @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog >

	</div>
</template>

<script>
	import Dialog from './dialog'
  import LogForm from "./logForm"
  import RegForm from "./regForm"
  export default{
    components:{
      MyDialog:Dialog,
      LogForm,
      RegForm
    },
    data () {
      return {
        isShowAboutDialog: false,
         isShowLogDialog: false,
          isShowRegDialog: false,
          userName:''
      }
    },
    methods:{
      aboutClick(){
        this.isShowAboutDialog = true
      },
      regClick(){
        this.isShowRegDialog = true
      },
      logClick(){
        this.isShowLogDialog = true
      },
      closeDialog (attr) {
        this[attr] = false
      },
      onSuccessLog(data){
        this.closeDialog('isShowLogDialog')
        console.log(data.username)
        this.userName=data.username
      }
    }
  }
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #f3645e;
  color: #fff;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 200px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
