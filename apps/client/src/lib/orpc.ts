import { createORPCClient } from "@orpc/client";
import { contract } from "@repo/shared/router";
import { OpenAPILink } from "@orpc/openapi-client/fetch";
import { ContractRouterClient } from "@orpc/contract";
import { JsonifiedClient } from "@orpc/openapi-client";
import { createORPCReactQueryUtils } from "@orpc/react-query";

const link = new OpenAPILink(contract, {
  url: "http://localhost:3000/api",
  headers: { Authorization: "Bearer token" }, // Passing headers to the server, the server can verify it and do other stuff...
});

export const client: JsonifiedClient<ContractRouterClient<typeof contract>> =
  createORPCClient(link);

export const orpc = createORPCReactQueryUtils(client);
