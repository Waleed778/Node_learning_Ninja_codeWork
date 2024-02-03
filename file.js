const fs = require('fs')


//reading files
/*fs.readFile('./docs/blog.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
//this does not block code
//eg
console.log('last line');*/

//writting file
/*fs.writeFile('./docs/blog.txt', 'hello, World', () => {
    console.log('file was written');
});

fs.writeFile('./docs/blog1.txt', 'hello, Beutifull', () => {
    console.log('file was written');
});*/


//directories
//TO Check file is exist?
/*if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
    if(err){
        console.log(err);
    }
    console.log('Folder Created');
})
} else {
    fs.rmdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}*/
/*fs.mkdir('./assets', (err) => {
    if(err){
        console.log(err);
    }
    console.log('Folder Created');
})*/

//delete files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('File deleted successfully');
    })
}