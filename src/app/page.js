import { Inter } from 'next/font/google'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import Image from 'next/image';
import Formulario from '../components/Form/form';
import ProjectCard from './../components/ProjectCard/projectCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />

      {/* Whatsapp */}
      <div className='cta-whatsapp shake-effect'>
        <Link href='https://wa.me/5537998727252' target="blank">
          <Image src="/img/whats.webp" alt='Arthur Correa' width={400} height={400} />
        </Link>
      </div>

      <main className='bg-gradient-to-r from-bg-griant-1 from-5% to-slate-950 to-80%'>
        <section className='bg-image flex justify-center flex-col px-10 py-36'>
          <div className='container mx-auto'>
            <h1 className='text-white font-bold mt-0 text-2xl md:text-5xl'>Arthur Correa <br/> Front-end Developer</h1>
            <Link href="./contact">
              <p className='cta p-3 w-60 text-center text-lg'>Contratar Agora</p>
            </Link>
          </div>
        </section>

        <section className='min-h-20 bg-black py-5 px-3 shadow-xl shadow-black w-full'>
          <div className='container mx-auto'>
            <div className='place-content-center justify-center items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
              <Image src="/img/quem-sou.png" alt='React' width={120} height={120} />
              <Image src="/img/quem-sou.png" alt='React' width={120} height={120} />
              <Image src="/img/quem-sou.png" alt='React' width={120} height={120} />
              <Image src="/img/quem-sou.png" alt='React' width={120} height={120} />
              <Image src="/img/quem-sou.png" alt='React' width={120} height={120} />
              <Image src="/img/quem-sou.png" alt='React' width={120} height={120} />
            </div>
          </div>
        </section>

        <section className='container mx-auto grid grid-cols-1 md:grid-cols-2 py-20 place-content-center'>
          <div className='place-content-center grid mb-5 lg:mb-0'>
            <Image src="/img/quem-sou.png" alt='Arthur Correa' width={400} height={400} />
          </div>
          <div className='quem-sou place-content-center grid'>
            <h2 className='mb-5 font-bold text-white text-2xl'>QUEM É ARTHUR CORRA?</h2>
            <p className='leading-7 mb-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <Link className='cta w-60 py-3 text-center text-lg' href="#">
              Entrar em Contato
            </Link>
          </div>
        </section>

        <section className='bg-black shadow-xl shadow-black'>
          <div className='container mx-auto grid pb-20 my-5'>
            <h2 className='text-center text-2xl py-10 font-bold'>PROJETOS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 flex-wrap place-content-center justify-items-center w-full'>

              <ProjectCard 
                title='Projeto 1'
                content='Lorem Ipsum in dolor'
                image='/img/quem-sou.png'
                modalimg='/img/quem-sou.png'
                ctaLink='#'
              />

              <ProjectCard 
                title='Projeto 2'
                content='Lorem Ipsum in dolor'
                image='/img/quem-sou.png'
                modalimg='/img/quem-sou.png'
                ctaLink='#'
              />

              <ProjectCard 
                title='Projeto 3'
                content='Lorem Ipsum in dolor'
                image='/img/quem-sou.png'
                modalimg='/img/quem-sou.png'
                ctaLink='#'
                isClose={true}
              />

            </div>
          </div>
        </section>

        <section>
          <div className='container mx-auto py-10'>
            <div className='form-div max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 pb-10 py-5 items-center justify-center'>
              <div className='w-full place-items-end h-full hidden lg:flex'>
                <Image src="/img/quem-sou.png" alt='Entre em Contato!' width={300} height={600} />
              </div>
              <div className='w-full place-items-start h-full'>
                <Formulario/>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>

  )
}
