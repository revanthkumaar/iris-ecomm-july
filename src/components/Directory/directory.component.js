import React from "react";
import MenuItem from "../MenuItem/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "veggies",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "veggies",
        },
        {
          title: "fruits",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "fruits",
        },
        {
          title: "dairy",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "dairy",
        },
        {
          title: "household",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "household",
        },
        {
          title: "dont know",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "dont know",
        },
      ],
    };
  }

  render() {
    return (
      <div class="directory-menu">
        {this.state.sections.map(({ id, title }) => (
          <MenuItem key={id} title={title} />
        ))}
        ;
      </div>
    );
  }
}
