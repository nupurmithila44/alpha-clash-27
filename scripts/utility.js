function hideElementByID (elementID){
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
}

function showElementByID (elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function getARandomAlphabet (){

    // get or create an alphabet array
    const alphabets ='abcdefghijklmonpqrstuvwxyz'
    const alphabetstring = alphabets.split('')

    //  get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    

    
}