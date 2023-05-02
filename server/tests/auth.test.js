const request = require("../router/auth");
const baseURL = "http://localhost:3000";

describe("GET /register", () => {
    const newTodo = {
        name: "test Jest",
        userName: "Jest",
        email: "jest@gmail.com",
        phone : 123456
    }
    beforeAll(async () => {
        // set up the register
        await request(baseURL).post("/register").send(newTodo);
    })
    
    it("should return 201", async () => {
        console.log("testing API jest",baseURL)
        const response = await request(baseURL).post("/register").send(newTodo);
        expect(response.statusCode).toBe(201);
        expect(response.body.error).toBe(null);
    });
});