import Megamenu from "./Megamenu"
import Dropdown from './Dropdown';

/* navigation bar for megamenu, dropdown and links */

function Navigation() {

    return (
        <>
        <div className="nav">
            <Dropdown></Dropdown>
            <Megamenu></Megamenu>
            <div id="links">
                {/* links contain icons and span with className "hide" for hiding the text in css to avoid eslint warning */}
            <a href="http://localhost:3000" name="link" className="pi pi-facebook"><span className="hide">Facebook</span></a>
            <a href="http://localhost:3000" name="link" className="pi pi-instagram"><span className="hide">Instagram</span></a>
            <a href="http://localhost:3000" name="link" className="pi pi-twitter"><span className="hide">Twitter</span></a>
            </div>
        </div>
        </>
        )
    }

export default Navigation