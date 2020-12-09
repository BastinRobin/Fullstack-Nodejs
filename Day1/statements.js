/**
 * Objects are key value pair data structures
 * 
 */

student1 = {
    fname: 'Bastin',
    lname: 'Robin',
    dept: 'CSE',
    gender: 'male'
};

student2 = {
    fname: 'Jack',
    lname: 'Tommy',
    dept: 'CSE',
    gender: 'male'
};

student3 = {
    fname: 'Mike',
    lname: 'Dion',
    dept: 'IT',
    gender: 'male'
};

student4 = {
    fname: 'Sam',
    lname: 'Hans',
    dept: 'EEE',
    gender: 'female'
};

student5 = {
    fname: 'krik',
    lname: 'Robin',
    dept: 'MECH',
    gender: 'female'
};

students = [student1, student2, student3, student4, student5];



/**
 * Plan 1
 */
// students.forEach(student => {
//     if (student['dept'] == 'CSE') {
//         console.log(student['fname']+ ' has been shifted to another building');
//     } else if (student['dept'] == 'IT') {
//         console.log(student['fname']+ ' has been shifted to another building');
//     } else {
//         console.log(student['fname']+ ' are requested to stay back');
//     }
// });


/**
 * Plan 2
 */
students.forEach(student => {
    if (['CSE', 'IT'].includes(student['dept'])) {
        console.log(student['fname']+ ' has been shifted to another building');
    } else {
        console.log(student['fname']+ ' are requested to stay back');
    }
});