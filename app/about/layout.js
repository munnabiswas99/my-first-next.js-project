import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <nav className="my-6 font-semibold text-xl">
        <ul className="flex gap-6">
            <li><Link href='/about/mission'>Missionnn</Link></li>
            <li><Link href='/about/vision'>Vision</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default layout;
