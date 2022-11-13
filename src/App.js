import React,{Component} from "react";
import AddUser from "./components/AddUser"; 
import Users from "./components/Users";
//function App() {
class App extends Component {
  /* const title ="It's my first React Project";
  const isorginal= true;
 */
/* state = {   //İşlem yapılmayacaksa bu şekilde de state tanımlayabilirsin
    users: []
  }; */
constructor(props){
  
  super(props);

  this.state={
    users: [
      {
        id:1,
        name:"Nihal Selma KESLER",
        email:"nihalselmakesler@gmail.com"

      },
      {
        id:2,
        name:"Ahmet KESKİN",
        email:"keskin@gmail.com"

      },
      {
        id:3,
        name:"Mert AKAR",
        email:"akar@gmail.com"

      }
    ]
  }
 this.deleteuser=this.deleteuser.bind(this);
 this.addUser=this.addUser.bind(this);
}
deleteuser(id){
  let updateduser = this.state.users;
  updateduser =updateduser.filter(user => user.id !==id);
  this.setState({
    users:updateduser
  })

}
addUser(newUser){
  let updatedUser=this.state.users;
  updatedUser.push(newUser);
  this.setState({
    users:updatedUser
  });
}
render(){
  return (
    //JSX Formatı
  <div className="container">
    {/* <h5>{title}</h5>
    <label htmlFor="name">Name</label>
    {
      isorginal ? <p>Yes! I designed it</p> : <p>No! I copied it</p>
    }
    <p className="lead">This is sample text</p> */}

    <p className="headwrite" style={{marginTop:"8px"}}>USER APP</p>
    <hr/>
    <AddUser addUser={this.addUser}/> 
    <hr/>
    <Users deleteuser={this.deleteuser} users= {this.state.users}/>

  
      
    </div>
  );
}
}

export default App;
