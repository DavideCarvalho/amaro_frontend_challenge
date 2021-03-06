// @flow
import type { Size } from './size';

export type Product = {
  +name: string,
  +style: string,
  +code_color: string,
  +color_slug: string,
  +color: string,
  +on_sale: boolean,
  +regular_price: string,
  +actual_price: string,
  +discount_percentage: string,
  +installments: string,
  +image: string,
  +sizes: Array<Size>
}