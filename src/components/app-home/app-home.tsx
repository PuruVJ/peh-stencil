import { Component, h } from '@stencil/core';
import "@material/mwc-button";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <img id="banner" src="../../assets/banner.jpg" />
      </div>
    );
  }
}
