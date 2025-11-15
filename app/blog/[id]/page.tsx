import React from "react";
import BlogDetailsCard from "@/components/Blog/BlogDetailsCard";


const Page = async ({ params }: { params: { id: string } }) => {
    const {id} = await params;
    return (
        <section className={'flex flex-col gap-4'}>
            <BlogDetailsCard id={id} />
        </section>
    );
};

export default Page;

