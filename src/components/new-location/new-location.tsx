import { Component, h } from "@stencil/core";

@Component({
  tag: "new-location",
  styleUrl: "new-location.scss",
  shadow: true,
})
export class NewLocation {
  render = () => (
    <section class="container">
      Puru Eye Hospital, Mansarovar is moving to a new location <br />
      Address: <b>76/7, Shipra Path, Opp Landscape Park, Mansarovar</b> <br />
      <a href="http://bit.ly/3ax122n" rel="noopener noreferrer" target="_blank">
        View on Google Maps
      </a>
    </section>
  );
}
