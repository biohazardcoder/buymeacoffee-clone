import {  CalendarDays, Globe, Mail, MessageCircleHeart, ShieldCheck } from "lucide-react";

export const Platforms = () => {
  


  const items = [
    {
      icon: CalendarDays,
      title:"Not just a membership",
      description:"Creators who previously only used Patreon noticed a massive increase in earnings after accepting one-off payments."
    },
    {
      icon: Globe,
      title:"6 new languages",
      description:"We now support Spanish, French, Italian, German and Ukrainian—making it easier for your global audience to support you."
    },
    {
      icon: Mail,
      title:"Email marketing",
      description:"Instead of paying separately for email marketing tools like Mailchimp, send unlimited emails to your fans for free."
    },
    {
      icon: MessageCircleHeart,
      title:"Being friendly converts",
      description:"ICYMI, we make it simple and fun for your supporters. While you cannot put a number on feelings, it tends to show on the results."
    },
    {
      icon: ShieldCheck,
      title:"Your privacy comes first",
      description:"Receive fan support safely without disclosing your identity or address. We’ll do the heavy-lifting."
    },
  ];

  return (
    <div className={`h-screen bg-transparent pt-10 flex items-center justify-center`}>
      <div className="w-[80%] rounded-[50px] h-full bg-white px-32 pt-12 space-y-6">
        <h1 className="text-6xl font-bold text-[#222222] mt-4 text-center">
          Make 20% or more, <br />
          <span className="text-[#717171]">compared to other platforms.</span>
        </h1>
            <div className="grid grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col ">
                <div className="mt-8">
                  <item.icon size={40} />
                </div>
                <p className="text-xl  font-bold mt-4">{item.title}</p>
                <p className="text-lg text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};
