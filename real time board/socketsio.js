console.log("test15");
const io = require( "socket.io" )();
const socketapi = {
    io: io
};


var nsp = io.of('/admin');

// Add your socket.io logic here!
nsp.on( "connection", function( socket ) {
    console.log( "A user connected" );


    socket.on("message",(msg)=>{
        console.log(msg);
        io.emit("broadcast",msg)
    })

    socket.on("disconnect",()=>{
        console.log( "A user disconnect" );
    })

});
// end of socket.io logic

module.exports = socketapi;