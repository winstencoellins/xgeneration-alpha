import './LogoMarquee.css';
import { Link } from 'react-router-dom';

function LogoMarquee() {
  const logoStyle = {
    width: 'auto',
    maxWidth: 'none'
  }
  return (
    <section id="logoMarqueeSection">
      <div className="container mx-auto">
        <div className="default-content-container flex items-center py-14 px-14">
          <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
            <div className="marquee">
              <Link to="/learn"><img src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png" alt="HTML" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png" alt="CSS" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="JavaScript" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/N/nodejs-logo-54107C5EDD-seeklogo.com.png" alt="NodeJS" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png" alt="Python" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/J/jupyter-logo-A91705F539-seeklogo.com.png" alt="Jupyter" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/V/visual-studio-code-logo-449D71944F-seeklogo.com.png" alt="Visual Studio Code" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/A/adobe-illustrator-cc-logo-C1DC5A6D09-seeklogo.com.png" alt="Adobe Illustrator" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/A/adobe-photoshop-cc-logo-CBD0AAA3A7-seeklogo.com.png" alt="Adobe Photoshop" className="marqueelogo h-20" style={logoStyle} /></Link>
            </div>
            <div className="marquee">
              <Link to="/learn"><img src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png" alt="HTML" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png" alt="CSS" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="JavaScript" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/N/nodejs-logo-54107C5EDD-seeklogo.com.png" alt="NodeJS" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png" alt="Python" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/J/jupyter-logo-A91705F539-seeklogo.com.png" alt="Jupyter" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/V/visual-studio-code-logo-449D71944F-seeklogo.com.png" alt="Visual Studio Code" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/A/adobe-illustrator-cc-logo-C1DC5A6D09-seeklogo.com.png" alt="Adobe Illustrator" className="marqueelogo h-20" style={logoStyle} /></Link>
              <Link to="/learn"><img src="https://seeklogo.com/images/A/adobe-photoshop-cc-logo-CBD0AAA3A7-seeklogo.com.png" alt="Adobe Photoshop" className="marqueelogo h-20" style={logoStyle} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoMarquee;
