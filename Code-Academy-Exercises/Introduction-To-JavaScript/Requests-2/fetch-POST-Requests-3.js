const shortenUrl = () => {
const urlToShorten = inputField.value;
const data = JSON.stringify({destination: urlToShorten})

fetch(url, {
  method: 'POST',
  headers: {
  'Content-type': 'application/json',
    'apikey': apiKey
},
  body: data
  })
}
