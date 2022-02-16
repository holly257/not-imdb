import React from 'react';
import EachCard from '../results/EachCard';

class SavedPage extends React.Component {

    render() {
        return (
            <main className="inner-main">
                <section id="page-header">
                    <h3 className="title-text">S A V E D</h3>
                    <main className="main-body">
                        {!this.context.saved ? (
                            <p id="nothing-saved">
                                You haven't saved anything yet...try searching first
                            </p>
                        ) : (
                            <div className="wrapper">
                                {this.context.saved.map(item => {
                                    return <EachCard key={item.id} {...item} saved={true} />;
                                })}
                            </div>
                        )}
                    </main>
                </section>
            </main>
        );
    }
}

export default SavedPage;
