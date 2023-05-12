import { AnchorHTMLAttributes } from "react";

export function InstagramIcon(props: AnchorHTMLAttributes<HTMLElement>) {
  return (
    <a {...props} href="https://www.instagram.com/thegodshot.be/" target="_blank">
      <svg viewBox="0 0 20.647 20.642">
        <path
          d="M10.321,7.266a5.292,5.292,0,1,0,5.292,5.292A5.284,5.284,0,0,0,10.321,7.266Zm0,8.733a3.441,3.441,0,1,1,3.441-3.441A3.447,3.447,0,0,1,10.321,16Zm6.743-8.95A1.234,1.234,0,1,1,15.83,5.816,1.232,1.232,0,0,1,17.064,7.05ZM20.569,8.3A6.109,6.109,0,0,0,18.9,3.978,6.149,6.149,0,0,0,14.577,2.31c-1.7-.1-6.812-.1-8.517,0A6.14,6.14,0,0,0,1.735,3.973,6.129,6.129,0,0,0,.067,8.3c-.1,1.7-.1,6.812,0,8.517A6.109,6.109,0,0,0,1.735,21.14,6.157,6.157,0,0,0,6.06,22.808c1.7.1,6.812.1,8.517,0A6.109,6.109,0,0,0,18.9,21.14a6.149,6.149,0,0,0,1.667-4.325c.1-1.7.1-6.808,0-8.512Zm-2.2,10.341a3.484,3.484,0,0,1-1.962,1.962c-1.359.539-4.583.415-6.085.415s-4.731.12-6.085-.415a3.484,3.484,0,0,1-1.962-1.962c-.539-1.359-.415-4.583-.415-6.085s-.12-4.731.415-6.085A3.484,3.484,0,0,1,4.236,4.512C5.595,3.973,8.819,4.1,10.321,4.1s4.731-.12,6.085.415a3.484,3.484,0,0,1,1.962,1.962c.539,1.359.415,4.583.415,6.085S18.906,17.289,18.368,18.644Z"
          transform="translate(0.005 -2.238)"
          fill="#f1f1f1"
        />
      </svg>
    </a>
  );
}