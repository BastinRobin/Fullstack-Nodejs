first = 10;
second = 45;

/**
 *  + Addition operator
 *  - Subtraction operator
 *  * Multiplication operator
 *  / Division operator
 *  % Modulus
 *  = Assignment
 *  == Is Equal to
 *  && And operator
 *  || Or Operator
 *  != Not Equal
 */

/**
 * Write a program which should print numbers upto 100 which are divisible by 
 * 3 and 5. 
 * 
 * Gates:
 * OR - Any one side should be true
 * AND - Both must be true
 */


/**
 * Variable name = name
 * Value of variable = "Bastin Robins "
 * Size of variable = typeof(name)
 */
name = "Bastin Robins ";

/**
 * What are Arrays
 * 
 */
list_of_items = [name, 'Robin', true, 0, 0.1, false, [], {}, "new world", [], 100];

// console.log(list_of_items[0]);
// console.log(list_of_items[1]);
// console.log(list_of_items[2]);
// console.log(list_of_items[3]);
// console.log(list_of_items[5]);
// console.log(list_of_items[6]);

/**
 * To perform finite repetative tasks
 * by means of loops
 */
// for(i=0; i<list_of_items.length; i++) {
//     console.log(list_of_items[i]);
// }

students = [
    ['Robin', 'Male', 'CSE', 'Age'],
    ['Jack', 'Male', 'Mech', 'Age'], 
    ['Jenny', 'Female', 'IT', 'Age'],
    ['Robin', 'Male', 'CSE', 'Age'],
    ['Jack', 'Male', 'Mech', 'Age'], 
    ['Jenny', 'Female', 'IT', 'Age'],
    ['Robin', 'Male', 'CSE', 'Age'],
    ['Jack', 'Male', 'Mech', 'Age'], 
    ['Jenny', 'Female', 'IT', 'Age'],
    ['Robin', 'Male', 'CSE', 'Age'],
    ['Jack', 'Male', 'Mech', 'Age'], 
    ['Jenny', 'Female', 'IT', 'Age'],
    ['Robin', 'Male', 'CSE', 'Age'],
    ['Jack', 'Male', 'Mech', 'Age'], 
    ['Jenny', 'Female', 'IT', 'Age'],
    ['Robin', 'Male', 'CSE', 'Age'],
    ['Jack', 'Male', 'Mech', 'Age'], 
    ['Jenny', 'Female', 'IT', 'Age'],
    ['Robin', 'Male', 'CSE', 'Age'],
    ['Jack', 'Male', 'Mech', 'Age'], 
    ['Jenny', 'Female', 'IT', 'Age'],
    ['Robin', 'Male', 'CSE', 'Age'],
    ['Jack', 'Male', 'Mech', 'Age'], 
    ['Jenny', 'Female', 'IT', 'Age']
];


// for(i=0; i<students.length; i++) {
//     console.log(students[i][0] + ' is a ' + students[i][1] + ' candidate with ' + students[i][2] + ' experience of age ' + students[i][3]);
// }

// students.forEach(student => {
//     console.log(student[1] + ' is a ' + student[0] + ' candidate with ' + student[2] + ' experience of age ' + student[3]);
// });


console.log(students.length);

students.push(['Tonny', 'Male', 'IT', '40']);

console.log(students.length);

students.unshift(['AA', 'BB', 'CC', 'DD']);

console.log(students);