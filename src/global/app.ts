import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCRipple } from "@material/ripple";

/*App bars */
document.querySelectorAll('.mdc-top-app-bar').forEach(appBar => new MDCTopAppBar(appBar))

/*Icon Buttons */
document.querySelectorAll('.mdc-icon-button').forEach(iconButtonRipple => new MDCRipple(iconButtonRipple))
