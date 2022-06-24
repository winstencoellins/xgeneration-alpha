import LogoMarquee from "../components/LogoMarquee/LogoMarquee";
import Product from "../components/Product";
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>Chi-Generation</title>
        <meta name="description" content="Coding Workshop Fundamental pertama di kota Medan" />
      </Helmet>
      
    <main id="main">
      <section id="hero" className="h-2/4 bg-chigen-primary text-center lg:text-left py-24 md:py-32">
        <div className="container mx-auto lg:flex justify-center lg:justify-between items-center px-10 md:px-20">
          <div className="lg:w-6/12 ">
            <h1 className="md:text-5xl text-4xl font-bold leading-tight my-5 capitalize font-primary text-white">Create Impact with Fundamental</h1>
            <p className="text-lg font-secondary mb-5 text-gray-300">Kami merupakan generasi milenial yang ingin mengubah pola pandang dan pola pikir orang - orang mengenai betapa pentingnya teknologi dan bagaimana teknologi dapat mengubah cara hidup seseorang.</p>
            <div className="pt-5 font-primary font-bold">
              <Link to="/learn" className="text-white rounded-full py-4 px-8 text-lg font-semibold bg-chigen-secondary border-chigen-secondary inline-block border mr-3 hover:bg-indigo-500 hover:shadow-md hover:border-indigo-500 transition delay-150 duration-300 ease-in-out">
                Browse Workshop
              </Link>
            </div>
          </div>
          <div className="lg:w-4/12 hidden md:block mt-10">
            <img src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            style={{transform: 'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)'}} alt="technology analogy" className="rounded" />
          </div>
        </div>
      </section>
      <LogoMarquee />
      <section id="who-are-we">
        <div className="mx-auto container py-12 px-4">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-indigo-700 to-chigen-primary md:py-8 md:px-8  px-5 py-4 xl:px-12 xl:py-16 shadow-md rounded-lg">
              <div>
                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                  <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex  items-center justify-center md:pt-0 pt-4 text-white md:text-left text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight font-primary">
                      Bagaimana Chi-Generation bisa terbentuk?
                    </h2>
                    <p className="my-5 text-lg font-secondary">
                      Kami hadir untuk membagikan pengetahuan mengenai dunia perteknologian kepada kalian semua yang ingin mempelajari ataupun ingin sekedar tahu mengenai teknologi.
                    </p>
                    <Link to="/about">
                      <button className="mt-5 lg:mt-12 py-3 lg:py-4 px-4  lg:px-6 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:opacity-90">Read More</button>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-full">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center mt-8">
                        <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                          <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png" alt="people" />
                        </div>
                        <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                          <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(2).png" alt="people" />
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                          <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png" alt="people" />
                        </div>
                        <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                          <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(2).png" alt="people" />
                        </div>
                        <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                          <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(3).png" alt="people" />
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                          <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png" alt="people" />
                        </div>
                        <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                          <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(3).png" alt="people" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Product />
    </main>
    </>
  )
}

export default Home
