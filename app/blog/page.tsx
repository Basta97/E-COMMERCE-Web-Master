'use client'
import React ,{useState ,useEffect} from 'react';
import BlogCard from "@/components/Blog/BlogCard";
import {Blog,BlogResponse} from '@/app/types/blogType';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination";
import Loader from "@/components/Loader";
import { IoIosArrowForward } from "react-icons/io";

const Page = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchBlogs = async (page: number) => {
        setLoading(true);
        try {
            const response = await fetch(`https://e-commarce-website-eight.vercel.app/api/v1/blog/get-all-blog?page=${page}`, {
                next: { revalidate: 0 }
            });
            if (!response.ok) throw new Error('Request failed');
            const res: BlogResponse = await response.json();
            setBlogs(res.data);
            setCurrentPage(res.currentPage);
            setTotalPages(res.totalPages);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchBlogs(currentPage);
    }, [currentPage]);

    if(loading) return <Loader />;

    return (
        <>
            <section className={'BlogPage-Contect py-5'} >
                <div className={'flex justify-center flex-col gap-6'}>
                    {blogs && blogs.length === 0?
                        <div className="min-h-screen text-center py-10 flex items-center justify-center">
                            <p className={'text-4xl m-auto font-bold'}>No blogs found</p>
                        </div>
                        : blogs.map((Blog:Blog) => (
                            <BlogCard key={Blog._id} Blog={Blog} />
                        ))
                    }
                </div>
            </section>
            <section className={'pagination py-3'}>
                <Pagination>
                    <PaginationContent>
                        {[...Array(totalPages)].map((_, idx) => (
                            <PaginationItem key={idx}>
                                <button
                                    onClick={() => setCurrentPage(idx + 1)}
                                    className={`border-0 rounded-full size-7 cursor-pointer px-1 py-1 ${
                                        currentPage === idx + 1
                                            ? 'bg-Primary text-white'
                                            : 'bg-transparent text-black'
                                    }`}
                                >
                                    {idx + 1}
                                </button>
                            </PaginationItem>
                        ))}
                        <PaginationItem className={'flex items-center justify-center'}>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                className="bg-transparent active:bg-Primary  disabled:opacity-50 disabled:cursor-auto active:text-white border-0 rounded-full text-black  size-7 cursor-pointer"
                                disabled={currentPage === totalPages}
                            >
                                <IoIosArrowForward className={'m-auto'}/>
                            </button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </section>
        </>
    )
}
export default Page ;
