const graphql = require("graphql");
const User = require("./models/userAuthModel");
const Post = require("./models/postModel");
const jwt = require("jsonwebtoken");

const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} = graphql;

const DemoType = new GraphQLObjectType({
  name: "DemoType",
  fields: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    token: { type: GraphQLString }
  }
});

const TokenType = new GraphQLObjectType({
  name: "TokenType",
  fields: {
    token: { type: GraphQLString }
  }
});

const PostType = new GraphQLObjectType({
  name: "PostType",
  fields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    viewed: { type: GraphQLInt }
    // _user: { type: GraphQLID }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    demo: {
      type: DemoType,
      resolve(parentValue, args, context) {
        console.log("incoming request");
        return { name: "pankaj" };
      }
    },
    myPosts: {
      type: new GraphQLList(PostType),
      args: {
        token: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { token }) {
        const id = jwt.verify(token, "apollo-course");

        return Post.find({ _user: id["token"] }).catch(function(err) {
          return new Error("some internal server error");
        });
      }
    },
    allPosts: {
      type: new GraphQLList(PostType),
      resolve() {
        return Post.find({}).catch(function(err) {
          return new Error("some internal server error");
        });
      }
    },
    myPost: {
      type: PostType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { id }) {
        return Post.findById(id)
          .then(function(data) {
            data.viewed += 1;
            return data.save();
          })
          .catch(function(err) {
            return new Error("some internal server");
          });
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signUp: {
      type: TokenType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { email, password }) {
        return User.findOne({ email })
          .then(function(user) {
            //let id;
            if (user) {
              //creating token through id(id is unique for all user)
              const token = jwt.sign({ token: user["id"] }, "apollo-course"); //or use use["_id"]  mongoose is super smart
              return { token };
            }

            const newUser = new User({ email, password });
            return newUser.save().then(function(user) {
              const token = jwt.sign({ token: user["id"] }, "apollo-course");
              return { token };
            });
          })
          .catch(function(err) {
            console.log(err.message);
            return new Error(err.message);
          });
      }
    },
    createPost: {
      type: PostType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        token: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { title, description, token }) {
        const id = jwt.verify(token, "apollo-course");

        const post = new Post({ title, description, _user: id["token"] });
        return post.save().catch(function() {
          return new Error("some internal server error");
        });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
