// fetch the content
fetch("https://kea-alt-del.dk/t7/api/seasons")
  .then((res) => res.json())
  .then(goThroughEach);

// forEach
function goThroughEach(data) {
  //console.log(data);
  data.forEach(showSeason);
}
// function receives all the season in one time
function showSeason(oneSeason) {
  console.log(oneSeason);
  //grab the template
  const template = document.querySelector("template").content;
  //clone it
  const myCopy = template.cloneNode(true);
  //change content
  //<li><a href="productlist.html">Season</a></li> -> to manipulate
  myCopy.querySelector("a").textContent = `${oneSeason.season}`;
  myCopy.querySelector(
    "a"
  ).href = `productlist.html?season=${oneSeason.season}`;

  //find the parent
  const parent = document.querySelector("ol");
  //append it
  parent.appendChild(myCopy);
}
