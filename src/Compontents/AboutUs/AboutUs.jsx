import React from 'react'
import customsbroker from "../../assets/customsbroker.jpg"
import { FaCheck } from "react-icons/fa6";
import "./AboutUs.css"
export default function AboutUs() {
  return (
    <>
      <div className="container">
        <div className="row flex-column flex-md-row">
          <div className="col-12 col-md-6 p-5">
            <img className="image__about" src={customsbroker} />
            <h4 className="Hello text-center pt-4">
              We help people find the best places
              <br /> to live so that they can have everything they want.
            </h4>
          </div>
          <div className="col-12 col-md-6 p-5">
            <div >
              <h4 className="pb-2">
                <span>
                  <FaCheck />
                </span>
                We have the expertise to help you find your perfect home
              </h4>
              <p>
                We know the ins and outs of the real estate market, and we can
                help you find a home that fits your needs and budget. We'll work
                with you to find the perfect home for you and your family.
              </p>
            </div>
            <div>
              <h4 className="py-2">
                <span>
                  <FaCheck />
                </span>
                We offer expert advice and information on the market.
              </h4>
              <p>
                We have a wide range of knowledge and experience, and we're
                always happy to share it with you. We're dedicated to providing
                you with honest and expert advice about the market.
              </p>
            </div>
            <div>
              <h4 className="py-2">
                <span>
                  <FaCheck />
                </span>
                We'll find a property to suit your needs.
              </h4>
              <p>
                If you're looking for a property, we'll do our best to find one
                that suits your needs. We'll show you any property that
                interests you, even if it's not on our website or in your price
                range.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
