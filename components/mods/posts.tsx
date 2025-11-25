import Image from "next/image"

export const Posts = () => {
  return (
    <div className={`h-[120vh] bg-transparent pt-10 flex items-center justify-center`}>
        <div className="w-[75%] rounded-[50px] h-full bg-white px-12 pt-12 space-y-6">
          <h1 className="uppercase text-gray-500 text-center font-semibold">Posts, audio & email</h1>
           <h1 className="text-6xl  font-bold text-[#222222] mt-4 text-center">
            Publish your best work
            </h1>
            <p className="text-2xl text-center mt-4">
              Buy Me a Coffee makes it easy to publish free and exclusive content. Try different <br />
              formats such as audio, and make it members-only to drive more memberships.
            </p>
          <Image src={"/posts-image.png"} alt="image" width={1400} height={800} className="mt-12"/>
        </div>
    </div>
  )
}
