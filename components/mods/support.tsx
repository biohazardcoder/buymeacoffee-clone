import Image from "next/image"

export const Support = () => {
  return (
    <div className={`h-[120vh] bg-transparent pt-16 flex items-center justify-center`}>
        <div className="w-[75%] rounded-[50px] h-full bg-white px-12 pt-12 space-y-6">
          <h1 className="uppercase text-gray-500 text-center font-semibold">Support</h1>
           <h1 className="text-6xl  font-bold text-[#222222] mt-4 text-center">
              Give your audience <br />
              an easy way to say thanks.
          </h1>
              <p className="text-2xl text-center mt-4">
             Buy Me a Coffee makes supporting fun and easy. In just a couple of taps, your fans <br /> 
             can make the payment (buy you a coffee) and leave a message.
          </p>
          <Image src={"/support-image.png"} alt="image" width={1200} height={800} className="mt-12"/>
        </div>
    </div>
  )
}
