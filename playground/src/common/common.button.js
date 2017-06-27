import React from 'react';

export const Button = (props) => (<button onClick={props.fetch}>{props.children || 'Default'}</button>);

