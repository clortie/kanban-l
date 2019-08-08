import { Schema, model } from 'mongoose'

import { Card } from '.'

export const ColumnSchema = new Schema(
  {
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: Card,
        default: () => [],
      },
    ],
    docTypeName: {
      type: Schema.Types.String,
      enum: 'column',
    },
  },
  {
    timestamps: true,
  },
)

export const Column = model('Column', ColumnSchema)
