import { useEffect, useState } from "react";
import SidebarDashboard from "../../Compontents/SidebarDashboard/SidebarDashboard";
import DashboardApi from "../../API/Dashboard/DashboardApi";
import "./Dashboard.css";
// import { BeatLoader } from "react-spinners";

export default function Dashboard() {
    
    // useEffect(() => {
    //   DashboardApi(setData);
    // }, []);


//  const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     Buy(setLoading, setError, setProperties);
//   }, []);

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 1000,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };
//  if (loading)
//     return (
//       <p className="loader text-center pt-2">
//         <BeatLoader />
//       </p>
//     );
//   if (error) return <p className="text-center text-danger">{error}</p>;
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <SidebarDashboard />
        </div>
        <div className="col-9 pt-4">
          <div className="dashboard-cards">
            <div className="property-card">
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                  alt="house"
                />
              </div>

              <div className="card-body">
                <h6 className="card-title">House Pedeson</h6>
                <p className="card-location">Blora, Central Java</p>

                <div className="card-footer">
                  <span className="card-price">$4,220</span>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                  alt="house"
                />
              </div>

              <div className="card-body">
                <h6 className="card-title">House Pedeson</h6>
                <p className="card-location">Blora, Central Java</p>

                <div className="card-footer">
                  <span className="card-price">$4,220</span>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                  alt="house"
                />
              </div>

              <div className="card-body">
                <h6 className="card-title">House Pedeson</h6>
                <p className="card-location"> Blora, Central Java</p>

                <div className="card-footer">
                  <span className="card-price">$4,220</span>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                  alt="house"
                />
              </div>

              <div className="card-body">
                <h6 className="card-title">House Pedeson</h6>
                <p className="card-location"> Blora, Central Java</p>

                <div className="card-footer">
                  <span className="card-price">$4,220</span>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                  alt="house"
                />
              </div>

              <div className="card-body">
                <h6 className="card-title">House Pedeson</h6>
                <p className="card-location"> Blora, Central Java</p>

                <div className="card-footer">
                  <span className="card-price">$4,220</span>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                  alt="house"
                />
              </div>

              <div className="card-body">
                <h6 className="card-title">House Pedeson</h6>
                <p className="card-location"> Blora, Central Java</p>

                <div className="card-footer">
                  <span className="card-price">$4,220</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
