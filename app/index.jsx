// var React = require('react');

import {TableCtrl} from './components/Table'
import {CardCtrl} from './components/Card'
import {React} from 'reactjs'
import {Model} from './models'



React.initializeTouchEvents(true)

class _App {

  render() {
    return (
      <div className="table-container">
        <CardCtrl ctx={new Model()} body={TableCtrl}/>
        <CardCtrl ctx={new Model()} body={TableCtrl}/>
        <CardCtrl ctx={new Model()} body={TableCtrl}/>
        <CardCtrl ctx={new Model()} body={TableCtrl}/>
      </div>
    );
  }
}

export var App = React.createClass(_App.prototype);

var renderApp = () =>
  React.renderComponent(<App />, document.getElementById('react-app'));

renderApp();

/*


*/

