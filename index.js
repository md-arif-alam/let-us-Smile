// GET https://icanhazdadjoke.com/
const newJokes = document.querySelector('#joke');
const btnJoke = document.querySelector('#jokeBtn');

// ########################  using promises ####################


// const jokeGenerator = ()=>{
//     const setHeader ={ 
//         headers:{
//             Accept:"application/json" 
//         }
//     }
//     fetch('https://icanhazdadjoke.com',setHeader)
//     .then((responce)=>{
//        return responce.json()
//     })
//     .then((data)=>{
//        newJokes.innerHTML = data.joke;
//     }) 
//     .catch((error)=>{
//         console.log(error);
//     })
// }


// ################# Using Async-Await ################

async function jokeGenerator(){}

const jokeGenerator = async ()=>{
    
    try{
        const setHeader ={ 
            headers:{
                Accept:"application/json" 
            }
        }
        const responce = await fetch('https://icanhazdadjoke.com',setHeader);

        const data = await responce.json();
        newJokes.innerHTML = data.joke;   // here joke is the key of the api which returns the n number of jokes
    }
    catch(error){
        alert(`error while fetching the Api ${error}`);
    }

    
}


btnJoke.addEventListener('click',jokeGenerator);
jokeGenerator();