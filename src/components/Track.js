const Track = ({ track, onAdd }) => {
    return (
        <div className="track">
            <img src={track.albumCover} alt={track.title} />
            <div className="track-info">
                <h3>{track.title}</h3>
                <p>{track.artist}</p>
                <p>{track.album}</p>
            </div>
            <button onClick={() => onAdd(track)}>Add to Playlist</button>
        </div>
    );
};

export default Track;