let myApp = new Vue({
    el:"#app",
    data:{

    },
    methods:{
       btnClick:function(){
           //console.log("Button clicked");
           console.log(this.$refs);
           console.log("Name : "+ this.$refs.textName.value);
           console.log("Value : "+ this.$refs.textEmal56t5.value);
       } 
    }
})