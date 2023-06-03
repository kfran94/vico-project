import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from "../../config";
import "./ListArticleCompoStyles.css"

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


    const fetchArticles = async () => {
        try {
            const response = await axios.get(`${apiUrl}/listArticles?page=${currentPage}`);
            setArticles(response.data.articles);
            setTotalPages(response.data.totalPages);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, [currentPage]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${apiUrl}/admin/article/delete/${id}` ,{
                headers: {
                        'Authorization': 'bearer ' + localStorage.getItem('token'),
                        'Content-Type': 'application/json'

                }
            });
            fetchArticles();
        } catch (error) {
            console.error(error);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Titre de l'article</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {articles.map((article) => (
                    <tr key={article.id}>
                        <td>{article.Title}</td>
                        <td>
                            <i className="fa-solid fa-trash" onClick={() => handleDelete(article.id)}></i>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button className="pagination-btn-list" key={page} onClick={() => handlePageChange(page)}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ArticleList;
