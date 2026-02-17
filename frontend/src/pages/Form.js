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
    <div className="form-bg dark:bg-zinc-900 transition-colors duration-300">
      <section className="intro dark:bg-none">
        <div className="container">
          {/* LEFT COLUMN */}
          <div className="left-col dark:text-gray-200">
            <h1 className="dark:text-white">Welcome Organisations!</h1>
            <p className="dark:text-gray-300">
              Just add the Issues, and let the Open source contributers show
              their magic with the respetive Tech-Stack.
              <span className="github_link">
                <a
                  href="https://github.com/clubgamma/Good_First_Issue_Web_App"
                  className="dark:text-cyan-400"
                >
                  Github link
                </a>
              </span>
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right-col">
            {/* TOP BOX */}
            <div className="top-box dark:bg-purple-700 dark:shadow-[0_5px_#000]">
              <p className="dark:text-gray-100">
                <span>CLUB GAMMA </span> invites you all
              </p>
            </div>

            {/* FORM CONTAINER */}
            <div className="form-container dark:bg-zinc-800 dark:shadow-[0_7px_#000]">
              <form autoComplete="off">
                {/* INPUT GROUP */}
                <div className="input-group">
                  <label className="dark:text-gray-300">Repo Name</label>
                  <input
                    type="text"
                    placeholder="Repo Name"
                    required
                    className="dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
                  />
                </div>

                <div className="input-group">
                  <label className="dark:text-gray-300">Repo Link</label>
                  <input
                    type="text"
                    placeholder="Repo Link"
                    required
                    className="dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
                  />
                </div>

                <div className="input-group">
                  <label className="dark:text-gray-300">Description</label>
                  <textarea
                    rows="5"
                    placeholder="Add small description for the Good first Issue"
                    className="dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
                  />
                </div>

                <div className="input-group">
                  <label className="dark:text-gray-300">Tech Stack</label>
                  <Select
                    options={options}
                    value={selected}
                    onChange={handleSelect}
                    isSearchable
                    isMulti
                    placeholder="Select Tech-Stack"
                    className="dark:text-black"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="dark:bg-emerald-600 dark:shadow-[0_5px_#064e3b] dark:hover:bg-emerald-500"
                >
                  Submit
                </button>

                <p className="form-footer dark:text-gray-400">
                  By clicking the button, you are agreeing to our{" "}
                  <span className="dark:text-red-400">Terms and Services</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
