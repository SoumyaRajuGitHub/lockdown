import css from 'csz';

export const tabStyles = css`
  &{
    width: 100%;
    display: flex;
    position: relative;
    & > button{
      & {
        position: absolute !important;
        color: #7C7C7C;
        background-color: white;
        padding: 0px !important;
        top: -10px;
        width: 39px !important;
        height: 39px !important;
        right: -12px;
        border: 0px;
        border-radius: 50% !important;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
        &:hover {
          cursor: pointer;
        }
        
      }
      .dark & {
        position: absolute !important;
        color: white;
        background-color: var(--ld-hover);
        padding: 0px;
        top: -10px;
        width: 39px;
        right: -12px;
        border-radius: 50%;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
        &:hover {
          cursor: pointer;
        }
      }
    }
    & .tab{
      width: 40%;
      background-color: #E5E5E5;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      padding: 10px 0px;
      color: #7C7C7C;
      border: 1px solid #999999;
      border-top: 0px;
      transition: 0.5s;
      &.active{
        border-bottom: 0px;
        background-color: #FFF 
        border: 0px;
        .dark &{
          background-color: var(--ld-bg);
          color: white;
        }
      }
      &:first-child{
        border-top-left-radius: 19px;
      }
      &:last-child{
        border-top-right-radius: 19px;
      }
      &:nth-child(3){
        border-top-right-radius: 19px;
      }
      &:nth-child(2){
        width: 20%;
      }
    }
  }
`;
export const reports = css`
  & {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const countryInfoStyles = css`
  .countryInfo.loader {
    background-color: white !important;
    .dark & {
      background-color: var(--ld-bg) !important;
    }
  }
  & {
    background-color: var(--ld-bg);
    color: var(--ld-text);
    padding: 0 16px 16px 16px;
    width: 100%;
    & .ld-font-subheader {
      display: flex;
      justify-content: space-between;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.02em;
      & span:first-child {
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.05em;
      }
    }
  }

  dl {
    margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  h1 {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-bottom: 8px;
  }

  h2 {
    margin-top: 16px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--ld-gray-5);
    &.last {
      padding: 0px;
      padding-top: 4px;
      border-top: 1px solid var(--ld-gray-5);
      border-bottom: 0px;
    }
  }

  .data {
    display: flex;
    flex-wrap: wrap;
  }

  .data-entry {
    font-variant-numeric: tabular-nums;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--ld-gray-5);
    width: 100%;
    &.is-half {
      width: 50%;
    }
    &.is-third {
      width: 33.33%;
    }
  }

  .data-entry dt {
    color: #949494;
    font-size: 14px;
    font-weight: 700;
  }

  .data dd {
    margin-left: 0;
    color: #949494;
    font-size: 16px;
    text-align: left;
  }

  .legend dl {
    display: flex;
    justify-content: space-between;
  }

  .legend-item {
    display: flex;
    align-items: center;
  }

  .legend-item dt {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .legend-item dd {
    font-size: 14px;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.02em;
    margin-inline-start: 0;
    .dark & {
      color: var(--ld-text);
    }
  }

  .legend-green {
    background-color: var(--ld-green-1);
  }

  .legend-yellow {
    background-color: var(--ld-yellow-1);
  }

  .legend-red {
    background-color: var(--ld-red-1);
  }

  .legend-gray {
    background-color: var(--ld-gray-3);
  }

  .measures {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    padding: 0;
    margin: 0 24px 0;
  }

  .measures > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 5px;
    text-align: left;
  }

  .measure-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .measure svg {
    width: 24px;
    height: 24px;
  }

  .measure-label {
    padding: 8px;
    border-radius: 20px;
    color: var(--ld-gray-1);
    pointer-events: none;
    transition: opacity 300ms ease-in-out;
    font-size: 12px;
    .dark & {
      color: var(--ld-text);
    }
  }

  .measure:hover ~ .measure-label {
    opacity: 1;
  }

  .measure-YES {
    fill: var(--ld-green-1);
  }

  .measure-PARTIAL {
    fill: var(--ld-yellow-1);
  }

  .measure-NO {
    fill: var(--ld-red-1);
  }

  .measure-UNCLEAR {
    fill: var(--ld-gray-3);
  }

  .ld-travel {
    display: flex;
    margin-bottom: 10px;
  }

  .ld-travel dt {
    flex-basis: 50%;
    flex-shrink: 0;
    font-weight: 300;
    margin-right: 20px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    .dark & {
      color: var(--ld-text);
    }
  }

  .ld-travel dd {
    margin-left: 0;
  }

  .ld-travel--val-icon {
    fill: var(--ld-gray-3);
  }

  .ld-travel--val-YES {
    background-color: var(--ld-green-1);
  }

  .ld-travel--val-PARTIALLY {
    background-color: var(--ld-yellow-1);
  }

  .ld-travel--val-NO {
    background-color: var(--ld-red-1);
  }

  .ld-travel--val-UNCLEAR {
    background-color: var(--ld-gray-3);
  }

  .ld-travel--val-NA {
    /* TODO: What to color NA? */
    background-color: var(--ld-gray-3);
  }

  .sr-only {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  .ld-travel--values {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }

  .ld-travel--symbol {
    position: relative;
    text-align: center;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  /* .ld-travel--symbol::after {
    position: absolute;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    content: attr(data-tooltip);
  }

  .ld-travel--symbol:hover::after {
    opacity: 1;
  } */
`;
