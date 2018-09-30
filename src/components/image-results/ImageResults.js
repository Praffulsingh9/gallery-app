import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridListTile } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import Dialog from '@material-ui/core/Dialog';


class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ''
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridListTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              
            >
              <img src={img.largeImageURL} alt="" />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    
    return (
      <div>
        {imageListContent}
        <Dialog
          
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
        </Dialog>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;