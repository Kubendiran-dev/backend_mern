import path from "path"


// join => foldername\filename:

const foldername = "documents"

const filename = "demo.txt"

const storage = path.join(foldername,filename)

console.log(storage);


//absolute:

const dir = path.resolve(filename)

console.log(dir);

//extension:

const exn = path.extname(filename)

console.log(exn);

//basename:

const findname = path.basename(filename)

console.log(findname);
