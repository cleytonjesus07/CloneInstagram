/* HEADER - Search field */

const searchElement = document.getElementById("search");
const spanText = document.getElementById("search-span");
const clearSearchesBtn = document.getElementById("clear_searches");
const searchContainer =
  document.getElementsByClassName("searches-container")[0];
const decorInput = document.querySelector(".search-decor");
const searchResults = document.querySelector(".searches-results");

searchContainer.onclick = (e) => {
  if (e.target.classList[0] === "searches-container") {
    searchContainer.style.display = "none";
  }
};

searchElement.addEventListener("blur", (e) => {
  let text = e.target.value.trim();
  spanText.innerText = text !== "" ? e.target.value : "Pesquisar";
  e.target.value = "";
});

searchElement.addEventListener("focus", (e) => {
  const loading = document.getElementsByClassName("container-loading")[0];

  searchContainer.style.display = "flex";
  let text = spanText.textContent.trim().toLowerCase();
  if (text !== "pesquisar" || text === undefined) {
    e.target.value = text;
  }

  setTimeout(() => {
    loading.style.display = "none";
    searchResults.style.display = "block";
  }, 1000);
});

decorInput.onclick = () => searchElement.focus();

clearSearchesBtn.onclick = (e) => {
  e.preventDefault();
  const lis = document.querySelectorAll(".searches-lista > li");
  lis.length !== 0
    ? lis.forEach((li) => li.remove())
    : alert("Não há buscas recentes na lista para serem removidas.");
};


/* Arrows */

const left = document.getElementById("left-arrow");
const right = document.getElementById("right-arrow");
const containerScroll = document.querySelector(".stories-box ul");
const containerLis = Array.from(document.querySelectorAll(".stories-box ul > li"));
let scrollStep = 0;
let cw = 0 ;
document.addEventListener("DOMContentLoaded",()=>{
  scrollStep = containerScroll.clientWidth;
})

window.addEventListener("resize",()=>{
   scrollStep = containerScroll.clientWidth;
})


right.onclick = () => {
 
  let sl = containerScroll.scrollLeft,
      cw = containerScroll.scrollWidth;
	 console.log(cw)
  if ((sl + scrollStep) >= cw) {
    containerScroll.scrollTo(cw, 0);
  } else {
    containerScroll.scrollTo((sl + scrollStep), 0);
  }
}

left.onclick = () => {
  let sl = containerScroll.scrollLeft;
  if ((sl - scrollStep) <= 0) {
    containerScroll.scrollTo(0, 0);
  } else {
    containerScroll.scrollTo((sl - scrollStep), 0);
  }
}

containerScroll.addEventListener("scroll",()=>{
  (containerScroll.scrollLeft == 0)?left.style.visibility = "hidden" : left.style.visibility = "visible";
  (containerScroll.scrollLeft  >= (containerScroll.scrollWidth - scrollStep))?right.style.visibility = "hidden" : right.style.visibility = "visible";
})

