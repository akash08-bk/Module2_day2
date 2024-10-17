function printstudentDetails(studentid,studentcourse,studentsemester){
    console.log(`studentid:${studentid}`)
    console.log(`studentcourse:${studentcourse}`)
    console.log(`studentsemester:${studentsemester}`)
}
function calculateMarks(html,css,js){
    const totaklMarks=html+css+js;
    const percentage=(totalmarks/ 300)*100;
    return{totalmarks,percentage};
}
function printstudentreport(studentid,studentcourse,studentsemester,html,css,js){
    studentDetails(studentid,studentcourse,studentsemester)
    const {totalmarks,percentage}=calculatemarks(html,css,js)
console.log(`marks:html:${html},css:${css},js:${js}`);
console.log(`totalmarks:${marks}/300`);
console.log(`percentage:${percentage.tofixed(2)}%`);
}
report('1BM20EC013','COMPUTER SCIENCE','SEMESTER 2',85,90,88)
report('1BM20EC013','INFORMATION SCIENCE','SEMESTER 3',78,82,80)
report('1BM20EC013','MECHANICAL ENGINEER','SEMESTER 5',92,89,94)