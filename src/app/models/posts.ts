// coi modelli (termine concettuale) tipi e interfacce (trmine tecnico typescritp)
// definisco COME sono fatte le cose

export type PostCategory = {
  id: string;
  title: string;
}

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  date: number;
  category: string;
}

export type Blog = {
  posts: Post[];
  postCategories: PostCategory[];
}
