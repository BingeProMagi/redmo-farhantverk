import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useMainMenu from "../hooks/use-mainmenu";

const Layout = ({ isHomePage, children }) => {
  const {
    allWpPage: { edges },
  } = useStaticQuery(graphql`
    query Pages {
      allWpPage(filter: { slug: { eq: "startsida" } } ) {
        edges {
          node {
            id
            title
            hero {
              pageHero {
                heading
                intro
                image {
                  sourceUrl
                  gatsbyImage(width: 1200)
                }
                imagebottom {
                  gatsbyImage(width: 1200)
                }
              }
            }
          }
        }
    }
  }
  `)
  const menu = useMainMenu();
  const image = getImage(edges[0].node.hero.pageHero.image.gatsbyImage);
  const imageBottom = getImage(edges[0].node.hero.pageHero.imagebottom.gatsbyImage);
  const heading = edges[0].node.hero.pageHero.heading;
  const intro = edges[0].node.hero.pageHero.intro;

  return (
    <div class="global-wrapper">
      <div class="l-site-footer">
        <header class="l-site-footer__inner">
          <div class="c-menu">
            <ul class="c-menu__item">
            {
              menu.map(item => (
                <li><Link to={item.url}>{item.label}</Link></li> ))
              }
            </ul>
          </div>
        </header>
      </div>

      
      <div class="l-section">
        <div class="l-page-hero">
          <div class="c-page-hero">
            <div class="c-page-hero__col-12">
              <h1 class="c-heading">{parse(heading)}</h1>
            </div>

            <div class="c-page-hero__col-4">
              <div class="c-page-hero__intro c-intro">
                <p>{parse(intro)}</p>
              </div>
            </div>

            <div class="c-page-hero__col-4">
              <div class="c-page-hero__intro">
                <p>{parse(intro)}</p>
              </div>
            </div>

            <div class="c-page-hero__col-4">
              <div class="c-page-hero__button">
                
              </div>
            </div>
            
            <div class="c-page-hero__col-12">
              <div class="c-page-hero__media">
                <GatsbyImage image={image} alt="First painting"></GatsbyImage>

                <GatsbyImage image={imageBottom} alt="First painting"></GatsbyImage>

                <GatsbyImage image={image} alt="First painting"></GatsbyImage>

                <GatsbyImage image={imageBottom} alt="First painting"></GatsbyImage>

                <GatsbyImage image={image} alt="First painting"></GatsbyImage>
                
                <GatsbyImage image={imageBottom} alt="First painting"></GatsbyImage>
              </div>

              <div class="c-page-hero__media">
              </div>
            </div>
          </div> 

        </div>

      </div>    
      <footer>
      </footer>
  </div>
  
  )
}

export default Layout
