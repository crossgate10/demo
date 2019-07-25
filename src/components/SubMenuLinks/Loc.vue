<template>
    <div v-b-popover.hover.bottom="'點我放大'">
        <div class="images" v-viewer>
            <img class="loc-img image" 
                src="../../assets/menu01/01-02.png"/>
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
.loc-img {
    width: 100%;
}
</style>


