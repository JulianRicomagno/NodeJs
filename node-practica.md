# Prueba Node.js

## Forma de entrega
La prueba debe entregarse comprimida en un zip sin la carpeta `node_modules`.

## A tener en cuenta:

 - Los métodos que usen callback, deberán ser convertidos a promises, usando la forma que consideren.
 - Se deben utlizar las últimas funcionalides de javascript: `async/await` por ejemplo.
 - El código tiene que incluir un linter.
 - No se puede usar typescript ni ningún transpilador de código.
 - Se valorará la prolijidad  y modularización del código.

**No** subir el código a ningún repositorio público.

---

## Ejercicio

Armar un servidor de express corriendo en el puerto `4005` que acepte las siguientes rutas:

### `POST /api/item`
	 
	 La API recibe un `JSON` con el siguiente formato:
```json
{
	"id": 50, 
	"name": "Coca",
	"keywords": ["coca","cola", "coca"]
}
```
#### Criterios de validación:

 - **id**: integer (Required)
 - **name**: string (Required)
 - **keyords**:  string array (Optional)

De no cumplirse los criterios de validación la request deberá responder un `400 BAD REQUEST`, y el siguiente body
```json
{
	error: true
}
```
**Bonus:** Agregar mensaje de error claro.

Si se envía un `JSON` inválido, el mensaje devuelto deberá ser:
```json
{
	"error": true,
	"message": "Invalid JSON"
}
```


En caso de que la validación sea correcta, se deberá devolver el `JSON` envíado, eliminando los `keywords` repetidos, el status code deberá ser 200.

---

 ### `GET /api/file/{filename}` 
 
Se deben crear algunos archivos de prueba en la carpeta: `file/`. La API deberá retornar el contenido del archivo de la carpeta `file/` solicitado.

A tener en cuenta:

 1. El archivo solicitado puede pesar varios GB.
 2. El archivo solicitado puede no existir
 3. El content-type devuelto debe ser el correcto según el tipo de archivo.
 4. **Tienen** que existir los archivos: `test.txt` y `test.pdf` para realizar tests automáticos.
 
Con esta información, la API deberá devolver el HTTP status code acorde.

## Bonus Track

Entregar una versión dockerizada de esta prueba, con un servicio de base de datos (MySQL) y los siguientes endpoints.

- El comando `npm run build` deberá buildear la imagen docker, y la prueba se deberá iniciar con: `docker-compose up`
- El puerto del host a usar tiene que ser `4005`
- Armar la estructura necesaria de la base de datos, que tendrá que ser creada cuando el servicio arranca.
- El middleware de express en ambos casos tiene que ser `async`

```javascript
// Ejemplo de handler. Agregar o quitar lo que consideren
app.post('/api/idea', async(req, res, next) => {
	// Code ...		  ^^^^^
});
```

 ### `POST /api/blog/post`

La API recibe un JSON con el siguiente formato:

```
{
	"title": "My Post Title",
	"content": "Post content"
}
```

Se deberá validar la request, y guardar el nuevo post en la base de datos si la validación es exitosa. El manejo de error tiene que ser correcto y devolver el HTTP status code acorde.

En caso de que se guarde el post exitosamente, se deberá devolver el `id` de éste, y el status code correcto.

```
{
	"id": 1
}
```


 ### `GET /api/blog/post/{id}`

La API deberá retornar el post identificado por `{id}`.  El manejo de error tiene que ser correcto y devolver el HTTP status code acorde.

```
{
	"id": 1,
	"title": "My Post Title",
	"content": "Post content",
	"date": 1533143757 // Unix time
}
```