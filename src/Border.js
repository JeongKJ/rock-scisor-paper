import Screen from "./Screen";

export default function Border({ name, record, result, round }) {
    const sum = record;
    const num = record[record.length - 1];
    return (
        <div className="minicontain">
            <h2>{name}</h2>
            <Screen num={num} />
            <h2>{result[round-2]}</h2>
            <h2>결과</h2>
            <p>{result.join(' , ')}</p>
        </div>
    );
}