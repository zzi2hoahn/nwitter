const Nweet = ({ nweetObj, isOwner }) => {
    const onDeleteClick = () => {
        const ok = window.confirm("삭제하시겠습니까?");
        console.log(ok);
    };
    return (
        <div>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
            <>
            <button>Delete Nweet</button>
            <button>Edit Nweet</button>
            </>
            )}
        </div>
    );
};


export default Nweet;