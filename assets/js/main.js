const itemDT = document.querySelectorAll('dt')
const itemDD = document.querySelectorAll('dd')

itemDT.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('active')
        vinculaDD()
    })
})

function vinculaDD(){
    itemDD.forEach((item)=>{
        item.classList.toggle('ativo')
    })
}