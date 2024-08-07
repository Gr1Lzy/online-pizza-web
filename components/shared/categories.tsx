'use client'

import { cn } from '@/lib/utils';
import React from 'react'
import {useCategoryStore} from "@/store/category";

interface Props {
    className?: string;
}

const cats = [
    { id: 1, name: 'Pizzas' },
    { id: 2, name: 'Combos' },
    { id: 3, name: 'Snacks' },
    { id: 4, name: 'Cocktails' },
    { id: 5, name: 'Coffee' },
    { id: 6, name: 'Drinks' },
    { id: 7, name: 'Deserts' }
]

export const Categories: React.FC<Props> = ({ className}) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId)

    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {cats.map(({name, id}, index) => (
                    <a className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
                    )}
                       href={`/#${name}`}
                       key={index}>
                        <button>{name}</button>
                    </a>
                ))
            }
        </div>
    );
};

