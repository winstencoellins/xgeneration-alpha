import Logo from '../assets/img/chigen-logo-full.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer" className="bg-chigen-primary">
      <div className=" bg-linear-pink-invert pb-10">
        <div className="mx-auto container pt-20 flex flex-col items-center justify-center">
          <div>
            <img src={Logo} alt="chi generation" className="w-60 object-contain"/>
          </div>
          <div className="text-white flex flex-col md:items-center f-f-l pt-10 text-center">
            <h1 className="text-2xl font-bold font-primary">First Coding Workshop Fundamental in Medan</h1>
            <div className="my-10 text-base font-secondary f-f-l">
              <ul className="md:flex items-center">
                <Link to="/"><li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:text-chigen-secondary">Home</li></Link>
                <Link to="/learn"><li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:text-chigen-secondary">Learn</li></Link>
                <Link to="/about"><li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:text-chigen-secondary">About</li></Link>
                <Link to="/contact"><li className="cursor-pointer pt-4 lg:py-0 hover:text-chigen-secondary">Contact</li></Link>
              </ul>
            </div>
            <div className="text-sm text-color mb-5 f-f-l">
              <p> © 2021 Chi-Generation. All rights reserved</p>
            </div>
          </div>
          <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
          <div className="flex justify-between items-center pt-5">
            <div className="mr-4">
              <a href="https://www.instagram.com/chi.generation/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x" color="white" className="hover:text-chigen-secondary"/></a>
            </div>
            <div>
              <a href="https://www.wa.me/6282171946959" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" className="hover:text-chigen-secondary"/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
