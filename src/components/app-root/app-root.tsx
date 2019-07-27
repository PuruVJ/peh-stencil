import { Component, h } from '@stencil/core';
import "@material/mwc-top-app-bar";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <mwc-top-app-bar>

          <img id="site-logo" slot="navigationIcon" src="../../assets/icon.png" />

        </mwc-top-app-bar>

        <main>
          <app-home></app-home>
        </main>
      </div>
    );
  }
}
