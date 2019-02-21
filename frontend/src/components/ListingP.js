import React from 'react';

const ListingP = () => {
    return (
            <div>
                <h1 class="ListingTitle">Title</h1>
                <object data="https://www.eesc.com.au/new/wp-content/uploads/Grey-blank-panel.png" type="image/png">
                    <img class="ListingPhoto"></img>
                </object>
                <p class="Age">Age</p>
                <p class="Location">Location</p>
                <p class="Description">Description</p>
                <button>Buy</button>
            </div>);
};

export default ListingP;
