import React,{Component} from "react";
import User from "./User";
class Users extends Component{

    render(){
        const {  users ,deleteuser } =this.props;
        return(
            <div>
                <table className="table table-darkf">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(userr =>{
                                const {id,name,email} =userr;

                                return <User key={id}
                                    id={id}
                                    name={name}
                                    email={email}
                                    deleteuser={deleteuser}
                                />;
                            })
                        }
 
                        </tbody>
                </table>
            </div>
        );
    }
}
export default Users;