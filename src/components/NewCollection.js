import React from "react";
import newCollection from './assets/new_collections'
import Item from "./Item";

const NewCollection = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="uppercase bold md:text-4xl text-2xl  mb-8">
        NewCollection
        <hr className="h-[5px] bg-black w-[70%] mx-auto my-2 rounded" />
      </h1>
      {/* collection Item container */}
      <div className="collection flex flex-wrap justify-center items-center gap-4">
        {
          newCollection.map((item, indx)=>(
            <Item key={indx}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}/>
          ))
        }
      </div>
    </div>
  );
};

export default NewCollection;
