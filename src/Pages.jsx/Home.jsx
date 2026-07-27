import React, { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import { SearchMovies, GetPopularMovies } from "../Services/api";
import "../css/Home.css";

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, SetMovies] = useState([]);
    const [error, SetError] = useState(null);
    const [loading, SetLoading] = useState(false);


    useEffect(() => {

        const LoadPopularMovies = async () => {

            try {

                SetLoading(true);

                const PopularMovies = await GetPopularMovies();

                SetMovies(PopularMovies);

            } catch (err) {

                SetError("Failed to load movies...");

            } finally {

                SetLoading(false);

            }
        }

        LoadPopularMovies();

    }, []);



    const handleSearch = async (e) => {

        e.preventDefault();

        if (!searchQuery.trim()) return;
        if (loading) return;

        SetLoading(true);

        try {


            const SearchResults = await SearchMovies(searchQuery);

            SetMovies(SearchResults);
            SetError(null)

        } catch (err) {
            console.log(err)
            SetError("Failed to search movies...");

        } finally {

            SetLoading(false);

        }

    };


    return (

        <div className="home">

            {/* Background */}
            <div className="hero-background">
                <div className="noise"></div>
            </div>

            <form
                onSubmit={handleSearch}
                className="search-form"
            >

                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button
                    type="submit"
                    className="search-button"
                >
                    Search
                </button>

            </form>

            {error && <div className="error-message">{error}</div>}

            {loading && <p>Loading movies...</p>}

            {error && <p>{error}</p>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">

                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))}

                </div>
            )}

        </div>
    );
};


export default Home;