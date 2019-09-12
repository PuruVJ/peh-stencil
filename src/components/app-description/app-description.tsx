import { Component, h, State } from "@stencil/core";
@Component({
  tag: 'app-description',
  styleUrls: [
    'app-description.scss',
    '../../global/included-styles.scss'
  ],
  shadow: true
})
export class AppDescription {
  /* connectedCallback() {
    const worker = new Worker('../../assets/worker.js')
    console.log(worker);
  } */

  /* @State() data = [
    {
      background: "../assets/gallery/9-",
    },
    {
      background: "../assets/gallery/1-",
    },
    {
      background: "../assets/gallery/2-",
    },
    {
      background: "../assets/gallery/3-",
    },
    {
      background: "../assets/gallery/6-",
    },
    {
      background: "../assets/gallery/7-",
    },
    {
      background: "../assets/gallery/8-",
    },
    {
      background: "../assets/gallery/10-",
    },
    {
      background: "../assets/gallery/4-",
    },
    {
      background: "../assets/gallery/5-",
    },
    {
      background: "../assets/gallery/9-",
    }
  ]; */
  @State() data: string[] = [
    '../assets/gallery/9-',
    '../assets/gallery/1-',
    '../assets/gallery/2-',
    '../assets/gallery/3-',
    '../assets/gallery/6-',
    '../assets/gallery/7-',
    '../assets/gallery/8-',
    '../assets/gallery/10-',
    '../assets/gallery/4-',
    '../assets/gallery/5-',
    '../assets/gallery/9-'
  ]

  render() {

    return (
      <div class="app-description">
        <h1>ABOUT</h1>
        <div class="description">
          <span>
            <b>Puru Eye Hospital, Lasik Laser & Phaco Surgery Centre</b> is a well recognized name in eye care services in Jaipur.
          <br />
            <br />

            This is owned by <b>Dr Sandeep Vijay (M.S.)</b> who has a vast experience of 25 years in advance eye care.
            <br />
            <br />
            It has two locations: one at <a href="https://goo.gl/maps/1zsRFLb2nvz">Mansarovar</a> and other at <a href="https://goo.gl/maps/W4RbVcZMWzw">Durgapura</a>. The out patient department of each one is well equipped with latest state of the art equipments. Operation theatre of Puru Eye Hospital at Mansarovar is well equipped with latest phaco emulsification machine, operating microscope along with all necessary equipments.

<br />
            <br />
            Dr Sandeep Vijay is specially trained in <b>Micro Incision surgeries, Lasik surgeries & IOL surgeries </b>.At Puru Eye Hospital <b>Minimal Invasive Cataract Surgeries using Multifocal, Toric & premium IOLs</b> are performed routinely. Besides this, he also performs <b>Glaucoma, Squint, Pterygium & Oculoplastic Surgeries</b>.
            <br />
            <br />
            Dr Sandeep Vijay is one of the directors of <a href="https://goo.gl/maps/h2wYaivGa9P2">Jaipur laser Vision Centre Pvt Ltd</a> located at Lal kothi Residential area, near Vidhansabha, Jaipur. Dr Sandeep Vijay is specially trained to perform all refractive surgeries to remove spectacles whether it is <b>Lasik, PRK, epi Lasik or phakic IOLs</b>.
          <br />
            <br />
            Devoted services to the patients is USP of Dr Sandeep vijay & Puru Eye Hospital.
          </span>
        </div>
        <br />
        <div class="divider"></div>

        <div id="timing">
          <h1>Addresses & Timings</h1>

          <h3>Puru Eye Hospital, Mansarovar</h3>
          Morning 9.00 a.m. to 10.45 a.m.<br />
          Evening 4.00 p.m. to 5.30 p.m.<br />
          Sunday- 09.00-11.30 (by appointment)
          <br />
          <h3>Puru Eye Hospital, Durgapura</h3>
          Morning 11.15 a.m. to 1.30 p.m.<br />
          Evening 6.00 p.am. to 8.00 p.m.<br />
          Sunday - Closed
        </div>
        <br />
        <div class="grid-container">
          {this.data.map((img, index) => {
            return (
              <figure class={`grid-image-${index + 1}`} >
                <picture>

                  {/* <source type="image/webp" media="(min-width: 501px)" srcSet={`${img.background}large.webp`}></source>
                  <source type="image/webp" media="(max-width: 500px)" srcSet={`${img.background}small.webp`}></source>
                  <source type="image/jpg" media="(min-width: 501px)" srcSet={`${img.background}large.jpg`}></source>
                  <source type="image/jpg" media="(max-width: 500px)" srcSet={`${img.background}small.jpg`}></source>
                  <img alt={`PEH Gallery image ${index + 1}`} src={`${img.background}large.jpg`} loading="lazy" /> */}
                  <source type="image/webp" media="(min-width: 501px)" srcSet={`${img}large.webp`}></source>
                  <source type="image/webp" media="(max-width: 500px)" srcSet={`${img}small.webp`}></source>
                  <source type="image/jpg" media="(min-width: 501px)" srcSet={`${img}large.jpg`}></source>
                  <source type="image/jpg" media="(max-width: 500px)" srcSet={`${img}small.jpg`}></source>
                  <img alt={`PEH Gallery image ${index + 1}`} src={`${img}large.jpg`} loading="lazy" />
                </picture>
              </figure>
            )
          })}
        </div>
      </div>
    )
  }

} 