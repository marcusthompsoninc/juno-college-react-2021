function Loading() {
    return (
        <div className="row c-loading">
            <div className="col text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" display="block"><g transform="matrix(.8 0 0 .8 10 10)"><path fill="pink" d="M15.359 70A40 40 0 0170 15.359L58.75 34.845A17.5 17.5 0 0034.845 58.75z" stroke="pink" strokeWidth="2"/><path fill="#ff6680" d="M84.641 70A40 40 0 0070 15.359L58.75 34.845a17.5 17.5 0 016.405 23.905z" stroke="#ff6680" strokeWidth="2"/><circle cx="50" cy="50" r="10" fill="#222"/><path strokeLinecap="round" stroke="#222" strokeWidth="5" d="M50 50H15"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;0.10;0.25;0.5;0.60;0.75;1" values="40 50 50; 50 50 50; 40 50 50; 140 50 50; 130 50 50; 140 50 50; 40 50 50"/></path></g></svg>
                <h2>Loading...</h2>
            </div>
        </div>
    )
}

export default Loading;