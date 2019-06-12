<template>
  <transition>
    <!-- :style="{backgroundImage:'url(' + data.bannerImg + ')'}" -->
    <div class="banner animated delay-1s" 
    :class="data.bannerImgName" 
    :style="{backgroundImage:'url(' + data.bannerImg + ')'}">
        <div class="bCont">
          <h2 class="animated fadeInDown delay-100ms">{{data.title}}</h2>
          <h4 class="animated bounceInLeft delay-150ms" v-html="data.content"></h4>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
    props:[
        'data'
    ],
    data(){
      return{
        
      }
    },
    mounted(){
      console.log(this.data.bannerImg);
      
    }

}
</script>

<style lang="scss" scoped>
@import "../../common/css/px2rem.scss";
.banner{
    width: 100%;
    // background:url(../../assets/images/service.jpg) no-repeat;
    background-repeat: no-repeat;
    position: relative;
    background-size: 100%;
    .bCont{
      padding: 0 8%;
      position: absolute;
      top: 55%;
    }
}

.solution1{background-image:url('../../assets/images/solution1.jpg') !important;}
.solution2{background-image:url('../../assets/images/solution2.jpg') !important;}
.solution3{background-image:url('../../assets/images/solution3.jpg') !important;}
.solution4{background-image:url('../../assets/images/solution4.jpg') !important;}
.solution5{background-image:url('../../assets/images/solution5.jpg') !important;}
</style>
