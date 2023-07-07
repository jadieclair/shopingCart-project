// Create product array

const product = [
  {
    id: 0,
    image: "assets/img/gallery/gallery-1.jpg",
    title: "Giraffe Family",
    price: 580,
  },
  {
    id: 1,
    image: "assets/img/gallery/gallery-2.jpg",
    title: "The Lion King",
    price: 650,
  },
  {
    id: 2,
    image: "assets/img/gallery/gallery-3.jpg",
    title: "Winter Desert",
    price: 520,
  },
  {
    id: 3,
    image: "assets/img/gallery/gallery-4.jpg",
    title: "Matriarch",
    price: 570,
  },
  {
    id: 4,
    image: "assets/img/gallery/gallery-5.jpg",
    title: "Hippo Family",
    price: 640,
  },
  {
    id: 5,
    image: "assets/img/gallery/gallery-6.jpg",
    title: "Leopard at Rest",
    price: 720,
  },
  {
    id: 6,
    image: "assets/img/gallery/gallery-7.jpg",
    title: "Mothers Love",
    price: 640,
  },
  {
    id: 7,
    image: "assets/img/gallery/gallery-8.jpg",
    title: "Wildebeest Race",
    price: 720,
  },
  {
    id: 8,
    image: "assets/img/gallery/gallery-9.jpg",
    title: "Necks to the Gods",
    price: 580,
  },
  {
    id: 9,
    image: "assets/img/gallery/gallery-10.jpg",
    title: "Spring Desert",
    price: 515,
  },
  {
    id: 10,
    image: "assets/img/gallery/gallery-11.jpg",
    title: "Rino at Dusk",
    price: 725,
  },
  {
    id: 11,
    image: "assets/img/gallery/gallery-12.jpg",
    title: "Elephant at Dust",
    price: 690,
  },
];

const categories = [...new Set(product.map((item) => item.title))];

let i = 0;

document.getElementById("root").innerHTML = categories
  .map((category) => {
    const { image, title, price } = product.find(
      (item) => item.title === category
    );
    return `
      <div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <h2>R ${price}.00</h2>
          <button onclick='addtocart(${i++})'>Add to cart</button>
        </div>
      </div>`;
  })
  .join("");

let cart = [];

// Add to cart

function addtocart(index) {
  try {
    cart.push({ ...product[index] });
    displaycart();
  } catch (error) {
    console.error("Error occurred while adding item to cart:", error);
  }
}

function delElement(a) {
  try {
    cart.splice(a, 1);
    displaycart();
  } catch (error) {
    console.error("Error occurred while deleting item from cart:", error);
  }
}

// Display cart

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length === 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "R " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((item) => {
        let { image, title, price } = item;
        total = total + price;
        document.getElementById("total").innerHTML = "R " + total + ".00";
        return `
          <div class='cart-item'>
            <div class='row-img'>
              <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'>R ${price}.00</h2>
            <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
          </div>`;
      })
      .join("");
  }
}

// clear cart
function clearCart() {
  try {
    cart = [];
    displaycart();
  } catch (error) {
    console.error("Error occurred while clearing cart:", error);
  }
}

// Add event listener to the clear cart button
document.querySelector("#clearCart").addEventListener("click", clearCart);
