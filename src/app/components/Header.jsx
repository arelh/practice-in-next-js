import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">tv show of israel</Link>
        </div>
        <div className="Links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Our team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
};
