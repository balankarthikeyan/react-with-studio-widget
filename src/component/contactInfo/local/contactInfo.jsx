import "./styles.css";

function renderContactList() {
    return (
      <div id="contentList">
        <section className="content-with-title border-and-spacing">
          <h3 className="content-heading">Get in touch with us</h3>
          <p className="main-content">
            {' '}
            Do you have questions regarding Skava’s solutions, the company, career
            opportunities, or media inquiries? We’re happy to hear from you. Fill
            out the contact form, shoot us an email, or give us a call and we’d be
            glad to help. If you’d like to see a demo of the Skava Commerce
            platform, please{' '}
            <a className="link-style" href="http://www.skava.com/request-a-demo/">
              Request a Demo
            </a>
            . Skava has offices around the globe in the heart of every city.
          </p>
        </section>
        <section className="content-with-title border-and-spacing">
          <h3 className="content-heading">Business Inquiries</h3>
          <p className="main-content">
            <a className="link-style" href="mailto:Sales@skava.com">
              Sales@skava.com
            </a>
          </p>
        </section>
        <section className="content-with-title">
          <h3 className="content-heading">Employement Opportunities</h3>
          <p className="main-content">
            <a className="link-style" href="mailto:jobs@skava.com">
              jobs@skava.com
            </a>
          </p>
        </section>
      </div>
    )
  }
  
  function renderContactForm() {
    return (
      <section id="contactForm">
        <h3 className="heading">Contact Us</h3>
        <form id="contact-form">
          <div className="input-wrapper">
            <input
              className="input-box"
              type="text"
              name="firstName"
              placeholder="First Name*"
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input-box"
              type="text"
              name="lastName"
              placeholder="Last Name*"
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input-box"
              type="text"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input-box"
              type="email"
              name="email"
              placeholder="Business Email*"
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input-box"
              type="text"
              name="companyName"
              placeholder="Company Name"
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input-box"
              type="tel"
              name="phoneNumber"
              placeholder="Phone number*"
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input-box"
              type="text"
              name="country"
              placeholder="Country"
            />
          </div>
          <div className="input-wrapper">
            <textarea
              className="input-box textarea-message"
              name="message"
              placeholder="Your Message:*"
              required
            />
          </div>
          <div className="submit-button-wrapper">
            <button
              className="submit-button"
              type="submit"
              form="contact-form"
              value="Submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    )
  }
  function ContactInfo() {
    return (
      <div className="contact-container-fluid">
        {renderContactList()}
        {renderContactForm()}
      </div>
    )
  }
  
  export { ContactInfo }
  export default ContactInfo