<template>
    <div class="info">
        <h3>新娱互动专注于企业数据资产化及人工智能方向，致力于为大中型企业客户提供数字化升级的咨询以及落地解决方案。</h3>
        <div class="infoC">
            <img src="../../../assets/images/QRcode.jpg"/>
            <div>
                <p>咨询热线：<span>010-84926251</span></p>
                <p>咨询邮箱：business@shinyutech.com</p>
                <p>地址：北京市朝阳区安立路8号傲城融富中心B座28层</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.info{margin:.4rem 0;
    h3{font-size: .2rem;line-height: .4rem;}
}
.infoC{
    display: flex;
    padding: .3rem 0;
    img{padding-right: .2rem;}
    div{padding: .2rem 0;}
    p{
        font-size: .16rem;
        line-height: .4rem;
        span{
            font-size: .24rem;
            font-weight: bold;
            color: $C43bee3;
        }
    }
}
</style>
