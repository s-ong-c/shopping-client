import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'
new Vue({
    el: '#app',
    data: {
        query:'',
        submitted:false,
        tabs:['추천 검색어','최근 검색어'],
        //selectedTab:'추천 검색어',
        selectedTab:'',
        keywords:[],
        history:[],
        searchResult:[]
    },
    created(){
        this.selectedTab = this.tabs[0]
        this.fetchKeyword()
        this.fetchHistory()
    },
    methods: {
        onSubmit(e){
            this.search()
        },
        onKeyup(e){
            if(!this.query.length) this.onResetForm()
        },
        onReset(e){
            this.onResetForm()
        },
        onClickTab(tab){
            this.selectedTab =tab
        },
        onClickKeyword(keyword){
            this.query = keyword 
            this.search()
        },
        onClickRemoveHistory(keyword){
            HistoryModel.remove(keyword)
            this.fetchHistory()
        },
        fetchKeyword(){
            KeywordModel.list().then(data=>{
                this.keywords =data
            })
        },
        fetchHistory(){
            HistoryModel.list().then(data=>{
                this.history=data
            })
        },
        search(){
            SearchModel.list().then(data=>{
                this.submitted=true
                this.searchResult=data
            })
            HistoryModel.add(this.query)
            this.fetchHistory()
        },
        onResetForm(){
            this.query=''
            //todo 검색 결과를 숨기는 .....
            this.submitted=false
            this.searchResult=[]
        }

    }
})