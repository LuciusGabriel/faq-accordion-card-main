const itemDT = document.querySelectorAll('dt')
const itemDD = document.querySelectorAll('dd')

itemDT.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('active')
        vinculaDD(index)
    })
})

function vinculaDD(index){
    itemDD.forEach((item)=>{
        item.classList.toggle('ativo')
    })
}