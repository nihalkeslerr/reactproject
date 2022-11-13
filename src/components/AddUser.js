import React,{Component} from "react";

class AddUser extends Component{
    state = {
        name: "",
        email:"" 
    }
    onNameChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
      
    }
    onEmailChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onAddSubmit(e){

        const {addUser} =this.props;
        const {name,email}= this.state;

        const newUser ={
            id : Math.random(),
            name: name,
            email:  email

        };

        addUser(newUser);
        e.preventDefault(); //Sayfanın yenilenmesini önler
    }
    render(){
        const {name,email}= this.state;
        return(
            <div className="card">
                <div className="card-header">Add New User</div>
                <div className="card-body">
                <form className="card-form" onSubmit={this.onAddSubmit.bind(this)}>

                    <div className="form-group">
                        <label htmlFor="name" style={{marginBottom:"8px"}}>Enter Name</label>
                        <input type="text" id="name" className="form-control" name="name" placeholder="Name" value={name} onChange={this.onNameChange.bind(this)}/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="email" style={{marginBottom:"8px",marginTop:"8px"}}>Enter email</label>
                        <input type="text" id="email" className="form-control" name="email" placeholder="Email" value={email} onChange={this.onEmailChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-danger" style={{marginTop:"20px", width: "100%" }}>ADD NEW USER </button>
                    </div>

                </form>
                </div>
            </div>
        );
    }
}
export default AddUser;
 