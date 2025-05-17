import { handler } from "@repo/server";

async function handle(req: Request) {
  const { response } = await handler.handle(req, {
    prefix: "/api",
  });

  return (
    response ??
    new Response("Not found", {
      status: 404,
    })
  );
}

export {
  handle as GET,
  handle as POST,
  handle as PUT,
  handle as PATCH,
  handle as DELETE,
};
