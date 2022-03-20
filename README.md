# javaScriptPractice-final-task

This is the final assignment for Platzi's Practical JavaScript course.

In this project you will find a form to add professional data
as they are:
- Name
- Country
- Profession
- etc...

## Parts of the project

By entering information on the form at the bottom of the document,
the view of the general results will be updating in the following lines,

- Income: sum of the salaries received by the users or in this case the professionals
- %SNS: average expressed as a percentage of the total medical insurance that is deducted from professionals,
- %Retirements: average expressed as a percentage of the totality of the retirement plan that is deducted from professionals,

## Other project features

In addition to displaying the data described above, the project has the characteristic of displaying them
by profession

## Start the project in production mode

1. Clone the repository with git clone
2. Install the necessary dependencies with npm install
3. In the patterns property of the WebpackCoppyPlugin plugin in the webpack.config.js file, in the first specific rule and in the "to:" property, the route in which the useFetchApi hook makes the calls to the JSON files is configured , this route (without the starting point and without taking the content after the last slash) is the value that you must declare as environment variable API_URL in the .env file
4. Run the command npm run start