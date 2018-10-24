const shortenUrl = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
  const response = await fetch(url, {
	method: 'POST',
  body: data,
  headers: {
        'Content-type': 'application/json',
      }
    });
		if(response.ok){
    const jsonResponse = await response.json();
    renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
