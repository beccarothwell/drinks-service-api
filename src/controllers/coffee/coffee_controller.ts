import { Request, Response } from "express";
import * as coffeeService from "../../services/coffee_service";

export const getCoffee = async (
  req: Request<object, object, object, { coffeeName: string | undefined }>,
  res: Response
) => {
  const coffeeName = req.query.coffeeName;
  const coffee = coffeeService.getCoffee(coffeeName);
  res.json(coffee).status(200);
};

export const loveCoffee = async (req: Request, res: Response) => {
  const coffeeLover = "I like coffee!";
  res.send(coffeeLover).status(200);
};

export const replicateCoffee = async (req: Request, res: Response) => {
  const janeway = "There's coffee in that nebula!";
  res.send(janeway).status(200);
};
