<template>
    <div v-b-popover.hover.bottom="'點我放大'">
        <div class="images" v-viewer>
            <p>實驗動物照護及使用委員會標準作業程序 107.12</p>
            <img class="review-flow-img image" 
                src="../../assets/menu02/02-03.png"/>
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
.review-flow-img {
    width: 100%;
}
</style>


