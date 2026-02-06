import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import MovieList from './Components/MovieList';
import MovieForm from './Components/MovieForm';
import Summary from './Components/Summary';

function createID() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function App() {

    const [movies, setMovies] = useState([
        { id: createID(), title: "Interstellar", genre: "Sci-Fi", year: 2014, watched: true },
        { id: createID(), title: "Home Alone", genre: "Comedy", year: 1990, watched: false },
    ])

    const total = movies.length;
    const watched = movies.filter(m => m.watched).length
    const unwatched = movies.filter(m => !m.watched).length
    const showWarning = total > 0 && unwatched === 0 ;


    const [filter, setFilter] = useState("All");
    const visibleMovies =
        filter === "All" ? movies : movies.filter((m) => m.watched === (filter === "Watched"))
    function handleAddMovie(data) {
        const newMovie = { id: createID(), ...data };
        setMovies((prev) => [newMovie, ...prev])
    }


    function handleDeleteMovies(id) {
        setMovies((prev) => prev.filter((e) => e.id !== id));
    }

    function handleToggleWatch(id) {
        setMovies((preMovies) => preMovies.map((movie) => movie.id === id ? { ...movie, watched: !movie.watched } : movie))
    }

    return (
        <div className='page'>
            <header className="header">
                <div>
                    <h1 className="title">Movie Watchlist Manager</h1>
                    <p className="subtitle">Your personal Movielist</p>
                </div>
            </header>
            <Summary
                total={total}
                watched={watched}
                unwatched={unwatched}
                warning={showWarning}
            />
            <Card title={"Add Movies"}>
                <MovieForm onAddMovie={handleAddMovie}></MovieForm>
            </Card>


            <Card title={"Movies"}
                right={
                    <select className="input" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Watched">Watched</option>
                        <option value="Unwatched">Unwatched</option>

                    </select>
                }
            >
                <MovieList movies={visibleMovies} onDeleteMovies={handleDeleteMovies} onToggleWatch={handleToggleWatch}></MovieList>
            </Card>
        </div>
    )
}

export default App
