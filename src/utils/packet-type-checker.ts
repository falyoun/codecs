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
export const getPacketType = (id: number): PacketTypesEnum => {
  const permanentIOElementsIds = [
    239, 240, 80, 21, 200, 69, 181, 182, 66, 24, 205, 206, 67, 68, 241, 199, 16,
    1, 9, 179, 12, 13, 17, 18, 19, 11, 10, 2, 3, 6, 180, 72, 73, 74, 75, 76, 77,
    79, 71, 78, 207, 201, 202, 203, 204, 210, 211, 212, 213, 214, 215, 15, 113,
    238, 237, 8, 4, 5, 263, 264, 269, 270, 271, 272, 273, 274, 275, 276, 277,
    278, 279, 280, 303, 327, 483, 380, 381, 387, 636, 403, 404, 405, 406, 407,
    408, 409,
  ];
  const eventualIOElementsIds = [
    155, 156, 157, 158, 159, 61, 62, 63, 64, 65, 70, 88, 91, 92, 93, 94, 95, 96,
    97, 98, 99, 153, 154, 190, 191, 192, 193, 194, 195, 196, 197, 198, 208, 209,
    216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230,
    231, 175, 250, 255, 257, 285, 251, 253, 246, 252, 247, 248, 254, 249, 14,
    243, 236, 258, 259, 260, 283, 284, 391, 317, 449,
  ];
  const obdElements = [
    256, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 281, 60,
  ];
  const obdOemElements = [389, 390];
  const canAdapterElements = [
    81, 82, 83, 84, 85, 87, 89, 90, 100, 101, 388, 102, 103, 105, 107, 110, 111,
    112, 114, 115, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
    130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
    145, 146, 147, 148, 149, 150, 151, 152, 160, 161, 162, 163, 164, 164, 164,
    165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 176, 177, 178, 183, 184,
    185, 186, 187, 188, 189, 232, 233, 234, 235, 304, 305, 325, 282, 517, 518,
    519, 520, 521, 522, 855, 856, 857, 858,
  ];
  const eScooterElementsIds = [
    339, 340, 341, 342, 344, 345, 346, 347, 349, 350, 351, 352, 353, 354, 355,
    356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 369, 370, 371,
    372, 374, 375, 392, 393, 394, 396,
  ];
  const canBoschIOElementsIds = [
    801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815,
    816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830,
    831, 832, 833, 834, 835, 836, 837, 838, 1121, 1122, 1123, 1124, 1125, 1100,
    1101, 11002, 11003, 1104, 1105, 1106, 1107,
  ];
  const canAskollIOElementsIds = [
    804, 804, 821, 822, 824, 824, 828, 828, 833, 835, 837, 843, 844, 845, 846,
    847, 848, 849, 850, 851, 852, 852,
  ];
  const manualCanIOElementsIds = [
    900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914,
    915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929,
  ];
  const defaultJ1939IOElementsIds = [
    930, 931, 932, 933, 934, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945,
    946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960,
    961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 989,
    990, 991, 992, 993, 994, 995, 996, 1002, 1003, 1004, 1005, 1006, 1007, 1008,
    1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020,
    1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032,
    1033, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043,
    1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055,
    1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067,
    1068, 1069, 1070, 1071,
  ];
  const superSocoIOElementsIds = [
    855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869,
    870,
  ];
  const bleSensorIOElementsIds = [
    385, 25, 26, 27, 28, 29, 20, 22, 23, 86, 104, 106, 108, 270, 273, 276, 279,
    306, 307, 308, 309, 335, 336, 337, 338, 331, 463, 464, 465, 466, 332, 467,
    468, 469, 470, 333, 471, 472, 473, 474, 334, 475, 476, 477, 478,
  ];
  if (permanentIOElementsIds.indexOf(id) !== -1)
    return PacketTypesEnum.PERMANENT_IO_ELEMENTS;
  if (eventualIOElementsIds.indexOf(id) !== -1) {
    return PacketTypesEnum.EVENTUAL_IO_ELEMENTS;
  }
  if (eScooterElementsIds.indexOf(id) !== -1) {
    return PacketTypesEnum.E_SCOOTER_ELEMENTS;
  }
  if (canBoschIOElementsIds.indexOf(id) !== -1) {
    return PacketTypesEnum.CAN_BOSCH_IO_ELEMENTS;
  }
  if (canAskollIOElementsIds.indexOf(id) !== -1) {
    return PacketTypesEnum.CAN_ASKOLL_IO_ELEMENTS;
  }
  if (manualCanIOElementsIds.indexOf(id) !== -1) {
    return PacketTypesEnum.MANUAL_CAN_IO_ELEMENTS;
  }
  if (defaultJ1939IOElementsIds.indexOf(id) !== -1) {
    return PacketTypesEnum.DEFAULT_J1939_IO_ELEMENTS;
  }
  if (superSocoIOElementsIds.indexOf(id) !== -1) {
    return PacketTypesEnum.SUPER_SOCO_IO_ELEMENTS;
  }
  if (bleSensorIOElementsIds.indexOf(id) !== -1) {
    return PacketTypesEnum.BLE_SENSOR_IO_ELEMENTS;
  }
  if (obdElements.indexOf(id) !== -1) {
    return PacketTypesEnum.OBD_ELEMENTS;
  }
  if (obdOemElements.indexOf(id) !== -1) {
    return PacketTypesEnum.OBD_OEM_ELEMENTS;
  }
  if (canAdapterElements.indexOf(id) !== -1) {
    return PacketTypesEnum.CAN_ADAPTER_ELEMENTS;
  }
  return PacketTypesEnum.PERMANENT_IO_ELEMENTS;
};
