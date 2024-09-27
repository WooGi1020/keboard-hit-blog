declare module "@blogType" {
  export interface Params {
    tag: string;
    slug: string;
  }

  export interface TagInfo {
    tag: string;
    count: number;
  }

  export type TagInfos = TagInfo[];
}
