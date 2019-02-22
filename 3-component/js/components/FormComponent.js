export default{
    template: '#search-form',
    props:['value'],
    data(){
        return {
            inputValue:''
        }
    },
    methods:{
        onSubmit(){
            this.$emit('@submit',this.inputValue.trim())
        },
        onKeyup(){
            if (!this.inputValue.length) this.onReset()
        },
        onReset(){
            this.inputValue = ''
            this.$emit('@reset')
        }
    }
}