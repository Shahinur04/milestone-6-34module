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
        `;
        divCountries.appendChild(countryDiv)
    })
}
loadData();