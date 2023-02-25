const loadData=()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>displayCountries(data))
}
const displayCountries=countries=>{
   const divCountries=document.getElementById('div-container')
    console.log(countries);

    // for(country of countries)
    //     console.log(country)
    // }
    countries.forEach(country =>{
        console.log(country);
        const countryDiv=document.createElement('div');
        countryDiv.classList.add('country.name.common');

        countryDiv.innerHTML=`
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0]:'no capital'}</p>
        <button onclick="countryDetails('${country.cca2}')">details</button>

        `;
        divCountries.appendChild(countryDiv)
    })
}
const countryDetails=code=>{
    
    // https://restcountries.com/v3.1/all
const url=`https://restcountries.com/v3.1/alpha/${code}`;
console.log(url);
fetch(url)
.then(res=>res.json())
.then(data=>showCountry(data[0]));

}
const showCountry=country=>{
    console.log(country)
    const detailContainer=document.getElementById('section-detail');
    detailContainer.innerHTML=`<h2>Country detail</h2>
    <h3>Name:${country.name.common}</h3>
    <img src="${country.flags.png}" alt="">`
}
loadData();