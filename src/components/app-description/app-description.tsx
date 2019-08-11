import { Component, h, State } from "@stencil/core";
import { Utilities } from "../../service";
@Component({
  tag: 'app-description',
  styleUrls: [
    'app-description.scss',
    '../../global/included-styles.scss'
  ],
  shadow: true
})
export class AppDescription {
  @State() mobileScreen = new Utilities().isMobileScreen;

  @State() data = [
    {
      background: "../assets/gallery/9-large.jpg",
      styles: {
        gridColumn: '1/3',
        gridRow: '1/3'
      },
      stylesMobile: {
        gridColumn: '1 / span 1',
        gridRow: '1 / span 1'
      }
    },
    {
      background: "../assets/gallery/1-large.jpg",
      styles: {
        gridColumn: '3 / span 1',
        gridRow: '1 / span 1'
      },
      stylesMobile: {
        gridColumn: '1 / span 1',
        gridRow: '1 / span 1'
      }
    },
    {
      background: "../assets/gallery/2-large.jpg",
      styles: {
        gridColumn: '4 / span 1',
        gridRow: '1 / span 1'
      },
      stylesMobile: {
        gridColumn: '1 / span 1',
        gridRow: '1 / span 1'
      }
    },
    {
      background: "../assets/gallery/3-large.jpg",
      styles: {
        gridColumn: '5 / span 1',
        gridRow: '1 / span 1'
      },
      stylesMobile: {
        gridColumn: '1 / span 1',
        gridRow: '1 / span 1'
      }
    },
    {
      background: "../assets/gallery/6-large.jpg",
      styles: {
        gridColumn: '3 / span 1',
        gridRow: '2 / span 1'
      },
      stylesMobile: {
        gridColumn: '1 / span 1',
        gridRow: '1 / span 1'
      }
    },
    {
      background: "../assets/gallery/7-large.jpg",
      styles: {
        gridColumn: '4 / span 1',
        gridRow: '2 / span 1'
      },
      stylesMobile: {
        gridColumn: '1 / span 1',
        gridRow: '1 / span 1'
      }
    },
    {
      background: "../assets/gallery/8-large.jpg",
      styles: {
        gridColumn: '5 / span 1',
        gridRow: '2 / span 1'
      },
      stylesMobile: {
        gridColumn: '1 / span 1',
        gridRow: '1 / span 1'
      }
    },
    {

      background: "../assets/gallery/10-large.jpg",
      styles: {
        gridColumn: '1 / span 1',
        gridRow: '3 / span 2'
      },
      stylesMobile: {
        gridColumn: '1 / span 1',
        gridRow: '1 / span 1'
      }
    },
    {

      background: "../assets/gallery/4-large.jpg",
      styles: {
        gridColumn: '2 / span 1',
        gridRow: '3 / span 2'
      },
      stylesMobile: {
        gridColumn: '1 / span 1',
        gridRow: '1 / span 1'
      }
    },
    {

      background: "../assets/gallery/5-large.jpg",
      styles: {
        gridColumn: '3 / span 1',
        gridRow: '3 / span 2'
      }
    },
    {

      background: "../assets/gallery/9-large.jpg",
      styles: {
        gridColumn: '4 / span 2',
        gridRow: '3 / span 2'
      },
      stylesMobile: {
        gridColumn: '1 / span 1',
        gridRow: '1 / span 1'
      }
    }
  ];

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
          Evening 6.00 p.m. to 8.00 p.m.<br />
          Sunday - Closed
        </div>
        <br />
        <div class="grid-container">
          {this.data.map(img => {
            return (
              <figure style={img.styles} >
                <img src={img.background} loading="lazy" style={this.mobileScreen ? img.styles : img.styles} />
              </figure>
            )
          })}
        </div>
      </div>
    )
  }

} 