// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`v3 Should add original body: code 1`] = `
"export function updatePet(params) {
  return request(\\"put\\", \`/pet\`)(params);
}

export function addPet(params) {
  return request(\\"post\\", \`/pet\`)(params);
}

export function findPetsByStatus(params) {
  return request(\\"get\\", \`/pet/findByStatus\`)(params);
}

export function findPetsByTags(params) {
  return request(\\"get\\", \`/pet/findByTags\`)(params);
}

export function getPetById(params) {
  return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
}

export function updatePetWithForm(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
}

export function deletePet(params) {
  return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
}

export function uploadFile(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
}

export function getInventory() {
  return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
}

export function placeOrder(params) {
  return request(\\"post\\", \`/store/order\`)(params);
}

export function getOrderById(params) {
  return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function deleteOrder(params) {
  return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function createUser(params) {
  return request(\\"post\\", \`/user\`)(params);
}

export function createUsersWithListInput(params) {
  return request(\\"post\\", \`/user/createWithList\`)(params);
}

export function loginUser(params) {
  return request(\\"get\\", \`/user/login\`)(params);
}

export function logoutUser() {
  return request(\\"get\\", \`/user/logout\`)();
}

export function getUserByName(params) {
  return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
}

export function updateUser(params) {
  return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
}

export function deleteUser(params) {
  return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
}

"
`;

exports[`v3 Should add original body: swagger 1`] = `
Object {
  "components": Object {
    "requestBodies": Object {
      "Pet": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
          "application/xml": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
        },
        "description": "Pet object that needs to be added to the store",
      },
      "UserArray": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "items": Object {
                "$ref": "#/components/schemas/User",
              },
              "type": "array",
            },
          },
        },
        "description": "List of user object",
      },
    },
    "schemas": Object {
      "Address": Object {
        "properties": Object {
          "city": Object {
            "example": "Palo Alto",
            "type": "string",
          },
          "state": Object {
            "example": "CA",
            "type": "string",
          },
          "street": Object {
            "example": "437 Lytton",
            "type": "string",
          },
          "zip": Object {
            "example": "94301",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "address",
        },
      },
      "ApiResponse": Object {
        "properties": Object {
          "code": Object {
            "format": "int32",
            "type": "integer",
          },
          "message": Object {
            "type": "string",
          },
          "type": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "##default",
        },
      },
      "Category": Object {
        "properties": Object {
          "id": Object {
            "example": 1,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "Dogs",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "category",
        },
      },
      "Customer": Object {
        "properties": Object {
          "address": Object {
            "items": Object {
              "$ref": "#/components/schemas/Address",
            },
            "type": "array",
            "xml": Object {
              "name": "addresses",
              "wrapped": true,
            },
          },
          "id": Object {
            "example": 100000,
            "format": "int64",
            "type": "integer",
          },
          "username": Object {
            "example": "fehguy",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "customer",
        },
      },
      "Order": Object {
        "properties": Object {
          "complete": Object {
            "type": "boolean",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "petId": Object {
            "example": 198772,
            "format": "int64",
            "type": "integer",
          },
          "quantity": Object {
            "example": 7,
            "format": "int32",
            "type": "integer",
          },
          "shipDate": Object {
            "format": "date-time",
            "type": "string",
          },
          "status": Object {
            "description": "Order Status",
            "enum": Array [
              "placed",
              "approved",
              "delivered",
            ],
            "example": "approved",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "order",
        },
      },
      "Pet": Object {
        "properties": Object {
          "category": Object {
            "$ref": "#/components/schemas/Category",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "doggie",
            "type": "string",
          },
          "photoUrls": Object {
            "items": Object {
              "type": "string",
              "xml": Object {
                "name": "photoUrl",
              },
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
          "status": Object {
            "description": "pet status in the store",
            "enum": Array [
              "available",
              "pending",
              "sold",
            ],
            "type": "string",
          },
          "tags": Object {
            "items": Object {
              "$ref": "#/components/schemas/Tag",
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
        },
        "required": Array [
          "name",
          "photoUrls",
        ],
        "type": "object",
        "xml": Object {
          "name": "pet",
        },
      },
      "Tag": Object {
        "properties": Object {
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "tag",
        },
      },
      "User": Object {
        "properties": Object {
          "email": Object {
            "example": "john@email.com",
            "type": "string",
          },
          "firstName": Object {
            "example": "John",
            "type": "string",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "lastName": Object {
            "example": "James",
            "type": "string",
          },
          "password": Object {
            "example": "12345",
            "type": "string",
          },
          "phone": Object {
            "example": "12345",
            "type": "string",
          },
          "userStatus": Object {
            "description": "User Status",
            "example": 1,
            "format": "int32",
            "type": "integer",
          },
          "username": Object {
            "example": "theUser",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "user",
        },
      },
    },
    "securitySchemes": Object {
      "api_key": Object {
        "in": "header",
        "name": "api_key",
        "type": "apiKey",
      },
      "petstore_auth": Object {
        "flows": Object {
          "implicit": Object {
            "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
            "scopes": Object {
              "read:pets": "read your pets",
              "write:pets": "modify pets in your account",
            },
          },
        },
        "type": "oauth2",
      },
    },
  },
  "externalDocs": Object {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io",
  },
  "info": Object {
    "contact": Object {
      "email": "apiteam@swagger.io",
    },
    "description": "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml) ",
    "license": Object {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    "termsOfService": "http://swagger.io/terms/",
    "title": "Swagger Petstore - OpenAPI 3.0",
    "version": "1.0.4",
  },
  "openapi": "3.0.2",
  "paths": Object {
    "/pet": Object {
      "post": Object {
        "description": "Add a new pet to the store",
        "operationId": "addPet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Create a new pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Add a new pet to the store",
        "tags": Array [
          "pet",
        ],
      },
      "put": Object {
        "description": "Update an existing pet by Id",
        "operationId": "updatePet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Update an existent pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
          "405": Object {
            "description": "Validation exception",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Update an existing pet",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByStatus": Object {
      "get": Object {
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": Array [
          Object {
            "description": "Status values that need to be considered for filter",
            "explode": true,
            "in": "query",
            "name": "status",
            "required": false,
            "schema": Object {
              "default": "available",
              "enum": Array [
                "available",
                "pending",
                "sold",
              ],
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid status value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by status",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByTags": Object {
      "get": Object {
        "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
        "operationId": "findPetsByTags",
        "parameters": Array [
          Object {
            "description": "Tags to filter by",
            "explode": true,
            "in": "query",
            "name": "tags",
            "required": false,
            "schema": Object {
              "items": Object {
                "type": "string",
              },
              "type": "array",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid tag value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by tags",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}": Object {
      "delete": Object {
        "description": "",
        "operationId": "deletePet",
        "parameters": Array [
          Object {
            "description": "",
            "in": "header",
            "name": "api_key",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Pet id to delete",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid pet value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Deletes a pet",
        "tags": Array [
          "pet",
        ],
      },
      "get": Object {
        "description": "Returns a single pet",
        "operationId": "getPetById",
        "parameters": Array [
          Object {
            "description": "ID of pet to return",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Find pet by ID",
        "tags": Array [
          "pet",
        ],
      },
      "post": Object {
        "description": "",
        "operationId": "updatePetWithForm",
        "parameters": Array [
          Object {
            "description": "ID of pet that needs to be updated",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Name of pet that needs to be updated",
            "in": "query",
            "name": "name",
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Status of pet that needs to be updated",
            "in": "query",
            "name": "status",
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Updates a pet in the store with form data",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}/uploadImage": Object {
      "post": Object {
        "description": "",
        "operationId": "uploadFile",
        "parameters": Array [
          Object {
            "description": "ID of pet to update",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Additional Metadata",
            "in": "query",
            "name": "additionalMetadata",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/octet-stream": Object {
              "schema": Object {
                "format": "binary",
                "type": "string",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/ApiResponse",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "uploads an image",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/store/inventory": Object {
      "get": Object {
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "additionalProperties": Object {
                    "format": "int32",
                    "type": "integer",
                  },
                  "type": "object",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
        ],
        "summary": "Returns pet inventories by status",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order": Object {
      "post": Object {
        "description": "Place a new order in the store",
        "operationId": "placeOrder",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "summary": "Place an order for a pet",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order/{orderId}": Object {
      "delete": Object {
        "description": "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
        "operationId": "deleteOrder",
        "parameters": Array [
          Object {
            "description": "ID of the order that needs to be deleted",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Delete purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
      "get": Object {
        "description": "For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",
        "operationId": "getOrderById",
        "parameters": Array [
          Object {
            "description": "ID of order that needs to be fetched",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Find purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
    },
    "/user": Object {
      "post": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Created user object",
        },
        "responses": Object {
          "default": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "summary": "Create user",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/createWithList": Object {
      "post": Object {
        "description": "Creates list of users with given input array",
        "operationId": "createUsersWithListInput",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "items": Object {
                  "$ref": "#/components/schemas/User",
                },
                "type": "array",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "Successful operation",
          },
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Creates list of users with given input array",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/login": Object {
      "get": Object {
        "description": "",
        "operationId": "loginUser",
        "parameters": Array [
          Object {
            "description": "The user name for login",
            "in": "query",
            "name": "username",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "The password for login in clear text",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "type": "string",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "type": "string",
                },
              },
            },
            "description": "successful operation",
            "headers": Object {
              "X-Expires-After": Object {
                "description": "date in UTC when toekn expires",
                "schema": Object {
                  "format": "date-time",
                  "type": "string",
                },
              },
              "X-Rate-Limit": Object {
                "description": "calls per hour allowed by the user",
                "schema": Object {
                  "format": "int32",
                  "type": "integer",
                },
              },
            },
          },
          "400": Object {
            "description": "Invalid username/password supplied",
          },
        },
        "summary": "Logs user into the system",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/logout": Object {
      "get": Object {
        "description": "",
        "operationId": "logoutUser",
        "parameters": Array [],
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Logs out current logged in user session",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/{username}": Object {
      "delete": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "parameters": Array [
          Object {
            "description": "The name that needs to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Delete user",
        "tags": Array [
          "user",
        ],
      },
      "get": Object {
        "description": "",
        "operationId": "getUserByName",
        "parameters": Array [
          Object {
            "description": "The name that needs to be fetched. Use user1 for testing. ",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Get user by user name",
        "tags": Array [
          "user",
        ],
      },
      "put": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "parameters": Array [
          Object {
            "description": "name that need to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Update an existent user in the store",
        },
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Update user",
        "tags": Array [
          "user",
        ],
      },
    },
  },
  "servers": Array [
    Object {
      "url": "/api/v3",
    },
  ],
  "tags": Array [
    Object {
      "description": "Everything about your Pets",
      "externalDocs": Object {
        "description": "Find out more",
        "url": "http://swagger.io",
      },
      "name": "pet",
    },
    Object {
      "description": "Operations about user",
      "name": "store",
    },
    Object {
      "description": "Access to Petstore orders",
      "externalDocs": Object {
        "description": "Find out more about our store",
        "url": "http://swagger.io",
      },
      "name": "user",
    },
  ],
}
`;

exports[`v3 Should add original body: types 1`] = `
"type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

type UpdatePetParams0 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Update an existing pet
* Update an existing pet by Id
*/
export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

type UpdatePetParams1 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

type UpdatePetParams2 = { \\"body\\"?: { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; }; };
type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

type UpdatePetParams3 = { \\"body\\"?: { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; }; };
type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

type UpdatePetParams4 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

type UpdatePetParams5 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

type AddPetParams0 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Add a new pet to the store
* Add a new pet to the store
*/
export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

type AddPetParams1 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

type AddPetParams2 = { \\"body\\"?: { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; }; };
type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

type AddPetParams3 = { \\"body\\"?: { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; }; };
type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

type AddPetParams4 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

type AddPetParams5 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by status
* Multiple status values can be provided with comma separated strings
*/
export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by tags
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
*/
export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Find pet by ID
* Returns a single pet
*/
export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
type UpdatePetWithFormResult0 = RequestResult<null>;
/**
* Updates a pet in the store with form data
*/
export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
type DeletePetResult0 = RequestResult<null>;
/**
* Deletes a pet
*/
export function deletePet(params: DeletePetParams0): DeletePetResult0;

type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: { \\"body\\"?: string; }; };
type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
/**
* uploads an image
*/
export function uploadFile(params: UploadFileParams0): UploadFileResult0;

type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
/**
* Returns pet inventories by status
* Returns a map of status codes to quantities
*/
export function getInventory(): GetInventoryResult0;

type PlaceOrderParams0 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
/**
* Place an order for a pet
* Place a new order in the store
*/
export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

type PlaceOrderParams1 = { \\"body\\"?: { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; }; };
type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

type PlaceOrderParams2 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
/**
* Find purchase order by ID
* For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
*/
export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type DeleteOrderResult0 = RequestResult<null>;
/**
* Delete purchase order by ID
* For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
*/
export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

type CreateUserParams0 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type CreateUserResult0 = RequestResult<null>;
/**
* Create user
* This can only be done by the logged in user.
*/
export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

type CreateUserParams1 = { \\"body\\"?: { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; }; };
type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type CreateUserResult1 = RequestResult<null>;
export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

type CreateUserParams2 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type CreateUserResult2 = RequestResult<null>;
export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

type CreateUsersWithListInputParams0 = { \\"body\\"?: { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; }; };
type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Creates list of users with given input array
* Creates list of users with given input array
*/
export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

type CreateUsersWithListInputParams1 = { \\"body\\"?: { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; }; };
type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type LoginUserResult0 = RequestResult<string>;
/**
* Logs user into the system
*/
export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type LoginUserResult1 = RequestResult<string>;
export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

type LogoutUserResult0 = RequestResult<null>;
/**
* Logs out current logged in user session
*/
export function logoutUser(): LogoutUserResult0;

type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Get user by user name
*/
export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type UpdateUserResult0 = RequestResult<null>;
/**
* Update user
* This can only be done by the logged in user.
*/
export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; }; };
type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type UpdateUserResult1 = RequestResult<null>;
export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type UpdateUserResult2 = RequestResult<null>;
export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
type DeleteUserResult0 = RequestResult<null>;
/**
* Delete user
* This can only be done by the logged in user.
*/
export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

"
`;

exports[`v3 Should ignore deprecated: code 1`] = `
"export function updatePet(params) {
  return request(\\"put\\", \`/pet\`)(params);
}

export function addPet(params) {
  return request(\\"post\\", \`/pet\`)(params);
}

export function findPetsByStatus(params) {
  return request(\\"get\\", \`/pet/findByStatus\`)(params);
}

export function findPetsByTags(params) {
  return request(\\"get\\", \`/pet/findByTags\`)(params);
}

export function getPetById(params) {
  return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
}

export function updatePetWithForm(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
}

export function deletePet(params) {
  return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
}

export function uploadFile(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
}

export function getInventory() {
  return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
}

export function placeOrder(params) {
  return request(\\"post\\", \`/store/order\`)(params);
}

export function getOrderById(params) {
  return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function deleteOrder(params) {
  return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function createUser(params) {
  return request(\\"post\\", \`/user\`)(params);
}

export function createUsersWithListInput(params) {
  return request(\\"post\\", \`/user/createWithList\`)(params);
}

export function loginUser(params) {
  return request(\\"get\\", \`/user/login\`)(params);
}

export function logoutUser() {
  return request(\\"get\\", \`/user/logout\`)();
}

export function getUserByName(params) {
  return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
}

export function updateUser(params) {
  return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
}

export function deleteUser(params) {
  return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
}

"
`;

exports[`v3 Should ignore deprecated: swagger 1`] = `
Object {
  "components": Object {
    "requestBodies": Object {
      "Pet": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
          "application/xml": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
        },
        "description": "Pet object that needs to be added to the store",
      },
      "UserArray": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "items": Object {
                "$ref": "#/components/schemas/User",
              },
              "type": "array",
            },
          },
        },
        "description": "List of user object",
      },
    },
    "schemas": Object {
      "Address": Object {
        "properties": Object {
          "city": Object {
            "example": "Palo Alto",
            "type": "string",
          },
          "state": Object {
            "example": "CA",
            "type": "string",
          },
          "street": Object {
            "example": "437 Lytton",
            "type": "string",
          },
          "zip": Object {
            "example": "94301",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "address",
        },
      },
      "ApiResponse": Object {
        "properties": Object {
          "code": Object {
            "format": "int32",
            "type": "integer",
          },
          "message": Object {
            "type": "string",
          },
          "type": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "##default",
        },
      },
      "Category": Object {
        "properties": Object {
          "id": Object {
            "example": 1,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "Dogs",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "category",
        },
      },
      "Customer": Object {
        "properties": Object {
          "address": Object {
            "items": Object {
              "$ref": "#/components/schemas/Address",
            },
            "type": "array",
            "xml": Object {
              "name": "addresses",
              "wrapped": true,
            },
          },
          "id": Object {
            "example": 100000,
            "format": "int64",
            "type": "integer",
          },
          "username": Object {
            "example": "fehguy",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "customer",
        },
      },
      "Order": Object {
        "properties": Object {
          "complete": Object {
            "type": "boolean",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "petId": Object {
            "example": 198772,
            "format": "int64",
            "type": "integer",
          },
          "quantity": Object {
            "example": 7,
            "format": "int32",
            "type": "integer",
          },
          "shipDate": Object {
            "format": "date-time",
            "type": "string",
          },
          "status": Object {
            "description": "Order Status",
            "enum": Array [
              "placed",
              "approved",
              "delivered",
            ],
            "example": "approved",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "order",
        },
      },
      "Pet": Object {
        "properties": Object {
          "category": Object {
            "$ref": "#/components/schemas/Category",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "doggie",
            "type": "string",
          },
          "photoUrls": Object {
            "items": Object {
              "type": "string",
              "xml": Object {
                "name": "photoUrl",
              },
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
          "status": Object {
            "description": "pet status in the store",
            "enum": Array [
              "available",
              "pending",
              "sold",
            ],
            "type": "string",
          },
          "tags": Object {
            "items": Object {
              "$ref": "#/components/schemas/Tag",
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
        },
        "required": Array [
          "name",
          "photoUrls",
        ],
        "type": "object",
        "xml": Object {
          "name": "pet",
        },
      },
      "Tag": Object {
        "properties": Object {
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "tag",
        },
      },
      "User": Object {
        "properties": Object {
          "email": Object {
            "example": "john@email.com",
            "type": "string",
          },
          "firstName": Object {
            "example": "John",
            "type": "string",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "lastName": Object {
            "example": "James",
            "type": "string",
          },
          "password": Object {
            "example": "12345",
            "type": "string",
          },
          "phone": Object {
            "example": "12345",
            "type": "string",
          },
          "userStatus": Object {
            "description": "User Status",
            "example": 1,
            "format": "int32",
            "type": "integer",
          },
          "username": Object {
            "example": "theUser",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "user",
        },
      },
    },
    "securitySchemes": Object {
      "api_key": Object {
        "in": "header",
        "name": "api_key",
        "type": "apiKey",
      },
      "petstore_auth": Object {
        "flows": Object {
          "implicit": Object {
            "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
            "scopes": Object {
              "read:pets": "read your pets",
              "write:pets": "modify pets in your account",
            },
          },
        },
        "type": "oauth2",
      },
    },
  },
  "externalDocs": Object {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io",
  },
  "info": Object {
    "contact": Object {
      "email": "apiteam@swagger.io",
    },
    "description": "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml) ",
    "license": Object {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    "termsOfService": "http://swagger.io/terms/",
    "title": "Swagger Petstore - OpenAPI 3.0",
    "version": "1.0.4",
  },
  "openapi": "3.0.2",
  "paths": Object {
    "/pet": Object {
      "post": Object {
        "description": "Add a new pet to the store",
        "operationId": "addPet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Create a new pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Add a new pet to the store",
        "tags": Array [
          "pet",
        ],
      },
      "put": Object {
        "description": "Update an existing pet by Id",
        "operationId": "updatePet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Update an existent pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
          "405": Object {
            "description": "Validation exception",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Update an existing pet",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByStatus": Object {
      "get": Object {
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": Array [
          Object {
            "description": "Status values that need to be considered for filter",
            "explode": true,
            "in": "query",
            "name": "status",
            "required": false,
            "schema": Object {
              "default": "available",
              "enum": Array [
                "available",
                "pending",
                "sold",
              ],
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid status value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by status",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByTags": Object {
      "get": Object {
        "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
        "operationId": "findPetsByTags",
        "parameters": Array [
          Object {
            "description": "Tags to filter by",
            "explode": true,
            "in": "query",
            "name": "tags",
            "required": false,
            "schema": Object {
              "items": Object {
                "type": "string",
              },
              "type": "array",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid tag value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by tags",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}": Object {
      "delete": Object {
        "description": "",
        "operationId": "deletePet",
        "parameters": Array [
          Object {
            "description": "",
            "in": "header",
            "name": "api_key",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Pet id to delete",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid pet value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Deletes a pet",
        "tags": Array [
          "pet",
        ],
      },
      "get": Object {
        "description": "Returns a single pet",
        "operationId": "getPetById",
        "parameters": Array [
          Object {
            "description": "ID of pet to return",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Find pet by ID",
        "tags": Array [
          "pet",
        ],
      },
      "post": Object {
        "description": "",
        "operationId": "updatePetWithForm",
        "parameters": Array [
          Object {
            "description": "ID of pet that needs to be updated",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Name of pet that needs to be updated",
            "in": "query",
            "name": "name",
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Status of pet that needs to be updated",
            "in": "query",
            "name": "status",
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Updates a pet in the store with form data",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}/uploadImage": Object {
      "post": Object {
        "description": "",
        "operationId": "uploadFile",
        "parameters": Array [
          Object {
            "description": "ID of pet to update",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Additional Metadata",
            "in": "query",
            "name": "additionalMetadata",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/octet-stream": Object {
              "schema": Object {
                "format": "binary",
                "type": "string",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/ApiResponse",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "uploads an image",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/store/inventory": Object {
      "get": Object {
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "additionalProperties": Object {
                    "format": "int32",
                    "type": "integer",
                  },
                  "type": "object",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
        ],
        "summary": "Returns pet inventories by status",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order": Object {
      "post": Object {
        "description": "Place a new order in the store",
        "operationId": "placeOrder",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "summary": "Place an order for a pet",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order/{orderId}": Object {
      "delete": Object {
        "description": "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
        "operationId": "deleteOrder",
        "parameters": Array [
          Object {
            "description": "ID of the order that needs to be deleted",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Delete purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
      "get": Object {
        "description": "For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",
        "operationId": "getOrderById",
        "parameters": Array [
          Object {
            "description": "ID of order that needs to be fetched",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Find purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
    },
    "/user": Object {
      "post": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Created user object",
        },
        "responses": Object {
          "default": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "summary": "Create user",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/createWithList": Object {
      "post": Object {
        "description": "Creates list of users with given input array",
        "operationId": "createUsersWithListInput",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "items": Object {
                  "$ref": "#/components/schemas/User",
                },
                "type": "array",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "Successful operation",
          },
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Creates list of users with given input array",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/login": Object {
      "get": Object {
        "description": "",
        "operationId": "loginUser",
        "parameters": Array [
          Object {
            "description": "The user name for login",
            "in": "query",
            "name": "username",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "The password for login in clear text",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "type": "string",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "type": "string",
                },
              },
            },
            "description": "successful operation",
            "headers": Object {
              "X-Expires-After": Object {
                "description": "date in UTC when toekn expires",
                "schema": Object {
                  "format": "date-time",
                  "type": "string",
                },
              },
              "X-Rate-Limit": Object {
                "description": "calls per hour allowed by the user",
                "schema": Object {
                  "format": "int32",
                  "type": "integer",
                },
              },
            },
          },
          "400": Object {
            "description": "Invalid username/password supplied",
          },
        },
        "summary": "Logs user into the system",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/logout": Object {
      "get": Object {
        "description": "",
        "operationId": "logoutUser",
        "parameters": Array [],
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Logs out current logged in user session",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/{username}": Object {
      "delete": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "parameters": Array [
          Object {
            "description": "The name that needs to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Delete user",
        "tags": Array [
          "user",
        ],
      },
      "get": Object {
        "description": "",
        "operationId": "getUserByName",
        "parameters": Array [
          Object {
            "description": "The name that needs to be fetched. Use user1 for testing. ",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Get user by user name",
        "tags": Array [
          "user",
        ],
      },
      "put": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "parameters": Array [
          Object {
            "description": "name that need to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Update an existent user in the store",
        },
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Update user",
        "tags": Array [
          "user",
        ],
      },
    },
  },
  "servers": Array [
    Object {
      "url": "/api/v3",
    },
  ],
  "tags": Array [
    Object {
      "description": "Everything about your Pets",
      "externalDocs": Object {
        "description": "Find out more",
        "url": "http://swagger.io",
      },
      "name": "pet",
    },
    Object {
      "description": "Operations about user",
      "name": "store",
    },
    Object {
      "description": "Access to Petstore orders",
      "externalDocs": Object {
        "description": "Find out more about our store",
        "url": "http://swagger.io",
      },
      "name": "user",
    },
  ],
}
`;

exports[`v3 Should ignore deprecated: types 1`] = `
"type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

type UpdatePetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Update an existing pet
* Update an existing pet by Id
*/
export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

type UpdatePetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

type UpdatePetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

type UpdatePetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

type UpdatePetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

type UpdatePetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

type AddPetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Add a new pet to the store
* Add a new pet to the store
*/
export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

type AddPetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

type AddPetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

type AddPetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

type AddPetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

type AddPetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by status
* Multiple status values can be provided with comma separated strings
*/
export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by tags
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
*/
export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Find pet by ID
* Returns a single pet
*/
export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
type UpdatePetWithFormResult0 = RequestResult<null>;
/**
* Updates a pet in the store with form data
*/
export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
type DeletePetResult0 = RequestResult<null>;
/**
* Deletes a pet
*/
export function deletePet(params: DeletePetParams0): DeletePetResult0;

type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: string; };
type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
/**
* uploads an image
*/
export function uploadFile(params: UploadFileParams0): UploadFileResult0;

type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
/**
* Returns pet inventories by status
* Returns a map of status codes to quantities
*/
export function getInventory(): GetInventoryResult0;

type PlaceOrderParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
/**
* Place an order for a pet
* Place a new order in the store
*/
export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

type PlaceOrderParams1 = { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

type PlaceOrderParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
/**
* Find purchase order by ID
* For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
*/
export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type DeleteOrderResult0 = RequestResult<null>;
/**
* Delete purchase order by ID
* For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
*/
export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

type CreateUserParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type CreateUserResult0 = RequestResult<null>;
/**
* Create user
* This can only be done by the logged in user.
*/
export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

type CreateUserParams1 = { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type CreateUserResult1 = RequestResult<null>;
export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

type CreateUserParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type CreateUserResult2 = RequestResult<null>;
export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

type CreateUsersWithListInputParams0 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Creates list of users with given input array
* Creates list of users with given input array
*/
export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

type CreateUsersWithListInputParams1 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type LoginUserResult0 = RequestResult<string>;
/**
* Logs user into the system
*/
export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type LoginUserResult1 = RequestResult<string>;
export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

type LogoutUserResult0 = RequestResult<null>;
/**
* Logs out current logged in user session
*/
export function logoutUser(): LogoutUserResult0;

type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Get user by user name
*/
export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type UpdateUserResult0 = RequestResult<null>;
/**
* Update user
* This can only be done by the logged in user.
*/
export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type UpdateUserResult1 = RequestResult<null>;
export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type UpdateUserResult2 = RequestResult<null>;
export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
type DeleteUserResult0 = RequestResult<null>;
/**
* Delete user
* This can only be done by the logged in user.
*/
export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

"
`;

exports[`v3 Should ignore description: code 1`] = `
"export function updatePet(params) {
  return request(\\"put\\", \`/pet\`)(params);
}

export function addPet(params) {
  return request(\\"post\\", \`/pet\`)(params);
}

export function findPetsByStatus(params) {
  return request(\\"get\\", \`/pet/findByStatus\`)(params);
}

export function findPetsByTags(params) {
  return request(\\"get\\", \`/pet/findByTags\`)(params);
}

export function getPetById(params) {
  return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
}

export function updatePetWithForm(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
}

export function deletePet(params) {
  return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
}

export function uploadFile(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
}

export function getInventory() {
  return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
}

export function placeOrder(params) {
  return request(\\"post\\", \`/store/order\`)(params);
}

export function getOrderById(params) {
  return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function deleteOrder(params) {
  return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function createUser(params) {
  return request(\\"post\\", \`/user\`)(params);
}

export function createUsersWithListInput(params) {
  return request(\\"post\\", \`/user/createWithList\`)(params);
}

export function loginUser(params) {
  return request(\\"get\\", \`/user/login\`)(params);
}

export function logoutUser() {
  return request(\\"get\\", \`/user/logout\`)();
}

export function getUserByName(params) {
  return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
}

export function updateUser(params) {
  return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
}

export function deleteUser(params) {
  return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
}

"
`;

exports[`v3 Should ignore description: swagger 1`] = `
Object {
  "components": Object {
    "requestBodies": Object {
      "Pet": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
          "application/xml": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
        },
        "description": "Pet object that needs to be added to the store",
      },
      "UserArray": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "items": Object {
                "$ref": "#/components/schemas/User",
              },
              "type": "array",
            },
          },
        },
        "description": "List of user object",
      },
    },
    "schemas": Object {
      "Address": Object {
        "properties": Object {
          "city": Object {
            "example": "Palo Alto",
            "type": "string",
          },
          "state": Object {
            "example": "CA",
            "type": "string",
          },
          "street": Object {
            "example": "437 Lytton",
            "type": "string",
          },
          "zip": Object {
            "example": "94301",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "address",
        },
      },
      "ApiResponse": Object {
        "properties": Object {
          "code": Object {
            "format": "int32",
            "type": "integer",
          },
          "message": Object {
            "type": "string",
          },
          "type": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "##default",
        },
      },
      "Category": Object {
        "properties": Object {
          "id": Object {
            "example": 1,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "Dogs",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "category",
        },
      },
      "Customer": Object {
        "properties": Object {
          "address": Object {
            "items": Object {
              "$ref": "#/components/schemas/Address",
            },
            "type": "array",
            "xml": Object {
              "name": "addresses",
              "wrapped": true,
            },
          },
          "id": Object {
            "example": 100000,
            "format": "int64",
            "type": "integer",
          },
          "username": Object {
            "example": "fehguy",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "customer",
        },
      },
      "Order": Object {
        "properties": Object {
          "complete": Object {
            "type": "boolean",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "petId": Object {
            "example": 198772,
            "format": "int64",
            "type": "integer",
          },
          "quantity": Object {
            "example": 7,
            "format": "int32",
            "type": "integer",
          },
          "shipDate": Object {
            "format": "date-time",
            "type": "string",
          },
          "status": Object {
            "description": "Order Status",
            "enum": Array [
              "placed",
              "approved",
              "delivered",
            ],
            "example": "approved",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "order",
        },
      },
      "Pet": Object {
        "properties": Object {
          "category": Object {
            "$ref": "#/components/schemas/Category",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "doggie",
            "type": "string",
          },
          "photoUrls": Object {
            "items": Object {
              "type": "string",
              "xml": Object {
                "name": "photoUrl",
              },
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
          "status": Object {
            "description": "pet status in the store",
            "enum": Array [
              "available",
              "pending",
              "sold",
            ],
            "type": "string",
          },
          "tags": Object {
            "items": Object {
              "$ref": "#/components/schemas/Tag",
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
        },
        "required": Array [
          "name",
          "photoUrls",
        ],
        "type": "object",
        "xml": Object {
          "name": "pet",
        },
      },
      "Tag": Object {
        "properties": Object {
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "tag",
        },
      },
      "User": Object {
        "properties": Object {
          "email": Object {
            "example": "john@email.com",
            "type": "string",
          },
          "firstName": Object {
            "example": "John",
            "type": "string",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "lastName": Object {
            "example": "James",
            "type": "string",
          },
          "password": Object {
            "example": "12345",
            "type": "string",
          },
          "phone": Object {
            "example": "12345",
            "type": "string",
          },
          "userStatus": Object {
            "description": "User Status",
            "example": 1,
            "format": "int32",
            "type": "integer",
          },
          "username": Object {
            "example": "theUser",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "user",
        },
      },
    },
    "securitySchemes": Object {
      "api_key": Object {
        "in": "header",
        "name": "api_key",
        "type": "apiKey",
      },
      "petstore_auth": Object {
        "flows": Object {
          "implicit": Object {
            "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
            "scopes": Object {
              "read:pets": "read your pets",
              "write:pets": "modify pets in your account",
            },
          },
        },
        "type": "oauth2",
      },
    },
  },
  "externalDocs": Object {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io",
  },
  "info": Object {
    "contact": Object {
      "email": "apiteam@swagger.io",
    },
    "description": "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml) ",
    "license": Object {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    "termsOfService": "http://swagger.io/terms/",
    "title": "Swagger Petstore - OpenAPI 3.0",
    "version": "1.0.4",
  },
  "openapi": "3.0.2",
  "paths": Object {
    "/pet": Object {
      "post": Object {
        "description": "Add a new pet to the store",
        "operationId": "addPet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Create a new pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Add a new pet to the store",
        "tags": Array [
          "pet",
        ],
      },
      "put": Object {
        "description": "Update an existing pet by Id",
        "operationId": "updatePet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Update an existent pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
          "405": Object {
            "description": "Validation exception",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Update an existing pet",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByStatus": Object {
      "get": Object {
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": Array [
          Object {
            "description": "Status values that need to be considered for filter",
            "explode": true,
            "in": "query",
            "name": "status",
            "required": false,
            "schema": Object {
              "default": "available",
              "enum": Array [
                "available",
                "pending",
                "sold",
              ],
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid status value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by status",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByTags": Object {
      "get": Object {
        "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
        "operationId": "findPetsByTags",
        "parameters": Array [
          Object {
            "description": "Tags to filter by",
            "explode": true,
            "in": "query",
            "name": "tags",
            "required": false,
            "schema": Object {
              "items": Object {
                "type": "string",
              },
              "type": "array",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid tag value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by tags",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}": Object {
      "delete": Object {
        "description": "",
        "operationId": "deletePet",
        "parameters": Array [
          Object {
            "description": "",
            "in": "header",
            "name": "api_key",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Pet id to delete",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid pet value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Deletes a pet",
        "tags": Array [
          "pet",
        ],
      },
      "get": Object {
        "description": "Returns a single pet",
        "operationId": "getPetById",
        "parameters": Array [
          Object {
            "description": "ID of pet to return",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Find pet by ID",
        "tags": Array [
          "pet",
        ],
      },
      "post": Object {
        "description": "",
        "operationId": "updatePetWithForm",
        "parameters": Array [
          Object {
            "description": "ID of pet that needs to be updated",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Name of pet that needs to be updated",
            "in": "query",
            "name": "name",
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Status of pet that needs to be updated",
            "in": "query",
            "name": "status",
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Updates a pet in the store with form data",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}/uploadImage": Object {
      "post": Object {
        "description": "",
        "operationId": "uploadFile",
        "parameters": Array [
          Object {
            "description": "ID of pet to update",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Additional Metadata",
            "in": "query",
            "name": "additionalMetadata",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/octet-stream": Object {
              "schema": Object {
                "format": "binary",
                "type": "string",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/ApiResponse",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "uploads an image",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/store/inventory": Object {
      "get": Object {
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "additionalProperties": Object {
                    "format": "int32",
                    "type": "integer",
                  },
                  "type": "object",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
        ],
        "summary": "Returns pet inventories by status",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order": Object {
      "post": Object {
        "description": "Place a new order in the store",
        "operationId": "placeOrder",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "summary": "Place an order for a pet",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order/{orderId}": Object {
      "delete": Object {
        "description": "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
        "operationId": "deleteOrder",
        "parameters": Array [
          Object {
            "description": "ID of the order that needs to be deleted",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Delete purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
      "get": Object {
        "description": "For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",
        "operationId": "getOrderById",
        "parameters": Array [
          Object {
            "description": "ID of order that needs to be fetched",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Find purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
    },
    "/user": Object {
      "post": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Created user object",
        },
        "responses": Object {
          "default": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "summary": "Create user",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/createWithList": Object {
      "post": Object {
        "description": "Creates list of users with given input array",
        "operationId": "createUsersWithListInput",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "items": Object {
                  "$ref": "#/components/schemas/User",
                },
                "type": "array",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "Successful operation",
          },
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Creates list of users with given input array",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/login": Object {
      "get": Object {
        "description": "",
        "operationId": "loginUser",
        "parameters": Array [
          Object {
            "description": "The user name for login",
            "in": "query",
            "name": "username",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "The password for login in clear text",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "type": "string",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "type": "string",
                },
              },
            },
            "description": "successful operation",
            "headers": Object {
              "X-Expires-After": Object {
                "description": "date in UTC when toekn expires",
                "schema": Object {
                  "format": "date-time",
                  "type": "string",
                },
              },
              "X-Rate-Limit": Object {
                "description": "calls per hour allowed by the user",
                "schema": Object {
                  "format": "int32",
                  "type": "integer",
                },
              },
            },
          },
          "400": Object {
            "description": "Invalid username/password supplied",
          },
        },
        "summary": "Logs user into the system",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/logout": Object {
      "get": Object {
        "description": "",
        "operationId": "logoutUser",
        "parameters": Array [],
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Logs out current logged in user session",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/{username}": Object {
      "delete": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "parameters": Array [
          Object {
            "description": "The name that needs to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Delete user",
        "tags": Array [
          "user",
        ],
      },
      "get": Object {
        "description": "",
        "operationId": "getUserByName",
        "parameters": Array [
          Object {
            "description": "The name that needs to be fetched. Use user1 for testing. ",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Get user by user name",
        "tags": Array [
          "user",
        ],
      },
      "put": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "parameters": Array [
          Object {
            "description": "name that need to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Update an existent user in the store",
        },
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Update user",
        "tags": Array [
          "user",
        ],
      },
    },
  },
  "servers": Array [
    Object {
      "url": "/api/v3",
    },
  ],
  "tags": Array [
    Object {
      "description": "Everything about your Pets",
      "externalDocs": Object {
        "description": "Find out more",
        "url": "http://swagger.io",
      },
      "name": "pet",
    },
    Object {
      "description": "Operations about user",
      "name": "store",
    },
    Object {
      "description": "Access to Petstore orders",
      "externalDocs": Object {
        "description": "Find out more about our store",
        "url": "http://swagger.io",
      },
      "name": "user",
    },
  ],
}
`;

exports[`v3 Should ignore description: types 1`] = `
"type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

type UpdatePetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

type UpdatePetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

type UpdatePetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

type UpdatePetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

type UpdatePetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

type UpdatePetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

type AddPetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

type AddPetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

type AddPetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

type AddPetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

type AddPetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

type AddPetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
type UpdatePetWithFormResult0 = RequestResult<null>;
export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
type DeletePetResult0 = RequestResult<null>;
export function deletePet(params: DeletePetParams0): DeletePetResult0;

type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: string; };
type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
export function uploadFile(params: UploadFileParams0): UploadFileResult0;

type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
export function getInventory(): GetInventoryResult0;

type PlaceOrderParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

type PlaceOrderParams1 = { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

type PlaceOrderParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type DeleteOrderResult0 = RequestResult<null>;
export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

type CreateUserParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type CreateUserResult0 = RequestResult<null>;
export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

type CreateUserParams1 = { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type CreateUserResult1 = RequestResult<null>;
export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

type CreateUserParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type CreateUserResult2 = RequestResult<null>;
export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

type CreateUsersWithListInputParams0 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

type CreateUsersWithListInputParams1 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type LoginUserResult0 = RequestResult<string>;
export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type LoginUserResult1 = RequestResult<string>;
export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

type LogoutUserResult0 = RequestResult<null>;
export function logoutUser(): LogoutUserResult0;

type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type UpdateUserResult0 = RequestResult<null>;
export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type UpdateUserResult1 = RequestResult<null>;
export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type UpdateUserResult2 = RequestResult<null>;
export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
type DeleteUserResult0 = RequestResult<null>;
export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

"
`;

exports[`v3 Should import request on disabled: code 1`] = `
"export function updatePet(params) {
  return request(\\"put\\", \`/pet\`)(params);
}

export function addPet(params) {
  return request(\\"post\\", \`/pet\`)(params);
}

export function findPetsByStatus(params) {
  return request(\\"get\\", \`/pet/findByStatus\`)(params);
}

export function findPetsByTags(params) {
  return request(\\"get\\", \`/pet/findByTags\`)(params);
}

export function getPetById(params) {
  return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
}

export function updatePetWithForm(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
}

export function deletePet(params) {
  return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
}

export function uploadFile(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
}

export function getInventory() {
  return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
}

export function placeOrder(params) {
  return request(\\"post\\", \`/store/order\`)(params);
}

export function getOrderById(params) {
  return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function deleteOrder(params) {
  return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function createUser(params) {
  return request(\\"post\\", \`/user\`)(params);
}

export function createUsersWithListInput(params) {
  return request(\\"post\\", \`/user/createWithList\`)(params);
}

export function loginUser(params) {
  return request(\\"get\\", \`/user/login\`)(params);
}

export function logoutUser() {
  return request(\\"get\\", \`/user/logout\`)();
}

export function getUserByName(params) {
  return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
}

export function updateUser(params) {
  return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
}

export function deleteUser(params) {
  return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
}

"
`;

exports[`v3 Should import request on disabled: swagger 1`] = `
Object {
  "components": Object {
    "requestBodies": Object {
      "Pet": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
          "application/xml": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
        },
        "description": "Pet object that needs to be added to the store",
      },
      "UserArray": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "items": Object {
                "$ref": "#/components/schemas/User",
              },
              "type": "array",
            },
          },
        },
        "description": "List of user object",
      },
    },
    "schemas": Object {
      "Address": Object {
        "properties": Object {
          "city": Object {
            "example": "Palo Alto",
            "type": "string",
          },
          "state": Object {
            "example": "CA",
            "type": "string",
          },
          "street": Object {
            "example": "437 Lytton",
            "type": "string",
          },
          "zip": Object {
            "example": "94301",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "address",
        },
      },
      "ApiResponse": Object {
        "properties": Object {
          "code": Object {
            "format": "int32",
            "type": "integer",
          },
          "message": Object {
            "type": "string",
          },
          "type": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "##default",
        },
      },
      "Category": Object {
        "properties": Object {
          "id": Object {
            "example": 1,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "Dogs",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "category",
        },
      },
      "Customer": Object {
        "properties": Object {
          "address": Object {
            "items": Object {
              "$ref": "#/components/schemas/Address",
            },
            "type": "array",
            "xml": Object {
              "name": "addresses",
              "wrapped": true,
            },
          },
          "id": Object {
            "example": 100000,
            "format": "int64",
            "type": "integer",
          },
          "username": Object {
            "example": "fehguy",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "customer",
        },
      },
      "Order": Object {
        "properties": Object {
          "complete": Object {
            "type": "boolean",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "petId": Object {
            "example": 198772,
            "format": "int64",
            "type": "integer",
          },
          "quantity": Object {
            "example": 7,
            "format": "int32",
            "type": "integer",
          },
          "shipDate": Object {
            "format": "date-time",
            "type": "string",
          },
          "status": Object {
            "description": "Order Status",
            "enum": Array [
              "placed",
              "approved",
              "delivered",
            ],
            "example": "approved",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "order",
        },
      },
      "Pet": Object {
        "properties": Object {
          "category": Object {
            "$ref": "#/components/schemas/Category",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "doggie",
            "type": "string",
          },
          "photoUrls": Object {
            "items": Object {
              "type": "string",
              "xml": Object {
                "name": "photoUrl",
              },
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
          "status": Object {
            "description": "pet status in the store",
            "enum": Array [
              "available",
              "pending",
              "sold",
            ],
            "type": "string",
          },
          "tags": Object {
            "items": Object {
              "$ref": "#/components/schemas/Tag",
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
        },
        "required": Array [
          "name",
          "photoUrls",
        ],
        "type": "object",
        "xml": Object {
          "name": "pet",
        },
      },
      "Tag": Object {
        "properties": Object {
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "tag",
        },
      },
      "User": Object {
        "properties": Object {
          "email": Object {
            "example": "john@email.com",
            "type": "string",
          },
          "firstName": Object {
            "example": "John",
            "type": "string",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "lastName": Object {
            "example": "James",
            "type": "string",
          },
          "password": Object {
            "example": "12345",
            "type": "string",
          },
          "phone": Object {
            "example": "12345",
            "type": "string",
          },
          "userStatus": Object {
            "description": "User Status",
            "example": 1,
            "format": "int32",
            "type": "integer",
          },
          "username": Object {
            "example": "theUser",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "user",
        },
      },
    },
    "securitySchemes": Object {
      "api_key": Object {
        "in": "header",
        "name": "api_key",
        "type": "apiKey",
      },
      "petstore_auth": Object {
        "flows": Object {
          "implicit": Object {
            "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
            "scopes": Object {
              "read:pets": "read your pets",
              "write:pets": "modify pets in your account",
            },
          },
        },
        "type": "oauth2",
      },
    },
  },
  "externalDocs": Object {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io",
  },
  "info": Object {
    "contact": Object {
      "email": "apiteam@swagger.io",
    },
    "description": "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml) ",
    "license": Object {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    "termsOfService": "http://swagger.io/terms/",
    "title": "Swagger Petstore - OpenAPI 3.0",
    "version": "1.0.4",
  },
  "openapi": "3.0.2",
  "paths": Object {
    "/pet": Object {
      "post": Object {
        "description": "Add a new pet to the store",
        "operationId": "addPet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Create a new pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Add a new pet to the store",
        "tags": Array [
          "pet",
        ],
      },
      "put": Object {
        "description": "Update an existing pet by Id",
        "operationId": "updatePet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Update an existent pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
          "405": Object {
            "description": "Validation exception",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Update an existing pet",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByStatus": Object {
      "get": Object {
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": Array [
          Object {
            "description": "Status values that need to be considered for filter",
            "explode": true,
            "in": "query",
            "name": "status",
            "required": false,
            "schema": Object {
              "default": "available",
              "enum": Array [
                "available",
                "pending",
                "sold",
              ],
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid status value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by status",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByTags": Object {
      "get": Object {
        "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
        "operationId": "findPetsByTags",
        "parameters": Array [
          Object {
            "description": "Tags to filter by",
            "explode": true,
            "in": "query",
            "name": "tags",
            "required": false,
            "schema": Object {
              "items": Object {
                "type": "string",
              },
              "type": "array",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid tag value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by tags",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}": Object {
      "delete": Object {
        "description": "",
        "operationId": "deletePet",
        "parameters": Array [
          Object {
            "description": "",
            "in": "header",
            "name": "api_key",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Pet id to delete",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid pet value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Deletes a pet",
        "tags": Array [
          "pet",
        ],
      },
      "get": Object {
        "description": "Returns a single pet",
        "operationId": "getPetById",
        "parameters": Array [
          Object {
            "description": "ID of pet to return",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Find pet by ID",
        "tags": Array [
          "pet",
        ],
      },
      "post": Object {
        "description": "",
        "operationId": "updatePetWithForm",
        "parameters": Array [
          Object {
            "description": "ID of pet that needs to be updated",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Name of pet that needs to be updated",
            "in": "query",
            "name": "name",
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Status of pet that needs to be updated",
            "in": "query",
            "name": "status",
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Updates a pet in the store with form data",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}/uploadImage": Object {
      "post": Object {
        "description": "",
        "operationId": "uploadFile",
        "parameters": Array [
          Object {
            "description": "ID of pet to update",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Additional Metadata",
            "in": "query",
            "name": "additionalMetadata",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/octet-stream": Object {
              "schema": Object {
                "format": "binary",
                "type": "string",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/ApiResponse",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "uploads an image",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/store/inventory": Object {
      "get": Object {
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "additionalProperties": Object {
                    "format": "int32",
                    "type": "integer",
                  },
                  "type": "object",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
        ],
        "summary": "Returns pet inventories by status",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order": Object {
      "post": Object {
        "description": "Place a new order in the store",
        "operationId": "placeOrder",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "summary": "Place an order for a pet",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order/{orderId}": Object {
      "delete": Object {
        "description": "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
        "operationId": "deleteOrder",
        "parameters": Array [
          Object {
            "description": "ID of the order that needs to be deleted",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Delete purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
      "get": Object {
        "description": "For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",
        "operationId": "getOrderById",
        "parameters": Array [
          Object {
            "description": "ID of order that needs to be fetched",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Find purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
    },
    "/user": Object {
      "post": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Created user object",
        },
        "responses": Object {
          "default": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "summary": "Create user",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/createWithList": Object {
      "post": Object {
        "description": "Creates list of users with given input array",
        "operationId": "createUsersWithListInput",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "items": Object {
                  "$ref": "#/components/schemas/User",
                },
                "type": "array",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "Successful operation",
          },
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Creates list of users with given input array",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/login": Object {
      "get": Object {
        "description": "",
        "operationId": "loginUser",
        "parameters": Array [
          Object {
            "description": "The user name for login",
            "in": "query",
            "name": "username",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "The password for login in clear text",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "type": "string",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "type": "string",
                },
              },
            },
            "description": "successful operation",
            "headers": Object {
              "X-Expires-After": Object {
                "description": "date in UTC when toekn expires",
                "schema": Object {
                  "format": "date-time",
                  "type": "string",
                },
              },
              "X-Rate-Limit": Object {
                "description": "calls per hour allowed by the user",
                "schema": Object {
                  "format": "int32",
                  "type": "integer",
                },
              },
            },
          },
          "400": Object {
            "description": "Invalid username/password supplied",
          },
        },
        "summary": "Logs user into the system",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/logout": Object {
      "get": Object {
        "description": "",
        "operationId": "logoutUser",
        "parameters": Array [],
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Logs out current logged in user session",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/{username}": Object {
      "delete": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "parameters": Array [
          Object {
            "description": "The name that needs to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Delete user",
        "tags": Array [
          "user",
        ],
      },
      "get": Object {
        "description": "",
        "operationId": "getUserByName",
        "parameters": Array [
          Object {
            "description": "The name that needs to be fetched. Use user1 for testing. ",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Get user by user name",
        "tags": Array [
          "user",
        ],
      },
      "put": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "parameters": Array [
          Object {
            "description": "name that need to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Update an existent user in the store",
        },
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Update user",
        "tags": Array [
          "user",
        ],
      },
    },
  },
  "servers": Array [
    Object {
      "url": "/api/v3",
    },
  ],
  "tags": Array [
    Object {
      "description": "Everything about your Pets",
      "externalDocs": Object {
        "description": "Find out more",
        "url": "http://swagger.io",
      },
      "name": "pet",
    },
    Object {
      "description": "Operations about user",
      "name": "store",
    },
    Object {
      "description": "Access to Petstore orders",
      "externalDocs": Object {
        "description": "Find out more about our store",
        "url": "http://swagger.io",
      },
      "name": "user",
    },
  ],
}
`;

exports[`v3 Should import request on disabled: types 1`] = `
"type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

type UpdatePetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Update an existing pet
* Update an existing pet by Id
*/
export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

type UpdatePetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

type UpdatePetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

type UpdatePetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

type UpdatePetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

type UpdatePetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

type AddPetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Add a new pet to the store
* Add a new pet to the store
*/
export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

type AddPetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

type AddPetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

type AddPetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

type AddPetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

type AddPetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by status
* Multiple status values can be provided with comma separated strings
*/
export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by tags
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
*/
export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Find pet by ID
* Returns a single pet
*/
export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
type UpdatePetWithFormResult0 = RequestResult<null>;
/**
* Updates a pet in the store with form data
*/
export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
type DeletePetResult0 = RequestResult<null>;
/**
* Deletes a pet
*/
export function deletePet(params: DeletePetParams0): DeletePetResult0;

type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: string; };
type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
/**
* uploads an image
*/
export function uploadFile(params: UploadFileParams0): UploadFileResult0;

type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
/**
* Returns pet inventories by status
* Returns a map of status codes to quantities
*/
export function getInventory(): GetInventoryResult0;

type PlaceOrderParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
/**
* Place an order for a pet
* Place a new order in the store
*/
export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

type PlaceOrderParams1 = { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

type PlaceOrderParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
/**
* Find purchase order by ID
* For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
*/
export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type DeleteOrderResult0 = RequestResult<null>;
/**
* Delete purchase order by ID
* For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
*/
export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

type CreateUserParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type CreateUserResult0 = RequestResult<null>;
/**
* Create user
* This can only be done by the logged in user.
*/
export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

type CreateUserParams1 = { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type CreateUserResult1 = RequestResult<null>;
export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

type CreateUserParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type CreateUserResult2 = RequestResult<null>;
export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

type CreateUsersWithListInputParams0 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Creates list of users with given input array
* Creates list of users with given input array
*/
export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

type CreateUsersWithListInputParams1 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type LoginUserResult0 = RequestResult<string>;
/**
* Logs user into the system
*/
export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type LoginUserResult1 = RequestResult<string>;
export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

type LogoutUserResult0 = RequestResult<null>;
/**
* Logs out current logged in user session
*/
export function logoutUser(): LogoutUserResult0;

type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Get user by user name
*/
export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type UpdateUserResult0 = RequestResult<null>;
/**
* Update user
* This can only be done by the logged in user.
*/
export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type UpdateUserResult1 = RequestResult<null>;
export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type UpdateUserResult2 = RequestResult<null>;
export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
type DeleteUserResult0 = RequestResult<null>;
/**
* Delete user
* This can only be done by the logged in user.
*/
export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

"
`;

exports[`v3 Should import request on false: code 1`] = `
"export function updatePet(params) {
  return request(\\"put\\", \`/pet\`)(params);
}

export function addPet(params) {
  return request(\\"post\\", \`/pet\`)(params);
}

export function findPetsByStatus(params) {
  return request(\\"get\\", \`/pet/findByStatus\`)(params);
}

export function findPetsByTags(params) {
  return request(\\"get\\", \`/pet/findByTags\`)(params);
}

export function getPetById(params) {
  return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
}

export function updatePetWithForm(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
}

export function deletePet(params) {
  return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
}

export function uploadFile(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
}

export function getInventory() {
  return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
}

export function placeOrder(params) {
  return request(\\"post\\", \`/store/order\`)(params);
}

export function getOrderById(params) {
  return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function deleteOrder(params) {
  return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function createUser(params) {
  return request(\\"post\\", \`/user\`)(params);
}

export function createUsersWithListInput(params) {
  return request(\\"post\\", \`/user/createWithList\`)(params);
}

export function loginUser(params) {
  return request(\\"get\\", \`/user/login\`)(params);
}

export function logoutUser() {
  return request(\\"get\\", \`/user/logout\`)();
}

export function getUserByName(params) {
  return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
}

export function updateUser(params) {
  return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
}

export function deleteUser(params) {
  return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
}

"
`;

exports[`v3 Should import request on false: swagger 1`] = `
Object {
  "components": Object {
    "requestBodies": Object {
      "Pet": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
          "application/xml": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
        },
        "description": "Pet object that needs to be added to the store",
      },
      "UserArray": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "items": Object {
                "$ref": "#/components/schemas/User",
              },
              "type": "array",
            },
          },
        },
        "description": "List of user object",
      },
    },
    "schemas": Object {
      "Address": Object {
        "properties": Object {
          "city": Object {
            "example": "Palo Alto",
            "type": "string",
          },
          "state": Object {
            "example": "CA",
            "type": "string",
          },
          "street": Object {
            "example": "437 Lytton",
            "type": "string",
          },
          "zip": Object {
            "example": "94301",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "address",
        },
      },
      "ApiResponse": Object {
        "properties": Object {
          "code": Object {
            "format": "int32",
            "type": "integer",
          },
          "message": Object {
            "type": "string",
          },
          "type": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "##default",
        },
      },
      "Category": Object {
        "properties": Object {
          "id": Object {
            "example": 1,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "Dogs",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "category",
        },
      },
      "Customer": Object {
        "properties": Object {
          "address": Object {
            "items": Object {
              "$ref": "#/components/schemas/Address",
            },
            "type": "array",
            "xml": Object {
              "name": "addresses",
              "wrapped": true,
            },
          },
          "id": Object {
            "example": 100000,
            "format": "int64",
            "type": "integer",
          },
          "username": Object {
            "example": "fehguy",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "customer",
        },
      },
      "Order": Object {
        "properties": Object {
          "complete": Object {
            "type": "boolean",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "petId": Object {
            "example": 198772,
            "format": "int64",
            "type": "integer",
          },
          "quantity": Object {
            "example": 7,
            "format": "int32",
            "type": "integer",
          },
          "shipDate": Object {
            "format": "date-time",
            "type": "string",
          },
          "status": Object {
            "description": "Order Status",
            "enum": Array [
              "placed",
              "approved",
              "delivered",
            ],
            "example": "approved",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "order",
        },
      },
      "Pet": Object {
        "properties": Object {
          "category": Object {
            "$ref": "#/components/schemas/Category",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "doggie",
            "type": "string",
          },
          "photoUrls": Object {
            "items": Object {
              "type": "string",
              "xml": Object {
                "name": "photoUrl",
              },
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
          "status": Object {
            "description": "pet status in the store",
            "enum": Array [
              "available",
              "pending",
              "sold",
            ],
            "type": "string",
          },
          "tags": Object {
            "items": Object {
              "$ref": "#/components/schemas/Tag",
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
        },
        "required": Array [
          "name",
          "photoUrls",
        ],
        "type": "object",
        "xml": Object {
          "name": "pet",
        },
      },
      "Tag": Object {
        "properties": Object {
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "tag",
        },
      },
      "User": Object {
        "properties": Object {
          "email": Object {
            "example": "john@email.com",
            "type": "string",
          },
          "firstName": Object {
            "example": "John",
            "type": "string",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "lastName": Object {
            "example": "James",
            "type": "string",
          },
          "password": Object {
            "example": "12345",
            "type": "string",
          },
          "phone": Object {
            "example": "12345",
            "type": "string",
          },
          "userStatus": Object {
            "description": "User Status",
            "example": 1,
            "format": "int32",
            "type": "integer",
          },
          "username": Object {
            "example": "theUser",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "user",
        },
      },
    },
    "securitySchemes": Object {
      "api_key": Object {
        "in": "header",
        "name": "api_key",
        "type": "apiKey",
      },
      "petstore_auth": Object {
        "flows": Object {
          "implicit": Object {
            "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
            "scopes": Object {
              "read:pets": "read your pets",
              "write:pets": "modify pets in your account",
            },
          },
        },
        "type": "oauth2",
      },
    },
  },
  "externalDocs": Object {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io",
  },
  "info": Object {
    "contact": Object {
      "email": "apiteam@swagger.io",
    },
    "description": "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml) ",
    "license": Object {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    "termsOfService": "http://swagger.io/terms/",
    "title": "Swagger Petstore - OpenAPI 3.0",
    "version": "1.0.4",
  },
  "openapi": "3.0.2",
  "paths": Object {
    "/pet": Object {
      "post": Object {
        "description": "Add a new pet to the store",
        "operationId": "addPet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Create a new pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Add a new pet to the store",
        "tags": Array [
          "pet",
        ],
      },
      "put": Object {
        "description": "Update an existing pet by Id",
        "operationId": "updatePet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Update an existent pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
          "405": Object {
            "description": "Validation exception",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Update an existing pet",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByStatus": Object {
      "get": Object {
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": Array [
          Object {
            "description": "Status values that need to be considered for filter",
            "explode": true,
            "in": "query",
            "name": "status",
            "required": false,
            "schema": Object {
              "default": "available",
              "enum": Array [
                "available",
                "pending",
                "sold",
              ],
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid status value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by status",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByTags": Object {
      "get": Object {
        "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
        "operationId": "findPetsByTags",
        "parameters": Array [
          Object {
            "description": "Tags to filter by",
            "explode": true,
            "in": "query",
            "name": "tags",
            "required": false,
            "schema": Object {
              "items": Object {
                "type": "string",
              },
              "type": "array",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid tag value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by tags",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}": Object {
      "delete": Object {
        "description": "",
        "operationId": "deletePet",
        "parameters": Array [
          Object {
            "description": "",
            "in": "header",
            "name": "api_key",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Pet id to delete",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid pet value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Deletes a pet",
        "tags": Array [
          "pet",
        ],
      },
      "get": Object {
        "description": "Returns a single pet",
        "operationId": "getPetById",
        "parameters": Array [
          Object {
            "description": "ID of pet to return",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Find pet by ID",
        "tags": Array [
          "pet",
        ],
      },
      "post": Object {
        "description": "",
        "operationId": "updatePetWithForm",
        "parameters": Array [
          Object {
            "description": "ID of pet that needs to be updated",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Name of pet that needs to be updated",
            "in": "query",
            "name": "name",
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Status of pet that needs to be updated",
            "in": "query",
            "name": "status",
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Updates a pet in the store with form data",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}/uploadImage": Object {
      "post": Object {
        "description": "",
        "operationId": "uploadFile",
        "parameters": Array [
          Object {
            "description": "ID of pet to update",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Additional Metadata",
            "in": "query",
            "name": "additionalMetadata",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/octet-stream": Object {
              "schema": Object {
                "format": "binary",
                "type": "string",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/ApiResponse",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "uploads an image",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/store/inventory": Object {
      "get": Object {
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "additionalProperties": Object {
                    "format": "int32",
                    "type": "integer",
                  },
                  "type": "object",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
        ],
        "summary": "Returns pet inventories by status",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order": Object {
      "post": Object {
        "description": "Place a new order in the store",
        "operationId": "placeOrder",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "summary": "Place an order for a pet",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order/{orderId}": Object {
      "delete": Object {
        "description": "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
        "operationId": "deleteOrder",
        "parameters": Array [
          Object {
            "description": "ID of the order that needs to be deleted",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Delete purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
      "get": Object {
        "description": "For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",
        "operationId": "getOrderById",
        "parameters": Array [
          Object {
            "description": "ID of order that needs to be fetched",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Find purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
    },
    "/user": Object {
      "post": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Created user object",
        },
        "responses": Object {
          "default": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "summary": "Create user",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/createWithList": Object {
      "post": Object {
        "description": "Creates list of users with given input array",
        "operationId": "createUsersWithListInput",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "items": Object {
                  "$ref": "#/components/schemas/User",
                },
                "type": "array",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "Successful operation",
          },
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Creates list of users with given input array",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/login": Object {
      "get": Object {
        "description": "",
        "operationId": "loginUser",
        "parameters": Array [
          Object {
            "description": "The user name for login",
            "in": "query",
            "name": "username",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "The password for login in clear text",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "type": "string",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "type": "string",
                },
              },
            },
            "description": "successful operation",
            "headers": Object {
              "X-Expires-After": Object {
                "description": "date in UTC when toekn expires",
                "schema": Object {
                  "format": "date-time",
                  "type": "string",
                },
              },
              "X-Rate-Limit": Object {
                "description": "calls per hour allowed by the user",
                "schema": Object {
                  "format": "int32",
                  "type": "integer",
                },
              },
            },
          },
          "400": Object {
            "description": "Invalid username/password supplied",
          },
        },
        "summary": "Logs user into the system",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/logout": Object {
      "get": Object {
        "description": "",
        "operationId": "logoutUser",
        "parameters": Array [],
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Logs out current logged in user session",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/{username}": Object {
      "delete": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "parameters": Array [
          Object {
            "description": "The name that needs to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Delete user",
        "tags": Array [
          "user",
        ],
      },
      "get": Object {
        "description": "",
        "operationId": "getUserByName",
        "parameters": Array [
          Object {
            "description": "The name that needs to be fetched. Use user1 for testing. ",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Get user by user name",
        "tags": Array [
          "user",
        ],
      },
      "put": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "parameters": Array [
          Object {
            "description": "name that need to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Update an existent user in the store",
        },
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Update user",
        "tags": Array [
          "user",
        ],
      },
    },
  },
  "servers": Array [
    Object {
      "url": "/api/v3",
    },
  ],
  "tags": Array [
    Object {
      "description": "Everything about your Pets",
      "externalDocs": Object {
        "description": "Find out more",
        "url": "http://swagger.io",
      },
      "name": "pet",
    },
    Object {
      "description": "Operations about user",
      "name": "store",
    },
    Object {
      "description": "Access to Petstore orders",
      "externalDocs": Object {
        "description": "Find out more about our store",
        "url": "http://swagger.io",
      },
      "name": "user",
    },
  ],
}
`;

exports[`v3 Should import request on false: types 1`] = `
"type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

type UpdatePetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Update an existing pet
* Update an existing pet by Id
*/
export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

type UpdatePetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

type UpdatePetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

type UpdatePetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

type UpdatePetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

type UpdatePetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

type AddPetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Add a new pet to the store
* Add a new pet to the store
*/
export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

type AddPetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

type AddPetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

type AddPetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

type AddPetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

type AddPetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by status
* Multiple status values can be provided with comma separated strings
*/
export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by tags
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
*/
export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Find pet by ID
* Returns a single pet
*/
export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
type UpdatePetWithFormResult0 = RequestResult<null>;
/**
* Updates a pet in the store with form data
*/
export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
type DeletePetResult0 = RequestResult<null>;
/**
* Deletes a pet
*/
export function deletePet(params: DeletePetParams0): DeletePetResult0;

type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: string; };
type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
/**
* uploads an image
*/
export function uploadFile(params: UploadFileParams0): UploadFileResult0;

type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
/**
* Returns pet inventories by status
* Returns a map of status codes to quantities
*/
export function getInventory(): GetInventoryResult0;

type PlaceOrderParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
/**
* Place an order for a pet
* Place a new order in the store
*/
export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

type PlaceOrderParams1 = { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

type PlaceOrderParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
/**
* Find purchase order by ID
* For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
*/
export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type DeleteOrderResult0 = RequestResult<null>;
/**
* Delete purchase order by ID
* For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
*/
export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

type CreateUserParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type CreateUserResult0 = RequestResult<null>;
/**
* Create user
* This can only be done by the logged in user.
*/
export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

type CreateUserParams1 = { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type CreateUserResult1 = RequestResult<null>;
export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

type CreateUserParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type CreateUserResult2 = RequestResult<null>;
export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

type CreateUsersWithListInputParams0 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Creates list of users with given input array
* Creates list of users with given input array
*/
export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

type CreateUsersWithListInputParams1 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type LoginUserResult0 = RequestResult<string>;
/**
* Logs user into the system
*/
export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type LoginUserResult1 = RequestResult<string>;
export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

type LogoutUserResult0 = RequestResult<null>;
/**
* Logs out current logged in user session
*/
export function logoutUser(): LogoutUserResult0;

type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Get user by user name
*/
export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type UpdateUserResult0 = RequestResult<null>;
/**
* Update user
* This can only be done by the logged in user.
*/
export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type UpdateUserResult1 = RequestResult<null>;
export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type UpdateUserResult2 = RequestResult<null>;
export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
type DeleteUserResult0 = RequestResult<null>;
/**
* Delete user
* This can only be done by the logged in user.
*/
export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

"
`;

exports[`v3 Should import request on true: code 1`] = `
"export function updatePet(params) {
  return request(\\"put\\", \`/pet\`)(params);
}

export function addPet(params) {
  return request(\\"post\\", \`/pet\`)(params);
}

export function findPetsByStatus(params) {
  return request(\\"get\\", \`/pet/findByStatus\`)(params);
}

export function findPetsByTags(params) {
  return request(\\"get\\", \`/pet/findByTags\`)(params);
}

export function getPetById(params) {
  return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
}

export function updatePetWithForm(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
}

export function deletePet(params) {
  return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
}

export function uploadFile(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
}

export function getInventory() {
  return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
}

export function placeOrder(params) {
  return request(\\"post\\", \`/store/order\`)(params);
}

export function getOrderById(params) {
  return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function deleteOrder(params) {
  return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function createUser(params) {
  return request(\\"post\\", \`/user\`)(params);
}

export function createUsersWithListInput(params) {
  return request(\\"post\\", \`/user/createWithList\`)(params);
}

export function loginUser(params) {
  return request(\\"get\\", \`/user/login\`)(params);
}

export function logoutUser() {
  return request(\\"get\\", \`/user/logout\`)();
}

export function getUserByName(params) {
  return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
}

export function updateUser(params) {
  return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
}

export function deleteUser(params) {
  return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
}

"
`;

exports[`v3 Should import request on true: swagger 1`] = `
Object {
  "components": Object {
    "requestBodies": Object {
      "Pet": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
          "application/xml": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
        },
        "description": "Pet object that needs to be added to the store",
      },
      "UserArray": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "items": Object {
                "$ref": "#/components/schemas/User",
              },
              "type": "array",
            },
          },
        },
        "description": "List of user object",
      },
    },
    "schemas": Object {
      "Address": Object {
        "properties": Object {
          "city": Object {
            "example": "Palo Alto",
            "type": "string",
          },
          "state": Object {
            "example": "CA",
            "type": "string",
          },
          "street": Object {
            "example": "437 Lytton",
            "type": "string",
          },
          "zip": Object {
            "example": "94301",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "address",
        },
      },
      "ApiResponse": Object {
        "properties": Object {
          "code": Object {
            "format": "int32",
            "type": "integer",
          },
          "message": Object {
            "type": "string",
          },
          "type": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "##default",
        },
      },
      "Category": Object {
        "properties": Object {
          "id": Object {
            "example": 1,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "Dogs",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "category",
        },
      },
      "Customer": Object {
        "properties": Object {
          "address": Object {
            "items": Object {
              "$ref": "#/components/schemas/Address",
            },
            "type": "array",
            "xml": Object {
              "name": "addresses",
              "wrapped": true,
            },
          },
          "id": Object {
            "example": 100000,
            "format": "int64",
            "type": "integer",
          },
          "username": Object {
            "example": "fehguy",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "customer",
        },
      },
      "Order": Object {
        "properties": Object {
          "complete": Object {
            "type": "boolean",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "petId": Object {
            "example": 198772,
            "format": "int64",
            "type": "integer",
          },
          "quantity": Object {
            "example": 7,
            "format": "int32",
            "type": "integer",
          },
          "shipDate": Object {
            "format": "date-time",
            "type": "string",
          },
          "status": Object {
            "description": "Order Status",
            "enum": Array [
              "placed",
              "approved",
              "delivered",
            ],
            "example": "approved",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "order",
        },
      },
      "Pet": Object {
        "properties": Object {
          "category": Object {
            "$ref": "#/components/schemas/Category",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "doggie",
            "type": "string",
          },
          "photoUrls": Object {
            "items": Object {
              "type": "string",
              "xml": Object {
                "name": "photoUrl",
              },
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
          "status": Object {
            "description": "pet status in the store",
            "enum": Array [
              "available",
              "pending",
              "sold",
            ],
            "type": "string",
          },
          "tags": Object {
            "items": Object {
              "$ref": "#/components/schemas/Tag",
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
        },
        "required": Array [
          "name",
          "photoUrls",
        ],
        "type": "object",
        "xml": Object {
          "name": "pet",
        },
      },
      "Tag": Object {
        "properties": Object {
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "tag",
        },
      },
      "User": Object {
        "properties": Object {
          "email": Object {
            "example": "john@email.com",
            "type": "string",
          },
          "firstName": Object {
            "example": "John",
            "type": "string",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "lastName": Object {
            "example": "James",
            "type": "string",
          },
          "password": Object {
            "example": "12345",
            "type": "string",
          },
          "phone": Object {
            "example": "12345",
            "type": "string",
          },
          "userStatus": Object {
            "description": "User Status",
            "example": 1,
            "format": "int32",
            "type": "integer",
          },
          "username": Object {
            "example": "theUser",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "user",
        },
      },
    },
    "securitySchemes": Object {
      "api_key": Object {
        "in": "header",
        "name": "api_key",
        "type": "apiKey",
      },
      "petstore_auth": Object {
        "flows": Object {
          "implicit": Object {
            "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
            "scopes": Object {
              "read:pets": "read your pets",
              "write:pets": "modify pets in your account",
            },
          },
        },
        "type": "oauth2",
      },
    },
  },
  "externalDocs": Object {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io",
  },
  "info": Object {
    "contact": Object {
      "email": "apiteam@swagger.io",
    },
    "description": "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml) ",
    "license": Object {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    "termsOfService": "http://swagger.io/terms/",
    "title": "Swagger Petstore - OpenAPI 3.0",
    "version": "1.0.4",
  },
  "openapi": "3.0.2",
  "paths": Object {
    "/pet": Object {
      "post": Object {
        "description": "Add a new pet to the store",
        "operationId": "addPet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Create a new pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Add a new pet to the store",
        "tags": Array [
          "pet",
        ],
      },
      "put": Object {
        "description": "Update an existing pet by Id",
        "operationId": "updatePet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Update an existent pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
          "405": Object {
            "description": "Validation exception",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Update an existing pet",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByStatus": Object {
      "get": Object {
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": Array [
          Object {
            "description": "Status values that need to be considered for filter",
            "explode": true,
            "in": "query",
            "name": "status",
            "required": false,
            "schema": Object {
              "default": "available",
              "enum": Array [
                "available",
                "pending",
                "sold",
              ],
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid status value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by status",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByTags": Object {
      "get": Object {
        "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
        "operationId": "findPetsByTags",
        "parameters": Array [
          Object {
            "description": "Tags to filter by",
            "explode": true,
            "in": "query",
            "name": "tags",
            "required": false,
            "schema": Object {
              "items": Object {
                "type": "string",
              },
              "type": "array",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid tag value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by tags",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}": Object {
      "delete": Object {
        "description": "",
        "operationId": "deletePet",
        "parameters": Array [
          Object {
            "description": "",
            "in": "header",
            "name": "api_key",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Pet id to delete",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid pet value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Deletes a pet",
        "tags": Array [
          "pet",
        ],
      },
      "get": Object {
        "description": "Returns a single pet",
        "operationId": "getPetById",
        "parameters": Array [
          Object {
            "description": "ID of pet to return",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Find pet by ID",
        "tags": Array [
          "pet",
        ],
      },
      "post": Object {
        "description": "",
        "operationId": "updatePetWithForm",
        "parameters": Array [
          Object {
            "description": "ID of pet that needs to be updated",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Name of pet that needs to be updated",
            "in": "query",
            "name": "name",
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Status of pet that needs to be updated",
            "in": "query",
            "name": "status",
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Updates a pet in the store with form data",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}/uploadImage": Object {
      "post": Object {
        "description": "",
        "operationId": "uploadFile",
        "parameters": Array [
          Object {
            "description": "ID of pet to update",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Additional Metadata",
            "in": "query",
            "name": "additionalMetadata",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/octet-stream": Object {
              "schema": Object {
                "format": "binary",
                "type": "string",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/ApiResponse",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "uploads an image",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/store/inventory": Object {
      "get": Object {
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "additionalProperties": Object {
                    "format": "int32",
                    "type": "integer",
                  },
                  "type": "object",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
        ],
        "summary": "Returns pet inventories by status",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order": Object {
      "post": Object {
        "description": "Place a new order in the store",
        "operationId": "placeOrder",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "summary": "Place an order for a pet",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order/{orderId}": Object {
      "delete": Object {
        "description": "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
        "operationId": "deleteOrder",
        "parameters": Array [
          Object {
            "description": "ID of the order that needs to be deleted",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Delete purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
      "get": Object {
        "description": "For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",
        "operationId": "getOrderById",
        "parameters": Array [
          Object {
            "description": "ID of order that needs to be fetched",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Find purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
    },
    "/user": Object {
      "post": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Created user object",
        },
        "responses": Object {
          "default": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "summary": "Create user",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/createWithList": Object {
      "post": Object {
        "description": "Creates list of users with given input array",
        "operationId": "createUsersWithListInput",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "items": Object {
                  "$ref": "#/components/schemas/User",
                },
                "type": "array",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "Successful operation",
          },
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Creates list of users with given input array",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/login": Object {
      "get": Object {
        "description": "",
        "operationId": "loginUser",
        "parameters": Array [
          Object {
            "description": "The user name for login",
            "in": "query",
            "name": "username",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "The password for login in clear text",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "type": "string",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "type": "string",
                },
              },
            },
            "description": "successful operation",
            "headers": Object {
              "X-Expires-After": Object {
                "description": "date in UTC when toekn expires",
                "schema": Object {
                  "format": "date-time",
                  "type": "string",
                },
              },
              "X-Rate-Limit": Object {
                "description": "calls per hour allowed by the user",
                "schema": Object {
                  "format": "int32",
                  "type": "integer",
                },
              },
            },
          },
          "400": Object {
            "description": "Invalid username/password supplied",
          },
        },
        "summary": "Logs user into the system",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/logout": Object {
      "get": Object {
        "description": "",
        "operationId": "logoutUser",
        "parameters": Array [],
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Logs out current logged in user session",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/{username}": Object {
      "delete": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "parameters": Array [
          Object {
            "description": "The name that needs to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Delete user",
        "tags": Array [
          "user",
        ],
      },
      "get": Object {
        "description": "",
        "operationId": "getUserByName",
        "parameters": Array [
          Object {
            "description": "The name that needs to be fetched. Use user1 for testing. ",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Get user by user name",
        "tags": Array [
          "user",
        ],
      },
      "put": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "parameters": Array [
          Object {
            "description": "name that need to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Update an existent user in the store",
        },
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Update user",
        "tags": Array [
          "user",
        ],
      },
    },
  },
  "servers": Array [
    Object {
      "url": "/api/v3",
    },
  ],
  "tags": Array [
    Object {
      "description": "Everything about your Pets",
      "externalDocs": Object {
        "description": "Find out more",
        "url": "http://swagger.io",
      },
      "name": "pet",
    },
    Object {
      "description": "Operations about user",
      "name": "store",
    },
    Object {
      "description": "Access to Petstore orders",
      "externalDocs": Object {
        "description": "Find out more about our store",
        "url": "http://swagger.io",
      },
      "name": "user",
    },
  ],
}
`;

exports[`v3 Should import request on true: types 1`] = `
"type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

type UpdatePetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Update an existing pet
* Update an existing pet by Id
*/
export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

type UpdatePetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

type UpdatePetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

type UpdatePetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

type UpdatePetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

type UpdatePetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

type AddPetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Add a new pet to the store
* Add a new pet to the store
*/
export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

type AddPetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

type AddPetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

type AddPetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

type AddPetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

type AddPetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by status
* Multiple status values can be provided with comma separated strings
*/
export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by tags
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
*/
export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Find pet by ID
* Returns a single pet
*/
export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
type UpdatePetWithFormResult0 = RequestResult<null>;
/**
* Updates a pet in the store with form data
*/
export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
type DeletePetResult0 = RequestResult<null>;
/**
* Deletes a pet
*/
export function deletePet(params: DeletePetParams0): DeletePetResult0;

type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: string; };
type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
/**
* uploads an image
*/
export function uploadFile(params: UploadFileParams0): UploadFileResult0;

type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
/**
* Returns pet inventories by status
* Returns a map of status codes to quantities
*/
export function getInventory(): GetInventoryResult0;

type PlaceOrderParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
/**
* Place an order for a pet
* Place a new order in the store
*/
export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

type PlaceOrderParams1 = { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

type PlaceOrderParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
/**
* Find purchase order by ID
* For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
*/
export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type DeleteOrderResult0 = RequestResult<null>;
/**
* Delete purchase order by ID
* For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
*/
export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

type CreateUserParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type CreateUserResult0 = RequestResult<null>;
/**
* Create user
* This can only be done by the logged in user.
*/
export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

type CreateUserParams1 = { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type CreateUserResult1 = RequestResult<null>;
export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

type CreateUserParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type CreateUserResult2 = RequestResult<null>;
export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

type CreateUsersWithListInputParams0 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Creates list of users with given input array
* Creates list of users with given input array
*/
export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

type CreateUsersWithListInputParams1 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type LoginUserResult0 = RequestResult<string>;
/**
* Logs user into the system
*/
export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type LoginUserResult1 = RequestResult<string>;
export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

type LogoutUserResult0 = RequestResult<null>;
/**
* Logs out current logged in user session
*/
export function logoutUser(): LogoutUserResult0;

type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Get user by user name
*/
export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type UpdateUserResult0 = RequestResult<null>;
/**
* Update user
* This can only be done by the logged in user.
*/
export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type UpdateUserResult1 = RequestResult<null>;
export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type UpdateUserResult2 = RequestResult<null>;
export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
type DeleteUserResult0 = RequestResult<null>;
/**
* Delete user
* This can only be done by the logged in user.
*/
export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

"
`;

exports[`v3 Should throw exception on deprecated: code 1`] = `
"export function updatePet(params) {
  return request(\\"put\\", \`/pet\`)(params);
}

export function addPet(params) {
  return request(\\"post\\", \`/pet\`)(params);
}

export function findPetsByStatus(params) {
  return request(\\"get\\", \`/pet/findByStatus\`)(params);
}

export function findPetsByTags(params) {
  return request(\\"get\\", \`/pet/findByTags\`)(params);
}

export function getPetById(params) {
  return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
}

export function updatePetWithForm(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
}

export function deletePet(params) {
  return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
}

export function uploadFile(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
}

export function getInventory() {
  return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
}

export function placeOrder(params) {
  return request(\\"post\\", \`/store/order\`)(params);
}

export function getOrderById(params) {
  return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function deleteOrder(params) {
  return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function createUser(params) {
  return request(\\"post\\", \`/user\`)(params);
}

export function createUsersWithListInput(params) {
  return request(\\"post\\", \`/user/createWithList\`)(params);
}

export function loginUser(params) {
  return request(\\"get\\", \`/user/login\`)(params);
}

export function logoutUser() {
  return request(\\"get\\", \`/user/logout\`)();
}

export function getUserByName(params) {
  return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
}

export function updateUser(params) {
  return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
}

export function deleteUser(params) {
  return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
}

"
`;

exports[`v3 Should throw exception on deprecated: swagger 1`] = `
Object {
  "components": Object {
    "requestBodies": Object {
      "Pet": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
          "application/xml": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
        },
        "description": "Pet object that needs to be added to the store",
      },
      "UserArray": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "items": Object {
                "$ref": "#/components/schemas/User",
              },
              "type": "array",
            },
          },
        },
        "description": "List of user object",
      },
    },
    "schemas": Object {
      "Address": Object {
        "properties": Object {
          "city": Object {
            "example": "Palo Alto",
            "type": "string",
          },
          "state": Object {
            "example": "CA",
            "type": "string",
          },
          "street": Object {
            "example": "437 Lytton",
            "type": "string",
          },
          "zip": Object {
            "example": "94301",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "address",
        },
      },
      "ApiResponse": Object {
        "properties": Object {
          "code": Object {
            "format": "int32",
            "type": "integer",
          },
          "message": Object {
            "type": "string",
          },
          "type": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "##default",
        },
      },
      "Category": Object {
        "properties": Object {
          "id": Object {
            "example": 1,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "Dogs",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "category",
        },
      },
      "Customer": Object {
        "properties": Object {
          "address": Object {
            "items": Object {
              "$ref": "#/components/schemas/Address",
            },
            "type": "array",
            "xml": Object {
              "name": "addresses",
              "wrapped": true,
            },
          },
          "id": Object {
            "example": 100000,
            "format": "int64",
            "type": "integer",
          },
          "username": Object {
            "example": "fehguy",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "customer",
        },
      },
      "Order": Object {
        "properties": Object {
          "complete": Object {
            "type": "boolean",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "petId": Object {
            "example": 198772,
            "format": "int64",
            "type": "integer",
          },
          "quantity": Object {
            "example": 7,
            "format": "int32",
            "type": "integer",
          },
          "shipDate": Object {
            "format": "date-time",
            "type": "string",
          },
          "status": Object {
            "description": "Order Status",
            "enum": Array [
              "placed",
              "approved",
              "delivered",
            ],
            "example": "approved",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "order",
        },
      },
      "Pet": Object {
        "properties": Object {
          "category": Object {
            "$ref": "#/components/schemas/Category",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "doggie",
            "type": "string",
          },
          "photoUrls": Object {
            "items": Object {
              "type": "string",
              "xml": Object {
                "name": "photoUrl",
              },
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
          "status": Object {
            "description": "pet status in the store",
            "enum": Array [
              "available",
              "pending",
              "sold",
            ],
            "type": "string",
          },
          "tags": Object {
            "items": Object {
              "$ref": "#/components/schemas/Tag",
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
        },
        "required": Array [
          "name",
          "photoUrls",
        ],
        "type": "object",
        "xml": Object {
          "name": "pet",
        },
      },
      "Tag": Object {
        "properties": Object {
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "tag",
        },
      },
      "User": Object {
        "properties": Object {
          "email": Object {
            "example": "john@email.com",
            "type": "string",
          },
          "firstName": Object {
            "example": "John",
            "type": "string",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "lastName": Object {
            "example": "James",
            "type": "string",
          },
          "password": Object {
            "example": "12345",
            "type": "string",
          },
          "phone": Object {
            "example": "12345",
            "type": "string",
          },
          "userStatus": Object {
            "description": "User Status",
            "example": 1,
            "format": "int32",
            "type": "integer",
          },
          "username": Object {
            "example": "theUser",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "user",
        },
      },
    },
    "securitySchemes": Object {
      "api_key": Object {
        "in": "header",
        "name": "api_key",
        "type": "apiKey",
      },
      "petstore_auth": Object {
        "flows": Object {
          "implicit": Object {
            "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
            "scopes": Object {
              "read:pets": "read your pets",
              "write:pets": "modify pets in your account",
            },
          },
        },
        "type": "oauth2",
      },
    },
  },
  "externalDocs": Object {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io",
  },
  "info": Object {
    "contact": Object {
      "email": "apiteam@swagger.io",
    },
    "description": "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml) ",
    "license": Object {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    "termsOfService": "http://swagger.io/terms/",
    "title": "Swagger Petstore - OpenAPI 3.0",
    "version": "1.0.4",
  },
  "openapi": "3.0.2",
  "paths": Object {
    "/pet": Object {
      "post": Object {
        "description": "Add a new pet to the store",
        "operationId": "addPet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Create a new pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Add a new pet to the store",
        "tags": Array [
          "pet",
        ],
      },
      "put": Object {
        "description": "Update an existing pet by Id",
        "operationId": "updatePet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Update an existent pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
          "405": Object {
            "description": "Validation exception",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Update an existing pet",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByStatus": Object {
      "get": Object {
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": Array [
          Object {
            "description": "Status values that need to be considered for filter",
            "explode": true,
            "in": "query",
            "name": "status",
            "required": false,
            "schema": Object {
              "default": "available",
              "enum": Array [
                "available",
                "pending",
                "sold",
              ],
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid status value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by status",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByTags": Object {
      "get": Object {
        "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
        "operationId": "findPetsByTags",
        "parameters": Array [
          Object {
            "description": "Tags to filter by",
            "explode": true,
            "in": "query",
            "name": "tags",
            "required": false,
            "schema": Object {
              "items": Object {
                "type": "string",
              },
              "type": "array",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid tag value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by tags",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}": Object {
      "delete": Object {
        "description": "",
        "operationId": "deletePet",
        "parameters": Array [
          Object {
            "description": "",
            "in": "header",
            "name": "api_key",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Pet id to delete",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid pet value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Deletes a pet",
        "tags": Array [
          "pet",
        ],
      },
      "get": Object {
        "description": "Returns a single pet",
        "operationId": "getPetById",
        "parameters": Array [
          Object {
            "description": "ID of pet to return",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Find pet by ID",
        "tags": Array [
          "pet",
        ],
      },
      "post": Object {
        "description": "",
        "operationId": "updatePetWithForm",
        "parameters": Array [
          Object {
            "description": "ID of pet that needs to be updated",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Name of pet that needs to be updated",
            "in": "query",
            "name": "name",
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Status of pet that needs to be updated",
            "in": "query",
            "name": "status",
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Updates a pet in the store with form data",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}/uploadImage": Object {
      "post": Object {
        "description": "",
        "operationId": "uploadFile",
        "parameters": Array [
          Object {
            "description": "ID of pet to update",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Additional Metadata",
            "in": "query",
            "name": "additionalMetadata",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/octet-stream": Object {
              "schema": Object {
                "format": "binary",
                "type": "string",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/ApiResponse",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "uploads an image",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/store/inventory": Object {
      "get": Object {
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "additionalProperties": Object {
                    "format": "int32",
                    "type": "integer",
                  },
                  "type": "object",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
        ],
        "summary": "Returns pet inventories by status",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order": Object {
      "post": Object {
        "description": "Place a new order in the store",
        "operationId": "placeOrder",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "summary": "Place an order for a pet",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order/{orderId}": Object {
      "delete": Object {
        "description": "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
        "operationId": "deleteOrder",
        "parameters": Array [
          Object {
            "description": "ID of the order that needs to be deleted",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Delete purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
      "get": Object {
        "description": "For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",
        "operationId": "getOrderById",
        "parameters": Array [
          Object {
            "description": "ID of order that needs to be fetched",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Find purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
    },
    "/user": Object {
      "post": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Created user object",
        },
        "responses": Object {
          "default": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "summary": "Create user",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/createWithList": Object {
      "post": Object {
        "description": "Creates list of users with given input array",
        "operationId": "createUsersWithListInput",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "items": Object {
                  "$ref": "#/components/schemas/User",
                },
                "type": "array",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "Successful operation",
          },
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Creates list of users with given input array",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/login": Object {
      "get": Object {
        "description": "",
        "operationId": "loginUser",
        "parameters": Array [
          Object {
            "description": "The user name for login",
            "in": "query",
            "name": "username",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "The password for login in clear text",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "type": "string",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "type": "string",
                },
              },
            },
            "description": "successful operation",
            "headers": Object {
              "X-Expires-After": Object {
                "description": "date in UTC when toekn expires",
                "schema": Object {
                  "format": "date-time",
                  "type": "string",
                },
              },
              "X-Rate-Limit": Object {
                "description": "calls per hour allowed by the user",
                "schema": Object {
                  "format": "int32",
                  "type": "integer",
                },
              },
            },
          },
          "400": Object {
            "description": "Invalid username/password supplied",
          },
        },
        "summary": "Logs user into the system",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/logout": Object {
      "get": Object {
        "description": "",
        "operationId": "logoutUser",
        "parameters": Array [],
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Logs out current logged in user session",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/{username}": Object {
      "delete": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "parameters": Array [
          Object {
            "description": "The name that needs to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Delete user",
        "tags": Array [
          "user",
        ],
      },
      "get": Object {
        "description": "",
        "operationId": "getUserByName",
        "parameters": Array [
          Object {
            "description": "The name that needs to be fetched. Use user1 for testing. ",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Get user by user name",
        "tags": Array [
          "user",
        ],
      },
      "put": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "parameters": Array [
          Object {
            "description": "name that need to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Update an existent user in the store",
        },
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Update user",
        "tags": Array [
          "user",
        ],
      },
    },
  },
  "servers": Array [
    Object {
      "url": "/api/v3",
    },
  ],
  "tags": Array [
    Object {
      "description": "Everything about your Pets",
      "externalDocs": Object {
        "description": "Find out more",
        "url": "http://swagger.io",
      },
      "name": "pet",
    },
    Object {
      "description": "Operations about user",
      "name": "store",
    },
    Object {
      "description": "Access to Petstore orders",
      "externalDocs": Object {
        "description": "Find out more about our store",
        "url": "http://swagger.io",
      },
      "name": "user",
    },
  ],
}
`;

exports[`v3 Should throw exception on deprecated: types 1`] = `
"type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

type UpdatePetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Update an existing pet
* Update an existing pet by Id
*/
export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

type UpdatePetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

type UpdatePetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

type UpdatePetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

type UpdatePetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

type UpdatePetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

type AddPetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Add a new pet to the store
* Add a new pet to the store
*/
export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

type AddPetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

type AddPetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

type AddPetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

type AddPetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

type AddPetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by status
* Multiple status values can be provided with comma separated strings
*/
export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by tags
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
*/
export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Find pet by ID
* Returns a single pet
*/
export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
type UpdatePetWithFormResult0 = RequestResult<null>;
/**
* Updates a pet in the store with form data
*/
export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
type DeletePetResult0 = RequestResult<null>;
/**
* Deletes a pet
*/
export function deletePet(params: DeletePetParams0): DeletePetResult0;

type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: string; };
type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
/**
* uploads an image
*/
export function uploadFile(params: UploadFileParams0): UploadFileResult0;

type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
/**
* Returns pet inventories by status
* Returns a map of status codes to quantities
*/
export function getInventory(): GetInventoryResult0;

type PlaceOrderParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
/**
* Place an order for a pet
* Place a new order in the store
*/
export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

type PlaceOrderParams1 = { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

type PlaceOrderParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
/**
* Find purchase order by ID
* For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
*/
export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type DeleteOrderResult0 = RequestResult<null>;
/**
* Delete purchase order by ID
* For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
*/
export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

type CreateUserParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type CreateUserResult0 = RequestResult<null>;
/**
* Create user
* This can only be done by the logged in user.
*/
export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

type CreateUserParams1 = { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type CreateUserResult1 = RequestResult<null>;
export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

type CreateUserParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type CreateUserResult2 = RequestResult<null>;
export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

type CreateUsersWithListInputParams0 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Creates list of users with given input array
* Creates list of users with given input array
*/
export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

type CreateUsersWithListInputParams1 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type LoginUserResult0 = RequestResult<string>;
/**
* Logs user into the system
*/
export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type LoginUserResult1 = RequestResult<string>;
export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

type LogoutUserResult0 = RequestResult<null>;
/**
* Logs out current logged in user session
*/
export function logoutUser(): LogoutUserResult0;

type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Get user by user name
*/
export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type UpdateUserResult0 = RequestResult<null>;
/**
* Update user
* This can only be done by the logged in user.
*/
export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type UpdateUserResult1 = RequestResult<null>;
export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type UpdateUserResult2 = RequestResult<null>;
export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
type DeleteUserResult0 = RequestResult<null>;
/**
* Delete user
* This can only be done by the logged in user.
*/
export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

"
`;

exports[`v3 Should works with preset: code 1`] = `
"// This is from \`demo3-swagger-to-js-preset\`export const uploadFile = \\"EXAMPLE\\"; 


export const addPet = \\"EXAMPLE\\"; 


export const updatePet = \\"EXAMPLE\\"; 


export const findPetsByStatus = \\"EXAMPLE\\"; 


export const findPetsByTags = \\"EXAMPLE\\"; 


export const getPetById = \\"EXAMPLE\\"; 


export const updatePetWithForm = \\"EXAMPLE\\"; 


export const deletePet = \\"EXAMPLE\\"; 


export const placeOrder = \\"EXAMPLE\\"; 


export const getOrderById = \\"EXAMPLE\\"; 


export const deleteOrder = \\"EXAMPLE\\"; 


export const getInventory = \\"EXAMPLE\\"; 


export const createUsersWithArrayInput = \\"EXAMPLE\\"; 


export const createUsersWithListInput = \\"EXAMPLE\\"; 


export const getUserByName = \\"EXAMPLE\\"; 


export const updateUser = \\"EXAMPLE\\"; 


export const deleteUser = \\"EXAMPLE\\"; 


export const loginUser = \\"EXAMPLE\\"; 


export const logoutUser = \\"EXAMPLE\\"; 


export const createUser = \\"EXAMPLE\\"; 


"
`;

exports[`v3 Should works with preset: swagger 1`] = `
Object {
  "basePath": "/v2",
  "definitions": Object {
    "ApiResponse": Object {
      "properties": Object {
        "code": Object {
          "format": "int32",
          "type": "integer",
        },
        "message": Object {
          "type": "string",
        },
        "type": Object {
          "type": "string",
        },
      },
      "type": "object",
    },
    "Category": Object {
      "properties": Object {
        "id": Object {
          "format": "int64",
          "type": "integer",
        },
        "name": Object {
          "type": "string",
        },
      },
      "type": "object",
      "xml": Object {
        "name": "Category",
      },
    },
    "Order": Object {
      "properties": Object {
        "complete": Object {
          "type": "boolean",
        },
        "id": Object {
          "format": "int64",
          "type": "integer",
        },
        "petId": Object {
          "format": "int64",
          "type": "integer",
        },
        "quantity": Object {
          "format": "int32",
          "type": "integer",
        },
        "shipDate": Object {
          "format": "date-time",
          "type": "string",
        },
        "status": Object {
          "description": "Order Status",
          "enum": Array [
            "placed",
            "approved",
            "delivered",
          ],
          "type": "string",
        },
      },
      "type": "object",
      "xml": Object {
        "name": "Order",
      },
    },
    "Pet": Object {
      "properties": Object {
        "category": Object {
          "$ref": "#/definitions/Category",
        },
        "id": Object {
          "format": "int64",
          "type": "integer",
        },
        "name": Object {
          "example": "doggie",
          "type": "string",
        },
        "photoUrls": Object {
          "items": Object {
            "type": "string",
            "xml": Object {
              "name": "photoUrl",
            },
          },
          "type": "array",
          "xml": Object {
            "wrapped": true,
          },
        },
        "status": Object {
          "description": "pet status in the store",
          "enum": Array [
            "available",
            "pending",
            "sold",
          ],
          "type": "string",
        },
        "tags": Object {
          "items": Object {
            "$ref": "#/definitions/Tag",
            "xml": Object {
              "name": "tag",
            },
          },
          "type": "array",
          "xml": Object {
            "wrapped": true,
          },
        },
      },
      "required": Array [
        "name",
        "photoUrls",
      ],
      "type": "object",
      "xml": Object {
        "name": "Pet",
      },
    },
    "Tag": Object {
      "properties": Object {
        "id": Object {
          "format": "int64",
          "type": "integer",
        },
        "name": Object {
          "type": "string",
        },
      },
      "type": "object",
      "xml": Object {
        "name": "Tag",
      },
    },
    "User": Object {
      "properties": Object {
        "email": Object {
          "type": "string",
        },
        "firstName": Object {
          "type": "string",
        },
        "id": Object {
          "format": "int64",
          "type": "integer",
        },
        "lastName": Object {
          "type": "string",
        },
        "password": Object {
          "type": "string",
        },
        "phone": Object {
          "type": "string",
        },
        "userStatus": Object {
          "description": "User Status",
          "format": "int32",
          "type": "integer",
        },
        "username": Object {
          "type": "string",
        },
      },
      "type": "object",
      "xml": Object {
        "name": "User",
      },
    },
  },
  "externalDocs": Object {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io",
  },
  "host": "petstore.swagger.io",
  "info": Object {
    "contact": Object {
      "email": "apiteam@swagger.io",
    },
    "description": "This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key \`special-key\` to test the authorization filters.",
    "license": Object {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    "termsOfService": "http://swagger.io/terms/",
    "title": "Swagger Petstore",
    "version": "1.0.5",
  },
  "paths": Object {
    "/pet": Object {
      "post": Object {
        "consumes": Array [
          "application/json",
          "application/xml",
        ],
        "description": "",
        "operationId": "addPet",
        "parameters": Array [
          Object {
            "description": "Pet object that needs to be added to the store",
            "in": "body",
            "name": "body",
            "required": true,
            "schema": Object {
              "$ref": "#/definitions/Pet",
            },
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Add a new pet to the store",
        "tags": Array [
          "pet",
        ],
      },
      "put": Object {
        "consumes": Array [
          "application/json",
          "application/xml",
        ],
        "description": "",
        "operationId": "updatePet",
        "parameters": Array [
          Object {
            "description": "Pet object that needs to be added to the store",
            "in": "body",
            "name": "body",
            "required": true,
            "schema": Object {
              "$ref": "#/definitions/Pet",
            },
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
          "405": Object {
            "description": "Validation exception",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Update an existing pet",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByStatus": Object {
      "get": Object {
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": Array [
          Object {
            "collectionFormat": "multi",
            "description": "Status values that need to be considered for filter",
            "in": "query",
            "items": Object {
              "default": "available",
              "enum": Array [
                "available",
                "pending",
                "sold",
              ],
              "type": "string",
            },
            "name": "status",
            "required": true,
            "type": "array",
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "200": Object {
            "description": "successful operation",
            "schema": Object {
              "items": Object {
                "$ref": "#/definitions/Pet",
              },
              "type": "array",
            },
          },
          "400": Object {
            "description": "Invalid status value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by status",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByTags": Object {
      "get": Object {
        "deprecated": true,
        "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
        "operationId": "findPetsByTags",
        "parameters": Array [
          Object {
            "collectionFormat": "multi",
            "description": "Tags to filter by",
            "in": "query",
            "items": Object {
              "type": "string",
            },
            "name": "tags",
            "required": true,
            "type": "array",
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "200": Object {
            "description": "successful operation",
            "schema": Object {
              "items": Object {
                "$ref": "#/definitions/Pet",
              },
              "type": "array",
            },
          },
          "400": Object {
            "description": "Invalid tag value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by tags",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}": Object {
      "delete": Object {
        "description": "",
        "operationId": "deletePet",
        "parameters": Array [
          Object {
            "in": "header",
            "name": "api_key",
            "required": false,
            "type": "string",
          },
          Object {
            "description": "Pet id to delete",
            "format": "int64",
            "in": "path",
            "name": "petId",
            "required": true,
            "type": "integer",
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Deletes a pet",
        "tags": Array [
          "pet",
        ],
      },
      "get": Object {
        "description": "Returns a single pet",
        "operationId": "getPetById",
        "parameters": Array [
          Object {
            "description": "ID of pet to return",
            "format": "int64",
            "in": "path",
            "name": "petId",
            "required": true,
            "type": "integer",
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "200": Object {
            "description": "successful operation",
            "schema": Object {
              "$ref": "#/definitions/Pet",
            },
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
        ],
        "summary": "Find pet by ID",
        "tags": Array [
          "pet",
        ],
      },
      "post": Object {
        "consumes": Array [
          "application/x-www-form-urlencoded",
        ],
        "description": "",
        "operationId": "updatePetWithForm",
        "parameters": Array [
          Object {
            "description": "ID of pet that needs to be updated",
            "format": "int64",
            "in": "path",
            "name": "petId",
            "required": true,
            "type": "integer",
          },
          Object {
            "description": "Updated name of the pet",
            "in": "formData",
            "name": "name",
            "required": false,
            "type": "string",
          },
          Object {
            "description": "Updated status of the pet",
            "in": "formData",
            "name": "status",
            "required": false,
            "type": "string",
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Updates a pet in the store with form data",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}/uploadImage": Object {
      "post": Object {
        "consumes": Array [
          "multipart/form-data",
        ],
        "description": "",
        "operationId": "uploadFile",
        "parameters": Array [
          Object {
            "description": "ID of pet to update",
            "format": "int64",
            "in": "path",
            "name": "petId",
            "required": true,
            "type": "integer",
          },
          Object {
            "description": "Additional data to pass to server",
            "in": "formData",
            "name": "additionalMetadata",
            "required": false,
            "type": "string",
          },
          Object {
            "description": "file to upload",
            "in": "formData",
            "name": "file",
            "required": false,
            "type": "file",
          },
        ],
        "produces": Array [
          "application/json",
        ],
        "responses": Object {
          "200": Object {
            "description": "successful operation",
            "schema": Object {
              "$ref": "#/definitions/ApiResponse",
            },
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "uploads an image",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/store/inventory": Object {
      "get": Object {
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "parameters": Array [],
        "produces": Array [
          "application/json",
        ],
        "responses": Object {
          "200": Object {
            "description": "successful operation",
            "schema": Object {
              "additionalProperties": Object {
                "format": "int32",
                "type": "integer",
              },
              "type": "object",
            },
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
        ],
        "summary": "Returns pet inventories by status",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order": Object {
      "post": Object {
        "consumes": Array [
          "application/json",
        ],
        "description": "",
        "operationId": "placeOrder",
        "parameters": Array [
          Object {
            "description": "order placed for purchasing the pet",
            "in": "body",
            "name": "body",
            "required": true,
            "schema": Object {
              "$ref": "#/definitions/Order",
            },
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "200": Object {
            "description": "successful operation",
            "schema": Object {
              "$ref": "#/definitions/Order",
            },
          },
          "400": Object {
            "description": "Invalid Order",
          },
        },
        "summary": "Place an order for a pet",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order/{orderId}": Object {
      "delete": Object {
        "description": "For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors",
        "operationId": "deleteOrder",
        "parameters": Array [
          Object {
            "description": "ID of the order that needs to be deleted",
            "format": "int64",
            "in": "path",
            "minimum": 1,
            "name": "orderId",
            "required": true,
            "type": "integer",
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Delete purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
      "get": Object {
        "description": "For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions",
        "operationId": "getOrderById",
        "parameters": Array [
          Object {
            "description": "ID of pet that needs to be fetched",
            "format": "int64",
            "in": "path",
            "maximum": 10,
            "minimum": 1,
            "name": "orderId",
            "required": true,
            "type": "integer",
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "200": Object {
            "description": "successful operation",
            "schema": Object {
              "$ref": "#/definitions/Order",
            },
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Find purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
    },
    "/user": Object {
      "post": Object {
        "consumes": Array [
          "application/json",
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
        "parameters": Array [
          Object {
            "description": "Created user object",
            "in": "body",
            "name": "body",
            "required": true,
            "schema": Object {
              "$ref": "#/definitions/User",
            },
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Create user",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/createWithArray": Object {
      "post": Object {
        "consumes": Array [
          "application/json",
        ],
        "description": "",
        "operationId": "createUsersWithArrayInput",
        "parameters": Array [
          Object {
            "description": "List of user object",
            "in": "body",
            "name": "body",
            "required": true,
            "schema": Object {
              "items": Object {
                "$ref": "#/definitions/User",
              },
              "type": "array",
            },
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Creates list of users with given input array",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/createWithList": Object {
      "post": Object {
        "consumes": Array [
          "application/json",
        ],
        "description": "",
        "operationId": "createUsersWithListInput",
        "parameters": Array [
          Object {
            "description": "List of user object",
            "in": "body",
            "name": "body",
            "required": true,
            "schema": Object {
              "items": Object {
                "$ref": "#/definitions/User",
              },
              "type": "array",
            },
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Creates list of users with given input array",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/login": Object {
      "get": Object {
        "description": "",
        "operationId": "loginUser",
        "parameters": Array [
          Object {
            "description": "The user name for login",
            "in": "query",
            "name": "username",
            "required": true,
            "type": "string",
          },
          Object {
            "description": "The password for login in clear text",
            "in": "query",
            "name": "password",
            "required": true,
            "type": "string",
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "200": Object {
            "description": "successful operation",
            "headers": Object {
              "X-Expires-After": Object {
                "description": "date in UTC when token expires",
                "format": "date-time",
                "type": "string",
              },
              "X-Rate-Limit": Object {
                "description": "calls per hour allowed by the user",
                "format": "int32",
                "type": "integer",
              },
            },
            "schema": Object {
              "type": "string",
            },
          },
          "400": Object {
            "description": "Invalid username/password supplied",
          },
        },
        "summary": "Logs user into the system",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/logout": Object {
      "get": Object {
        "description": "",
        "operationId": "logoutUser",
        "parameters": Array [],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Logs out current logged in user session",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/{username}": Object {
      "delete": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "parameters": Array [
          Object {
            "description": "The name that needs to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "type": "string",
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Delete user",
        "tags": Array [
          "user",
        ],
      },
      "get": Object {
        "description": "",
        "operationId": "getUserByName",
        "parameters": Array [
          Object {
            "description": "The name that needs to be fetched. Use user1 for testing. ",
            "in": "path",
            "name": "username",
            "required": true,
            "type": "string",
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "200": Object {
            "description": "successful operation",
            "schema": Object {
              "$ref": "#/definitions/User",
            },
          },
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Get user by user name",
        "tags": Array [
          "user",
        ],
      },
      "put": Object {
        "consumes": Array [
          "application/json",
        ],
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "parameters": Array [
          Object {
            "description": "name that need to be updated",
            "in": "path",
            "name": "username",
            "required": true,
            "type": "string",
          },
          Object {
            "description": "Updated user object",
            "in": "body",
            "name": "body",
            "required": true,
            "schema": Object {
              "$ref": "#/definitions/User",
            },
          },
        ],
        "produces": Array [
          "application/json",
          "application/xml",
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid user supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Updated user",
        "tags": Array [
          "user",
        ],
      },
    },
  },
  "schemes": Array [
    "https",
    "http",
  ],
  "securityDefinitions": Object {
    "api_key": Object {
      "in": "header",
      "name": "api_key",
      "type": "apiKey",
    },
    "petstore_auth": Object {
      "authorizationUrl": "https://petstore.swagger.io/oauth/authorize",
      "flow": "implicit",
      "scopes": Object {
        "read:pets": "read your pets",
        "write:pets": "modify pets in your account",
      },
      "type": "oauth2",
    },
  },
  "swagger": "2.0",
  "tags": Array [
    Object {
      "description": "Everything about your Pets",
      "externalDocs": Object {
        "description": "Find out more",
        "url": "http://swagger.io",
      },
      "name": "pet",
    },
    Object {
      "description": "Access to Petstore orders",
      "name": "store",
    },
    Object {
      "description": "Operations about user",
      "externalDocs": Object {
        "description": "Find out more about our store",
        "url": "http://swagger.io",
      },
      "name": "user",
    },
  ],
}
`;

exports[`v3 Should works with preset: types 1`] = `
"type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"additionalMetadata\\"?: string; \\"file\\"?: File; }; };
type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
/**
* uploads an image
*/
export function uploadFile(params: UploadFileParams0): UploadFileResult0;

type AddPetParams0 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult0 = RequestResult<null>;
/**
* Add a new pet to the store
*/
export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

type AddPetParams1 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult1 = RequestResult<null>;
export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

type AddPetParams2 = { \\"body\\": { \\"Pet\\"?: { \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult2 = RequestResult<null>;
export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

type AddPetParams3 = { \\"body\\": { \\"Pet\\"?: { \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult3 = RequestResult<null>;
export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

type UpdatePetParams0 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult0 = RequestResult<null>;
/**
* Update an existing pet
*/
export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

type UpdatePetParams1 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult1 = RequestResult<null>;
export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

type UpdatePetParams2 = { \\"body\\": { \\"Pet\\"?: { \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult2 = RequestResult<null>;
export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

type UpdatePetParams3 = { \\"body\\": { \\"Pet\\"?: { \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult3 = RequestResult<null>;
export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

type FindPetsByStatusParams0 = { \\"query\\": { \\"status\\": (\\"available\\" | \\"pending\\" | \\"sold\\")[]; }; };
type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByStatusResult0 = RequestResult<({ \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
/**
* Finds Pets by status
* Multiple status values can be provided with comma separated strings
*/
export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

type FindPetsByStatusParams1 = { \\"query\\": { \\"status\\": (\\"available\\" | \\"pending\\" | \\"sold\\")[]; }; };
type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByStatusResult1 = RequestResult<{ \\"Pet\\"?: ({ \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

type FindPetsByTagsParams0 = { \\"query\\": { \\"tags\\": (string)[]; }; };
type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByTagsResult0 = RequestResult<({ \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
/**
* Finds Pets by tags
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
*/
export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

type FindPetsByTagsParams1 = { \\"query\\": { \\"tags\\": (string)[]; }; };
type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByTagsResult1 = RequestResult<{ \\"Pet\\"?: ({ \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetPetByIdResult0 = RequestResult<{ \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
/**
* Find pet by ID
* Returns a single pet
*/
export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetPetByIdResult1 = RequestResult<{ \\"Pet\\"?: { \\"id\\"?: number; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
type UpdatePetWithFormAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetWithFormResult0 = RequestResult<null>;
/**
* Updates a pet in the store with form data
*/
export function updatePetWithForm(params: UpdatePetWithFormParams0 & UpdatePetWithFormAddedParams0): UpdatePetWithFormResult0;

type UpdatePetWithFormParams1 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
type UpdatePetWithFormAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetWithFormResult1 = RequestResult<null>;
export function updatePetWithForm(params: UpdatePetWithFormParams1 & UpdatePetWithFormAddedParams1): UpdatePetWithFormResult1;

type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
type DeletePetAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type DeletePetResult0 = RequestResult<null>;
/**
* Deletes a pet
*/
export function deletePet(params: DeletePetParams0 & DeletePetAddedParams0): DeletePetResult0;

type DeletePetParams1 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
type DeletePetAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type DeletePetResult1 = RequestResult<null>;
export function deletePet(params: DeletePetParams1 & DeletePetAddedParams1): DeletePetResult1;

type PlaceOrderParams0 = { \\"body\\": { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
/**
* Place an order for a pet
*/
export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

type PlaceOrderParams1 = { \\"body\\": { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type PlaceOrderResult1 = RequestResult<{ \\"Order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetOrderByIdResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
/**
* Find purchase order by ID
* For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
*/
export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetOrderByIdResult1 = RequestResult<{ \\"Order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type DeleteOrderAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type DeleteOrderResult0 = RequestResult<null>;
/**
* Delete purchase order by ID
* For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
*/
export function deleteOrder(params: DeleteOrderParams0 & DeleteOrderAddedParams0): DeleteOrderResult0;

type DeleteOrderParams1 = { \\"path\\": { \\"orderId\\": number; }; };
type DeleteOrderAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type DeleteOrderResult1 = RequestResult<null>;
export function deleteOrder(params: DeleteOrderParams1 & DeleteOrderAddedParams1): DeleteOrderResult1;

type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
/**
* Returns pet inventories by status
* Returns a map of status codes to quantities
*/
export function getInventory(): GetInventoryResult0;

type CreateUsersWithArrayInputParams0 = { \\"body\\": ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithArrayInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type CreateUsersWithArrayInputResult0 = RequestResult<null>;
/**
* Creates list of users with given input array
*/
export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams0 & CreateUsersWithArrayInputAddedParams0): CreateUsersWithArrayInputResult0;

type CreateUsersWithArrayInputParams1 = { \\"body\\": ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithArrayInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type CreateUsersWithArrayInputResult1 = RequestResult<null>;
export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams1 & CreateUsersWithArrayInputAddedParams1): CreateUsersWithArrayInputResult1;

type CreateUsersWithListInputParams0 = { \\"body\\": ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type CreateUsersWithListInputResult0 = RequestResult<null>;
/**
* Creates list of users with given input array
*/
export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

type CreateUsersWithListInputParams1 = { \\"body\\": ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type CreateUsersWithListInputResult1 = RequestResult<null>;
export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetUserByNameResult0 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
/**
* Get user by user name
*/
export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetUserByNameResult1 = RequestResult<{ \\"User\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\": { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdateUserResult0 = RequestResult<null>;
/**
* Updated user
* This can only be done by the logged in user.
*/
export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\": { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdateUserResult1 = RequestResult<null>;
export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
type DeleteUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type DeleteUserResult0 = RequestResult<null>;
/**
* Delete user
* This can only be done by the logged in user.
*/
export function deleteUser(params: DeleteUserParams0 & DeleteUserAddedParams0): DeleteUserResult0;

type DeleteUserParams1 = { \\"path\\": { \\"username\\": string; }; };
type DeleteUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type DeleteUserResult1 = RequestResult<null>;
export function deleteUser(params: DeleteUserParams1 & DeleteUserAddedParams1): DeleteUserResult1;

type LoginUserParams0 = { \\"query\\": { \\"username\\": string; \\"password\\": string; }; };
type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type LoginUserResult0 = RequestResult<string>;
/**
* Logs user into the system
*/
export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

type LoginUserParams1 = { \\"query\\": { \\"username\\": string; \\"password\\": string; }; };
type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type LoginUserResult1 = RequestResult<string>;
export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

type LogoutUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type LogoutUserResult0 = RequestResult<null>;
/**
* Logs out current logged in user session
*/
export function logoutUser(params: LogoutUserAddedParams0): LogoutUserResult0;

type LogoutUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type LogoutUserResult1 = RequestResult<null>;
export function logoutUser(params: LogoutUserAddedParams1): LogoutUserResult1;

type CreateUserParams0 = { \\"body\\": { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type CreateUserResult0 = RequestResult<null>;
/**
* Create user
* This can only be done by the logged in user.
*/
export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

type CreateUserParams1 = { \\"body\\": { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type CreateUserResult1 = RequestResult<null>;
export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

"
`;

exports[`v3 Should works without config: code 1`] = `
"export function updatePet(params) {
  return request(\\"put\\", \`/pet\`)(params);
}

export function addPet(params) {
  return request(\\"post\\", \`/pet\`)(params);
}

export function findPetsByStatus(params) {
  return request(\\"get\\", \`/pet/findByStatus\`)(params);
}

export function findPetsByTags(params) {
  return request(\\"get\\", \`/pet/findByTags\`)(params);
}

export function getPetById(params) {
  return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
}

export function updatePetWithForm(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
}

export function deletePet(params) {
  return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
}

export function uploadFile(params) {
  return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
}

export function getInventory() {
  return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
}

export function placeOrder(params) {
  return request(\\"post\\", \`/store/order\`)(params);
}

export function getOrderById(params) {
  return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function deleteOrder(params) {
  return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
}

export function createUser(params) {
  return request(\\"post\\", \`/user\`)(params);
}

export function createUsersWithListInput(params) {
  return request(\\"post\\", \`/user/createWithList\`)(params);
}

export function loginUser(params) {
  return request(\\"get\\", \`/user/login\`)(params);
}

export function logoutUser() {
  return request(\\"get\\", \`/user/logout\`)();
}

export function getUserByName(params) {
  return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
}

export function updateUser(params) {
  return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
}

export function deleteUser(params) {
  return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
}

"
`;

exports[`v3 Should works without config: swagger 1`] = `
Object {
  "components": Object {
    "requestBodies": Object {
      "Pet": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
          "application/xml": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Pet",
            },
          },
        },
        "description": "Pet object that needs to be added to the store",
      },
      "UserArray": Object {
        "content": Object {
          "application/json": Object {
            "schema": Object {
              "items": Object {
                "$ref": "#/components/schemas/User",
              },
              "type": "array",
            },
          },
        },
        "description": "List of user object",
      },
    },
    "schemas": Object {
      "Address": Object {
        "properties": Object {
          "city": Object {
            "example": "Palo Alto",
            "type": "string",
          },
          "state": Object {
            "example": "CA",
            "type": "string",
          },
          "street": Object {
            "example": "437 Lytton",
            "type": "string",
          },
          "zip": Object {
            "example": "94301",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "address",
        },
      },
      "ApiResponse": Object {
        "properties": Object {
          "code": Object {
            "format": "int32",
            "type": "integer",
          },
          "message": Object {
            "type": "string",
          },
          "type": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "##default",
        },
      },
      "Category": Object {
        "properties": Object {
          "id": Object {
            "example": 1,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "Dogs",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "category",
        },
      },
      "Customer": Object {
        "properties": Object {
          "address": Object {
            "items": Object {
              "$ref": "#/components/schemas/Address",
            },
            "type": "array",
            "xml": Object {
              "name": "addresses",
              "wrapped": true,
            },
          },
          "id": Object {
            "example": 100000,
            "format": "int64",
            "type": "integer",
          },
          "username": Object {
            "example": "fehguy",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "customer",
        },
      },
      "Order": Object {
        "properties": Object {
          "complete": Object {
            "type": "boolean",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "petId": Object {
            "example": 198772,
            "format": "int64",
            "type": "integer",
          },
          "quantity": Object {
            "example": 7,
            "format": "int32",
            "type": "integer",
          },
          "shipDate": Object {
            "format": "date-time",
            "type": "string",
          },
          "status": Object {
            "description": "Order Status",
            "enum": Array [
              "placed",
              "approved",
              "delivered",
            ],
            "example": "approved",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "order",
        },
      },
      "Pet": Object {
        "properties": Object {
          "category": Object {
            "$ref": "#/components/schemas/Category",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "doggie",
            "type": "string",
          },
          "photoUrls": Object {
            "items": Object {
              "type": "string",
              "xml": Object {
                "name": "photoUrl",
              },
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
          "status": Object {
            "description": "pet status in the store",
            "enum": Array [
              "available",
              "pending",
              "sold",
            ],
            "type": "string",
          },
          "tags": Object {
            "items": Object {
              "$ref": "#/components/schemas/Tag",
            },
            "type": "array",
            "xml": Object {
              "wrapped": true,
            },
          },
        },
        "required": Array [
          "name",
          "photoUrls",
        ],
        "type": "object",
        "xml": Object {
          "name": "pet",
        },
      },
      "Tag": Object {
        "properties": Object {
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "tag",
        },
      },
      "User": Object {
        "properties": Object {
          "email": Object {
            "example": "john@email.com",
            "type": "string",
          },
          "firstName": Object {
            "example": "John",
            "type": "string",
          },
          "id": Object {
            "example": 10,
            "format": "int64",
            "type": "integer",
          },
          "lastName": Object {
            "example": "James",
            "type": "string",
          },
          "password": Object {
            "example": "12345",
            "type": "string",
          },
          "phone": Object {
            "example": "12345",
            "type": "string",
          },
          "userStatus": Object {
            "description": "User Status",
            "example": 1,
            "format": "int32",
            "type": "integer",
          },
          "username": Object {
            "example": "theUser",
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "user",
        },
      },
    },
    "securitySchemes": Object {
      "api_key": Object {
        "in": "header",
        "name": "api_key",
        "type": "apiKey",
      },
      "petstore_auth": Object {
        "flows": Object {
          "implicit": Object {
            "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
            "scopes": Object {
              "read:pets": "read your pets",
              "write:pets": "modify pets in your account",
            },
          },
        },
        "type": "oauth2",
      },
    },
  },
  "externalDocs": Object {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io",
  },
  "info": Object {
    "contact": Object {
      "email": "apiteam@swagger.io",
    },
    "description": "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml) ",
    "license": Object {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    "termsOfService": "http://swagger.io/terms/",
    "title": "Swagger Petstore - OpenAPI 3.0",
    "version": "1.0.4",
  },
  "openapi": "3.0.2",
  "paths": Object {
    "/pet": Object {
      "post": Object {
        "description": "Add a new pet to the store",
        "operationId": "addPet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Create a new pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Add a new pet to the store",
        "tags": Array [
          "pet",
        ],
      },
      "put": Object {
        "description": "Update an existing pet by Id",
        "operationId": "updatePet",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Pet",
              },
            },
          },
          "description": "Update an existent pet in the store",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "Successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
          "405": Object {
            "description": "Validation exception",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Update an existing pet",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByStatus": Object {
      "get": Object {
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": Array [
          Object {
            "description": "Status values that need to be considered for filter",
            "explode": true,
            "in": "query",
            "name": "status",
            "required": false,
            "schema": Object {
              "default": "available",
              "enum": Array [
                "available",
                "pending",
                "sold",
              ],
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid status value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by status",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/findByTags": Object {
      "get": Object {
        "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
        "operationId": "findPetsByTags",
        "parameters": Array [
          Object {
            "description": "Tags to filter by",
            "explode": true,
            "in": "query",
            "name": "tags",
            "required": false,
            "schema": Object {
              "items": Object {
                "type": "string",
              },
              "type": "array",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Pet",
                  },
                  "type": "array",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid tag value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Finds Pets by tags",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}": Object {
      "delete": Object {
        "description": "",
        "operationId": "deletePet",
        "parameters": Array [
          Object {
            "description": "",
            "in": "header",
            "name": "api_key",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Pet id to delete",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid pet value",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Deletes a pet",
        "tags": Array [
          "pet",
        ],
      },
      "get": Object {
        "description": "Returns a single pet",
        "operationId": "getPetById",
        "parameters": Array [
          Object {
            "description": "ID of pet to return",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Pet",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Pet not found",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Find pet by ID",
        "tags": Array [
          "pet",
        ],
      },
      "post": Object {
        "description": "",
        "operationId": "updatePetWithForm",
        "parameters": Array [
          Object {
            "description": "ID of pet that needs to be updated",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Name of pet that needs to be updated",
            "in": "query",
            "name": "name",
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "Status of pet that needs to be updated",
            "in": "query",
            "name": "status",
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "405": Object {
            "description": "Invalid input",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "Updates a pet in the store with form data",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/pet/{petId}/uploadImage": Object {
      "post": Object {
        "description": "",
        "operationId": "uploadFile",
        "parameters": Array [
          Object {
            "description": "ID of pet to update",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
          Object {
            "description": "Additional Metadata",
            "in": "query",
            "name": "additionalMetadata",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/octet-stream": Object {
              "schema": Object {
                "format": "binary",
                "type": "string",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/ApiResponse",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "uploads an image",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/store/inventory": Object {
      "get": Object {
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "additionalProperties": Object {
                    "format": "int32",
                    "type": "integer",
                  },
                  "type": "object",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
        ],
        "summary": "Returns pet inventories by status",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order": Object {
      "post": Object {
        "description": "Place a new order in the store",
        "operationId": "placeOrder",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "405": Object {
            "description": "Invalid input",
          },
        },
        "summary": "Place an order for a pet",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order/{orderId}": Object {
      "delete": Object {
        "description": "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
        "operationId": "deleteOrder",
        "parameters": Array [
          Object {
            "description": "ID of the order that needs to be deleted",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Delete purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
      "get": Object {
        "description": "For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",
        "operationId": "getOrderById",
        "parameters": Array [
          Object {
            "description": "ID of order that needs to be fetched",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "description": "Order not found",
          },
        },
        "summary": "Find purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
    },
    "/user": Object {
      "post": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Created user object",
        },
        "responses": Object {
          "default": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "summary": "Create user",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/createWithList": Object {
      "post": Object {
        "description": "Creates list of users with given input array",
        "operationId": "createUsersWithListInput",
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "items": Object {
                  "$ref": "#/components/schemas/User",
                },
                "type": "array",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "Successful operation",
          },
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Creates list of users with given input array",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/login": Object {
      "get": Object {
        "description": "",
        "operationId": "loginUser",
        "parameters": Array [
          Object {
            "description": "The user name for login",
            "in": "query",
            "name": "username",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "The password for login in clear text",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "type": "string",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "type": "string",
                },
              },
            },
            "description": "successful operation",
            "headers": Object {
              "X-Expires-After": Object {
                "description": "date in UTC when toekn expires",
                "schema": Object {
                  "format": "date-time",
                  "type": "string",
                },
              },
              "X-Rate-Limit": Object {
                "description": "calls per hour allowed by the user",
                "schema": Object {
                  "format": "int32",
                  "type": "integer",
                },
              },
            },
          },
          "400": Object {
            "description": "Invalid username/password supplied",
          },
        },
        "summary": "Logs user into the system",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/logout": Object {
      "get": Object {
        "description": "",
        "operationId": "logoutUser",
        "parameters": Array [],
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Logs out current logged in user session",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/{username}": Object {
      "delete": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "parameters": Array [
          Object {
            "description": "The name that needs to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Delete user",
        "tags": Array [
          "user",
        ],
      },
      "get": Object {
        "description": "",
        "operationId": "getUserByName",
        "parameters": Array [
          Object {
            "description": "The name that needs to be fetched. Use user1 for testing. ",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "description": "Invalid username supplied",
          },
          "404": Object {
            "description": "User not found",
          },
        },
        "summary": "Get user by user name",
        "tags": Array [
          "user",
        ],
      },
      "put": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "parameters": Array [
          Object {
            "description": "name that need to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/x-www-form-urlencoded": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
            "application/xml": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Update an existent user in the store",
        },
        "responses": Object {
          "default": Object {
            "description": "successful operation",
          },
        },
        "summary": "Update user",
        "tags": Array [
          "user",
        ],
      },
    },
  },
  "servers": Array [
    Object {
      "url": "/api/v3",
    },
  ],
  "tags": Array [
    Object {
      "description": "Everything about your Pets",
      "externalDocs": Object {
        "description": "Find out more",
        "url": "http://swagger.io",
      },
      "name": "pet",
    },
    Object {
      "description": "Operations about user",
      "name": "store",
    },
    Object {
      "description": "Access to Petstore orders",
      "externalDocs": Object {
        "description": "Find out more about our store",
        "url": "http://swagger.io",
      },
      "name": "user",
    },
  ],
}
`;

exports[`v3 Should works without config: types 1`] = `
"type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

type UpdatePetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Update an existing pet
* Update an existing pet by Id
*/
export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

type UpdatePetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

type UpdatePetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

type UpdatePetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

type UpdatePetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

type UpdatePetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

type AddPetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Add a new pet to the store
* Add a new pet to the store
*/
export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

type AddPetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

type AddPetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

type AddPetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

type AddPetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

type AddPetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by status
* Multiple status values can be provided with comma separated strings
*/
export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
/**
* Finds Pets by tags
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
*/
export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
/**
* Find pet by ID
* Returns a single pet
*/
export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
type UpdatePetWithFormResult0 = RequestResult<null>;
/**
* Updates a pet in the store with form data
*/
export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
type DeletePetResult0 = RequestResult<null>;
/**
* Deletes a pet
*/
export function deletePet(params: DeletePetParams0): DeletePetResult0;

type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: string; };
type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
/**
* uploads an image
*/
export function uploadFile(params: UploadFileParams0): UploadFileResult0;

type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
/**
* Returns pet inventories by status
* Returns a map of status codes to quantities
*/
export function getInventory(): GetInventoryResult0;

type PlaceOrderParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
/**
* Place an order for a pet
* Place a new order in the store
*/
export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

type PlaceOrderParams1 = { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

type PlaceOrderParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
/**
* Find purchase order by ID
* For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
*/
export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
type DeleteOrderResult0 = RequestResult<null>;
/**
* Delete purchase order by ID
* For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
*/
export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

type CreateUserParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type CreateUserResult0 = RequestResult<null>;
/**
* Create user
* This can only be done by the logged in user.
*/
export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

type CreateUserParams1 = { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type CreateUserResult1 = RequestResult<null>;
export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

type CreateUserParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type CreateUserResult2 = RequestResult<null>;
export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

type CreateUsersWithListInputParams0 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Creates list of users with given input array
* Creates list of users with given input array
*/
export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

type CreateUsersWithListInputParams1 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type LoginUserResult0 = RequestResult<string>;
/**
* Logs user into the system
*/
export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type LoginUserResult1 = RequestResult<string>;
export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

type LogoutUserResult0 = RequestResult<null>;
/**
* Logs out current logged in user session
*/
export function logoutUser(): LogoutUserResult0;

type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
/**
* Get user by user name
*/
export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
type UpdateUserResult0 = RequestResult<null>;
/**
* Update user
* This can only be done by the logged in user.
*/
export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
type UpdateUserResult1 = RequestResult<null>;
export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
type UpdateUserResult2 = RequestResult<null>;
export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
type DeleteUserResult0 = RequestResult<null>;
/**
* Delete user
* This can only be done by the logged in user.
*/
export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

"
`;
