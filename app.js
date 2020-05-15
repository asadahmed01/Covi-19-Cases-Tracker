let confirmed = document.querySelector('.confirmed');
let death = document.querySelector('.death')
let recovered = document.querySelector('.recovered')


fetch('https://api.covid19api.com/summary')
.then(response => response.json())
.then(data => {
  data.Countries.forEach((country) =>
  {
    if(country.Country === 'Somalia')
    {
      console.log(country)
      confirmed.textContent = country.TotalConfirmed;
      death.textContent = country.TotalDeaths;
      recovered.textContent = country.TotalRecovered;
    }
    
  })
})
