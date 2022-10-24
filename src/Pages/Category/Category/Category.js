import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCards from '../../Shared/NewsSummaryCards/NewsSummaryCards';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This is Category has news: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCards
                    key={news._id}
                    news={news}
                ></NewsSummaryCards>)
            }
        </div>
    );
};

export default Category;