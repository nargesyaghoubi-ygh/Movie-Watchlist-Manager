export default function MovieItem({ movie, onDelete, onToggle }) {
    return (
        <li className="item">
            <div>
                <div className="itemTitle">{movie.title}</div>
                <div className="itemMeta">{movie.genre} - {movie.year}</div>
            </div>
            <span className={movie.watched ? "badge watched" : "badge not-watched"}>
                {movie.watched ? "Watched" : "Unwatched"}
            </span>
            <div className="itemRight">
                <button className="btn" onClick={() => onDelete(movie.id)}>
                    Delete
                </button>
                <button className="btn" onClick={() => onToggle(movie.id)}>
                    {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
                </button>
            </div>



        </li>
    );
}
