<template>
    <header :class="{'headerFixed' : headerFixed}" id="header">
        <div class="logo">
            <img :src="opLogo"/>
        </div>
        <div class="toggleMenu iconfont iconmenu-open" @touchstart="hanleMenuOpen"></div>
        <transition>
            <nav :class="['menuList animated  deplay-5ms',menuShow ? 'fadeInDown': 'fadeOutUp']" v-show="menuShow">
                <div>
                <!-- :class="{'navActive' : index==menuVisible}" -->
                <li v-for="(item,index) in menuList" @touchstart="handleSelect(item,index)"  :class="{ 'navActive' : index==menuVisible}">{{item.title}}</li>
            </div>
            <div class="menuClose iconfont iconmenu-close" @touchstart="hanleMenuClose"></div>
            </nav>
        </transition>
    </header>
</template>

<script>
export default {
    data(){
        return{
            menuShow:false,
            headerFixed:false,
            menuVisible:0,
            opLogo:require('../../assets/images/logo.png'),//透明logo
            menuList:[
                {title:'首页',url:'/home'},
                {title:'解决方案',url:'/solution'},
                {title:'咨询服务',url:'/service'},
                {title:'产品介绍',url:'/products'},
                {title:'关于我们',url:'/aboutUs'},
            ]
        }
    },
    computed:{
    },
    watch:{
        $route(to, from) {
            // console.log(this.$route.path);
        }

    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll,true)//监听滚动条的位置
        this.init();        
    },
    methods:{
        hanleMenuOpen(){
            this.menuShow=true;
        },
        hanleMenuClose(){
            this.menuShow=false;
        },
        handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let offsetTop = document.querySelector('#header').offsetHeight;
            console.log('哈哈哈哈',scrollTop,offsetTop)
            scrollTop > offsetTop ? this.headerFixed = true : this.headerFixed = false
        },
        init(){
            for(let i in this.menuList){
                this.$route.path == this.menuList[i].url ? this.menuVisible = i : ''
            }
        },
        handleSelect(item,index){
            this.menuVisible=index;
            this.menuShow=false;
            this.$router.push({path:item.url})
        }
    },
    destroyed(){
        //销毁监听事件
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
.navActive{
    color: $C43bee3;
}
header{
    width: 100%;
    padding: .4rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 9;
}
.headerFixed{
    background-color: rgba(0, 0, 0, 0.85);
    box-shadow:0.01rem 0.01rem 0.1rem 0 rgba(0, 0, 0, 0.6);
}
.logo img{vertical-align: middle;}
.toggleMenu{color: #fff;}
.toggleMenu,.menuClose{font-size: .55rem;}
.menuClose{position: absolute;top: 6%;right: 5%;}
.menuList{
    font-size: .36rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: .6;
    text-align: center;
    color: #fff;
    padding: 1.2rem 0;
    li{
        cursor: pointer;
        padding:.2rem 0;
    }
    .bg{

    }
}
</style>
