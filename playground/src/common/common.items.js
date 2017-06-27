import React from 'react';

const BSList = props => (<ul className='list-group'>{props.children}</ul>)

const ListItem = props => (<li className='list-item'>{props.children}</li>)

export const Items = props => (
    <BSList>
        {
            props.data.map(item => <ListItem key={item.id}>{item.text}</ListItem>)
        }
    </BSList>

);