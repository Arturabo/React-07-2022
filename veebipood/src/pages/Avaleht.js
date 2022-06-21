import { useState } from "react";
import { Link } from "react-router-dom";
function Avaleht() {
    //ALGVÄÄRTUS --> mis on muutuja väärtus lehele tulles
    //Muutuja--> muutuv väärtus(sõnum, kogusumma, number, sisselogitud kasutaja)
    //Muudamuutujua --> funktsioon mis muudab muutujat
    const [muutuja, funktsioonMisMuudabMuutujat] = useState("algväärtus")
    return (
        <div>
            <div>AVALEHT</div>
            <Link to="/ostukorv">
                <button>ostukorvi</button>
            </Link>
            <div>{muutuja}</div>
            { muutuja === "uus väärtus" && <div>Väärtust on muudetud</div>}
            <button onClick={() => funktsioonMisMuudabMuutujat("uus väärtus") }>Pane uus väärtus</button>
            <button onClick={() => muudaK6ik() }>Pane kõigile uus väärtus</button>
        </div> );

export default Avaleht;