import Screen from "./Screen";

export default function Border({ name, record }) {
    console.log(record);
    return (
        <div className="minicontain">
            <h2>{name}</h2>
            <Screen />
            <h2>승</h2>
            <h2>결과</h2>
            <p></p>
        </div>
    );
}