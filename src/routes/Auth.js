import { async } from "@firebase/util";
import {authService} from "fbase";
import { useState } from "react";

const Auth = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [newAccount, setNewAccount] = useState(true);
 const [error, setError] = useState("");
   
   const onChange = (event) => {
       const {
           target : { name, value},
       } = event;
       if (name === "email") {
           setEmail(value);
       } else if (name === "Password") {
           setPassword(value);
       }

   };


   const onSubmit = async (event) => {
       event.preventDefault();
       try {
        let data;
       if (newAccount) {
           //creat newAccount
           data = await authService.createUserWithEmailAndPassword(email, password);

       } else {
           //log in
           data = await authService.signInWithEamilAndPassword(email, password);
       }
       console.log(data);
    } catch (error) {
        setError(error.message);
    }
   };
    return (
        <div>
            <form onSubmit={onSumit}>
                <input type="email" placeholder="Email" required value={email} onChange={onChange} />
                <input type="password" placeholder="Password" required  value={password} onChange={onChange} />
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
                {error}
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>

        </div>
    );
};

export default Auth;