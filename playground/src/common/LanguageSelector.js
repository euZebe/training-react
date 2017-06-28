import React from 'react';
import { Flag } from './Flag';

const languages = ['fr', 'us', 'ro', 'es', 'po', 'de', 'au', 'ru', 'ch', 'jp'];

export const LanguageSelector = (props) => (
    <div className={props.className} style={{ "textAlign": "center" }}>
        <p>{props.label}</p>
        <Flag country={props.selected} />
        <select
            name="" id="" onChange={(event) => props.updateSelected(event.target.value, props.selectorType)}
            defaultValue={props.selected}
        >
            {languages.map((lang, idx) => <option key={idx} value={lang}>{lang}</option>)}
        </select>
    </div>
)