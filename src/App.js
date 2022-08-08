import React, { useEffect, useState } from "react";

const App = () => {
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");

  const initialState = {
    id: "",
    summary: "",
    description: "",
  };

  const runThisFunc = () => {
    sessionStorage.setItem("key", JSON.stringify(initialState));
  };

  const saveBtnFunc = () => {
    let savedObj = JSON.parse(sessionStorage.getItem("key"));
    savedObj.summary = summary;
    savedObj.description = description;
    sessionStorage.setItem("key", JSON.stringify(savedObj));
    let summaryField = document.getElementById('summary')
    let descriptionField = document.getElementById('description')
    summaryField.value = ""
    descriptionField.value = ""
  };
  const deleteBtnFunc = () => {
    let savedObj = JSON.parse(sessionStorage.getItem("key"));
    savedObj.summary = "";
    savedObj.description = "";
    sessionStorage.setItem("key", JSON.stringify(savedObj));
    let summaryField = document.getElementById('summary')
    let descriptionField = document.getElementById('description')
    summaryField.value = ""
    descriptionField.value = ""
  };
  const readBtnFunc = () => {
    let savedObj = JSON.parse(sessionStorage.getItem("key"));
    console.log(savedObj);
    let summaryField = document.getElementById('summary')
    let descriptionField = document.getElementById('description')
    summaryField.value = savedObj.summary
    descriptionField.value = savedObj.description
  };
  const updateBtnFunc = () => {
    let savedObj = JSON.parse(sessionStorage.getItem("key"));
    savedObj.summary = summary;
    savedObj.description = description;
    sessionStorage.setItem("key", JSON.stringify(savedObj));
    let summaryField = document.getElementById('summary')
    let descriptionField = document.getElementById('description')
    summaryField.value = ""
    descriptionField.value = ""
  };

  useEffect(() => {
    runThisFunc();
  }, []);

  return (
    <section className="h-screen w-full bg-slate-300">
      <main className="h-full w-full flex items-center justify-center">
        <div
          className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center w-full"
          style={{ fontFamily: '"Lato", sans-serif' }}
        >
          <div className="flex flex-col items-center justify-center gap-4 py-8 px-4 w-full">
            {/* Code block starts */}
            <div className="flex flex-col w-fit mx-auto">
              <label
                htmlFor="summary"
                className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
              >
                summary
              </label>
              <input
                id="summary"
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                placeholder="Placeholder"
                onChange={(e) => {
                  setSummary(e.target.value);
                }}
              />
            </div>
            {/* Code block ends */}
            {/* Code block starts */}
            <div className="flex flex-col w-fit mx-auto">
              <label
                htmlFor="description"
                className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
              >
                description
              </label>
              <input
                id="description"
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                placeholder="Placeholder"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            {/* Code block ends */}
            <div className="px-6 flex flex-wrap">
              {/* Code block for gray alternative button starts */}
              <button
                className="mx-2 my-2 bg-gray-400 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-500 rounded text-gray-800 hover:text-gray-200 font-semibold px-6 py-2 text-xs"
                onClick={saveBtnFunc}
              >
                Save
              </button>
              {/* Code block for gray alternative button ends */}
              {/* Code block for gray alternative button starts */}
              <button
                className="mx-2 my-2 bg-gray-400 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-500 rounded text-gray-800 hover:text-gray-200 font-semibold px-6 py-2 text-xs"
                onClick={deleteBtnFunc}
              >
                Delete
              </button>
              {/* Code block for gray alternative button ends */}
              {/* Code block for gray alternative button starts */}
              <button
                className="mx-2 my-2 bg-gray-400 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-500 rounded text-gray-800 hover:text-gray-200 font-semibold px-6 py-2 text-xs"
                onClick={readBtnFunc}
              >
                Read
              </button>
              {/* Code block for gray alternative button ends */}
              {/* Code block for gray alternative button starts */}
              <button
                className="mx-2 my-2 bg-gray-400 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-500 rounded text-gray-800 hover:text-gray-200 font-semibold px-6 py-2 text-xs"
                onClick={updateBtnFunc}
              >
                Update
              </button>
              {/* Code block for gray alternative button ends */}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default App;
