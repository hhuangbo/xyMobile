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
                <input type="text" value="" v-model.trim = "info.phone" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"/>
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
            info:{
                name:'',
                phone:'',
                email:''
            }
        }
    },
    methods:{
        btnsubmit(){
            this.isShow = true;
            console.log(this.info.phone)
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
</style>
