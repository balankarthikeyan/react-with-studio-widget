/*
 * (c)2002-2015 Skava. All rights reserved. The Skava system, including without
 * limitation, all software and other elements thereof, are owned or controlled
 * exclusively by Skava and protected by copyright, patent, and other laws. Use
 * without permission is prohibited. For further information contact Skava at
 * info@skava.com.
 */
var HeaderComp;
var appendElemName = "root-header";
function ReactHeaderCompLoad() {
  var HeaderComp = function Header(props) {
    var renderIcon = function renderIcon(props) {
      return React.createElement("a", {
        id: "logo",
        href: "/",
        "aria-label": "skava-logo"
      }, React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 226.1 63.95",
        width: "115"
      }, React.createElement("g", null, React.createElement("path", {
        fill: "#fff",
        d: "M166.09 9.92l-11.13 31.03-11.14-31.03h-17.55l21.43 53.21h14.22l21.43-53.21h-17.26zM203.8 10.37l-.19-.45H188.9l-22.49 53.21H183l3.22-8.23H206l3.2 8.23h16.9zm-12.58 31.8l4.92-12.58L201 42.17zM120.72 9.92H106L90.2 47.33l-9.65-14 20.57-23.41H82.25L65.23 30l-.3-30H49.21l.2 41.42c-2.48-7.33-10.89-10.26-19.86-12.23-7.53-1.73-8.74-2.71-8.72-4.55 0-1.56 1.76-2.52 4.55-2.52h.15a24.18 24.18 0 0 1 14.11 4.38l.58.4 8.49-11.26-.59-.47c-5.67-4.47-12.27-6.42-22.06-6.53h-.4C12.9 8.63 4.28 15.49 4.17 25.94 4 37.47 14 40.71 25 43.26c7.2 1.68 8.5 2.78 8.49 4.47a2.17 2.17 0 0 1-1.23 1.94 8.08 8.08 0 0 1-4.24.79c-7.88-.08-13.78-1.74-18-5.07L9.44 45 0 55.55l.59.51c5.8 5.1 14.79 7.75 26.73 7.88h.47c6.48 0 12-1.54 15.9-4.45a15.38 15.38 0 0 0 5.76-8.33l.06 11.94h15.72V49.54l4.38-4.87 12.65 18.44h17.83l3.23-8.21h19.79l3.21 8.23h16.89l-22.3-52.76zm-12.4 32.25l4.93-12.58 4.9 12.58zM214 19.62a4.86 4.86 0 1 0-4.84-4.84 4.87 4.87 0 0 0 4.84 4.84zm0-9.22a4.37 4.37 0 0 1 0 8.74 4.37 4.37 0 0 1 0-8.74z"
      }), React.createElement("path", {
        fill: "#fff",
        d: "M213 15.41h1.06l1.23 1.76h1.16l-1.37-1.92a1.51 1.51 0 0 0 1.18-1.54c0-1-.78-1.62-2-1.62H212v5.08h1zm0-2.41h1.26c.63 0 1 .28 1 .8s-.38.81-1 .81H213z"
      }))));
    };

    var renderMenu = function renderMenu(props) {
      return React.createElement("nav", {
        class: "nav-container"
      }, React.createElement("ul", {
        class: "nav-list"
      }, React.createElement("li", {
        class: "nav-item mobile-invisible"
      }, React.createElement("a", {
        class: "nav-link",
        href: "/products"
      }, "products")), React.createElement("li", {
        class: "nav-item mobile-invisible"
      }, React.createElement("a", {
        class: "nav-link",
        href: "/microservices"
      }, "microservices")), React.createElement("li", {
        class: "nav-item mobile-invisible"
      }, React.createElement("a", {
        class: "nav-link",
        href: "/resources"
      }, "resources")), React.createElement("li", {
        class: "nav-item mobile-invisible"
      }, React.createElement("a", {
        class: "nav-link",
        href: "/skavastream/studio/reader/dev/UXUI-TEAM/about"
      }, "about")), React.createElement("li", {
        class: "nav-item mobile-invisible"
      }, React.createElement("a", {
        class: "nav-link",
        href: "/skavastream/studio/reader/dev/UXUI-TEAM/contact"
      }, "contact")), React.createElement("li", {
        class: "nav-item mobile-invisible"
      }, React.createElement("a", {
        class: "nav-link",
        href: "/request"
      }, React.createElement("button", {
        class: "request-btn"
      }, "request a demo"))), React.createElement("li", {
        class: "search-icon nav-item"
      }, React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 56.966 56.966",
        width: "18",
        height: "18",
        fill: "#fff"
      }, React.createElement("path", {
        d: "M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"
      }))), React.createElement("li", {
        class: "nav-item menu-icon"
      }, React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        fill: "#fff",
        width: "35"
      }, React.createElement("path", {
        d: "M491.318 235.318H20.682C9.26 235.318 0 244.577 0 256s9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.259 20.682-20.682 0-11.422-9.259-20.682-20.682-20.682zM491.318 78.439H20.682C9.26 78.439 0 87.699 0 99.121c0 11.422 9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.26 20.682-20.682 0-11.422-9.259-20.682-20.682-20.682zM491.318 392.197H20.682C9.26 392.197 0 401.456 0 412.879s9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.259 20.682-20.682s-9.259-20.682-20.682-20.682z"
      })))));
    };

    return React.createElement("header", {
      className: "header-wrapper"
    }, React.createElement("div", {
      class: "header-container"
    }, renderIcon(), renderMenu()));
  };

  
  ReactDOM.render(
    React.createElement(HeaderComp, null),
    document.getElementById(appendElemName)
  )
}

var Header_React = StudioWidgetV2.extend({
  /*
   * Triggered when initializing a widget and will have the code that invokes rendering of the widget
   * setParentContainer(JQueryParentContainerDOM) - binds event to this container
   * setItemContainer(JQueryItemContainerDOM) - binds studio item events for respective item containers
   * bindEvents() - binds the studio event to this widget
   */
  init: function () {
    var thisObj = this;
    thisObj._super.apply(thisObj, arguments);
    thisObj.render();
    if (typeof Studio != "undefined" && Studio) {
    }
  },

  /*
   * Triggered from init method and is used to render the widget
   */
  render: function () {
    var thisObj = this;
    var widgetProperties = thisObj.getProperties();
    var elem = thisObj.getContainer();
    var items = thisObj.getItems();
    var connectorProperties = thisObj.getConnectorProperties();

    /*
     * API to get base path of your uploaded widget API file
     */
    var widgetBasePath = thisObj.getWidgetBasePath();
    if (elem) {
      var containerDiv = $(".scfClientRenderedContainer", elem);
      if (containerDiv.length) {
        $(containerDiv).empty();
      } else {
        containerDiv = document.createElement("div");
        containerDiv.className = "scfClientRenderedContainer";
        $(elem).append(containerDiv);
      }

      if (
        $("#" + appendElemName, elem).length > 0 &&
        typeof ReactDOM.render === "function" &&
        typeof React === "object"
      ) {
        ReactHeaderCompLoad(this);
        console.log("TEST Header");
      }

      //   var html = "";

      //   $(containerDiv).append(html);

      //   for (var idx = 0; idx < items.length; idx++) {
      //     var itemDiv = document.createElement("div");
      //     itemDiv.innerHTML = "Facets for item " + (idx + 1);
      //     itemDiv.className = "Header_React_ItemContainer";
      //     var facets = items[idx].facets;
      //     for (var facetName in facets) {
      //       var facetDiv = document.createElement("div");
      //       facetDiv.innerHTML = facetName + " : " + facets[facetName];
      //       $(itemDiv).append(facetDiv);
      //     }
      //     $(containerDiv).append(itemDiv);
      //   }
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
    $(window).resize(function () {
      thisObj.sksRefreshEvents();
    });
  }
});
