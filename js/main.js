import { getAllProducts, deleteProduct, createNewProduct } from "./conexion.js";

const cardContainer = document.querySelector("[data-card-container]");

const productForm = document.querySelector("[data-product-form]");

const geterateID = () => {
  return Math.random().toString(36).substring(2, 9);
};

function createCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
                <img src="${product.image}" alt="">
                <p>${product.name}</p>
                <div class="card-footer">

                    <p><strong>$${product.price}</strong></p>
                    <button >
                        <img src="img/trashIcon.svg" width="24px" height="24px" alt="">
                    </button>
                </div>
  `;

  return card;
}

/* vaciar el elemento padre de todos sus hijos previo a crear las cards dinamicamente */
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

async function fillCardContainer() {
  const productList = await getAllProducts();

  removeAllChildNodes(cardContainer);

  productList.forEach((product) => {
    const newCard = createCard(product);
    cardContainer.append(newCard);

    newCard.children
      .item(2)
      .children.item(1)
      .addEventListener("click", async () => {
        await deleteProduct(product.id);
      });
  });
}

/* ! Manejando el formulario */

productForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.dir(e.target);

  const newProduct = {
    id: geterateID(),
    name: e.target["name"].value,
    price: e.target["price"].value,
    image: "https://picsum.photos/400",
  };
  await createNewProduct(newProduct);
});

fillCardContainer();


/* validacion del formulario */
const regEx =
  /https?:\/\/(?:www\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;

console.log(regEx.test("asdflasdf"));
console.log(regEx.test("https://www.youtube.com/watch?v=sXQxhojSdZM"));
