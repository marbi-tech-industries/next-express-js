import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState(null);
  ``;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/hello");
      const resData = await res.json();
      console.log(resData);

      setData(() => resData);
    };

    fetchData();
  }, []);
  return (
    <div className={styles["container"]}>
      <Head>
        <title>NEXT + EXPRESS = NEXPRESS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/login">
        <a>login</a>
      </Link>

      <div className={styles["nexpress"]}>
        <h2>NEXT + EXPRESS = NEXPRESS</h2>
      </div>

      <hr />
      {data ? <div>msg:{data.msg}</div> : <span>Loading...</span>}
    </div>
  );
}
