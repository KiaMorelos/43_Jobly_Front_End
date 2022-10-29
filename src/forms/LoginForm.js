function LoginForm(){
    return(
        <div>
            <h1>Login Component</h1>
            <form>
            <div>
            <label>username</label>
            <input type="text" name="username"/>
            </div>
            <div>
                <label>password</label>
                <input type="password" name="password"/>
            </div>
        </form>
        </div>
    )
}

export default LoginForm;