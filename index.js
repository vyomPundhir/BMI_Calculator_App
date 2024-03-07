const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

//  yeh values addEventListener ke ander likhna kyuki hume iss instance ki value likhni hai.....Agr hum addEventListener se bahar likh denge toh document load hote hi variables me empty values chali jaayengi.

  const height= parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please Enter Valid Height'
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please Enter Valid Weight'
  } 
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the result 
    // results.innerHTML = `<span>${bmi} </span>`
    if (0 <= bmi && bmi < 18.6){
      results.innerHTML = `<span>${bmi} Under Weight </span>`
    }
    else if (18.6 <= bmi && bmi <= 24.9 ){
      results.innerHTML = `<span>${bmi} Normal </span>`
    }
    else {
      results.innerHTML = `<span>${bmi} Over Weight </span>`
    }
  }
  


})