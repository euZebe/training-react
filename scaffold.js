const concepts = [
    'concept-es5',
    'concept-es6',
    'concept-workflow',
    'web-component'
]

const log = (param) => param && console.log(`> ${param} is created`);


const createDir = (param) => {
    require('fs').mkdirSync(param);
    return param;
};


const addNote = (param) => {
    require('fs').writeFileSync(param + '/NOTE.md');
    return param;
}


concepts
    .map(createDir)
    .map(addNote)
    .map(log)
;
