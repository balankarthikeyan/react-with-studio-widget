var appendElemName = 'root-workWithUs';
function ReactWorkWithUsCompLoad() {
    var WorkWithUsComp = () => {
      function renderHeading() {
        return React.createElement("h3", {
          className: "content-heading"
        }, "Work with Us!");
      }

      function renderDescription() {
        return React.createElement("p", {
          className: "main-content"
        }, "Check out some of our job openings. Join a team of innovators and visionaries working together toward achieving the vision Skava was built on and beyond.");
      }

      function renderJobList() {
        return React.createElement(React.Fragment, null, React.createElement("div", {
          className: "team-wrapper"
        }, React.createElement("label", {
          className: "team-name"
        }, "ASAP"), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/6315509e-4977-4285-989a-a44647ba7b2b"
        }, "Security Test Engineer/Sr Security Test Engineer"), React.createElement("span", {
          className: "job-location"
        }, "Coimbatore"))), React.createElement("div", {
          className: "team-wrapper"
        }, React.createElement("label", {
          className: "team-name"
        }, "DevOps"), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/6685b126-c8c9-4e99-a79f-1ef5fa3ed6f9"
        }, "DevOps Engineer Trainee"), React.createElement("span", {
          className: "job-location"
        }, "Coimbatore"))), React.createElement("div", {
          className: "team-wrapper"
        }, React.createElement("label", {
          className: "team-name"
        }, "Human Resources"), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/b68fa4f2-0a31-4271-81c0-af5e675c3805"
        }, "HR Generalist - Job #341"), React.createElement("span", {
          className: "job-location"
        }, " San Francisco"))), React.createElement("div", {
          className: "team-wrapper"
        }, React.createElement("label", {
          className: "team-name"
        }, "Infra"), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/c8d3309c-2527-46e3-9634-9b5111ae7b1e"
        }, "Infra Engineer/Senior Infra Engineer"), React.createElement("span", {
          className: "job-location"
        }, "Coimbatore"))), React.createElement("div", {
          className: "team-wrapper"
        }, React.createElement("label", {
          className: "team-name"
        }, "NOC"), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/7a69e803-904b-4481-b2c8-215c973e07e9"
        }, "NOC - Technical Support Engineer"), React.createElement("span", {
          className: "job-location"
        }, "Coimbatore"))), React.createElement("div", {
          className: "team-wrapper"
        }, React.createElement("label", {
          className: "team-name"
        }, "QE"), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/fd80efd8-2366-4fc3-a21c-e39226fa5786"
        }, "QE Lead"), React.createElement("span", {
          className: "job-location"
        }, "Coimbatore"))), React.createElement("div", {
          className: "team-wrapper"
        }, React.createElement("label", {
          className: "team-name"
        }, "Solution Architecture"), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/4819fb5a-2d78-4529-bdc7-b554bb16184f"
        }, "Sr. Technical Architect"), React.createElement("span", {
          className: "job-location"
        }, " San Francisco")), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/88dc22d4-ee00-43fc-9c81-dfbf5a7ba8fc"
        }, "Technical Architect - Java"), React.createElement("span", {
          className: "job-location"
        }, "Sunnyvale")), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/cee8771b-1eb6-4eb6-92ec-7dcc48a2086b"
        }, "Technical Architect - Java"), React.createElement("span", {
          className: "job-location"
        }, "Austin")), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/b41f6a48-2763-4165-9daa-52f99af84f4e"
        }, "Technical Architect - UI"), React.createElement("span", {
          className: "job-location"
        }, "Austin")), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/47c714e8-593f-4ddd-9c92-7fc84bafe0f9"
        }, "Technical Lead - Java"), React.createElement("span", {
          className: "job-location"
        }, "Austin")), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/d8891e26-2e0f-4524-ac02-d5461736cb5d"
        }, "Technical Lead - UI"), React.createElement("span", {
          className: "job-location"
        }, "Austin"))), React.createElement("div", {
          className: "team-wrapper"
        }, React.createElement("label", {
          className: "team-name"
        }, "Solutions"), React.createElement("div", {
          className: "job-position"
        }, React.createElement("a", {
          className: "job-link",
          href: "https://jobs.lever.co/skava/f136048c-6d72-4d78-bf38-3b2aac5381ad"
        }, "Full Stack Developer/Software Developer"), React.createElement("span", {
          className: "job-location"
        }, "Coimbatore"))));
      }

      return React.createElement("section", {
        className: "work-with-us"
      }, React.createElement("div", {
        className: "content-with-title common-container"
      }, renderHeading(), renderDescription(), renderJobList()));

    }
    
    ReactDOM.render(
        React.createElement(WorkWithUsComp, null),
        document.getElementById(appendElemName)
    )
}

ReactWorkWithUsCompLoad()