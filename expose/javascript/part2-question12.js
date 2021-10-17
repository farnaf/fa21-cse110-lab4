let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() {console.log('Hello!');},
    'Favorite Teacher':{
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

// A
console.log(student.name)
// B
console.log(student['Grad Year'])
// C
student.greeting()
// D
console.log(student['Favorite Teacher'].name)
// E
console.log(student.courseLoad[0])