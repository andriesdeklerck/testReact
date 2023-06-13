import React, { useState } from 'react';
import './Find.css';
import { Link, redirect } from 'react-router-dom'; // Import Link and useHistory
import { getBatteryDataList } from '../../batteryDataService'; // Import the data list

const Find = () => {
  const [searchId, setSearchId] = useState(''); // State for the search ID
  const dataList = getBatteryDataList();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Redirect to the details page with the searched ID
    redirect(`/details/${searchId}`);
    setSearchId(''); // Reset the search ID input
  };

  // Retrieve the data list
  return (
    <div className="container">
      <div className="row">
        {/* Search form */}
        <div className="col-md-12 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Data ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">Search</button>
            </div>
          </form>
        </div>

        {/* Data cards */}
        {dataList.map((data) => (
          <div className="col-md-4" key={data.Id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Data ID: {data.Id}</h5>
                <p className="card-text">Address: {data.Address}</p>
                <p className="card-text">CycleIndex: {data.CycleIndex}</p>
                <Link to={`/details/${data.Id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Find;
