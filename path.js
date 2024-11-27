// const path  =require("path")
const path = require("node:path");

// node:path == path

// console.log("dirname: " + __dirname);
// console.log("filename: " + __filename);

const filePath = "/home/khamidullo/najot-talim/n-14-standard/path.js";
// console.log(`File nomi: ${path.basename(filePath)}`);

/*
File nomi: path.js
  nomi : path
  extention: .js
*/

// console.log(`Dir nomi: ${path.dirname(filePath)}`);
/**
 *
 * /home/khamidullo/najot-talim/n-14-standard/path.js
 *
 * dirname :  /home/khamidullo/najot-talim/n-14-standard
 * filename : /home/khamidullo/najot-talim/n-14-standard/path.js
 * basename : path.jsfilePath
 *
 */

// console.log(`Extention name: ${path.extname(filePath)}`)
// console.log(`Extention name: .${filePath.split(".")[1]}`)

// console.log(__dirname + "/core-module/index.js")
// console.log(path.join(__dirname, "core-module", "index.js"))

/** Resolve */

// const absolutePath = path.resolve("os.js")
// console.log(`Absolute path  ${absolutePath}`);

/**** parse *****/

// const parsed = path.parse(filePath)
// console.log(`Parsed path:` , parsed);
// console.log(`Format path :` , path.format(parsed));



/**** normalize *****/

// const deNormalpath = "/home/khamidullo/najot-talim/../"

// console.log(`Normal path : ${path.normalize(deNormalpath)}`)
