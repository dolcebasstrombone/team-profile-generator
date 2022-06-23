const generateManager = function() {
    //backticks wrapping html code
    console.log('generateManager was run');
}

const generateEngineer = function() {
    console.log('generateEngineer was run');
}

const generateIntern = function() {
    console.log('generateIntern was run');
}

const empty = []; //all employee html cards that will be made
empty.push(teamArray => teamArray.getRole() === 'Manager').map(manager => generateManager(manager))