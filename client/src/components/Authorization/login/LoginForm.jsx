import styles from '../loginAndRegister.module.css';

export default function LoginForm(){
    function onLoginHandler(e){
      e.preventDefault();

      const data = Object.fromEntries(new FormData(e.target));
      console.log(data);
    }

    return(

    <form className={styles['login']} onSubmit={onLoginHandler}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" name='username'/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" name='password'/>

        <button type='submit'>Log In</button>
    </form>
    );
}