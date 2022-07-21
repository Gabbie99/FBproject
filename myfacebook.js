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

  
function checkIn(username, password){
    for(var x = 0; x<=information.length; x++){
    if(information[x].username===username && information[x].password===password){
      return true;
    }
  }
  return false;
} 
function logIn(username, password){
  if(checkIn(username, password)){
    alert(newsalert)
  }
  else{
    alert("Sorry, wrong username and password. Check again.")
  }
}

// var promptUsername = document.querySelector('input1')
// var promptPassword = prompt("Pls enter your password");
    
// logIn(promptUsername, promptPassword);