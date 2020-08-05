<template>
    <div>
<!-- 导航条 -->
		<div class="header container clearfix">
			<div class="header-logo fl">
				<!-- <a href="/" class="fl">&nbsp;&nbsp;这不是小米</a> -->
				<router-link to="/" tag="a" class="fl">&nbsp;&nbsp;这不是小米</router-link>
			</div>
			<div id="header-nav" class="fl">
				<ul class="clearfix">
					<li>
						<!-- <a href="/lists">列表页</a> -->
						<router-link to="/lists" tag="a">列表页</router-link>
					</li>
					<li @mouseenter.prevent="flag=true "  ><a href="#">Redmi 红米</a></li>
					<li><a href="#">电视</a></li>
					<li><a href="#">笔记本</a></li>
					<li><a href="#">家电</a></li>
					<li><a href="#">路由器</a></li>
					<li><a href="#">智能硬件</a></li>
					<li><a href="#">服务</a></li>
					<li><a href="#">社区</a></li>
				</ul>
			</div>
			<div id="search" class="clearfix fr">
				<!-- js添加效果 加上 con -->
				<input type="text" @focus="searchflag=true" :class="{'text':true,'con':searchflag}">
				<div :class="{'btn':true,'con':searchflag}">&nbsp;</div>
				<div :class="{'words':true,'con':searchflag}">
					<a href="#">
						小米9
					</a>
					<a href="#">
						小米9 SE
					</a>
				</div>
				<div @mouseleave="searchflag=false" :class="{'searchList':true,'con':searchflag}">
					<a href="">小米9</a>
					<a href="">小米9</a>
					<a href="">小米9</a>
					<a href="">小米9</a>
					<a href="">小米9</a>
					<a href="">小米9</a>
					<a href="">小米9</a>
					<a href="">小米9</a>
					<a href="">小米9</a>
					<a href="">小米9</a>
				</div>
			</div>
		</div>
		<div :class="{'header-nav-menu':true,'con':flag}" >
			<div class="container">
				<ul class="clearfix" @mouseleave.prevent="flag=false">
					<!-- <li class="fl">
						<div class="flag">
							<span>新品</span>
						</div>
						<div class="img">
							<img src="../../assets/imgs/head/1.jpg" alt="">
						</div>
						<h6>小米9</h6>
						<p>
							1999元
						</p>
					</li> -->
					<li class="fl"  v-for="(item,index) in redMiData" :key="index">
						<div class="img">
							<img :src="item.img" alt="">
						</div>
						<h6>{{item.name}}</h6>
						<p>
							{{item.price}}元
						</p>
					</li>
				</ul>
			</div>
		</div>
		<!-- 导航条 end -->
    </div>
</template>

<script>
    export default {
		data(){
			return {
				flag:false,
				searchflag:false,
				redMiData:[
					{
						img: require("../../assets/imgs/head/1.jpg"),
						name: "小米9",
						price: "2999"
					},
					{
						img: require("../../assets/imgs/head/2.jpg"),
						name: "小米9S",
						price: "1999"
					},
					{
						img: require("../../assets/imgs/head/3.jpg"),
						name: "小米9Pro",
						price: "1799"
					},
					{
						img: require("../../assets/imgs/head/4.jpg"),
						name: "小米10",
						price: "3999"
					},
					{
						img: require("../../assets/imgs/head/5.jpg"),
						name: "小米10Pro",
						price: "4399"
					},
					{
						img: require("../../assets/imgs/head/6.jpg"),
						name: "小米6",
						price: "1599"
					},
				]
				
			}
		},
    }
</script>

<style lang="scss" scoped>

/* 导航条 */
.header {
	height: 100px;
}

.header-logo {
	height: 55px;
	width: 55px;
	// ../../assets/imgs/logo.jpg
	background: #FF6700 url(../../assets/img/mi-logo.png) no-repeat center center;
	margin-top: 22px;
	margin-right: 178px;
}

.header-logo a {
	display: inline-block;
	width: 100%;
	height: 100%;
	text-indent: -199px;
	overflow: hidden;
}

#header-nav ul {
	margin-top: 22px;
	height: 55px;
	line-height: 55px;
}

#header-nav li {
	float: left;
	padding: 0px 10px;
}

#header-nav li a {
	font-size: 16px;
}
#header-nav li a:hover {
	color: #FF6700;
}

/* 小米搜索框 */
#search {
	position: relative;
	width: 296px;
	margin-top: 25px;
}

#search .text {
	float: left;
	height: 48px;
	border: 1px solid #E0E0E0;
	width: 243px;
	font-size: 14px;
	text-indent: 1em;
}
#search:hover .text{
	border: 1px solid #B0B0B0;
}
#search:hover .btn{
	border-top: 1px solid #B0B0B0;
	border-bottom: 1px solid #B0B0B0;
	border-right: 1px solid #B0B0B0;
}
/* js添加效果 */
#search .text.con{
	border: 1px solid #FF6700;
}
#search .btn.con{
	border-top: 1px solid #FF6700;
	border-bottom: 1px solid #FF6700;
	border-right: 1px solid #FF6700;
}
#search .btn {
	float: left;
	height: 48px;
	border-left: 0px;
	border-top: 1px solid #E0E0E0;
	border-bottom: 1px solid #E0E0E0;
	border-right: 1px solid #E0E0E0;
	width: 50px;
	background: url(../../assets/img/search.jpg) no-repeat center center;
}

#search .words {
	position: absolute;
	top: 15px;
	right: 61px;
}
#search .words.con{
	display: none;
}

#search .words a {
	color: #757575;
	background-color: #eee;
	font-size: 12px;
	padding: 0px 5px;
	margin-right: 5px;
}

#search .words a:hover {
	color: #fff;
	background-color: #FF6700;
}


#search .searchList{
	display: none;
	position: absolute;
	top:50px;
	left:0px;
	width: 243px;
	height: 300px;
	border-left: 1px solid #FF6700;
	border-bottom: 1px solid #FF6700;
	border-right: 1px solid #FF6700;
	z-index: 200;
	background: #fff;
}
#search .searchList.con{
	display: block;
}
#search .searchList a{
	display: block;
	height: 30px;
	line-height: 30px;
	padding-left: 14px;
}
#search .searchList a:hover{
	background: #FAFAFA;
}


/* 下拉列表 */
.header-nav-menu{
	display: none;
	position: absolute;
	left: 0px;
	top:140px;
	width: 100%;
	height: 229px;
	border-top:1px solid #E0E0E0;
	background: #fff;
	z-index: 300;
}
.header-nav-menu.con{
	display: block;
}
.header-nav-menu li{
	width: 204px;
	position: relative;
	font-size: 12px;
	text-align: center;
}
.header-nav-menu li:after{
	content: "";
	display: inline-block;
	width: 1px;
	background: #B0B0B0;
	height: 110px;
	position: absolute;
	top:35px;
	right: -1px;
}
.header-nav-menu li.con:after{
	width: 0px;
}
// .header-nav-menu .flag{
// 	position: absolute;
// 	top:-1px;
// 	left:0px; 
// 	right:0px;
// 	margin: 0 auto;
// 	text-align: center;
// }
// .header-nav-menu .flag span{
// 	padding:0px 20px;
// 	height: 20px;
// 	line-height: 20px;
// 	color:#FF6700;
// 	border:1px solid #FF6700;
// 	display: inline-block;
// }
.header-nav-menu .img{
	width: 160px;
	height: 110px;
	margin : 35px auto 20px auto;
}
.header-nav-menu img{
	width: auto;
	height: 110px;
}
.header-nav-menu h6{
	font-weight: normal;
	color:#333;
	line-height: 20px;
}
.header-nav-menu p{
	color:#FF6700;
	line-height: 20px;
}
</style>