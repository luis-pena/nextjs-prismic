import React, { Component } from "react";
// RichText is give to us
import { RichText } from "prismic-reactjs";
// A new API request that will create in just a tick
import { getBlogPostAPI } from "../api";
import linkResolver from "../helpers";
// Here we are reusing our layout again
import DefaultLayout from "../layouts";

function BlogPost({ post }) {
  const { title, body } = post.data;

  return (
    <DefaultLayout>
      <article>
        <h1>{title.length ? title[0].text : ""}</h1>
        {/* Here we pass our rich text field to Prismics RichText renderer, along with our linkResolver */}
        {RichText.render(body, linkResolver)}
      </article>
    </DefaultLayout>
  );
}

BlogPost.getInitialProps = async (context) => {
  // we get the slug of the post so that we can
  // query the API with it
  console.log("CONTEXT", context);

  const { slug } = context.query;
  const response = await getBlogPostAPI(slug);
  return {
    post: response,
  };
};

export default BlogPost;
