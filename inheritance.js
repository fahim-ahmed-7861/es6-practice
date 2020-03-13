class parent
{
    constructor()
    {
       this.fathername="Farhad Ahmed";
    }
}

class child extends parent{

    constructor(name)
    {
        super();

        this.name=name;
    }

   getfullname()
   {

      return this.fathername+" "+this.name;
   }

}

const a=new child("SHAKIB");

const b=new child("FAHIM");

console.log(b.getfullname());

console.log(a,b);

