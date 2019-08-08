import { Schema, model } from 'mongoose'

export const ImageSchema = new Schema(
  {
    title: Schema.Types.String,
    description: Schema.Types.String,
    url: Schema.Types.String,
    docTypeName: {
      type: Schema.Types.String,
      enum: 'image',
    },
  },
  {
    timestamps: true,
  },
)

export const Image = model('Image', ImageSchema)
