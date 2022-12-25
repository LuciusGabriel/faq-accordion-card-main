const itemDT = document.querySelectorAll('dt')

function activeAccordion(){
    this.classList.toggle('active')  
    this.nextElementSibling.classList.toggle('ativo')
}

itemDT.forEach((item)=>{
    item.addEventListener('click', activeAccordion)
})