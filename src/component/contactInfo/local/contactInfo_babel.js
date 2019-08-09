var appendElemName = 'root-contactInfo'
function ReactContactInfoCompLoad() {
    var renderContactList = () => {
        return React.createElement("div", {
          id: "contentList"
        }, React.createElement("section", {
          className: "content-with-title border-and-spacing"
        }, React.createElement("h3", {
          className: "content-heading"
        }, "Get in touch with us"), React.createElement("p", {
          className: "main-content"
        }, ' ', "Do you have questions regarding Skava\u2019s solutions, the company, career opportunities, or media inquiries? We\u2019re happy to hear from you. Fill out the contact form, shoot us an email, or give us a call and we\u2019d be glad to help. If you\u2019d like to see a demo of the Skava Commerce platform, please", ' ', React.createElement("a", {
          className: "link-style",
          href: "http://www.skava.com/request-a-demo/"
        }, "Request a Demo"), ". Skava has offices around the globe in the heart of every city.")), React.createElement("section", {
          className: "content-with-title border-and-spacing"
        }, React.createElement("h3", {
          className: "content-heading"
        }, "Business Inquiries"), React.createElement("p", {
          className: "main-content"
        }, React.createElement("a", {
          className: "link-style",
          href: "mailto:Sales@skava.com"
        }, "Sales@skava.com"))), React.createElement("section", {
          className: "content-with-title"
        }, React.createElement("h3", {
          className: "content-heading"
        }, "Employement Opportunities"), React.createElement("p", {
          className: "main-content"
        }, React.createElement("a", {
          className: "link-style",
          href: "mailto:jobs@skava.com"
        }, "jobs@skava.com"))));
      }
      
      var renderContactForm = () => {
        return React.createElement("section", {
          id: "contactForm"
        }, React.createElement("h3", {
          className: "heading"
        }, "Contact Us"), React.createElement("form", {
          id: "contact-form"
        }, React.createElement("div", {
          className: "input-wrapper"
        }, React.createElement("input", {
          className: "input-box",
          type: "text",
          name: "firstName",
          placeholder: "First Name*",
          required: true
        })), React.createElement("div", {
          className: "input-wrapper"
        }, React.createElement("input", {
          className: "input-box",
          type: "text",
          name: "lastName",
          placeholder: "Last Name*",
          required: true
        })), React.createElement("div", {
          className: "input-wrapper"
        }, React.createElement("input", {
          className: "input-box",
          type: "text",
          name: "title",
          placeholder: "Title"
        })), React.createElement("div", {
          className: "input-wrapper"
        }, React.createElement("input", {
          className: "input-box",
          type: "email",
          name: "email",
          placeholder: "Business Email*",
          required: true
        })), React.createElement("div", {
          className: "input-wrapper"
        }, React.createElement("input", {
          className: "input-box",
          type: "text",
          name: "companyName",
          placeholder: "Company Name"
        })), React.createElement("div", {
          className: "input-wrapper"
        }, React.createElement("input", {
          className: "input-box",
          type: "tel",
          name: "phoneNumber",
          placeholder: "Phone number*",
          required: true
        })), React.createElement("div", {
          className: "input-wrapper"
        }, React.createElement("input", {
          className: "input-box",
          type: "text",
          name: "country",
          placeholder: "Country"
        })), React.createElement("div", {
          className: "input-wrapper"
        }, React.createElement("textarea", {
          className: "input-box textarea-message",
          name: "message",
          placeholder: "Your Message:*",
          required: true
        })), React.createElement("div", {
          className: "submit-button-wrapper"
        }, React.createElement("button", {
          className: "submit-button",
          type: "submit",
          form: "contact-form",
          value: "Submit"
        }, "Submit"))));
      }
      
      var ContactInfoComp = () => {
        return React.createElement("div", {
          className: "contact-container-fluid"
        }, renderContactList(), renderContactForm());
      }
    ReactDOM.render(
        React.createElement(ContactInfoComp, null),
        document.getElementById(appendElemName)
    )

}

ReactContactInfoCompLoad()
