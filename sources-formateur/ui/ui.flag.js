import React from 'react';

export const Flag = props => (
    <img
        src={"http://www.geonames.org/flags/x/" + props.countryCode + ".gif"}
        width="25" height="25" />
);