import getAllPostData from '@/lib/getAllPost';
import Link from 'next/link';
import React from 'react';

export default async function Posts () {
    const posts = await getAllPostData();
    console.log(posts);
    return (
        <div>
            <h1>All Post here: {posts.length}</h1>
            {posts.map(post => <ul key={post.id}><Link href={`/post/${post.id}`}><h1>{post.title}</h1></Link></ul>)}
        </div>
    );
};
