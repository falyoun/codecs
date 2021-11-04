export * from './codecs-types.enum';

export enum PacketTypesEnum {
  PERMANENT_IO_ELEMENTS = 'permanent_io_element',
  EVENTUAL_IO_ELEMENTS = 'eventual_io_element',
  E_SCOOTER_ELEMENTS = 'e_scooter_element',
  CAN_BOSCH_IO_ELEMENTS = 'can_bosch_io_element',
  CAN_ASKOLL_IO_ELEMENTS = 'can_askoll_io_element',
  MANUAL_CAN_IO_ELEMENTS = 'manual_can_io_element',
  DEFAULT_J1939_IO_ELEMENTS = 'default_j1939_io_element',
  SUPER_SOCO_IO_ELEMENTS = 'super_soco_io_element',
  BLE_SENSOR_IO_ELEMENTS = 'ble_sensor_io_element',
  OBD_ELEMENTS = 'obd_element',
  OBD_OEM_ELEMENTS = 'obd_oem_element',
  CAN_ADAPTER_ELEMENTS = 'can_adapter_element',
}