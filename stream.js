// custom streams 

const {Readable, Writable} = require('stream');
/*
const readableStream = new Readable({
    // highwatermark is a thereshhold is return true or false
    highWaterMark: 2,
    read() {}
});


// 𝕠𝕟 𝕦𝕤𝕖𝕕 𝕗𝕠𝕣 𝕝𝕚𝕤𝕥𝕟𝕖𝕣

readableStream.on('data', (chunk)=>{
    console.log('data Comming', chunk);

})

// 𝕡𝕦𝕤𝕙 𝕞𝕖𝕥𝕙𝕠𝕕 𝕗𝕠𝕣 𝕒𝕕𝕕𝕚𝕟𝕘 𝕥𝕙𝕖 𝕕𝕒𝕥𝕒

readableStream.push('Hellow from js.....')   */


const writeableStream = new Writable({
    write: function(){
        console.log(writeableStream);
    }
})

writeableStream.write('hellow')