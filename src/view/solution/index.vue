<template>
    <transition>
        <div class="solution ">
            <banner v-if="bannerShow" :data="bannerData" ></banner>
            <div class="content soluCont">
                <ul class="soluTab">
                    <li v-for="(item,index) in soluTabData" :class="{'active' : index == tabActive}" @touchstart="toggleNav(index)">{{item.name}}</li>
                    <li>标签隐藏</li>
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
                    title:'文旅小镇数字化解决方案',
                    content:'Digital solutions for cultural-based tourism towns'
                },
                {
                    bannerImg:'',
                    bannerImgName:'solution2',//require('../../assets/images/solution2.jpg'),
                    title:'产业园区数字化解决方案',
                    content:'Digital solutions for industrial parks'
                },
                {
                    bannerImg:'',
                    bannerImgName:'solution3',//require('../../assets/images/solution3.jpg'),
                    title:'智慧场馆数字化解决方案',
                    content:'Digital solutions for smart venues'
                },
                {
                    bannerImg:'',
                    bannerImgName:'solution4',//require('../../assets/images/solution4.jpg'),
                    title:'三方物流数字化解决方案',
                    content:'Digital solutions for third-party logistics'
                },
                {
                    bannerImg:'',
                    bannerImgName:'solution5',//require('../../assets/images/solution5.jpg'),
                    title:'智能制造数字化解决方案',
                    content:'Digital solutions for intelligent manufacturing'
                }
            ],
            soluTabData:[
                {name:'文旅小镇',url:''},
                {name:'产业园区'},
                {name:'智慧场馆'},
                {name:'三方物流'},
                {name:'智能制造'}
            ],
            contentData:{},
            solutContData:[
                {
                    desc:`<p class="parag">文旅小镇是主打文旅产业的特色小镇，主要涵盖地产、民宿、物业、酒店、餐饮、文体活动等商业板块。</P><p class="parag">新娱互动基于云计算、大数据及人工智能等技术手段，为文旅小镇提供以会员、商家为中心的一体化数字解决方案。</p><p class="parag">方案中重新定义了文旅小镇业务架构，向下汇聚各类业务子系统，向上支撑运营部门创新发展，实现“数据全融合、状态全可视、业务全可管、事件全可控”；通过“安全、舒适、高效、绿色”的智慧小镇理念，为小镇访客提供更优质的服务体验，为小镇经营管理持续提供卓越的技术支撑，从而创造更大的经济与社会价值。</p>`,
                    data:[
                        {title:'会员分析&潜客挖掘',img:require('../../assets/images/pro1_1.jpg'),content:'通过大数据分析，从现有的存量客户和潜在客群中筛选出优质客户，助力提升潜客转化率。'},
                        {title:'提升会员运营',img:require('../../assets/images/pro1_2.jpg'),content:'通过与业务板块系统数据集成，完成会员数据补充，从而可以更有效地实现会员忠诚度管理、及时唤醒沉默会员、挽留可能会遗失的重点会员，提升会员运营的整体效果。'},
                        {title:'运营管理优化',img:require('../../assets/images/pro1_3.jpg'),content:'通过对酒店管理系统、餐饮经营系统、商业应用系统、物业系统、停车系统等不同业务类型系统的整体架构设计优化，从而实现全局一体化智能管理，提高业务效率，降低管理成本。'},
                        {title:'消费预测',img:require('../../assets/images/pro1_4.jpg'),content:'基于历史数据，通过新娱互动核心大数据算法，预测未来业务数据走势，精准预判，增强经营成本及潜在风险的管控。'},
                        {title:'商家一体化运营',img:require('../../assets/images/pro1_5.jpg'),content:'提供自营商家、合作商家入住、运营、结算一体化管理，降低管理成本。'}
                    ]
                },
                {
                    desc:`<p class="parag">产业园区是指以为促进产业发展为目标而创立的特殊区位环境，常见类型有：物流园区、科技园区、文创园区、总部基地、生态农业园区等。业务类型上主要涵盖物业管理、公寓租售、企业服务、商铺管理、餐饮、文体活动等商业板块。</p><p class="parag">新娱互动基于云计算、大数据及人工智能等科技手段，为产业园区提供以会员、企业为中心的一体化数字解决方案，全面助力园区产业升级。</p><p class="parag">方案中重新定义了产业园区业务架构，引导了产业园区的升级与变革。向下汇聚各类业务子系统，向上支撑运营部门创新发展，实现“数据全融合、状态全可视、业务全可管、事件全可控”；通过“智慧、科技、高效、绿色”的产业园区经营理念，使产业园区有效地创造聚集力，通过共享资源，克服外部负效应，带动关联产业的发展。从而有效推动产业集群的形成。</p>`,
                    data:[
                        {title:'提升园区产业聚合能力',img:require('../../assets/images/pro2_1.jpg'),content:'建立企业合作的精准匹配与撮合机制，打通园区产业链上下游。'},
                        {title:'提升园区服务软实力',img:require('../../assets/images/pro2_2.jpg'),content:'通过企业基础服务平台，推动产业园区供给侧改革，助力园区转型升级。'},
                        {title:'优化园区发展环境',img:require('../../assets/images/pro2_3.jpg'),content:'从政策智能匹配到政务服务信息化再到辅助决策引擎，全链条打造政务生态闭环，促进企业快速发展。'},
                        {title:'运营管理优化',img:require('../../assets/images/pro2_4.jpg'),content:'全面提升产业园区在招商、运营、管理、服务等方面的能力。'},
                        {title:'提升会员运营',img:require('../../assets/images/pro2_5.jpg'),content:'通过与业务板块系统数据集成，完成会员数据补充，从而可以更有效地实现会员忠诚度管理、及时唤醒沉默会员、挽留可能会遗失的重点会员，提升会员运营的整体效果。'}
                    ]
                },
                {
                    desc: `<p class="parag">智慧场馆是结合移动互联网、人工智能等技术为室内外运动场所、俱乐部、健身康养会所等提供智能化管理的一站式服务系统。主要涵盖了用户入馆、业务办理、会员卡系统、消费收银、财务统计、活动组织、设备管理、连锁经营等一系列工作。</p><p class="parag">新娱互动基于云计算、大数据及人工智能等科技手段，提供以会员、场馆为中心的一体化数字解决方案，全面助力场馆经营升级。</p><p class="parag">方案中重新定义了智慧场馆业务架构，整合了线上线下各种需求场景，引入物联网硬件技术，统一会员管理，建立数字化标准，全面支撑连锁经营。开启体育产业人工智能时代。</p>`,
                    data:[
                        {title:'会员分析&潜客挖掘',img:require('../../assets/images/pro3_1.jpg'),content:'通过大数据分析，从现有的存量客户和潜在客群中筛选出优质客户，助力提升潜客转化率。'},
                        {title:'提升会员运营',img:require('../../assets/images/pro3_2.jpg'),content:'会员数据精准采集，依托微信体系，通过在线发布电子体验券、关注有礼、线上秒杀、朋友圈砍价等丰富的活动，把教培、租赁、售卖等绑定在一起管理，助力提升会员转化率。'},
                        {title:'运营管理优化',img:require('../../assets/images/pro3_3.jpg'),content:'夯实管理基础，大幅提升管理效能，业务数据即时推送，在全世界任何地方都可以了解场馆的运营情况，协助管理者轻松实现对经营全过程掌控。'},
                        {title:'营销助力',img:require('../../assets/images/pro3_4.jpg'),content:'拓展客户新渠道，迅速提高场馆知名度，助力场馆营销，增加场馆收益，提升品牌价值，提高客户体验和服务质量。'},
                        {title:'可视化辅助决策',img:require('../../assets/images/pro3_5.jpg'),content:'针对场馆的客流量分析、运营数据分析、会员数据分析、客户服务分析、营销分析、可预测分析等，为决策者提供客观且直观的可视化工具，实时有效分析过去、现在及预测未来的运营情况，助力制定科学应对机制，提升经营管理水平。'}
                    ]
                },
                {
                    desc: `<p class="parag">三方物流是一个具备实质性资产的企业公司对其它公司提供物流相关的服务或与相关物流服务的行业者合作，提供更完整服务的新型物流服务模式。主要涵盖运输、仓储、存货管理、订单管理、咨讯整合、附加价值等服务。</p><p class="parag">新娱互动基于云计算、大数据及人工智能等技术手段，通过对托运单管理、订单跟踪、货物跟踪、人员管理、运输业户管理，对物流过程中的存储、装箱、运输、报关等多个环节进行优化配置，打通生产、配送、仓储、分销等供应链信息流，实现运输业务流程的可视化监控等环节的智能管理，降低各环节物流成本和提高物流效率。</p>`,
                    data:[
                        {title:'运营优化',img:require('../../assets/images/pro4_1.jpg'),content:'运营管理主要通过托运单管理、订单跟踪、货物跟踪、人员管理、运输业户管理，实现运输业务流程的可视化监控等环节的智能管理，提高效率，降低成本。'},
                        {title:'车辆管理',img:require('../../assets/images/pro4_2.jpg'),content:'让数据驱动车辆管理变得更容易，通过使用车联网系统，运营车辆的能耗数据、路线跟踪、驾驶行为等数据更加直观，有助于规划车辆保养、用车成本统计、改善司机驾驶习惯等。'},
                        {title:'智能追踪',img:require('../../assets/images/pro4_3.jpg'),content:'采用物联网技术，精准定位追踪货物与车辆，实时上报位置、承运商、异常等信息，解决长途运输层层分包信息断层问题，真正实现“一单到底”。'},
                        {title:'可视化辅助决策',img:require('../../assets/images/pro4_4.jpg'),content:'完善的数据管理体系，各类报表多维度关联分析，订单状态、车辆数据、异常预警、企业运营数据等都可通过数据看板以动态图文的形式实时呈现，为企业决策提供科学依据。'},
                        {title:'智能结算',img:require('../../assets/images/pro4_5.jpg'),content:'各承运商之间运费层层分段管理，非直接上下游承运商之间有着严格的运费保密机制，维护行业正向生态秩序；同时，灵活支持各种按方、按里程、按件、按卸货地点等多种组合定制化计价模式，上下游运费批量自动结算，大幅提升财务效率。'}
                    ]
                },
                {
                    desc:'<p class="parag">制造业作为中国经济转型的龙头行业举足轻重，中国于2015年5月出台 “中国制造2025”，大力推进由制造大国向制造强国的转变；同时，云计算、大数据、物联网、人工智能的兴起，正推动着制造业数字化和智能化转型；随着“中国制造2025”的落地，信息技术与制造业的深入融合，制造业生产方式、企业组织、产品模式、服务模式等都将发生深刻的变化。</p>',
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
