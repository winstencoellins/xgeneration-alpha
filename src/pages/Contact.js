import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);

  const sendData = async e => {
    e.preventDefault();
    setMessage("");
    setSendError(false);
    setLoading(true);
    try {
        const response = await fetch(
            "https://v1.nocodeapi.com/chigeneration/google_sheets/bRIcMTRrnkIrXgRs?tabId=Contact",
            {
                method: "post",
                body: JSON.stringify([[name, email, userMessage]]),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const json = await response.json();
        setMessage("Pesan kamu telah terkirimkan, terima kasih!");
        setName("");
        setEmail("");
        setUserMessage("");
        setLoading(false);
    } catch (error) {
        setSendError(true);
        setMessage("Coba ulang kirim beberapa saat lagi.");
        setLoading(false);
    }
};


  return (
    <>
      <Helmet>
        <title>Contact Us | Chi-Generation</title>
        <meta name="description" content="Tak Kenal Maka Tak Sayang, segera hubungi kami jika kamu tertarik untuk mengeksplor lebih dalam bersama kami." />
      </Helmet>
      <main id="main">
        <section id="hero" className="h-2/4 bg-chigen-primary text-center py-24 md:py-32">
          <div className="container mx-auto flex justify-center items-center">
            <div className="mx-10">
              <h1 className="md:text-5xl text-4xl font-bold leading-tight my-5 capitalize font-primary text-white">Contact Us</h1>
              <p className="text-xl font-secondary mb-5 text-gray-300">Tak Kenal Maka Tak Sayang, segera hubungi kami jika kamu tertarik untuk mengeksplor lebih dalam bersama kami.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63709.74282112315!2d98.670879!3d3.619706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2226f9bc0614a632!2sChi%20-%20Generation%20(Coding%20Workshop)!5e0!3m2!1sen!2sus!4v1623597385404!5m2!1sen!2sus" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}}></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1">Jalan K L Yos Sudarso No. 153 AB Medan, Sumatera Utara, Indonesia</p>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">WORKING HOURS</h2>
                  <p className="leading-relaxed">Sabtu - Minggu, 09.00 WIB - 17.00 WIB</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a className="text-indigo-500 leading-relaxed" href="mailto:chigen20@gmail.com">chigen20@gmail.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <a className="text-indigo-500 leading-relaxed" href="https://www.wa.me/6282171946959">(+62)-821-7194-6959</a><br /><em>(Whatsapp Available)</em>
                </div>
              </div>
            </div>
            <form className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" onSubmit={sendData}>
                { message && <Alert message={message} type={sendError ? "danger" : "success"} />}
                <h2 className="text-gray-900 text-3xl mb-1 font-bold title-font">Let's Collaborate Together!</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Kami siap membantu anda untuk berkembang!</p>
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Your Name</label>
                  <input type="text" id="name" name="name" value={name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="John Doe" required onChange={e => setName(e.target.value)} onBlur={e => setName(e.target.value)} />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Your Email Address</label>
                  <input type="email" id="email" name="email" value={email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="example@email.com" required onChange={e => setEmail(e.target.value)} onBlur={e => setEmail(e.target.value)}/>
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Your Message</label>
                  <textarea id="message" name="message" value={userMessage} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Your message here" required onChange={e => setUserMessage(e.target.value)} onBlur={e => setUserMessage(e.target.value)}></textarea>
                </div>
                <button className="text-white bg-chigen-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg" type="submit">
                  { loading ? <Loader /> : "Send Message" }
                </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact
