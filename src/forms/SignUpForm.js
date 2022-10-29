function SignupForm(){
    return(
        <div>
            <h1>Sign Up Component</h1>
            <form>
            <div>
            <label>username</label>
            <input type="text" name="username"/>
            </div>
            <div>
                <label>name</label>
                <input type="text" name="name"/>
            </div>
            <div>
                <label>password</label>
                <input type="password" name="password"/>
            </div>
        </form>
        </div>
    )
}

export default SignupForm;