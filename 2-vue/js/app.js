import SearchModel from './models/SearchModel.js'

new Vue({
    el: '#app',
    data: {
        query:'',
        submitted:false,
        searchResult:[]
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
        search(){
            SearchModel.list().then(data=>{
                this.submitted=true
                this.searchResult=data
            })
        },
        onResetForm(){
            this.query=''
            //todo 검색 결과를 숨기는 .....
            this.submitted=false
            this.searchResult=[]
        }

    }
})