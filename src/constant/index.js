import { BsFillImageFill, BsCameraVideoFill } from 'react-icons/bs'
import { FiUpload, } from 'react-icons/fi'

export const CategoryList = [
  { title: 'style', color: '#57c4ff31' },
  { title: 'fashion', color: '#da85c731' },
  { title: 'food', color: '#7fb88133' },
  { title: 'travel', color: '#ff795736' },
  { title: 'culture', color: '#ffb04f45' },
  { title: 'coding', color: '#5e4fff31' },
]

export const DemoPosts = [
  { author: 'Donny', category: 'travel', color: '#ff7857' },
  { author: 'Carlos', category: 'coding', color: '#775aec' },
  { author: 'Yassine', category: 'food', color: '#7fb881' },
]

export const DemoPosts2 = [
  {
    createdAt: Date('2022-04-05'),
    title: 'Amrabat joined ManU',
    img: '',
    catSlug: 'sport',
    slug: Math.random()
  },
  {
    createdAt: Date('2022-06-05'),
    title: 'Travel to Jordan',
    img: '',
    catSlug: 'travel',
    slug: Math.random()
  },
  {
    createdAt: Date('2022-07-05'),
    title: 'Lemon-spice chicken recipe',
    img: '',
    catSlug: 'food',
    slug: Math.random()
  },
]

export const IconButtons = [
  { id: 'file', icon: <FiUpload /> },
  { id: 'image', icon: <BsFillImageFill /> },
  { id: 'video', icon: <BsCameraVideoFill /> }
]