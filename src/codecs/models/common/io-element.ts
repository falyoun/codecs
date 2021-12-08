import { IoElements, PacketTypesEnum } from '@app/codecs';

export class IoElement {
  id: number;
  value: any;
  label: string;
  dimension: string;
  valueHuman: string;
  type: PacketTypesEnum;
}

type Result<T extends Record<string, { readonly label: string }>> =
  T[keyof T]['label'];
export type IoLabel = Result<typeof IoElements>;
export type IoElementsObj = Partial<Record<IoLabel, IoElement>>;
