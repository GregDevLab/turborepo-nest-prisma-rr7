import { prisma } from "@repo/db";
import type { LoaderFunction } from "react-router";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const loader: LoaderFunction = async () => {
  const account = await prisma.account.findFirst();
  console.log("🚀 ~ constloader:LoaderFunction= ~ user:");
};

export default function Home() {
  return <Welcome />;
}
