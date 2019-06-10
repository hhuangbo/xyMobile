<template>
    <div>
        <i class="goTop iconfont icongoTop" id="btngoTop"  v-show="isShow" @click="handleScroll()"></i>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:false,
            isTop: true
        }
    },
    mounted () {
        window.addEventListener('scroll', this.scrollToTop,true) 
    },
    methods:{
        scrollToTop(el){
            let btngoTop = document.getElementById('btngoTop');
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let browserHeight = window.outerHeight;
            // if (scrollTop > browserHeight) {//判断是否显示回到顶部按钮
            if (scrollTop > 500) {
                this.isShow=true;
            } else {
                this.isShow=false;
            } 
        },
        handleScroll(){
            var timer = null;
            timer = setInterval(function(){
                var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                var ispeed = Math.floor(-osTop / 6);
                document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                this.isTop = true
                if(osTop == 0){
                    clearInterval(timer)
                }
            },30)
        }
    },
    destroyed () {
        window.removeEventListener('scroll', this.scrollToTop) 
    }
}
</script>

<style lang="scss" scoped>
.goTop{
    font-size: .6rem;
    color: $C43bee3;
    position:fixed;right:4%;bottom:15%;
    cursor: pointer;
}
</style>
