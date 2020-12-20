import { Component, ComponentInterface, h } from "@stencil/core";

interface Image {
  num: number;
  ratio: number;
  color: string;
}

@Component({
  tag: "app-description",
  styleUrl: "app-description.scss",
  shadow: false,
  scoped: true,
})
export class AppDescription implements ComponentInterface {
  // data: number[] = [9, 1, 2, 3, 6, 7, 8, 10, 4, 5, 9];
  data: Image[] = [
    {
      num: 9,
      ratio: 237 / 199,
      color: "9c8d7d",
    },
    {
      num: 1,
      ratio: 116 / 97,
      color: "918d8a",
    },
    {
      num: 2,
      ratio: 116 / 97,
      color: "8b8683",
    },
    {
      num: 3,
      ratio: 116 / 97,
      color: "878380",
    },
    {
      num: 6,
      ratio: 116 / 97,
      color: "98999a",
    },
    {
      num: 7,
      ratio: 116 / 97,
      color: "837a7c",
    },
    {
      num: 8,
      ratio: 116 / 97,
      color: "adaeaa",
    },
    {
      num: 10,
      ratio: 116 / 199,
      color: "806b73",
    },
    {
      num: 4,
      ratio: 116 / 199,
      color: "9a948c",
    },
    {
      num: 5,
      ratio: 116 / 199,
      color: "85817d",
    },
    {
      num: 9,
      ratio: 237 / 199,
      color: "98999a",
    },
  ];

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
            This is owned by <b>Dr Sandeep Vijay (M.S.)</b> who has a vast
            experience of more than 25 years in advance eye care.
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
          {this.data.map((img, index) => {
            const imgURL = `../../assets/gallery/${img.num}-`;
            return (
              <figure
                class={`grid-image-${index + 1}`}
                style={{
                  width: "100%",
                  "padding-top": `${(1 / img.ratio) * 100}%`,
                  background: `#${img.color}`,
                }}
              >
                <picture>
                  <source
                    type="image/webp"
                    media="(min-width: 501px)"
                    data-srcset={`${imgURL}large.webp`}
                  ></source>
                  <source
                    type="image/webp"
                    media="(max-width: 500px)"
                    data-srcset={`${imgURL}small.webp`}
                  ></source>
                  <source
                    type="image/jpg"
                    media="(min-width: 501px)"
                    data-srcset={`${imgURL}large.jpg`}
                  ></source>
                  <source
                    type="image/jpg"
                    media="(max-width: 500px)"
                    data-srcset={`${imgURL}small.jpg`}
                  ></source>
                  <img
                    alt={`PEH Gallery image ${index + 1}`}
                    data-src={`${imgURL}large.jpg`}
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
