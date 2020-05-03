const { swaggerapi } = require("./index");
const mockV1 = require("./mocks/mock-v1.json");

test("parse-v1", () => {
  const result = swaggerapi(mockV1);

  expect(result).toMatchInlineSnapshot(`
    Object {
      "code": "function request(method, url, defaultParams = {}) {
      return (params = {}) => {
        const query = new URLSearchParams(params.query).toString();

        let body;

        if (params.body) {
          if (defaultParams.header) {
            switch (defaultParams.header.accept) {
              case \\"application/json\\":
                body = JSON.stringify(params.body);
                break;
              default:
                body = params.body;
                break;
            }
          }
        } else if (params.formData) {
          body = params.formData;
        }

        return fetch(\`\${url}\${query ? \`?\${query}\` : \\"\\"}\`, {
          method,
          headers: { ...defaultParams.header, ...params.header },
          body,
        });
      };
    }

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, {
        header: {
          accept: \\"multipart/form-data\\",
          \\"Content-Type\\": \\"application/json\\",
        },
      })(params);
    }

    export function addPet(params) {
      return request(\\"post\\", \`/pet\`)(params);
    }

    export function updatePet(params) {
      return request(\\"put\\", \`/pet\`)(params);
    }

    export function findPetsByStatus(params) {
      return request(\\"get\\", \`/pet/findByStatus\`)(params);
    }

    export function findPetsByTags(params) {
      console.warn(\\"Api method 'findPetsByTags' is deprecated\\");
      return request(\\"get\\", \`/pet/findByTags\`)(params);
    }

    export function getPetById(params) {
      return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function updatePetWithForm(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}\`, {
        header: { accept: \\"application/x-www-form-urlencoded\\" },
      })(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function placeOrder(params) {
      return request(\\"post\\", \`/store/order\`, {
        header: { accept: \\"application/json\\" },
      })(params);
    }

    export function getOrderById(params) {
      return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function deleteOrder(params) {
      return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, {
        header: { \\"Content-Type\\": \\"application/json\\" },
      })();
    }

    export function createUsersWithArrayInput(params) {
      return request(\\"post\\", \`/user/createWithArray\`, {
        header: { accept: \\"application/json\\" },
      })(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`, {
        header: { accept: \\"application/json\\" },
      })(params);
    }

    export function getUserByName(params) {
      return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
    }

    export function updateUser(params) {
      return request(\\"put\\", \`/user/\${params.path.username}\`, {
        header: { accept: \\"application/json\\" },
      })(params);
    }

    export function deleteUser(params) {
      return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
    }

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`, { header: { accept: \\"application/json\\" } })(
        params,
      );
    }
    ",
      "types": "type ApiResponse = { code: number; type: string; message: string };

    type Category = { id: number; name: string };

    type Pet = {
      id?: number;
      category?: Category;
      name: string;
      photoUrls: string[];
      tags?: Tag[];
      status?: string;
    };

    type Tag = { id: number; name: string };

    type Order = {
      id: number;
      petId: number;
      quantity: number;
      shipDate: string;
      status: string;
      complete: boolean;
    };

    type User = {
      id: number;
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      phone: string;
      userStatus: number;
    };

    type UploadFileParams = {
      path: { petId: number };
      formData: { additionalMetadata?: string; file?: File };
    };
    type UploadFileResult = ApiResponse;
    export function uploadFile(params: UploadFileParams): Promise<UploadFileResult>;

    type AddPetParams = {
      body: Pet;
      header: {
        accept: \\"application/json\\" | \\"application/xml\\";
        \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\";
      };
    };
    export function addPet(params: AddPetParams): Promise<void>;

    type UpdatePetParams = {
      body: Pet;
      header: {
        accept: \\"application/json\\" | \\"application/xml\\";
        \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\";
      };
    };
    export function updatePet(params: UpdatePetParams): Promise<void>;

    type FindPetsByStatusParams = {
      query: { status: string[] };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type FindPetsByStatusResult = Pet[];
    export function findPetsByStatus(
      params: FindPetsByStatusParams,
    ): Promise<FindPetsByStatusResult>;

    type FindPetsByTagsParams = {
      query: { tags: string[] };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type FindPetsByTagsResult = Pet[];
    export function findPetsByTags(
      params: FindPetsByTagsParams,
    ): Promise<FindPetsByTagsResult>;

    type GetPetByIdParams = {
      path: { petId: number };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type GetPetByIdResult = Pet;
    export function getPetById(params: GetPetByIdParams): Promise<GetPetByIdResult>;

    type UpdatePetWithFormParams = {
      path: { petId: number };
      formData: { name?: string; status?: string };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function updatePetWithForm(
      params: UpdatePetWithFormParams,
    ): Promise<void>;

    type DeletePetParams = {
      header: {
        api_key?: string;
        \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\";
      };
      path: { petId: number };
    };
    export function deletePet(params: DeletePetParams): Promise<void>;

    type PlaceOrderParams = {
      body: Order;
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type PlaceOrderResult = Order;
    export function placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResult>;

    type GetOrderByIdParams = {
      path: { orderId: number };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type GetOrderByIdResult = Order;
    export function getOrderById(
      params: GetOrderByIdParams,
    ): Promise<GetOrderByIdResult>;

    type DeleteOrderParams = {
      path: { orderId: number };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function deleteOrder(params: DeleteOrderParams): Promise<void>;

    type GetInventoryResult = { [nameProp: string]: number };
    export function getInventory(): Promise<GetInventoryResult>;

    type CreateUsersWithArrayInputParams = {
      body: User[];
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function createUsersWithArrayInput(
      params: CreateUsersWithArrayInputParams,
    ): Promise<void>;

    type CreateUsersWithListInputParams = {
      body: User[];
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function createUsersWithListInput(
      params: CreateUsersWithListInputParams,
    ): Promise<void>;

    type GetUserByNameParams = {
      path: { username: string };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type GetUserByNameResult = User;
    export function getUserByName(
      params: GetUserByNameParams,
    ): Promise<GetUserByNameResult>;

    type UpdateUserParams = {
      path: { username: string };
      body: User;
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function updateUser(params: UpdateUserParams): Promise<void>;

    type DeleteUserParams = {
      path: { username: string };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function deleteUser(params: DeleteUserParams): Promise<void>;

    type LoginUserParams = {
      query: { username: string; password: string };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type LoginUserResult = string;
    export function loginUser(params: LoginUserParams): Promise<LoginUserResult>;

    type LogoutUserParams = {
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function logoutUser(params: LogoutUserParams): Promise<void>;

    type CreateUserParams = {
      body: User;
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function createUser(params: CreateUserParams): Promise<void>;
    ",
    }
  `);
});

test("parse-deprecated-ignore", () => {
  const result = swaggerapi(mockV1, {
    deprecated: "ignore",
  });

  expect(result).toMatchInlineSnapshot(`
    Object {
      "code": "function request(method, url, defaultParams = {}) {
      return (params = {}) => {
        const query = new URLSearchParams(params.query).toString();

        let body;

        if (params.body) {
          if (defaultParams.header) {
            switch (defaultParams.header.accept) {
              case \\"application/json\\":
                body = JSON.stringify(params.body);
                break;
              default:
                body = params.body;
                break;
            }
          }
        } else if (params.formData) {
          body = params.formData;
        }

        return fetch(\`\${url}\${query ? \`?\${query}\` : \\"\\"}\`, {
          method,
          headers: { ...defaultParams.header, ...params.header },
          body,
        });
      };
    }

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, {
        header: {
          accept: \\"multipart/form-data\\",
          \\"Content-Type\\": \\"application/json\\",
        },
      })(params);
    }

    export function addPet(params) {
      return request(\\"post\\", \`/pet\`)(params);
    }

    export function updatePet(params) {
      return request(\\"put\\", \`/pet\`)(params);
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
      return request(\\"post\\", \`/pet/\${params.path.petId}\`, {
        header: { accept: \\"application/x-www-form-urlencoded\\" },
      })(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function placeOrder(params) {
      return request(\\"post\\", \`/store/order\`, {
        header: { accept: \\"application/json\\" },
      })(params);
    }

    export function getOrderById(params) {
      return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function deleteOrder(params) {
      return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, {
        header: { \\"Content-Type\\": \\"application/json\\" },
      })();
    }

    export function createUsersWithArrayInput(params) {
      return request(\\"post\\", \`/user/createWithArray\`, {
        header: { accept: \\"application/json\\" },
      })(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`, {
        header: { accept: \\"application/json\\" },
      })(params);
    }

    export function getUserByName(params) {
      return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
    }

    export function updateUser(params) {
      return request(\\"put\\", \`/user/\${params.path.username}\`, {
        header: { accept: \\"application/json\\" },
      })(params);
    }

    export function deleteUser(params) {
      return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
    }

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`, { header: { accept: \\"application/json\\" } })(
        params,
      );
    }
    ",
      "types": "type ApiResponse = { code: number; type: string; message: string };

    type Category = { id: number; name: string };

    type Pet = {
      id?: number;
      category?: Category;
      name: string;
      photoUrls: string[];
      tags?: Tag[];
      status?: string;
    };

    type Tag = { id: number; name: string };

    type Order = {
      id: number;
      petId: number;
      quantity: number;
      shipDate: string;
      status: string;
      complete: boolean;
    };

    type User = {
      id: number;
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      phone: string;
      userStatus: number;
    };

    type UploadFileParams = {
      path: { petId: number };
      formData: { additionalMetadata?: string; file?: File };
    };
    type UploadFileResult = ApiResponse;
    export function uploadFile(params: UploadFileParams): Promise<UploadFileResult>;

    type AddPetParams = {
      body: Pet;
      header: {
        accept: \\"application/json\\" | \\"application/xml\\";
        \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\";
      };
    };
    export function addPet(params: AddPetParams): Promise<void>;

    type UpdatePetParams = {
      body: Pet;
      header: {
        accept: \\"application/json\\" | \\"application/xml\\";
        \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\";
      };
    };
    export function updatePet(params: UpdatePetParams): Promise<void>;

    type FindPetsByStatusParams = {
      query: { status: string[] };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type FindPetsByStatusResult = Pet[];
    export function findPetsByStatus(
      params: FindPetsByStatusParams,
    ): Promise<FindPetsByStatusResult>;

    type FindPetsByTagsParams = {
      query: { tags: string[] };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type FindPetsByTagsResult = Pet[];
    export function findPetsByTags(
      params: FindPetsByTagsParams,
    ): Promise<FindPetsByTagsResult>;

    type GetPetByIdParams = {
      path: { petId: number };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type GetPetByIdResult = Pet;
    export function getPetById(params: GetPetByIdParams): Promise<GetPetByIdResult>;

    type UpdatePetWithFormParams = {
      path: { petId: number };
      formData: { name?: string; status?: string };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function updatePetWithForm(
      params: UpdatePetWithFormParams,
    ): Promise<void>;

    type DeletePetParams = {
      header: {
        api_key?: string;
        \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\";
      };
      path: { petId: number };
    };
    export function deletePet(params: DeletePetParams): Promise<void>;

    type PlaceOrderParams = {
      body: Order;
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type PlaceOrderResult = Order;
    export function placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResult>;

    type GetOrderByIdParams = {
      path: { orderId: number };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type GetOrderByIdResult = Order;
    export function getOrderById(
      params: GetOrderByIdParams,
    ): Promise<GetOrderByIdResult>;

    type DeleteOrderParams = {
      path: { orderId: number };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function deleteOrder(params: DeleteOrderParams): Promise<void>;

    type GetInventoryResult = { [nameProp: string]: number };
    export function getInventory(): Promise<GetInventoryResult>;

    type CreateUsersWithArrayInputParams = {
      body: User[];
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function createUsersWithArrayInput(
      params: CreateUsersWithArrayInputParams,
    ): Promise<void>;

    type CreateUsersWithListInputParams = {
      body: User[];
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function createUsersWithListInput(
      params: CreateUsersWithListInputParams,
    ): Promise<void>;

    type GetUserByNameParams = {
      path: { username: string };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type GetUserByNameResult = User;
    export function getUserByName(
      params: GetUserByNameParams,
    ): Promise<GetUserByNameResult>;

    type UpdateUserParams = {
      path: { username: string };
      body: User;
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function updateUser(params: UpdateUserParams): Promise<void>;

    type DeleteUserParams = {
      path: { username: string };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function deleteUser(params: DeleteUserParams): Promise<void>;

    type LoginUserParams = {
      query: { username: string; password: string };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type LoginUserResult = string;
    export function loginUser(params: LoginUserParams): Promise<LoginUserResult>;

    type LogoutUserParams = {
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function logoutUser(params: LogoutUserParams): Promise<void>;

    type CreateUserParams = {
      body: User;
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function createUser(params: CreateUserParams): Promise<void>;
    ",
    }
  `);
});

test("parse-deprecated-ignore", () => {
  const result = swaggerapi(mockV1, {
    deprecated: "exception",
  });

  expect(result).toMatchInlineSnapshot(`
    Object {
      "code": "function request(method, url, defaultParams = {}) {
      return (params = {}) => {
        const query = new URLSearchParams(params.query).toString();

        let body;

        if (params.body) {
          if (defaultParams.header) {
            switch (defaultParams.header.accept) {
              case \\"application/json\\":
                body = JSON.stringify(params.body);
                break;
              default:
                body = params.body;
                break;
            }
          }
        } else if (params.formData) {
          body = params.formData;
        }

        return fetch(\`\${url}\${query ? \`?\${query}\` : \\"\\"}\`, {
          method,
          headers: { ...defaultParams.header, ...params.header },
          body,
        });
      };
    }

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, {
        header: {
          accept: \\"multipart/form-data\\",
          \\"Content-Type\\": \\"application/json\\",
        },
      })(params);
    }

    export function addPet(params) {
      return request(\\"post\\", \`/pet\`)(params);
    }

    export function updatePet(params) {
      return request(\\"put\\", \`/pet\`)(params);
    }

    export function findPetsByStatus(params) {
      return request(\\"get\\", \`/pet/findByStatus\`)(params);
    }

    export function getPetById(params) {
      return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function updatePetWithForm(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}\`, {
        header: { accept: \\"application/x-www-form-urlencoded\\" },
      })(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function placeOrder(params) {
      return request(\\"post\\", \`/store/order\`, {
        header: { accept: \\"application/json\\" },
      })(params);
    }

    export function getOrderById(params) {
      return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function deleteOrder(params) {
      return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, {
        header: { \\"Content-Type\\": \\"application/json\\" },
      })();
    }

    export function createUsersWithArrayInput(params) {
      return request(\\"post\\", \`/user/createWithArray\`, {
        header: { accept: \\"application/json\\" },
      })(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`, {
        header: { accept: \\"application/json\\" },
      })(params);
    }

    export function getUserByName(params) {
      return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
    }

    export function updateUser(params) {
      return request(\\"put\\", \`/user/\${params.path.username}\`, {
        header: { accept: \\"application/json\\" },
      })(params);
    }

    export function deleteUser(params) {
      return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
    }

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`, { header: { accept: \\"application/json\\" } })(
        params,
      );
    }
    ",
      "types": "type ApiResponse = { code: number; type: string; message: string };

    type Category = { id: number; name: string };

    type Pet = {
      id?: number;
      category?: Category;
      name: string;
      photoUrls: string[];
      tags?: Tag[];
      status?: string;
    };

    type Tag = { id: number; name: string };

    type Order = {
      id: number;
      petId: number;
      quantity: number;
      shipDate: string;
      status: string;
      complete: boolean;
    };

    type User = {
      id: number;
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      phone: string;
      userStatus: number;
    };

    type UploadFileParams = {
      path: { petId: number };
      formData: { additionalMetadata?: string; file?: File };
    };
    type UploadFileResult = ApiResponse;
    export function uploadFile(params: UploadFileParams): Promise<UploadFileResult>;

    type AddPetParams = {
      body: Pet;
      header: {
        accept: \\"application/json\\" | \\"application/xml\\";
        \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\";
      };
    };
    export function addPet(params: AddPetParams): Promise<void>;

    type UpdatePetParams = {
      body: Pet;
      header: {
        accept: \\"application/json\\" | \\"application/xml\\";
        \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\";
      };
    };
    export function updatePet(params: UpdatePetParams): Promise<void>;

    type FindPetsByStatusParams = {
      query: { status: string[] };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type FindPetsByStatusResult = Pet[];
    export function findPetsByStatus(
      params: FindPetsByStatusParams,
    ): Promise<FindPetsByStatusResult>;

    type GetPetByIdParams = {
      path: { petId: number };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type GetPetByIdResult = Pet;
    export function getPetById(params: GetPetByIdParams): Promise<GetPetByIdResult>;

    type UpdatePetWithFormParams = {
      path: { petId: number };
      formData: { name?: string; status?: string };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function updatePetWithForm(
      params: UpdatePetWithFormParams,
    ): Promise<void>;

    type DeletePetParams = {
      header: {
        api_key?: string;
        \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\";
      };
      path: { petId: number };
    };
    export function deletePet(params: DeletePetParams): Promise<void>;

    type PlaceOrderParams = {
      body: Order;
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type PlaceOrderResult = Order;
    export function placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResult>;

    type GetOrderByIdParams = {
      path: { orderId: number };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type GetOrderByIdResult = Order;
    export function getOrderById(
      params: GetOrderByIdParams,
    ): Promise<GetOrderByIdResult>;

    type DeleteOrderParams = {
      path: { orderId: number };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function deleteOrder(params: DeleteOrderParams): Promise<void>;

    type GetInventoryResult = { [nameProp: string]: number };
    export function getInventory(): Promise<GetInventoryResult>;

    type CreateUsersWithArrayInputParams = {
      body: User[];
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function createUsersWithArrayInput(
      params: CreateUsersWithArrayInputParams,
    ): Promise<void>;

    type CreateUsersWithListInputParams = {
      body: User[];
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function createUsersWithListInput(
      params: CreateUsersWithListInputParams,
    ): Promise<void>;

    type GetUserByNameParams = {
      path: { username: string };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type GetUserByNameResult = User;
    export function getUserByName(
      params: GetUserByNameParams,
    ): Promise<GetUserByNameResult>;

    type UpdateUserParams = {
      path: { username: string };
      body: User;
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function updateUser(params: UpdateUserParams): Promise<void>;

    type DeleteUserParams = {
      path: { username: string };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function deleteUser(params: DeleteUserParams): Promise<void>;

    type LoginUserParams = {
      query: { username: string; password: string };
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    type LoginUserResult = string;
    export function loginUser(params: LoginUserParams): Promise<LoginUserResult>;

    type LogoutUserParams = {
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function logoutUser(params: LogoutUserParams): Promise<void>;

    type CreateUserParams = {
      body: User;
      header: { \\"Content-Type\\": \\"application/json\\" | \\"application/xml\\" };
    };
    export function createUser(params: CreateUserParams): Promise<void>;
    ",
    }
  `);
});
