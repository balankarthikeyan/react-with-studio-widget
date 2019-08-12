import "./styles.css";

function renderMainHeading() {
  return <h1 className="main-title">About</h1>
}

function renderAboutDetail() {
  return (
    <>
      <div className="about-wrapper1">
        <div className="common-container about-content">
          <section className="content-with-title founding">
            <h3 className="content-heading">Founding</h3>
            <p className="main-content">
              Skava was founded by the husband and wife team of Arish Ali and
              Sudha Varadarajan in 2002. Initially focused on developing mobile
              retail solutions. Working side by side with major retailers, Skava
              discovered that many companies were unable to realize their online
              goals, as their legacy commerce systems were tricky to develop for
              and harder to innovate on.
            </p>
            <p className="main-content">
              This gave birth to Skava Commerce, a microservices solution for
              digital commerce, which allows retailers to rapidly test, build
              and deploy features for any device, without the friction and
              difficulties associated with the legacy platforms currently on the
              market.
            </p>
            <p className="main-content">
              Skava’s vision for the future became clear: to transform and
              empower businesses to easily develop and deploy delightful
              commerce experiences and preserve their brand.
            </p>
          </section>
          <section className="content-with-title our-mission">
            <h3 className="content-heading">Our Mission</h3>
            <p className="main-content">
              At Skava, we understand the rapid pace of digital commerce
              transformation. Constantly changing customer behaviors, emerging
              technologies and a new generation of modern digital experiences
              must all be answered to stay ahead of the competition.
            </p>
            <p className="main-content">
              Many companies are still using legacy systems never intended to
              move as quickly as the modern market requires. The good news is
              catching up doesn’t mean starting from scratch. Skava’s modern
              commerce solutions free you from your existing technology with a
              robust microservices architecture designed to keep pace with your
              customers and accelerate their digital commerce journey.
            </p>
            <p className="main-content">
              We’re working together to simplify the way you build fresh
              customer experiences and bring your ideas to life without the
              roadblocks of legacy systems.
            </p>
            <p className="main-content">
              So you can focus on what matters. Your customers.
            </p>
          </section>
        </div>
      </div>
      <div className="about-wrapper2">
        <div className="common-container">
          <section className="content-with-title our-team">
            <h3 className="content-heading">Our Team</h3>
            <p className="main-content">
              Today, Skava numbers more than 600 people distributed across three
              continents who are dedicated to our vision: transforming a new
              generation of modern commerce, fueled by microservices
              architecture. We are a team of innovators and visionaries,
              bringing together excellence in e-commerce, retail, engineering,
              product design, and innovation.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

function AboutInfo() {
  return (
    <main className="about-main-container">
      {renderMainHeading()}
      {renderAboutDetail()}
    </main>
  )
}

export { AboutInfo }
export default AboutInfo
