import React, {lazy, Suspense} from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
//import ShopTop from '../../components/shop-page-top.component'

const ShopTop = lazy(() => import("../../components/shop-page-top.component"));
class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <>
        <div className="SomePreview">
          <Suspense fallback={<div>Loading... top component</div>}>
            <ShopTop />
          </Suspense>
        </div>
        <div className="shop-page">
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      </>
    );
  }
}

export default ShopPage;
