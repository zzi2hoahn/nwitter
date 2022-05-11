import { dbService } from "fbase"
import { useState } from "react"

const Home = () => {
  const [nweet, setNweet] = useState()

  const onSubmit = async (e) => {
    e.preventDefault()
    await dbService.collection("nweet").add({
      text: nweet,
      createdAt: Date.now()
    })
    setNweet("")
  }

  const onChange = (e) => {
    e.preventDefault()
    const {
      target: { value }
    } = e
    setNweet(value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={nweet}
        onChange={onChange}
        type="text"
        placeholder="What's on your mind"
        maxLength={120}
      />
      <input type="submit" value="Nweet" />
    </form>
  )
}

export default Home