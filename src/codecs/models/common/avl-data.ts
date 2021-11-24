import { GpsElement } from '@app/codecs';
import { IoElementsObj } from './io-element';

export class AvlData {
  public priority: number;
  public timestamp: Date;
  public gps: GpsElement;
  public event_id: number;
  public properties_count: number;
  public ioElements: IoElementsObj;
}
