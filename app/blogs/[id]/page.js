import { notFound } from "next/navigation";

const BlogPage = async ({params}) => {
    const {id} = await params;

    if(id === '5'){
        notFound();
    }
    
    return (
        <div>
            Blog is is: {id}
        </div>
    );
};

export default BlogPage;