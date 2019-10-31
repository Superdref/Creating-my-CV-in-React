import React from 'react';
import Article from './Article';

const Section = ({ title, articles }) => {
    return (
        <section>
            <h3>{title}</h3>
            {
                articles.map((article) =>{
                    return <Article {...article} />;
                })
            }
            
        </section>
    );
};

export default Section;