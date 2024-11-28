// import Image from "next/image";
// import styles from "./page.module.css";
"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/mykhanh.module.css";
import AppTable from "@/components/app.table";
import useSWR from "swr";
// import { useEffect } from "react";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log(">>> check data", data);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>{data?.length}</div>
      <ul>
        <li className={x.red}>
          <Link href={"/facebook"}>
            <span className={y.red}>Facebook</span>
          </Link>
        </li>
        <li>
          <Link href={"/youtube"}>Youtube</Link>
        </li>
        <li>
          <Link href={"/instagram"}>Instagram</Link>
        </li>
      </ul>
      <AppTable 
        blogs={data?.sort((a:any, b:any) => b.id - a.id)}
      />
    </div>
  );
}
