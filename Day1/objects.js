
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
    dept: 'EEE',
    gender: 'male'
};

student4 = {
    fname: 'Sam',
    lname: 'Hans',
    dept: 'CSE',
    gender: 'female'
};

student5 = {
    fname: 'krik',
    lname: 'Robin',
    dept: 'MECH',
    gender: 'female'
};

students = [student1, student2, student3, student4, student5];


// students.forEach(student => {
//     console.log(student['fname'], student['lname'], student['dept'], student['gender']);
// });


console.log(Object.keys(student1));
console.log(Object.values(student1));
