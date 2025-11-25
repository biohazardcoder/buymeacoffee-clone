import Image from "next/image"

export const Memberships = () => {
  return (
    <div className={`h-[120vh] bg-transparent pt-10 flex items-center justify-center`}>
        <div className="w-[75%] rounded-[50px] h-full bg-white px-12 pt-12 space-y-6">
          <h1 className="uppercase text-gray-500 text-center font-semibold">Memberships</h1>
           <h1 className="text-6xl  font-bold text-[#222222] mt-4 text-center">
             Start a membership for <br />
            your biggest fans.
          </h1>
              <p className="text-2xl text-center mt-4">
             Earn a recurring income by accepting monthly or yearly <br /> 
             subscriptions. Share exclusive content, or just give them a <br />
              way to support your work on an ongoing basis.

          </p>
          <Image src={"/memberships-image.png"} alt="image" width={1200} height={800} className="mt-12"/>
        </div>
    </div>
  )
}
