function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
};

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
};

Student.prototype.addMark = function(mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
};

Student.prototype.addMarks = function(...newmarks) {
    if (this.marks === undefined) {
        this.marks = [...newmarks];
    } else {
        for (let arg of newmarks) {
            this.marks.push(arg);
        }
    }
};

Student.prototype.getAverage = function() {
    let sum = 0;
    for (var i = 0; i < this.marks.length; ++i) {
        sum += this.marks[i];
    }
    return Number((sum / this.marks.length));
};

Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};