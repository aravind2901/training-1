import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Sass.scss';
import Child from './child';
import { render } from '@testing-library/react';
//import Myclass from './App.js';

//1.class type

/*class Demo{
  methodone()
  {
      var a=112;
      var b=10;
      var c=a+b;
      document.getElementById('root').innerHTML=c;
    }
    
   }
   var mydemo= new Demo();
   mydemo.methodone();*/

   //2.funtcion type

  /* var a= function()
  {
      var a=10;
      var b=10;
      var c=a+b;
      document.getElementById('root').innerHTML=c;
    }
a();*/

//3.Arrow function type

/*var a= ()=>
{
    var a=10;
    var b=20;
    var c=a+b;
    document.getElementById('root').innerHTML=c;
  }
a();*/





/*var a=(c) =>
{
    var a=10;
    var b=10;
    var d=a+b+c;
    document.getElementById('root').innerHTML=d;
  }
a(20);*/


//4.Arrow function with using "Let and var" data type

/*var n= ()=>
{
    var a=10;
    if(a===10){
      let a=100;
      document.getElementById('root').innerHTML=a;

    }
  
   // document.getElementById('root').innerHTML=a;
  }
n();*/ 


// 5.This is with using JSX code:


/*const newvar=React.createElement('h1',{},"Hai Aravind ......How are you?");
ReactDOM.render(newvar,document.getElementById('root'));*/


  //6.This code is using with JSX:


 /* var mystyle={
   // color:'red',
    textAlign:'center',
    margin: "180px auto",
    //backgroundColor: "#44014C",
    fontSize: "25px"
   

  }


  const newvar= <div style={mystyle}>

     <h1 style={{ color:'red' }}>WELCOME </h1>

     <h2 style={{ color:'blue' }}> Aravind</h2>

     <p style={{ color:'green' }}> <h3>How are you?....My friend.....</h3></p>

     </div>

ReactDOM.render(newvar,document.getElementById('root'));*/



//7.Expression are also using:

/*var mystyle={
  // color:'red',
   textAlign:'center',
   margin: "180px auto",
   //backgroundColor: "#44014C",
   fontSize: "25px"
  

 }

  const newvar= <div style={mystyle}>

     <h1 style={{ color:'red' }}>WELCOME        {1+2+3+4+5+6+7+8+9} </h1>
     </div>
ReactDOM.render(newvar,document.getElementById('root'));*/



// 8.We are using externel style sheet :[index.css  (you go and watch)]

/*var mystyle={
 
   textAlign:'center',
   margin: "180px auto",
}

const newvar= <div style={mystyle}>

<h1 className="one">WELCOME </h1>

<h2 className="two" > Aravind</h2>

<p> <h3 className="three">How are you?....My friend.....</h3></p>

</div>

ReactDOM.render(newvar,document.getElementById('root'));*/  




//9.How to use the function and render function name within <tag>:

//FUNCTION COMPONENT:

/*function Starting1(){
   
  return<h1 style={{ color:'red' }}>Hai Aravind enna life da ethu</h1>
  
}
function Starting2(){
  return<h1 style={{ color:'blue' }}>Hai Kural enna life da ethu</h1>
   
}
function Starting3(){
  return<h1 style={{ color:'green' }}>Hai Sudhar enna life da ethu</h1>
  
}
function Starting4(){
  return<h1 style={{ color:'yellow' }}>Hai Sridhar enna life da ethu</h1>
  
}
function Starting5(){
  return<h1 style={{ color:'purple' }}>Hai Saran enna life da ethu</h1>
  
}

function Aravind(){
  return <div> 
    <Starting1/>
    <Starting2/>
    <Starting3/>
    <Starting4/>
    <Starting5/>
  </div>
  
}
ReactDOM.render(<Aravind/>,document.getElementById('root'));*/




//  10. CLASS COMPONENT:

// 10.1 single class only:

/*class Myclass extends React.Component{
  render(){
    return <h1 style={{ color:'purple' }}>welcome Aravind</h1>
  }
}
ReactDOM.render(<Myclass/>,document.getElementById('root'));*/



/*//10.2 multiple class:

//  without any exports we are using in this part:

class Myclass extends React.Component{
  render(){
    return <h1 style={{ color:'red' }}>welcome Aravind</h1>
  }
}

class Mynewclass extends React.Component{
  render()
  {
    return <div>
    <Myclass/>
     <h1 style={{ color:'purple' }}>welcome Aravind enga vanthu enna learn pannita nee</h1>
    </div>
  }
}
ReactDOM.render(<Mynewclass/>,document.getElementById('root'));*/


/*//  class export from (App.jss)

class Mynewclass extends React.Component
  {
  render()
  {
    return <div>
    <Myclass/>
     <h1 style={{ color:'purple',textAlign:'center' }}>welcome Aravind enga vanthu enna learn pannita nee</h1>
    </div>
  }
}
ReactDOM.render(<Mynewclass/>,document.getElementById('root'));*/




// 11.  REACT props concept:P{single class}


 /* 11.1 class Reactprops extends React.Component
  {
    render()

    {
      return<h1>Learn {this.props.topic} in {this .props.language}</h1>
    }
  }
  ReactDOM.render(<Reactprops topic="React props" language="English "/>,document.getElementById('root'));*/


//  React props used in FUNCTION:   


  /* function Props (props){
    return(
    <div>
       <h1> Hai .....{props.name} </h1>
       <h1> Hai Aravind:ID.....{props.ID} </h1>
    </div>
     
    )
  }
  ReactDOM.render(<Props name ="Aravnd" ID="1000"/>,document.getElementById('root')); */


  // 11.2  Multiclass using: REACT props:


  /*class Reactprops extends React.Component
  {
    render()

    {
      return<h1>Learn {this.props.var.topic} {this.props.var.concept} in {this .props.var.language}</h1>
    } 
  }

    class Reactpropschild extends React.Component
  {
    render()

    {
     // const v="English";  also we are using Object:
     const v={topic:"ReactABC",language:"EnglishABC",concept:"propsABC" }
      return<Reactprops var={v}/>
    }
  }
  ReactDOM.render(<Reactpropschild />,document.getElementById('root'));*/


  // 11.3 Default props concept:


/*class Reactprops extends React.Component
  {
    render()

    {
      return<h1>Learn {this.props.topic} in {this .props.language}</h1>
    }
  }
  Reactprops.defaultProps={topic:"React props",language:"Tamil"};
  ReactDOM.render(<Reactprops topic="React props vs state" language="English " />,document.getElementById('root'));*/


  // 11 REACT State method:

  /*class Reactstate extends React.Component{

    constructor(){

      super(); //calling the state object from this class: 

      this.state={initialvalue:"Welcome Aravind",final:" in my Tutorial"}
    }

     Changevalue = ()=>{
      this.setState({initialvalue:"Welcome FRIENDS"}); //change the initial value in runtime
    }

    render(){
      return <div>
        <h1>{this.state.initialvalue}  {this.state.final}</h1>
        <br/>
        <button type="button" onClick={this.Changevalue}>Change</button>
      </div>
    }
  }
  ReactDOM.render(<Reactstate/>,document.getElementById('root'));*/



  // 13. React LIFECYCLE:


 /* class Lifecycle extends React.Component{
    constructor(){
      super();
      this.state={value:"Welcome",name:"Guys"}
    }
    componentWillMount(){
      alert(" React js LIFECYCLE method "); //it display alert message before render method:  
    }
    Changevalue = () =>{
      this.setState({value:"Next page has been changed"});
    }
    render(){
      return <div>
        <h1> {this.state.value}  {this.state.name}</h1>
        <button type="button" onClick={this.Changevalue}>Change value</button>
        <button type="button" onClick={this.Deletedvalue}>Deleted value</button>
      </div>
    }

    componentDidMount()
    {
      setTimeout(()=>{
        this.setState({value:"Thank you "})},5000); // it display after render method , the value can be change;
      
    }
    componentWillUpdate() //second alert message has been displayed:
    {
      alert("Do you wamt a new update in this page");
    }

    componentDidUpdate() // some updation message are displayed:
      {
      document.getElementById(("mydiv")).innerHTML="NEW VALUE UPDATED SUCCESSFULLY"+ "  " + this.state.value;
    }  


    shouldComponentUpdate()
    {
      return true;// we use false only first alert only working another messages are not working;
    }

    Deletedvalue = () =>
    {
      this.setState({value:"",name:""})
    }

    componentWillUnmount()
    {
      alert("Header Deleted"); // it will deleted the all header messages:
    }
  }

  ReactDOM.render(<Lifecycle/>,document.getElementById('root'));*/



  // 14.Sass concept:


 /* class Sassconcept extends React.Component{
    render(){
      return <div>
        <h1>Hai Aravind......</h1>
        <h2>Welcome to.....</h2>
        <h3>Today class........</h3>
      </div>
    }
  }
ReactDOM.render(<Sassconcept/>,document.getElementById('root'));*/



// 15.React FORM Concept: IMPORTANT CONCEPT LEARN WELL;

/*class Formconcept extends React.Component{
  constructor(){
    super();
    this.state={myname:" ",
                 age:null,
                  errmsg:" "};
  }

  uservalue = (event)=>
  {

    let n = event.target.name;
    let v = event.target.value;
    let err = " ";
    if(n==="age"){
      if(v!=""&&!Number(v)){
        err=<strong style={{color:'red'}}> Invalid value, your Age should be a number</strong>
      }
    }
    //this.setState({myname:event.target.value})     normal event calling method;
    this.setState({errmsg:err})
    this.setState({[n]:v})
  }

  formsubmit= (event)=>
  {
    event.preventDefault();
    alert("your Name"+"....."+this.state.myname+"......"+"your Age"+"...."+this.state.age);
  }
  render()
  {
    return(

    <form onSubmit={this.formsubmit}>

       <h1>Hello.....{this.state.myname}</h1>
       <h2>Your Age.......{this.state.age}</h2>

      <strong style={{color:'blue'}}> Enter your Name.....:</strong>   <input type="text" name="myname" onChange={this.uservalue}/><br/><br/>

      <strong style={{color:'blue'}}> Enter your Age.....:</strong>   <input type="text" name="age" onChange={this.uservalue}/>{this.state.errmsg}<br/><br/>
      
      <input type="Submit" />
    </form>
     
   
    )
  }
}
ReactDOM.render(<Formconcept/>,document.getElementById('root'));*/




//  15. React Hooks:

/* function Reacthooks ()
{
  const [count,updatecount] = useState(0);

  useEffect(() => {
    alert("Hai Hello Aravind")
  })
 
  return(
    <div>
      <p>you clicked the above button {count} times</p>
      <button onClick={()=> updatecount(count + 1)}> Add Me </button>
      <button onClick={()=> updatecount(count - 1)}> Minus Me </button>

    </div>
  );
}

ReactDOM.render(<Reacthooks/>,document.getElementById('root')) */




//  16: props concept using in PARENT and CHILD concept:


/* function Parent (props)
{
  return(

    <div>
     
     <h1> MY NAME....:{props.name}</h1>
     <h1> MY ID....:{props.ID}</h1>
     <Child myskill="HTML , CSS , JAVASCRIPT , REACT JS Developer"></Child>
    </div>
  );
}
ReactDOM.render(<Parent name="Aravind"  ID={1001}/>,document.getElementById('root')); */


//   17. React EVENT handling:


class Eventhandle extends React.Component{
  constructor(props){
    super(props);
    console.log(this)
  }



Eventhandling =()=>
{
console.log("This is my first console page")
console.log(this)
}
Myeventhandling = (e) =>
{
  alert('WELCOME GUYS IN THIS PAGE');
  console.log(e)
}



render()
{
  return(
    <div>
      <button onClick={this.Eventhandling}> CLICK ME</button>
      <button onClick={this.Myeventhandling}> AGAIN CLICK ME</button>
    </div>
  )
}
}
ReactDOM.render(<Eventhandle/>,document.getElementById('root'));