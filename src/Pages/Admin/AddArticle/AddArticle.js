import "./AddArticleStyles.css"
import React from "react";
import AddArticleCompo from "../../../Components/AddArticle/AddArticleCompo";

function AddArticle(){
    return (
        <>
            <div className="addArticle">
                <div className="cadreAddArticle">
                    <div className="hight-level">
                        <h1 className="title-form">Ajouter un article</h1>
                    </div>
                    <hr />
                    <div className="lower-level">
                        <AddArticleCompo/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddArticle;