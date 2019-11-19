const graphql = require("graphql");
const User = require("./models/userAuthModel");
const Post = require("./models/postModel");
const jwt = require("jsonwebtoken");

const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema
} = graphql;

const DemoType = new GraphQLObjectType({
  name: "DemoType",
  fields: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    token: { type: GraphQLString }
  }
});

const ToktnType = new GraphQLObjectType({
  name: "TokenType",
  fields: {
    token: { type: GraphQLString }
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
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signUp: {
      type: ToktnType,
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
