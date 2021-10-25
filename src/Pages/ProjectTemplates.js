import React from "react";
import "./ProjectTemplate.css";

const ProjectTemplates = () => {
  return (
    <div className="container projects-container">
      <div className="container-center projects-center">
        <h1>IN5: The Golden Temple Experium</h1>
        <div className="projects-detail-container">
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/pw6hzF_F4XY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="project-content">
            <p>
              The Rashtriya Swachhta Kendra is a magnificent interactive
              experience centre on the Swachh Bharat Mission, named the
              Rashtriya Swachhata Kendra which was inaugurated on 8th August
              2020, by the Prime Minister Shri Narendra Modi. RSK includes a mix
              of digital and outdoor installations to showcase various aspects
              of the Swachh Bharat Mission. The RSK has been established at the
              Gandhi Smriti and Darshan Samiti at Rajghat in New Delhi - a
              dynamic experience centre to actively engage with citizens to
              impart information, awareness, and education around Swachhata in
              an interactive format with a balanced mix of digital and outdoor
              installations.
            </p>
            <p>
              We designed & produced the experiences like a unique 360°
              audiovisual immersive holographic show with revolving audience
              seating, which narrated India's Swachhata Story, Immersive LED
              zones, Interactive Dome projection, Immersive 270-degree
              projections, Holographic screen installations, a series of
              captivating sensor-based interactive projections, interactive
              games through touchless sensor-based interactions, mobile apps, a
              website and much more.
            </p>
            <h4>Client: Project Client</h4>
            <h4>Location: Project Location</h4>
            <h4>Tags: Project Tags</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplates;
