export interface IDescription {
  title: string,
  description: string
}

export interface IDescrtiptionMap{
  [key: string]: IDescription
}

export const META_INFO: IDescrtiptionMap = {
  '/about': {
    title: 'About Page - Know our team',
    description: 'Welcome to the about page of the application',
  },
  '/product': {
    title: 'Products - Find the latest and hottest products',
    description: 'Welcome to the product page of the application',
  },
};
