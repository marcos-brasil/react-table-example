import {React} from 'reactjs'


import {BodyView} from './Body'
import {HeadView} from './Head'

import {sorter, createCtxModel, preRender, itemSorter} from '../utils'
import {
  FilterPopup,
  fixPopoverPosition,
  popoverListHandler } from '../Popover'



var _table_count = 0

class _TableCtrl {

  getInitialState () {
    var id = `table-${_table_count}`

    this.store = this.props.ctx.store
    _table_count += 1

    return {
      model: createCtxModel(this.store),
      sortHandler: this.sortHandler,
      filterHandler: this.filterHandler,
      sorted: false,
      isAscendant: false,
      isFilterUp: false,
      id: id,
      popover: {
        id: `${id}-popover`,
        position: 'top',
        node: null,
        first: true,

      }
    }
  }

  _fixPopoverPosition () {

    fixPopoverPosition(this.state)
  }

  filterSelection(evt, id, el) {
    var tmp = id.split('-')

    var pos = this.state.list[id]
    var col = tmp[tmp.length -2]


    if ($(el.children()[0]).hasClass('hide')) {
      $(el.children()[0]).removeClass('hide')
    }
    else {
      $(el.children()[0]).toggle('hide')
      console.log('filter touched', id, el)
    }

    this.store.forEach(function(state, person){
      // cache[state.position] = [person, state]
      if (state.position === parseInt(pos, 10)) {
        state.visible = !state.visible
      }
    }.bind(this))

    this.updateCtxModel()

    // force the a page refresh
    $(window).trigger('resize')

  }

  componentDidMount () {
    // TODO: add a removeListener for this when unmount

    this.state.popover.ops = this.popoverListHandler()

    $(`#${this.state.id} .table-wrap`).scroll(this.updateCtxModel)
    $(window).resize(this.updateCtxModel)

    var touchmove = false;
    $(`#${this.state.id}`).bind('touchmove', function(evt){
      touchmove = true;
    })

    var clickEvt

    if ((typeof window.ontouchend) === 'undefined') {
      clickEvt = 'click'
    }
    else {
      clickEvt = 'touchend'
    }

    $(`#${this.state.id}`).bind(clickEvt, function(evt){

      if (touchmove) {
        touchmove = false
        return
      }

      if ($(evt.target).parent().attr('id') === `#${this.state.popover.id}-list`) {
        // this is <li>
        this.filterSelection(evt, $(evt.target).attr('id'), $(evt.target))
      }

      if ($(evt.target).parent().parent().attr('id') === `#${this.state.popover.id}-list`) {
        // this is <span> or <i>
        this.filterSelection(evt, $(evt.target).parent().attr('id'), $(evt.target).parent())
      }

      if ($(evt.target).parent().parent().parent().attr('id') === `#${this.state.popover.id}-list`) {
        // this is <span> or <i>
        this.filterSelection(evt, $(evt.target).parent().parent().attr('id'), $(evt.target).parent().parent())
      }


    }.bind(this))
  }

  updateCtxModel () {
    this._fixPopoverPosition()


    if (this.state.popover.first) {
      this.state.popover.first = false

    }

    if (this.state.isFilterUp && this.state.sorted) {
      // making sure forcing popover update.
      $(`#${this.state.popover.id} span`).popover('show')
      this.state.sorted = false
    }

    this.setState({
      model: createCtxModel(this.store),
      sorted: this.state.sorted,
      isFilterUp: this.state.isFilterUp,
    })
  }

  sortHandler (evt, col, title) {
    evt.stopPropagation()
    this.state.sorted = true
    this.state.isAscendant = !this.state.isAscendant

    var cache = []
    this.store.forEach((state, person) => {cache.push([person, state])})

    cache.sort(itemSorter(col, title)).forEach(function(pair, index, self){


      if (this.state.isAscendant) {
        pair[1].position = index
      }
      else {
        pair[1].position = self.length - (index + 1)
      }
    }.bind(this))

    this.updateCtxModel()
  }


  popoverListHandler () {
    return popoverListHandler(this.state.popover, function(){
      var cache = []
      var widthValue = 3;

      this.store.forEach(function(state, person){
        cache[state.position] = [person, state]

        var value = person[this.state.popover.collumn]

        if (value === true) {value = 'TRUE'}
        if (value === false) {value = 'FALSE'}
        if (value === 0) {value = 0}
        if (!value && (value !== 0) && (value !== '')) {value = 'NULL'}

        var value = value + ''

        var value = value ? value.length : 0

        if (widthValue < value) {
          widthValue = value
        }
      }.bind(this))

      return (
        <ul id={`#${this.state.popover.id}-list`} className="list-unstyled list-group">
          {
            cache.map(function(pair, index){
              var value = pair[0][this.state.popover.collumn]

              var elem = <div> </div>
              if (pair[1].visible) {
                var padding = '0.7em'
                var checked = <i className="glyphicon glyphicon-ok pull-left"> </i>
              }
              else {
                var padding = '0.7em'

                var checked = <i className="glyphicon glyphicon-ok pull-left hide"> </i>
              }

              this.state.list = this.state.list || {}
              var listId = `#${this.state.popover.id}-${this.state.popover.collumn}-${pair[1].positionOri}`

              this.state.list[listId] = index


              if (value === true) {value = 'TRUE'}
              if (value === false) {value = 'FALSE'}
              if (value === 0) {value = 0}
              if (!value && (value !== 0) && (value !== '')) {value = 'NULL'}

              if (value === 'NULL') {
                elem = <span className="text-muted" style={{
                  "padding-left": padding,
                }}> {value} </span>
              }
              else {
                elem = <span style={{
                  "padding-left": padding,
                }}>{value}</span>
              }

              return (
                <li id={listId} key={index} position={index} style={{width: 8*(widthValue + 2)}} className="list-group-item">
                  {checked} {elem}
                </li>
              )
            }.bind(this))
          }

        </ul>

      )
    }.bind(this))
  }

  filterHandler (evt, node, id) {
    evt.stopPropagation()
    var col = id.replace(`${this.state.id}-`, '')

    this.state.popover.node = node
    this.state.popover.collumn = col


    if (this.state.isFilterUp) {
      $(`#${this.state.popover.id} span`).popover('hide')
      this.state.popover.first = true
    }

    if (this.state.isFilterUp !== id) {

      $(`#${this.state.popover.id} span`).popover(this.state.popover.ops)
      this.state.isFilterUp = id

      // working around some timing issues
      setTimeout(function(){
        $(`#${this.state.popover.id} span`).popover('show')
      }.bind(this), 200)

    }
    else if (this.state.isFilterUp === id) {
      this.state.isFilterUp = false
    }

    // working around some timing issues
    setTimeout(this.updateCtxModel, 190)
    // setTimeout(this.updateCtxModel, 210)
  }

  headHandler () {
    $(`#${this.state.popover.id} span`).popover('hide')
    this.state.isFilterUp = false
    this.updateCtxModel()
  }

  bodyHandler () {

    console.log('body clicked/touched')
  }

  render() {
    return (
      <div id={this.state.id}>
        <FilterPopup ctx={this.state}/>

        <small>
          <samp>
            Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </samp>
        </small>
        <div className="table-wrap" >
          <HeadView ctx={this.state} onClick={this.headHandler} onTouchEnd={this.headHandler}/>
          <BodyView ctx={this.state} onClick={this.bodyHandler} onTouchEnd={this.bodyHandler}/>
        </div>
      </div>

    );
  }
}

export var TableCtrl = React.createClass(_TableCtrl.prototype);



/*


        <li className="list-group-item">00000000000000000000</li>
        <li className="list-group-item">00000000000000000001</li>
        <li className="list-group-item">00000000000000000002</li>
        <li className="list-group-item">00000000000000000003</li>
        <li className="list-group-item">00000000000000000004</li>
        <li className="list-group-item">00000000000000000005</li>


*/
