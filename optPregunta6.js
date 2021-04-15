var unirest = require("unirest")

/**
 * Tomando como datasource data/users.json
 * 1. Desarrollar una API REST con los endpoints que permita:
 *      1.1. Listar todos los usuarios 
 *      1.2. Devuelva un usuario por ID, por ejemplo /api/users/4 devuelve el usuario cuyo id es 4:
 *      1.3. Inserte el siguiente user y retorne el listado de todos
 * {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
 *
 */
function listar() {
  var req = unirest("GET", "http://localhost:3000/users");
  req.end(function (res) {
    if (res.error) throw new Error(res.error)
    console.log(res.body)
    console.log("==================================================================");
  })  
}
function listarUno(valor) {
  var req = unirest("GET", "http://localhost:3000/users/"+valor);
  req.end(function (res) {
    if (res.error) throw new Error(res.error)
    console.log(res.body)
    console.log("==================================================================");
  })  
}
function agregar() {
  const coso =  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
  var req = unirest("POST", "http://localhost:3000/users/");
  req.send(coso).end(function (res) {
    if (res.error) throw new Error(res.error)
    console.log(res.body)
  }) 
}
function hacerAlgo() {
  //listar()
  //listarUno(4);
  agregar();
}
hacerAlgo();
