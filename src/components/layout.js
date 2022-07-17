import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useMainMenu from "../hooks/use-mainmenu";
import Hamburger from "../../content/hamburger.svg";

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
                button {
                  title
                  url
                }
                image {
                  sourceUrl
                  gatsbyImage(aspectRatio: 0.7, width: 1200)
                }
                imagetwo {
                  gatsbyImage(aspectRatio: 0.7, width: 1200)
                }
                imagethree {
                  gatsbyImage(aspectRatio: 0.7, width: 1200)
                }
                imagefour {
                  gatsbyImage(aspectRatio: 0.7, width: 1200)
                }
                imagefive {
                  gatsbyImage(aspectRatio: 0.7, width: 1200)
                }
                imagesix {
                  gatsbyImage(aspectRatio: 0.7, width: 1200)
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
  const imageTwo = getImage(edges[0].node.hero.pageHero.imagetwo.gatsbyImage);
  const imageThree = getImage(edges[0].node.hero.pageHero.imagethree.gatsbyImage);
  const imageFour = getImage(edges[0].node.hero.pageHero.imagefour.gatsbyImage);
  const imageFive = getImage(edges[0].node.hero.pageHero.imagefive.gatsbyImage);
  const imageSix = getImage(edges[0].node.hero.pageHero.imagesix.gatsbyImage);
  const heading = edges[0].node.hero.pageHero.heading;
  const intro = edges[0].node.hero.pageHero.intro;
  const buttonUrl = edges[0].node.hero.pageHero.button.url;
  const buttonTitle = edges[0].node.hero.pageHero.button.title;

  return (
    <div class="global-wrapper">
      <div class="l-site-footer">
        <header class="l-site-footer__inner">
          <div class="c-menu c-menu--desktop">
            <ul class="c-menu__item">
            {
              menu.map(item => (
                <li><Link to={item.url}>{item.label}</Link></li> ))
              }
            </ul>
          </div>
          <div class="c-hamburger"><Hamburger/></div>
        </header>
      </div>

      
      <div class="l-section">
        <div class="l-page-hero">
          <div class="c-page-hero">
            <div class="c-page-hero__col-12">
              <h1 class="c-heading">{parse(heading)}</h1>
            </div>

            <div class="c-page-hero__col--intro">
              <div class="c-page-hero__intro c-intro">
                <p>{parse(intro)}</p>
              </div>

              <div class="c-page-hero__button">
                  <Link to={parse(buttonUrl)} className="c-button"><span class="c-button__inner">{parse(buttonTitle)}</span></Link> 
              </div>
            </div>

            <div class="c-page-hero__col-button">
              
            </div>
            
            <div class="c-page-hero__col-12">
              <div class="c-page-hero__media">
                <div class="c-page-hero__mobile-scroll">
                  <div class="c-page-hero__media-inner">
                    <GatsbyImage image={image} alt="First painting"></GatsbyImage>

                    <GatsbyImage image={imageTwo} alt="First painting"></GatsbyImage>

                    <GatsbyImage image={imageThree} alt="First painting"></GatsbyImage>

                    <GatsbyImage image={imageFour} alt="First painting"></GatsbyImage>

                    <GatsbyImage image={imageFive} alt="First painting"></GatsbyImage>

                    <GatsbyImage image={imageSix} alt="First painting"></GatsbyImage>
                  </div>
                </div>
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
