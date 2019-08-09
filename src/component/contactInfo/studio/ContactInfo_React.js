/*
 * (c)2002-2015 Skava. All rights reserved. The Skava system, including without
 * limitation, all software and other elements thereof, are owned or controlled
 * exclusively by Skava and protected by copyright, patent, and other laws. Use
 * without permission is prohibited. For further information contact Skava at
 * info@skava.com.
 */

var appendContactInfoElemName = 'root-contactInfo'
function ReactContactInfoCompLoad() {
  var ContactInfoComp = () => {
    return React.createElement("div", {
      className: "contact-container-fluid"
    }, renderContactList(), renderContactForm());
  }
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
          class: "input-wrapper"
        }, React.createElement("label", {
          class: "d-none",
          for: "firstName_label"
        }), React.createElement("input", {
          class: "input-box",
          type: "text",
          name: "firstName_label",
          placeholder: "First Name*",
          id: "firstName_label",
          required: true
        })), React.createElement("div", {
          class: "input-wrapper"
        }, React.createElement("label", {
          class: "d-none",
          for: "lastName_label"
        }), React.createElement("input", {
          class: "input-box",
          type: "text",
          name: "lastName_label",
          placeholder: "Last Name*",
          id: "lastName_label",
          required: true
        })), React.createElement("div", {
          class: "input-wrapper"
        }, React.createElement("label", {
          class: "d-none",
          for: "title_label"
        }), React.createElement("input", {
          class: "input-box",
          type: "text",
          name: "title_label",
          id: "title_label",
          placeholder: "Title"
        })), React.createElement("div", {
          class: "input-wrapper"
        }, React.createElement("label", {
          class: "d-none",
          for: "email_label"
        }), React.createElement("input", {
          class: "input-box",
          type: "email",
          name: "email_label",
          id: "email_label",
          placeholder: "Business Email*",
          required: true
        })), React.createElement("div", {
          class: "input-wrapper"
        }, React.createElement("label", {
          class: "d-none",
          for: "company_label"
        }), React.createElement("input", {
          class: "input-box",
          type: "text",
          name: "company_label",
          id: "company_label",
          placeholder: "Company Name"
        })), React.createElement("div", {
          class: "input-wrapper"
        }, React.createElement("label", {
          class: "d-none",
          for: "phoneNumber_label"
        }), React.createElement("input", {
          class: "input-box",
          type: "tel",
          name: "phoneNumber_label",
          id: "phoneNumber_label",
          placeholder: "Phone number*",
          required: true
        })), React.createElement("div", {
          class: "input-wrapper"
        }, React.createElement("label", {
          class: "d-none",
          for: "country_label"
        }), React.createElement("input", {
          class: "input-box",
          type: "text",
          name: "country_label",
          id: "country_label",
          placeholder: "Country"
        })), React.createElement("div", {
          class: "input-wrapper"
        }, React.createElement("textarea", {
          class: "input-box textarea-message",
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
    ReactDOM.render(
        React.createElement(ContactInfoComp, null),
        document.getElementById(appendContactInfoElemName)
    )

}

var ContactInfo_React = StudioWidgetV2.extend(
{
    /*
     * Triggered when initializing a widget and will have the code that invokes rendering of the widget
     * setParentContainer(JQueryParentContainerDOM) - binds event to this container
     * setItemContainer(JQueryItemContainerDOM) - binds studio item events for respective item containers
     * bindEvents() - binds the studio event to this widget
     */
    init: function()
    {
        var thisObj = this;
        thisObj._super.apply(thisObj, arguments);
        thisObj.render();
        if ((typeof(Studio) != "undefined") && Studio)
        {

        }
    },

    /*
     * Triggered from init method and is used to render the widget
     */
    render: function()
    {
        var thisObj = this;
        var widgetProperties = thisObj.getProperties();
        var elem = thisObj.getContainer();
        var items = thisObj.getItems();
        var connectorProperties = thisObj.getConnectorProperties();

        /*
         * API to get base path of your uploaded widget API file
         */
        var widgetBasePath = thisObj.getWidgetBasePath();
        if (elem)
        {
            var containerDiv = $(".scfClientRenderedContainer", elem);
            if (containerDiv.length)
            {
                $(containerDiv).empty();
            }
            else
            {
                containerDiv = document.createElement('div');
                containerDiv.className = "scfClientRenderedContainer";
                $(elem).append(containerDiv);
            }

            if (
                $("#" + appendContactInfoElemName, elem).length > 0 &&
                typeof ReactDOM.render === "function" &&
                typeof React === "object"
              ) {
                ReactContactInfoCompLoad(this);
                console.log("TEST Contact Info");
              }

            /* var html = "";

            $(containerDiv).append(html);

            for (var idx = 0; idx < items.length; idx++)
            {
                var itemDiv = document.createElement("div");
                itemDiv.innerHTML = "Facets for item " + (idx + 1);
                itemDiv.className = "ContactInfo_React_ItemContainer";
                var facets = items[idx].facets;
                for (var facetName in facets)
                {
                    var facetDiv = document.createElement("div");
                    facetDiv.innerHTML = facetName + " : " + facets[facetName];
                    $(itemDiv).append(facetDiv);
                }
                $(containerDiv).append(itemDiv);
            } */
        }

        /*
         * API to bind global events to the item DOM :
         *  thisObj.sksBindItemEvent();
         * 
         * API to bind item events to the item DOM :
         *  thisObj.sksBindItemEvent(JQueryItemContainerSelector, ItemIdx);
         * JQueryItemContainerSelector - A JQuery selector that returns an array of DOMs that represents the individual item inside the item container, to which the hotspot needs to be bound.
         * ItemIdx (Optional) - To bind the item events to a specific item.
         */
        thisObj.sksBindItemEvent();

        /*
         * API to refresh the previously bound events when a resize or orientation change occurs.
         *  thisObj.sksRefreshEvents(ItemIdx);
         * ItemIdx (Optional) - To refresh events for a specific item. Default value is 0.
         */
        $(window).resize(function()
        {
            thisObj.sksRefreshEvents();
        });
    },
});