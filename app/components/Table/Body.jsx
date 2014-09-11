class _BodyCell {
  render() {
    return (
      <td style={{display: 'none'}}>
        {
          this.props.ctx.model[this.props.title].map(function(val, key){
            var value = this.props.data[this.props.title][val]
            var elem = <span> </span>

            if (value === true) {value = 'TRUE'}
            if (value === false) {value = 'FALSE'}
            if (value === 0) {value = 0}
            if (!value && (value !== 0) && (value !== '')) {value = 'NULL'}

            if (value === 'NULL') {
              elem = <span className="text-muted">{value} </span>
            }
            else {
              elem = <span>{value}</span>
            }

            return (
              <td key={key} >
                <div className="body-cell">
                  {elem}
                </div>
              </td>
            );
          }.bind(this))
        }
      </td>
    );
  }
}

export var BodyCell = React.createClass(_BodyCell.prototype);

class _BodyView {
  render() {
    return (
      <table className="table-body">
        <tbody>
        {
          this.props.ctx.model.data.map(function(val, key, m){
            // console.log(m[key].state.visible)
            if (!m[key].state.visible) {
              return null
            }

            return (
              <tr key={key}>
                <BodyCell ctx={this.props.ctx} title="name" data={val} />
                <BodyCell ctx={this.props.ctx} title="features" data={val} />
              </tr>
            )
          }.bind(this))
        }
        </tbody>
      </table>
    );
  }
}

export var BodyView = React.createClass(_BodyView.prototype);


/*



*/
