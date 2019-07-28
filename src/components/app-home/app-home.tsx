import { Component, h } from '@stencil/core';

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
        <br/>
        <br/>
        <app-description></app-description>
      </div>
    );
  }
}
