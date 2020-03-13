import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: false,
  scoped: true
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar>
            <picture>
              <source
                type="image/webp"
                media="(min-width: 501px)"
                srcSet="../../assets/icon-large.webp"
              ></source>
              <source
                type="image/webp"
                media="(max-width: 500px)"
                srcSet="../../assets/icon-small.webp"
              ></source>
              <source
                type="image/jpg"
                media="(min-width: 501px)"
                srcSet="../../assets/icon-large.jpg"
              ></source>
              <source
                type="image/jpg"
                media="(max-width: 500px)"
                srcSet="../../assets/icon-small.jpg"
              ></source>
              <img
                slot="start"
                alt="PEH logo"
                id="site-logo"
                src="../../assets/icon.png"
                loading="lazy"
              />
            </picture>
            <ion-buttons slot="secondary">
              <ion-button href="tel:9414065020">
                <ion-icon
                  slot="icon-only"
                  src="../../assets/icon/outline-call.svg"
                ></ion-icon>
              </ion-button>
              <ion-button
                href="mailto:vijaydrsandeep@yahoo.co.in"
                target="_blank"
              >
                <ion-icon
                  slot="icon-only"
                  src="../../assets/icon/outline-email.svg"
                ></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <app-home></app-home>
          <ion-footer>
            <ion-toolbar>
              &nbsp;
              Created by{" "}
              <a href="https://twitter.com/PuruVijay14">Puru Vijay</a>
            </ion-toolbar>
          </ion-footer>
        </ion-content>
      </ion-app>
    );
  }
}
