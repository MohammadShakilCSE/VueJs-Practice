var myapp = new Vue({
el:"#app-1",
data:{
    name:"Mohammad Shakil"

},
methods:{
    firstApp:function(){
        return "this is first function"
    }
},
computed:{
    fullname:function(){
       return this.name;
    }
}
})

var myapp2=new Vue({
el:"#app-2",
data:{
    name:myapp.name,
    university:"southeast university"
},
methods:{
    secondApp:function(){
        return "this is second function";
    },
    thirdApp: function(){
        return myapp.firstApp();
    },
    Access:function(){
        return myapp.fullname;
    }
}
})