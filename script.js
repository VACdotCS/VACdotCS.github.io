function containsOnlyNumbers(str) {
  return /^-?\d+$/.test(str);
}

const list_of_products = {
  "T-shirt" : 1000,
  "Shoes" : 3200,
  "Boots" : 4000,
}

let calculator_tag = window.document.getElementById('calculator');
let SelectTag = window.document.createElement('select');
SelectTag.id = "SelectTag";
SelectTag.classList.add("form-select")

for (var key in list_of_products) {
  let opt = document.createElement('option');
  opt.value = key;
  opt.innerHTML = key;
  SelectTag.appendChild(opt);
}

let count_tag = window.document.createElement('input');
count_tag.type = "text";
count_tag.step = '1';
count_tag.min = 0;
count_tag.value = 0;
count_tag.id = "input_shop";
count_tag.classList.add('input-group')

let summary;

let btn = window.document.createElement('button');
btn.innerHTML = "Calculate";
btn.id = "btn";
btn.classList.add('btn');
btn.classList.add('btn-primary')

let summary_tag = window.document.createElement('span');
summary_tag.id = 'Summary'
summary_tag.innerHTML = 0;

calculator_tag.appendChild(SelectTag);
calculator_tag.appendChild(count_tag);
calculator_tag.appendChild(btn);
calculator_tag.appendChild(summary_tag);

window.document.getElementById('btn').addEventListener("click", () => {
  var el = window.document.getElementById("SelectTag");
  var value = el.options[el.selectedIndex].value;
  if (!containsOnlyNumbers(window.document.getElementById('input_shop').value)) {
    alert("Поле количества должно содержать целое положительное число");
  } else {
    summary = list_of_products[value] * window.document.getElementById('input_shop').value;
    window.document.getElementById('Summary').innerHTML = summary;
  }
  
})