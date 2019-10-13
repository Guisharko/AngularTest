export class PostService {
  postCreate = new Date();

  posts = [
    {
      title: 'Mon premier post',
      content: 'Dynamically expedite client-centric potentialities through real-time resources. Appropriately ' +
        'harness highly efficient core.',
      loveIts: 0,
      created_at: this.postCreate,
    },
    {
      title: 'Mon deuxième post',
      content: 'Dynamically expedite client-centric potentialities through real-time resources. Appropriately ' +
        'harness highly efficient core.',
      loveIts: 0,
      created_at: this.postCreate,
    },
    {
      title: 'Encore un post',
      content: 'Dynamically expedite client-centric potentialities through real-time resources. Appropriately ' +
        'harness highly efficient core.',
      loveIts: 0,
      created_at: this.postCreate,
    }
  ];
}
