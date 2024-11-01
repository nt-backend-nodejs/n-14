const person  = {
  name : "xamidullo",
  skills:{
    hard:["coding"],
    soft:["tilmoch"],
  },
  greet:function(){
    console.log(this.skills)
  }
}

// console.log("1, ", person.name)
// person.name = "Ali"
// person.age = 111
// console.log("2, ", person.name)
// console.log("3, ", person.age)
// delete person.age

// console.log(person.name)

// console.log(person["name"])


person.greet()