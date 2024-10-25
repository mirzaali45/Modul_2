import img from "../assets/Foto_Non_Formal_Mirza-removebg-preview.png"

function HomePages (){
  return (
    <div className="flex justify-center items-center bg-secondary">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">

        <div className="w-full md:w-1/2 space-y-6">
          <div className="uppercase outline px-9 py-3 font-bold text-balance text-indigo-500 border-2 rounded-lg p-2 w-3/4 bg-gray-200">Hallo !</div>
          <div className="text-5xl block mt-1 leading-tight font-medium text-black ">I&apos;m Mirza Ali Yusuf</div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black ">A Web Developer and a back-end developer </div>
          <button className="px-6 py-3 bg-black text-white font-bold">READ MORE</button>
        </div>
        
        <div className="w-full md:w-1/2">
          <img className="rounded-lg object-cover w-full h-auto" src={img} alt="Modern building architecture" />
        </div>
      </div>
    </div>
  )
}
export default HomePages