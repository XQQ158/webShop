<template>
    <div>
        
        <!-- 头部顶部导航 ctrl+/ -->
		<div class="header_top">
			<div class="container clearfix">
				<div class="fl">
					<a href="">小米商城</a>
					<span>|</span>
					<a href="">MIUI</a>
					<span>|</span>
					<a href="">IoT</a>
					<span>|</span>
					<a href="">云服务</a>
					<span>|</span>
					<a href="">金融</a>
					<span>|</span>
					<a href="">有品</a>
					<span>|</span>
					<a href="">小爱开放平台</a>
					<span>|</span>
					<a href="">企业团购</a>
					<span>|</span>
					<a href="">资质证照</a>
					<span>|</span>
					<a href="">协议规则</a>
					<span>|</span>
					<a href="">下载app</a>
					<span>|</span>
					<a href="">Select Region</a>
				</div>
				<div class="fr">
					<ul>
						<li v-if="!this.$store.state.user.userlist.username">
							<el-button type="text" @click="login">登录</el-button>
							<span class="sep">|</span>
							<el-button type="text" @click="register = true">注册</el-button>
							</li>
						<li v-else>
						欢迎
							<el-popover placement="top" width="180" v-model="visible">
								<p>确定退出登录吗？</p>
								<div style="text-align: right; margin: 10px 0 0">
									<el-button size="mini" type="text" @click="visible = false">取消</el-button>
									<el-button type="primary" size="mini" @click="logout">确定</el-button>
								</div>
								<el-button type="text" slot="reference">{{this.$store.state.user.userlist.username}}</el-button>
							</el-popover>
						</li>
						<li>
							<router-link to="/order" tag="a">我的订单</router-link>
						</li>
						<li>
							<router-link to="/collect" tag="a">我的收藏</router-link>
						</li>
						<li :class="getNum > 0 ? 'shopCart-full' : 'shopCart'">
							<router-link to="/shoppingCart"  tag="a">
								<i class="el-icon-shopping-cart-full"></i> 购物车
								<span class="num">({{getNum}})</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 头部顶部导航 end -->

		<!-- 登录模块 -->
        <MyLogin></MyLogin>
        <!-- 注册模块 -->
        <MyRegister :register="register" @fromChild="isRegister"></MyRegister>

    </div>
</template>

<script>
    export default {
		data(){
			return{
				register: false, // 是否显示注册组件
      			visible: false // 是否退出登录
			};	
		},
		methods: {
			login() {
				// 点击登录按钮, 通过更改vuex的showLogin值显示登录组件
				this.$store.commit("user/setShowLogin",true);
			},
			// 退出登录
			logout() {
				this.visible = false;
				// 清空vuex登录信息
				this.$store.commit("user/setUser","");
				this.notifySucceed("成功退出登录");
			},
			// 接收注册子组件传过来的数据
			isRegister(val) {
				this.register = val;
			}
			
		},
		computed: {
			getNum(){
				return this.$store.getters['cart/getNum'];
			}
		},
	}
</script>

<style lang="scss" scoped>


/* 头部顶部导航 */

.header_top {
	background-color: #333;
	height: 40px;
}

.header_top a {
	color: #B0B0B0;
}

.header_top .fl {
	float: left;
}

.header_top .fl a,
.header_top .fl span {
	line-height: 40px;
	font-size: 12px;
	display: inline-block;
	margin-right: 10px;
}

.header_top .fl a:hover {
	color: #fff;
}

.header_top .fr {
	float: right;
}

.header_top .fr  {
  float: right;
}
.header_top .fr li {
  float: left;
  height: 40px;
  color: #b0b0b0;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  margin-left: 20px;
}
.header_top .fr .sep {
  color: #b0b0b0;
  font-size: 12px;
  margin: 0 5px;
}
.header_top .fr li .el-button {
  color: #b0b0b0;
}
.header_top .fr .el-button:hover {
  color: #fff;
}
.header_top .fr li a {
  color: #b0b0b0;
  font-size: 14px;
}
.header_top .fr a:hover {
  color: #fff;
}
.header_top .fr .shopCart {
  width: 120px;
  background: #424242;
}
.header_top .fr .shopCart:hover {
  background: #fff;
}
.header_top .fr .shopCart:hover a {
  color: #ff6700;
}
.header_top .fr .shopCart-full {
  width: 120px;
  background: #ff6700;
}
.header_top .fr .shopCart-full a {
  color: white;
}
</style>