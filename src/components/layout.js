import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"
import useMainMenu from "../hooks/use-mainmenu";
import Logo from "../../content/logga-2.svg";
import Instagram from "../../content/instagram.svg";
import Tele from "../../content/tele.svg";
import Mail from "../../content/mail.svg";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Title from "./Title";

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
            aboutMe {
              aboutMe {
                title
                text
                image {
                  gatsbyImage(aspectRatio: 1, width: 1200)
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
            services {
              image {
                gatsbyImage(aspectRatio: 1, width: 1200)
              }
              label
              serviceLabel
              serviceList
              serviceList2
              serviceList3
              serviceList4
              serviceList5
              serviceList6
              title
            }
            instagram {
              instagram
            }
          }
        }
    }
  }
  `)
  // TODO: Banta detta 
  const menu = useMainMenu();
  const pageHero = edges[0].node.hero.pageHero;
  const contact = edges[0].node.contact_me.contact;
  const email = "mailto:"+contact.email;
  const tele = "tel:"+contact.telephone;
  const aboutMe = edges[0].node.aboutMe.aboutMe;
  const instagram = edges[0].node.instagram.instagram;
  const services = edges[0].node.services;

  return (
    
    <div className="global-wrapper">
      <div className="l-site-footer">
        <header className="l-site-footer__inner">
          <div className="c-logo"><Logo/></div>
          <div className="c-menu c-menu--desktop">
            { (menu) && (
              <ul className="c-menu__item">
              {
                menu.map(item => (<li><Link to={item.url}>{item.label}</Link></li> ))
              }
              </ul>
            )}
          </div>
          { (instagram) && (
            <div className="c-instagram"><Link to={instagram}><Instagram/></Link></div>
          )}
        </header>
      </div>

      
      <div className="l-section">
        <div className="l-page-hero">
          <div className="c-page-hero">
            <div className="c-page-hero__col-12">
              <Heading children={pageHero.heading} classname="c-heading" />
            </div>

            <div className="c-page-hero__col--intro">
              { (pageHero.intro) && (
                <div className="c-page-hero__intro c-intro">
                  <Paragraph children={pageHero.intro}/>
                </div>
              )}

              { (pageHero.button.url) && (
                <div className="c-page-hero__button">
                  <Link to={parse(pageHero.button.url)} className="c-button"><span className="c-button__inner" dangerouslySetInnerHTML={{__html: pageHero.button.title }}/></Link> 
                </div>
              ) }
            </div>

            <div className="c-page-hero__col-button">

            </div>
            
            <div className="c-page-hero__col-12">
              <div className="c-page-hero__media">
                <div className="c-page-hero__mobile-scroll">
                  <div className="c-page-hero__media-inner">
                    { (pageHero.image.gatsbyImage) && (  
                      <GatsbyImage image={pageHero.image.gatsbyImage} alt="First painting"></GatsbyImage>
                    )}
                    { (pageHero.imagetwo.gatsbyImage) && (
                      <GatsbyImage image={pageHero.imagetwo.gatsbyImage} alt="First painting"></GatsbyImage>
                    )}
                    { (pageHero.imagethree.gatsbyImage) && (
                      <GatsbyImage image={pageHero.imagethree.gatsbyImage} alt="First painting"></GatsbyImage>
                    )}
                    { (pageHero.imagefour.gatsbyImage) && (
                      <GatsbyImage image={pageHero.imagefour.gatsbyImage} alt="First painting"></GatsbyImage>
                    )}
                    { (pageHero.imagefive.gatsbyImage) && (
                      <GatsbyImage image={pageHero.imagefive.gatsbyImage} alt="First painting"></GatsbyImage>
                    )}
                    { (pageHero.imagesix.gatsbyImage) && (
                      <GatsbyImage image={pageHero.imagesix.gatsbyImage} alt="First painting"></GatsbyImage>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div> 

        </div>
      </div>

      <div className="l-section">
			  <div id="about" className="l-about-me">
					<div className="c-about-me">
						<div className="c-about-me__col-12">
              <div className="c-about-content">
                <div className="c-about-title">
                  <Title classname="c-heading" children={aboutMe.title}/>
                </div>
              </div>
						</div>

						<div className="c-about-me__col-6">
              <div className="c-about-me__image">
                { (aboutMe.image.gatsbyImage) && (
							    <GatsbyImage image={aboutMe.image.gatsbyImage} alt="First painting"></GatsbyImage>
                )}
              </div>
						</div>
            <div className="c-about-me__col-5">
              <div className="c-about-me__boarder">
                <div className="c-boarder"></div>
              </div>
              <div className="c-about-text">
                <div className="c-text">
                  <Paragraph children={aboutMe.text}/>
                </div>
              </div>
            </div>
					</div>
				</div>
      </div>

      <div className="l-section">
        <div id="project" className="l-project">
          { (services.title) && (
            <h2 className="c-heading c-heading--center" dangerouslySetInnerHTML={{__html: services.title }}/>
          )}
          <div className="c-project c-project--border-bottom">

            <div className="c-project__work">
              <Title classname="c-title--project c-hide-mobile" children={services.label} />
            </div>

            <div className="c-project__image">
              <div className="c-project__image-container">
                { (services.image.gatsbyImage) && (
                  <GatsbyImage image={services.image.gatsbyImage} alt="Services Image"></GatsbyImage>
                )}
              </div>
            </div>

            <div className="c-info__label">
              { (services.serviceLabel) && (
                <span dangerouslySetInnerHTML={{__html: services.serviceLabel }}/>
              )}
            </div>

            <div className="c-info__item c-list">
                <ul className="c-work__item c-list">
                  { (services.serviceList) && (
                    <li dangerouslySetInnerHTML={{__html: services.serviceList }}/>
                  )}

                  { (services.serviceList2) && (
                    <li dangerouslySetInnerHTML={{__html: services.serviceList2 }}/>
                  )}

                  { (services.serviceList3) && (
                    <li dangerouslySetInnerHTML={{__html: services.serviceList3 }}/>
                  )}

                  { (services.serviceList4) && (
                    <li dangerouslySetInnerHTML={{__html: services.serviceList4 }}/>
                  )}

                  { (services.serviceList5) && (
                    <li dangerouslySetInnerHTML={{__html: services.serviceList5 }}/>
                  )}

                  { (services.serviceList6) && (
                    <li dangerouslySetInnerHTML={{__html: services.serviceList6 }}/>
                  )}
                </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="l-section">
			  <div id="kontakt" className="l-contact">
          <div className="c-contact">
            <div className="c-contact__inner">
              <div className="c-contact__container">
              { (contact.title) && (
                <div className="c-contact__title">
                  <h2 className="c-title c-title--white" dangerouslySetInnerHTML={{__html: contact.title }}/>
                </div>
              )}
                <div className="c-contact__text">
                  { (contact.text) && (
                    <div className="c-text c-text--white">
                        <p>{contact.text}</p>
                    </div>
                  )}
                </div>
                
                <div className="c-contact-at">
                  { (contact.email) && (
                    <div className="c-contact-at__item"><Link className="c-contact-at__item-link" to={email}><span><Mail/></span>{contact.email}</Link></div>
                  )}
                  { (contact.telephone) && (
                    <div className="c-contact-at__item"><Link className="c-contact-at__item-link" to={tele}><span><Tele/></span>{contact.telephone}</Link></div>
                  )}
                  { (contact.instagram) && (
                    <div className="c-contact-at__item"><Link className="c-contact-at__item-link" to={contact.instagram}><span><Instagram/></span>Instagram</Link></div>
                  )}
                </div>
              </div>
            </div>
          </div>        
				</div>
      </div> 
  </div>
  
  )
}

export default Layout
