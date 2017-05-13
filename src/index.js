import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';



var Jumbotron = React.createClass({
  propTypes : {
    title : React.PropTypes.string,
    text : React.PropTypes.string,
    href : React.PropTypes.string
  },
  getDefaultProps : function(){
    return {
      title : "default",
      text : "demo",
      href : "http://www.imyy.org"
    }
  },
  render : function(){
    return (
      <div className="container">
        <div className="row">
           <div className="col-md-12">
             <div className="jumbotron">
                 <h1>{this.props.title}</h1>
                 <p>{this.props.text}</p>
                 <p><a className="btn btn-primary btn-lg" href={this.props.href} role="button">Learn more</a></p>
             </div>
           </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<Jumbotron href="http://www.qq.com" title="Hello" text="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information." />, document.getElementById('root'));
