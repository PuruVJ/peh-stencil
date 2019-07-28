import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header class="mdc-top-app-bar mdc-elevation--z2">
          <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <img id="site-logo" src="../../assets/icon.png" />
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">

            </section>
          </div>
        </header>

        <main>
          <app-home></app-home>
        </main>
      </div>
    );
  }
}
