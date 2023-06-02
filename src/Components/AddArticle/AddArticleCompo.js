import React, { useState } from 'react';
import axios from 'axios';
import "./AddArticleStylesCompo.css"
import apiUrl from "../../config";

const ArticleForm = () => {
    const [Title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('Title', Title);
        formData.append('content', content);
        formData.append('photo', photo);

        try {
            const response = await axios.post(`${apiUrl}/admin/article/create`, formData, {
                headers: {
                    'Authorization': 'bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'multipart/form-data'
                },
            });

            console.log(response.data);

            // Reset form fields
            setTitle('');
            setContent('');
            setPhoto(null);
        } catch (error) {
            // Handle error here
            console.error(error);
        }
    };

    return (
        <form className="addArticleForm" onSubmit={handleSubmit}>
            <div className="addArticleFormBis">
                <div className="formComponents">
                    <label className='label-form-article' htmlFor="title">Titre:</label>
                    <input
                        className='input-form-article'
                        type="text"
                        id="Title"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="formComponents">
                    <label className='label-form-article' htmlFor="photo">Image:</label>
                    <input
                        className='input-form-article input-file'
                        type="file"
                        id="photo"
                        accept="image/*"
                        onChange={(e) => setPhoto(e.target.files[0])}
                    />
                </div>
            </div>

            <div className='content-add-article-form'>
                <label className='label-form-article' htmlFor="content">Contenu:</label>
                <textarea
                    className='input-form-article-text'
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>
            <button className='sub-article' type="submit">Poster l'article</button>
        </form>
    );
};

export default ArticleForm;
