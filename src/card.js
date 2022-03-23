import React, { Component }  from 'react';

export function Card(props) {
  const {
    id,
    value,
    a0,
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    imgUrl,
    name,
    title,
    action,
    index,
  } = props;

  return (
    <div className="card">
      <div class="pricing py5">
        <div className="container"></div>
      </div>
      <h1>{a0}</h1>
      <h1 class="card-title text-muted text-uppercase text-center">{id}</h1>
      <h4 class="card-price text-center">{value}</h4>
      <h4  ><span style={{marginRight: 6 + 'em'}}>{a1}</span></h4>
      <h4><span style={{marginRight: 6 + 'em'}}>{a2}</span></h4>
      <h4><span style={{marginRight:  + 'em'}}>{a3}</span></h4>
      <h4><span style={{marginRight: 3 + 'em'}}>{a4}</span></h4>
      <h4><span style={{marginRight:  + 'em'}}>{a5}</span></h4>
      <h4><span style={{marginRight:  + 'em'}}>{a6}</span></h4>
      <h4><span style={{marginRight: 1.8 + 'em'}}>{a7}</span></h4>
      <h4><span style={{marginRight: 1 + 'em'}}>{a8}</span></h4>
    </div>
  );
}
export default Card;
