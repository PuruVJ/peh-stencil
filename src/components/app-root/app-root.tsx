import { Component, ComponentInterface, h, State } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: false,
  scoped: true
})
export class AppRoot implements ComponentInterface {
  @State() shadow: boolean = false;

  componentDidLoad() {
    document.body.onscroll = () => (this.shadow = !!window.pageYOffset);
  }

  render() {
    return (
      <div id="root-container">
        <header class={{ shadow: this.shadow }}>
          <div id="logo">
            <img src="../../assets/icon.png" alt="PEH Logo" />
          </div>
          <div id="empty-space"></div>
          <div id="tabs">
            <div class="tab">
              <a class="icon-link" href="tel:+9414065020">
                CALL US
              </a>
            </div>
            <div class="tab">
              <a
                class="icon-link"
                target="_blank"
                rel="noopener"
                href="mailto:vijaydrsandeep@yahoo.co.in"
              >
                EMAIL
              </a>
            </div>
          </div>
        </header>
        <main id="main-content">
          <app-home></app-home>
        </main>
        <footer>
          &nbsp; Created by{" "}
          <a href="https://twitter.com/puruvjdev">Puru Vijay</a>
        </footer>
      </div>
    );
  }
}
