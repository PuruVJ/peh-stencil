import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "app-description",
  styleUrl: "app-description.scss",
  shadow: false,
  scoped: true,
})
export class AppDescription implements ComponentInterface {
  // data: number[] = [9, 1, 2, 3, 6, 7, 8, 10, 4, 5, 9];

  render() {
    return (
      <div class="app-description">
        <new-location></new-location>
        <h1>ABOUT</h1>
        <div class="description">
          <span>
            <b>Puru Eye Hospital, Lasik Laser & Phaco Surgery Centre</b> is a
            well recognized name in eye care services in Jaipur.
            <br />
            <br />
            This is owned by <b>Dr Sandeep Vijay (M.S.)</b> who has more than 28
            years of experience in advance eye care.
            <br />
            <br />
            It has two locations: one at{" "}
            <a href="https://goo.gl/maps/1zsRFLb2nvz">Mansarovar</a> and other
            at <a href="https://goo.gl/maps/W4RbVcZMWzw">Durgapura</a>. The out
            patient department of each one is well equipped with latest state of
            the art equipments. Operation theatre of Puru Eye Hospital at
            Mansarovar is well equipped with latest phaco emulsification
            machine, operating microscope along with all necessary equipments.
            <br />
            <br />
            Dr Sandeep Vijay is specially trained in{" "}
            <b>Micro Incision surgeries, Lasik surgeries & IOL surgeries </b>.At
            Puru Eye Hospital{" "}
            <b>
              Minimal Invasive Cataract Surgeries using Multifocal, Toric &
              premium IOLs
            </b>{" "}
            are performed routinely. Besides this, he also performs{" "}
            <b>Glaucoma, Squint, Pterygium & Oculoplastic Surgeries</b>.
            <br />
            <br />
            Dr Sandeep Vijay is one of the directors of{" "}
            <a href="https://goo.gl/maps/h2wYaivGa9P2">
              Jaipur laser Vision Centre Pvt Ltd
            </a>{" "}
            located at Lal kothi Residential area, near Vidhansabha, Jaipur. Dr
            Sandeep Vijay is specially trained to perform all refractive
            surgeries to remove spectacles whether it is{" "}
            <b>Lasik, PRK, epi Lasik or phakic IOLs</b>.
            <br />
            <br />
            Devoted services to the patients is USP of Dr Sandeep vijay & Puru
            Eye Hospital.
          </span>
        </div>
        <br />
        <div class="divider"></div>

        <div id="timing">
          <h1>Addresses & Timings</h1>
          <h3>Puru Eye Hospital, Mansarovar</h3>
          9 a.m. to 1 p.m.
          <br />
          Sunday - 9.30 a.m. to 11.30 a.m.
          <br />
          <h3>Puru Eye Hospital, Durgapura</h3>
          5 p.m. to 7 p.m.
          <br />
          Sunday - Closed
        </div>
        <br />
        <div class="grid-container">
          {new Array(6)
            .fill("x")
            .map((_, i) => i + 1)
            .map((img, index) => {
              const imgURL = `../../assets/gallery/${img}`;
              return (
                <figure
                  style={{
                    background: `#8400ff`,
                    borderRadius: "0.75rem",
                    paddingTop: "75%",
                  }}
                >
                  <picture>
                    <img
                      alt={`PEH Gallery image ${index + 1}`}
                      data-src={`${imgURL}.jpg`}
                      loading="lazy"
                      data-gallery={index + 1}
                      class="lazyload"
                    />
                  </picture>
                </figure>
              );
            })}
        </div>
      </div>
    );
  }
}
