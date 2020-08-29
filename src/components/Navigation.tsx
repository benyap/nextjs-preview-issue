import React, { FC } from "react";
import Link from "next/link";

export const Navigation: FC = () => {
  return (
    <nav>
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
    </nav>
  );
};
