import getAllPostData from '@/lib/getAllPost';
import React from 'react';

export default async function Posts () {
    const posts = await getAllPostData();
    console.log(posts);
    return (
        <div>
            <h1>All Post here: {posts.length}</h1>
        </div>
    );
};
