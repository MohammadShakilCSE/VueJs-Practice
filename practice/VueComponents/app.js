Vue.component("demo",{
    template:"<div>This is from template Name:{{ name }} Description: {{ description }} From Function {{ SimpleFun() }} Computed Fun: {{ comFun }} <button @click='changeName()'>Click me</button></div>",
    data:function(){
        return{
            name:"Mohammad shakil",
            description:"hello,this is shakil from bangladesh"
        }
    },
    methods:{
        SimpleFun:function(){
            return "Hey, i am simple function"
        },
        changeName:function(){
            this.name="shohan";
        }
    },
    computed:{
        comFun:function(){
            return "i am a computed function "
        }
    }
});

var myApp= new Vue({
    el:"#app-1",
    data:{
        message:"hello world"
    }
})
var myApp2= new Vue({
    el:"#app-2"
})