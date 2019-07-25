<template>
    <div v-b-popover.hover.bottom="'點我放大'">
        <div class="images" v-viewer>
            <p>國立高雄海洋科技大學實驗動物房舍</p>
            <img class="adoption-img image" 
                src="../../assets/menu01/01-03-list.png"/>
            <p>海科大厚生樓平面1F</p>
            <img class="adoption-img image" 
                src="../../assets/menu01/01-03-1F.png"/>
            <p>海科大厚生樓平面5F</p>
            <img class="adoption-img image" 
                src="../../assets/menu01/01-03-5F.png"/>
            <p>海科大厚生樓平面7F</p>
            <img class="adoption-img image" 
                src="../../assets/menu01/01-03-7F.png"/>
            <!-- onclick="window.open(this.src)" -->
        </div>
    </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)

export default {
    
}
</script>

<style scoped>
.adoption-img {
    width: 100%;
}
</style>

