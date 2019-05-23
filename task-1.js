let payments = [{
	id: 1,
	type: 'profit',
	description: 'Some stuff',
	amount: 95,
	date: new Date()
},{
	id: 2,
	type: 'cost',
	description: 'Some stuff',
	amount: 15,
	date: new Date()
},{
	id: 3,
	type: 'cost',
	description: 'Some stuff',
	amount: 13,
	date: new Date()
},{
	id: 4,
	type: 'profit',
	description: 'Some stuff',
	amount: 28,
	date: new Date()
},{
	id: 5,
	type: 'cost',
	description: 'Some stuff',
	amount: 37,
	date: new Date()
},{
	id: 6,
	type: 'profit',
	description: 'Some stuff',
	amount: 42,
	date: new Date()
}];

function createNewPayment(){
  let amount = document.getElementById("amount").value;
  let description = document.getElementById("description").value;
  let type = document.getElementById("type").value || null;
  
  
  let idx = Math.max.apply(Math, payments.map(function(obj) { return obj.id; })) + 1
  
  let newPayment = {id: idx, type: type, description: description, amount: amount, date: new Date() }
  return newPayment
}


function pushToArray() {
  payments.push(  createNewPayment());
  console.log(payments)
}

function unshiftToArray() {
  payments.unshift(  createNewPayment());
  console.log(payments)
}

function deleteElement() {
  let randomNum = Math.floor(Math.random() * payments.length - 1);
  payments.splice(randomNum, 1);
  console.log(payments);
}

function getLastElement(){
  let last = payments.pop()
  console.log(last)
}
function calcProfit(){
  let profitSum = 0;
  let profitSum = payments.reduce(function (accumulator, currentValue) {
    if(currentValue.type === 'profit'){
      return accumulator + currentValue.amount;
    }
      return accumulator 
  },profitSum)

  console.log(profitSum)
}