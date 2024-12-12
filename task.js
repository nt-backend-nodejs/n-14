const boxElement = document.querySelector(".box");
const getPhotosBtn = document.querySelector(".get_photos");

const uri = "https://jsonplaceholder.typicode.com/photos";
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

getPhotosBtn.addEventListener("click", async () => {
  const photos = await getData(uri);

  for (const photo of photos) {
    const divElement = document.createElement("div");

    const h1Element = document.createElement("h1");
    h1Element.textContent = photo.id;

    const h2Element = document.createElement("h2");
    h2Element.textContent = photo.title;

    const imgElement = document.createElement("img");
    imgElement.src = photo.url;
    divElement.appendChild(h1Element);
    divElement.appendChild(h2Element);
    divElement.appendChild(imgElement);
    boxElement.appendChild(divElement);
  }
});
