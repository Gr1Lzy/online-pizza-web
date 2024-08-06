import {Container, Filters, Title, TopBar} from "@/components/shared";
import React from "react";
import {ProductCart} from "@/components/shared/product-cart";

export default function Home() {
  return <>

    <Container className="mt-10">
      <Title text="All Pizzas" size="lg" className="font-extrabold"/>
    </Container>

    <TopBar />

    <Container className="mt-10 pb-14">
      <div className="flex gap-[60px]">

        <div className="w-[250px]">
          <Filters />
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductCart id={0} name={"Chicken Pizza"} price={25} imageUrl={'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FPitsa%20z%20vialenymy%20tomatamy%2Fdriedtomato-fullpizza.webp&w=600&q=75'}/>
          </div>

        </div>
      </div>
    </Container>
  </>;
}
