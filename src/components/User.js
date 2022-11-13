
import React, { Component } from "react";

class User extends Component{

/* constructor(props) {
    super(props); //1.yol
    this.onDeleteClick=this.onDeleteClick.bind(this) //bind bağlantı kurmak anlamına geliyor.
    //Kendi metodlarını tanımlayacaksan bu fonksiyonları bind ile bağlaman gerekiyor..
} */
onDeleteClick(id,e){  //event olan e sona yazılır
    console.log("id:", id);
    const {deleteuser}= this.props;
    deleteuser(id);
/*console.log("CLicked");
console.log(this) //bunu yazdırabilmek için constructer ile onDeleteClick fonksiyonunu bağlamalısın selam */ 
}

/* onDeleteClick = e=>{  //3.yol //butona bastığında bastığın yerdeki verileri okumak için , bind yapmana gerek kalmaz
    console.log("clicked");
    console.log(this)
} */
 
    render(){
        const {id,name,email}=this.props;
        return(
           
            <tr>
                <th scope="col">{id}</th>
                <th scope="col">{name}</th>
                <th scope="col">{email}</th>
                <th scope="col">
{/*                     <button onClick={this.onDeleteClick} className="btn btn-danger">DELETE</button> */}
                  <button onClick={this.onDeleteClick.bind(this,id)} className="btn btn-danger">DELETE</button>  {/*2.yol */}
                    </th>
                
            </tr>
    
               
            
        );
    }
}
export default User;