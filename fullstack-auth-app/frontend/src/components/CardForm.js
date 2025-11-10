import React, { useState } from "react";
import axios from "axios";
import DisplayCard from "./DisplayCard";
import "./CardForm.css";

function CardForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    company: "",
    phone: "",
    logo: null,
  });

  const [cardData, setCardData] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // for local image preview

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, logo: file }));
      setPreviewUrl(URL.createObjectURL(file)); // create a local preview
    } else {
      setFormData((prev) => ({ ...prev, logo: null }));
      setPreviewUrl(null);
    }
  };

  // Submit form with FormData (supports file upload)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("jobTitle", formData.jobTitle);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("phone", formData.phone);

      if (formData.logo) {
        formDataToSend.append("logo", formData.logo);
      }

      const res = await axios.post("http://localhost:5000/api/cards", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Use the backend response (includes correct logo URL)
      const savedCard = res.data.card || res.data;

      setCardData(savedCard);
      setPreviewUrl(null);

      alert("✅ Card saved successfully!");
    } catch (err) {
      console.error("❌ Error saving card:", err);
      alert("❌ Error saving card");
    }
  };

  return (
    <div className="form-container">
      <h1>💼 Digital Business Card Generator</h1>
      <p>Create your personalized business card in seconds</p>

      <form className="card-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Generate Card</button>
      </form>

      {/* Optional: Show local preview before uploading */}
      {previewUrl && (
        <div style={{ marginTop: 20 }}>
          <h4>Local Image Preview</h4>
          <img
            src={previewUrl}
            alt="preview"
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: 8,
              border: "1px solid #ccc",
            }}
          />
        </div>
      )}

      {/* Show generated card */}
      <DisplayCard card={cardData} />
    </div>
  );
}

export default CardForm;
