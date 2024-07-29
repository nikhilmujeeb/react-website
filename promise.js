// 1. 

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve ('Data fetched succesfully')
        },1000)
    })
}
fetchData().then((data)=>[
    console.log(data)
])

// 2. 

function fetchDataa(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (9==='9'){
                resolve ('Data fetched succesfully')
            }else{
                reject('Failed to fetch data')
            }
        },2000)
    })
}
fetchDataa()
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

// 3. 

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (10===10) {
                resolve("Data fetched successfully");
            } else {
                reject("Failed to fetch data");
            }
        },3000);
    });
}

async function fetchDataaa() {
  try{
    const data = await fetchData();
    console.log(data);
  }catch (error){
    console.log(error);
  }
}

fetchDataaa();

// 4.

function getCountryData(){
    fetch ('https://restcountries.com/v3.1/all')
    .then((result)=>{
        return result.json()
    })
    .then((result)=>{
        console.log(result)
        for ( let i = 0; i<result.length; i++){
            const imageContainer = document.createElement('div')
    
            const heading = document.createElement( 'h1')
            heading.innerText = result[i].name.common 
            imageContainer.appendChild(heading)
    
            const image = document.createElement('img')
            image.src = result[i].flags.png
            image.className = 'flags'
            imageContainer.appendChild(image)
            document.getElementById('container').appendChild(imageContainer)
    
            const capital = document.createElement('h4')
            capital.innerText = 'Capital : ' + result[i].capital
            capital.className = 'details'
            imageContainer.appendChild(capital)
            
            const continent = document.createElement('h4')
            continent.innerText = 'Continent : ' + result[i].continents
            continent.className = 'details'
            imageContainer.appendChild(continent)
    
            const languages = document.createElement('h4')
            if (result[i].languages){
                const languageList = Object.values(result[i].languages).join(', ');
                languages.innerText= 'Languages : ' + languageList
            }else{
                languages.innerText = 'Languges : Not Available'
            }
            imageContainer.appendChild(languages)
            languages.className = 'details'
    
                document.getElementById('container').appendChild(imageContainer);
        }
    })
    .catch((error)=>{
        console.log('error fetching data')
    })
}