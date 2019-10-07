import { Component, h, Element, Build } from '@stencil/core';
import { MDCTopAppBar } from "@material/top-app-bar";
// import { MDCRipple } from "@material/ripple";

@Component({
  tag: 'app-root',
  styleUrls: [
    'app-root.scss',
    '../../global/included-styles.scss'
  ],
  shadow: true
})
export class AppRoot {
  @Element() rootEl: HTMLElement;

  componentDidLoad() {
    if (Build.isBrowser) {
      this.rootEl.shadowRoot.querySelectorAll('.mdc-top-app-bar').forEach(el => new MDCTopAppBar(el));
      // this.rootEl.shadowRoot.querySelectorAll('.mdc-icon-button').forEach(el => new MDCRipple(el));
    }
  }

  render() {
    return (
      <div>
        <header class="mdc-top-app-bar mdc-elevation--z2">
          <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <img alt="PEH logo" id="site-logo" src="../../assets/icon.png" />
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
              <a class="icon-link" href="tel:9414065020">
                <button aria-label="Call" class="mdc-icon-button">
                  <img alt="Call" src="../../assets/icon/outline-call.svg" />
                </button>
              </a>
              <a class="icon-link" href="mailto:vijaydrsandeep@yahoo.co.in">
                <button aria-label="Email" class="mdc-icon-button">
                  <img alt="Email" src="../../assets/icon/outline-email.svg" />
                </button>
              </a>
            </section>
          </div>
        </header>

        <main>
          <app-home></app-home>
        </main>


        <footer >
          Created by <a href="https://twitter.com/PuruVijay14">Puru Vijay</a>
        </footer>
      </div>
    );
  }
}
