import React, { useState } from "react";
import "./Filter.css";

const Filter = () => {
  const [filters, setFilters] = useState({
    description: "",
    location: "",
    listingType: "",
    propertyType: "",
    rooms: "",
    bathrooms: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!filters.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!filters.location.trim()) {
      newErrors.location = "Location is required";
    }
    if (!filters.listingType.trim()) {
      newErrors.listingType = "Listing Type is required";
    }
    if (!filters.propertyType.trim()) {
      newErrors.propertyType = "Property Type is required";
    }
    if (!filters.rooms.trim()) {
      newErrors.rooms = "Rooms is required";
    }
    if (!filters.bathrooms.trim()) {
      newErrors.bathrooms = "Bathrooms is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log("Filters submitted:", filters);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="filter-container ">
      <form onSubmit={handleSubmit} className="filter-form">
        <div className="col-lg-6">
            <div className="form-group">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={filters.description}
            onChange={handleChange}
          />
          
        </div>
        </div>

        <div className="form-group ">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={handleChange}
            className={errors.location ? "error-input" : ""}
          />
          {errors.location && (
            <small className="error-text">{errors.location}</small>
          )}
        </div>

        <div className="form-group">
          <select
            name="listingType"
            value={filters.listingType}
            onChange={handleChange}
            className={errors.listingType ? "error-input" : ""}
          >
            <option value="">Listing Type</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
          {errors.listingType && (
            <small className="error-text">{errors.listingType}</small>
          )}
        </div>

        <div className="form-group">
          <select
            name="propertyType"
            value={filters.propertyType}
            onChange={handleChange}
            className={errors.propertyType ? "error-input" : ""}
          >
            <option value="">Property Type</option>
            <option value="villa">Villa</option>
            <option value="apartment">Apartment</option>
          </select>
          {errors.propertyType && (
            <small className="error-text">{errors.propertyType}</small>
          )}
        </div>

        <div className="form-group">
          <input
            type="number"
            name="rooms"
            placeholder="Rooms"
            value={filters.rooms}
            onChange={handleChange}
            className={errors.rooms ? "error-input" : ""}
          />
          {errors.rooms && (
            <small className="error-text">{errors.rooms}</small>
          )}
        </div>
<div className="form-group">
          <input
            type="number"
            name="bathrooms"
            placeholder="Bathrooms"
            value={filters.bathrooms}
            onChange={handleChange}
            className={errors.bathrooms ? "error-input" : ""}
          />
          {errors.bathrooms && (
            <small className="error-text">{errors.bathrooms}</small>
          )}

<button type="submit" className="search-btn">
          Search
        </button>
</div>
        

        
      </form>
    </div>
  );
};

export default Filter;
