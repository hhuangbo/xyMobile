<template>
    <div class="home">
        <theader></theader>
            <transition>
                <article>
                    <h2 class ="animated fadeInDown delay-30ms">数据连接 展望未来 让决策更智能</h2>
                    <h4 class ="animated fadeInUp delay-20ms">大数据与人工智能解决方案提供商</h4>
                </article>
            </transition>
        <tfooter></tfooter>
    </div>
</template>

<script>
import theader from '../../components/header/index'
import tfooter from '../../components/footer/copyright'
export default {
    components:{
        theader,
        tfooter
    },
    data(){
        return{
            logoShow:0,//白色字体的logo
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../common/css/px2rem.scss";
.home{
    width:100%;
    height: 100%;
    background: url(../../assets/images/index.jpg);
    background-size:cover;
}
.copyright{
    position: absolute;
    right: 5%;
    left: 5%;
    bottom:1%;
}
article{    
    width: 77%;
    position: absolute;
    top: 60%;
    left: 56%;
    transform: translate(-50%,-50%);
    text-align: left;
}
h2{
    font-size: px2rem(60);
    color: $C43bee3;
}
h4{
    font-size: px2rem(30);
    padding-top: px2rem(50);
    color: #fff;
}
@media screen and (max-width:300px){
    article{
        top:54%;
        // left:56%;
    }
}
@media screen and (min-width:410px) and (max-width:420px){
    article{
        top:54%;
        // left:56%;
    }
}
@media screen and (width:411px){
    article{
        top:54%;
    }
}
@media screen and (min-width:320px) and (max-width:500px){
    article{
        top:60%;
        // left:56%;
    }
}
@media screen and (width:375px) and (height:812px){
    article{
        top:54%;
    }
}
@media screen and (width:411px) and (height:823px){
    article{
        top:54%;
    }
}
@media screen and (min-width:750px) and (max-width:1024px){
    article{
        top:81%;
        left:56%;
    }
}
</style>
