const mongoose = require("mongoose");
const { type } = require("os");

const schema = new mongoose.Schema(
  {
    wallet_address: {
      type: String,
      required: true,
    },
    profile_image: {
      type: String,
    },
    name: {
      type: String,
    },
    bookmarked_articles: [
      {
        cid: {
          type: String,
        },
      },
    ],
    recommends: [{ type: String }],
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
      },
    },
    toJSON: {
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
      },
    },
  }
);

module.exports = mongoose.model("users", schema);
