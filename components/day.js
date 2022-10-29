
export default getDay


function getDay (){


let searchButton = document.querySelector("#search")
let API_KEY = 'AHrN4BhURUFltX4fhG2EYhIzcS8gZUge2ihscsIr'



async function sendApiRequest(){
    try{
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response);
    let data = await response.json()
    console.log(data)
    document.querySelector("#content").innerHTML += data.explanation
document.querySelector("#content").innerHTML =`<img src="${data.url}" width="300" height="300" />`
    }catch (error){
        console.error(error)
    }
}





searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()

})
}


