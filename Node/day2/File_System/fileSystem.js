import fs from 'fs'

//create file:

fs.writeFile('Demo.txt','',(err)=>{
if (err) {
    console.log("failed")

return
}
console.log("file created successfully")
})

//read file:

fs.readFile('Demo.txt','utf-8',(err,data)=>{
    if(err){
        console.log("read file occurs err");
        return
    }
    console.log(data);
})

//update file:

fs.appendFile('Demo.txt','This is a update phase',(err,data)=>{
if(err){
    console.log("err occurs during updation");
    return
}
console.log("file updated successully");
})

//delete file:

fs.unlink('Demo.txt',(err,data)=>{
if(err){
    console.log("err occurs during deleting");
    return
}
console.log("file deleted successully");
})

