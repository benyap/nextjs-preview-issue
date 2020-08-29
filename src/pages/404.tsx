import React, { FC } from "react";
import Head from "next/head";
import Link from "next/link";

const NotFoundPage: FC = () => {
  return (
    <div>
      <Head>
        <title>Not Found</title>
      </Head>
      <h1>Page Not Found</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
