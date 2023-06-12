const http =require('http') 
const fs = require('fs')

const server = http.createServer((req,res)=>{
// 𝕮𝖔𝖉𝖊..........

  //badway........ 
 /* const file = fs.readFileSync('sample.txt')
  return res.end(file)*/
  
//𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕𝕚𝕟𝕘 𝕗𝕚𝕝𝕖 𝕚𝕟 𝕘𝕠𝕠𝕕 𝕨𝕒𝕪 𝕦𝕤𝕚𝕟𝕘 𝕤𝕥𝕣𝕖𝕒𝕞

 /* const readableStream = fs.createReadStream('sample.txt')
  readableStream.pipe(res) */


// 𝖈𝖔𝖕𝖞 𝖋𝖎𝖑𝖊 𝖚𝖘𝖎𝖓𝖌 𝖇𝖆𝖉 𝖜𝖆𝖞

/*const file = fs.readFileSync('sample.txt')
  fs.writeFileSync('output.txt', file)
  res.end() */


// 𝓬𝓸𝓹𝔂 𝓯𝓲𝓵𝓮 𝓾𝓼𝓲𝓷𝓰 𝓖𝓸𝓸𝓭 𝔀𝓪𝔂
 
/*  const readStream =  fs.createReadStream('sample.txt');

const writeStream = fs.createWriteStream('output.txt')
     
readStream.on('data', (chunk)=>{
    writeStream.write(chunk);
})
res.end() */


// 𝕤𝕥𝕣𝕒𝕞𝕖 𝕡𝕣𝕠𝕔𝕣𝕖𝕤𝕤
const sampleFileStream = fs.createReadStream('sample.txt')
const outputWritableStream = fs.createWriteStream('output.txt')

sampleFileStream.on('data', (chunk)=>{
      console.log(chunk.toString());
  //process 
  const uppercaseString = chunk.toString().toUpperCase()
    const finalString = uppercaseString.replaceAll(/ipsum/gi, 'Arnab');
  // writable stream write
  outputWritableStream.write(finalString)


  res.end()
})

})








const port = 3006
server.listen(port, ()=>{
    console.log(`app listning on ${port}`);
})