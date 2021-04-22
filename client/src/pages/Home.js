import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid } from 'semantic-ui-react';

import { FETCH_POSTS_QUERY } from '../util/graphql';

import PostCard from '../components/PostCard';

function Home() {

    const {
        loading,
        data: { getPosts: posts }
      } = useQuery(FETCH_POSTS_QUERY);
    
    return (
        <Grid columns={3}>
            <Grid.Row>
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
              {loading ? (
                   <h1>Loading posts..</h1>
               ) : (
                  posts && posts.map((post) => (
                      <Grid.Column key={post.id}>
                          <PostCard post={post} />
                      </Grid.Column>
                  ))
               )}
            </Grid.Row>
        </Grid>
    );
}



export default Home;