import React from 'react';
import PropTypes from 'prop-types';

// const Dataitem = ({dataitem: {KeyFamilyRef, Name }}) => {
const Dataitem = props => {
  const {KeyFamilyRef, Name } = props.dataitem;
  const ds_version = props.dataitem["@version"];
 
  return (
    <div className="card text-center">
      <h4>{KeyFamilyRef.KeyFamilyID}</h4>
      <h5>{Name["#text"]}</h5>
      <h5>version: {ds_version}</h5> 
      <a href="" className="btn btn-dark btn-sm my-1">More</a>
    </div>
  )
}

Dataitem.prototypes = {
  dataitem: PropTypes.object.isRequired
};

export default Dataitem
