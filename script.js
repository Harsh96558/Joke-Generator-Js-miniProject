let BTN=document.getElementById('btn')
BTN.addEventListener('click', Jok)
let JOKE=document.getElementById('joke')


const apiKey='ELUV7pikDXib8JHd1/dM4g==RkBfMXiTqXWKRrT8'
    const apiUrl=`https://api.api-ninjas.com/v1/jokes?limit=1`

    options={
        method: 'GET',
       
        headers: { 'X-Api-Key': apiKey}
    }

async function Jok(e){

    try {

        JOKE.textContent="Updating a new Joke for You..."
        BTN.disabled=true
        BTN.textContent="Loading..."



        const FETCH= await fetch(apiUrl,options)
    const data= await FETCH.json()



    JOKE.textContent=data[0].joke
    BTN.disabled=false
    BTN.textContent="Tell me a Joke"

    console.log(data)
    } catch (error) {
        console.log(error);
        JOKE.textContent="An error occured please update or connect with the network...."

    
    BTN.disabled=false
    BTN.textContent="Tell me a joke"
        
    }



    
    


}