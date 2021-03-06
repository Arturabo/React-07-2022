import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function LisaToode() {
  const nimiRef = useRef();
  const [s6num, m22raS6num] = useState("");

  const lisaUusToode = () => {
    console.log(nimiRef.current.value);
    // if    <- kui on tõsi, siis läheb ühte koodiblokki     === kas vasak pool võrdub parema poolega
    // else  <- kui EI OLE tõsi, läheb teise koodiblokki
    if (nimiRef.current.value === "") {
      m22raS6num("Toodet ei saa lisada kui nimi on tühi");
    } else {
      //m22raS6num("Toode " + nimiRef.current.value + " edukalt lisatud");
      let tooted = localStorage.getItem("tooted");
      console.log(tooted); // null
      tooted = JSON.parse(tooted) || [];
      console.log(tooted); // []
      tooted.push(nimiRef.current.value);
      console.log(tooted); //['asada']
      tooted = JSON.stringify(tooted);
      console.log(tooted);//'["asdad"]'
      localStorage.setItem("tooted", tooted);
      m22raS6num(`Toode ${nimiRef.current.value} edukalt lisatud`);
      //localStorage.setItem("tooted", nimiRef.current.value);
    }
  }

  return ( 
    <div>
      <Link to="/">
        <button>Tagasi avalehele</button>
      </Link>
      <br />
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={() => lisaUusToode()}>Sisesta</button> <br />
      <div>{s6num}</div>
    </div>
   );
}
// 1. võta localStorage-st kõik eelnevad väärtused
  //              localStorage.getItem("VÕTI");
  // 2. võta jutumärgid ära
  //              JSON.parse(array);
  // 3. lisa uus toode juurde
  //              array.push(ref.väärtus);
  // 4. pane jutumärgid tagasi
  //              JSON.stringify(array)
  // 5. pane localStorage-sse uuenenud kujul tagasi
  //              localStorage.setItem("VÕTI", array);
export default LisaToode;