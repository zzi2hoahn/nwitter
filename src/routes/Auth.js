import { useState } from "react"
import { authService, firebaseInstance } from "fbase"

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newAccount, setNewAccount] = useState("true")
  const [error, setError] = useState("")

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event
    if(name === "email") {
      setEmail(value)
    } else if(name === "password") {
      setPassword(value)
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      let data
      if(newAccount) {
        // create newAccount
        data = await authService.createUserWithEmailAndPassword(email, password)
      } else {
        // log in
        data = await authService.signInWithEmailAndPassword(email, password)
      }
      console.log(data);
    } catch(error) {
      setError(error.message)
    }
  }

  const toggleAccount = () => setNewAccount((prev) => !prev)

  const onSocialClick = async (e) => {
    const {
      target: {name}
    } = e
    let provider
    if(name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider()
    } else if(name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider()
    }
    const data = await authService.signInWithPopup(provider)
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="이메일을 입력하세요" required value={email} onChange={onChange} />
        <input name="password" type="password" placeholder="비밀번호를 입력하세요" required value={password} onChange={onChange} />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
      <div>
        <button onClick={onSocialClick} name="google"> Continue with Google</button>
        <button onClick={onSocialClick} name="github"> Continue with GitHub</button>
      </div>
    </div>
  )
}

export default Auth