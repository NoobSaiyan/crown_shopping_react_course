import React from "react";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import shop_data from "./shop.data.js";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shop_data,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
