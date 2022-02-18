import { PlayListSource } from './play-list-source.interface';

export interface PlayListItem {
  id: number;
  seq?: number;
  name: string;
  description: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  author?: string;
  duration?: number;
  watched?: boolean;
  items?: Partial<PlayListItem>[];
  sources?: Partial<PlayListSource>[];
}
