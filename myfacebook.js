var information = [
    {
    username: "MJ",   
    password: "damos123"
    },

    {
      username: "Samaad",   
      password: "samaad123"
    },
    {
      username: "Maryam",   
      password: "maryam123"
    },

    {
      username: "Rasheed",   
      password: "rasheed123"
    },
    {
      username: "Olaniyi",   
      password: "ola123"
    },
    {
      username: "Martins",   
      password: "martins123"
    },
    {
      username: "Gabbie",   
      password: "gabbie123"
    },
    {
      username: "Daniel",   
      password: "dan123"
    },
    {
      username: "Oluniyi",   
      password: "olu123"
    },
    {
      username: "Ebenezer",   
      password: "eben123"
    }
]
let newsalert = [
  {
    username: "MJ",
    timeline: "Hello there! We're glad to have you on this platform"
  },
  {
    username: "Samaad",
    timeline: "Hello there! We're glad to have you on this platform"
  },
  {
    username: "Maryam",
    timeline: "Hello there! We're glad to have you on this platform"
  },
  {
    username: "Rasheed",
    timeline: "Hello there! We're glad to have you on this platform"
  },
  {
    username: "Olaniyi",
    timeline: "Hello there! We're glad to have you on this platform"
  },
  {
    username: "Martins",
    timeline: "Hello there! We're glad to have you on this platform"
  },
  {
    username: "Gabbie",
    timeline: "Hello there! We're glad to have you on this platform"
  },
  {
    username: "Daniel",
    timeline: "Hello there! We're glad to have you on this platform"
  },
  {
    username: "Oluniyi",
    timeline: "Hello there! We're glad to have you on this platform"
  },
  {
    username: "Ebenezer",
    timeline: "Hello there! We're glad to have you on this platform"
  },

]

let firstInput = document.getElementById('input1')
let secondInput = document.getElementById('input2')
let firstButton = document.getElementById('but')
let secondButton = document.querySelector('butt')
  
// let answer = ''
function checkIn(){
    for(var x = 0; x <information.length; x++){
    if(information[x].username===firstInput.value && information[x].password===secondInput.value){
      return true;
    }
  }
  return false;
} 

function logIn(event){
    if(checkIn()){
    window.open('fbnext.html')}

    else{alert('An error occured:User not valid, please check again');window.open('myfacebook.html')}
    
  }
firstButton.addEventListener('click', logIn)


// ------------------------------------------------------------------------------
// classwork
// 1
function q1(){
  var a = 5;
  if (a > 1){
    a = 3
  }
  alert(a);
}
// 2
var a = 0
function q2(){
  a = 5;
}

function q22(){
  alert(a)
}
// 3
function q3(){
  window.a = "hello";
}

function q32(){
  alert(a);
}
// 4
var a = 1;
function q4(){
  var a = "test";
  alert(a);
}
// 5
var a = 2;
if (true){
  var a = 5;
  alert(a);
}
alert(a);