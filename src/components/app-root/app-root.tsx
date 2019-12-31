import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrls: [
    'app-root.scss',
    '../../global/included-styles.scss'
  ],
  shadow: true
})
export class AppRoot {
  render() {
    return (

      <ion-app>
        <ion-header>
          <ion-toolbar>
            <img slot="start" alt="PEH logo" id="site-logo" src="../../assets/icon.png" />
            <ion-buttons slot="secondary">
              <ion-button href="tel:9414065020">
                <ion-icon slot="icon-only" src="../../assets/icon/outline-call.svg"></ion-icon>
              </ion-button>
              <ion-button href="mailto:vijaydrsandeep@yahoo.co.in" target="_blank">
                <ion-icon slot="icon-only" src="../../assets/icon/outline-email.svg"></ion-icon>
              </ion-button>
            </ion-buttons>

          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <app-home></app-home>
        </ion-content>
        <br />
        <br />
        <br />
        <br />
        <ion-footer>
          <ion-toolbar>
            Created by <a href="https://twitter.com/PuruVijay14">Puru Vijay</a>
          </ion-toolbar>
        </ion-footer>
        <br />
        <br />
        <br />
      </ion-app>
    );
  }
}
