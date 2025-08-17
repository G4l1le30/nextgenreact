// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ParallaxText from "./ParallaxText";

import "./App.css"; // move your <style> into this file

export default function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo3.jpg`}
              alt="Logo"
              style={{
                width: "40px",
                height: "32px",
                borderRadius: "5px",
                marginRight: "10px",
                objectFit: "cover",
              }}
            />
            NexGen
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#our-sponsor">
                  Our Sponsor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#our-activity">
                  Our Activity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#our-office">
                  Our Office
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Us Section */}
      <section id="about-us" className="text-center">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            Kami adalah perusahaan event organizer yang berpengalaman dalam
            mengelola berbagai jenis acara mulai dari pernikahan, gathering
            perusahaan, hingga acara komunitas.
          </p>
        </div>
      </section>

      {/* Our Sponsor Section */}
      <section id="our-sponsor" className="text-center my-5">
        <div className="container">
          <h2 className="section-title">Our Sponsor</h2>
          <p className="section-subtitle">
            Kami berterima kasih kepada para sponsor dan mitra kerja sama kami.
          </p>

          <ParallaxText baseVelocity={-1.5}>
            <>
              <img src={`${process.env.PUBLIC_URL}/images/moorlife.jpg`} alt="Sponsor 1" height={60} />
              <img src={`${process.env.PUBLIC_URL}/images/topkopi.jpg`} alt="Sponsor 3" height={60} />
              <img src={`${process.env.PUBLIC_URL}/images/wingsmiesedap.png`} alt="Sponsor 2" height={60} />
              <img src={`${process.env.PUBLIC_URL}/images/lemonilo.png`} alt="Sponsor 4" height={60} />
              <img src={`${process.env.PUBLIC_URL}/images/kalbefarma.png`} alt="Sponsor 5" height={60} />
              <img src={`${process.env.PUBLIC_URL}/images/forisa.png`} alt="Sponsor 6" height={60} />
              <img src={`${process.env.PUBLIC_URL}/images/freshcare.png`} alt="Sponsor 7" height={60} />
              <img src={`${process.env.PUBLIC_URL}/images/rabbani.png`} alt="Sponsor 8" height={60} />
            </>
          </ParallaxText>
        </div>
      </section>

      {/* Our Activity Section */}
      <section id="our-activity" className="bg-village">
        <div className="container">
          <h2 className="section-title">Our Activity</h2>
          <p className="section-subtitle">
            Di sini, Anda dapat melihat berbagai kegiatan yang dilaksanakan oleh
            NexGen
          </p>

          <div className="row g-4 activity-grid">
            {/* Example card */}
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-md-6">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/kegiatan1.jpg`}
                    className="img-fluid rounded shadow"
                    alt="kegiatan bersama bpbd"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/kegiatan2.jpg`}
                    className="img-fluid rounded shadow"
                    alt="kegiatan bersama bpbd 2"
                  />
                </div>
                <div className="col-12">
                  <div className="activity-card">
                    <div className="card-body">
                      <h5 className="activity-title">Kegiatan 1</h5>
                      <p className="activity-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec malesuada pretium dui quis fermentum. Nulla
                        pharetra quis eros placerat pretium. Cras iaculis, velit
                        id sagittis commodo, ex libero imperdiet quam, et auctor
                        dolor ex sit amet urna. Nullam feugiat est a porta
                        suscipit. In sit amet dictum nibh. Sed a nunc nec arcu
                        fermentum iaculis sed sed est. Phasellus ac ante
                        venenatis, maximus est eu, efficitur elit. Quisque
                        semper rhoncus ipsum. Sed id lacus mattis diam maximus
                        accumsan vel non quam.
                      </p>
                      <div className="activity-meta">
                        <span className="activity-date">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec malesuada pretium dui quis fermentum.
                          Nulla pharetra quis eros placerat pretium. Cras
                          iaculis, velit id sagittis commodo, ex libero
                          imperdiet quam, et auctor dolor ex sit amet urna.
                          Nullam feugiat est a porta suscipit. In sit amet
                          dictum nibh. Sed a nunc nec arcu fermentum iaculis sed
                          sed est. Phasellus ac ante venenatis, maximus est eu,
                          efficitur elit. Quisque semper rhoncus ipsum. Sed id
                          lacus mattis diam maximus accumsan vel non quam.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Another card */}
            <div className="col-lg-6">
              <div className="activity-card">
                <img
                  src={`${process.env.PUBLIC_URL}/images/kelinci1.jpg`}
                  className="card-img-top"
                  alt="Main sama kelinci"
                />
                <div className="card-body">
                  <h5 className="activity-title">Main sama kelinci</h5>
                  <p className="activity-description">
                    NexGen Dalam Giat Mitigasi Satwa & Feeding
                  </p>
                  <div className="activity-meta">
                    <span className="activity-date">
                      NexGen Dalam Giat Mitigasi Satwa & Feeding
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Office Section */}
      <section id="our-office" className="text-center">
        <div className="container">
          <h2 className="section-title">Our Office</h2>
          <p className="section-subtitle">
            Detail lokasi dan info kantor kami untuk kemudahan akses dan
            konsultasi.
          </p>
          <h2>this is a map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d168.62077383208089!2d106.95457821238986!3d-6.196794576028409!2m3!1f219.1766009385501!2f0!3f0!3m2!1i1024!2i768!4f35!5e1!3m2!1sen!2sid!4v1754998604101!5m2!1sen!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container text-center">
          <p className="mb-2">
            Contact us: info@eo-company.com | +62 812 3456 7890
          </p>
          <p className="mb-0">© 2025 EO Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
{/*export default App*/ }
