var inquirer = require("inquirer");
var fs = require("fs");

var readMeGenerator = new Promise(function (resolve, reject) {
    resolve(inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of your application (this will be the title of your README)?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a description of your application"
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation instructions"
        },
        {
            type: "input",
            name: "usage",
            message: "Please describe how your application is used"
        },
        {
            type: "input",
            name: "contribution",
            message: "Please provide details on contribution guidelines."
        },
        {
            type: "input",
            name: "contribution",
            message: "Please provide details on contribution guidelines.",
            choices: [
                "Academic Free License v3.0",
                "Apache license 2.0",
                "Artistic license 2.0",
                "Boost Software License 1.0",
                "BSD 2-clause 'Simplified' license",
                "BSD 3-clause 'New' or 'Revised' license",
                "BSD 3-clause Clear license",
                "Creative Commons license family",
                "Creative Commons Attribution 4.0",
                "Do What The F*ck You Want To Public License",
                "European Union Public License 1.1",
                "GNU General Public License family",
                "ISC",
                "Microsoft Public License",
                "MIT",
                "Mozilla Public License 2.0"
            ]
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub Username"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address"
        },
           
    ])
    )
});


readMeGenerator.then(function(data){
    const md = `
   
`;
    fs.writeFile('README.md', md, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Success!');
    });
})