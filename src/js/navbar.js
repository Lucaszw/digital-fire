import { el, mount } from "redom";
import navbarHTML from '../html/navbar.html';

class Navbar {
    constructor(parentContainer) {
        this.container = null;
    }
    draw() {
        if (this.container) this.container.remove();
        this.container = el(".navbar", {innerHTML: navbarHTML});
        mount(document.body, this.container);

        this.setupSubnav();
    }
    setupSubnav() {
        // Expand / Collapse Sub Nav
        const expandBtn = this.container.querySelector("#navexpand");
        const collapseBtn = this.container.querySelector("#navcollapse");
        const subnav = this.container.querySelector(".nav-sub");

        expandBtn.onclick = () => {
            expandBtn.style.display = "none";
            collapseBtn.style.display = "block";
            subnav.style.display = "block";
        }
        collapseBtn.onclick = () => {
            expandBtn.style.display = "block";
            collapseBtn.style.display = "none";
            subnav.style.display = "none";
        }
    }
}

export default Navbar;