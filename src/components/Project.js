import React from "react";

const files = [
  {
    key: "1",
    title: 'Busy Bee',
    description: 'To-do List App',
    source: require("./images/busybee.png"),
    url: "http://lit-beach-45684.herokuapp.com/"
  },
  {
    key: "2",
    title: 'README Generator',
    description: 'Generate README.md in CLI',
    source: require("./images/README.png"),
    url: "https://github.com/cartermatschek/README-generator"
  },
  {
    key: "3",
    title: 'JobSight',
    description: 'Job Application Tracker',
    source: require("./images/JobSight.png"),
    url: "https://app-track.herokuapp.com/"
  },
  {
    key: "4",
    title: 'Work Day Scheduler',
    description: 'Single Day Scheduler App',
    source: require("./images/WorkDay.png"),
    url: "https://cartermatschek.github.io/work-day-scheduler/"
  },
  {
    key: "5",
    title: 'Text Editor',
    description: 'Progressive Web App',
    source: require("./images/texteditor.png"),
    url: "https://arcane-stream-50193.herokuapp.com/"
  },
  {
    key: "6",
    title: 'Social Network API',
    description: 'Back End for Social Network App',
    source: require("./images/socialnetwork.png"),
    url: "https://github.com/cartermatschek/social-network-api"
  },
  {
    key: "7",
    title: 'Note Taker App',
    description: 'Express.js Demo',
    source: require("./images/notetaker.png"),
    url: "https://radiant-coast-34127.herokuapp.com/"
  },
  {
    key: "8",
    title: 'Password Generator',
    description: 'Simple Password Generator App',
    source: require("./images/password.png"),
    url: "https://cartermatschek.github.io/password-generator/"
  },
]

export default function Project() {
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <a href={file.url}> 
        <li key={file.key} className="relative">
          <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.description}</p>
        </li>
        </a>
      ))}
    </ul>
  )
}

// function Project() {
//   return (
//    <div>

//     <h2>Projects</h2>
//     <div className="card" style={{width: "300px"}}>
//       <img src={busybee} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Busy Bee</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Deployed App</a>
//   </div>
// </div>
//    </div>
//   );
// }

// export default Project;
