const {
  mockNewCoffeeShop,
  mockNewCoffeeShops,
} = require("../../mocks/coffeeShopMocks");
const {
  deleteCoffeShop,
  getCoffeeShops,
  createCoffeeShop,
  editCoffeeShop,
} = require("./coffeeShopController");

jest.mock("../../database/models/CoffeShop", () => ({
  ...jest.requireActual("../../database/models/CoffeShop"),
  find: jest.fn().mockResolvedValue(mockNewCoffeeShop),
  findByIdAndDelete: jest.fn().mockResolvedValue(mockNewCoffeeShops),
  create: jest.fn().mockResolvedValue(mockNewCoffeeShop),
  findByIdAndUpdate: jest.fn().mockResolvedValue(mockNewCoffeeShops),
}));

describe("Given a GET properties controller", () => {
  describe("When invoked with a response", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    test("Then it should call the response status method 200", async () => {
      await getCoffeeShops(null, res);

      const expectedStatus = 200;

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});

describe("Given a DELETE deleteProperty controller", () => {
  describe("When invoked when a response and a property with id 1", () => {
    const req = {
      params: {
        idProperty: "629c9898e9c4c1249dae7b90",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the response status method with 200", async () => {
      const expectedStatus = 200;

      await deleteCoffeShop(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response json method a message", () => {
      deleteCoffeShop(req, res);
      const expectedMessage = {
        message: "The CoffeeShop has been deleted",
      };

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});

describe("Given a POST createCoffeeShop controller", () => {
  describe("When invoked whit a response and a CoffeeShop", () => {
    const req = {
      body: mockNewCoffeeShop,
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the response status method with 201", async () => {
      const expectedStatus = 201;

      await createCoffeeShop(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response json method a message", () => {
      const expectedRespone = mockNewCoffeeShop;

      createCoffeeShop(req, res);

      expect(res.json).toHaveBeenCalledWith(expectedRespone);
    });
  });
});

describe("Given a editProperty controller", () => {
  describe("When invoked whit a response, a property and the property id as request param", () => {
    const req = {
      params: "7267c3c6b8f201e2a9ddhyhc4f3",
      body: mockNewCoffeeShop,
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the response status method with a 200", async () => {
      const expectedStatus = 200;

      await editCoffeeShop(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response json method with a CoffeeShop", () => {
      const expectedRespone = mockNewCoffeeShop;

      editCoffeeShop(req, res);

      expect(res.json).toHaveBeenCalledWith(expectedRespone);
    });
  });
});
