import React from 'react';
import Link from "next/link";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui";
import {Plus} from "lucide-react";

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className}) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-white rounded-lg h-[260px]">
                    <img className="w-[250px] h-[210px]" src={imageUrl} alt={name} />
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

                {/* Temporary */}
                <p className="text-sm text-gray-400">
                    Chicken, Cheese, Tomato, Onion, Lettuce, Pickle, Sauce
                </p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-[20px]">
                        from <b>{price} $</b>
                    </span>

                    <Button variant="secondary" className="text-base font-bold bg-blue-50">
                        <Plus size={20} className="mr-1" />
                        Add to Cart
                    </Button>
                </div>
            </Link>
        </div>
    )
};