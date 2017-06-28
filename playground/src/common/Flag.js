import React from 'react'

export const Flag = (props) => {
    const country = props.country || 'fr';
    return (
        <img alt=""
             className="img-circle"
             width="35"
             height="35"
             src={`http://www.geonames.org/flags/x/${country}.gif`}
        />
    )
}