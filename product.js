const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
// fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//when we have the date, populate the page
function showProduct(product) {
  console.log(product);

  document.querySelector("h3").textContent = `${product.brandname}`; //change brand name
  document.querySelector("p").textContent = `${product.productdisplayname}`; // change product name
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${id}.webp`;
  document.querySelector("img").alt = `${product.productdisplayname}`;

  if (product.discount) {
    document.querySelector("section").classList.add("smallProduct-sale");
  }
  if (product.soldout) {
    document.querySelector("section").classList.add("smallProduct-soldout");
  }

  document.querySelector("h4").textContent = (
    `${product.price}` -
    `${product.price}` * (`${product.discount}` / 100)
  ).toFixed(2);
}

//
//
//
//others
// Button increase and decrease
function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
}
