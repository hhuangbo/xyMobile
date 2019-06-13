<template>
    <transition>
        <div class="solution ">
            <banner v-if="bannerShow" :data="bannerData" ></banner>
            <div class="content soluCont">
                <ul class="soluTab">
                    <li v-for="(item,index) in soluTabData" :class="{'active' : index == tabActive}" @touchstart="toggleNav(index)">{{item.name}}</li>
                </ul>
                <tempContent :contentData="contentData"></tempContent>
            </div>
        </div>
    </transition>
</template>

<script>
import banner from '../../components/banner/index'
import tempContent from './tempContent'

import {mapGetters} from  'vuex'

export default {
    components:{
        banner,
        tempContent
    },
    data(){
        return{
            bannerShow:true,
            tabActive:0,
            bannerData:{},
            solutbannerData:[
                {
                    bannerImg:'',
                    bannerImgName:'solution1',//require('../../assets/images/solution1.jpg'),
                    title:'Digital solutions for cultural-based tourism towns',
                    content:'文旅小镇数字化解决方案'
                },
                {
                    bannerImg:'',
                    bannerImgName:'solution2',//require('../../assets/images/solution2.jpg'),
                    title:'Digital solutions for industrial parks',
                    content:'产业园区数字化解决方案'
                },
                {
                    bannerImg:'',
                    bannerImgName:'solution3',//require('../../assets/images/solution3.jpg'),
                    title:'Digital solutions for sports venues',
                    content:'运动场馆数字化解决方案'
                },
                {
                    bannerImg:'',
                    bannerImgName:'solution4',//require('../../assets/images/solution4.jpg'),
                    title:'Digital solutions for third-party logistics',
                    content:'三方物流数字化解决方案'
                },
                {
                    bannerImg:'',
                    bannerImgName:'solution5',//require('../../assets/images/solution5.jpg'),
                    title:'Digital solutions for intelligent manufacturing',
                    content:'智能制造数字化解决方案'
                }
            ],
            soluTabData:[
                {name:'文旅小镇',url:''},
                {name:'产业园区'},
                {name:'运动场馆'},
                {name:'三方物流'},
                {name:'智能制造'},
                {name:'智能制造'}
            ],
            contentData:{},
            solutContData:[
                {
                    desc:'文旅小镇覆盖地产、民宿、物业、酒店、餐饮、商业、活动等板块，提供基于云计算、大数据及人工智能以会员、商家为中心的一体化数字解决方案。重新定义文旅小镇业务架构，向下汇聚各类业务子系统，向上支撑运营部门创新发展，实现“数据全融合、状态全可视、业务全可管、事件全可控”；通过“安全、舒适、高效、绿色”的智慧小镇理念，为小镇使用者提供更优质的服务体验，为小镇运营者提供持续卓越运营的能力，从而创造更大的经济与社会价值。',
                    data:[
                        {title:'会员分析&潜客挖掘',img:require('../../assets/images/pro1_1.jpg'),content:'通过大数据分析，从现有的存量客户和潜在客群中筛选出高意向的购买客户（高价值客户），助力提升潜客转化率。'},
                        {title:'提升会员运营',img:require('../../assets/images/pro1_2.jpg'),content:'通过与业务板块系统数据集成，完成会员数据补充，从而可以更有效地实现会员忠诚度管理、及时唤醒沉默会员、挽留可能会遗失的重点会员，提升会员运营的整体效果。'},
                        {title:'运营管理优化',img:require('../../assets/images/pro1_3.jpg'),content:'主要通对酒店系统、餐饮系统、商业系统、物业系统、停车系统等系统的系统连通，从而形成全局一体化智能管理，提高业务效率，降低管理成本。'},
                        {title:'消费预测',img:require('../../assets/images/pro1_4.jpg'),content:'通过历史数据行为，通过大数据多种算法，预测未来会员消费形式，从而提前做好应对，降低接待风险。'},
                        {title:'商家一体化运营',img:require('../../assets/images/pro1_5.jpg'),content:'提供自营商家、合作商家入住、运营、结算一体化管理，降低管理成本。'}
                    ]
                },
                {
                    desc:'产业园区覆盖地产、商业、物业、公寓、企业、餐饮、活动等板块，提供基于云计算、大数据及人工智能以会员、企业为中心的一体化数字解决方案，全面助力园区产业升级。业态多样化与消费享受化，引导了产业园区的升级与变革，形成了商业聚集的全新创造——产业综合体，如万达的综合体、上海新天地的时尚聚集、成都锦里、北京798艺术区等等，都成为了代表城市品牌与生活方式的标志区。无论是企业办公、商业消费、文化娱乐、教育运动、商务招待、健体美容，都可以将商业、服务业与楼宇经济、O2O相结合的商业服务模式，并在大数据技术应用基础上，加速科学的产业生态圈体系的规划建设，强调设计的互动性、体验性、参与感及基于大数据商业模式分析，为精准营销、引流、运营管理等做数据支持。',
                    data:[
                        {title:'提升园区产业聚合能力',img:require('../../assets/images/pro2_1.jpg'),content:'建立企业合作的精准匹配与撮合机制，打通园区产业链上下游。'},
                        {title:'提升园区服务软实力',img:require('../../assets/images/pro2_2.jpg'),content:'通过企业基础服务平台，推动产业园区供给侧改革，助力园区转型升级。'},
                        {title:'优化园区发展环境',img:require('../../assets/images/pro2_3.jpg'),content:'从政策智能匹配到政务服务信息化再到辅助决策引擎，全链条打造政务生态闭环，促进企业快速发展。'},
                        {title:'运营管理优化',img:require('../../assets/images/pro2_4.jpg'),content:'全面提升产业园区在招商、运营、管理、服务等方面的能力。'},
                        {title:'提升会员运营',img:require('../../assets/images/pro2_5.jpg'),content:'通过与业务板块系统数据集成，完成会员数据补充，从而可以更有效地实现会员忠诚度管理、及时唤醒沉默会员、挽留可能会遗失的重点会员，提升会员运营的整体效果。'}
                    ]
                },
                {
                    desc:'改变传统运营方式，用数据驱动运营发展，提供基于云计算、大数据及人工智能以会员为中心的一体化数字解决方案。',
                    data:[
                        {title:'会员分析&潜客挖掘',img:require('../../assets/images/pro3_1.jpg'),content:'洞悉会员画像，个性化精准服务，提升用户体验，从现有的存量客户和潜在客群中筛选出高意向的购买客户（高价值客户），助力提升潜客转化率。'},
                        {title:'提升会员运营',img:require('../../assets/images/pro3_2.jpg'),content:'精准会员数据采集，依托微信体系，通过在线发布电子体验券、关注有礼、线上秒杀、朋友圈砍价等丰富的活动，把教培、租赁、售卖等绑定在一起管理，助力提升会员转化率。'},
                        {title:'运营管理优化',img:require('../../assets/images/pro3_3.jpg'),content:'夯实管理基础，大幅提升管理效能，业务数据即时推送，在全世界任何地方都可以了解场馆的运营情况，协助管理者轻松实现对工作全过程掌控。'},
                        {title:'营销助力',img:require('../../assets/images/pro3_4.jpg'),content:'拓展客户新渠道，迅速提高场馆知名度，助力场馆营销，增加场馆收益，提升品牌价值，提高客户体验和服务质量。'},
                        {title:'可视化辅助决策',img:require('../../assets/images/pro3_5.jpg'),content:'针对场馆的客流量分析、运营数据分析、会员数据分析、客户服务分析、营销分析、可预测分析等多方面为场馆提供经营管理大数据，从而为决策者提供快速经营状况分析及应对机制，实时有效分析过去、现在及将来的运营情况，为效快速提升管理经营水平。'}
                    ]
                },
                {
                    desc:'打通从生产、配送、仓储、分销等供应链信息流，降低各环节物流成本和提高物流效率，持续创造价值流。基于云计算、大数据及人工智能通过对托运单管理、订单跟踪、货物跟踪、人员管理、运输业户管理，实现运输业务流程的可视化监控等环节的智能管理，提高效率，降低成本。应用多种优化算法，对物流过程中的存储、装箱、运输、报关等多个环节进行优化配置，提升物流作业效率。',
                    data:[
                        {title:'运营优化',img:require('../../assets/images/pro4_1.jpg'),content:'运输管理主要通过对托运单管理、订单跟踪、货物跟踪、人员管理、运输业户管理，实现运输业务流程的可视化监控等环节的智能管理，提高效率，降低成本'},
                        {title:'车辆管理提升',img:require('../../assets/images/pro4_2.jpg'),content:'让数据驱动车辆管理变得更容易，通过使用车辆网系统，运营车辆的能耗数据、路线跟踪、驾驶行为等数据一目了然，有助于规划车辆保养、用车成本统计、改善司机驾驶习惯等。'},
                        {title:'智能追踪',img:require('../../assets/images/pro4_3.jpg'),content:'采用物联网技术，百分百精准定位追踪货物与车辆，实时上报位置、承运商、异常等信息，解决长途运输层层分包信息断层问题，真正实现“一单到底”。'},
                        {title:'可视化辅助决策',img:require('../../assets/images/pro4_4.jpg'),content:'完善的数据管理体系，各类报表多维度关联分析，订单状态、车辆数据、异常预警、企业运营数据等都可通过数据看板以动态图文的形式实时呈现，为企业决策提供有力依据。'},
                        {title:'智能结算',img:require('../../assets/images/pro4_5.jpg'),content:'各承运商之间运费层层分段管理，非直接上下游承运商之间有着严格的运费保密机制，维护行业正向生态秩序；同时，灵活支持各种按方、按里程、按件、按卸货地点等多种组合定制化计价模式，上下游运费批量一键结算，大幅提升财务效率。'}
                    ]
                },
                {
                    desc:'制造业作为中国经济转型的龙头行业举足轻重，中国于2015年5月出台 “中国制造2025”，大力推进由制造大国向制造强国的转变；同时，云计算、大数据、物联网、人工智能的兴起，正推动着制造业数字化和智能化转型；随着“中国制造2025”的落地，信息技术与制造业的深入融合，制造业生产方式、企业组织、产品模式、服务模式等都将发生深刻的变化。',
                    data:[
                        {title:'采购及供应商多维智能管理',img:require('../../assets/images/pro5_1.jpg'),content:'对采购订单及商务、物料供应及交期管理、物料成本管理、物料质量管理、供应商管理活动中产生的多样数据进行关联分析和多维建模，可视化监控不同类别物料、关键物料、不同供应商、不同区域的供应能力，动态预警关键指标，预见未来未雨绸缪，最佳化供应水平及供需平衡。'},
                        {title:'计划统筹',img:require('../../assets/images/pro5_2.jpg'),content:'深度挖掘产品需求计划、物料供应计划、生产计划、产能计划等多个环节中产生的各类数据，结合产品不同生命周期的供需特点，对影响供需平衡的各层面数据进行全面的分析和建模，帮助实现供应链计划管理能力的精益求精。'},
                        {title:'供应链决策分析智能辅助',img:require('../../assets/images/pro5_3.jpg'),content:'综合考虑内部和外部、宏观和微观等多方面因素对制造和供应链运作的影响，平衡企业供应链运作对效率、交付水平、弹性、质量、成本及资源统筹等多个维度的管理需求，化繁为简，全方位智能化支持供应链高效决策。'},
                        {title:'订单履约全程智能管控',img:require('../../assets/images/pro5_4.jpg'),content:'对不同业务模式、不同产品线、不同渠道、不同区域、不同客户、不同时期的订单交付情况进行全周期监控和分析，打通涉及前后端多个职能部门的预测、订单、物料供应、生产工单、仓储、运输、交货、付款等多个环节的信息流，全面提升交付水平和客户满意度。'},
                        {title:'库存周转智能优化',img:require('../../assets/images/pro5_5.jpg'),content:'兼顾研、产、供、存、流、销等各环节中影响库存周转指标的相关因素，对库存周转进行多维度动态的分析监控和预警，变“事后”补救为 “事前”智能预警、 “事中”智能优化，大幅降低呆滞库存相关损失，从全价值链整合的角度统筹库存周转的相关指标和措施，有效改变之前头痛医头、脚痛医脚的分段管控带来的弊端，避免库存失控的恶性结果发生。'},
                        {title:'销售预测+运营优化',img:require('../../assets/images/pro5_6.jpg'),content:'综合分析影响销量预测的内外部、直接和间接等多方面因素，结合历史数据，从销售组织、渠道、产品、时间等多个维度分析建模，提升预测准确率，帮助企业高效运行生产规划机制。'}
                    ]
                }
            ]
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.bannerData=this.solutbannerData[0];
            this.contentData=this.solutContData[0]
        },
        toggleNav(index){
            this.bannerShow=true;
            this.tabActive=index;
            var solutContData=this.solutContData;
            for(let i in solutContData){
                this.contentData=solutContData[index]
                this.bannerData=this.solutbannerData[index];
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../common/css/px2rem.scss";
.soluCont{
    position: relative;
}
.soluTab{
    width: 90%;
    font-size: px2rem(30);
    color: #353535;
    background-color: #fff;
    position: absolute;
    top: px2rem(-25);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: hidden;
    box-shadow:.01rem .10rem 20rem 0 rgba(227,230,232,.6);
    li{padding:px2rem(20) px2rem(40);text-align:center;cursor: pointer;}
    .active{background-color: $C43bee3;color: #fff;}
    li:last-child{visibility: hidden;}
}

</style>
