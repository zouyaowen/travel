<template>
	<swiper :options="swiperOption">
		<!-- slides -->
		<swiper-slide>
			<!--图片来源http://piao.qunar.com/touch/-->
			<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg"/>
		</swiper-slide>
		<swiper-slide>
			<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1811/a3/9ca6a02d2e260b02.jpg_750x200_9dac9551.jpg" />
		</swiper-slide>
		<!-- Optional controls -->
		<div class="swiper-pagination" slot="pagination"></div>
		<!--<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>-->
		<!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
	</swiper>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		data () {
			return {
				swiperOption: {}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.swiper-img
	  width:100%
</style>