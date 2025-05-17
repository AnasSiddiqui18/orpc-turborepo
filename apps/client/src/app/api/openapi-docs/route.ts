import { openApiDocs } from "@repo/server";

export async function GET() {
  return new Response(JSON.stringify(openApiDocs));
}
