import React from 'react';
import {Title} from "@/components/shared/title";
import {cn} from "@/lib/utils";
import {ProductCard} from "@/components/shared/product-card";

interface Props {
    title: string;
    items: any[]
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
                                                      title,
                                                      items,
                                                      categoryId,
                                                      className,
                                                      listClassName
}) => {
    return (
        <div className={className}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product, i) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))}
                {items.map((product, i) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))}
                {items.map((product, i) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))}
                {items.map((product, i) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))}
                {items.map((product, i) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.items[0].price}
                />
            ))}
            </div>
        </div>
    );
};