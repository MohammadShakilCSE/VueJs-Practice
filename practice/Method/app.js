var Myapp = new Vue({
    el:"#app",
    data:{
        message:"i am vue js"
    },
    methods:{
        run:function(){
            return "i am running good"
        },
        vlueAccess:function(){
            return this.message + " .Wellcome back home"
        }
    }
})