import { format_date } from "@helpers/format_date";
import ListData from "./articles";

export interface Article {
  title: string;
  description: string;
  tags: string[];
  date: {
    print: string;
    iso: string;
  },
  path: string;
}

const tags: { [key: string]: number } = {};
const articles: Article[] = [];

for (const iterator of ListData) {
  articles.push({
    title: iterator.title,
    description: iterator.description,
    tags: iterator.tags,
    date: format_date(iterator.date),
    path: iterator.path,
  });
  for (const tag of iterator.tags) {
    if (tags[tag] === undefined) {
      tags[tag] = 1;
    } else {
      tags[tag]++;
    }
  }
}

export default {
  title: "CompilertVocado",
  description:
    "Explore the exciting world of programming. Learn languages, practices, and tips to enhance your skills. Find inspiration and resources for your coding journey.",
  keywords: Object.keys(tags),
  tags,
  articles,
};
