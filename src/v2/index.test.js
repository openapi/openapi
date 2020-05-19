const { swaggerToJs } = require("../index");
const apiJson = require("../mocks/petstore-v2.json");

test("without config", () => {
  const result = swaggerToJs(apiJson);

  expect(result).toMatchInlineSnapshot(`
    Object {
      "index.d.ts": Object {
        "content": "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

    type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"additionalMetadata\\": string; \\"file\\": File; }; };
    type UploadFileResult0 = RequestResult<{ \\"code\\": number; \\"type\\": string; \\"message\\": string; }>;
    export function uploadFile(params: UploadFileParams0): UploadFileResult0;

    type AddPetParams0 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult0 = RequestResult<null>;
    export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

    type AddPetParams1 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult1 = RequestResult<null>;
    export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

    type AddPetParams2 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams2 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult2 = RequestResult<null>;
    export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

    type AddPetParams3 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams3 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult3 = RequestResult<null>;
    export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

    type UpdatePetParams0 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult0 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

    type UpdatePetParams1 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult1 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

    type UpdatePetParams2 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams2 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult2 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

    type UpdatePetParams3 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams3 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult3 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

    type FindPetsByStatusParams0 = { \\"query\\": { \\"status\\": (\\"available\\" | \\"pending\\" | \\"sold\\")[]; }; };
    type FindPetsByStatusAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByStatusResult0 = RequestResult<({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

    type FindPetsByStatusParams1 = { \\"query\\": { \\"status\\": (\\"available\\" | \\"pending\\" | \\"sold\\")[]; }; };
    type FindPetsByStatusAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByStatusResult1 = RequestResult<{ \\"Pet\\": ({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

    type FindPetsByTagsParams0 = { \\"query\\": { \\"tags\\": (string)[]; }; };
    type FindPetsByTagsAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByTagsResult0 = RequestResult<({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

    type FindPetsByTagsParams1 = { \\"query\\": { \\"tags\\": (string)[]; }; };
    type FindPetsByTagsAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByTagsResult1 = RequestResult<{ \\"Pet\\": ({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

    type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetPetByIdResult0 = RequestResult<{ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

    type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetPetByIdResult1 = RequestResult<{ \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

    type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"name\\": string; \\"status\\": string; }; };
    type UpdatePetWithFormAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetWithFormResult0 = RequestResult<null>;
    export function updatePetWithForm(params: UpdatePetWithFormParams0 & UpdatePetWithFormAddedParams0): UpdatePetWithFormResult0;

    type UpdatePetWithFormParams1 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"name\\": string; \\"status\\": string; }; };
    type UpdatePetWithFormAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetWithFormResult1 = RequestResult<null>;
    export function updatePetWithForm(params: UpdatePetWithFormParams1 & UpdatePetWithFormAddedParams1): UpdatePetWithFormResult1;

    type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\": string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeletePetResult0 = RequestResult<null>;
    export function deletePet(params: DeletePetParams0 & DeletePetAddedParams0): DeletePetResult0;

    type DeletePetParams1 = { \\"header\\"?: { \\"api_key\\": string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeletePetResult1 = RequestResult<null>;
    export function deletePet(params: DeletePetParams1 & DeletePetAddedParams1): DeletePetResult1;

    type PlaceOrderParams0 = { \\"body\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; };
    type PlaceOrderAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult0 = RequestResult<{ \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }>;
    export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

    type PlaceOrderParams1 = { \\"body\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; };
    type PlaceOrderAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type PlaceOrderResult1 = RequestResult<{ \\"Order\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; }>;
    export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

    type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetOrderByIdResult0 = RequestResult<{ \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }>;
    export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

    type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetOrderByIdResult1 = RequestResult<{ \\"Order\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; }>;
    export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

    type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeleteOrderResult0 = RequestResult<null>;
    export function deleteOrder(params: DeleteOrderParams0 & DeleteOrderAddedParams0): DeleteOrderResult0;

    type DeleteOrderParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeleteOrderResult1 = RequestResult<null>;
    export function deleteOrder(params: DeleteOrderParams1 & DeleteOrderAddedParams1): DeleteOrderResult1;

    type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
    export function getInventory(): GetInventoryResult0;

    type CreateUsersWithArrayInputParams0 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithArrayInputAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithArrayInputResult0 = RequestResult<null>;
    export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams0 & CreateUsersWithArrayInputAddedParams0): CreateUsersWithArrayInputResult0;

    type CreateUsersWithArrayInputParams1 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithArrayInputAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithArrayInputResult1 = RequestResult<null>;
    export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams1 & CreateUsersWithArrayInputAddedParams1): CreateUsersWithArrayInputResult1;

    type CreateUsersWithListInputParams0 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithListInputAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithListInputResult0 = RequestResult<null>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

    type CreateUsersWithListInputParams1 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithListInputAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithListInputResult1 = RequestResult<null>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

    type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetUserByNameResult0 = RequestResult<{ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }>;
    export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

    type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetUserByNameResult1 = RequestResult<{ \\"User\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; }>;
    export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

    type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type UpdateUserAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdateUserResult0 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

    type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type UpdateUserAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdateUserResult1 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

    type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeleteUserResult0 = RequestResult<null>;
    export function deleteUser(params: DeleteUserParams0 & DeleteUserAddedParams0): DeleteUserResult0;

    type DeleteUserParams1 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeleteUserResult1 = RequestResult<null>;
    export function deleteUser(params: DeleteUserParams1 & DeleteUserAddedParams1): DeleteUserResult1;

    type LoginUserParams0 = { \\"query\\": { \\"username\\": string; \\"password\\": string; }; };
    type LoginUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type LoginUserResult0 = RequestResult<string>;
    export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

    type LoginUserParams1 = { \\"query\\": { \\"username\\": string; \\"password\\": string; }; };
    type LoginUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LoginUserResult1 = RequestResult<string>;
    export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

    type LogoutUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type LogoutUserResult0 = RequestResult<null>;
    export function logoutUser(params: LogoutUserAddedParams0): LogoutUserResult0;

    type LogoutUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LogoutUserResult1 = RequestResult<null>;
    export function logoutUser(params: LogoutUserAddedParams1): LogoutUserResult1;

    type CreateUserParams0 = { \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type CreateUserAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUserResult0 = RequestResult<null>;
    export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

    type CreateUserParams1 = { \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type CreateUserAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUserResult1 = RequestResult<null>;
    export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

    ",
      },
      "index.js": Object {
        "content": "import { request } from './request';

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"multipart/form-data\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
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
      return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
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

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
    }

    export function createUsersWithArrayInput(params) {
      return request(\\"post\\", \`/user/createWithArray\`)(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`)(params);
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

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`)(params);
    }

    ",
      },
      "request.js": Object {
        "content": "import { jsonToXml } from './json-to-xml';
    import { xmlToJson } from './xml-to-json';

    export function request(method, url, defaultParams = {}) {
      return (params = {}) => {
        const query = new URLSearchParams(params.query).toString();
        const headers = { ...defaultParams.header, ...params.header };

        let body;

        const buildFormData = (object) => {
          const result = new FormData();

          Object.keys(object).forEach((key) => {
            result.append(key, object[key]);
          });

          return result;
        };

        if (params.body) {
          switch (headers.accept) {
            case \\"multipart/form-data\\":
              body = buildFormData(params.body);
              break;
            case \\"application/xml\\":
              body = jsonToXml(params.body);
              break;
            case \\"application/json\\":
              body = JSON.stringify(params.body);
              break;
            default:
              body = params.body;
              break;
          }
        } else if (params.formData) {
          body = buildFormData(params.formData);
        }

        return fetch(\`\${url}\${query ? \`?\${query}\` : \\"\\"}\`, {
          method,
          headers,
          body,
        }).then(async (response) => {
          let data = null;

          const headersValues = Object.values(headers);
          const headersKeys = Object.keys(headers).map((value) =>
            value.toLocaleLowerCase(),
          );

          switch (headersValues[headersKeys.indexOf(\\"content-type\\")]) {
            case \\"multipart/form-data\\":
              data = await response.formData();
              break;
            case \\"application/xml\\":
              data = xmlToJson(await response.text());
              break;
            case \\"application/json\\":
              data = await response.json();
              break;
            default:
              break;
          }

          return { response, data };
        });
      };
    }
    ",
        "dependencies": Object {
          "json-to-xml.js": Object {
            "content": "export function jsonToXml(o) {
      if (
        typeof o === \\"object\\" &&
        o.constructor === Object &&
        Object.keys(o).length === 1
      ) {
        for (var a in o) {
          return toXML(a, o[a]);
        }
      } else {
      }

      function toXML(tag, o) {
        var doc = \\"<\\" + tag;
        if (typeof o === \\"undefined\\" || o === null) {
          doc += \\"/>\\";
          return doc;
        }
        if (typeof o !== \\"object\\") {
          doc += \\">\\" + safeXMLValue(o) + \\"</\\" + tag + \\">\\";
          return doc;
        }
        if (o.constructor === Object) {
          for (var a in o) {
            if (a.charAt(0) === \\"@\\") {
              if (typeof o[a] !== \\"object\\") {
                doc += \\" \\" + a.substring(1) + '=\\"' + o[a] + '\\"';
                delete o[a];
              } else {
                throw new Error(typeof o[a] + \\" being attribute is not supported.\\");
              }
            }
          }
          if (Object.keys(o).length === 0) {
            doc += \\"/>\\";
            return doc;
          } else {
            doc += \\">\\";
          }
          if (typeof o[\\"#text\\"] !== \\"undefined\\") {
            if (typeof o[\\"#text\\"] !== \\"object\\") {
              doc += o[\\"#text\\"];
              delete o[\\"#text\\"];
            } else {
              throw new Error(typeof o[\\"#text\\"] + \\" being #text is not supported.\\");
            }
          }
          for (var b in o) {
            if (o[b].constructor === Array) {
              for (var i = 0; i < o[b].length; i++) {
                if (typeof o[b][i] !== \\"object\\" || o[b][i].constructor === Object) {
                  doc += toXML(b, o[b][i]);
                } else {
                  throw new Error(typeof o[b][i] + \\" is not supported.\\");
                }
              }
            } else if (o[b].constructor === Object || typeof o[b] !== \\"object\\") {
              doc += toXML(b, o[b]);
            } else {
              throw new Error(typeof o[b] + \\" is not supported.\\");
            }
          }
          doc += \\"</\\" + tag + \\">\\";
          return doc;
        }
      }
      function safeXMLValue(value) {
        var s = value.toString();
        s = s.replace(\\"/&/g\\", \\"&amp;\\");
        s = s.replace('/\\"/g', \\"&quot;\\");
        s = s.replace(\\"/</g\\", \\"&lt;\\");
        s = s.replace(\\"/>/g\\", \\"&gt;\\");
        return s;
      }
    }
    ",
          },
          "xml-to-json.js": Object {
            "content": "export function xmlToJson(xmlStr) {
      const parser = (xml) => {
        // Create the return object
        var obj = {};

        if (xml.nodeType === 1) {
          // element
          // do attributes
          if (xml.attributes.length > 0) {
            obj[\\"@attributes\\"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              obj[\\"@attributes\\"][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType === 3) {
          // text
          obj = xml.nodeValue;
        }

        // do children
        // If all text nodes inside, get concatenated text from them.
        var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
          return node.nodeType === 3;
        });

        if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
          obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
            return text + node.nodeValue;
          }, \\"\\");
        } else if (xml.hasChildNodes()) {
          for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof obj[nodeName] == \\"undefined\\") {
              obj[nodeName] = parser(item);
            } else {
              if (typeof obj[nodeName].push == \\"undefined\\") {
                var old = obj[nodeName];
                obj[nodeName] = [];
                obj[nodeName].push(old);
              }
              obj[nodeName].push(parser(item));
            }
          }
        }

        return obj;
      };

      return parser(new DOMParser().parseFromString(xmlStr, \\"text/xml\\"));
    }
    ",
          },
        },
      },
    }
  `);
});

test("deprecated=ignore", () => {
  const result = swaggerToJs(apiJson, {
    deprecated: "ignore",
  });

  expect(result).toMatchInlineSnapshot(`
    Object {
      "index.d.ts": Object {
        "content": "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

    type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"additionalMetadata\\": string; \\"file\\": File; }; };
    type UploadFileResult0 = RequestResult<{ \\"code\\": number; \\"type\\": string; \\"message\\": string; }>;
    export function uploadFile(params: UploadFileParams0): UploadFileResult0;

    type AddPetParams0 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult0 = RequestResult<null>;
    export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

    type AddPetParams1 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult1 = RequestResult<null>;
    export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

    type AddPetParams2 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams2 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult2 = RequestResult<null>;
    export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

    type AddPetParams3 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams3 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult3 = RequestResult<null>;
    export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

    type UpdatePetParams0 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult0 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

    type UpdatePetParams1 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult1 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

    type UpdatePetParams2 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams2 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult2 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

    type UpdatePetParams3 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams3 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult3 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

    type FindPetsByStatusParams0 = { \\"query\\": { \\"status\\": (\\"available\\" | \\"pending\\" | \\"sold\\")[]; }; };
    type FindPetsByStatusAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByStatusResult0 = RequestResult<({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

    type FindPetsByStatusParams1 = { \\"query\\": { \\"status\\": (\\"available\\" | \\"pending\\" | \\"sold\\")[]; }; };
    type FindPetsByStatusAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByStatusResult1 = RequestResult<{ \\"Pet\\": ({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

    type FindPetsByTagsParams0 = { \\"query\\": { \\"tags\\": (string)[]; }; };
    type FindPetsByTagsAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByTagsResult0 = RequestResult<({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

    type FindPetsByTagsParams1 = { \\"query\\": { \\"tags\\": (string)[]; }; };
    type FindPetsByTagsAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByTagsResult1 = RequestResult<{ \\"Pet\\": ({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

    type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetPetByIdResult0 = RequestResult<{ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

    type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetPetByIdResult1 = RequestResult<{ \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

    type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"name\\": string; \\"status\\": string; }; };
    type UpdatePetWithFormAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetWithFormResult0 = RequestResult<null>;
    export function updatePetWithForm(params: UpdatePetWithFormParams0 & UpdatePetWithFormAddedParams0): UpdatePetWithFormResult0;

    type UpdatePetWithFormParams1 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"name\\": string; \\"status\\": string; }; };
    type UpdatePetWithFormAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetWithFormResult1 = RequestResult<null>;
    export function updatePetWithForm(params: UpdatePetWithFormParams1 & UpdatePetWithFormAddedParams1): UpdatePetWithFormResult1;

    type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\": string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeletePetResult0 = RequestResult<null>;
    export function deletePet(params: DeletePetParams0 & DeletePetAddedParams0): DeletePetResult0;

    type DeletePetParams1 = { \\"header\\"?: { \\"api_key\\": string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeletePetResult1 = RequestResult<null>;
    export function deletePet(params: DeletePetParams1 & DeletePetAddedParams1): DeletePetResult1;

    type PlaceOrderParams0 = { \\"body\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; };
    type PlaceOrderAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult0 = RequestResult<{ \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }>;
    export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

    type PlaceOrderParams1 = { \\"body\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; };
    type PlaceOrderAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type PlaceOrderResult1 = RequestResult<{ \\"Order\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; }>;
    export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

    type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetOrderByIdResult0 = RequestResult<{ \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }>;
    export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

    type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetOrderByIdResult1 = RequestResult<{ \\"Order\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; }>;
    export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

    type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeleteOrderResult0 = RequestResult<null>;
    export function deleteOrder(params: DeleteOrderParams0 & DeleteOrderAddedParams0): DeleteOrderResult0;

    type DeleteOrderParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeleteOrderResult1 = RequestResult<null>;
    export function deleteOrder(params: DeleteOrderParams1 & DeleteOrderAddedParams1): DeleteOrderResult1;

    type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
    export function getInventory(): GetInventoryResult0;

    type CreateUsersWithArrayInputParams0 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithArrayInputAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithArrayInputResult0 = RequestResult<null>;
    export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams0 & CreateUsersWithArrayInputAddedParams0): CreateUsersWithArrayInputResult0;

    type CreateUsersWithArrayInputParams1 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithArrayInputAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithArrayInputResult1 = RequestResult<null>;
    export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams1 & CreateUsersWithArrayInputAddedParams1): CreateUsersWithArrayInputResult1;

    type CreateUsersWithListInputParams0 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithListInputAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithListInputResult0 = RequestResult<null>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

    type CreateUsersWithListInputParams1 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithListInputAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithListInputResult1 = RequestResult<null>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

    type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetUserByNameResult0 = RequestResult<{ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }>;
    export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

    type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetUserByNameResult1 = RequestResult<{ \\"User\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; }>;
    export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

    type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type UpdateUserAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdateUserResult0 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

    type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type UpdateUserAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdateUserResult1 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

    type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeleteUserResult0 = RequestResult<null>;
    export function deleteUser(params: DeleteUserParams0 & DeleteUserAddedParams0): DeleteUserResult0;

    type DeleteUserParams1 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeleteUserResult1 = RequestResult<null>;
    export function deleteUser(params: DeleteUserParams1 & DeleteUserAddedParams1): DeleteUserResult1;

    type LoginUserParams0 = { \\"query\\": { \\"username\\": string; \\"password\\": string; }; };
    type LoginUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type LoginUserResult0 = RequestResult<string>;
    export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

    type LoginUserParams1 = { \\"query\\": { \\"username\\": string; \\"password\\": string; }; };
    type LoginUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LoginUserResult1 = RequestResult<string>;
    export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

    type LogoutUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type LogoutUserResult0 = RequestResult<null>;
    export function logoutUser(params: LogoutUserAddedParams0): LogoutUserResult0;

    type LogoutUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LogoutUserResult1 = RequestResult<null>;
    export function logoutUser(params: LogoutUserAddedParams1): LogoutUserResult1;

    type CreateUserParams0 = { \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type CreateUserAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUserResult0 = RequestResult<null>;
    export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

    type CreateUserParams1 = { \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type CreateUserAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUserResult1 = RequestResult<null>;
    export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

    ",
      },
      "index.js": Object {
        "content": "import { request } from './request';

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"multipart/form-data\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
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
      return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
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

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
    }

    export function createUsersWithArrayInput(params) {
      return request(\\"post\\", \`/user/createWithArray\`)(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`)(params);
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

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`)(params);
    }

    ",
      },
      "request.js": Object {
        "content": "import { jsonToXml } from './json-to-xml';
    import { xmlToJson } from './xml-to-json';

    export function request(method, url, defaultParams = {}) {
      return (params = {}) => {
        const query = new URLSearchParams(params.query).toString();
        const headers = { ...defaultParams.header, ...params.header };

        let body;

        const buildFormData = (object) => {
          const result = new FormData();

          Object.keys(object).forEach((key) => {
            result.append(key, object[key]);
          });

          return result;
        };

        if (params.body) {
          switch (headers.accept) {
            case \\"multipart/form-data\\":
              body = buildFormData(params.body);
              break;
            case \\"application/xml\\":
              body = jsonToXml(params.body);
              break;
            case \\"application/json\\":
              body = JSON.stringify(params.body);
              break;
            default:
              body = params.body;
              break;
          }
        } else if (params.formData) {
          body = buildFormData(params.formData);
        }

        return fetch(\`\${url}\${query ? \`?\${query}\` : \\"\\"}\`, {
          method,
          headers,
          body,
        }).then(async (response) => {
          let data = null;

          const headersValues = Object.values(headers);
          const headersKeys = Object.keys(headers).map((value) =>
            value.toLocaleLowerCase(),
          );

          switch (headersValues[headersKeys.indexOf(\\"content-type\\")]) {
            case \\"multipart/form-data\\":
              data = await response.formData();
              break;
            case \\"application/xml\\":
              data = xmlToJson(await response.text());
              break;
            case \\"application/json\\":
              data = await response.json();
              break;
            default:
              break;
          }

          return { response, data };
        });
      };
    }
    ",
        "dependencies": Object {
          "json-to-xml.js": Object {
            "content": "export function jsonToXml(o) {
      if (
        typeof o === \\"object\\" &&
        o.constructor === Object &&
        Object.keys(o).length === 1
      ) {
        for (var a in o) {
          return toXML(a, o[a]);
        }
      } else {
      }

      function toXML(tag, o) {
        var doc = \\"<\\" + tag;
        if (typeof o === \\"undefined\\" || o === null) {
          doc += \\"/>\\";
          return doc;
        }
        if (typeof o !== \\"object\\") {
          doc += \\">\\" + safeXMLValue(o) + \\"</\\" + tag + \\">\\";
          return doc;
        }
        if (o.constructor === Object) {
          for (var a in o) {
            if (a.charAt(0) === \\"@\\") {
              if (typeof o[a] !== \\"object\\") {
                doc += \\" \\" + a.substring(1) + '=\\"' + o[a] + '\\"';
                delete o[a];
              } else {
                throw new Error(typeof o[a] + \\" being attribute is not supported.\\");
              }
            }
          }
          if (Object.keys(o).length === 0) {
            doc += \\"/>\\";
            return doc;
          } else {
            doc += \\">\\";
          }
          if (typeof o[\\"#text\\"] !== \\"undefined\\") {
            if (typeof o[\\"#text\\"] !== \\"object\\") {
              doc += o[\\"#text\\"];
              delete o[\\"#text\\"];
            } else {
              throw new Error(typeof o[\\"#text\\"] + \\" being #text is not supported.\\");
            }
          }
          for (var b in o) {
            if (o[b].constructor === Array) {
              for (var i = 0; i < o[b].length; i++) {
                if (typeof o[b][i] !== \\"object\\" || o[b][i].constructor === Object) {
                  doc += toXML(b, o[b][i]);
                } else {
                  throw new Error(typeof o[b][i] + \\" is not supported.\\");
                }
              }
            } else if (o[b].constructor === Object || typeof o[b] !== \\"object\\") {
              doc += toXML(b, o[b]);
            } else {
              throw new Error(typeof o[b] + \\" is not supported.\\");
            }
          }
          doc += \\"</\\" + tag + \\">\\";
          return doc;
        }
      }
      function safeXMLValue(value) {
        var s = value.toString();
        s = s.replace(\\"/&/g\\", \\"&amp;\\");
        s = s.replace('/\\"/g', \\"&quot;\\");
        s = s.replace(\\"/</g\\", \\"&lt;\\");
        s = s.replace(\\"/>/g\\", \\"&gt;\\");
        return s;
      }
    }
    ",
          },
          "xml-to-json.js": Object {
            "content": "export function xmlToJson(xmlStr) {
      const parser = (xml) => {
        // Create the return object
        var obj = {};

        if (xml.nodeType === 1) {
          // element
          // do attributes
          if (xml.attributes.length > 0) {
            obj[\\"@attributes\\"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              obj[\\"@attributes\\"][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType === 3) {
          // text
          obj = xml.nodeValue;
        }

        // do children
        // If all text nodes inside, get concatenated text from them.
        var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
          return node.nodeType === 3;
        });

        if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
          obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
            return text + node.nodeValue;
          }, \\"\\");
        } else if (xml.hasChildNodes()) {
          for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof obj[nodeName] == \\"undefined\\") {
              obj[nodeName] = parser(item);
            } else {
              if (typeof obj[nodeName].push == \\"undefined\\") {
                var old = obj[nodeName];
                obj[nodeName] = [];
                obj[nodeName].push(old);
              }
              obj[nodeName].push(parser(item));
            }
          }
        }

        return obj;
      };

      return parser(new DOMParser().parseFromString(xmlStr, \\"text/xml\\"));
    }
    ",
          },
        },
      },
    }
  `);
});

test("deprecated=exception", () => {
  const result = swaggerToJs(apiJson, {
    deprecated: "exception",
  });

  expect(result).toMatchInlineSnapshot(`
    Object {
      "index.d.ts": Object {
        "content": "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

    type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"additionalMetadata\\": string; \\"file\\": File; }; };
    type UploadFileResult0 = RequestResult<{ \\"code\\": number; \\"type\\": string; \\"message\\": string; }>;
    export function uploadFile(params: UploadFileParams0): UploadFileResult0;

    type AddPetParams0 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult0 = RequestResult<null>;
    export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

    type AddPetParams1 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult1 = RequestResult<null>;
    export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

    type AddPetParams2 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams2 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult2 = RequestResult<null>;
    export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

    type AddPetParams3 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams3 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult3 = RequestResult<null>;
    export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

    type UpdatePetParams0 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult0 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

    type UpdatePetParams1 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult1 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

    type UpdatePetParams2 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams2 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult2 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

    type UpdatePetParams3 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams3 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult3 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

    type FindPetsByStatusParams0 = { \\"query\\": { \\"status\\": (\\"available\\" | \\"pending\\" | \\"sold\\")[]; }; };
    type FindPetsByStatusAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByStatusResult0 = RequestResult<({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

    type FindPetsByStatusParams1 = { \\"query\\": { \\"status\\": (\\"available\\" | \\"pending\\" | \\"sold\\")[]; }; };
    type FindPetsByStatusAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByStatusResult1 = RequestResult<{ \\"Pet\\": ({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

    type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetPetByIdResult0 = RequestResult<{ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

    type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetPetByIdResult1 = RequestResult<{ \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

    type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"name\\": string; \\"status\\": string; }; };
    type UpdatePetWithFormAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetWithFormResult0 = RequestResult<null>;
    export function updatePetWithForm(params: UpdatePetWithFormParams0 & UpdatePetWithFormAddedParams0): UpdatePetWithFormResult0;

    type UpdatePetWithFormParams1 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"name\\": string; \\"status\\": string; }; };
    type UpdatePetWithFormAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetWithFormResult1 = RequestResult<null>;
    export function updatePetWithForm(params: UpdatePetWithFormParams1 & UpdatePetWithFormAddedParams1): UpdatePetWithFormResult1;

    type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\": string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeletePetResult0 = RequestResult<null>;
    export function deletePet(params: DeletePetParams0 & DeletePetAddedParams0): DeletePetResult0;

    type DeletePetParams1 = { \\"header\\"?: { \\"api_key\\": string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeletePetResult1 = RequestResult<null>;
    export function deletePet(params: DeletePetParams1 & DeletePetAddedParams1): DeletePetResult1;

    type PlaceOrderParams0 = { \\"body\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; };
    type PlaceOrderAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult0 = RequestResult<{ \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }>;
    export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

    type PlaceOrderParams1 = { \\"body\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; };
    type PlaceOrderAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type PlaceOrderResult1 = RequestResult<{ \\"Order\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; }>;
    export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

    type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetOrderByIdResult0 = RequestResult<{ \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }>;
    export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

    type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetOrderByIdResult1 = RequestResult<{ \\"Order\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; }>;
    export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

    type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeleteOrderResult0 = RequestResult<null>;
    export function deleteOrder(params: DeleteOrderParams0 & DeleteOrderAddedParams0): DeleteOrderResult0;

    type DeleteOrderParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeleteOrderResult1 = RequestResult<null>;
    export function deleteOrder(params: DeleteOrderParams1 & DeleteOrderAddedParams1): DeleteOrderResult1;

    type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
    export function getInventory(): GetInventoryResult0;

    type CreateUsersWithArrayInputParams0 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithArrayInputAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithArrayInputResult0 = RequestResult<null>;
    export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams0 & CreateUsersWithArrayInputAddedParams0): CreateUsersWithArrayInputResult0;

    type CreateUsersWithArrayInputParams1 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithArrayInputAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithArrayInputResult1 = RequestResult<null>;
    export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams1 & CreateUsersWithArrayInputAddedParams1): CreateUsersWithArrayInputResult1;

    type CreateUsersWithListInputParams0 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithListInputAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithListInputResult0 = RequestResult<null>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

    type CreateUsersWithListInputParams1 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithListInputAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithListInputResult1 = RequestResult<null>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

    type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetUserByNameResult0 = RequestResult<{ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }>;
    export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

    type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetUserByNameResult1 = RequestResult<{ \\"User\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; }>;
    export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

    type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type UpdateUserAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdateUserResult0 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

    type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type UpdateUserAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdateUserResult1 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

    type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeleteUserResult0 = RequestResult<null>;
    export function deleteUser(params: DeleteUserParams0 & DeleteUserAddedParams0): DeleteUserResult0;

    type DeleteUserParams1 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeleteUserResult1 = RequestResult<null>;
    export function deleteUser(params: DeleteUserParams1 & DeleteUserAddedParams1): DeleteUserResult1;

    type LoginUserParams0 = { \\"query\\": { \\"username\\": string; \\"password\\": string; }; };
    type LoginUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type LoginUserResult0 = RequestResult<string>;
    export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

    type LoginUserParams1 = { \\"query\\": { \\"username\\": string; \\"password\\": string; }; };
    type LoginUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LoginUserResult1 = RequestResult<string>;
    export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

    type LogoutUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type LogoutUserResult0 = RequestResult<null>;
    export function logoutUser(params: LogoutUserAddedParams0): LogoutUserResult0;

    type LogoutUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LogoutUserResult1 = RequestResult<null>;
    export function logoutUser(params: LogoutUserAddedParams1): LogoutUserResult1;

    type CreateUserParams0 = { \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type CreateUserAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUserResult0 = RequestResult<null>;
    export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

    type CreateUserParams1 = { \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type CreateUserAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUserResult1 = RequestResult<null>;
    export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

    ",
      },
      "index.js": Object {
        "content": "import { request } from './request';

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"multipart/form-data\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
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
      return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
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

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
    }

    export function createUsersWithArrayInput(params) {
      return request(\\"post\\", \`/user/createWithArray\`)(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`)(params);
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

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`)(params);
    }

    ",
      },
      "request.js": Object {
        "content": "import { jsonToXml } from './json-to-xml';
    import { xmlToJson } from './xml-to-json';

    export function request(method, url, defaultParams = {}) {
      return (params = {}) => {
        const query = new URLSearchParams(params.query).toString();
        const headers = { ...defaultParams.header, ...params.header };

        let body;

        const buildFormData = (object) => {
          const result = new FormData();

          Object.keys(object).forEach((key) => {
            result.append(key, object[key]);
          });

          return result;
        };

        if (params.body) {
          switch (headers.accept) {
            case \\"multipart/form-data\\":
              body = buildFormData(params.body);
              break;
            case \\"application/xml\\":
              body = jsonToXml(params.body);
              break;
            case \\"application/json\\":
              body = JSON.stringify(params.body);
              break;
            default:
              body = params.body;
              break;
          }
        } else if (params.formData) {
          body = buildFormData(params.formData);
        }

        return fetch(\`\${url}\${query ? \`?\${query}\` : \\"\\"}\`, {
          method,
          headers,
          body,
        }).then(async (response) => {
          let data = null;

          const headersValues = Object.values(headers);
          const headersKeys = Object.keys(headers).map((value) =>
            value.toLocaleLowerCase(),
          );

          switch (headersValues[headersKeys.indexOf(\\"content-type\\")]) {
            case \\"multipart/form-data\\":
              data = await response.formData();
              break;
            case \\"application/xml\\":
              data = xmlToJson(await response.text());
              break;
            case \\"application/json\\":
              data = await response.json();
              break;
            default:
              break;
          }

          return { response, data };
        });
      };
    }
    ",
        "dependencies": Object {
          "json-to-xml.js": Object {
            "content": "export function jsonToXml(o) {
      if (
        typeof o === \\"object\\" &&
        o.constructor === Object &&
        Object.keys(o).length === 1
      ) {
        for (var a in o) {
          return toXML(a, o[a]);
        }
      } else {
      }

      function toXML(tag, o) {
        var doc = \\"<\\" + tag;
        if (typeof o === \\"undefined\\" || o === null) {
          doc += \\"/>\\";
          return doc;
        }
        if (typeof o !== \\"object\\") {
          doc += \\">\\" + safeXMLValue(o) + \\"</\\" + tag + \\">\\";
          return doc;
        }
        if (o.constructor === Object) {
          for (var a in o) {
            if (a.charAt(0) === \\"@\\") {
              if (typeof o[a] !== \\"object\\") {
                doc += \\" \\" + a.substring(1) + '=\\"' + o[a] + '\\"';
                delete o[a];
              } else {
                throw new Error(typeof o[a] + \\" being attribute is not supported.\\");
              }
            }
          }
          if (Object.keys(o).length === 0) {
            doc += \\"/>\\";
            return doc;
          } else {
            doc += \\">\\";
          }
          if (typeof o[\\"#text\\"] !== \\"undefined\\") {
            if (typeof o[\\"#text\\"] !== \\"object\\") {
              doc += o[\\"#text\\"];
              delete o[\\"#text\\"];
            } else {
              throw new Error(typeof o[\\"#text\\"] + \\" being #text is not supported.\\");
            }
          }
          for (var b in o) {
            if (o[b].constructor === Array) {
              for (var i = 0; i < o[b].length; i++) {
                if (typeof o[b][i] !== \\"object\\" || o[b][i].constructor === Object) {
                  doc += toXML(b, o[b][i]);
                } else {
                  throw new Error(typeof o[b][i] + \\" is not supported.\\");
                }
              }
            } else if (o[b].constructor === Object || typeof o[b] !== \\"object\\") {
              doc += toXML(b, o[b]);
            } else {
              throw new Error(typeof o[b] + \\" is not supported.\\");
            }
          }
          doc += \\"</\\" + tag + \\">\\";
          return doc;
        }
      }
      function safeXMLValue(value) {
        var s = value.toString();
        s = s.replace(\\"/&/g\\", \\"&amp;\\");
        s = s.replace('/\\"/g', \\"&quot;\\");
        s = s.replace(\\"/</g\\", \\"&lt;\\");
        s = s.replace(\\"/>/g\\", \\"&gt;\\");
        return s;
      }
    }
    ",
          },
          "xml-to-json.js": Object {
            "content": "export function xmlToJson(xmlStr) {
      const parser = (xml) => {
        // Create the return object
        var obj = {};

        if (xml.nodeType === 1) {
          // element
          // do attributes
          if (xml.attributes.length > 0) {
            obj[\\"@attributes\\"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              obj[\\"@attributes\\"][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType === 3) {
          // text
          obj = xml.nodeValue;
        }

        // do children
        // If all text nodes inside, get concatenated text from them.
        var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
          return node.nodeType === 3;
        });

        if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
          obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
            return text + node.nodeValue;
          }, \\"\\");
        } else if (xml.hasChildNodes()) {
          for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof obj[nodeName] == \\"undefined\\") {
              obj[nodeName] = parser(item);
            } else {
              if (typeof obj[nodeName].push == \\"undefined\\") {
                var old = obj[nodeName];
                obj[nodeName] = [];
                obj[nodeName].push(old);
              }
              obj[nodeName].push(parser(item));
            }
          }
        }

        return obj;
      };

      return parser(new DOMParser().parseFromString(xmlStr, \\"text/xml\\"));
    }
    ",
          },
        },
      },
    }
  `);
});

test("importRequest=true", () => {
  const result = swaggerToJs(apiJson, {
    importRequest: true,
  });

  expect(result).toMatchInlineSnapshot(`
    Object {
      "index.d.ts": Object {
        "content": "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

    type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"additionalMetadata\\": string; \\"file\\": File; }; };
    type UploadFileResult0 = RequestResult<{ \\"code\\": number; \\"type\\": string; \\"message\\": string; }>;
    export function uploadFile(params: UploadFileParams0): UploadFileResult0;

    type AddPetParams0 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult0 = RequestResult<null>;
    export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

    type AddPetParams1 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult1 = RequestResult<null>;
    export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

    type AddPetParams2 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams2 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult2 = RequestResult<null>;
    export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

    type AddPetParams3 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams3 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult3 = RequestResult<null>;
    export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

    type UpdatePetParams0 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult0 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

    type UpdatePetParams1 = { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult1 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

    type UpdatePetParams2 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams2 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult2 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

    type UpdatePetParams3 = { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams3 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult3 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

    type FindPetsByStatusParams0 = { \\"query\\": { \\"status\\": (\\"available\\" | \\"pending\\" | \\"sold\\")[]; }; };
    type FindPetsByStatusAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByStatusResult0 = RequestResult<({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

    type FindPetsByStatusParams1 = { \\"query\\": { \\"status\\": (\\"available\\" | \\"pending\\" | \\"sold\\")[]; }; };
    type FindPetsByStatusAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByStatusResult1 = RequestResult<{ \\"Pet\\": ({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

    type FindPetsByTagsParams0 = { \\"query\\": { \\"tags\\": (string)[]; }; };
    type FindPetsByTagsAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByTagsResult0 = RequestResult<({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

    type FindPetsByTagsParams1 = { \\"query\\": { \\"tags\\": (string)[]; }; };
    type FindPetsByTagsAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByTagsResult1 = RequestResult<{ \\"Pet\\": ({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

    type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetPetByIdResult0 = RequestResult<{ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

    type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetPetByIdResult1 = RequestResult<{ \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

    type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"name\\": string; \\"status\\": string; }; };
    type UpdatePetWithFormAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetWithFormResult0 = RequestResult<null>;
    export function updatePetWithForm(params: UpdatePetWithFormParams0 & UpdatePetWithFormAddedParams0): UpdatePetWithFormResult0;

    type UpdatePetWithFormParams1 = { \\"path\\": { \\"petId\\": number; }; \\"body\\"?: { \\"name\\": string; \\"status\\": string; }; };
    type UpdatePetWithFormAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetWithFormResult1 = RequestResult<null>;
    export function updatePetWithForm(params: UpdatePetWithFormParams1 & UpdatePetWithFormAddedParams1): UpdatePetWithFormResult1;

    type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\": string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeletePetResult0 = RequestResult<null>;
    export function deletePet(params: DeletePetParams0 & DeletePetAddedParams0): DeletePetResult0;

    type DeletePetParams1 = { \\"header\\"?: { \\"api_key\\": string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeletePetResult1 = RequestResult<null>;
    export function deletePet(params: DeletePetParams1 & DeletePetAddedParams1): DeletePetResult1;

    type PlaceOrderParams0 = { \\"body\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; };
    type PlaceOrderAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult0 = RequestResult<{ \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }>;
    export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

    type PlaceOrderParams1 = { \\"body\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; };
    type PlaceOrderAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type PlaceOrderResult1 = RequestResult<{ \\"Order\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; }>;
    export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

    type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetOrderByIdResult0 = RequestResult<{ \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }>;
    export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

    type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetOrderByIdResult1 = RequestResult<{ \\"Order\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; }>;
    export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

    type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeleteOrderResult0 = RequestResult<null>;
    export function deleteOrder(params: DeleteOrderParams0 & DeleteOrderAddedParams0): DeleteOrderResult0;

    type DeleteOrderParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeleteOrderResult1 = RequestResult<null>;
    export function deleteOrder(params: DeleteOrderParams1 & DeleteOrderAddedParams1): DeleteOrderResult1;

    type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
    export function getInventory(): GetInventoryResult0;

    type CreateUsersWithArrayInputParams0 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithArrayInputAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithArrayInputResult0 = RequestResult<null>;
    export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams0 & CreateUsersWithArrayInputAddedParams0): CreateUsersWithArrayInputResult0;

    type CreateUsersWithArrayInputParams1 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithArrayInputAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithArrayInputResult1 = RequestResult<null>;
    export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams1 & CreateUsersWithArrayInputAddedParams1): CreateUsersWithArrayInputResult1;

    type CreateUsersWithListInputParams0 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithListInputAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithListInputResult0 = RequestResult<null>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

    type CreateUsersWithListInputParams1 = { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; };
    type CreateUsersWithListInputAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithListInputResult1 = RequestResult<null>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

    type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetUserByNameResult0 = RequestResult<{ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }>;
    export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

    type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetUserByNameResult1 = RequestResult<{ \\"User\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; }>;
    export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

    type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type UpdateUserAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdateUserResult0 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

    type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type UpdateUserAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdateUserResult1 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

    type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeleteUserResult0 = RequestResult<null>;
    export function deleteUser(params: DeleteUserParams0 & DeleteUserAddedParams0): DeleteUserResult0;

    type DeleteUserParams1 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeleteUserResult1 = RequestResult<null>;
    export function deleteUser(params: DeleteUserParams1 & DeleteUserAddedParams1): DeleteUserResult1;

    type LoginUserParams0 = { \\"query\\": { \\"username\\": string; \\"password\\": string; }; };
    type LoginUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type LoginUserResult0 = RequestResult<string>;
    export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

    type LoginUserParams1 = { \\"query\\": { \\"username\\": string; \\"password\\": string; }; };
    type LoginUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LoginUserResult1 = RequestResult<string>;
    export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

    type LogoutUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type LogoutUserResult0 = RequestResult<null>;
    export function logoutUser(params: LogoutUserAddedParams0): LogoutUserResult0;

    type LogoutUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LogoutUserResult1 = RequestResult<null>;
    export function logoutUser(params: LogoutUserAddedParams1): LogoutUserResult1;

    type CreateUserParams0 = { \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type CreateUserAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUserResult0 = RequestResult<null>;
    export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

    type CreateUserParams1 = { \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; };
    type CreateUserAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUserResult1 = RequestResult<null>;
    export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

    ",
      },
      "index.js": Object {
        "content": "import { request } from 'swagger-to-js/request';

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"multipart/form-data\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
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
      return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
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

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
    }

    export function createUsersWithArrayInput(params) {
      return request(\\"post\\", \`/user/createWithArray\`)(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`)(params);
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

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`)(params);
    }

    ",
      },
    }
  `);
});

test("originalBody=true", () => {
  const result = swaggerToJs(apiJson, {
    originalBody: true,
  });

  expect(result).toMatchInlineSnapshot(`
    Object {
      "index.d.ts": Object {
        "content": "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

    type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"formData\\"?: { \\"additionalMetadata\\": string; \\"file\\": File; }; };
    type UploadFileResult0 = RequestResult<{ \\"code\\": number; \\"type\\": string; \\"message\\": string; }>;
    export function uploadFile(params: UploadFileParams0): UploadFileResult0;

    type AddPetParams0 = { \\"body\\": { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult0 = RequestResult<null>;
    export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

    type AddPetParams1 = { \\"body\\": { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult1 = RequestResult<null>;
    export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

    type AddPetParams2 = { \\"body\\": { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; }; };
    type AddPetAddedParams2 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult2 = RequestResult<null>;
    export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

    type AddPetParams3 = { \\"body\\": { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; }; };
    type AddPetAddedParams3 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult3 = RequestResult<null>;
    export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

    type UpdatePetParams0 = { \\"body\\": { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult0 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

    type UpdatePetParams1 = { \\"body\\": { \\"body\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult1 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

    type UpdatePetParams2 = { \\"body\\": { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; }; };
    type UpdatePetAddedParams2 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult2 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

    type UpdatePetParams3 = { \\"body\\": { \\"body\\": { \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; }; };
    type UpdatePetAddedParams3 = { \\"header\\": { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult3 = RequestResult<null>;
    export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

    type FindPetsByStatusParams0 = { \\"query\\": { \\"status\\": (\\"available\\" | \\"pending\\" | \\"sold\\")[]; }; };
    type FindPetsByStatusAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByStatusResult0 = RequestResult<({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

    type FindPetsByStatusParams1 = { \\"query\\": { \\"status\\": (\\"available\\" | \\"pending\\" | \\"sold\\")[]; }; };
    type FindPetsByStatusAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByStatusResult1 = RequestResult<{ \\"Pet\\": ({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

    type FindPetsByTagsParams0 = { \\"query\\": { \\"tags\\": (string)[]; }; };
    type FindPetsByTagsAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByTagsResult0 = RequestResult<({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

    type FindPetsByTagsParams1 = { \\"query\\": { \\"tags\\": (string)[]; }; };
    type FindPetsByTagsAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByTagsResult1 = RequestResult<{ \\"Pet\\": ({ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

    type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetPetByIdResult0 = RequestResult<{ \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\": number; \\"name\\": string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

    type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetPetByIdResult1 = RequestResult<{ \\"Pet\\": { \\"id\\"?: number; \\"category\\"?: { \\"id\\": number; \\"name\\": string; }; \\"name\\": string; \\"photoUrls\\": { \\"photoUrl\\": (string)[]; }; \\"tags\\"?: { \\"tag\\": ({ \\"id\\": number; \\"name\\": string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

    type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"formData\\"?: { \\"name\\": string; \\"status\\": string; }; };
    type UpdatePetWithFormAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetWithFormResult0 = RequestResult<null>;
    export function updatePetWithForm(params: UpdatePetWithFormParams0 & UpdatePetWithFormAddedParams0): UpdatePetWithFormResult0;

    type UpdatePetWithFormParams1 = { \\"path\\": { \\"petId\\": number; }; \\"formData\\"?: { \\"name\\": string; \\"status\\": string; }; };
    type UpdatePetWithFormAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetWithFormResult1 = RequestResult<null>;
    export function updatePetWithForm(params: UpdatePetWithFormParams1 & UpdatePetWithFormAddedParams1): UpdatePetWithFormResult1;

    type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\": string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeletePetResult0 = RequestResult<null>;
    export function deletePet(params: DeletePetParams0 & DeletePetAddedParams0): DeletePetResult0;

    type DeletePetParams1 = { \\"header\\"?: { \\"api_key\\": string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeletePetResult1 = RequestResult<null>;
    export function deletePet(params: DeletePetParams1 & DeletePetAddedParams1): DeletePetResult1;

    type PlaceOrderParams0 = { \\"body\\": { \\"body\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; }; };
    type PlaceOrderAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult0 = RequestResult<{ \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }>;
    export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

    type PlaceOrderParams1 = { \\"body\\": { \\"body\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; }; };
    type PlaceOrderAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type PlaceOrderResult1 = RequestResult<{ \\"Order\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; }>;
    export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

    type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetOrderByIdResult0 = RequestResult<{ \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }>;
    export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

    type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetOrderByIdResult1 = RequestResult<{ \\"Order\\": { \\"id\\": number; \\"petId\\": number; \\"quantity\\": number; \\"shipDate\\": string; \\"status\\": \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\": boolean; }; }>;
    export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

    type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeleteOrderResult0 = RequestResult<null>;
    export function deleteOrder(params: DeleteOrderParams0 & DeleteOrderAddedParams0): DeleteOrderResult0;

    type DeleteOrderParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeleteOrderResult1 = RequestResult<null>;
    export function deleteOrder(params: DeleteOrderParams1 & DeleteOrderAddedParams1): DeleteOrderResult1;

    type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
    export function getInventory(): GetInventoryResult0;

    type CreateUsersWithArrayInputParams0 = { \\"body\\": { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; }; };
    type CreateUsersWithArrayInputAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithArrayInputResult0 = RequestResult<null>;
    export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams0 & CreateUsersWithArrayInputAddedParams0): CreateUsersWithArrayInputResult0;

    type CreateUsersWithArrayInputParams1 = { \\"body\\": { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; }; };
    type CreateUsersWithArrayInputAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithArrayInputResult1 = RequestResult<null>;
    export function createUsersWithArrayInput(params: CreateUsersWithArrayInputParams1 & CreateUsersWithArrayInputAddedParams1): CreateUsersWithArrayInputResult1;

    type CreateUsersWithListInputParams0 = { \\"body\\": { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; }; };
    type CreateUsersWithListInputAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithListInputResult0 = RequestResult<null>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

    type CreateUsersWithListInputParams1 = { \\"body\\": { \\"body\\": ({ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; })[]; }; };
    type CreateUsersWithListInputAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithListInputResult1 = RequestResult<null>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

    type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetUserByNameResult0 = RequestResult<{ \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }>;
    export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

    type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetUserByNameResult1 = RequestResult<{ \\"User\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; }>;
    export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

    type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\": { \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; }; };
    type UpdateUserAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdateUserResult0 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

    type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\": { \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; }; };
    type UpdateUserAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdateUserResult1 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

    type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type DeleteUserResult0 = RequestResult<null>;
    export function deleteUser(params: DeleteUserParams0 & DeleteUserAddedParams0): DeleteUserResult0;

    type DeleteUserParams1 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type DeleteUserResult1 = RequestResult<null>;
    export function deleteUser(params: DeleteUserParams1 & DeleteUserAddedParams1): DeleteUserResult1;

    type LoginUserParams0 = { \\"query\\": { \\"username\\": string; \\"password\\": string; }; };
    type LoginUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type LoginUserResult0 = RequestResult<string>;
    export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

    type LoginUserParams1 = { \\"query\\": { \\"username\\": string; \\"password\\": string; }; };
    type LoginUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LoginUserResult1 = RequestResult<string>;
    export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

    type LogoutUserAddedParams0 = { \\"header\\": { \\"Content-Type\\": \\"application/json\\"; }; };
    type LogoutUserResult0 = RequestResult<null>;
    export function logoutUser(params: LogoutUserAddedParams0): LogoutUserResult0;

    type LogoutUserAddedParams1 = { \\"header\\": { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LogoutUserResult1 = RequestResult<null>;
    export function logoutUser(params: LogoutUserAddedParams1): LogoutUserResult1;

    type CreateUserParams0 = { \\"body\\": { \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; }; };
    type CreateUserAddedParams0 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUserResult0 = RequestResult<null>;
    export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

    type CreateUserParams1 = { \\"body\\": { \\"body\\": { \\"id\\": number; \\"username\\": string; \\"firstName\\": string; \\"lastName\\": string; \\"email\\": string; \\"password\\": string; \\"phone\\": string; \\"userStatus\\": number; }; }; };
    type CreateUserAddedParams1 = { \\"header\\": { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUserResult1 = RequestResult<null>;
    export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

    ",
      },
      "index.js": Object {
        "content": "import { request } from './request';

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"multipart/form-data\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
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
      return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
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

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
    }

    export function createUsersWithArrayInput(params) {
      return request(\\"post\\", \`/user/createWithArray\`)(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`)(params);
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

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`)(params);
    }

    ",
      },
      "request.js": Object {
        "content": "import { jsonToXml } from './json-to-xml';
    import { xmlToJson } from './xml-to-json';

    export function request(method, url, defaultParams = {}) {
      return (params = {}) => {
        const query = new URLSearchParams(params.query).toString();
        const headers = { ...defaultParams.header, ...params.header };

        let body;

        const buildFormData = (object) => {
          const result = new FormData();

          Object.keys(object).forEach((key) => {
            result.append(key, object[key]);
          });

          return result;
        };

        if (params.body) {
          switch (headers.accept) {
            case \\"multipart/form-data\\":
              body = buildFormData(params.body);
              break;
            case \\"application/xml\\":
              body = jsonToXml(params.body);
              break;
            case \\"application/json\\":
              body = JSON.stringify(params.body);
              break;
            default:
              body = params.body;
              break;
          }
        } else if (params.formData) {
          body = buildFormData(params.formData);
        }

        return fetch(\`\${url}\${query ? \`?\${query}\` : \\"\\"}\`, {
          method,
          headers,
          body,
        }).then(async (response) => {
          let data = null;

          const headersValues = Object.values(headers);
          const headersKeys = Object.keys(headers).map((value) =>
            value.toLocaleLowerCase(),
          );

          switch (headersValues[headersKeys.indexOf(\\"content-type\\")]) {
            case \\"multipart/form-data\\":
              data = await response.formData();
              break;
            case \\"application/xml\\":
              data = xmlToJson(await response.text());
              break;
            case \\"application/json\\":
              data = await response.json();
              break;
            default:
              break;
          }

          return { response, data };
        });
      };
    }
    ",
        "dependencies": Object {
          "json-to-xml.js": Object {
            "content": "export function jsonToXml(o) {
      if (
        typeof o === \\"object\\" &&
        o.constructor === Object &&
        Object.keys(o).length === 1
      ) {
        for (var a in o) {
          return toXML(a, o[a]);
        }
      } else {
      }

      function toXML(tag, o) {
        var doc = \\"<\\" + tag;
        if (typeof o === \\"undefined\\" || o === null) {
          doc += \\"/>\\";
          return doc;
        }
        if (typeof o !== \\"object\\") {
          doc += \\">\\" + safeXMLValue(o) + \\"</\\" + tag + \\">\\";
          return doc;
        }
        if (o.constructor === Object) {
          for (var a in o) {
            if (a.charAt(0) === \\"@\\") {
              if (typeof o[a] !== \\"object\\") {
                doc += \\" \\" + a.substring(1) + '=\\"' + o[a] + '\\"';
                delete o[a];
              } else {
                throw new Error(typeof o[a] + \\" being attribute is not supported.\\");
              }
            }
          }
          if (Object.keys(o).length === 0) {
            doc += \\"/>\\";
            return doc;
          } else {
            doc += \\">\\";
          }
          if (typeof o[\\"#text\\"] !== \\"undefined\\") {
            if (typeof o[\\"#text\\"] !== \\"object\\") {
              doc += o[\\"#text\\"];
              delete o[\\"#text\\"];
            } else {
              throw new Error(typeof o[\\"#text\\"] + \\" being #text is not supported.\\");
            }
          }
          for (var b in o) {
            if (o[b].constructor === Array) {
              for (var i = 0; i < o[b].length; i++) {
                if (typeof o[b][i] !== \\"object\\" || o[b][i].constructor === Object) {
                  doc += toXML(b, o[b][i]);
                } else {
                  throw new Error(typeof o[b][i] + \\" is not supported.\\");
                }
              }
            } else if (o[b].constructor === Object || typeof o[b] !== \\"object\\") {
              doc += toXML(b, o[b]);
            } else {
              throw new Error(typeof o[b] + \\" is not supported.\\");
            }
          }
          doc += \\"</\\" + tag + \\">\\";
          return doc;
        }
      }
      function safeXMLValue(value) {
        var s = value.toString();
        s = s.replace(\\"/&/g\\", \\"&amp;\\");
        s = s.replace('/\\"/g', \\"&quot;\\");
        s = s.replace(\\"/</g\\", \\"&lt;\\");
        s = s.replace(\\"/>/g\\", \\"&gt;\\");
        return s;
      }
    }
    ",
          },
          "xml-to-json.js": Object {
            "content": "export function xmlToJson(xmlStr) {
      const parser = (xml) => {
        // Create the return object
        var obj = {};

        if (xml.nodeType === 1) {
          // element
          // do attributes
          if (xml.attributes.length > 0) {
            obj[\\"@attributes\\"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              obj[\\"@attributes\\"][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType === 3) {
          // text
          obj = xml.nodeValue;
        }

        // do children
        // If all text nodes inside, get concatenated text from them.
        var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
          return node.nodeType === 3;
        });

        if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
          obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
            return text + node.nodeValue;
          }, \\"\\");
        } else if (xml.hasChildNodes()) {
          for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof obj[nodeName] == \\"undefined\\") {
              obj[nodeName] = parser(item);
            } else {
              if (typeof obj[nodeName].push == \\"undefined\\") {
                var old = obj[nodeName];
                obj[nodeName] = [];
                obj[nodeName].push(old);
              }
              obj[nodeName].push(parser(item));
            }
          }
        }

        return obj;
      };

      return parser(new DOMParser().parseFromString(xmlStr, \\"text/xml\\"));
    }
    ",
          },
        },
      },
    }
  `);
});
