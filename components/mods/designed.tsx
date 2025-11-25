import { CheckCircle2 } from "lucide-react";

export const Designed = () => {
  const items = [
    <>
      We don't call them "customers" or transactions. They are your{" "}
      <b className="text-black">supporters.</b>
    </>,
    <>
      You have <b className="text-black">100% ownership</b> of your supporters.
      We never email them, and you can export the list any time you like.
    </>,
    <>
      You get to <b className="text-black">talk to a human</b> for help, or if
      you just like some advice to hit the ground running.
    </>,
    <>
      You get paid instantly to your bank account.{" "}
      <b className="text-black">No more 30-day delays.</b>
    </>,
  ];

  return (
    <div className="h-[80vh] bg-transparent pt-10 flex items-center justify-center">
      <div className="w-[75%] rounded-[50px] h-full px-12 pt-12 space-y-6">
        <h1 className="text-6xl font-bold text-[#222222] mt-4 text-center">
          Designed for creators, <br />
          <span className="text-[#717171]">not for businesses.</span>
        </h1>

        <div className="grid grid-cols-2 gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex gap-8">
              <div className="mt-8">
                <CheckCircle2 size={40} />
              </div>
              <p className="text-2xl mt-6 text-gray-500">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
