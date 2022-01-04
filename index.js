let searchBtn = document.getElementById('searchBtn');

var input=document.getElementById('input');
input.addEventListener("keyup", (event)=> {
    if (1) {
        console.log(input)
     event.preventDefault();
     console.log("enter pressed")
     searchBtn.click();
    }
  });
searchBtn.addEventListener('click', fetchingData)


async function fetchingData() {
    try{

    var temp = document.getElementById('tempDisplay');
    var place = document.getElementById("place");
    var searchInput = document.getElementById("input").value;
    let url = 'https://api.openweathermap.org/data/2.5/weather?zip=' + searchInput + ',in&appid=1c5e405dd0f2e06efc355a567523d685';
    const fetchedData = await fetch(url)
    const data = await fetchedData.json();
    console.log(data);
    temp.innerText = `${Math.floor(data.main.temp - 273)}c`;
    place.innerText= data.name;
    document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    }
    catch{
        place.innerText = "Invalid Zipcode";
        temp.innerText= "404"
        
    }
}