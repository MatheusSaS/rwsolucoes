
export default function Hero() {
  return (
    <div id="home" className="items-center justify-center w-full h-96">
      <div className="relative -top-16">
      
        <video src="/estruturas.mp4" className="object-cover w-full h-[600px]"  preload="auto" muted loop  autoPlay />
        
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 justify-center flex flex-col items-center mt-40 mx-5">
           <p className="mb-4 text-center text-lg text-emerald-200 sm:text-xl md:mb-8">Caldeiraria e serviços de solda</p>
           <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-4xl md:mb-12 md:text-6xl">RW Soluções industriais</h1> 
           <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a href="https://wa.me/5517996453211" className="btn bg-emerald-500 hover:bg-emerald-600 text-white">
                <i className="fa-brands fa-whatsapp mr-1 fa-xl text-white" aria-hidden="true"></i>Entrar em contato
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}
