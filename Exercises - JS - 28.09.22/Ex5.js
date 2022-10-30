class MtSchool {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
  static addStudent(name_1, age_1, hobby_1) {
    return new MtSchool(name_1, age_1, hobby_1);
  }
  static remove(removeStudent) {
    delete removeStudent.name;
    delete removeStudent.age;
    delete removeStudent.hobby;
  }
}
let stu1 = MtSchool.addStudent("sasha", 21, "run");
let stu2 = new MtSchool("tamara", 28, "read");
console.log(stu1);
MtSchool.remove(stu1);
console.log(stu1);
console.log(stu2);
