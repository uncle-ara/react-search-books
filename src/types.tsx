export type VolumeInfo = {
  title: string;
  subtitle: string;
  authors: string[];
  categories: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
};

export type Book = {
  id: string;
  volumeInfo: VolumeInfo;
};

export type ResponseBooksData = {
  kind: string;
  totalItems: number;
  items: Book[];
};

export type ResponseBooks = {
  data: ResponseBooksData;
};
