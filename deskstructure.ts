import {StructureBuilder} from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Brand Settings').child(S.documentTypeList('brand').title('Brands')),
      S.listItem()
        .title('Location Settings')
        .child(S.documentTypeList('location').title('Locations')),
      S.listItem().title('Posts').child(S.documentTypeList('post').title('Posts')),
      S.listItem().title('Blog Posts').child(S.documentTypeList('blog-post').title('Blog Posts')),

      // Add a "Brands" section to dynamically handle brands, locations, and posts
      S.listItem()
        .title('Brands')
        .child(
          S.documentTypeList('brand').child((brandId) =>
            S.documentTypeList('location')
              .title('Locations')
              .filter(
                '_type == "location" && _id in *[_type == "brand" && _id == $brandId][0].locations[]._ref',
              )
              .params({brandId})
              .child((locationId) =>
                S.documentTypeList('post')
                  .title('Posts')
                  .filter(
                    '_type == "post" && $locationId in location[]._ref && $brandId in brand[]._ref',
                  )
                  .params({locationId, brandId}),
              ),
          ),
        ),
    ])
