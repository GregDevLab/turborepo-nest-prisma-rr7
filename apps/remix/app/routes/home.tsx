import { PrismaClient } from "@prisma/client";
import type { LoaderFunction } from "react-router";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

const prisma = new PrismaClient();
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const loader: LoaderFunction = async () => {
  const user = await prisma.user.findFirst();
  console.log("🚀 ~ constloader:LoaderFunction= ~ user:", user);
};

export default function Home() {
  return <Welcome />;
}
