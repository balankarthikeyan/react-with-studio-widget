import './styles.css'

function renderHeading() {
  return <h3 className="content-heading">Worked with Us!</h3>
}

function renderDescription() {
  return (
    <p className="main-content">
      Check out some of our job openings. Join a team of innovators and
      visionaries working together toward achieving the vision Skava was built
      on and beyond.
    </p>
  )
}

function renderJobList() {
  return (
    <>
      <div className="team-wrapper">
        <label className="team-name">ASAP</label>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/6315509e-4977-4285-989a-a44647ba7b2b"
          >
            Security Test Engineer/Sr Security Test Engineer
          </a>
          <span className="job-location">Coimbatore</span>
        </div>
      </div>
      <div className="team-wrapper">
        <label className="team-name">DevOps</label>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/6685b126-c8c9-4e99-a79f-1ef5fa3ed6f9"
          >
            DevOps Engineer Trainee
          </a>
          <span className="job-location">Coimbatore</span>
        </div>
      </div>
      <div className="team-wrapper">
        <label className="team-name">Human Resources</label>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/b68fa4f2-0a31-4271-81c0-af5e675c3805"
          >
            HR Generalist - Job #341
          </a>
          <span className="job-location"> San Francisco</span>
        </div>
      </div>
      <div className="team-wrapper">
        <label className="team-name">Infra</label>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/c8d3309c-2527-46e3-9634-9b5111ae7b1e"
          >
            Infra Engineer/Senior Infra Engineer
          </a>
          <span className="job-location">Coimbatore</span>
        </div>
      </div>
      <div className="team-wrapper">
        <label className="team-name">NOC</label>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/7a69e803-904b-4481-b2c8-215c973e07e9"
          >
            NOC - Technical Support Engineer
          </a>
          <span className="job-location">Coimbatore</span>
        </div>
      </div>
      <div className="team-wrapper">
        <label className="team-name">QE</label>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/fd80efd8-2366-4fc3-a21c-e39226fa5786"
          >
            QE Lead
          </a>
          <span className="job-location">Coimbatore</span>
        </div>
      </div>
      <div className="team-wrapper">
        <label className="team-name">Solution Architecture</label>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/4819fb5a-2d78-4529-bdc7-b554bb16184f"
          >
            Sr. Technical Architect
          </a>
          <span className="job-location"> San Francisco</span>
        </div>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/88dc22d4-ee00-43fc-9c81-dfbf5a7ba8fc"
          >
            Technical Architect - Java
          </a>
          <span className="job-location">Sunnyvale</span>
        </div>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/cee8771b-1eb6-4eb6-92ec-7dcc48a2086b"
          >
            Technical Architect - Java
          </a>
          <span className="job-location">Austin</span>
        </div>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/b41f6a48-2763-4165-9daa-52f99af84f4e"
          >
            Technical Architect - UI
          </a>
          <span className="job-location">Austin</span>
        </div>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/47c714e8-593f-4ddd-9c92-7fc84bafe0f9"
          >
            Technical Lead - Java
          </a>
          <span className="job-location">Austin</span>
        </div>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/d8891e26-2e0f-4524-ac02-d5461736cb5d"
          >
            Technical Lead - UI
          </a>
          <span className="job-location">Austin</span>
        </div>
      </div>
      <div className="team-wrapper">
        <label className="team-name">Solutions</label>
        <div className="job-position">
          <a
            className="job-link"
            href="https://jobs.lever.co/skava/f136048c-6d72-4d78-bf38-3b2aac5381ad"
          >
            Full Stack Developer/Software Developer
          </a>
          <span className="job-location">Coimbatore</span>
        </div>
      </div>
    </>
  )
}

function WorkWithUs() {
  return (
    <section className="work-with-us">
        <div className="content-with-title common-container">
          {renderHeading()}
          {renderDescription()}
          {renderJobList()}
      </div>
    </section>
  )
}

export { WorkWithUs }
export default WorkWithUs
