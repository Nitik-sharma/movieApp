const searchMovie=document.querySelector('.searchMovie');
const searchBox=document.querySelector('.searchBox');

const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const getMovie=async(api)=>{
const response=await fetch(api);
const data=await response.json();
console.log(data);
showMovie(data.results);

}

const showMovie=(data)=>{
  searchMovie.innerHTML="";
data.map((item=>{
    const movieShow=document.createElement('div');
    movieShow.classList.add('movieShow');

    movieShow.innerHTML=`
    <div class="card" style="width: 18rem;">
  <img src="${IMGPATH+item.poster_path}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}<span>${item.vote_average
    }</span></h5>
    <p class="card-text">${item.overview
    }.</p>
    
  </div>
</div>
    
    `
    searchMovie.appendChild(movieShow);
}))
console.log(data);
}

searchBox.addEventListener('keyup',(e)=>{
if(e.target.value!==""){
  getMovie(SEARCHAPI+e.target.value);
}else{
  getMovie(APIURL);
}
})
getMovie(APIURL);
