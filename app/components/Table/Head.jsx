// var React = require('reactjs');

class _HeadCell {

  getInitialState () {
    return {
      id: `${this.props.ctx.id}-${this.props.value}`
    }
  }

  filterHandler (evt) {
    this.props.ctx.filterHandler(evt, this.getDOMNode(), this.state.id)
  }

  sortHandler (evt) {
    this.props.ctx.sortHandler(evt, this.props.value, this.props.title)
  }

  render() {
    return (
      <div className="head-cell" onClick={this.filterHandler} onTouchEnd={this.filterHandler}>
        {this.props.value}
        <span className="glyphicon glyphicon-sort" onClick={this.sortHandler} onTouchEnd={this.sortHandler}>
        </span>
      </div>
    );
  }
}

export var HeadCell = React.createClass(_HeadCell.prototype);

class _HeadItem {
  render() {
    return (
      <table className="table-head">
        <tr>
          <th colSpan={this.props.ctx.model[this.props.title].length}>
            <div className="head-cell">
              {this.props.title}
            </div>
          </th>
        </tr>
        <tr>
        {
          this.props.ctx.model[this.props.title].map(function(col, key){
            return (
              <th key = {key}>
                <HeadCell ctx={this.props.ctx} value={col}/>
              </th>
            )
          }.bind(this))
        }
        </tr>
      </table>
    );
  }
}

export var HeadItem = React.createClass(_HeadItem.prototype);

class _HeadView {
  render() {
    return (
      <table className="table-head" onClick={this.props.onClick} onTouchEnd={this.props.onTouchEnd}>
        <tr>
          <th>
            <div className="rounded-left">
              <HeadItem ctx={this.props.ctx} title="name" />
            </div>
          </th>
          <th>
            <div className="rounded-right">
              <HeadItem ctx={this.props.ctx} title="features" />
            </div>
          </th>
        </tr>
      </table>
    );
  }
}

export var HeadView = React.createClass(_HeadView.prototype);
