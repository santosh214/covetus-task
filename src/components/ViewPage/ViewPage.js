import React, { useState } from "react";
import { useLocation } from "react-router";
export default function ViewPage(props) {
  const location = useLocation();
  console.log("loc", location.state);

  console.log("props", props);
  const [basicDetails, setBasicDetails] = useState(location.state.basicDetails);
  const [physicalStatus, setPhysicalStatus] = useState(
    location.state.physicalStatus
  );
  const [personalLife, setPersonalLife] = useState(location.state.personalLife);
  const [family, setfamily] = useState(location.state.family);
  const [relationShip, setRelationship] = useState(location.state.relationShip);

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col text-center pt-5">
            <h1>
              {basicDetails.name} ({basicDetails.nickName})
            </h1>
            <p>{basicDetails.profession}</p>
            <p>{basicDetails.dob}</p>
          </div>
        </div>
        <div className="row">
          <h4>Physical Stats</h4>
          <hr />
          <div className="col-lg-4">
            <p className="fw-bold">Height</p>
            <p>
              {physicalStatus.heightfoot}ft {physicalStatus.heightInch}in
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Eye Color</p>
            <p>
                {physicalStatus.EyeColor}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Weight</p>
            <p>
                {physicalStatus.weight}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Hair Color</p>
            <p>
                {physicalStatus.hairColor}
            </p>
          </div>

          <div className="col-lg-4">
            <p className="fw-bold">Gender</p>
            <p>
                {physicalStatus.Gender}
            </p>
          </div>


        </div>
        <div className="row">
          <h4>Personal Life</h4>
          <hr />
          <div className="col-lg-4">
            <p className="fw-bold">Birth place</p>
            <p>
              {personalLife.BirthPlace}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Zodiac</p>
            <p>
                {personalLife.Zodiac}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Religion</p>
            <p>
                {personalLife.Religion}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">School</p>
            <p>
                {personalLife.School}
            </p>
          </div>

          <div className="col-lg-4">
            <p className="fw-bold">Graduation</p>
            <p>
                {personalLife.Graduation}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">homeAddress</p>
            <p>
                {personalLife.homeAddress}
            </p>
          </div>

          <div className="col-lg-4">
            <p className="fw-bold">homeTown</p>
            <p>
                {personalLife.homeTown}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Nationality</p>
            <p>
                {personalLife.Nationality}
            </p>
          </div>



        </div>
      </div>
    </>
  );
}
