const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");
console.log(season);

const url = `https://kea-alt-del.dk/t7/api/products?limit=200&season=${season}`;

//fetch the data
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

//create template in HTML

function showProduct(product) {
  console.log(product);

  //grab the template
  const template = document.querySelector("#smallProductTemplate").content;

  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector("a").href = `product.html?id=${product.id}`;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("h3").textContent = `${product.productdisplayname}`;
  copy.querySelector("h4").textContent = `${product.season}`;

  if (product.discount) {
    copy.querySelector("article").classList.add("smallProduct-sale");
  }
  if (product.soldout) {
    copy.querySelector("article").classList.add("smallProduct-soldout");
  }

  copy.querySelector(".price").textContent = (
    product.price -
    product.price * (product.discount / 100)
  ).toFixed(2);

  //grab parent
  const parent = document.querySelector("main");

  //append
  parent.appendChild(copy);
}
