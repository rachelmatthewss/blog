import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Kindly, Rach')
    .items([
      S.documentTypeListItem('sunday').title('Sundays'),
      S.documentTypeListItem('recipe').title('Recipes'),
      S.documentTypeListItem('blog').title('Blogs'),
      S.documentTypeListItem('travel').title('Travels'),
    ])
