import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';

const PhotoList = props => {
  return (
    <div className="ui items">
      {props.photos.map(photo => {
        return <Photo photo={photo} key={photo.id} user={props.user} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    photos: state.photos
  };
};

export default connect(mapStateToProps)(PhotoList);
