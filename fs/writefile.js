const fs  = require("node:fs")


fs.writeFile("example.txt", "KETAYLIK BIRODARLAR", "utf-8",(err)=>{
  if(err){
    console.error(err)
    return
  }

  console.log("Seccessfully!")
})