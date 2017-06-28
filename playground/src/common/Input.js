import React from 'react'

export const Input = (props) =>
    (
        <div>
            <label htmlFor='translatorInput'>{props.label}</label>
            <input id='translatorInput' name='translatorInput' className="form-control" placeholder="text to translate"
                   onChange={(event) => props.handleInputChange} />
        </div>
    )

