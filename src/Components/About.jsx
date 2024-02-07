/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a Software Engineer and Full Stack JavaScript Developer, I'm passionate about creating scalable and robust web applications. My skill set includes expertise in various stacks such as JamStack, MERN Stack, and PERN Stack. I thrive in utilizing technologies like ReactJS, NextJS, NodeJS, ExpressJS, React Native, and NestJS. Additionally, I'm well-versed in working with SQL and NoSQL databases, along with Firebase / Firestore.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "React Native",
  "Nest.js",
  "MongoDB",
  "Firebase",
  "Firestore",
  "PostgreSQL",
  "GraphQL",
  "RESTful APIs",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = "Building Tech to Elevate people";

const About = () => {
  return (
    <section className="padding" id="about">
      <img
        className="background"
        src="https://c4.wallpaperflare.com/wallpaper/645/885/158/mikasa-ackerman-scarf-shingeki-no-kyojin-anime-girls-wallpaper-preview.jpg"
        alt={imageAltText}
      />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
