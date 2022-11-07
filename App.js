const btnSubmit = document.getElementById('btnSubmit')
const type = document.getElementById('type')
const description = document.getElementById('description')
const amount = document.getElementById('amount')

let dataLists = []
btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();
     addElement()

     console.log(dataLists)
    
})

function addElement() {
    const element = {
        type : type.value,
        description : description.value,
        amount : amount.value,
    }

     if(element.type != ""
      && element.description != "" 
      && element.amount !=""){
        dataLists.push(element)
     }else{  
     }
     resetInput()
}

function resetInput() {
    type.value = "";
    description.value = "";
    amount.value = "";

}