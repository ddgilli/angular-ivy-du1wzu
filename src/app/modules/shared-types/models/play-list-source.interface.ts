import { PlayListItem } from './play-list-item.interface';
import { Tag } from './tag.interface';

export interface PlayListSource {
  id?: number;
  seq?: number;
  name?: string;
  description?: string;
  url: string;
  mimeType: string;
  thumbnail: string;
  isDeleted?: boolean;
  createdAt?: Date;
  updateAt?: Date;
  deletedAt?: Date;
  author?: string;
  tags?: Tag[];
  items?: Partial<PlayListItem>[];
}
