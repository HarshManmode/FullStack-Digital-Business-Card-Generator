import React from "react";
import "./DisplayCard.css";

const DisplayCard = ({ card }) => {
  if (!card) return null;

  // Build the correct absolute image path
  const logoSrc =
    card.logo?.startsWith("http") || card.logo?.startsWith("data:")
      ? card.logo
      : `http://localhost:5000${card.logo}`;

  console.log("🖼️ Logo URL being used:", logoSrc);

  return (
    <div className="card-preview">
      <div className="business-card">
        <div className="card-left">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="Logo"
              className="card-logo"
              onError={(e) => {
                console.error("❌ Image failed to load:", e.target.src);
                e.target.style.display = "none";
              }}
            />
          ) : (
            <div className="placeholder-logo">LOGO</div>
          )}
        </div>

        <div className="card-right">
          <h2>{card.name}</h2>
          <h4>{card.jobTitle}</h4>
          <p className="company">{card.company}</p>
          <div className="divider"></div>
          <p>📧 {card.email}</p>
          <p>📞 {card.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
