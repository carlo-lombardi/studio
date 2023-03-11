import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'emailSubscription',
  title: 'Email Subscription',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'confirmationCode',
      type: 'string',
    }),
    defineField({
      name: 'isEmailConfirmed',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
