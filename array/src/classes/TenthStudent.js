class TenthStudent{
     static passMarks =35;

    constructor(){
        console.log("Inside the constructor");
        this.engMarks =0;
        this.telMarks =0;
        this.hindiMarks =0;
        this.sciMarks =0;
        this.socMarks =0;
        this.mathsMarks =0;
     
       
      
      

    }


    calculateResult = ()=>{
        if(this.engMarks >= TenthStudent.passMarks &&
            this.telMarks >= TenthStudent.passMarks &&
            this.hindiMarks >= TenthStudent.passMarks &&
            this.sciMarks >= TenthStudent.passMarks &&
            this.socMarks >= TenthStudent.passMarks &&
            this.mathsMarks >= TenthStudent.passMarks 

        ){
            console.log("student passed in Tenth")
        }else{
            console.log("student failled in Tenth")
        }
    }
}
export default TenthStudent