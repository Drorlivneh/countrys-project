
let data =[];
function getData() {
    const response = fetch("https://restcountries.com/v2/all")
    .then((response) => {
        return response.json();
    })
    .catch((err) => console.log(err));
    return response;
}

const test = async () => {
    data = await getData();
    // console.log(data);

// import data from "./practice.json" assert{type: "json"};


for (let i=0;i<data.length;i++){
    let child = data[i];

    let galleryContainer = document.getElementById('gallery-container');

    let countryCard = document.createElement('div');
    countryCard.id = ('country-card');

    let flagDiv = document.createElement('img');
    flagDiv.className = ('flag-div');
    flagDiv.src = child.flags.svg;

    let detailsDiv = document.createElement('div');
    detailsDiv.id = ('detail-div');

    let specsTitleDiv = document.createElement('div');
    specsTitleDiv.id = ('specs-title-div');
    specsTitleDiv.innerHTML = (child.name);

    let specslistDiv = document.createElement('div');
    specslistDiv.id = ('specs-list-div');
    // specslistDiv.innerHTML = (child.name);

    
    let populationDiv = document.createElement('div');
    populationDiv.id = ('specs-div');
    const n = child.population;
    const numberFormatter = Intl.NumberFormat('en-US');
    const formatted = numberFormatter.format(n);
    populationDiv.innerHTML = `population:${formatted}`;
    
    let regionDiv = document.createElement('div');
    regionDiv.id = ('specs-div');
    regionDiv.innerHTML = `region:${child.region}`;
    let capitalDiv = document.createElement('div');
    capitalDiv.id = ('specs-div');
    capitalDiv.innerHTML = `capital:${child.capital}`;


    galleryContainer.appendChild(countryCard);
    countryCard.appendChild(flagDiv);
    countryCard.appendChild(detailsDiv);
    detailsDiv.appendChild(specsTitleDiv);

    detailsDiv.appendChild(specslistDiv);
    specslistDiv.appendChild(populationDiv);
    specslistDiv.appendChild(regionDiv);
    specslistDiv.appendChild(capitalDiv);
}

let oneLetter =  document.getElementById('search-input').value;


let formSubmit = document.getElementById('form');
    formSubmit.addEventListener("submit",function(e){
        e.preventDefault();
        console.log('in');
        document.getElementById('gallery-container').style.display = 'none';
        let chosenCountry = document.getElementById('search-input').value;
        for(let i = 0; i<data.length;i++){
            if (chosenCountry===data[i].name){
                console.log('match');
                {
                    let child = data[i];
        
                    let oneCountryContainer = document.getElementById('one-country-container');
                
                    let countryCard = document.createElement('div');
                    countryCard.id = ('country-card');
                
                    let flagDiv = document.createElement('img');
                    flagDiv.className = ('flag-div');
                    flagDiv.src = child.flags.svg;
                
                    let detailsDiv = document.createElement('div');
                    detailsDiv.id = ('detail-div');
                
                    let specsTitleDiv = document.createElement('div');
                    specsTitleDiv.id = ('specs-title-div');
                    specsTitleDiv.innerHTML = (child.name);
                
                    let specslistDiv = document.createElement('div');
                    specslistDiv.id = ('specs-list-div');
                    // specslistDiv.innerHTML = (child.name);
                
                    
                    let populationDiv = document.createElement('div');
                    populationDiv.id = ('specs-div');
                    populationDiv.innerHTML = `population:${child.population}`;
                   
                    let regionDiv = document.createElement('div');
                    regionDiv.id = ('specs-div');
                    regionDiv.innerHTML = `region:${child.region}`;
                    let capitalDiv = document.createElement('div');
                    capitalDiv.id = ('specs-div');
                    capitalDiv.innerHTML = `capital:${child.capital}`;
                
                
                    oneCountryContainer.appendChild(countryCard);
                    countryCard.appendChild(flagDiv);
                    countryCard.appendChild(detailsDiv);
                    detailsDiv.appendChild(specsTitleDiv);
                
                    detailsDiv.appendChild(specslistDiv);
                    specslistDiv.appendChild(populationDiv);
                    specslistDiv.appendChild(regionDiv);
                    specslistDiv.appendChild(capitalDiv);
                    oneCountryContainer.style.display = 'block';
                }
                
            }
        }
    })
    
    
}










test()



















// console.log(data[0].flags.svg);
