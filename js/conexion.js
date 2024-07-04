export async function getAllProducts() {
  const con = await fetch("http://localhost:3000/products");

  const data = await con.json();

  return data;
}

export async function deleteProduct(product) {
  const con = await fetch(`http://localhost:3000/products/${product}`, {
    method: "DELETE",
  });
}

export async function createNewProduct(newProduct) {
  try {
    const con = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!con.ok) {
      throw new Error("Sucedio un problema al ingresar un nuevo producto");
    }
  } catch (error) {
    console.log(error);
  }
}
