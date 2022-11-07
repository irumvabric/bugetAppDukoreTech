const btnSubmit = document.getElementById('btnSubmit')
const type = document.getElementById('type')
const description = document.getElementById('description')
const amount = document.getElementById('amount')

let dataLists = []
btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();
     addElement()
     updateUI()
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

function updateUI() {

    const incomes = dataLists.filter(e => e.type == "+")
    const expenses = dataLists.filter(e => e.type == "-")
    displayData("incomes_lists", incomes)
    displayData("expenses_lists", expenses)
}

function displayData(node_id, dataLists) {

    const element_id = document.getElementById(node_id);
    let listElement = ""

    for(let i = 0; i < dataLists.length; i++){
        listElement += `
        <div class="element_list">
                <span>${dataLists[i].description}</span>
                 <span>${dataLists[i].amount}</span>
        </div>
        `
    }
    element_id.innerHTML = listElement
}