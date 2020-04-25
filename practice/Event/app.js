var myApp= new Vue({
    el:"#app",
    data:{
        counter:0
    },
    methods:{
        increment:function(inc){
           this.counter +=inc;
        },
        drecrement:function(de){
            this.counter -=de;
        }
    }
})

