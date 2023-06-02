import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from "../../config";
import { useParams } from 'react-router-dom';
import './Article.css'


const Article = ({ match }) => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        if (!id) {
            return;
        }

        const fetchArticle = async () => {
            try {
                const response = await axios.get(`${apiUrl}/article/${id}`);
                const data = response.data;
                setArticle(data);
                console.log(data)
            } catch (error) {
                console.error('Erreur lors de la récupération de l\'article:', error);
            }
        };

        fetchArticle();
    }, [id]);

    if (!id) {
        return <div>Aucun ID d'article n'est spécifié</div>;
    }

    if (!article) {
        return <p>Chargement de l'article...</p>;
    }

    const imageURL = apiUrl + article.photo;

    return (
        <div className="article-full">
            <div className="article-full-container">
                <div className="article-full-wrapper">
                    <div className="article-full-header">
                        <h2 className="article-full-title">{article.Title}</h2>
                        <span className="article-full-date"><p className="article-createdAt">Poster le {article.CreatedAt}</p></span>
                    </div>
                    {article.photo && <img className="article-full-image" src={imageURL} alt={article.photo} />}
                    <div className="article-full-content">{article.content}</div>
                </div>
            </div>
        </div>

    );
};

export default Article;
