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
        <header class="mdc-top-app-bar">
          <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <button class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded">menu</button><span class="mdc-top-app-bar__title">San Francisco, CA</span> </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
              <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Download">file_download</button>
              <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Print this page">print</button>
              <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Bookmark this page">bookmark</button>
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
