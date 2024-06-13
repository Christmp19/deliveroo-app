import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  type: 'document',
  title: 'Menu Category',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Category',
    }),
  ],
})
