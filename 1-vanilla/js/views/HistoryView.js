import View from './View.js'

const tag = '[HistoryView]'

const HistoryView = Object.create(View)

HistoryView.messages = {
  NO_KEYWORDS: '최근 검색어가 없습니다'
}

HistoryView.setup = function (el) {
  this.init(el)
  return this
}


HistoryView.render = function (data = []) {
    this.el.innerHTML = data.length ? this.getKeywordsHtml(data) : this.messages.NO_KEYWORDS
    this.show()
    return this
}
HistoryView.getKeywordsHtml = function (data){
   return data.reduce((html,item)=>{
       html +=`<li data-keyword="${item.keyword}">
       ${item.keyword}
       <span class="date">${item.date}</span>
       <button class="btn-remove"></button>
       </li>`
       return html
   },'<ul class="list">')+'</ul>'
}
HistoryView.bindRemoveBtn = function () {
    Array.from(this.el.querySelectorAll('button.btn-remove')).forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        this.onRemove(btn.parentElement.dataset.keyword)
      })
    })
  }
HistoryView.onRemove = function(keyword){
    this.emit('@remove',{keyword})
}
// HistoryView.onClickKeyword = function(e){
//     const{keyword} = e.currentTarget.dataset
//     this.emit('@click',{keyword})
// }
export default HistoryView