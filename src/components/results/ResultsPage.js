import React from 'react';
import EachCard from './EachCard';
import '../../styling/Results.css';

function ResultsPage(props) {
    return (
        <main className="main-body">
            {!props.hits ? (
                <p className="alert">loading...</p>
            ) : (
                <div className="wrapper">
                    {props.hits.map(item => {
                        return <EachCard key={item.id} {...item} saved={false} />;
                    })}
                </div>
            )}
        </main>
    );
}

export default ResultsPage;
