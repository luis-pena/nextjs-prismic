# Prismic + Next.js

This repository includes the barebones on getting set up with a Next.js application linked up to Prismic (a user-friendly with a generous free tier headless content management system).

This particular repository sets up a blog

## Set Up Instructions

#### Get set up on Prismic

1.  Sign up for an account with Prismic.
    https://prismic.io/signup
2.  Create a repository. If not directed to custom type's page, select the Custom Types link
3.  Create new custom type
4.  Give your custom type a name (note the API name that gets generated, this repo's example uses a type called `blog_post`)
5.  Create your own custom fields, or use this JSON to create a sample blog post type:

```
{
  "Main": {
    "title": {
      "type": "StructuredText",
      "config": {
        "single": "heading1",
        "label": "Title"
      }
    },
    "uid": {
      "type": "UID",
      "config": {
        "label": "Url"
      }
    },
    "body": {
      "type": "StructuredText",
      "config": {
        "multi": "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
        "label": "Body"
      }
    }
  }
}
```

6.  Save your newly created Custom Type

#### Publish your first post

1.  Select the Content tab
2.  Create a new blog post, Save and Publish.

#### Set up the repository

#### With Yarn

1.  Update your **PRISMIC_API_URL**

    You can find this URL in: `/config.js`

    To retrieve this name in Prismic, while your repository is open, select **Settings**, then select **API & Security**. It will be under API Endpoint

2.  Install dependencies

    `yarn install`

3.  Run the local dev server

    `yarn dev`
