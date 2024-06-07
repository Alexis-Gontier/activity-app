export default function Header() {
  return (
    <div className="h-[70vh] bg-cover bg-center" style={{backgroundImage: "url('/home.jpg')"}}>
      <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center flex-col">
        <h2 className="text-6xl md:text-8xl font-bold text-white">
            Activity
        </h2>
        <div className="bg-white my-2 w-[2px] h-[100px]"></div>
        <a href="#content" className="bg-[#ffba59] hover:bg-[#ff6030] p-4 rounded-md text-white font-bold transition-all">Commencer l'aventure</a>
      </div>
    </div>
  )
}
