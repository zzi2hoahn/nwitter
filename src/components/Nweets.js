import { dbService } from "fbase"
import { useState } from "react"

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false)
  const [newNweet, setNewNweet] = useState(nweetObj.text)

  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?")
    console.log(ok)
    if(ok) {
      console.log(nweetObj.id);
      const data = await dbService.doc(`nweets/${nweetObj.id}`).delete()
      console.log(data);
    }
  }

  const toggleEditing = () => setEditing((prev) => !prev)

  const onChange = (e) => {
    const {
      target: { value }
    } = e
    setNewNweet(value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await dbService.doc(`nweets/${nweetObj.id}`).update({text: newNweet})
    setEditing(false)
  }

  return(
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} value={newNweet} required />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          { isOwner && (
            <>
              <button onClick={onDeleteClick}>delete</button>
              <button onClick={toggleEditing}>edit</button>          
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Nweet