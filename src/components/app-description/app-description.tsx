import { Component, h } from "@stencil/core";

@Component({
  tag: 'app-description',
  styleUrl: 'app-description.scss',
  shadow: true
})
export class AppDescription {

  render() {

    return (
      <div class="app-description">
        <h3>ABOUT</h3>
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
        <br/>
        
        <h3>Address & Timings</h3>
      </div>
    )
  }

} 