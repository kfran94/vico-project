import React from 'react';
import axios from 'axios';
import './NewsletterStyles.css';
import News from "../../Components/News/News";
import apiUrl from "../../config";

function Newsletter() {
    const [articles, setArticles] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);


    React.useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${apiUrl}/listArticles`, {
                    params: {
                        page: currentPage,
                    },
                });
                const data = response.data;
                console.log(data)
                setArticles(data.articles);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Erreur lors de la récupération des articles:', error);
            }
        };

        fetchArticles();
    }, [currentPage]);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <>
            <div className="newsletter">
                {articles.map((article) => (
                    <News
                        key={article.id}
                        title={article.Title}
                        date={article.CreatedAt}
                        image={article.photo}
                        content={article.content}
                    />
                ))}
            </div>

            <div className="pagination">
                <button
                    className='pagination-btn'
                    disabled={currentPage === 1}
                    onClick={handlePreviousPage}
                >
                    Précédent
                </button>
                <span className='nbPage'>{currentPage}</span>
                <button
                    className='pagination-btn'
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                >
                    Suivant
                </button>
            </div>
        </>
    );
}

export default Newsletter;
