const getData=async() => {
  try {
    const response=await fetch('http://api-to-call.com/endpoint',{
      method:'POST'
      body: JSON.stringify({id: 200})
  })
  if(response.ok){
    const jsonResponse=await response.jsone();
    returnjsonResponse;
  }
  throw new Error('request failed');
} catch(error) {
  console.log(error);
  }
}
