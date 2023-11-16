import HTMLFlipBook from 'react-pageflip';

function MyBook(props) {
    return (
        <HTMLFlipBook width={200} height={400} className="HTMLFlipBook">
            <div className="demoPage"><img src="https://images-na.ssl-images-amazon.com/images/I/71DjgMQb3bL.jpg" alt=""/></div>
            <div className="demoPage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXimMunHk1xCeRS-Ba7hN_kwHCO4rcZT0eA&usqp=CAU" alt=""/></div>
            <div className="demoPage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAXo4lsn2swOeiOGldLuwSt1HxFexydTEec3Mp5VNnS1ymqCpMipoz9I-rQr4_lX_heU&usqp=CAU" alt=""/></div>
            <div className="demoPage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXimMunHk1xCeRS-Ba7hN_kwHCO4rcZT0eA&usqp=CAU" alt=""/></div>
        </HTMLFlipBook>
    );
}

export default MyBook