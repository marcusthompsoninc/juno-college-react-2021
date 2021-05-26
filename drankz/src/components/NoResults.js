function NoResults({ text }) {
    return (
        <div className="c-results no-results" >
            <div className="row">
                <div className="col">
                    <div className="text-center">
                <h3>{ text ? text : "No drink found :("}</h3>
                </div>
                </div>
            </div>
            </div>
    )
}

export default NoResults;