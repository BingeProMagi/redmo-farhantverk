import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useMainMenu from "../hooks/use-mainmenu";
import Logo from "../../content/logga-2.svg";
import Instagram from "../../content/instagram.svg";
import Tele from "../../content/tele.svg";
import Mail from "../../content/mail.svg";
import Seo from "./seo";

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
            contact_me {
              contact {
                email
                instagram
                telephone
                text
                title
              }
            }
            project_list {
              project {
                aboutLabel
                aboutText
                fieldGroupName
                title
                workLabel
                gallery {
                  gatsbyImage(aspectRatio: 1, width: 1200)
                }
                workList {
                  listItem
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
  const contact = edges[0].node.contact_me.contact;
  const email = "mailto:"+contact.email;
  const tele = "tel:"+contact.telephone;
  const projects = edges[0].node.project_list.project;
  console.log(imageFive);
  Seo();
  return (
    <div class="global-wrapper">
      <div class="l-site-footer">
        <header class="l-site-footer__inner">
          <div class="c-logo"><Logo/></div>
          <div class="c-menu c-menu--desktop">
            <ul class="c-menu__item">
            {
              menu.map(item => (<li><Link to={item.url}>{item.label}</Link></li> ))
            }
            </ul>
          </div>
          <div class="c-instagram"><Link to="instagram"><Instagram/></Link></div>
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

      <div class="l-section">
			  <div id="about" class="l-about-me">
					<div class="c-about-me">
						<div class="c-about-me__col-4">
              <div class="c-about-content">
                <div class="c-about-title">
                  <h2 class="c-heading c-heading--center">Om mig</h2>
                </div>
                
                <div class="c-about-text">
                  <div class="c-text">
                    <p>{parse(intro)}</p>
                  </div>
                </div>
              </div>
						</div>

						<div class="c-about-me__col-10">
							<GatsbyImage image={imageThree} alt="First painting"></GatsbyImage>
						</div>
					</div>
				</div>
      </div>

      <div class="l-section">
        <div id="project" class="l-project">
          <h2 class="c-heading c-heading--center">Projekt</h2>
          {
              projects.map((project, index) => (
            
            
            <div className="c-project c-project--border-bottom">


            <h1>{index ? 'c-project--border-bottom' : ''}</h1>
            <div class="c-project__title">
              <h2 class="c-title--project c-hide-desk">{project.title}</h2>
            </div>

            <div class="c-project__work">
              <h2 class="c-title--project c-hide-mobile">{project.title}</h2>
              <div class="c-work__label">
                <span>{project.workLabel}</span>
              </div>
              {
                project.workList.map(work => (
                  
                  <div class="c-work__item c-list">
                    <p>{work.listItem}</p>
                  </div>
                ))              
              }
            </div>

            <div class="c-project__image">
              <div class="c-project__image-container">
                {/* aspect ratio 0.95 */ console.log(project.gallery[0].gatsbyImage)}

                <GatsbyImage image={project.gallery[0].gatsbyImage} alt="First painting"></GatsbyImage>
              </div>
            </div>

            <div class="c-info__label">
              <span>{project.aboutLabel}</span>
            </div>

            <div class="c-info__item c-list">
              <p>{project.aboutText}</p>
            </div>



          </div>
          ))}
        </div>
      </div>

      <div class="l-section">
			  <div id="contact" class="l-contact">
          <div class="c-contact">
            <div class="c-contact__inner">
              <div class="c-contact__container">  
                <div class="c-contact__title">
                  { <h2 class="c-title c-title--white">{contact.title}</h2>}
                </div>

                <div class="c-contact__text">
                  <div class="c-text c-text--white">
                    <p>{contact.text}</p>
                  </div>
                </div>
                
                <div class="c-contact-at">
                  <div class="c-contact-at__item"><Link class="c-contact-at__item-link" to={email}><span><Mail/></span>{contact.email}</Link></div>

                  <div class="c-contact-at__item"><Link class="c-contact-at__item-link" to={tele}><span><Tele/></span>{contact.telephone}</Link></div>

                  <div class="c-contact-at__item"><Link class="c-contact-at__item-link" to={contact.instagram}><span><Instagram/></span>Instagram</Link></div>
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
