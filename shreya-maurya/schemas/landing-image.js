export default {
    name: 'landing-image',
    title: 'Landing Images',
    type: 'document',

    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },

          {
            name: 'alt',
      title: 'alt-name',
      type: 'string',
      description: 'Alternative Text',
        },
    ]
}