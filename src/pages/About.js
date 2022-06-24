import Randy from '../assets/img/randy.jpg';
import Winsten from '../assets/img/winsten.jpg';
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Chi-Generation</title>
        <meta name="description" content="Dari sini seluruh cerita kami berasal untuk membangun Chi-Generation menuju SDM Indonesia yang lebih baik." />
      </Helmet>
      <main id="main">
        <section id="hero" className="h-2/4 bg-chigen-primary text-center py-24 md:py-32">
          <div className="container mx-auto flex justify-center items-center">
            <div className="mx-10">
              <h1 className="md:text-5xl text-4xl font-bold leading-tight my-5 capitalize font-primary text-white">Who We Are</h1>
              <p className="text-xl font-secondary mb-5 text-gray-300">
                Dari sini seluruh cerita kami berasal untuk membangun Chi-Generation menuju SDM Indonesia yang lebih baik.
              </p>
            </div>
          </div>
        </section>
        <section id="about-us" className="text-gray-600 font-secondary">
          <div className="container mx-auto flex flex-col px-5 py-14 justify-center items-center">
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="Technology" src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" />
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-primary text-gray-900">Our Story</h2>
              <p className="mb-8 leading-relaxed">
                Chi (X), tiga karakter yang diambil dari yang diambil kata "chilietía" yang berarti milenial dalam bahasa Yunani.
              </p>
              <p className="mb-8 leading-relaxed">
                Kami merupakan generasi milenial yang mendirikan organisasi ini untuk membagikan ilmu pengetahuan mengenai dunia perteknologian kepada mereka yang ingin terjun ke dalam dunia perteknologian ataupun bagi mereka yang penasaran mengenai dunia perteknologian.
              </p>
              <p className="mb-8 leading-relaxed">
                Kami juga ingin mengubah pola pandang dan pola pikir orang - orang mengenai betapa pentingnya teknologi dan bagaimana teknologi dapat mengubah cara hidup seseorang.
              </p>
            </div>
          </div>
        </section>
        <section id="our-team" className="mb-10">
          <div className="container flex justify-center mx-auto">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
              <h3 className="xl:text-4xl text-3xl text-center text-gray-800 font-bold pb-6 sm:w-4/6 w-5/6 mx-auto font-primary">
                Individual Idealis dibalik Pembentukan Chi-Generation
              </h3>
            </div>
          </div>
          <div className="w-full px-10">
            <div className="container mx-auto">
              <div className="lg:flex md:flex flex-wrap justify-evenly pt-5">
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                  <img alt="Winsten Coellins" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Winsten} />
                    <div className="w-full">
                      <h4 className="font-bold text-2xl text-gray-900 font-primary">Winsten Coellins</h4>
                      <h5 className="text-gray-500 mb-3 font-secondary">Student at University of Wisconsin, US</h5>
                      <p className="mb-4 font-secondary">
                        Tamatan sekolah SMA Swasta Methodist - 3, Medan. Sempat berkuliah selama dua tahun di Minnesota State University, Mankato, Minnesota, USA di bidang Computer Science kemudian melakukan transfer ke University of Wisconsin - Madison, Wisconsin, USA untuk mengambil jurusan Data Science dan sekarang memasuki tahun ke - 4 untuk mengambil gelar Bachelor Degree. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img alt="Randy Brilliant" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-top mb-4" src={Randy} />
                    <div className="w-full">
                      <h4 className="font-bold text-2xl text-gray-900 font-primary">Randy Brilliant</h4>
                      <h5 className="text-gray-500 mb-3 font-secondary">Student at IB IT&B, Indonesia</h5>
                      <p className="mb-4 font-secondary">
                        Tamatan sekolah SMA Swasta Methodist - 3, Medan. Sekarang sedang melanjutkan studi di IB IT&B, Medan serta merupakan tahun ke-3 mengambil Information Systems dengan program Joint Degree S1 + Bachelor Degree yang bekerjasama dengan universitas UNIR, Spanyol. Merupkan seorang freelance Graphic Designer serta Web Developer yang telah bekerja untuk beberapa client seperti Grab, Print&Pack.id, Family Group, IB IT&B.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
