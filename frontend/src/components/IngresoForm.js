import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function IngresoForm (){

    return(

      
        <Form>
            <label className="name-tamaño">
                Name: 
                <input type="text" /*value={this.state.value} onChange={this.handleChange}*/ />
            </label>
            &nbsp;
            <input type="submit" value="Submit" id="myBtn" placeholder="What's ya name?"/>
        </Form>
       

    )
}

export default IngresoForm;

// class MyForm extends React.Component {
//     //for state you MUST have a constructor
//     //as well as super()
//     //remember to pass in props
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
      
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
    
//     handleChange(event) {
//       //handles change in the input's value
//       this.setState({value: event.target.value});
//     }
    
//     handleSubmit(event) {
//       //display message and name to user
//       ReactDOM.render(<h1>Hello, {this.state.value}</h1>, document.getElementById('userInfo'));
//       event.preventDefault(); 
//     }
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//             <label>
//                 Name: 
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//             </label>
//             &nbsp;
//             <input type="submit" value="Submit" id="myBtn" placeholder="What's ya name?"/>
//           </form>
//       );
//     }
//   }
//   //now render your form
//   ReactDOM.render(<MyForm />, document.getElementById('myApp'));