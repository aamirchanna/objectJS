var list = document.getElementById("list");
var products = [
  {
    name: "Laptop",
    title: "Powerful Computing",
    types: ["Gaming Laptop", "Ultrabook", "2-in-1 Laptop"],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=980&dpr=1.5",
  },
  {
    name: "Smartwatch",
    title: "Wearable Tech",
    types: ["Fitness Tracker", "Smartwatch", "Hybrid Smartwatch"],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    image: "https://media.wired.com/photos/6511aab1189c419c40374c92/16:9/w_2400,h_1350,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg",
  },
  {
    name: "Smartphone",
    title: "Stay Connected",
    types: ["Android", "iOS", "Windows"],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    image: "https://media.wired.com/photos/63db2361b6ec2064d937cc48/master/pass/Have-We-Reached-Peak-Smartphone--Gadget-Lab-Gear-GettyImages-1246719267.jpg",
  },
  {
    name: "Tablet",
    title: "Portable Entertainment",
    types: ["iPad", "Android Tablet", "Windows Tablet"],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    image: "https://p2-ofp.static.pub/fes/cms/2021/10/28/juqs65pgl1gh3dysi7yv1tnvtsiqva364946.png",
  },
  {
    name: "Smartwatch",
    title: "Wearable Tech",
    types: ["Fitness Tracker", "Smartwatch", "Hybrid Smartwatch"],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    image: "https://sadabahaar.pk/wp-content/uploads/2023/04/5151oEvz4JL._SX522_.jpg",
  },
  {
    name: "Headphones",
    title: "Immersive Audio",
    types: ["Over-Ear", "In-Ear", "On-Ear"],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    image: "https://t4.ftcdn.net/jpg/03/28/37/93/360_F_328379347_xEKgEB2wkjAJmcqSTmrg4uKxfWrlL7D9.jpg",
  },
];


function renderProduct() {
  list.innerHTML = "";
  products.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3 sm:w-1/2 p-4 border-solid rounded divide-black">
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
  products[index].desc = prompt("Desc");
  renderProduct();
}

function deleteCard(ele) {
  var index = ele.parentElement.id; 
  products.splice(index, 1); 
  renderProduct();
}

renderProduct();

  