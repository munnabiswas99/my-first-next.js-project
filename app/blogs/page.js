import Link from "next/link";
import React from "react";

const page = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog-1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae obcaecati eligendi eum ipsam vitae quam. Animi asperiores, obcaecati et molestiae illum beatae cumque illo quaerat, eius sapiente totam? Voluptatum, excepturi!",
    },
    {
      id: 2,
      title: "Blog-2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae obcaecati eligendi eum ipsam vitae quam. Animi asperiores, obcaecati et molestiae illum beatae cumque illo quaerat, eius sapiente totam? Voluptatum, excepturi!",
    },
    {
      id: 3,
      title: "Blog-3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae obcaecati eligendi eum ipsam vitae quam. Animi asperiores, obcaecati et molestiae illum beatae cumque illo quaerat, eius sapiente totam? Voluptatum, excepturi!",
    },
  ];

  return (
    <div>
      <p className="font-bold text-xl my-5">Blogs are here</p>
      <ul>
        {blogs.map((blog) => (
          <li className="my-2" key={blog.id}><Link href={`/blogs/${blog.id}`}>Blog {blog.id}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default page;
