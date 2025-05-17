"use client";

import { orpc } from "@/lib/orpc";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { data } = useQuery(orpc.users.get.queryOptions()); // queryOptions() will pass query fn, query key and retry to the useQuery function, resulting in the data.

  console.log("data from server", data);

  return "Page";
}
