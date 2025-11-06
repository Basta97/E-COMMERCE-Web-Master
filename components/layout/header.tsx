import Image from "next/image"; // Keep Image import if you plan to use it for the logo

export default function Header() {
    return (
        <>
            {/* 1. Top Announcement/Info Bar */}
            <div className="bg-teal-500 text-white text-center text-xs py-1">
                Due to uncertain delivery without contacting the market
            </div>
            
            {/* 2. Top Utility Nav Bar */}
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 w-screen bg-white border-b border-gray-400 py-2 flex justify-between items-center text-sm text-gray-500">
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-teal-600">About Us</a>
                    <a href="#" className="hover:text-teal-600">Contact</a>
                    <a href="#" className="hover:text-teal-600">Market</a>
                </div>
                <div className="flex space-x-6 items-center">
                    <span className="hidden sm:inline">Need help? Call Us: **+00 0000 000**</span>
                    <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.5 15C3.33 15 1 12.67 1 9.5S3.33 4 6.5 4c1.155 0 2.228.337 3.12 1.054"></path></svg>
                        <span>USD</span>
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span>English</span>
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

            <hr className="border-gray-100" />
            
            {/* 3. Main Logo/Search/Cart Bar */}
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2">
                        {/* Placeholder for the logo image */}
                        <div className="p-2 border border-gray-300 rounded-full bg-teal-500">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 11h16M4 15h16M4 19h16"></path></svg>
                        </div>
                        <span className="text-xl font-bold text-gray-800 tracking-tight">
                            THE <span className="text-teal-500">BASKET</span>
                        </span>
                    </a>

                    {/* Search Bar */}
                    <div className="flex-grow max-w-xl mx-8 hidden lg:flex items-center border border-gray-300 rounded-md">
                        <select className="p-3 bg-gray-100 rounded-l-md text-sm border-r border-gray-300 focus:outline-none">
                            <option>All Categories</option>
                            {/* ... other categories */}
                        </select>
                        <input
                            type="text"
                            placeholder="Search for Products, fruit, meat, egg, etc."
                            className="w-full p-3 text-sm focus:outline-none"
                        />
                        <button className="p-3 text-gray-500 hover:text-teal-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </div>

                    {/* Cart and User Icons */}
                    <div className="flex items-center space-x-6 text-gray-600">
                        <div className="hidden sm:flex items-center space-x-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2 7m8.2-7l2.2 7M12 21a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                            <span className="text-sm">
                                ${"0.00"}
                            </span>
                            <span className="text-xs absolute -mt-5 ml-4 bg-teal-500 text-white rounded-full h-4 w-4 flex items-center justify-center">0</span>
                        </div>
                        <a href="#" className="hover:text-teal-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z"></path></svg>
                        </a>
                    </div>
                </div>
            </nav>

            {/* 4. Secondary Navigation (Categories) */}
            <div className="bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-6 py-2">
                    {/* All Categories Button */}
                    <button className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-sm font-semibold">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 11h16M4 15h16M4 19h16"></path></svg>
                        <span>ALL CATEGORIES</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>

                    {/* Main Nav Links */}
                    <div className="hidden md:flex space-x-6 text-sm font-medium">
                        <a href="#" className="text-teal-500 border-b-2 border-teal-500 pb-2">HOME</a>
                        <a href="#" className="text-gray-600 hover:text-teal-500">SHOP</a>
                        <a href="#" className="text-gray-600 hover:text-teal-500">MEATS & SEAFOOD</a>
                        <a href="#" className="text-gray-600 hover:text-teal-500">BAKERY</a>
                        <a href="#" className="text-gray-600 hover:text-teal-500">BEVERAGES</a>
                        <a href="#" className="text-gray-600 hover:text-teal-500">BLOG</a>
                        <a href="#" className="text-gray-600 hover:text-teal-500">CONTACT</a>
                    </div>
                </div>
            </div>
        </>
    );
}