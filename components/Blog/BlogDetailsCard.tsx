'use client'
import React, {useEffect ,useState} from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import {Blog} from "@/app/types/blogType";
import Loader from '@/components/Loader'
import { useRouter } from "next/navigation"

const BlogDetailsCard =  ({id}:{id:string|null}) => {
    const [data, setData] = useState<Blog | null>(null);
    const token = typeof window !== "undefined" ? localStorage.getItem("AccessToken") : null;
    const router = useRouter();

    useEffect(() => {
        if (!token) {
            router.push("/auth/login");
            return;
        }
        if (!id) return;
        const fetchData = async () => {
            try {
                const res = await fetch(`https://e-commarce-website-eight.vercel.app/api/v1/blog/${id}`, {
                    method: "GET",
                    headers: { "Authorization": `Bearer ${token}` }
                })
                if (!res.ok) throw new Error("Failed to fetch blog");
                const json = await res.json();
                console.log(json.data);
                setData(json.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [id, token, router]);

    if (!token) return null;
    if (!data) return <Loader />;

    return (
        <Card className={'bg-transparent border-0 shadow-none'}>
            <CardHeader>
                <Image src={data.Image.url} alt={'blog image'} className={'rounded-3xl w-full'} width={250} height={250} loading={"eager"}/>
                <p className={'text-xs text-gray-400 px-2'}>{data.Tags}</p>
                <CardTitle className={'text-2xl p-2'}>{data.title}</CardTitle>
                <CardDescription className={'text-sm text-gray-500 flex gap-3 font-medium px-2'}>
                    <p>{data.publishedAt}</p>
                    <p >{data.author}</p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    {data.content}
                </p>
            </CardContent>
        </Card>
    )
}
export default BlogDetailsCard;
