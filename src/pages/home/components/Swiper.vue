<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<!-- slides -->
			<!--图片来源http://piao.qunar.com/touch/-->
			<swiper-slide v-for="item of swiperList" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl"/>
			</swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
			<!--<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>-->
			<!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
		</swiper>
	</div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		data () {
			return {
				swiperOption: {
					pagination:'.swiper-pagination',
					loop:true
				},
				swiperList:[
					{
						id:'0001',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg'
					},
					{
						id:'0002',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/a3/9ca6a02d2e260b02.jpg_750x200_9dac9551.jpg'
					}
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	/*宽高比例是31.25%，高度不能固定
	 另外一种写法：浏览器兼容会有问题图片大小：375*100
	 width:100%
	 height:26.67vw
	 * */
	/*样式穿透*/
	.wrapper >>> .swiper-pagination-bullet-active
	  background:#fff
	.wrapper
	  overflow:hidden
	  width:100%
	  height:0
	  padding-bottom:26.67%
	  background:#eee
	  .swiper-img
	    width:100%
</style>