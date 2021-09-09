import { AvlData } from '@app/codecs';

// Codec For Device Data Sending
export class AvlDataCollection {
  public numberOfRecords1: number;
  public codecId: number;
  public avlData: AvlData[];
  public numberOfRecords2: number;
}