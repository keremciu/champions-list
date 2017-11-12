import React from 'react';
import { SvgIcon } from './styles'

function renderIcon(type) {
  switch (type) {
    /* eslint-disable max-len */
    case 'backArrow': {
      return (
        <g>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </g>
      );
    }

    case 'keyboardArrowRight': {
      return (
        <g>
          <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
          <path d="M0-.25h24v24H0z" fill="none"/>
        </g>
      )
    }

    default: {
      return (
        <g><path d="M0 0h24v24H0z"></path></g>
      );
    }
  }
}

function Icon(props) {
  const { type, viewBox } = props;

  return (
    <SvgIcon
      focusable="false"
      viewBox={viewBox}
    >
      { renderIcon(type) }
    </SvgIcon>
  );
}

Icon.defaultProps = {
  viewBox: '0 0 24 24',
};

export default Icon;