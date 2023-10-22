import React, { useState } from "react";
import Select from "react-select";

import "./Form.css";

// Tech Stack Array
// Can update or Delete tech as per needed
const options = [
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "Javascript", value: "js" },
  { label: "React.js", value: "js" },
  { label: "Express.js", value: "js" },
  { label: "Angular", value: "js" },
  { label: "Vue.js", value: "js" },
  { label: "Node.js", value: "js" },
  { label: "Ruby on Rails", value: "js" },
  { label: "JSON", value: "js" },
  { label: "C#", value: "js" },
  { label: ".NET", value: "js" },
  { label: "Django", value: "js" },
  { label: "Python", value: "js" },
  { label: "PyCharm", value: "js" },
  { label: "Flask", value: "js" },
  { label: "MySQL", value: "js" },
  { label: "MongoDB", value: "js" },
  { label: "Flutter", value: "js" },
  { label: "Firebase", value: "js" },
  { label: "Java", value: "js" },
  { label: "Laravel", value: "js" },
  { label: "Java", value: "js" },
  { label: "Java", value: "js" },
  { label: "Java", value: "js" },
];

function Form() {
  const [selected, setSelected] = useState();

  //Fuction handling the tech-stack options
  function handleSelect(data) {
    setSelected(data);
  }
  return (
    <>
      {/* HTML for Form */}
      <section class="intro">
        <div class="container">
          <div class="left-col">
            <h1>Welcome Organisations!</h1>
            <p>
              Just add the Issues, and let the Open source contributers show
              their magic with the respetive Tech-Stack.
              <span className="github_link"><a href="https://github.com/clubgamma/Good_First_Issue_Web_App">Github link</a> </span>
            </p>
          </div>
          <div class="rigth-col">
            <div class="top-box">
              <p>
                <span>CLUB GAMMA </span> invites you all
              </p>
            </div>
            <div class="form-container">
              <form action="#" autocomplete="off">
                <div class="input-group">
                  <label htmlFor="repoName">Repo Name</label>
                  <input
                    type="text"
                    id="repoName"
                    placeholder="Repo Name"
                    required
                  />
                  {/* <img
                    src="images/icon-error.svg"
                    class="error-icon no-error"
                    alt=""
                  /> */}
                  <p class="error-text no-error">Repo Name cannot be empty</p>
                </div>
                <div class="input-group">
                  <label htmlFor="repoLink">Repo Link</label>
                  <input
                    type="text"
                    id="repoLink"
                    placeholder="Repo Link"
                    required
                  />
                  {/* <img
                    src="images/icon-error.svg"
                    class="error-icon no-error"
                    alt=""
                  /> */}
                  <p class="error-text no-error">Repo Link cannot be empty</p>
                </div>
                <div class="input-group">
                  <label for="description">description</label>
                  <textarea
                    name="description"
                    rows="5"
                    cols="60"
                    placeholder="Add small description for the Good first Issue"
                  ></textarea>
                  {/* <img
                    src="images/icon-error.svg"
                    class="error-icon no-error"
                    alt=""
                  /> */}
                  <p class="error-text no-error">
                    Looks like this is not an description
                  </p>
                </div>
                <div class="input-group">
                  <label for="techStack">techStack</label>

                  {/* <input
                    type="text"
                    id="tesxStack"
                    placeholder="Tech-Stack"
                    required
                  /> */}
                  <Select
                    options={options}
                    value={selected}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                    placeholder="Select Tech-Stack"
                  />
                  {/* <img
                    src="images/icon-error.svg"
                    class="error-icon no-error"
                    alt=""
                  /> */}
                  <p class="error-text no-error">Tech Stack cannot be empty</p>
                </div>

                <button type="submit" class="">
                  Submit
                </button>
                <p class="form-footer">
                  By clicking the button, you are agreeing to our{" "}
                  <span>Terms and Services</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
