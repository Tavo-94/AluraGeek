# AluraGeek-Challange
Este challange consistia en crear una interfaz compuesta principalmente en una grilla de cards correspondientes a los productos dentro del archivo `db.json`. Para esto se utilizo la libreria `json-server`, creando asi una API en base al archivo `db.json`. Ademas, la pagina contenia un formulario cuya funcionalidad es la de tomar los datos ingresados por el usuario y en base a estos, crear un nuevo producto. Por ultimo, se pedia que eliminar un producto al hacer click en un boton dentro de la card del mismo.



## Product API Reference

#### Listar todos los productos

```http
  GET /products
```


#### Eliminar un producto por ID

```http
  DELETE /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id del item a eliminar |



#### Crear un nuevo producto

```http
  POST /products/${newProduct}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `newProduct`      | `JSON string` | **Requerido**. Nuevo producto a insertar |

