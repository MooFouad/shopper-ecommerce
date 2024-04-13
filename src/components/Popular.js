import React from "react";
import data_product from "./assets/data";
import Item from "./Item";

const Popular = () => {
    return (
        <div className="flex flex-col max-md:flex-col justify-center items-center md:px-10 max-md:px-4 mb-8">
        <h1 className="p-8 bold md:text-4xl max-md:text-xl uppercase">
            Popular In Women
            <hr className="h-[5px] bg-black w-[70%] mx-auto my-2 rounded" />
        </h1>

        <div className="collection flex flex-wrap justify-center items-center gap-2">
            {data_product.map((item) => (
            <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
            />
            ))}
        </div>
        </div>
    );
};

export default Popular;
