export default {
    name: 'project',
    title: 'Project',
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
            name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the Project',
        },

        {
            name: 'desc',
      title: 'Description',
      type: 'text',
      description: 'Description of the project',
        }
    ]
}