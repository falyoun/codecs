import { PacketTypesEnum } from '@app/codecs';

export class IoElement {
  id: number;
  value: number;
  label: string;
  dimension: string;
  valueHuman: string;
  type: PacketTypesEnum;
}
