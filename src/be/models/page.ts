import { Schema, model } from 'mongoose'

import { Column, Image } from '.'

export const PageSchema = new Schema(
  {
    columns: [
      {
        default: () => [],
        type: Schema.Types.ObjectId,
        ref: Column,
      },
    ],
    title: {
      type: Schema.Types.String,
      default: () => 'Title',
    },
    background: {
      type: Schema.Types.ObjectId,
      ref: Image,
    },
    favicon: {
      type: Schema.Types.ObjectId,
      ref: Image,
    },
    docTypeName: {
      type: Schema.Types.String,
      enum: 'page',
    },
  },
  {
    timestamps: true,
  },
)

export const Page = model('Page', PageSchema)
