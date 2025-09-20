import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const PersonalDetailsForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    hour: "",
    minute: "",
    height: "",
    weight: "",
    nationality: "",
    country: "",
    astrologicalSign: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/personal-details", {
        ...form,
        timeOfBirth: { hour: form.hour, minute: form.minute }
      });
      alert("✅ Details saved successfully!");
    } catch (err) {
      alert("❌ " + err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px", borderRadius: "12px" }}>
        <h3 className="text-center mb-4">Personal Details</h3>
        
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              placeholder="Enter Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select
              className="form-select"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          {/* Time of Birth */}
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Hour</label>
              <select
                className="form-select"
                name="hour"
                value={form.hour}
                onChange={handleChange}
              >
                <option value="">Hour</option>
                {[...Array(24).keys()].map(h => <option key={h}>{h}</option>)}
              </select>
            </div>
            <div className="col">
              <label className="form-label">Minute</label>
              <select
                className="form-select"
                name="minute"
                value={form.minute}
                onChange={handleChange}
              >
                <option value="">Minute</option>
                {[...Array(60).keys()].map(m => <option key={m}>{m}</option>)}
              </select>
            </div>
          </div>

          {/* Height */}
          <div className="mb-3">
            <label className="form-label">Height</label>
            <select
              className="form-select"
              name="height"
              value={form.height}
              onChange={handleChange}
            >
              <option value="">Select Height</option>
              <option>4ft 6in / 137 cm</option>
              <option>4ft 7in / 139 cm</option>
              <option>4ft 8in / 142 cm</option>
              <option>4ft 9in / 144 cm</option>
              <option>4ft 10in / 147 cm</option>
            </select>
          </div>

          {/* Weight */}
          <div className="mb-3">
            <label className="form-label">Weight</label>
            <select
              className="form-select"
              name="weight"
              value={form.weight}
              onChange={handleChange}
            >
              <option value="">Select Weight</option>
              <option>50 KG</option>
              <option>60 KG</option>
              <option>70 KG</option>
              <option>80 KG</option>
            </select>
          </div>

          {/* Nationality */}
          <div className="mb-3">
            <label className="form-label">Nationality</label>
            <input
              type="text"
              className="form-control"
              name="nationality"
              placeholder="Enter Nationality"
              value={form.nationality}
              onChange={handleChange}
            />
          </div>

          {/* Country */}
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              placeholder="Enter Country"
              value={form.country}
              onChange={handleChange}
            />
          </div>

          {/* Astrological Sign */}
          <div className="mb-3">
            <label className="form-label">Astrological Sign (Rashi)</label>
            <select
              className="form-select"
              name="astrologicalSign"
              value={form.astrologicalSign}
              onChange={handleChange}
            >
              <option value="">Select Astrological Sign</option>
              <option>Aries</option>
              <option>Taurus</option>
              <option>Gemini</option>
              <option>Cancer</option>
              <option>Leo</option>
              <option>Virgo</option>
              <option>Libra</option>
              <option>Scorpio</option>
              <option>Sagittarius</option>
              <option>Capricorn</option>
              <option>Aquarius</option>
              <option>Pisces</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">Save and Next</button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
