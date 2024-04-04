let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let ul = document.querySelector("#result");
let input = document.querySelector("input");

btn.addEventListener("click", async () => {
    ul.innerHTML = "";
    let colgList = await collegeData();
    let countryName = input.value;
    for (colg of colgList) {
        if (colg.country === countryName) {
            let li = document.createElement("li");
            li.innerText = colg.name;
            ul.appendChild(li);
        }

        console.log(colg);
    }
});

async function collegeData() {
    try {
        let res = await axios.get(url+input.value);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
