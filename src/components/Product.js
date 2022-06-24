import { Link } from 'react-router-dom';

const listWorkshop = [
  {
    id:"1",
    name: "Intro to Web Development",
    type: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    description: "Kelas ini mengajar tentang dasar - dasar pemrograman dalam pengembangan website. Kalian akan diajarkan menggunakan HTML, CSS, dan JavaScript untuk membangun website. Kamu juga dapat mendeploy website kamu sehingga bisa dikunjungi oleh orang lain.",
    link: "http://bit.ly/chigenwd2",
  },
  {
    id:"2",
    name: "Programming Fundamental with Python",
    type: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "Kelas ini mengajar tentang dasar - dasar pemrograman dengan menggunakan bahasa pemrograman Python. Kelas ini merupakan kelas yang paling cocok bagi mereka yang baru pertama kali ingin belajar pemrograman karena bahasa pemrograman Python merupakan bahasa tingkat tinggi sehingga sangat mudah untuk dipahami.",
    link: "http://bit.ly/chigencspy2",
  },
  {
    id:"3",
    name: "Introduction to OOP and Data Structure",
    type: "Computer Science",
    image: "https://images.unsplash.com/photo-1571818684035-c1afe7eab7f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
    description: "Intro to OOP and Data Structure merupakan kelas lanjutan dari Programming Fundamentals with Python. Dengan adanya dasar yang kuat dari Programming Fundamentals, kalian akan mempelajari lanjutan yang lebih dalam mengenai OOP dan struktur data yang lebih dalam untuk memasuki kelas Algoritma.",
    link: "http://bit.ly/chigenalgo1",
  },
]

function Product() {
    return (
        <section id="workshop-series">
          <div className="mt-10 mx-auto container">
            <h1 className="lg:text-5xl text-3xl text-center f-m-w text-chigen-primary font-bold font-primary">Upcoming Workshop</h1>
            <div className="py-8 h-full lg:flex justify-center px-4">
              {listWorkshop.map(workshop => (
                <div className="h-full lg:w-1/3 lg:mr-8 lg:mb-0 mb-4" key={workshop.id}>
                  <div className="w-full h-96 relative hover:shadow-lg">
                    <img src={workshop.image} className="absolute w-full h-full inset-0 object-center object-cover z-10 " alt={workshop.name} />
                    <div className="left-0 px-3 flex items-cente mb-3 justify-between bottom-0 w-full absolute z-20 pt-4">
                      <h4 className="f-m-m px-6 py-3 rounded-md bg-chigen-primary text-white font-bold font-secondary">{workshop.type}</h4>
                    </div>
                  </div>
                  <div className="mt-12">
                    <h4 className="f-m-m text-2xl font-bold leading-7 font-primary">{workshop.name}</h4>
                    <p className="text-base f-m-m leading-loose mt-2 font-secondary">
                    {workshop.description}
                    </p>
                    <div className="mt-6">
                      <a href={workshop.link}>
                        <p className="text-indigo-700 underline cursor-pointer text-base font-semibold">View Details</p>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center lg:mt-16 pb-20 w-full">
              <Link to="/learn" className="hover:bg-gray-100 border border-indigo-700 md:text-2xl text-lg rounded f-m-m font-semibold text-indigo-700 focus:outline-none md:px-12 px-6 md:py-6 py-3 xl:leading-4">Browse Workshop</Link>
            </div>
          </div>
        </section>
    );
}
export default Product;