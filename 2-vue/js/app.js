new Vue({
    el: '#app',
    data: {
        query:''
    },
    methods: {
        onSubmit(e){

        },
        onKeyup(){
            if(!this.query.length) this.onReset()
        },
        onReset(){
            this.query=''
            //todo 검색 결과를 숨기는 .....
            debugger
        }
    }
})