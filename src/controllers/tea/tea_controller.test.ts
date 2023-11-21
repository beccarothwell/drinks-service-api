import request from "supertest";
import { app } from "../../app";

test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Oolong" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Oolong",
  });
});

test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Lady Grey" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Lady Grey",
  });
});

test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Assam" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Assam",
  });
});

test("GET /tea should return correct object with default teaName", async () => {
  const res = await request(app).get("/tea").query({});
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Earl Grey",
  });
});

test("GET /tealover should return correct message", async () => {
  const res = await request(app).get("/tealover");
  expect(res.statusCode).toEqual(200);
  expect(res.text).toEqual("I like tea!");
});
