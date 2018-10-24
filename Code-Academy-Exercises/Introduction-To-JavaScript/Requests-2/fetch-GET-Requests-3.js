const url= 'https://api.datamuse.com/words'
const queryParams= '?sl='

const getSuggestions = () => {
  const wordQuery= inputField.value;
  const endpoint= `${url}${queryParams}${wordQuery}`;
}

fetch(endpoint).then(response => {
    if (response.ok) {
      return response.json();
    }
{
  throw new Error('Request failed!');
 }, networkError => {
   console.log(networkError.message)
 })
}
