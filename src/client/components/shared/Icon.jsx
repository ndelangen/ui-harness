import _ from "lodash";
import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";
import { ICONS } from "../../../images";



/**
 * An icon of the system.
 */
@Radium
export default class Icon extends React.Component {
  styles() {
    const icon = ICONS[this.props.name];
    let base = {
      Image: [ icon["1x"], icon["2x"], icon.width, icon.height ],
      opacity: this.props.opacity
    };

    // An "absolute" position may have been passed in (optional).
    if (this.props.absolute) {
      base.Absolute = this.props.absolute;
    } else {
      base.position = "relative";
      base.display = "inline-block";
    }

    return css({ base: base });
  }


  handleClick(e) {
    const handler = this.props.onClick;
    if (_.isFunction(handler)) { handler(e); }
  }


  render() {
    return (
      <div
        style={ this.styles().base }
        onClick={ this.handleClick.bind(this) }/>
    );
  }
}

// API -------------------------------------------------------------------------
Icon.propTypes = {
  name: PropTypes.oneOf(_.keys(ICONS)).isRequired,
  absolute: PropTypes.string,
  opacity: PropTypes.number,
  onClick: PropTypes.func,
};
Icon.defaultProps = {
  opacity: 1
};
