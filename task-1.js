let payments = [{ "1": "12lv" }, { "2": "16lv" }];
function pushToArray() {
  let newPayment = document.getElementById("newPayment").value;
  let idx = (payments.length + 1).toString();
  let payment = { idx: newPayment };
  payments.push(payment);
  console.log(payments);
}
function unshiftToArray() {
  let newPayment = document.getElementById("newPayment").value;
  names.unshift(newPayment);
  console.log(names);
}
function deleteElement() {
  let randomNum = Math.floor(Math.random() * names.length - 1);
  names.splice(randomNum, 1);
  console.log(names);
}
