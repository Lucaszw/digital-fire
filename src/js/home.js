import { el, mount } from "redom";
import _ from "lodash";

import Header from "./header";
import Vision from "./vision";
import Contact from "./contact";
import Arrow from "./arrow";

import isOverlapping from "./utils/overlap";

class Home {
  constructor(navbar) {
    this.container = null;
    this.navbar = navbar;

    document.addEventListener(
      "scroll",
      _.debounce(this.onScroll.bind(this), 20, {
        leading: true,
        trailing: true,
      })
    );
  }

  draw() {
    this.remove();
    this.container = el(".home");
    mount(document.body, this.container);
    this.header = new Header(this.container);
    this.vision = new Vision(this.container, this.navbar);
    this.contact = new Contact(this.container);
    this.arrow = new Arrow();

    this.header.draw();
    this.vision.draw();
    this.contact.draw();
    this.arrow.draw();
  }

  remove() {
    if (this.container) {
      this.container.remove();
      this.container = null;
    }
    if (this.arrow) this.arrow.remove();
  }

  onScroll() {
    if (!this.container) return;
    if (!_.get(this.header, "container")) return;
    let overlapping = isOverlapping(
      this.navbar.container,
      this.header.container
    );
    if (!overlapping) this.navbar.container.classList.add('opaque');
    if (overlapping) this.navbar.container.classList.remove('opaque');
  }
}

export default Home;
