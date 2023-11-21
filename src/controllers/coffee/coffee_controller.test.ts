import request from "supertest";
import { app } from "../../app";

test("GET /coffee should return correct object", async () => {
  const res = await request(app).get("/coffee").query({ coffeeName: "Latte" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});

test("GET /coffee should return correct object", async () => {
  const res = await request(app).get("/coffee").query({ coffeeName: "Mocha" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Mocha",
  });
});

test("GET /coffee should return correct object", async () => {
  const res = await request(app)
    .get("/coffee")
    .query({ coffeeName: "Americano" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Americano",
  });
});

test("GET /coffee should return correct object with default coffeeName", async () => {
  const res = await request(app).get("/coffee").query({});
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});

test("GET /coffeelover should return correct message", async () => {
  const res = await request(app).get("/coffeelover");
  expect(res.statusCode).toEqual(200);
  expect(res.text).toEqual("I like coffee!");
});
