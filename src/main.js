// Swiper
const mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000
  },
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// Navbar
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


// Api
const API = 'https://pokeapi.co/api/v2/';

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  console.log(API)
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  };
};
getData();