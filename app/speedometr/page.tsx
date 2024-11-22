'use client';

import React from "react";

export default function Speedometr() {
  return (
    <div id="main-content" className="main-content">
        {/* Background container */}
        <div className="background"></div>

        <div className="content">
            <h1>Speedometer</h1>
            <div className="project-video">
               { /*<video id="projectVideo" autoPlay loop muted playsInline>
                    <source src="/speedometr1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <video id="projectVideo" autoPlay loop muted playsInline>
  <source src={`${process.env.NODE_ENV === 'production' ? '/4444' : ''}/speedometr1.mp4`} type="video/mp4" />
  Your browser does not support the video tag.
</video>

                <button id="toggleButton">Pause</button>
               {/* <a href="/" className="back">Back to Home</a> */}
               <a href={`${process.env.NODE_ENV === 'production' ? '/4444' : ''}/`} className="back">
  Back to Home
</a>

            </div>
        </div>

        {/* CSS Styling directly in the file */}
        <style jsx>{`
        .main-content {
          margin: 0;
          padding: 0;
          display: grid;
          place-items: center;
          height: 100vh;
          text-align: center;
          position: relative;
          overflow: hidden;
          width: 100vw
        }

        /* Background div */
        .background {
        position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
     background: linear-gradient(
              90deg,
              color-mix(in lch, canvasText, lightgray 70%) 1px,
              transparent 1px 45px
            ) 50% 50% / 45px 45px,
            linear-gradient(color-mix(in lch, canvasText, lightgray 70%) 1px, transparent 1px 45px)
              50% 50% / 45px 45px;
          mask: linear-gradient(-20deg, transparent 50%, white);
          z-index: -1; /* Keeps background behind content */
          pointer-events: none; /* Prevents it from interfering with other elements */
        }

        .content {
            padding: 20px;
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

        }

        .content h1 {
            color: white;
            font-size: 3.5rem;
            text-align: center;
        }

        .line {
            width: 100%;
            height: 2px;
            background-color: #10633D;
            margin: 20px 0;
        }

        .project-video {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 1000px;
            overflow: hidden;
            border-radius: 15px;
        }

        .project-video video {
            width: 100%;
            max-height: 60vh;
            clip-path: inset(0 round 15px);
        }

        .project-video button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1.2rem;
            color: black;
            background-color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .project-video button:hover {
            background-color: #EFB8C7;
            color: white;
        }
            .back {
             display: block;
            margin-top: 2%;
            color: white;
            text-decoration: none;
            }

        @media (max-width: 768px) {
            .content h1 {
               font-size: 2.5rem !important;
            }
            .project-video video {
                max-height: 40vh;
            }
                  .project-video button {
                 font-size: 1.2rem;
        }
        }

          @media (max-width: 480px) {
            .content h1 {
                 font-size: 2.5rem !important;
            }
            .project-video video {
                max-height: 50vh;
            }
                .back {
                margin-top: 5%;
                }
                 .project-video button {
                 font-size: 1.2rem;
        }
        }
        `}</style>
    </div>
  );
}
