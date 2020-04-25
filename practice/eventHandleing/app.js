var myapp = new Vue({
    el:"#app-2",
    data:{
        x:0,
        y:0
    },
    methods:{
        movefunction:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
        overfunction:function(){
            console.log("this is a mouse over function");
        },
        outfunction:function(){
            console.log("this is from mouse out");
        }
    }
}) 