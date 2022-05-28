const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    cid: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
    },
    tags: [{ type: String }],
    comments: [
      {
        uid: {
          type: String,
        },
        comment_data: {
          type: String,
        },
        likes: {
          type: Number,
          default: 0,
        },
        dislikes: {
          type: Number,
          default: 0,
        },
      },
    ],
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

module.exports = mongoose.model("articles", schema);
