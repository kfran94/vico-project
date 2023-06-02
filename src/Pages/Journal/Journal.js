import React from 'react';
import axios from 'axios';
import "./Journal.css"
import New from "../../Components/New/New";
import apiUrl from "../../config";

function Journal() {
    const [articles, setArticles] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);

    React.useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${apiUrl}/listArticles`, {
                    params: {
                        page: currentPage,
                        limit: 30
                    },
                });
                const data = response.data;
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


    const rowSize = window.innerWidth < 900 ? 1 : 3;
    const groupedArticles = [];
    let row = [];
    articles.forEach((article, index) => {
        row.push(article);
        if ((index + 1) % rowSize === 0 || index === articles.length - 1) {
            groupedArticles.push(row);
            row = [];
        }
    });


    return (
        <>
            <div className="newsletter">
                {groupedArticles.map((row, rowIndex) => (
                    <div key={rowIndex} className="article-row">
                        {row.map((article) => (
                            <div className="article">
                                <New
                                    className="article-newsletter"
                                    key={article.id}
                                    title={article.Title}
                                    date={article.CreatedAt}
                                    image={article.photo}
                                    content={article.content}
                                    id={article.id}
                                />
                            </div>
                        ))}
                    </div>
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

export default Journal;
