import TagsData from "@data/tags.conf";

export function format_tags(tags: string[], control: { [key: string]: number } = {}) {
  for (const tag of tags) {
    if (TagsData[tag] === undefined) {
      throw new Error(`Tag no registered: ${tag}`);
    }
    if (TagsData[tag].visible) {
      if (control[tag] === undefined) {
        control[tag] = 1;
      } else {
        control[tag]++;
      }
    }
  }
  return control;
}
