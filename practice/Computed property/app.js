var myapp=new Vue({
    el:"#app",
    data:{
        firstName:"",
        lastName:""
    },
    methods:{

    },
    computed:{
        getFullName:function(){
           return  this.firstName+" "+this.lastName;
        }
    }
});