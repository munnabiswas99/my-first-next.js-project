import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About",
  description: "This is about page  ",
};

const layout = ({ children }) => {
  return (
    <div>
      <nav className="my-6 font-semibold text-xl">
        <ul className="flex gap-6">
            <li><Link href='/about/mission'>Mission</Link></li>
            <li><Link href='/about/vision'>Vision</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default layout;
