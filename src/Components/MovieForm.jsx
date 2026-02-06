import { useState } from "react"
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const GENRE = ["Action", "Comedy", "Horror", "Drama", "Sci-Fi", "Romance", "Western"]
const YEARS = Array.from({ length: 2026 - 1990 + 1 }, (_, i) => 1990 + i);


export default function MovieForm({ onAddMovie }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("Action");
    const [year, setYear] = useState("2025");
    const [error, setError] = useState("")

    function submit() {
        setError("");
        const cleanTitle = title.trim()

        if (!cleanTitle)
            return setError("Movie name is required!")

        onAddMovie({ title: cleanTitle, year, genre })
        setTitle("");
        setGenre("");
        setYear("2025")
    }

    return (
        <div>
            <div className="row">
                <TextInput
                    label={"Movie Name"}
                    value={title}
                    onChange={setTitle}
                    placeholder={"e.g., Harry Patter"}
                ></TextInput>

                <SelectInput
                    label={"Genre"}
                    value={genre}
                    onChange={setGenre}
                    options={GENRE}
                ></SelectInput>

                <SelectInput
                    label={"Year"}
                    value={year}
                    onChange={setYear}
                    options={YEARS}
                ></SelectInput>
            </div>
            {error ? <p className="error">{error}</p> : null}
            <button className="btn primary" onClick={submit}>Add Movie</button>

        </div>
    )
}