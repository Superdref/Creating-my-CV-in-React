import React from 'react';

const Article = ({ title, company, startDate, endDate, description }) => {
    return(
        <div>
            <div className="row align-items-center">
                <h4 className="col-6">{title}</h4>
                <div className="col-6 text-muted text-right">
                    {company}  |  {startDate} - {endDate} {""}
                </div>
            </div>
            <p>
                {description
                ? description 
                : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse distinctio inventore eligendi quod quo, totam commodi saepe cumque officia nam porro reprehenderit tempora consequuntur suscipit eum deleniti rem doloribus similique."}
            </p>
        </div>
    );
};

export default Article;