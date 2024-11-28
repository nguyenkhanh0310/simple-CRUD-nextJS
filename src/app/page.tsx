// import Image from "next/image";
// import styles from "./page.module.css";
"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/mykhanh.module.css";
import AppTable from "@/components/app.table";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json();
      console.log(data);
    }
    fetchData()
  }, []);

  return (
    <div>
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
      <AppTable />
    </div>
  );
}
