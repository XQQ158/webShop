<template>
    <div>
		<!-- 分类 -->
		<div class="category">
			<ul>
				<li>
					<a href="">手机 电话卡</a>
					<!-- <div class="item">
						<ol class="clearfix">
							<li class="fl">
								<a class="clearfix" href="">
									<img class="fl" src="../../assets/img/mi9.png" alt="">
									<span class="fl">小米9</span>
								</a>
							</li>
						</ol>
					</div> -->
				</li>

				<li>
					<a href="">电视 盒子</a>
				</li>

				<li>
					<a href="">笔记本 平板</a>
				</li>

				<li>
					<a href="">家电 插线板</a>
				</li>

				<li>
					<a href="">出行 穿戴</a>
				</li>

				<li>
					<a href="">智能 路由器</a>
				</li>

				<li>
					<a href="">电源 配件</a>
				</li>

				<li>
					<a href="">健康 儿童</a>
				</li>

				<li>
					<a href="">耳机 音箱</a>
				</li>

				<li>
					<a href="">生活 箱包</a>
				</li>
			</ul>
		</div>
		<!-- 分类end -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>



.category {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 235px;
	height: 460px;
	background: rgba(0, 0, 0, 0.5);
}

.category ul {
	padding: 20px 0px;
}

.category li {
	height: 42px;
	line-height: 42px;
	width: 100%;
}

.category a {
	display: block;
	padding-left: 30px;
	height: 42px;
	line-height: 42px;
	font-size: 14px;
	color: #fff;
	background: url(../../assets/img/icon.png) no-repeat 202px 14px;
}

.category a:hover {
	background: #FF6700 url(../../assets/img/icon.png) no-repeat 202px 14px;
}

// .category .item {
// 	position: absolute;
// 	top: 0px;
// 	left: 235px;
// 	width: 990px;
// 	height: 458px;
// 	border-top: 1px solid #e0e0e0;
// 	border-bottom: 1px solid #e0e0e0;
// 	border-right: 1px solid #e0e0e0;
// 	background: #fff;
// 	display: none;
// 	/* 隐藏 */
// }

// .category .item ol{
// 		width: 100%;
// }
// .category .item>ol>li{
// 	width: 25%;
// 	height: auto;
// }
// .category .item>ol>li a{
// 	display: block;
// 	padding: 17px;
// 	background: none;
// }
// .category .item>ol>li a:hover{
// 	background: #fff;
// }
// .category .item>ol>li a:hover span{
// 	color: #FF6700;
// }
// .category .item>ol>li img{
// 	width: 40px;
// 	height: 40px;
// }
// .category .item>ol>li span{
// 	font-size: 14px;
// 	color:#333;
// 	height: 40px;
// 	line-height: 40px;
// 	padding-left: 10px;
// 	display: block;
// }

// .category li:hover .item{
// 	display: block;
// }

</style>