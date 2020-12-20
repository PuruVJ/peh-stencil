import { Component, h } from "@stencil/core";

@Component({
  tag: "new-location",
  styleUrl: "new-location.scss",
  shadow: true,
})
export class NewLocation {
  render = () => (
    <section class="container">
      <span class="capital">
        Puru Eye Hospital, Mansarovar is moving to a new location{" "}
      </span>{" "}
      <br />
      Address: <b>76/7, Shipra Path, Opp Landscape Park, Mansarovar</b> <br />
      <a
        href="https://goo.gl/maps/X9juPNBUfEuirnLNA"
        rel="noopener noreferrer"
        target="_blank"
      >
        View on Google Maps
      </a>
    </section>
  );
}
