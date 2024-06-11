import React from "react";

function Footer(){
    const d = new Date().getFullYear()
    console.log(d)
    return <footer>
    <p>Copyright - {d}</p>
    </footer>
}

export default Footer;