import { Instagram, Twitter, X, Youtube } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const items = [
    {
        title:"About",
        url:"/about"
    },
    {
        title:"Help center",
        url:"/help-center"
    },
    {
        title:"Privacy",
        url:"/privacy"
    },
    {
        title:"Terms",
        url:"/terms"
    }
  ];

  return (
    <div className="w-[80%] m-auto bg-transparent py-10 flex items-center justify-between">
        <p className="text2xl text-gray-500">© Buy Me a Coffee</p>
        <ul>
            {items.map((item, index) => (
                <li key={index} className="inline-block mx-4">
                    <Link href={item.url} className="font-semibold text-lg">{item.title}</Link>
                </li>
            ))}
        </ul>
        <Instagram size={26} />
    </div>
  );
};
