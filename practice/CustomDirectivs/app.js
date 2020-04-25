Vue.directive('demo',{
    bind:function(el,binding,vnode){
        /*
      el.style.padding='8px'
      el.style.backgroundColor='red'
      el.style.border='none'
      */
      console.log(el)//dom element
      console.log(binding)//custom directivee
      console.log(binding.value)
      console.log(binding.arg)
      console.log(binding.expression)
      console.log(binding.rawName)
    },
    update:function(){

    },
    unbined: function(){

    }
})

var myapp= new Vue({
    el:"#app",
    data:{
        message:"i am running for vue directives"
    },
    methods:{

    }
})