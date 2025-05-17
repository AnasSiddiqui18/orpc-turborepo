import z from "zod";
import { oc } from "@orpc/contract";
import { implement } from "@orpc/server";

const user_schema = z.object({
  name: z.string(),
});

export const contract = {
  users: {
    get: oc
      .route({
        // if the path is not provided so the fallback path will be api/users_lol/get
        path: "/get-users",
        method: "GET",
      })
      .output(z.array(user_schema)),

    create: oc
      .input(
        z.object({
          name: z.string(),
        })
      )
      .route({
        path: "/create-user",
        method: "POST",
      })
      .output(user_schema),
  },
};

export const os = implement(contract);

export const router = os.router({
  users: {
    get: os.users.get.handler(() => [
      {
        name: "jane doe",
      },
    ]),

    create: os.users.create.handler(({ input: { name } }) => {
      return {
        name,
      };
    }),
  },
});
