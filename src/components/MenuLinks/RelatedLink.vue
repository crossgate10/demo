<template>
    <div>
        <div>國內網站</div>
        <div class="link-grid-row"
            v-for="link in domesticLinks" 
            :key="link.name">
            <div class="link-grid-item">{{link.name}}</div>
            <div class="link-grid-item"><a v-bind:href="link.url" target="_blank">前往</a></div>
        </div>
        <br/>
        
        <div>國外網站</div>
        <div class="link-grid-row"
            v-for="link in foreignLinks" 
            :key="link.name">
            <div class="link-grid-item">{{link.name}}</div>
            <div class="link-grid-item"><a v-bind:href="link.url" target="_blank">前往</a></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            domesticLinks: [
                {
                    name: "台大醫學院實驗動物中心",
                    url: "http://ntucmlac.cloud.ntu.edu.tw/Default.aspx"
                },
                {
                    name: "國防醫學院動物中心",
                    url: "https://www.ndmctsgh.edu.tw/news/u_news_v1.asp?id={BB59B537-154D-4D0D-AD25-B817EA69AD9B}"
                },
                {
                    name: "成大醫學院動物中心",
                    url: "http://www.ncku.edu.tw/~animal/index.html"
                },
                {
                    name: "陽明大學實驗動物中心",
                    url: "https://ymlac.ym.edu.tw//bin/home.php"
                },
                {
                    name: "屏東科技大學實驗動物中心",
                    url: "http://lac.npust.edu.tw/bin/home.php"
                },
                {
                    name: "國家實驗動物中心",
                    url: "http://www.nlac.org.tw/"
                },
                {
                    name: "國家衛生研究院實驗動物中心",
                    url: "http://lac.nhri.org.tw/"
                },
                {
                    name: "行政院農業委員會",
                    url: "https://www.coa.gov.tw/"
                },
                {
                    name: "動物保護資訊網",
                    url: "http://animal.coa.gov.tw/html/"
                },
                {
                    name: "樂斯科生物科技股份有限公司",
                    url: "http://www.biolasco.com.tw/index.php/tw/"
                }
            ],
            foreignLinks: [
                {
                    name: "美國實驗動物學會(AALAS)",
                    url: "https://www.aalas.org/"
                },
                {
                    name: "傑克森實驗室(The Jackson Laboratory)",
                    url: "https://www.jax.org/"
                },
                {
                    name: "動物疾病模式相關網站",
                    url: "http://www.animalresearch.info/en/medical-advances/"
                },
                {
                    name: "CRL查理斯河實驗室(Charles River Laboratories)",
                    url: "http://www.criver.com/"
                }
            ]
        }
    }
}
</script>

<style scoped>
.link-grid-row {
    display: grid;
    grid-template-columns: 4fr 1fr;
    border: 3px solid lightgray;
    grid-gap: 2px;
}
.link-grid-row > .link-grid-item:first-child {
    justify-content: left;
    text-align: left;
}
.link-grid-item {
    border: 1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
}
</style>