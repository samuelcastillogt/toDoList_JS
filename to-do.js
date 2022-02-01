const guardar = document.getElementById("guardar")
const cardCollection = document.getElementById("card-collection")
const input = document.getElementById("input")
const form = document.getElementById("form")
const crear = document.getElementById("crear")
const blure = document.getElementById("blur")
const tasks = []
input.addEventListener("input", ()=>{
    if(tasks.length >= 1){
    const filtro = tasks.filter(item=> item.includes(input.value))
    inyector(filtro)
    }else{
        
    }
    
})

crear.addEventListener("click", ()=>{
    form.classList.remove("hidden")
    blure.classList.add("blur")
    crear.classList.add("hidden")
})
const inyector =(tasks)=>{
        cardCollection.innerHTML=""    
        tasks.map(item=> {
            const card = document.createElement("li")
            card.textContent = item
            card.appendChild(addRemoveBtn())
            cardCollection.appendChild(card) 
        })
}
   
    //

function addRemoveBtn(){
    const removeBtn = document.createElement("button")
    removeBtn.textContent= `x`
    removeBtn.className= "btn btn-danger"
    removeBtn.addEventListener("click", (e)=>{
        const task = e.target.parentElement
        cardCollection.removeChild(task)
    })
    return removeBtn
}
const task = (title)=>{
    tasks.push(title)
    inyector(tasks)
}
const save = (e)=>{
    e.preventDefault()
    const title = document.getElementById("title").value
    task(title)
    form.reset()
    form.classList.add("hidden")
    blure.classList.remove("blur")
    crear.classList.remove("hidden")

}
guardar.addEventListener("click", save)
