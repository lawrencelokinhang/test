import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { FadeLoader} from 'react-spinners';

const override = css`
    display: flex;
    margin: 30 auto;
    border-color: rgba(0, 0, 0, 0.54);
`;

class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <FadeLoader
          css={override}
          sizeUnit={"px"}
          size={35}
          color={'rgba(0, 0, 0, 0.54)'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default LoadingSpinner