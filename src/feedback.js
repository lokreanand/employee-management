import React from 'react'
import { useState } from 'react'

const Feedback = () => {
    const [firstName,setData] = useState('')
    const [lastName,setlastName] = useState('')
    const [gender,setGender]=useState('')
    const [feedback,setFeedback]=useState('')

    const handleFirstName = (e) =>{
      setData(e.target.value)
    }
    const handleLastName = (e)=>{
      setlastName(e.target.value)
    }
    const handleGender = (e)=>{
      setGender(e.target.value)
    }
    const handleFeedback = (e)=>{
      setFeedback(e.target.value)
    }
    const handleSubmit = (e) =>{
      alert("your name is: "+firstName +" "+lastName + " Gender is "+gender + " feedback is "+feedback)
    }
  return (
    <div className="content">
            <div className="container">
              <h1>Feedback Form</h1><br />
               
              <form onSubmit={(e)=>handleSubmit(e)}>
                <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong></p><br />
                <section>
                  <p>
                    <label htmlFor="fname">
                      <span>First Name: </span>
                      <strong><abbr title="required">*</abbr></strong>
                    </label>
                    <input type="text" id="firstName" maxLength="30" required={true} onChange={(e)=>handleFirstName(e)}/>
                  </p>
                  <p>
                    <label htmlFor="lname">
                      <span>Last Name:</span>
                      <strong>&nbsp;</strong>
                    </label>
                    <input type="text" id="lastName" maxLength="30" onChange={(e)=>handleLastName(e)}/>
                  </p>
                  <fieldset>
                    <legend>Gender
                      <strong><abbr title="required">*</abbr></strong>
                    </legend>
                    
                    <ul>
                        <li>
                          <label htmlFor="genderMale">
                            <input type="radio" id="genderMale" name="gender" value="Male" onChange={(e)=>handleGender(e)} required />
                            Male
                          </label>
                        </li>
                        <li>
                          <label htmlFor="genderFemale">
                            <input type="radio" id="genderFemale" name="gender" value="Female" onChange={(e)=>handleGender(e)}/>
                            Female
                          </label>
                        </li>
                    </ul>
                  </fieldset>
                  
                  <p>
                    <label htmlFor="comment">
                      <span>Feedback: </span>
                      <strong><abbr title="required">*</abbr></strong>
                    </label>
                    <textarea id="feedback" row="8" maxLength="100" required={true} onChange={(e)=>handleFeedback(e)}></textarea>
                  </p>
              </section>
              <section>
                <p className="btn">
                  <button type="submit" value="Submit">Submit</button>
                  <button type="reset" >Reset</button>
                </p>
              </section> 
            </form>
      
            </div>
        
          <div className="feedbacks">
            <h1>Comments:</h1>
            <div id="feedback">
            </div>
          </div>
        </div>
        );
}

export default Feedback