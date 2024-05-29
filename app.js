var list = document.getElementById("list");
var fruits = [
  {
    name: "Mango",
    title: "Phalon ka badshah",
    types: ["Chounsa", "Sindhri", "Langra", "Anwaratol", "Almaas"],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-IswcSxzeUy3VBIXW6hVl5RFdYqm41kFBg&s"
  },
  {
    name: "Cherry",
    title: "Khoon banane wali",
    types: ["Black Cherry", "Red Cherry"],
    
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    image:
      "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
  },
  {
    name: "Orange",
    title: "Vitaman C ki kami pori krny wala",
    types: ["Malta", "Malta"],
    
    desc: "Lorem ipsum, dolor sit amet consectetur elit. ",
    image:"https://cdn.mos.cms.futurecdn.net/xCZ2VwHz6pDUHCSVvaQsDT-1024-80.jpg.webp"
  },
  {
    name: "Watermelon",
    title: "Garmi ka dushman",
    types: ["Red Melon", "Green Melon"],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    image:
      "https://images.unsplash.com/photo-1621583441131-c8c190794970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Peach",
    title: "Juicy Peach",
    types: ["Swat Wala", "Quetta Wala"],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    image:
      "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Cherry",
    title: "Khoon banane wali",
    types: ["Black Cherry", "Red Cherry"],
    
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    image:
      "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
  },
];

function renderFruits() {
  list.innerHTML = "";
  fruits.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3 sm:w-1/2 p-4">
      <div class="flex relative h-[250px]">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${data.image}">
        <div id="${ind}" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${data.name}</h2>
          <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${data.title}</h1>
          <p class="leading-relaxed">${data.types.join(" , ")}</p>
          <p class="leading-relaxed">${data.desc}</p>
          <button onclick="updateDesc(this)">Update</button>
          <button onclick="deleteCard(this)">Delete</button>
        </div>
      </div>
    </div>`;
    list.innerHTML += ele;
  });
}

function updateDesc(ele) {
  var index = ele.parentElement.id; 
  fruits[index].desc = prompt("Desc");
}

function deleteCard(ele) {
  var index = ele.parentElement.id; 
  fruits.splice(index, 1); 
  renderFruits();
}

renderFruits();

  