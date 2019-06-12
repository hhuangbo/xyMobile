<template>
  <header :class="{'headerFixed' : headerFixed} " id="header">
    <div class="logo">
      <img :src="opLogo">
    </div>
    <div :class="['toggleMenu iconfont iconmenu-open',menuShow ? 'toggleMhide' :'']" @touchstart="hanleMenuOpen($event)"></div>
    <transition>
      <nav
        :class="['menuList animated  deplay-1s',menuShow ? 'slideInDown': 'fadeOutUp']"
        v-show="menuShow"
        ref="mbMenu">
        <div class="menuClose iconfont iconmenu-close" @touchstart="hanleMenuClose"></div>
        <div>
          <!-- :class="{'navActive' : index==menuVisible}" -->
          <li v-for="(item,index) in menuList"
            @touchstart="handleSelect(item,index)"
            :class="{ 'navActive' : index==menuVisible}"
          >{{item.title}}</li>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuShow: false,
      headerFixed: false,
      menuVisible: 0,
      opLogo: require("../../assets/images/logo.png"), //透明logo
      menuList: [
        { title: "首页", url: "/home" },
        { title: "解决方案", url: "/solution" },
        { title: "咨询服务", url: "/service" },
        { title: "产品介绍", url: "/products" },
        { title: "关于我们", url: "/aboutUs" }
      ]
    };
  },
  computed: {},
  watch: {
    $route(to, from) {
      // console.log(this.$route.path);
    }
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll, true); //监听滚动条的位置
    this.init();
    window.addEventListener("touchstart", e => {
      this.menuShow = false;
    });
    // this.handleScroll();// 监听滚动条
    this.touchmoved();// 监听滚动条
  },
  methods: {
    hanleMenuOpen(event) {
      //阻止冒泡
      event || (event = window.event);
      event.stopPropagation
        ? event.stopPropagation()
        : (event.cancelBubble = true);
      this.menuShow = true;
      console.log(this)
    },
    hanleMenuClose() {
      this.menuShow = false;
    }, 
    // 监听滚动条
    touchmoved() {
      let that = this;
      var pageYs;
      let offsetTop = document.querySelector("#header").offsetHeight;
      window.addEventListener("touchmove", e => {
        // alert(offsetTop);
        if (parseInt(window.pageYOffset) >= offsetTop) {
          that.headerFixed = true;
        } else {
          that.headerFixed = false;
        }
      });
      //手指离开屏幕
    //   window.addEventListener("touchend",e => {
    //       setTimeout(() => {
    //         if (parseInt(window.pageYOffset) >= offsetTop) {
    //           that.headerFixed = true;
    //         } else {
    //           that.headerFixed = false;
    //         }
    //       }, 200);
    //     },
    //     false
    //   );
    },
    init() {
      for (let i in this.menuList) {
        this.$route.path == this.menuList[i].url ? (this.menuVisible = i) : "";
      }
    },
    handleScroll(){
        var _this =this
        window.addEventListener('scroll',function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        this.headerFixed = true;
        if(scrollTop>=100){this.headerFixed = true;}else{this.headerFixed = false}
        console.log(scrollTop,this.headerFixed)
        })
    },
    handleSelect(item, index) {
      this.menuVisible = index;
      this.menuShow = false;
      this.$router.push({ path: item.url });
    }
  },
  destroyed() {
    //销毁监听事件
    // window.removeEventListener("scroll", this.handleScroll);
    // window.removeEventListener("touchmove");
    // window.removeEventListener("touchend");
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/css/px2rem.scss";
.navActive {
  color: $C43bee3;
}
header {
  width: 100%;
  padding: 4%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 9;
}
.headerFixed {
  // background-color: #000;
  // opacity: 0.9;
  background-color:rgba(0, 0, 0, 0.87);
  box-shadow:0.01rem 0.01rem 0.1rem 0 rgba(0, 0, 0, 0.6);
}
.logo img {
  vertical-align: middle;
}
.toggleMenu {
  color: #fff;
}
.toggleMhide{opacity: 0;}
.toggleMenu,
.menuClose {
  font-size: px2rem(55);
  padding: 6% 0 0 0;
}
.menuClose {
  position: absolute;
  top: 6%;
  right: 5%;
}
.menuList {
  font-size: px2rem(36);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.87);
  opacity: 0.6;
  text-align: center;
  color: #fff;
  padding: 20% 0 5%;
  li {
    cursor: pointer;
    padding: px2rem(20) 0;
  }
  .bg {
  }
}
</style>
