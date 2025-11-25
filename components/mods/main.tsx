'use client';

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Support } from "./support";
import { Memberships } from "./memberships";
import { Shop } from "./shop";
import { Posts } from "./posts";
import { Designed } from "./designed";

export const Main = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight * 0.1);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`${!isScrolled ? 'bg-white' : 'bg-[#FAF8F0]'} transition-colors duration-300`}>
             <div
                className={`h-[calc(100vh-72px)] flex flex-col text-center items-center gap-4 justify-center`}
            >
                <h1 className="flex items-center gap-2 font-semibold text-lg">
                    <span className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star key={index} size={16} color="#2e813a" />
                        ))}
                    </span>
                    Loved by 1,000,000+ creators
                </h1>

                <h1 className="text-8xl font-bold text-[#222222] mt-4">
                    Fund your <br /> creative work
                </h1>

                <p className="text-2xl">
                    Accept support. Start a membership. Setup a shop. It’s easier <br />
                    than you think.
                </p>

                <li className="flex items-center gap-2 text-2xl font-bold bg-yellow-300 py-6 px-12 rounded-full mt-6">
                    Start my page
                </li>

                <p className="text-lg">It’s free and takes less than a minute!</p>
            </div>
            <Support/>
            <Memberships/>
            <Shop/>
            <Posts/>
            <Designed/>
        </div>
       
    );
};
