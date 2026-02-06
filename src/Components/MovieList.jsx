import MovieItem from "./MovieItem";

export default function MovieList({ movies, onDeleteMovies, onToggleWatch }) {
    if (movies.length === 0) {
        return <p className="empty">No movies found. Add one!</p>
    }
    return (
        <ul className="list">
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} onDelete={onDeleteMovies} onToggle={onToggleWatch}></MovieItem>
            ))}
        </ul>
    )

}
