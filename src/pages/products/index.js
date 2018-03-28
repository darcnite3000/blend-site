import {
  IconGroupPersonal,
  IconPersonal,
  IconVoluntary,
  IconJourney,
  IconBespoke,
  IconBusiness
} from './Icons'
import ProductGroupPersonal from './ProductGroupPersonal'
import ProductPersonal from './ProductPersonal'
import ProductVoluntary from './ProductVoluntary'
import ProductBusiness from './ProductBusiness'
import ProductJourney from './ProductJourney'
import ProductBespoke from './ProductBespoke'
export {
  ProductGroupPersonal,
  ProductPersonal,
  ProductVoluntary,
  ProductBusiness,
  ProductJourney,
  ProductBespoke
}
export const productsList = [
  {
    icon: IconGroupPersonal,
    title: 'group personal\naccident',
    id: 'group',
    content: ProductGroupPersonal
  },
  {
    icon: IconPersonal,
    title: 'individual personal\naccident',
    id: 'personal',
    content: ProductPersonal
  },
  {
    icon: IconVoluntary,
    title: 'voluntary\nworkers',
    id: 'voluntary',
    content: ProductVoluntary
  },
  {
    icon: IconJourney,
    title: 'journey',
    id: 'journey',
    content: ProductJourney
  },
  {
    icon: IconBusiness,
    title: 'business\ntravel',
    id: 'business',
    content: ProductBusiness
  },
  {
    icon: IconBespoke,
    title: 'bespoke',
    id: 'bespoke',
    content: ProductBespoke
  }
]
