const getUserElement = document.querySelector(".get_user");
const userListElement = document.querySelector(".user_list");

const URI = "https://jsonplaceholder.typicode.com/users";
async function getData(uri) {
  const response = await fetch(uri);
  if (!response.ok) {
    return {
      ok: false,
    };
  }
  const data = await response.json();
  return data;
}

getUserElement.addEventListener("click", async () => {
  const users = await getData(URI);
  users.forEach((user) => {
    const liElement = document.createElement("li");
    liElement.textContent = user.name;

    const deletebtn = document.createElement("button");
    deletebtn.textContent = " delete";
    deletebtn.setAttribute("class", "delete_user")
    deletebtn.setAttribute("onclick", "deleted()")
    liElement.appendChild(deletebtn);

    userListElement.appendChild(liElement);
  });
});




function deleted (){
  console.log(this);
    
}