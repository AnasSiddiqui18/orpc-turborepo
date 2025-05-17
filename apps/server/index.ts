import { OpenAPIGenerator } from "@orpc/openapi";
import { ZodToJsonSchemaConverter } from "@orpc/zod";
import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { router } from "@repo/shared/router";

const openAPIGenerator = new OpenAPIGenerator({
  schemaConverters: [new ZodToJsonSchemaConverter()],
});

export const openApiDocs = await openAPIGenerator.generate(router, {
  servers: [
    {
      url: "http://localhost:3000/api",
    },
  ],
});

export const handler = new OpenAPIHandler(router);
