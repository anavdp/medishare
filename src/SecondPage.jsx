  import React from 'react';
  import ReactDOM from 'react-dom';
  import {Toolbar, Page, Button, BackButton} from 'react-onsenui';

  export default class SecondPage extends React.Component {
    pushPage() {
      this.props.navigator.pushPage({component: SecondPage});
    }

    popPage() {
      this.props.navigator.popPage();
    }


    render() {
      return (
        <Page>
          <div style={{"boxSizing":"border-box", "backgroundColor":"black", "height":"56px","padding":"0px 24px","display":"flex","justifyContent":"space-between","transition":"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","fontFamily":"Roboto,sans-serif","position":"fixed","zIndex":"1101","width":"100%","top":"0px","boxShadow":"0px 1px 8px rgba(0, 0, 0, 0.3)"}}>
            <div>
              <button style={{"border":"10px none","boxSizing":"border-box","display":"inline-block","fontFamily":"Roboto,sans-serif","cursor":"pointer","textDecoration":"none","margin":"0px","outline":"medium none","fontSize":"0px","fontWeight":"inherit","position":"relative","overflow":"visible","transition":"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","width":"235px","height":"50px","background":"rgba(0, 0, 0, 0) none repeat scroll 0% 0%"}}>
                <img style={{"width":"220px","marginTop":"0px"}} src="images/MediShare.png" alt="Logo"/> 
              </button>
              <button style={{"border":"10px none","boxSizing":"border-box","display":"inline-block","fontFamily":"Roboto,sans-serif","cursor":"pointer","textDecoration":"none","margin":"0px","outline":"medium none","fontSize":"0px","fontWeight":"inherit","position":"relative","overflow":"visible","transition":"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","width":"50px","height":"50px","background":"rgba(0, 0, 0, 0) none repeat scroll 0% 0%", "marginLeft":"1200px"}}>
                  <img style={{"width":"40px","marginTop":"0px"}} src="images/magnifying-glass.png" alt="Logo"/> 
              </button>
            </div>
          </div>
          <div>
            <button>
              <div>
                
              </div>
            </button>
          </div>
           <div>
            <div style={{"height":"64px","width":"100%"}}></div>
              <div style={{"margin":"0 auto","width":"90%"}}>
                <div className="grid grid__gutters grid__1of2 grid__space-around animate-top">
                  <div className="grid-cell animate-top" style={{"maxWidth":"530px","minWidth":"280px"}}>
                    <div>
                      <div style={{"color":"rgba(0, 0, 0, 0.87)","backgroundColor":"rgb(255, 255, 255)","transition":"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","boxSizing":"border-box","fontFamily":"Roboto,sans-serif","boxShadow":"0px 3px 10px rgba(0, 0, 0, 0.16), 0px 3px 10px rgba(0, 0, 0, 0.23)","borderRadius":"2px","height":"68px","width":"100%"}}>
                        <div>
                          <span style={{"height":"100%","width":"100%","position":"absolute","top":"0px","left":"0px","overflow":"hidden","pointerEvents":"none","zIndex":"1"}}></span>
                          <div style={{"marginLeft":"0px","padding":"20px 56px 20px 72px","position":"relative"}}>
                            <svg style={{"display":"block","color":"rgba(0, 0, 0, 0.87)","fill":"rgb(117, 117, 117)","height":"24px","width":"24px","transition":"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","position":"absolute","top":"4px","margin":"12px","right":"4px","MozUserSelect":"none"}} viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="3.2"></circle>
                              <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
                            </svg>
                            <div style={{"display":"inherit"}}>
                                <div size="36" style={{"color":"rgb(255, 255, 255)","backgroundColor":"#91B23D","display":"inline-flex","alignItems":"center","justifyContent":"center","fontSize":"18px","borderRadius":"50%","height":"36px","width":"36px","position":"absolute","top":"8px","left":"16px","MozUserSelect":"none"}}>U</div>
                            </div>
                            <span style={{"color":"rgb(189, 189, 189)","cursor":"text"}}> Tienes algún medicamento que solicitar o compartir? </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>                                    
          </div>
         <div style={{"marginTop":"717px", "boxSizing":"border-box", "backgroundColor":"black", "height":"56px","padding":"0px 24px","display":"flex","justifyContent":"space-between","transition":"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","fontFamily":"Roboto,sans-serif","position":"fixed","zIndex":"1101","width":"100%","top":"0px","boxShadow":"0px 1px 8px rgba(0, 0, 0, 0.3)"}}>
            <div style={{"display":"inherit", "textAlign":"center"}}>
              <div>
              </div>
              <div>
              </div>
              <div className="grid grid__gutters grid__1of2 grid__space-around animate-top">
                  <div className="grid-cell animate-top" style={{"maxWidth":"530px","minWidth":"280px"}}>
              <div size="36" style={{"color":"rgb(255, 255, 255)","backgroundColor":"#91B23D","display":"inline-flex","alignItems":"center","justifyContent":"center","fontSize":"18px","borderRadius":"50%","height":"36px","width":"36px","position":"absolute","top":"8px","left":"16px","MozUserSelect":"none"}}>+</div>
            </div>
          </div>
              <div>
              </div>
              <div>
              </div>
          </div>
        </div>
        </Page>
      );
    }
  }