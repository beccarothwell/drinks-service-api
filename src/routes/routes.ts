import express from "express";
import * as coffeeController from "../controllers/coffee/coffee_controller";
import * as teaController from "../controllers/tea/tea_controller";

export const router = express.Router();

router.get("/coffee", coffeeController.getCoffee);
router.get("/coffeelover", coffeeController.loveCoffee);
router.get("/janeway", coffeeController.replicateCoffee);

router.get("/tea", teaController.getTea);
router.get("/tealover", teaController.loveTea);
router.get("/picard", teaController.replicateTea);
