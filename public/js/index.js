var socket = io();
socket.on('connect',()=>{
  console.log('connected to server');
  socket.emit('createMessage',{
    from:'jen@gmail.com',
    text:'yup, that works'
  });
});
socket.on('disconnect',()=>{
  console.log('disconnected from server');
});

socket.on('newMessage',function(message){
  console.log('newMessage',message);
});
