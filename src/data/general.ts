import { format_date, format_tags, collection_keywords } from "@helpers";
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

let tags_all_formated: { [key: string]: number } = {};
let keywords: string[] = [];
const articles: Article[] = [];

for (const iterator of ListData.sort(
  (a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0))
) {
  articles.push({
    title: iterator.title,
    description: iterator.description,
    tags: Object.keys(format_tags(iterator.keywords, {})),
    date: format_date(iterator.date),
    path: iterator.path,
  });
  tags_all_formated = format_tags(iterator.keywords, tags_all_formated);
  keywords = collection_keywords(iterator.keywords, keywords);
}

export default {
  title: "CompilertVocado",
  description:
    "Explore the exciting world of programming. Learn languages, practices, and tips to enhance your skills. Find inspiration and resources for your coding journey.",
  keywords,
  tags: tags_all_formated,
  articles,
};
