let url = "http://universities.hipolabs.com/search?name=";
let btnCnty = document.querySelector("#country");
let btnStat = document.querySelector("#state");
let ul = document.querySelector("#result");
let input = document.querySelector("input");

btnCnty.addEventListener("click", async () => {
  ul.innerHTML = "";
  let countryName = input.value;
  let colgList = await collegeData(countryName);
  for (colg of colgList) {
    if (colg.country === countryName) {
      let li = document.createElement("li");
      li.innerText = colg.name;
      ul.appendChild(li);
    }

    console.log(colg);
  }
});

btnStat.addEventListener("click", async () => {
  ul.innerHTML = "";
  let colgList = await collegeData("India");
  let stateName = input.value;
  for (colg of colgList) {
    if (colg["state-province"] === stateName) {
      let li = document.createElement("li");
      li.innerText = colg.name;
      ul.appendChild(li);
    }
  }
});

async function collegeData(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
