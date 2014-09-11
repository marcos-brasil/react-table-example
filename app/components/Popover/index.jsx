import {React} from 'reactjs'

import {preRender} from '../utils'

var _popover_count = 0


class _FilterPopup {
  render() {
    return (
      <div id={this.props.ctx.popover.id} style={{position: 'absolute'}}>
        <span rel="popover"> </span>
      </div>
    );
  }
}

export var FilterPopup = React.createClass(_FilterPopup.prototype);

export function popoverListHandler (state, fn) {

  function content () {
    return preRender(fn())
  }

  return {
    placement: state.position || 'top',
    html: true,
    content: content,
  }
}


export function fixPopoverPosition (state) {
  var targetOffset = $(state.popover.node).offset()
  var targetWidth = $(state.popover.node).width()

  var tableOffset = $(`#${state.id}`).offset()

  var popoverOffset = $(`#${state.popover.id} .popover`).offset()
  var popoverWidth = $(`#${state.popover.id} .popover`).width() || (targetWidth * 1.3)

  var win = $(window).width()
  if (!state.isFilterUp) {return}

  var cssObj = {
    top: targetOffset.top,
  }


  var tableLeftOffset = tableOffset.left
  var targetLeftOffset = targetOffset.left
  var popoverLeftOffset = popoverOffset ? popoverOffset.left : 0


  var leftOffset = targetLeftOffset + (targetWidth/2)
  var leftCorrection = (tableLeftOffset*0.4) + (popoverWidth/2)

  if (leftOffset >= leftCorrection) {
    cssObj.left = leftOffset
  }
  else {
    cssObj.left = leftCorrection
  }

  var rightOffset = (win - (tableLeftOffset*0.4)) - (popoverWidth/2)

  if (cssObj.left >= rightOffset) {
    cssObj.left = rightOffset
  }

  $(`#${state.popover.id}`).css({
    top: cssObj.top,
    left: cssObj.left,
  })
}
