class Zionet {
  constructor(officeLocation, teachers, courses, students) {
    this.officeLocation = officeLocation;
    this.teachers = teachers;
    this.courses = courses;
    this.students = students;
  }
  getOfficeLocation() {
    console.log(this.officeLocation);
  }
}
