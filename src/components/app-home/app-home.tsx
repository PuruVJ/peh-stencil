import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss",
  shadow: false,
  scoped: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <picture>
          <source
            type="image/webp"
            media="(min-width: 501px)"
            srcSet="../../assets/banner-large.webp"
          ></source>
          <source
            type="image/webp"
            media="(max-width: 500px)"
            srcSet="../../assets/banner-small.webp"
          ></source>
          <source
            type="image/jpg"
            media="(min-width: 501px)"
            srcSet="../../assets/banner-large.jpg"
          ></source>
          <source
            type="image/jpg"
            media="(max-width: 500px)"
            srcSet="../../assets/banner-small.jpg"
          ></source>
          <img
            alt="Puru Eye Hospital front view"
            id="banner"
            src="../../assets/banner.jpg"
          />
        </picture>

        <app-description></app-description>
      </div>
    );
  }
}
