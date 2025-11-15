import React from "react";
import BlogSidebar from "@/components/layout/Blog/BlogSidebar";
import style from '../style/blogstyle.module.css';

const Layout=({ children }: { children: React.ReactNode })=> {
    return (
        <main className={`${style.container} grid sm:grid-cols-6 grid-cols-1 gap-4 py-5 px-5`}>
            <section className={'blog-page-section sm:col-span-4 col-span-1'}>
                {children}
            </section>
            <aside className={"col-span-1 sm:col-span-2 px-0 md:px-6 "}>
                <BlogSidebar />
            </aside>
        </main>
    );
}
export default Layout;
