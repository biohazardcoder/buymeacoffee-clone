import Image from "next/image"

export const Shop = () => {
  return (
    <div className={`h-[120vh] bg-transparent pt-10 flex items-center justify-center`}>
        <div className="w-[75%] rounded-[50px] h-full bg-white px-12 pt-12 space-y-6">
          <h1 className="uppercase text-gray-500 text-center font-semibold">Shop</h1>
           <h1 className="text-6xl  font-bold text-[#222222] mt-4 text-center">
             Introducing Shop, <br />
            the creative way to sell.
          </h1>
              <p className="text-2xl text-center mt-4">
             The things you’d like to sell probably do not belong in a Shopify store. Shop is <br /> 
              designed from the ground up with creators in mind. Whether it’s a 1-1 Zoom call, art <br />
               commissions, or an ebook, Shop is for you.
          </p>
          <Image src={"/shop-image.png"} alt="image" width={1400} height={800} className="mt-12"/>
        </div>
    </div>
  )
}
