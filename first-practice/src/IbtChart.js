class IbtChart extends React.Component() {
  constructor(props){
    super(props)
    const {userLanguage, coinId } = this.props

    window.itb_widget = window.itb_widget || {
      init: t => {
        const e = document.createElement("script");
        e.async = !0;
        e.type = "text/javascript";
        e.src = "https://app.intotheblock.com/widget.js";
        console.log(e.src)
        e.onload = function () { window.itbWidgetInit(t) };
        document.getElementsByTagName("head")[0].appendChild(e)
      }
    };
    window.itb_widget.init({
      apiKey: "qF3NHH8aqG4ePiLGNqbjF1Wu3xVq2eF010Mwdtx3",
      language: userLanguage,
      options: {
        tokenId: coinId,
        loader: true,
        tokenSummary: {
          showTotalExchangesInflows: true,
          showTotalExchangesOutflows: true
        }
      }
    })
  }


}