'use client'
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {Blog} from '@/app/types/blogType';
import blog2 from "../../public/images/blog 3.png";
import { parseISO, format } from 'date-fns';

function BlogCard({Blog}:{Blog:Blog}) {
    const dt:Date = parseISO(Blog.publishedAt);
    const date:string = format(dt, 'MMM dd yyyy');
    return (
        <>
            <Card className={'bg-transparent relative py-[2rem]'}>
                <Link href={`/blog/${Blog._id}`} >
                    <CardHeader >
                        <Image src={Blog.Image?.url ?? blog2} alt={'image photo'} className={'w-full rounded-sm'} width={250} height={250} />
                        <p className={'text-xs text-gray-400'}>{Blog.Tags}</p>
                        <CardTitle className={'text-2xl ]'}>{Blog.title}</CardTitle>
                        <CardDescription className={'text-sm text-gray-500 flex gap-3 font-medium'}>
                            <p>{date}</p>
                            <p >{Blog.author}</p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className={'text-sm py-2'}>
                            {Blog.content}
                        </p>
                    </CardContent>
                </Link>
            </Card>

        </>

    )
}

export default BlogCard;
