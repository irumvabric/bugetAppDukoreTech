const btnSubmit = document.getElementById('btnSubmit')
const type = document.getElementById('type')
const description = document.getElementById('description')
const amount = document.getElementById('amount')
const MONTHNAME = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December", 
]
headerBuget()
let dataLists = []
btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();
     addElement()
     updateUI()
     console.log(dataLists)
    
})

function addElement() {
    const element = {
        id: dataLists.length,
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

function headerBuget() {
    const currentDate = new Date();
    document.getElementById("headerBuget").innerHTML = "Buget available in " 
    + MONTHNAME[currentDate.getMonth()] +" "+ currentDate.getFullYear() + ""
}

function updateUI() {
    const incomes = dataLists.filter(e => e.type == "+")
    const expenses = dataLists.filter(e => e.type == "-")
    const totalIncomes = incomes.reduce((total, e) =>total + e.amount *1, 0)
    const totalExpenses = expenses.reduce((total, e) =>total + e.amount *1, 0)
    
    document.getElementById("budgetTotal").innerHTML = (totalIncomes - totalExpenses)
    document.getElementById("incomesBuget").innerHTML = (totalIncomes )
    document.getElementById("expensesBuget").innerHTML = (totalExpenses )
    document.getElementById("pourcentData").innerHTML = (totalExpenses *100 /(totalIncomes) )
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
                 <span id="color">${dataLists[i].amount}</span>
                 <span onclick="removeElement(${dataLists[i].id})">X</span>
        </div>
        `
    }
    element_id.innerHTML = listElement
}

function removeElement(element_id) {
    dataLists = dataLists.filter(l => l.id != element_id)
    updateUI()
}