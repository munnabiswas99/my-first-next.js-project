import getAllPostData from '@/lib/getAllPost';
import Link from 'next/link';
import React from 'react';

export default async function Posts () {
    const posts = await getAllPostData();
    console.log(posts);
    return (
        <div>
            <h1>All Post here: {posts.length}</h1>
            <ul>
                {posts.map(post => <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
            </ul>
        </div>
    );
};
