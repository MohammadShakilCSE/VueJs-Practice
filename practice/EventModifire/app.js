var myApp = new Vue({
    el:"#app",
    data:{
        counter:0
    },
    methods:{
        Increment:function(){
            this.counter++;
        }
    }
})