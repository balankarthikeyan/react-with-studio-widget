var appendElemName = 'root-aboutInfo'
function ReactAboutInfoCompLoad() {
    var renderMainHeading = () => {
        return React.createElement("h1", {
            className: "main-title"
        }, "About");
    }

    var renderAboutDetail = () => {
        return React.createElement(React.Fragment, null, React.createElement("div", {
            className: "about-wrapper1"
        }, React.createElement("div", {
            className: "common-container about-content"
        }, React.createElement("section", {
            className: "content-with-title founding"
        }, React.createElement("h3", {
            className: "content-heading"
        }, "Founding"), React.createElement("p", {
            className: "main-content"
        }, "Skava was founded by the husband and wife team of Arish Ali and Sudha Varadarajan in 2002. Initially focused on developing mobile retail solutions. Working side by side with major retailers, Skava discovered that many companies were unable to realize their online goals, as their legacy commerce systems were tricky to develop for and harder to innovate on."), React.createElement("p", {
            className: "main-content"
        }, "This gave birth to Skava Commerce, a microservices solution for digital commerce, which allows retailers to rapidly test, build and deploy features for any device, without the friction and difficulties associated with the legacy platforms currently on the market."), React.createElement("p", {
            className: "main-content"
        }, "Skava\u2019s vision for the future became clear: to transform and empower businesses to easily develop and deploy delightful commerce experiences and preserve their brand.")), React.createElement("section", {
            className: "content-with-title our-mission"
        }, React.createElement("h3", {
            className: "content-heading"
        }, "Our Mission"), React.createElement("p", {
            className: "main-content"
        }, "At Skava, we understand the rapid pace of digital commerce transformation. Constantly changing customer behaviors, emerging technologies and a new generation of modern digital experiences must all be answered to stay ahead of the competition."), React.createElement("p", {
            className: "main-content"
        }, "Many companies are still using legacy systems never intended to move as quickly as the modern market requires. The good news is catching up doesn\u2019t mean starting from scratch. Skava\u2019s modern commerce solutions free you from your existing technology with a robust microservices architecture designed to keep pace with your customers and accelerate their digital commerce journey."), React.createElement("p", {
            className: "main-content"
        }, "We\u2019re working together to simplify the way you build fresh customer experiences and bring your ideas to life without the roadblocks of legacy systems."), React.createElement("p", {
            className: "main-content"
        }, "So you can focus on what matters. Your customers.")))), React.createElement("div", {
            className: "about-wrapper2"
        }, React.createElement("div", {
            className: "common-container"
        }, React.createElement("section", {
            className: "content-with-title our-team"
        }, React.createElement("h3", {
            className: "content-heading"
        }, "Our Team"), React.createElement("p", {
            className: "main-content"
        }, "Today, Skava numbers more than 600 people distributed across three continents who are dedicated to our vision: transforming a new generation of modern commerce, fueled by microservices architecture. We are a team of innovators and visionaries, bringing together excellence in e-commerce, retail, engineering, product design, and innovation.")))));
    }

    var AboutInfoComp = () => {
        return React.createElement("main", {
            className: "about-main-container"
        }, renderMainHeading(), renderAboutDetail());
    }
    ReactDOM.render(
        React.createElement(AboutInfoComp, null),
        document.getElementById(appendElemName)
    )

}

ReactAboutInfoCompLoad()
