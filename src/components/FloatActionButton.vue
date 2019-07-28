<template>
    <div>
        <fab
        :position="position"
        :actions="fabActions"
        :bg-color="bgColor"
        :main-icon="mainIcon"
        :fixed-tooltip="true"
        :enable-rotation="false"
        @home="home"
        @place="place"
      ></fab>
    </div>
</template>

<script>
import fab from 'vue-fab'

export default {
    data() {
        return {
            mainIcon: 'expand_more',
            bgColor: '#42f489',
            position: 'top-right',
            fabActions: [
                {
                    name: 'home',
                    icon: 'home',
                    tooltip: '首頁',
                    color: '#42f489'
                },
                {
                    name: 'place',
                    icon: 'place',
                    tooltip: '交通資訊',
                    color: '#42f489'
                }
            ]
        }
    },
    components: {
        fab
    },
    mounted() {
        var openIcon = document.getElementsByClassName("main")[0];
        var closeIcon = document.getElementsByClassName("close")[0];

        openIcon.style.opacity = 1;
        closeIcon.style.opacity = 0;

        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if(mutationRecord.target.style.display == "none"){
                    openIcon.style.opacity = 1;
                    closeIcon.style.opacity = 0;
                }else{
                    openIcon.style.opacity = 0;
                    closeIcon.style.opacity = 1;
                }
            });    
        });
        var fablist = document.getElementsByClassName("fab-list");
        observer.observe(fablist[0], { attributes : true, attributeFilter : ['style'] });
    },
    methods:{
        home(){
            console.log("home")
        },
        place(){
            console.log("place")
        }
  }
}
</script>

<style>
/* .close:not(:disabled):not(.disabled):hover,
.close:not(:disabled):not(.disabled):focus {
  opacity: 0 !important;
} */
.close {
    transform: rotate(315deg);
}
</style>


