import React, { useState, useEffect } from 'react';
import './Repositories.css';
import Card from './Card';

// --- Helper component for the filter buttons ---
const LanguageFilter = ({ selected, onSelect }) => {
    const languages = ['Python', 'JavaScript', 'TypeScript', 'Java', 'Go'];
    return (
        <div className="language-filter">
            <button
                onClick={() => onSelect(null)}
                className={!selected ? 'active' : ''}
            >
                All
            </button>
            {languages.map(lang => (
                <button
                    key={lang}
                    onClick={() => onSelect(lang)}
                    className={selected === lang ? 'active' : ''}
                >
                    {lang}
                </button>
            ))}
        </div>
    );
};


function Repositories() {
    // --- State for the new Good First Issues section ---
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    // --- useEffect to fetch data when the component loads or language changes ---
    useEffect(() => {
        setLoading(true); // Set loading to true whenever we start a new fetch
        setError(null);

        // Base URL for the backend API
        let apiUrl = 'http://localhost:5000/api/gfi';

        // If a language is selected, add it as a query parameter
        if (selectedLanguage) {
            apiUrl += `?language=${selectedLanguage}`;
        }

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setIssues(data.issues || []); // Ensure issues is always an array
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError("Failed to load issues. Is the backend server running?");
                setLoading(false);
            });
    }, [selectedLanguage]); // This effect re-runs whenever selectedLanguage changes

    return (
        <div className='repo-bg'>
            {/* --- Existing Section for Your Club's Main Repositories --- */}
            <div className='my-repos-section'>
                <h2>Our Projects</h2>
                <div className="card-container">
                    <Card url="https://github.com/clubgamma/uneasy" title="Uneasy" desc="A Web Application where you can select and remove multiple followings from your twitter." />
                    <Card url="https://github.com/clubgamma/give-my-resume" title="Give my resume" desc="An online quick and easy-to-use open-source tool which reduces time of creating a resume." />
                    <Card url="https://github.com/clubgamma/Trendit" title="Trendit" desc="This website provides Top Trending keywords for content creators." />
                    <Card url="https://github.com/clubgamma/directlywa" title="DirectlyWA" desc="An app to chat on WhatsApp without saving numbers, with features like quotes, memes, and reminders." />
                    <Card url="https://github.com/clubgamma/All-About-Food" title="All About Food" desc="No description, website, or topics provided." />
                </div>
            </div>

            {/* --- New Section for Good First Issues --- */}
            <div className='gfi-section'>
                <h2>Good First Issues to Contribute</h2>
                <p>Looking for a place to start? Pick an issue and make your first contribution!</p>

                <LanguageFilter selected={selectedLanguage} onSelect={setSelectedLanguage} />
                
                {loading && <p className="loading-message">Loading issues...</p>}
                {error && <p className="error-message">{error}</p>}
                
                {!loading && !error && (
                    <div className="card-container">
                        {issues.length > 0 ? (
                            issues.map((issue, index) => (
                                <Card
                                    key={index}
                                    url={issue.url}
                                    title={issue.title}
                                    desc={`In repository: ${issue.repository}`}
                                />
                            ))
                        ) : (
                            <p>No open "good first issues" found for this language.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Repositories;
