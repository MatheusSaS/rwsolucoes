"use client"
import Hero from "@/components/hero"
import { Suspense, useEffect, useState } from "react"
import Loading from "./loading"

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/scroll.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000)
  }, [])
  return (
    <>
      {show ? (
        <Suspense fallback={<Loading />}>
          <Hero />
          <div id="sobre" className="flex items-center justify-center w-full h-screen mt-96 md:mt-52">
            <div className="flex w-full h-full">
              {/* Imagem */}
              <div className="flex-none w-1/2 h-full">
                <img src="/empresa.jpeg" alt="Descrição da imagem" className="object-cover w-full h-full" />
              </div>

              {/* Texto */}
              <div className="flex flex-col items-center justify-center w-1/2 h-full bg-white p-4">
                <div className="text-center">
                  <span className="text-2xl sm:text-4xl font-bold">
                    RW Soluções industriais
                  </span>
                </div>
                <div className="text-justify text-xs md:text-sm">
                  <p className="mt-2 font-medium">
                    Fundada em 2021, a RW Soluções atende às necessidades dos nossos clientes com profissionais que possuem mais de 15 anos de experiência. Oferecemos soluções inteligentes e inovadoras com excelência.
                  </p>
                  <p className="mt-2 font-medium">
                    Atuamos em usinas de açúcar e álcool, hidroelétricas, construção civil e industrial, e celulose.
                  </p>
                  <p className="mt-2 font-medium">
                    Somos especializados em fabricação, soldas e montagens, trabalhando com tubulações de aço carbono, aço liga, aço inox e alumínio.
                  </p>
                  <p className="mt-2 font-medium">
                    Nossas especializações em soldas incluem TIG, MIG MAG, eletrodo revestido, arame tubular e robô Kat Gullco. Também oferecemos serviços de polimento e escovação de inox.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="solucoes" className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12">
                <div className="flex flex-col items-center text-center gap-2 max-w-3xl">
                  <h2 className="text-3xl font-bold text-gray-800 lg:text-5xl">Nossas Soluções</h2>
                  <p className="text-md text-opacity-85 text-justify">
                    Com uma equipe de profissionais altamente capacitados, temos o objetivo de proporcionar o melhor processo para a necessidade do projeto.
                    Com comprometimento e competência, investimos continuamente no desenvolvimento de tecnologias avançadas focadas em eficiência produtiva e qualidade
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <div
                  
                  className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src="/img-1.png?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
                  />

                  <span
                    className="relative ml-4 mb-3 inline-block text-xs sm:text-sm text-white md:ml-5 md:text-lg"
                    >Fabricação de escadas aço e Madeira</span
                  >
                </div>

                <div
                  
                  className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src="/img-2.png?auto=format&q=75&fit=crop&w=1000"
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
                  />

                  <span
                    className="relative ml-4 mb-3 inline-block text-xs sm:text-sm text-white md:ml-5 md:text-lg"
                    >Fabricação de guarda corpos e Pergolados</span
                  >
                </div>

                <div
                  
                  className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src="/img-3.png?auto=format&q=75&fit=crop&w=1000"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
                  />

                  <span
                    className="relative ml-4 mb-3 inline-block text-xs sm:text-sm text-white md:ml-5 md:text-lg"
                    >Estrutura para placa solar</span
                  >
                </div>

                <div
                  
                  className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src="/cano.jpg?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
                  />

                  <span
                    className="relative ml-4 mb-3 inline-block text-xs sm:text-sm text-white md:ml-5 md:text-lg"
                    >Acabamento em solda tig</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div id="frase" className="mx-auto w-full -mt-1">
            <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-black py-16 shadow-lg md:py-20 xl:py-48">  
              <div className="relative flex flex-col items-center p-4 sm:max-w-3xl">
                <p className="mb-4 text-center justify-center text-lg text-white sm:text-xl md:mb-8">
                  "Busco realizar os trabalhos com máxima rapidez sem perder a qualidade. <br/>
                  Para mim segurança vem sempre em primeiro lugar. Desde a abertura da empresa
                  sempre visei trabalhar com dedicação e tentar realizar os trabalhos com excelência.
                  Aminha maior realização é ver que ao final da obra realizei um trabalho com
                  qualidade e que o mesmo trouxe a satisfação total de meus Clientes."
                </p>
                <p className="mb-4 text-center justify-center text-lg text-white sm:text-xl md:mb-8">
                "Coloque seu coração, mente e alma até mesmo nas menores coisas que você fizer. Esse é o segredo para o sucesso." Guilherme Ávila
                </p>
                <p className="mb-4 text-center justify-center text-lg text-white sm:text-xl md:mb-8 font-bold">
                CEO - ROGÉRIO OLIVEIRA
                </p>
              </div>
            </section>
          </div>
          <div id="contato" className="relative container px-4 mx-auto h-screen flex justify-center items-center bg-white">
            <div className="max-w-md lg:max-w-5xl mx-auto mt-72 sm:mt-0">
              <div className="flex flex-col items-center text-center gap-2 w-full mb-10 mt-5">
                  <h2 className="text-3xl font-bold text-gray-800 lg:text-5xl">Entre em contato</h2>
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
                  <img className="h-full w-full max-w-md" src="/empresa.jpeg" alt="" data-config-id="auto-img-3-4"/>
                </div>
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">

                  <div className="max-w-md py-6 lg:ml-auto">
                    <div className="flex mb-12 items-center">
                      <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full0">
                        <img src="/icon-phone.svg" alt="" data-config-id="auto-img-4-4"/>
                      </div>
                      <div>
                        <span className="block text-lg font-semibold text-gray-900" data-config-id="auto-txt-6-4">(17) 99645-3211</span>
                      </div>
                    </div>
                    <div className="flex mb-12 items-center">
                      <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full">
                        <img src="/icon-email.svg" alt="" data-config-id="auto-img-5-4"/>
                      </div>
                      <div>
                        <span className="block text-lg font-semibold text-gray-900" data-config-id="auto-txt-8-4">resolucoesindustriais@gmail.com</span>
                      </div>
                    </div>
                    <div className="flex mb-12 items-center">
                      <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full">
                        <img src="/instagram.png" className="h-8" alt="" data-config-id="auto-img-5-4"/>
                      </div>
                      <div>
                        <span className="block text-lg font-semibold text-gray-900" data-config-id="auto-txt-8-4">rwsolucoesindustriais</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full">
                        <img className="h-8" src="/icon-location.svg" alt="" data-config-id="auto-img-6-4"/>
                      </div>
                      <div>
                        <span className="block text-lg font-semibold text-gray-900" data-config-id="auto-txt-10-4">
                          Avenida Brasilia 649 - Parque das Nações Fernandópolis / SP
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      ) : (
        <div className="cover">
          <div className="cover-logo">
            <span></span>
          </div>
        </div>
      )}
    </>
  )
}
