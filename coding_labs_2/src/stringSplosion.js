class StringSplosion{
  constructor(string)
  {
    this.string = string;
  }

  manipulate(){
    let exploded = "";
    let sss = ""
    
    let strExplode = (this.string).split("");
    for(let i=0; i<strExplode.length; i++){
        
      for(let j=0; j<=i; j++){
        exploded+=this.string[j];
      }
      
    }
    return exploded;
  }
}
 