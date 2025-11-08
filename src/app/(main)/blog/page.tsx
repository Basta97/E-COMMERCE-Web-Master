import React from 'react'
import blog1 from "../../../../public/blog 4.png"
import blog2 from "../../../../public/blog 3.png"
import BlogCard from "@/components/features/BlogCard";
import {StaticImageData} from "next/image";
import BlogPagination from "@/components/features/BlogPagination";
import { IoIosAddCircle } from "react-icons/io";
import Link from "next/link";

const Page = () => {
    const images: StaticImageData[] = [blog2, blog1];
    return (
        <>
            <div className="flex justify-end px-5">
                <Link href={'/blog/add'} className={'flex gap-1'}>
                    <IoIosAddCircle className={'text-2xl text-Primary p-0 m-0'} />
                    Add New Blog
                </Link>
            </div>
            <section className={'BlogPage-Contect py-5'} >
                <div className={'flex justify-center flex-col gap-6'}>
                    {images.map((image: StaticImageData, index: number) => (
                            <BlogCard key={index} image={image} />
                    ))}
                </div>
            </section>
            <section className={'pagination py-3'}>
                <BlogPagination/>
            </section>
        </>
    )
}
export default Page ;
