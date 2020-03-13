class student
{
  constructor(value,name)
  {
      this.id=value;
      this.name=name;

      this.versity="Metropolitan University";

  }
}

const std1=new student(10,"Fahim");

const std2=new student(20,"Shojib");

console.log(std1,std2);

console.log(std1.versity);


// node class.js