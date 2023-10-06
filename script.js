const elmovie = document.querySelector("#movie");
const elInput = document.querySelector("#input");
const elButton = document.querySelector("#button")
const elloading = document.querySelector("#loading")

const apiKey = "e4312694";

const showloading = () => {
    elloading.style.display = "block";
}

const hiddenloading = () => {
    elloading.style.display = "none"
}

function fetchmovies(searchQuery) {
    elmovie.innerHTML = "";

    let apiUrl = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;

    showloading();
    
   
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        hiddenloading()

        if (data.Search) {
            let movie = data.Search;

         movie.forEach((value) => {
            const card = document.createElement("div"); 
            const image = document.createElement("img");
            const title = document.createElement("h1");
            const subTitle= document.createElement("p");

            image.src = value.Poster;
            title.innerHTML = value.Title;
            subTitle.innerHTML = value.Year;
            
            card.append(image);
            card.append(title);
            card.append(subTitle);
            elmovie.append(card);

         })
           
                
        }
            });
    }



elButton.addEventListener("click", () => {
    let value = elInput.value.trim();

    if (value !== "") {
        fetchmovies(value);
    }
})

elInput.addEventListener("keydown", (event) => {
    if (event.key === "enter") {
        let value = elInput.value.trim();

        if (value !== "") {
            fetchmovies(value)
        }
    }
})

function showmovie() {
    const movie = "Harry Potter"

    fetchmovies(movie)
}
showmovie();