import React, {Component, PropTypes} from 'react'

class RoutePropsContainer extends Component {
  static childContextTypes = {
    routeProps: PropTypes.object.isRequired
  };
  static propTypes = {
    createElement: PropTypes.func.isRequired,
    Component: PropTypes.any.isRequired,
    routeProps: PropTypes.object.isRequired
  };
  getChildContext() {
    const {routeProps} = this.props
    return {routeProps}
  }
  render() {
    const { createElement, Component, routeProps} = this.props
    return createElement(Component, routeProps)
  }
}

export default () => ({
  /* eslint-disable react/display-name */
  renderContainer: (Component, props) => (
    <RoutePropsContainer Component={Component} routeProps={props} />
  )
})
