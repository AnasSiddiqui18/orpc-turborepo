import z from "zod";
import { oc } from "@orpc/contract";
import { implement } from "@orpc/server";

const user_schema = z.object({
  name: z.string({
    message: "name is a required field",
  }),
});

export const contract = {
  users: {
    get: oc
      .route({
        method: "GET",
      })
      .output(z.array(user_schema)),

    create: oc
      .input(user_schema)
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
        name: "Jane doe",
      },
    ]),

    create: os.users.create.handler(({ input: { name } }) => {
      return {
        name,
      };
    }),
  },
});
