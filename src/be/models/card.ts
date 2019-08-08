import { Schema, model } from 'mongoose'

import { Image } from '.'

export const CardSchema = new Schema(
  {
    header: {
      type: Schema.Types.String,
    },
    subtitle: {
      type: Schema.Types.String,
    },
    description: {
      type: Schema.Types.String,
    },
    body: {
      type: Schema.Types.String,
    },
    comments: [
      {
        type: Schema.Types.String,
      },
    ],
    images: [
      {
        type: Schema.Types.ObjectId,
        ref: Image,
        default: () => [],
      },
    ],
    docTypeName: {
      type: Schema.Types.String,
      enum: 'card',
    },
  },

  {
    timestamps: true,
  },
)

export const Card = model('Card', CardSchema)
