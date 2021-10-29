var socket = io();
document.getElementById("send").addEventListener("click",()=>{
  let text= document.getElementById('message').value;

  socket.emit("message",text);
})

