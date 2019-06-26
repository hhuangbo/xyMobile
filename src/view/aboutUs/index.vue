<template>
    <div class="aboutUs">
        <banner :data="bannerData"></banner>
        <div class="content item_1">
            <h3>{{relXYData.typeName}}</h3>
            <div class="abCont">
                <div class="item"><img :src="relXYData.img" /></div>
                <div class="item" >
                    <p class="infoContent">{{relXYData.content}}</p>
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
                title:'北京新娱互动网络科技有限公司',
                content:'2017年，一群怀揣梦想的年轻人在北京创办了新娱互动。'
            },
            relXYData:{
                typeName:'了解新娱',
                img:require('../../assets/images/map.png'),
                content:'北京新娱互动网络科技有限公司创立于2017年， 专注于企业数据资产化与人工智能方向，为大中型企业客户提供数字化升级的咨询以及落地解决方案，核心团队以80、90后为主，来自百度、京东、中国联通以及深度合作的美国康奈尔大学统计学部等，公司旗下拥有自主研发的大数据智能分析平台，是专业的大数据与人工智能解决方案提供商。'
            },
            chooiceData:{
                typeName:'为什么选择我们',
                data:[
                    {title:'创新',img:require('../../assets/images/ac_1.png'),content:'我们更愿意和客户共同创新、更懂中国企业的经营管理，以及如何通过数据为企业带来更大的价值。'},
                    {title:'产品',img:require('../../assets/images/ac_2.png'),content:'团队有超过10年的技术积累，结合云计算、新娱大数据核心算法、数据可视化以及人工智能等技术手段打造的数聚平台产品。'},
                    {title:'技术',img:require('../../assets/images/ac_3.png'),content:'产品融合了我们在大数据、互联网和企业应用三个领域的多年积累和成功经验。'},
                    {title:'服务',img:require('../../assets/images/ac_4.png'),content:'通过新娱互动高于行业标准的优质服务，为企业数字化转型赋能，帮助企业实现最大的商业价值。'}
                ]
            },
            advantageData:{
                typeName:'新娱优势',
                data:[
                    {img:require('../../assets/images/a2-1.jpg'),content:'骨干团队以80、 85后为主，来自百度、京东、中国联通等知名企业。骨干团队有丰富的大型系统架构研发经验，创始团队在大数据行业深耕多年，系统研发经验丰富，处理过PB级大数据经验。'},
                    {img:require('../../assets/images/a2-2.jpg'),content:'互联网科技公司特有的数字化理性思维，团队学习能力强，运营能力强，接受新事物极快。'},
                    {img:require('../../assets/images/a2-3.jpg'),content:'创始团队的先进行业经验和理念，国内国际各行业领军企业的数据合作。'},
                    {img:require('../../assets/images/a2-4.jpg'),content:'自有数聚平台，按照PB级别架构打造。对数据量的激增与平台扩展能力，做了充分预留。'}
                ]
            },
            xyQualData:{
                typeName:'新娱资质',
                data:[
                    {img:require('../../assets/images/ax-1.jpg'),content:'中关村高新企业'},
                    {img:require('../../assets/images/ax-2.jpg'),content:'大数据产业生态联盟成员'},
                    {img:require('../../assets/images/ax-3.jpg'),content:'信息安全管理体系认证'}
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
@import "../../common/css/px2rem.scss";
$fontC:#686868;
h3{font-size: px2rem(36);color: #353535;text-align: center;line-height:px2rem(60);}
.info{
    width: px2rem(100);
    margin: 0 auto;
    text-align: center;
}
.infoTitle{color: $C43bee3;font-size: px2rem(28);line-height:px2rem(60);}
.infoImg{
    // height: 100rem;
    // background-image: url(../../assets/images/icons.png);
}
.abCont{
    display: flex;
    flex-wrap: wrap;
    .infoContent{color: $fontC;font-size: px2rem(24);line-height: px2rem(40);}
}
.item_1{
    .item{
        width:100%;
        line-height: px2rem(50);
        img{width: 100%;}
    }
    .title{font-size: px2rem(28) !important;color: $C43bee3;font-weight: 500;}
    .infoContent{font-size: px2rem(24);line-height: px2rem(40);}

}
.item_2{
    .item{
        width:50%;
        padding:2% 5%;
        box-sizing: border-box;
    }
    .infoImg img{width: 100%;}
    p{font-size: px2rem(22);}
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
        padding: px2rem(16);
        margin-bottom: px2rem(14);
        box-sizing: border-box;
        background-color: #fff;
        display: flex;
    }
    img{width:35%;height: 100%;}
    .infoContent{padding-left: px2rem(16);}
}
.item_4{
    // .abCont{display: flex;}
    .item{width:50%;text-align: center;}
    img{width:90%;height: 70%;}
    .infoContent{line-height: px2rem(60rem)}
}
.item_5{
    .abCont{justify-content: space-between;}
    .item{
        width: 37%;
        padding: px2rem(34);
        margin: px2rem(20) 0;
        background-color: #fff;
    }
    .info{width: 2rem;}
    img{width: 60%;}
}

</style>
