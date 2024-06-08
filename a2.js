// Require the collegeData module
const collegeData = require('./modules/collegeData');

// Initialize the data
collegeData.initialize()
    .then(() => {
        console.log('Initialization successful');

        // Test getAllStudents function
        return collegeData.getAllStudents();
    })
    .then(students => {
        console.log(`Successfully retrieved ${students.length} students`);

        // Test getAllCourses function
        return collegeData.getAllCourses();
    })
    .then(courses => {
        console.log(`Successfully retrieved ${courses.length} courses`);

        // Test getTAs function
        return collegeData.getTAs();
    })
    .then(tas => {
        console.log(`Successfully retrieved ${tas.length} TAs`);

        // Test getStudentsByCourse function for a specific course code
        return collegeData.getStudentsByCourse('CSD1103');
    })
    .then(studentsByCourse => {
        console.log(`Successfully retrieved ${studentsByCourse.length} students in course CSD1103`);
    })
    .catch(err => {
        console.error(err);
    });
