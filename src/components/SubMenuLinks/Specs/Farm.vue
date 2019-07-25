<template>
    <div class="farm-div">
        <div>相關文件統整</div>
        <div class="farm-grid-row">
            <div class="farm-grid-item"><p>國立高雄海洋科技大學水產養殖系–水產養殖場–動物飼養管理基準作業程序相關文件</p></div>
            <div class="farm-grid-item"><a href="./menu05/03/4/國立高雄海洋科技大學水產養殖系–水產養殖場–動物飼養管理基準作業程序相關文件.pdf" target="_blank">下載</a></div>
        </div>
        <br/>
        <div>個別文件</div>
        <div class="farm-grid-row"
            v-for="pdf in pdfs" 
            :key="pdf.name">
            <div class="farm-grid-item"><p>{{pdf.name}}</p></div>
            <div class="farm-grid-item"><a v-bind:href="pdf.url" target="_blank">下載</a></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pdfs: [
                {
                    name: "4-1 水產繁養殖研究室–標準作業程序項目清單",
                    url: "./menu05/03/4/4-1 水產繁養殖研究室–標準作業程序項目清單.pdf"
                },
                {
                    name: "4-2 水產繁養殖研究室–內外場工作項目表",
                    url: "./menu05/03/4/4-2 水產繁養殖研究室–內外場工作項目表.pdf"
                },
                {
                    name: "4-3 水產繁養殖研究室–水質參數監控記錄表",
                    url: "./menu05/03/4/4-3 水產繁養殖研究室–水質參數監控記錄表.pdf"
                },
                {
                    name: "4-4 水產繁養殖研究室–飼料投餵記錄表",
                    url: "./menu05/03/4/4-4 水產繁養殖研究室–飼料投餵記錄表.pdf"
                },
                {
                    name: "4-5 水產繁養殖研究室–室內系統監測記錄-5噸(A池)",
                    url: "./menu05/03/4/4-5 水產繁養殖研究室–室內系統監測記錄-5噸(A池).pdf"
                },
                {
                    name: "4-6 水產繁養殖研究室–室內系統監測記錄-5噸(B池)",
                    url: "./menu05/03/4/4-6 水產繁養殖研究室–室內系統監測記錄-5噸(B池).pdf"
                },{
                    name: "4-7 水產繁養殖研究室–室內系統監測記錄-20噸",
                    url: "./menu05/03/4/4-7 水產繁養殖研究室–室內系統監測記錄-20噸.pdf"
                },
                {
                    name: "4-8 水產繁養殖研究室–室外系統監測記錄",
                    url: "./menu05/03/4/4-8 水產繁養殖研究室–室外系統監測記錄.pdf"
                },
                {
                    name: "4-9 水產繁養殖研究室–水質檢測與菌體使用記錄",
                    url: "./menu05/03/4/4-9 水產繁養殖研究室–水質檢測與菌體使用記錄.pdf"
                },{
                    name: "4-10 水產繁養殖研究室–魚苗培育系統",
                    url: "./menu05/03/4/4-10 水產繁養殖研究室–魚苗培育系統.pdf"
                },
                {
                    name: "4-11 水產繁養殖研究室–循環水養殖系統",
                    url: "./menu05/03/4/4-11 水產繁養殖研究室–循環水養殖系統.pdf"
                },
                {
                    name: "4-12 水產繁養殖研究室–套裝式維生系統",
                    url: "./menu05/03/4/4-12 水產繁養殖研究室–套裝式維生系統.pdf"
                }
            ]
        }
    }
}
</script>

<style scoped>
.farm-div {
    margin-top: 5%; 
}
.farm-grid-row {
    display: grid;
    grid-template-columns: 4fr 1fr;
    border: 3px solid lightgray;
    grid-gap: 2px;
}
.farm-grid-row > .farm-grid-item:first-child {
    justify-content: left;
    text-align: left;
}
.farm-grid-item {
    border: 1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
}
.farm-grid-item p {
    margin: 5px;
}
</style>

