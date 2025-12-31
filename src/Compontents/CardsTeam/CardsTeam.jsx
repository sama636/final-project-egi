import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./CardsTeam.css";
import TeamAPI from "../../API/Profile/Team";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function CardsTeam() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    TeamAPI(setLoading, setError, setTeamMembers, navigate);
  }, [navigate]);

  if (loading)
    return (
      <p className="text-center pt-2">
        <BeatLoader />
      </p>
    );
  if (error) return <p className="text-center text-danger">{error}</p>;
  console.log(teamMembers, "teamMembers");
  return (
    <div className="container my-5">
      <div className="row">
        {teamMembers && teamMembers.length > 0 ? (
          teamMembers.map((member, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm team-card text-center p-3">
                <img
                  src={member?.image?.url || "https://via.placeholder.com/200"}
                  alt={member.name}
                  className="card-img-top rounded-circle mx-auto"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">{member.name}</h5>
                  <p className="text-muted">Realtor #{member.realtorId}</p>
                  <p>
                    <strong>Email:</strong> {member.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {member.phone}
                  </p>
                  <a
                    href={`https://wa.me/${member.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success d-flex align-items-center justify-content-center whatsapp gap-2"
                  >
                    <FaWhatsapp size={20} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No team members found</p>
        )}
      </div>
    </div>
  );
}
