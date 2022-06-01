const { MongoMemoryServer } = require("mongodb-memory-server");
const { default: mongoose } = require("mongoose");
const request = require("supertest");
const mockNewUser = require("../mocks/userMocks");
const connectDataBase = require("../database");
const app = require("../server");
const User = require("../database/models/UserSchema");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await connectDataBase(mongoServer.getUri());
});

beforeEach(async () => {
  await User.create(mockNewUser[0]);
});

afterEach(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("Given a post /users/register endpoint", () => {
  describe("When it receives a new user request", () => {
    test("Then it should respond with a 201 status code and a username", async () => {
      const response = await request(app)
        .post("/user/register")
        .send({
          name: "Maicol",
          username: "Maicol",
          password: "password",
        })
        .expect(201);

      expect(response.body.id).not.toBeNull();
      expect(response.body.username).toBe("Maicol");
    });
  });
  describe("When it receives an already existing user request", () => {
    test("Then it should respond with a 409 status code and the test 'user already exists'", async () => {
      const response = await request(app)
        .post("/user/register")
        .send({
          name: "Julia",
          username: "Julie",
          password: "123456",
        })

        .expect(409);

      expect(response.body).toEqual({
        message: "This user already exists...",
      });
    });
  });
});
