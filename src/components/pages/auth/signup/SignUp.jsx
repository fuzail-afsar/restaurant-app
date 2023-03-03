import './signup.css'

const SignUp = () => {
  return( 
    <div className="container">
  {/* <h1>SignUp</h1> */}
  <form action="" style={{border: '1px solid #ccc'}}>
  <div class="container">
    <h4><b>Create Account</b></h4>
    {/* <p>Please fill in this form to create an account.</p>
    <hr/> */}

    {/* <label for="psw-repeat"><b>First Name</b></label> */}
    <input type="text" placeholder="First Name" name="psw-repeat" required/>

    {/* <label for="psw-repeat"><b>Last Name</b></label> */}
    <input type="text" placeholder="Last Name" name="psw-repeat" required/>

    {/* <label for="email"><b>Email</b></label> */}
    <input type="text" placeholder="Enter Email" name="email" required/>

    {/* <label for="psw"><b>Password</b></label> */}
    <input type="password" placeholder="Enter Password" name="psw" required/>


   {/* <label>
      <input type="checkbox" checked="checked" name="remember" style={{marginBottom:'15px'}}/> Remember me
    </label>  */}

    {/* <p>By creating an account you agree to our <a href="#" style={{color:'dodgerblue'}} >Terms & Privacy</a>.</p> */}

    <div className="clearfix">
      {/* <button type="button" className="cancelbtn">Cancel</button> */}
      <button type="submit" className="signupbtn">Create</button>
    </div>
    <br></br>
  </div>
  <br/>
</form >
</div>)};
export default SignUp;

