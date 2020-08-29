import React, { FC } from "react";
import Link from "next/link";

export const Navigation: FC = () => {
  return (
    <nav>
      <b>Catch all routes ([...slug])</b>
      <ul>
        <li>
          <Link passHref href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link passHref href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link passHref href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
        <li>
          <Link passHref href="/workinprogress">
            <a>Work In Progress (preview only)</a>
          </Link>
        </li>
        <li>
          <Link passHref href="/draft">
            <a>Draft (preview only)</a>
          </Link>
        </li>
      </ul>
      <b>Dynamic routes (/blog/[id])</b>
      <ul>
        <li>
          <Link passHref href="/blog/first-post">
            <a>First Post</a>
          </Link>
        </li>
        <li>
          <Link passHref href="/blog/second-post">
            <a>Second Post (preview only)</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
