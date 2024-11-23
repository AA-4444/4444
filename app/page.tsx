// app/page.tsx
'use client'; // This tells Next.js that this component should be rendered on the client side

import React, { useState, useEffect } from "react";
import "./globals.css"; // Use relative path
import Link from "next/link";
import Head from "next/head";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading screen for 3 seconds (you can change the duration as needed)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000ms = 3 seconds
}, []);

useEffect(() => {
  setIsClient(true)
}, [])


  return (
    <>
    <Head>
    <link rel="icon" href='/favicon.ico' />
</Head>
    <div className="App">
      {/* Loader Screen */}
      {isLoading && (
        <div className="loader-screen">
          <div className="loader"></div>
        </div>
      )}

      {/* Content Section - Visible after loading */}
      {!isLoading && (
        <section className="Welcome-section">
          <div className="content">
            <h1 className="name">Welcome</h1>
            <p className="title">This is my developer coze corner</p>

            {/* Scroll Indicator */}
            <div className="mouse_scroll">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <div>
                <span className="m_scroll_arrows unu"></span>
                <span className="m_scroll_arrows doi"></span>
                <span className="m_scroll_arrows trei"></span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="social-icon-container">
              <div className="icon-circle">
                <a
                  href="https://www.linkedin.com/in/alex-zarytskyi-7b2248193/"
                  className="social-icon linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="social-icon-container">
              <div className="icon-circle">
                <a
                  href="https://github.com/AA-4444"
                  className="social-icon github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="social-icon-container">
              <div className="icon-circle">
                <a
                  href="https://x.com/Alex34909682"
                  className="social-icon twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="social-icon-container">
              <div className="icon-circle">
              <a
  href="#"
  onClick={() => {
    window.location.href = "mailto:" + atob("YWE0NDQ0Y29udGFjdEBnbWFpbC5jb20=");
  }}
  className="social-icon mail"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fas fa-envelope"></i>
</a>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* About me section */}
      <section className="aboutme">
        <div className="header-2">
          <h1>About me</h1>
          <p>
            I'm a software developer from Kyiv, Ukraine currently residing in Wroclaw, Poland. I specialize in SwiftUI and Swift, crafting elegant iOS applications. I'm also a web developer, blending functionality with aesthetic design. You can contact me and I can serve you in English, Polish, Ukrainian and implement your ideas.
          </p>
        </div>
      </section>

      {/* Animated Programming Languages Line */}
      <div className="ProgLine">
        <div className="header">
          <h2>Tech Stack</h2>
        </div>

        <div className="scroll-container">
          <div className="carousel-primary">
            <i className="fab fa-swift"></i>
            <i className="fab fa-js-square"></i>
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-php"></i>
            <i className="fab fa-node-js"></i>
            <i className="fab fa-react"></i>
            <i className="fas fa-database"></i>
            <i className="fas fa-fire"></i>
            <i className="fab fa-figma"></i>
            <i className="fab fa-github"></i>

          </div>
          <div className="carousel-primary carousel-secondary">
            <i className="fab fa-swift"></i>
            <i className="fab fa-js-square"></i>
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-php"></i>
            <i className="fab fa-node-js"></i>
            <i className="fab fa-react"></i>
            <i className="fas fa-database"></i>
            <i className="fas fa-fire"></i>
            <i className="fab fa-figma"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>
      </div>

      {/* Career Timeline Section */}
      <div className="header">
        <h2>Career Timeline</h2>
      </div>
      <ul className="timeline">
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Student</span>
              <span className="time-wrapper"><span className="time">2022 - present</span></span>
            </div>
            <div className="desc">Student of Computer Science in University of Opole</div>
          </div>
        </li>

        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">Freelancer</span>
              <span className="time-wrapper"><span className="time">2023 - 2024</span></span>
            </div>
            <div className="desc">Freelancer as web developer</div>
          </div>
        </li>

        {/* Project */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">AVA100</span>
              <span className="time-wrapper"><span className="time">2024 - 2024</span></span>
            </div>
            <div className="desc">Developed a website for the Ukranian building company <a href="http://ava100.com.ua" className="underline-link">AVA100</a></div>
          </div>
        </li>


        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">IOS Speedtracker</span>
              <span className="time-wrapper"><span className="time">2023 - 2024</span></span>
            </div>
            <div className="desc">
        Creating IOS <Link href="/speedometr" className="underline-link">Speedtracker</Link> that helps users track their speed and route path (with an option for app customization).
      </div>


          </div>
        </li>


        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">DemaxDigital</span>
              <span className="time-wrapper"><span className="time">2023 - 2024</span></span>
            </div>
            <div className="desc">Working as junior IOS Developer</div>
          </div>
        </li>

        {/* More items here */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">TapConGroup</span>
              <span className="time-wrapper"><span className="time">2024 - 2024</span></span>
            </div>
            <div className="desc">Co-founder of a startup of a company that is engaged in tech development</div>
          </div>
        </li>

        <li>
		<div className="direction-r">
			<div className="flag-wrapper">
				<span className="flag">NeoBrutalism</span>
				<span className="time-wrapper"><span className="time">2024 - 2024</span></span>
			</div>
			<div className="desc">Creating Web Site   <a href="https://aa-4444.github.io/Neo-Brutalism/" className="underline-link">Neo-Brutalism</a> to tell about Neo-Brutalism style in web design</div>
		</div>
	</li>


  <li>
		<div className="direction-l">
			<div className="flag-wrapper">
				<span className="flag">Demo Crypto App</span>
				<span className="time-wrapper"><span className="time">2024 - 2024</span></span>
			</div>
			<div className="desc">Creating small   <Link href="/crypto" className="underline-link">Crypto App</Link> on SwiftUI ,using API for showing real time value of different crypto</div>
		</div>
	</li>

  <li>
		<div className="direction-r">
			<div className="flag-wrapper">
				<span className="flag">IOS-Developer</span>
				<span className="time-wrapper"><span className="time">2023 - 2024</span></span>
			</div>
			<div className="desc">Working as IOS-Develper in startup,developing App using SwiftUI</div>
		</div>
	</li>

  <li>
		<div className="direction-l">
			<div className="flag-wrapper">
				<span className="flag">Plant App</span>
				<span className="time-wrapper"><span className="time">2022 - 2022</span></span>
			</div>
			<div className="desc">Creating small <Link href="/plant-app" className="underline-link">PLant App</Link> using SwiftUI ,its small app creating as demo e-commerce app where user can choose and by plants for their home</div>
		</div>
	</li>

  <li>
		<div className="direction-r">
			<div className="flag-wrapper">
				<span className="flag">KPI</span>
				<span className="time-wrapper"><span className="time">2021 - 2022</span></span>
			</div>
			<div className="desc">Student of the faculty of system analysis</div>
		</div>
	</li>
</ul>

        {/* Footer */}
        <section className="foot">
          <p>All rights reserved © 2024</p>
        </section>
      
    </div>
    </>
  );
}
