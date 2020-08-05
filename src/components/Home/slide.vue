<template>
    <div>
<!-- 轮播图 -->
			<div class="slide">
				<div class="swiper-container slideContainer">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img src="../../assets/imgs/nav1.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="../../assets/imgs/nav3.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="../../assets/imgs/nav4.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="../../assets/imgs/nav5.jpg" alt="">
						</div>
					</div>
				</div>
				<div class="btn">
					<div class="Lbtn" @click="slidePrev"></div>
					<div class="Rbtn" @click="slideNext"></div>
				</div>
				<ol class="clearfix">
					<li  @click="slideTo(0)" :class="[index == 0?'con':'']"></li>
					<li  @click="slideTo(1)" :class="[index == 1?'con':'']"></li>
					<li  @click="slideTo(2)" :class="[index == 2?'con':'']"></li>
					<li  @click="slideTo(3)" :class="[index == 3?'con':'']"></li>
				</ol>
			</div>
			<!-- 轮播图end -->
    </div>
</template>

<script>
	import Swiper from "swiper";
    export default {
		data(){
			return {
				swiperobj:null,
				index:0,
			}
		},
		methods:{
			// 上一页功能
			slidePrev(){
				// swiper 对象内方法slidePrev()
				this.swiperobj.slidePrev();

			},
			// 下一页功能
			slideNext(){
				// swiper 对象内方法slideNext()
				this.swiperobj.slideNext();
			},
			// 指示点功能
			slideTo(index){
				this.swiperobj.slideTo(index);
			}
		},
		mounted(){
			let _this = this;
			this.swiperobj = new Swiper('.slideContainer',{
				// loop:true,
				on: {
					// slideChangeTransitionEnd轮播图切换时触发方法
					slideChangeTransitionEnd: function(){
						_this.index = this.activeIndex;
					},
				},
			});
		}
    }
</script>

<style lang="scss" scoped>

.slideContainer{
	z-index: -1;
}

.slide {
	position: relative;
}

.slide img {
	width: 100%;
	float: left;
}

.slide .btn {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 460px;
}

.slide .Lbtn,
.slide .Rbtn {
	width: 41px;
	height: 69px;
	background: url(../../assets/img/icon-slides.png) no-repeat -83px 0px;
}

.slide .Rbtn {
	background-position: -124px 0px;
	position: absolute;
	right: 0px;
	top: 50%;
	margin-top: -34px;
}

.slide .Lbtn {
	position: absolute;
	left: 235px;
	top: 50%;
	margin-top: -34px;
}

.slide .Rbtn:hover {
	background-position: -42px 0px;
}

.slide .Lbtn:hover {
	background-position: 0px 0px;
}

.slide ol {
	position: absolute;
	right: 35px;
	bottom: 25px;
}

.slide ol li {
	width: 10px;
	height: 10px;
	border: 1px solid #B8AFAF;
	background: #998C8C;
	float: left;
	margin-right: 10px;
	border-radius: 50%;
}

.slide ol li.con {
	background: #FFF2F2;
}

</style>