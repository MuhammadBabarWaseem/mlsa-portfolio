/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Text Util App 🎉",
    description:
      "I have created a frontend app with react js named as text util and for the framework i have used bootstrap with a feature of dark mode, in which we can play with the text like, count the letter, words, change to uppercase, lowercase, copy text, delete extra spaces etc.",
    url: "https://react-text-util.netlify.app/",
  },
  {
    title: "Catstronaut Project",
    description:
      "The project, built on Apollo GraphQL, provides a comprehensive exploration of GraphQL and Apollo basics. It covers essential elements such as understanding the GraphQL and Apollo ecosystem, designing a schema, and implementing an Apollo Server connected to a REST data source. The project extends to the practical application in a React app, incorporating features like resolvers, arguments, mutations, and best practices for shaping mutation responses and handling errors. ",
    url: "https://lift-off-client-demo.netlify.app/",
  },
  {
    title: "My Resume Site",
    description: "Created a portfolio using react and hosted on vercel",
    url: "https://mbabarwaseem.vercel.app/project",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/788/416/929/anime-anime-boys-jujutsu-kaisen-hd-wallpaper-preview.jpg"
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
