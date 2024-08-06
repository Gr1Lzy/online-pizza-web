import {Container, Filters, Title, TopBar} from "@/components/shared";
import React from "react";
import {ProductsGroupList} from "@/components/shared/products-group-list";

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

        {/*LIST*/}
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductsGroupList title="Pizzas" items={[{
              id: 1,
              imageUrl: 'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FPitsa%20z%20vialenymy%20tomatamy%2Fdriedtomato-fullpizza.webp&w=600&q=75',
              name: 'Pepperoni Pizza',
              price: 10.99,
              items: [{ price: 10.99 }],
            }]} categoryId={1} />
          </div>

        </div>
      </div>
    </Container>
  </>;
}
