import "./ListArticlesStyles.css"
import React from "react";
import ListArticleCompo from "../../../Components/ListArticleCompo/ListArticleCompo";


function ListArticle(){
    return (
        <>
            <div className="listArticle">
                <div className="cadreListArticle">
                    <div className="hight-level">
                        <h1 className="title-form">Liste des article</h1>
                    </div>
                    <hr />
                    <div className="lower-level">
                        <ListArticleCompo/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListArticle;