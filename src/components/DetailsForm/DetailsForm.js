import React, { useState } from "react";

export default function DetailsForm() {
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    nickName: "",
    profession: "",
    dob: "",
  });
  const [heightFoot, setHeightFoot] = useState(0);
  const [heightInch, setHeightInch] = useState(0);
  const [physicalStatus, setPhysicalStatus] = useState({
    height: "",
    EyeColor: "",
    weight: 0,
    hairColor: "",
    Gender: "",
    bodyMeasurement: "",
  });
  const [personalLife, setPersonalLife] = useState({
    BirthPlace: "",
    Zodiac: "",
    Religion: 0,
    School: "",
    Graduation: "",
    homeAddress: "",
    homeTown:'',
    Nationality:''
  });
  console.log("basicDetails", basicDetails);

  const getAllDetails = () => {
    console.log("hello", basicDetails);
  };
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <h4>Basic Details</h4>

          <div className="col-lg-4">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Name"
                value={basicDetails.name}
                onChange={(e) => {
                  setBasicDetails({ ...basicDetails, name: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nick Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nick Name"
                placeholder="Nick Name"
                value={basicDetails.nickName}
                onChange={(e) => {
                  setBasicDetails({
                    ...basicDetails,
                    nickName: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Profession
              </label>
              <input
                type="text"
                className="form-control"
                id="Profession"
                placeholder="Enter your Profession"
                value={basicDetails.profession}
                onChange={(e) => {
                  setBasicDetails({
                    ...basicDetails,
                    profession: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Date of birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                placeholder="Enter your date of birth"
                value={basicDetails.dob}
                onChange={(e) => {
                  setBasicDetails({ ...basicDetails, dob: e.target.value });
                }}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <h4>Physical Stats</h4>

          <div className="col-lg-2">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Height in foot
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="foot"
                  placeholder="foot"
                  value={heightFoot}
                  onChange={(e) => {
                    setHeightFoot(e.target.value);
                  }}
                />{" "}
                <span className="px-2 pt-2">foot</span>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Height in inches
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="inches"
                  placeholder="inch"
                  value={heightInch}
                  onChange={(e) => {
                    setHeightInch(e.target.value);
                  }}
                />{" "}
                <span className="px-2 pt-2">inches</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Eye Color
              </label>
              <input
                type="text"
                className="form-control"
                id="eye color"
                placeholder="Enter eye color"
                value={physicalStatus.EyeColor}
                onChange={(e) => {
                  setPhysicalStatus({
                    ...physicalStatus,
                    EyeColor: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Weight
              </label>
              <input
                type="text"
                className="form-control"
                id="weight"
                placeholder="Enter your weight"
                value={physicalStatus.weight}
                onChange={(e) => {
                  setPhysicalStatus({
                    ...physicalStatus,
                    weight: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Hair Color
              </label>
              <input
                type="text"
                className="form-control"
                id="hair color"
                placeholder="Enter your Hair color"
                value={physicalStatus.hairColor}
                onChange={(e) => {
                  setPhysicalStatus({
                    ...physicalStatus,
                    hairColor: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Gender
              </label>
              {console.log("physicalStatus", physicalStatus)}
              <select
                class="form-select"
                value={physicalStatus.Gender}
                onChange={(e) => {
                  setPhysicalStatus({
                    ...physicalStatus,
                    Gender: e.target.value,
                  });
                }}
                aria-label="Default select example"
              >
                <option selected={physicalStatus.Gender}>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <button onClick={getAllDetails}>click</button>
      </div>
    </>
  );
}
