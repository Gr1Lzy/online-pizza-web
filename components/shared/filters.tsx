import React from 'react';
import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui";
import {RangeSlider} from "@/components/shared/range-slider";
import {CheckboxFilterGroup} from "@/components/shared/checkbox-filters-group";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Filtration" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Can be collected" value="1" />
                <FilterCheckbox text="News" value="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Price range</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" min={100} max={1000} placeholder="1000" />
                </div>

                <RangeSlider min={0} max={1000} step={1} value={[0, 1000]} />
            </div>

            <CheckboxFilterGroup
                title="Ingridients"
                className='mt-5'
                limit={6}
                defaultItems={[
                    {
                        text: 'Tomato', value: '1'
                    },
                    {
                        text: 'Pepper', value: '2'
                    },
                    {
                        text: 'Garlic', value: '3'
                    },
                    {
                        text: 'Onion', value: '4'
                    },
                    {
                        text: 'Cheese', value: '5'
                    },
                    {
                        text: 'Mushrooms', value: '6'
                    },
                    {
                        text: 'Olives', value: '7'
                    }
                ]}
                items={[
                    {
                        text: 'Tomato', value: '1'
                    },
                    {
                        text: 'Pepper', value: '2'
                    },
                    {
                        text: 'Garlic', value: '3'
                    },
                    {
                        text: 'Onion', value: '4'
                    },
                    {
                        text: 'Cheese', value: '5'
                    },
                    {
                        text: 'Mushrooms', value: '6'
                    },
                    {
                        text: 'Olives', value: '7'
                    }
                ]}
            />
        </div>
    );
};