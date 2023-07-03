import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
      /* Belfair */
      @font-face {
        font-family: 'Bellefair';
        font-style: normal;
       url("./fonts/Bellefair-Regular.ttf") format("truetype");
      }
      /* latin */
      @font-face {
        font-family: 'Barlow';
        font-style: normal;
               url("./fonts/Barlow-Regular.ttf") format("truetype");
            }
      /* latin */
      @font-face {
        font-family: 'BarlowCondensed';
        font-style: normal;
               url("./fonts/BarlowCondensed-Regular.ttf") format("truetype");
            }

      `}
  />
);

export default Fonts;
