<template>
    <div class="aboutUs">
        <banner :data="bannerData"></banner>
        <div class="content item_1">
            <h3>{{relXYData.typeName}}</h3>
            <div class="abCont">
                <div class="item"><img src="../../assets/images/map.png" /></div>
                <div class="item" >
                    <p class="title">北京新娱互动网络科技有限公司创立于2017年，诞生在中关村紫荆花科技众创基地</p>
                    <p class="infoContent">专注于企业数据资产化与人工智能方向，为大中型企业客户提供数字化升级的咨询以及落地解决方案，核心团队以80、90后为主，来自于百度、京东、中国联通以及深度合作的美国康奈尔大学统计学部等，公司旗下拥有自主研发的大数据智能分析平台，是专业的大数据与人工智能解决方案提供商。</p>
                </div>
            </div>
        </div>
        <div class="content item_2">
            <h3>{{chooiceData.typeName}}</h3>
            <div class="abCont">
                <div class="item" v-for="ite in chooiceData.data">
                    <div class="info">
                        <div class="infoImg infoImg_4"><img :src="ite.img"/></div>
                        <div class="infoTitle">{{ite.title}}</div>
                    </div>
                    <p class="infoContent">{{ite.content}}</p>
                </div>
            </div>
        </div>
        <div class="content item_3">
            <h3>{{advantageData.typeName}}</h3>
            <div class="abCont">
                <div class="item" v-for = "ite in advantageData.data">
                    <img :src="ite.img"/>
                    <div class="infoContent" v-html="ite.content"></div>
                </div>
            </div>
        </div>
        <div class="content item_4">
            <h3>{{xyQualData.typeName}}</h3>
            <div class="abCont">
                <div class="item" v-for = "ite in xyQualData.data">
                    <img :src="ite.img"/>
                    <div class="infoContent" v-html="ite.content"></div>
                </div>
            </div>
        </div>
        <div class="content item_5">
            <h3>{{xycultureData.typeName}}</h3>
            <div class="abCont">
                <div class="item" v-for="ite in xycultureData.data">
                    <div class="info">
                        <div class="infoImg infoImg_4"><img :src="ite.img"/></div>
                        <div class="infoTitle">{{ite.title}}</div>
                    </div>
                    <p class="infoContent">{{ite.content}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import banner from '../../components/banner/index'
export default {
    components:{
        banner
    },
    data(){
        return{
            bannerData:{
                bannerImg:require('../../assets/images/aboutUs.jpg'),
                title:'新娱 · 源起',
                content:`<p>2017年9月，怀创梦想的2个年轻人</p><p>在中关村紫荆花科技众创基地创办了新娱互动，一家伟大的公司从此诞生了……</p>`
            },
            relXYData:{
                typeName:'了解新娱',
                img:require('../../assets/images/map.png'),
                content:`
                    <p class="title">北京新娱互动网络科技有限公司创立于2017年，诞生在中关村紫荆花科技众创基地</p>
                    <p>专注于企业数据资产化与人工智能方向，为大中型企业客户提供数字化升级的咨询以及落地解决方案，核心团队以80、90后为主，来自于百度、京东、中国联通以及深度合作的美国康奈尔大学统计学部等，公司旗下拥有自主研发的大数据智能分析平台，是专业的大数据与人工智能解决方案提供商。</p>`
            },
            chooiceData:{
                typeName:'为什么选择我们文化',
                data:[
                    {title:'创新',img:require('../../assets/images/ac_1.png'),content:'和我们的客户共同创新，我们更懂中国企业，以及通过数据为企业带来更大的价值。'},
                    {title:'产品',img:require('../../assets/images/ac_2.png'),content:'超过10年的技术积累，结合云计算、多种算法、数据可视化以及人工智能打造的数聚平台产品。'},
                    {title:'技术',img:require('../../assets/images/ac_3.png'),content:'产品融合了我们在大数据、互联网和企业应用三个领域的多年积累和成功经验。'},
                    {title:'服务',img:require('../../assets/images/ac_4.png'),content:'通过客户成功服务，为数字化转型赋能，帮助企业实现最大的商业价值。'}
                ]
            },
            advantageData:{
                typeName:'新娱优势',
                data:[
                    {img:require('../../assets/images/a2-1.jpg'),content:`<p>骨干团队以80、 85后为主，来自于百度、京东、中国联通等知名企业。</p><p>骨干团队都有大型系统架构研发经验，创始团队本身就在大数据行业从业多年，系统研发经验丰富，处理过PB级大数据经验。</p>`},
                    {img:require('../../assets/images/a2-2.jpg'),content:'互联网科技公司特有的数字化理性思维，团队学习能力强，运营能力强，接受新事物极快。'},
                    {img:require('../../assets/images/a2-3.jpg'),content:'创始人所带来的先进行业经验和理念的传承，国内国际各行业领军企业的数据合作。'},
                    {img:require('../../assets/images/a2-4.jpg'),content:'自有数聚平台， 完全按照PB级别架构打造。对于数据量的激增与平台扩展能力，做了充分预留。'}
                ]
            },
            xyQualData:{
                typeName:'新娱资质',
                data:[
                    {img:require('../../assets/images/ax-1.jpg'),content:'中关村高新企业'},
                    {img:require('../../assets/images/ax-2.jpg'),content:'大数据产业生态联盟成员'}
                ]
            },
            xycultureData:{
                typeName:'新娱文化',
                data:[
                    {title:'愿景',img:require('../../assets/images/ac_5.png'),content:'成为企业迈向智能化最具价值的合作伙伴'},
                    {title:'使命',img:require('../../assets/images/ac_6.png'),content:'为客户提供最优质的产品和服务，为员工打造自我价值实现的一流平台'},
                    {title:'价值观',img:require('../../assets/images/ac_7.png'),content:'创业创新、诚信担当、合作分享、共生共赢'},
                    {title:'管理理念',img:require('../../assets/images/ac_8.png'),content:'任务闭环、心态开发、言行一致、结果导向'}
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$fontC:#686868;
h3{font-size: .36rem;color: #353535;text-align: center;padding-bottom:.20rem;}
.info{
    width: 2rem;
    margin: 0 auto;
    text-align: center;
}
.infoTitle{color: $C43bee3;font-size: .28rem;padding: 10% 0;}
.infoImg{
    // height: 100rem;
    // background-image: url(../../assets/images/icons.png);
}
.abCont{
    display: flex;
    flex-wrap: wrap;
    .infoContent{color: $fontC;font-size: .22rem;line-height: .32rem;}
}
.item_1{
    .item{
        width:100%;
        line-height: .5rem;
        img{width: 100%;}
    }
    .title{font-size: .28rem !important;color: $C43bee3;}
    .infoContent{font-size: .24rem;line-height: .5rem;}

}
.item_2{
    .item{
        width:50%;
        padding:2% 5%;
        box-sizing: border-box;
    }
    p{font-size: .22rem;}
}
.item_3{
    background: url(../../assets/images/a-2.jpg) no-repeat;
    background-size: cover;
    h3{color: #fff;}
    .abCont{
        display: flex;
    }
    .item{
        width: 100%;
        padding: .16rem;
        margin-bottom: .14rem;
        box-sizing: border-box;
        background-color: #fff;
        display: flex;
    }
    img{width:35%;height: 100%;}
    .infoContent{padding-left: .16rem;}
}
.item_4{
    // .abCont{display: flex;}
    .item{width:50%;text-align: center;}
    img{width:90%;}
    .infoContent{padding:.20rem 0;}
}
.item_5{
    .abCont{justify-content: space-between;}
    .item{
        width: 37%;
        padding: .34rem;
        margin: .2rem 0;
        background-color: #fff;
    }
}

</style>
