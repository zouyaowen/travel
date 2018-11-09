<template>
	<!--template下面只能有一个根标签-->
	<div id="">
		<!--<div id="" class="home">
			HelloWorld
		</div>-->
		<!--<router-link to="/list" class="home">列表页</router-link>-->
		<home-header></home-header>
		<home-swiper></home-swiper>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
	name: 'Home',
	components:{
		HomeHeader,
		HomeSwiper
	}
}
</script>

<style>
	.home {
		font-size: 50px;
	}
</style>