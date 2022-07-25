let Post = document.getElementById('mssg')
let message = document.getElementById('content')
var ul = document.getElementById("ul")

function textArea(){
  var list = document.createElement("li")
  //TO CHECK IF IT IS NOT EMPTY TO PERFORM THE FOLLOWING OPERATION
  if(message.value !== ''){
  list.appendChild(document.createTextNode(message.value))    
  ul.appendChild(list)
  message.value =''
  }     
}
Post.addEventListener('click', textArea)