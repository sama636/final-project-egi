import React from "react";
import "./ContactMap.css"
export default function ContactMap() {
  return (
    <div className="container-fluid px-0">
      <div className="row m-0 px-0 pb-5">
        <div className="col-12">
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.850861773267!2d31.235711!3d30.044420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c5c4c5c1d1%3A0x123456789abcdef!2sCairo%20Tower!5e0!3m2!1sen!2seg!4v1694444444444!5m2!1sen!2seg"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
