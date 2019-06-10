<template>
    <div>
        <theader :logoShow="1"></theader> 
        <!-- <transition  enter-active-class="animated bounceInLeft"> -->
            <router-view></router-view>
        <!-- </transition> -->
        <tfooter></tfooter>
        <rightFixed></rightFixed>
    </div>
</template>

<script>
import theader from '../components/header/index'
import tfooter from '../components/footer/pubfoot/index'
import rightFixed from '../components/rightFixed/index'
export default {
    components:{
        theader,
        tfooter,
        rightFixed
    }
    
}
</script>

<style lang="scss" scoped>
header{
    // background-color: #fff;
}
</style>
