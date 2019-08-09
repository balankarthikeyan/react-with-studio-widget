var appendElemName = 'root-address';
function ReactAddressCompLoad() {
    var AddressComp = () => {
        var renderList = function renderList() {
            return React.createElement(React.Fragment, null, React.createElement("address", {
              className: "address-wrapper"
            }, React.createElement("span", {
              className: "address-item make-bold"
            }, "Skava World Headquarters"), React.createElement("span", {
              className: "address-item"
            }, "555 Mission Street"), React.createElement("span", {
              className: "address-item"
            }, "Suite 1950"), React.createElement("span", {
              className: "address-item"
            }, "San Francisco, CA 94105"), React.createElement("span", {
              className: "address-item telephone-number"
            }, "(877)554-2176")), React.createElement("address", {
              className: "address-wrapper"
            }, React.createElement("span", {
              className: "address-item make-bold"
            }, "Skava NYC"), React.createElement("span", {
              className: "address-item"
            }, "One World Trade Center"), React.createElement("span", {
              className: "address-item"
            }, "285 Fulton St., 79A"), React.createElement("span", {
              className: "address-item"
            }, "New York, NY 10007"), React.createElement("span", {
              className: "address-item telephone-number"
            }, "(646)254-3198")), React.createElement("address", {
              className: "address-wrapper"
            }, React.createElement("span", {
              className: "address-item make-bold"
            }, "Skava Atlanta"), React.createElement("span", {
              className: "address-item"
            }, "2180 Satellite Blvd."), React.createElement("span", {
              className: "address-item"
            }, "Suite 400"), React.createElement("span", {
              className: "address-item"
            }, "Duluth, GA 30097"), React.createElement("span", {
              className: "address-item telephone-number"
            }, "(770)281-8709")), React.createElement("address", {
              className: "address-wrapper"
            }, React.createElement("span", {
              className: "address-item make-bold"
            }, "Skava Europe"), React.createElement("span", {
              className: "address-item"
            }, "10, Upper Bank Street"), React.createElement("span", {
              className: "address-item"
            }, "Canary Wharf, London E14 5NP"), React.createElement("span", {
              className: "address-item"
            }, "+44(756)452-6020")), React.createElement("address", {
              className: "address-wrapper"
            }, React.createElement("span", {
              className: "address-item make-bold"
            }, "Skava India, CBE"), React.createElement("span", {
              className: "address-item"
            }, "Module: 108"), React.createElement("span", {
              className: "address-item"
            }, "1st Floor Tidel Park,IT/ITES ELCOT SEZ"), React.createElement("span", {
              className: "address-item"
            }, "Vilankurichi Village Civil Aerodrome Post, Coimbatore-641014")));
          };
        
          return React.createElement("section", {
            className: "address-list-wrapper"
          }, React.createElement("div", {
            className: "address-list-container"
          }, renderList()));
    }
    
    ReactDOM.render(
        React.createElement(AddressComp, null),
        document.getElementById(appendElemName)
    )
}

ReactAddressCompLoad()