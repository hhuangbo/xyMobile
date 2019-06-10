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

.infoContent{
    font-size: .2rem;
    color: #686868;
    line-height: .40rem;
}
.tabContent{
    margin-top: 20%;
    h3{    
        font-size: .24rem;
        text-align: center;
        color: #353535;
        padding: .10rem 0;
    }
    ul{margin: 3% auto;display: flex;flex-wrap: wrap;
        // justify-content: space-around;
    }
    li{
        width: 50%;box-sizing: border-box;padding:.17rem;
        img{width: 100%;}
    }
}
</style>
