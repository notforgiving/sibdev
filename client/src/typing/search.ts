export interface SearchProps {
  search: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  modal: React.ChangeEventHandler<any>;
}

export interface searchOptions {
  search: string,
  order?: string,
  maxResults?:number,
}