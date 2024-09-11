const jokebutton = document.getElementById('jokebutton');
const joke = document.getElementById('joke');
const apiKey = 'GTP2BfNmlbr94RXoiOuidw==yCJj3OxIxgb94bcY'
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey
    }
};

async function getJoke(){

    joke.textContent = 'Updating...';
    
    
    jokebutton.disable = true;




   const response =  await fetch(apiURL,options);
   const data = await response.json();
   

   jokebutton.disable = false;
   
   joke.textContent = data[0].joke;
}
 
jokebutton.addEventListener('click', getJoke);











