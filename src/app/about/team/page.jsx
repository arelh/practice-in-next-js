import React from "react";
import Link from "next/link";

export const metadata = {
    title: "team's Arel  ",
    description: 'web development',
    keywords:"react,css",
  }

const MyTeam = () => {
  return (
    <div>
      <h1>my team</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, labore
        quisquam facilis atque molestiae cumque modi nemo, deleniti maiores
        autem impedit dolore esse aperiam consectetur animi voluptate! Mollitia,
        neque soluta?s
      </p>
      <Link href="/">back to menu</Link>
    </div>
  );
};

export default MyTeam;
