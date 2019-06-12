<template>
    <div class="tabContent">
        <p class="desc infoContent">{{contentData.desc}}</p>
        <ul class="">
            <li v-for="ite in contentData.data">
                <img :src="ite.img" />
                <h3>{{ite.title}}</h3>
                <p class="infoContent">{{ite.content}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['contentData']

}
</script>

<style lang="scss" scoped>

@import "../../common/css/px2rem.scss";
.infoContent{
    font-size: px2rem(20);
    color: #686868;
    line-height: px2rem(40);
}
.tabContent{
    
    h3{    
        font-size: px2rem(24);
        text-align: center;
        color: #353535;
        line-height: px2rem(65);
    }
    ul{margin: 3% auto;display: flex;flex-wrap: wrap;
        // justify-content: space-around;
    }
    li{
        width: 50%;box-sizing: border-box;padding:px2rem(17);
        img{width: 100%;}
    }
}
@media screen and (max-width: 1024px){
    .tabContent{margin-top: 22%;}
}
</style>
