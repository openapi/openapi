const { swaggerapi } = require("./index");
const mockV1 = require("./mocks/mock-v1.json");

test("parse-v1", () => {
  const result = swaggerapi(mockV1);

  console.log(result);

  expect(result).toMatchInlineSnapshot(`
    Object {
      "definitions": "type ApiResponse = {
      code: number;
      type: string;
      message: string;
    };

    type Category = {
      id: number;
      name: string;
    };

    type Pet = {
      id?: number;
      category?: Category;
      name: string;
      photoUrls: string[];
      tags?: Tag[];
      status?: string;
    };

    type Tag = {
      id: number;
      name: string;
    };

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

    ",
      "paths": Object {
        "code": "export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, params);
    }

    export function addPet(params) {
      return request(\\"post\\", \`/pet\`, params);
    }

    export function updatePet(params) {
      return request(\\"put\\", \`/pet\`, params);
    }

    export function findPetsByStatus(params) {
      return request(\\"get\\", \`/pet/findByStatus\`, params);
    }

    export function findPetsByTags(params) {
      return request(\\"get\\", \`/pet/findByTags\`, params);
    }

    export function getPetById(params) {
      return request(\\"get\\", \`/pet/\${params.path.petId}\`, params);
    }

    export function updatePetWithForm(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}\`, params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`, params);
    }

    export function placeOrder(params) {
      return request(\\"post\\", \`/store/order\`, params);
    }

    export function getOrderById(params) {
      return request(\\"get\\", \`/store/order/\${params.path.orderId}\`, params);
    }

    export function deleteOrder(params) {
      return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`, params);
    }

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`);
    }

    export function createUsersWithArrayInput(params) {
      return request(\\"post\\", \`/user/createWithArray\`, params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`, params);
    }

    export function getUserByName(params) {
      return request(\\"get\\", \`/user/\${params.path.username}\`, params);
    }

    export function updateUser(params) {
      return request(\\"put\\", \`/user/\${params.path.username}\`, params);
    }

    export function deleteUser(params) {
      return request(\\"delete\\", \`/user/\${params.path.username}\`, params);
    }

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`, params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`);
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`, params);
    }

    ",
        "types": "type UploadFileParams = {
      path: {
        \\"petId\\": number;
      };
    };
    type UploadFileResult = ApiResponse;
    export function uploadFile(params: UploadFileParams): Promise<UploadFileResult>;

    type AddPetParams = {
      body: Pet;
    };
    export function addPet(params: AddPetParams): Promise<any>;

    type UpdatePetParams = {
      body: Pet;
    };
    export function updatePet(params: UpdatePetParams): Promise<any>;

    type FindPetsByStatusParams = {
      query: {
        \\"status\\": any[];
      };
    };
    export function findPetsByStatus(params: FindPetsByStatusParams): Promise<any>;

    type FindPetsByTagsParams = {
      query: {
        \\"tags\\": any[];
      };
    };
    export function findPetsByTags(params: FindPetsByTagsParams): Promise<any>;

    type GetPetByIdParams = {
      path: {
        \\"petId\\": number;
      };
    };
    type GetPetByIdResult = Pet;
    export function getPetById(params: GetPetByIdParams): Promise<GetPetByIdResult>;

    type UpdatePetWithFormParams = {
      path: {
        \\"petId\\": number;
      };
    };
    export function updatePetWithForm(params: UpdatePetWithFormParams): Promise<any>;

    type DeletePetParams = {
      header: {
        \\"api_key\\": string;
      };
      path: {
        \\"petId\\": number;
      };
    };
    export function deletePet(params: DeletePetParams): Promise<any>;

    type PlaceOrderParams = {
      body: Order;
    };
    type PlaceOrderResult = Order;
    export function placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResult>;

    type GetOrderByIdParams = {
      path: {
        \\"orderId\\": number;
      };
    };
    type GetOrderByIdResult = Order;
    export function getOrderById(params: GetOrderByIdParams): Promise<GetOrderByIdResult>;

    type DeleteOrderParams = {
      path: {
        \\"orderId\\": number;
      };
    };
    export function deleteOrder(params: DeleteOrderParams): Promise<any>;

    export function getInventory(): Promise<any>;

    type CreateUsersWithArrayInputParams = {
      body: ;
    };
    export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams): Promise<any>;

    type CreateUsersWithListInputParams = {
      body: ;
    };
    export function createUsersWithListInput(params: CreateUsersWithListInputParams): Promise<any>;

    type GetUserByNameParams = {
      path: {
        \\"username\\": string;
      };
    };
    type GetUserByNameResult = User;
    export function getUserByName(params: GetUserByNameParams): Promise<GetUserByNameResult>;

    type UpdateUserParams = {
      path: {
        \\"username\\": string;
      };
      body: User;
    };
    export function updateUser(params: UpdateUserParams): Promise<any>;

    type DeleteUserParams = {
      path: {
        \\"username\\": string;
      };
    };
    export function deleteUser(params: DeleteUserParams): Promise<any>;

    type LoginUserParams = {
      query: {
        \\"username\\": string;
        \\"undefined\\": any;
      };
    };
    export function loginUser(params: LoginUserParams): Promise<any>;

    export function logoutUser(): Promise<any>;

    type CreateUserParams = {
      body: User;
    };
    export function createUser(params: CreateUserParams): Promise<any>;

    ",
      },
    }
  `);
});
