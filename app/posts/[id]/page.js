import getSinglePost from "@/lib/getSinglePost";

export default async function SinglePost({params}){
    const {id} = await params;
    console.log(id);
    const post = await getSinglePost(id);
    return (
        <div>
            <h1 className="text-xl text-blue-600">{post.title}</h1>
            {/* <p>{post.body}</p> */}
        </div>
    )
}