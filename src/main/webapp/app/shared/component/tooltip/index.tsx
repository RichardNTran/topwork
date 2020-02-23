import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const OverlayTooltip = props => (
  <OverlayTrigger key={props.key} placement={props.placement} overlay={<Tooltip id={`tooltip-${props.key}`}>{props.title}</Tooltip>}>
    {props.children}
  </OverlayTrigger>
);

export { OverlayTooltip };
