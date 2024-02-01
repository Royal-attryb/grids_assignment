import '../styles/Box.css';

export default function Box ({heading, color, cls}) {
    // console.log(`box ${color}`);
    console.log(cls);
    return (
        <div className={`box ${color} ${cls}`}>
            <p>{heading}</p>
        </div>
    );
}