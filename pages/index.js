import { PrismaClient } from "@prisma/client";
import Head from "next/head";

export default function Home({categorias}) {
  console.log(categorias);
  return <h1>NextJs</h1>;
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categorias = await prisma.categoria.findMany();

  return {
    props: {
      categorias,
    },
  };
};
