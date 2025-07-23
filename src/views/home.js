import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Rectangular Sure Footed Curlew</title>
        <meta property="og:title" content="Rectangular Sure Footed Curlew" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">/home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">/products</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">/profile</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">/wishlist</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Products</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Profile</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Wishlist</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Login / Register</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Logout</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Welcome to our affiliate e-commerce site
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Explore a wide range of products from various markets
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Manage your profile and preferences
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Save your favorite items for later
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Sign Up Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Discover a world of products from various markets through
              affiliate APIs. Shop your favorite items and enjoy a seamless
              experience.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Welcome to Your Affiliate E-Commerce Site
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">User Profile</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Wishlist and Checklists</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Order Management</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              User login and profile creation
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">Wishlist and Checklists</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">Dashboard for Orders</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get Started Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Create a user-friendly platform with all the features you need to
              succeed in affiliate marketing.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Start Building Your Affiliate E-Commerce Site Today!
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">User-Friendly Interface</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Multi-Language Support</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Personalized Dashboards</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Enjoy a seamless browsing experience with our intuitive interface.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Easily switch between languages to cater to a global audience.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Customize your dashboard to view orders, wishlist items, and more
              at a glance.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$9.99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$19.99/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$29.99/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Subscribe Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Subscribe Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Subscribe Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">User Login</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">Wishlist</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Checklists</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">Multi-language Support</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Deal Notifications</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">Sleek Design</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">Affiliate APIs Integration</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">
              Product Showcase from Various Markets
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">
              Redirect to Source Site for Purchases
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Create an Account</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Browse Products</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">Add to Wishlist</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">Place Orders</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              Sign up for a user account to access all features and save your
              preferences.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Explore a wide range of products from various affiliate markets
              using our search and filters.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Save your favorite items to your wishlist for easy access and
              future reference.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              Once you find the products you love, click &apos;Buy&apos; to be
              redirected to the source site for purchase.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              I love the variety of products available on this platform.
              It&apos;s so convenient to shop from multiple markets in one
              place.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              The wishlist feature is a game-changer for me. I can save products
              I love and come back to them later.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              The user dashboard is so easy to navigate. I can track my orders
              and manage my profile effortlessly.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              I receive notifications for the best deals, which helps me save
              money while shopping online.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Read what our users have to say about their experience with our
              affiliate e-commerce site.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Sarah Williams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">CEO, Company ABC</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">Marketing Manager, Company XYZ</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">Freelancer</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">Fashion Blogger</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Cluj - Napoca</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">FAQ</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Terms and Conditions</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Privacy Policy</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
