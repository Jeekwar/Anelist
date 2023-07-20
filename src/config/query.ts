import { gql } from "@apollo/client";

const queryList = {
  GET_LISTANIME: gql`
    query ($page: Int, $perPage: Int, $search: String) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          perPage
        }
        media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
          id
          title {
            romaji
            english
            native
          }
          type
          genres
          coverImage {
            large
            medium
          }
          seasonInt
          episodes
          trailer {
            id
            site
            thumbnail
          }
          bannerImage
        }
      }
    }
  `,
  GET_LISTCOLLECTION: gql`
    query ($userName: String!) {
      MediaListCollection(userName: $userName) {
        lists {
          name
          entries {
            media {
              id
              title {
                romaji
                english
              }
            }
          }
        }
      }
    }
  `,
};

export default queryList;
