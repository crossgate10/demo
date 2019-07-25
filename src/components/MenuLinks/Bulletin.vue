<template>
    <div>
        <div
          v-for="(b, idx) in this.$store.state.bulletins" 
          v-bind:key="idx">
          <!-- <iframe v-bind:id="mdNames[idx]" v-bind:src="domain+'/bulletins/'+b" style="display:none;"></iframe> -->
          <div v-bind:id="mdNames[idx]" v-bind:src="domain+'/docs/bulletins/'+b" style="display:none;"></div>
        </div>
      
        <b-container class="bulletinRow">
          <b-row>
            <b-col cols="3">公佈日期</b-col>
            <b-col cols="6">公佈標題</b-col>
            <b-col>附件</b-col>
          </b-row>
          <b-row 
            v-for="c in this.orderedContents"   
            v-bind:key="c.data.title">
            <b-col cols="3" class="bulletinRowDate"><vue-markdown>{{(c.data.date.getFullYear()+'-'+(c.data.date.getMonth().toString().length === 1 ? '0'+c.data.date.getMonth() : c.data.date.getMonth()) +'-'+c.data.date.getDate())}}</vue-markdown></b-col>
            <b-col cols="6" class="bulletinRowContent"><vue-markdown>{{c.content}}</vue-markdown></b-col>
            <b-col class="bulletinRowAttach">attach</b-col>
          </b-row>
        </b-container>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import * as matter from 'gray-matter'
import _ from 'lodash';
import axios from 'axios'

export default {
    data() {
        return {
            // domain: ".",
            domain: "https://raw.githubusercontent.com/crossgate10/demo/master",

            mdNames: [],
            contents: [],
        }
    },
    components: {
        VueMarkdown
    },
    created () {
        this.$store.state.bulletins.forEach(e => {
            this.mdNames.push(e.replace('.md', ''));
        });
    },
    mounted () {
        this.mdNames.forEach((e) => {
            var element = document.getElementById(e);
            // element.onload = () => {
            //     this.contents.push(matter(element.contentWindow.document.body.innerText));
            // }

            var src = element.getAttribute('src')
            axios
            .get(src)
            .then((resp) => {
                this.contents.push(matter(resp.data));
            })
        });
    },
    computed: {
        orderedContents: function() {
            return _.orderBy(this.contents, 'data.date');
        }
    }
}
</script>

<style scoped>
.bulletinRow {
    padding-top: 20px;
    border: 1px solid lightgrey;
}
.bulletinRowDate {
    background-color: #fff;
    border-radius: 3px;
    font-size: 14px;
    padding: 0 !important;
    border: 1px solid lightgrey;
}
.bulletinRowContent {
    background-color: #fff;
    border-radius: 3px;
    font-size: 14px;
    word-break: break-all;
    border: 1px solid lightgrey;
}
.bulletinRowAttach {
    background-color: #fff;
    border-radius: 3px;
    font-size: 14px;
    border: 1px solid lightgrey;
}
</style>


