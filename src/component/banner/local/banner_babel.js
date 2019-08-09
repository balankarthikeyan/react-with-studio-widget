var appendElemName = 'root-banner'
function ReactBannerCompLoad() {
    var BannerComp = () => {
        return React.createElement("section", {
            className: "banner-section"
        }, React.createElement("img", {
            className: "banner-img",
            src: "https://d3k47hcltskkzh.cloudfront.net/31/studio/assets/v1565171471134_150829678/Office_Banner.jpg",
            alt: "Skava banner"
        }));
    }
    ReactDOM.render(
        React.createElement(BannerComp, null),
        document.getElementById(appendElemName)
    )

}

ReactBannerCompLoad()
