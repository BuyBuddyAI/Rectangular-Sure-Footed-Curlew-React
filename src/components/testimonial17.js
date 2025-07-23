import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text33">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text31">
                  Read what our users have to say about their experience with
                  our affiliate e-commerce site.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text35">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            CEO, Company ABC
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text36">
                        I love the variety of products available on this
                        platform. It&apos;s so convenient to shop from multiple
                        markets in one place.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            Marketing Manager, Company XYZ
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text28">
                        The wishlist feature is a game-changer for me. I can
                        save products I love and come back to them later.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            David Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            Freelancer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text25">
                        The user dashboard is so easy to navigate. I can track
                        my orders and manage my profile effortlessly.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            Sarah Williams
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Fashion Blogger
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text37">
                        I receive notifications for the best deals, which helps
                        me save money while shopping online.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Name: undefined,
  review3: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1659117656969-b19d9a95a69c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzI4NDY3N3w&ixlib=rb-4.1.0&q=80&w=1080',
  author1Position: undefined,
  author3Name: undefined,
  review2: undefined,
  author3Alt: 'Image of David Johnson',
  author3Position: undefined,
  author1Alt: 'Image of John Doe',
  author2Position: undefined,
  content1: undefined,
  author4Alt: 'Image of Sarah Williams',
  author4Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzI4NDY3N3w&ixlib=rb-4.1.0&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  heading1: undefined,
  author2Name: undefined,
  author1Name: undefined,
  review1: undefined,
  review4: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzI4NDY3OHw&ixlib=rb-4.1.0&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1556942057-94aaf3ae5d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzI4NDY3N3w&ixlib=rb-4.1.0&q=80&w=1080',
}

Testimonial17.propTypes = {
  author4Name: PropTypes.element,
  review3: PropTypes.element,
  author2Src: PropTypes.string,
  author1Position: PropTypes.element,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  author3Alt: PropTypes.string,
  author3Position: PropTypes.element,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.element,
  content1: PropTypes.element,
  author4Alt: PropTypes.string,
  author4Position: PropTypes.element,
  author4Src: PropTypes.string,
  author2Alt: PropTypes.string,
  heading1: PropTypes.element,
  author2Name: PropTypes.element,
  author1Name: PropTypes.element,
  review1: PropTypes.element,
  review4: PropTypes.element,
  author3Src: PropTypes.string,
  author1Src: PropTypes.string,
}

export default Testimonial17
