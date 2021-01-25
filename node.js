let theme=document.getElementById('bg_change');
let bg=1;
theme.addEventListener('click',()=>{
if(bg===1){
  let b= document.querySelector('body');
  let d=document.getElementsByTagName('div');
  console.log(b);
  b.classList.add("dark");
  for(let i=0;i<d.length;i++){
    d[i].classList.add("dark");
  }
  let h= document.querySelectorAll('h3');
for(let i=0;i<h.length;i++){
  h[i].classList.add("dark");
}
  theme.innerHTML='<img src="https://img.icons8.com/ios-glyphs/30/000000/sun--v1.png"/>'
  bg=0;

}else{
  let b=document.querySelector('body');
b.classList.remove("dark");

let d=document.getElementsByTagName('div');
for(let i=0;i<d.length;i++){
  d[i].classList.remove("dark");
}
let h= document.getElementsByTagName('h3')
for(let i=0;i<h.length;i++){
  h[i].classList.remove("dark");
}
theme.innerHTML='<img  id= "img_bg" src="https://img.icons8.com/ios-filled/50/000000/bright-moon.png"/>'
bg=1;
}
})


//<img src="https://img.icons8.com/ios-glyphs/30/000000/sun--v1.png"/>


var Name = [];
var Email = [];
var Sub = [];
var Msg = [];

var n = 1;
var x = 0;


let btn = document.getElementById("submit");
console.log(btn);

btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('button working');
  var AddRown = document.getElementById('show');
  var NewRow = AddRown.insertRow(n);

  // Name[x] = document.getElementById("name").value;
  // Email[x] = document.getElementById("email").value;
  // Sub[x] = document.getElementById("Subject").value;
  // Msg[x] = document.getElementById("Message").value;

  // var cel1 = NewRow.insertCell(0);
  // var cel2 = NewRow.insertCell(1);
  // var cel3 = NewRow.insertCell(2);
  // var cel4 = NewRow.insertCell(3);

  // cel1.innerHTML = Name[x];
  // cel2.innerHTML = Email[x];
  // cel3.innerHTML = Sub[x];
  // cel4.innerHTML = Msg[x];

  // n++;
  // x++;

  //getting the input values
  let in1 = document.getElementById("name").value;
  let in2 = document.getElementById("email").value;
  let in3 = document.getElementById("Subject").value;
  let in4 = document.getElementById("Message").value;

  if (Name.includes(in1) && Email.includes(in2) && Sub.includes(in3) && Msg.includes(in4)) {
    alert("This data is already entered!");
  } else {
    //inserting into the array
    Name[x] = document.getElementById("name").value;
    Email[x] = document.getElementById("email").value;
    Sub[x] = document.getElementById("Subject").value;
    Msg[x] = document.getElementById("Message").value;


    // creation of rows in the table
    let row = document.createElement('tr');
    // row.setAttribute("id", "row"+n);
    // row.style.opacity="0.5";
    // row.style.transitionProperty="opacity";

    let nm = document.createElement('td');
    let em = document.createElement('td');
    let s = document.createElement('td');
    let m = document.createElement('td');

    // //inserting the the input values to col
    // nm.innerHTML += in1;
    // em.innerHTML += in2;
    // s.innerHTML += in3;
    // m.innerHTML += in4;

    //inserting the data into the row
    let body = document.querySelector('tbody');
    console.log(body);
    body.appendChild(row);
    row.appendChild(nm);
    row.appendChild(em);
    row.appendChild(s);
    row.appendChild(m);

    //inserting the the input values to col
    nm.innerHTML += in1;
    em.innerHTML += in2;
    s.innerHTML += in3;
    m.innerHTML += in4;

    row.classList.add("r", "faded-out")

    // and remove 'faded-out' in order to fade-in our element
    requestAnimationFrame(() => {
      row.classList.remove("faded-out")
    })

    // row.style.visibility="visible";
    // creation of rows in the table
    // let row = document.createElement('tr');
    // row.setAttribute("id", "row" + n);
    // let n = document.createElement('th');
    // let em = document.createElement('th');
    // let s = document.createElement('th');
    // let m = document.createElement('th');
  }
});