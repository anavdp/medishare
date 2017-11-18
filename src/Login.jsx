	import React from 'react';
	import ReactDOM from 'react-dom';
	import {Toolbar, Page, Button} from 'react-onsenui';

	import SecondPage from './SecondPage'

	export default class MainPage extends React.Component {
	  pushPage() {
	    this.props.navigator.pushPage({component: SecondPage});
	  }

	  render() {
	    return (
	      <Page id='login'>
	       <head>
	<link rel="stylesheet" type="text/css" href="login.css"/>
	</head> 
		<section style={{textAlign: 'center'}}>
			<div style={{"color":"rgba(0, 0, 0, 0.87)","backgroundColor":"transparent","transition":"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","boxSizing":"border-box","fontFamily":"Roboto,sans-serif","borderRadius":"0px","minHeight":"370px","width":"450px","margin":"auto","textAlign":"center","display":"block", "marginTop":"35px"}}>
			<div>
				<img style={{"width":"450px","marginTop":"35px"}} src="images/MediShare.png" alt="Logo"/> 
			</div>
				<div style={{paddingTop: '70px'}}>
					<div style={{marginTop: '15px'}}>
						<input style={{"width":"82%", "height":"30px"}} modifier='underbar' placeholder="Usuario" float/>
					</div>
					<div style={{marginTop: '15px'}}>
						<input style={{"width":"82%", "height":"30px", }} type="password" modifier='underbar' placeholder="Contraseña" float/>
					</div>
			        	<div style={{textAlign: 'center', marginTop: '15px'}}>          		
						<Button style={{"width":"85%", "height":"50px","paddingTop":"9px", "backgroundColor":"#91B23D"}} onClick={this.pushPage.bind(this)}>Iniciar Sesión</Button>
			        </div>
			        <div style={{display: 'flex', justifyContent: 'space-around', "marginTop":"20px"}}>
				        <button style={{"border":"10px none","boxSizing":"border-box","display":"inline-block","fontFamily":"Roboto,sans-serif","cursor":"pointer","textDecoration":"none","margin":"0px","padding":"0px","outline":"medium none","fontSize":"inherit","fontWeight":"inherit","position":"relative","height":"36px","lineHeight":"36px","minWidth":"88px","color":"rgba(0, 0, 0, 0.87)","transition":"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","borderRadius":"2px","overflow":"hidden","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"center","MozUserSelect":"none"}} tabindex="4" type="button">
				        	<div style={{"border":"10px none","boxSizing":"border-box","display":"inline-block","fontFamily":"Roboto,sans-serif","cursor":"pointer","textDecoration":"none","margin":"0px","padding":"0px","outline":"medium none","fontSize":"inherit","fontWeight":"inherit","position":"relative","height":"36px","lineHeight":"36px","minWidth":"88px","color":"rgba(0, 0, 0, 0.87)","transition":"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","borderRadius":"2px","overflow":"hidden","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"center","MozUserSelect":"none"}}>
				        		<span style={{"color":"white","position":"relative","paddingLeft":"16px","paddingRight":"16px","verticalAlign":"middle","letterSpacing":"0px","textTransform":"uppercase","fontWeight":"500","fontSize":"14px"}}>Crear Cuenta </span>
				        	</div>
				        </button>	
				        <button style={{"border":"10px none","boxSizing":"border-box","display":"inline-block","fontFamily":"Roboto,sans-serif","cursor":"pointer","textDecoration":"none","margin":"0px","padding":"0px","outline":"medium none","fontSize":"inherit","fontWeight":"inherit","position":"relative","height":"36px","lineHeight":"36px","minWidth":"88px","color":"rgba(0, 0, 0, 0.87)","transition":"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","borderRadius":"2px","overflow":"hidden","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"center","MozUserSelect":"none"}} tabindex="4" type="button">
				        	<div>
				        		<span style={{"color":"white", "position":"relative","paddingLeft":"16px","paddingRight":"16px","verticalAlign":"middle","letterSpacing":"0px","textTransform":"uppercase","fontWeight":"500","fontSize":"14px"}}>Olvidaste tu Contraseña?</span>
				        	</div>
				        </button>    	
			        </div>
			    </div>    
		    </div>    
		</section>
	      </Page>
	    );
  }
}
