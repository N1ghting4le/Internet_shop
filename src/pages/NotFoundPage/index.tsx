import { Link } from "react-router";

import { routes } from "@/constants/routes";

import { texts } from "./constants";
import classes from "./styles.module.css";

const { ERROR_CODE, MAIN_TEXT, LINK_TEXT } = texts;

export function NotFoundPage() {
  return (
    <main className={classes.main}>
      <div>
        <svg
          className={classes.paper}
          viewBox="0 0 300 300"
          width="300px"
          height="300px"
          role="img"
          aria-label="A piece of paper torn in half"
        >
          <g
            className={classes.paper__outline}
            fill="none"
            stroke="hsl(0,10%,10%)"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(61,4)"
          >
            <g className={classes.paper__top} transform="translate(0,25)">
              <polygon
                className={classes.paper__shadow}
                fill="hsl(0,10%,70%)"
                stroke="none"
                points="0 148,0 0,137 0,187 50,187 148,155 138,124 148,93 138,62 148,31 138"
                transform="translate(-12,12)"
              />
              <rect
                className={classes.paper__tearFill}
                fill="hsl(0,0%,100%)"
                stroke="none"
                x="0"
                y="137"
                width="0"
                height="23px"
              />
              <polygon
                className={classes.paper__fill}
                fill="hsl(0,0%,100%)"
                stroke="none"
                points="0 148,0 0,137 0,187 50,187 148,155 138,124 148,93 138,62 148,31 138"
              />
              <polygon
                className={classes.paper__shadow}
                fill="hsl(0,10%,70%)"
                stroke="none"
                points="137 0,132 55,187 50,142 45"
              />
              <polyline points="137 0,142 45,187 50" />
              <polyline points="0 148,0 0,137 0,187 50,187 148" />
              <g className={classes.paper__lines} stroke="hsl(0,10%,70%)">
                <polyline points="22 88,165 88" />
                <polyline points="22 110,165 110" />
                <polyline points="22 132,165 132" />
              </g>
              <polyline
                className={classes.paper__tear}
                points="0 148,31 138,62 148,93 138,124 148,155 138,187 148"
                stroke-dasharray="198 198"
                stroke-dashoffset="-198"
              />
            </g>
            <g className={classes.paper__bottom} transform="translate(0,25)">
              <polygon
                className={classes.paper__shadow}
                fill="hsl(0,10%,70%)"
                stroke="none"
                points="0 148,31 138,62 148,93 138,124 148,155 138,187 148,187 242,0 242"
                transform="translate(-12,12)"
              />
              <polygon
                className={classes.paper__fill}
                fill="hsl(0,0%,100%)"
                stroke="none"
                points="0 148,31 140,62 148,93 138,124 148,155 138,187 148,187 242,0 242"
              />
              <polyline points="187 148,187 242,0 242,0 148" />
              <g className={classes.paper__lines} stroke="hsl(0,10%,70%)">
                <polyline points="22 154,165 154" />
                <polyline points="22 176,165 176" />
                <polyline points="22 198,94 198" />
              </g>
              <polyline
                className={classes.paper__tear}
                points="0 148,31 138,62 148,93 138,124 148,155 138,187 148"
                stroke-dasharray="198 198"
                stroke-dashoffset="-198"
              />
            </g>
          </g>
        </svg>
      </div>
      <div>
        <h1 className={classes.title}>{ERROR_CODE}</h1>
        <p className={classes.text}>{MAIN_TEXT}</p>
        <Link className={classes.btnLink} to={routes.CATALOG_ROUTE}>
          {LINK_TEXT}
        </Link>
      </div>
    </main>
  );
}
