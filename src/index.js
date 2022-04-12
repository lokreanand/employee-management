import React from 'react';
import ReactDOM from 'react-dom';
import Feedback from './feedback';
import './index.css';

class Fd extends React.Component{
  constructor(props) {
    super(props);
    this.state = {firstName: '',lastName: '',gender: '',comment: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event)  {
    this.setState({firstName: event.target.firstName});
    // this.setState({lastName: event.target.lastName});
    // this.setState({gender: event.target.gender});
    // this.setState({comment: event.target.comment});

  }

  handleSubmit(event) {
    // var radios = document.getElementsByName('gender');
    //   let gender="";
    //   for (let radio of radios)
    //     if (radio.checked) 
    //        gender=radio.value;
    //   let cmnt=new Comment(gender,document.getElementById("firstName").value,document.getElementById("lastName").value,document.getElementById("comment").value);
    //   let person=cmnt["salutation"]+" "+cmnt["firstName"]+" "+cmnt["lastName"]+"&nbsp;says,&nbsp; "+cmnt["text"];
    //   let p='<p style="color: white; border-bottom: 2px solid;">'+person+'</p>';
    //   document.getElementById("feedback").innerHTML=p+document.getElementById("feedback").innerHTML;
    //   for (let radio of radios)
    //     if (radio.checked) 
    //        radio.checked=false;
    //   document.getElementById("firstName").value=""; 
    //   document.getElementById("lastName").value=""; 
    //   document.getElementById("comment").value=""; 
    alert('Name: '+ this.state.firstName)
    event.preventDefault();
  }
    render() {
        return (
            <div class="content">
            <div class="container">
              <h1>Feedback Form</h1><br />
               
              <form onSubmit={this.handleSubmit}>
                <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong></p><br />
                <section>
                  <p>
                    <label for="fname">
                      <span>First Name: </span>
                      <strong><abbr title="required">*</abbr></strong>
                    </label>
                    <input type="text" id="firstName" maxlength="30" required="true" value={this.state.firstName} onChange={(e)=>this.handleChange(e)}/>
                  </p>
                  {/* <p>
                    <label for="lname">
                      <span>Last Name:</span>
                      <strong>&nbsp;</strong>
                    </label>
                    <input type="text" id="lastName" maxlength="30" value={this.state.lastName} onChange={this.handleChange}/>
                  </p>
                  <fieldset>
                    <legend>Gender
                      <strong><abbr title="required">*</abbr></strong>
                    </legend>
                    
                    <ul>
                        <li>
                          <label for="genderMale">
                            <input type="radio" id="genderMale" name="gender" value="Mr." required />
                            Male
                          </label>
                        </li>
                        <li>
                          <label for="genderFemale">
                            <input type="radio" id="genderFemale" name="gender" value="Miss" />
                            Female
                          </label>
                        </li>
                    </ul>
                  </fieldset>
                  
                  <p>
                    <label for="comment">
                      <span>Comment: </span>
                      <strong><abbr title="required">*</abbr></strong>
                    </label>
                    <textarea id="comment" row="8" maxlength="100" required="true" value={this.state.comment} onChange={this.handleChange}></textarea>
                  </p>*/}
              </section>
              <section>
                <p class="btn">
                  <button type="submit" value="Submit">Submit</button>
                  <button type="reset" >Reset</button>
                </p>
              </section> 
            </form>
      
            </div>
        
          <div class="feedbacks" onreadystatechange="false">
            <h1>Comments:</h1>
            <div id="feedback">
            </div>
          </div>
        </div>
        );
      }
}
  
ReactDOM.render(
  <React.StrictMode>
    <Feedback />
  </React.StrictMode>,
  document.getElementById('root')
);
  