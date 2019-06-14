<template>
    <div class="fromInfo">
        <div class="">
            <h2>数据驱动，从现在开始！</h2>
            <div class="fromItem">
                <label>姓名：</label>
                <input type="text" value="" v-model.trim = "info.name"/>
            </div>
            <div class="fromItem">
                <label >电话：</label>
                <input type="number" value="" v-model.trim = "info.mobile" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"/>
            </div>
            <div class="fromItem">
                <label>邮箱：</label>
                <input type="email" value="" v-model.trim = "info.email"/>
            </div>
            <button class="btnsubmit" @click="btnsubmit()">提交申请</button>
        </div>
        <div class="successInfo" v-show="isShow">
            <div class="bg"></div>
            <div class="tips">
                <p>信息已收到，我们会在24小时内联系您！</p>
                <button class="btnClose" @click="btnClose()">关闭</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:false,
            errTipShow:false,//是否显示错误信息
            errorTip:'',//错误提示
            info:{
                name:'',
                mobile:'',
                email:''
            }
        }
    },
    methods:{
        btnsubmit(){
            //邮箱
            var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            //手机号码
            let regMobile=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if(this.info.mobile == '' && this.info.email == ''){
                this.errorTip='手机号和邮箱不能为空，请选填！';
                this.errTipShow=true;
                return;
            }
            if(this.info.email == '' || this.info.mobile != ''){//邮箱为空 手机号不为空 则验证
                if(!regMobile.test(this.info.mobile)){
                    this.errorTip='手机号有误！';
                    this.errTipShow=true;
                    return;
                }
            }
            if(this.info.mobile == '' || this.info.email != ''){//手机号为空 邮箱不为空 则验证
                if(!regEmail.test(this.info.email)){ //邮箱
                    this.errorTip='邮箱有误！';
                    this.errTipShow=true;
                    return;
                }
            }
            this.errTipShow=false;
            let params=JSON.stringify(this.info)
            this.$http({
                method: 'post',
                url:'/info_reception/',
                data:params
            }).then(res=>{  
                this.isShow=true;//弹出成功的提示框
            }).catch(err => {
                console.log(err);
            }); 
        },
        btnClose(){
            this.isShow = false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../common/css/px2rem.scss";
.fromInfo{
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: center;
}
h2{
    font-size: px2rem(30);
    margin: px2rem(8) 0 px2rem(30);
}
.fromItem{
    font-size: px2rem(20);
    color: $C80838a;
    border: 1px solid $C80838a;
    margin: 5% 0;
    display: flex;
    input{
        border: 0;
        background-color: $C000714;
        color: $C80838a
    }
}
.fromItem,.btnsubmit{
    padding: px2rem(15);
    border-radius: 5px;
}
.btnsubmit{
    width: 50%;
    margin: px2rem(8)auto;
    color: #fff;
    font-size: px2rem(24);
    background-color: $C43bee3;
    border-radius: 5px;
}

.successInfo{
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: px2rem(24);
    font-weight: bold;
    position: absolute;
    top: 0;
    .bg{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: $C1075aa;
        opacity: .9;
        z-index: 0;
    }
    .tips{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%,-50%);
        text-align: center;
        font-size: px2rem(18);
    }
    .btnClose{
        width: 25%;
        background-color:#fff;
        color: $C1075aa; 
        padding: px2rem(5) 0;
        margin: px2rem(2) 0;
        border-radius: 5px;
    }
}
.errorTip{
    color: #ce2e2e;
    font-size: 12px;
    text-align: left;
}
</style>
