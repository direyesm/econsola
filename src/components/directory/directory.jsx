import React from "react";

import MenuItem from "../menu-item/menu-item";

import "./directory.style.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Cd Player Dj",
          imageUrl:
            "https://dojiw2m9tvv09.cloudfront.net/17134/product/X_2-pioneer-dj-cdj-3000-white-flagship-pro-dj-multi-players-with-limited-edition-white-djm-900nxs2-4-channel-digital-pro-dj-mixer-package-fe87339.jpg?110",
          id: 1,
          linkUrl: "CDPlayer",
        },
        {
          title: "Controlador",
          imageUrl:
            "https://dojiw2m9tvv09.cloudfront.net/17134/product/X_xdj-rr_prm_top_b_1808079509.jpg?110",
          id: 2,
          linkUrl: "Controlador",
        },
        {
          title: "Tornamesas",
          imageUrl:
            "https://dojiw2m9tvv09.cloudfront.net/17134/product/X_technics-sl-1210-mk7-redbull-edition2651.jpg?110",
          id: 3,
          linkUrl: "Tornamesas",
        },
        {
          title: "Audifonos",
          imageUrl:
            "https://dojiw2m9tvv09.cloudfront.net/17134/product/X_1455020500_12189763771.jpg?110",
          size: "large",
          id: 4,
          linkUrl: "Audifonos",
        },
        {
          title: "Mixer",
          imageUrl:
            "https://dojiw2m9tvv09.cloudfront.net/17134/product/X_pioneer-djm-900nxs27387.jpg?110",
          size: "large",
          id: 5,
          linkUrl: "Mixer",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;
