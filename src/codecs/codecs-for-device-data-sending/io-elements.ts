export const IoElements = {
  1: {
    label: 'Din 1',
    values: {
      0: '0',
      1: '1',
    },
  },
  10: {
    label: 'SD Status',
    values: {
      0: 'Not present',
      1: 'Present',
    },
  },
  11: {
    label: 'SIM ICCID1 number',
  },
  12: {
    label: 'Fuel Used GPS',
  },
  13: {
    label: 'Average Fuel Use',
    dimension: 'L / 100 km',
  },
  14: {
    label: 'SIM ICCID2 number',
  },
  15: {
    label: 'Eco Score',
  },
  16: {
    label: 'Total Odometer',
  },
  17: {
    label: 'Accelerometer X axis',
  },
  18: {
    label: 'Accelerometer Y axis',
  },
  19: {
    label: 'Accelerometer Z axis',
  },
  20: {
    label: 'BLE 2 Battery Voltage',
    dimension: '%',
  },
  21: {
    label: 'GSM Signal Strength',
    values: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
    },
  },
  22: {
    label: 'BLE 3 Battery Voltage',
    dimension: '%',
  },
  23: {
    label: 'BLE 4 Battery Voltage',
    dimension: '%',
  },
  24: {
    label: 'Speed',
    dimension: 'km/h',
  },
  25: {
    label: 'BLE 1 Temperature',
    dimension: 'C',
  },
  26: {
    label: 'BLE 2 Temperature',
    dimension: 'C',
  },
  27: {
    label: 'BLE 3 Temperature',
    dimension: 'C',
  },
  28: {
    label: 'BLE 4 Temperature',
    dimension: 'C',
  },
  29: {
    label: 'BLE 1 Battery Voltage',
    dimension: '%',
  },
  30: {
    label: 'Number of DTC',
  },
  31: {
    label: 'Calculated engine load value',
    dimension: '%',
  },
  32: {
    label: 'Engine coolant temperature',
    dimension: 'C',
  },
  33: {
    label: 'Short term fuel trim 1',
    dimension: '%',
  },
  34: {
    label: 'Fuel pressure',
    dimension: 'kPa',
  },
  35: {
    label: 'Intake manifold absolute pressure',
    dimension: 'kPa',
  },
  36: {
    label: 'Engine RPM',
    dimension: 'rpm',
  },
  37: {
    label: 'Vehicle speed',
    dimension: 'km/h',
  },
  38: {
    label: 'Timing advance',
    dimension: 'O',
  },
  39: {
    label: 'Intake air temperature',
    dimension: 'C',
  },
  40: {
    label: 'MAF air flow rate',
    dimension: 'g/sec, *0.01',
  },
  41: {
    label: 'Throttle position',
    dimension: '%',
  },
  42: {
    label: 'Run time since engine start',
    dimension: 's',
  },
  43: {
    label: 'Distance traveled MIL on',
    dimension: 'Km',
  },
  44: {
    label: 'Relative fuel rail pressure',
    dimension: 'kPa*0.1',
  },
  45: {
    label: 'Direct fuel rail pressure',
    dimension: 'kPa*0.1',
  },
  46: {
    label: 'Commanded EGR',
    dimension: '%',
  },
  47: {
    label: 'EGR error',
    dimension: '%',
  },
  48: {
    label: 'Fuel level',
    dimension: '%',
  },
  49: {
    label: 'Distance traveled since codes cleared',
    dimension: 'Km',
  },
  50: {
    label: 'Barometric pressure',
    dimension: 'kPa',
  },
  51: {
    label: 'Control module voltage',
    dimension: 'mV',
  },
  52: {
    label: 'Absolute load value',
    dimension: '%',
  },
  53: {
    label: 'Ambient air temperature',
    dimension: 'C',
  },
  54: {
    label: 'Time run with MIL on',
    dimension: 'min',
  },
  55: {
    label: 'Time since trouble codes cleared',
    dimension: 'min',
  },
  56: {
    label: 'Absolute fuel rail pressure',
    dimension: 'kPa*10',
  },
  57: {
    label: 'Hybrid battery pack remaining life',
    dimension: '%',
  },
  58: {
    label: 'Engine oil temperature',
    dimension: 'C',
  },
  59: {
    label: 'Fuel injection timing',
    dimension: 'O, *0.01',
  },
  60: {
    label: 'Engine fuel rate',
    dimension: 'L/h, *100',
  },
  66: {
    label: 'Ext Voltage',
    dimension: 'mV',
  },
  67: {
    label: 'Battery Voltage',
    dimension: 'mV',
  },
  68: {
    label: 'Battery Current',
    dimension: 'mA',
  },
  69: {
    label: 'GNSS Status',
    values: {
      0: 'OFF',
      1: 'ON with fix',
      2: 'ON without fix',
      3: 'In sleep state',
    },
  },
  80: {
    label: 'Data Mode',
    values: {
      0: 'Home On Stop',
      1: 'Home On Moving',
      2: 'Roaming On Stop',
      3: 'Roaming On Moving',
      4: 'Unknown On Stop',
      5: 'Unknown On Moving',
    },
  },
  86: {
    label: 'BLE 1 Humidity',
    dimension: '%RH',
  },
  104: {
    label: 'BLE 2 Humidity',
    dimension: '%RH',
  },
  106: {
    label: 'BLE 3 Humidity',
    dimension: '%RH',
  },
  108: {
    label: 'BLE 4 Humidity',
    dimension: '%RH',
  },
  113: {
    label: 'FM battery level',
    dimesion: '%',
  },
  181: {
    label: 'PDOP',
  },
  182: {
    label: 'HDOP',
  },
  199: {
    label: 'Trip Odometer',
  },
  200: {
    label: 'Sleep Mode',
    values: {
      0: 'No Sleep',
      1: 'GPS Sleep',
      2: 'Deep Sleep',
    },
  },
  205: {
    label: 'GSM Cell ID',
  },
  206: {
    label: 'GSM Area Code',
  },
  238: {
    label: 'User ID',
  },
  239: {
    label: 'Ignition',
    values: {
      0: 'No',
      1: 'Yes',
    },
  },
  240: {
    label: 'Movement',
    values: {
      0: 'No',
      1: 'Yes',
    },
  },
  241: {
    label: 'GSM Operator',
  },
  243: {
    label: 'Green Driving Event Duration',
    dimension: 'ms',
  },
  246: {
    label: 'Towing Detection Event',
    values: {
      1: 'Send Towing detected',
    },
  },
  247: {
    label: 'Crash Detection',
    values: {
      1: 'Crash Detected',
      2: 'Crash Trace Record',
      3: 'Crash trace record(calibrated)',
    },
  },
  249: {
    label: 'Jamming Detection',
    values: {
      0: 'Jamming Ended',
      1: 'Jamming Detected',
    },
  },
  250: {
    label: 'Trip Event',
    values: {
      0: 'Trip Ended',
      1: 'Trip Started',
    },
  },
  251: {
    label: 'Idling Event',
    values: {
      0: 'Idling ended event',
      1: 'Idling started event',
    },
  },
  252: {
    label: 'Unplug Event',
    values: {
      1: 'Send when unplug event happens',
    },
  },
  253: {
    label: 'Green Driving Type',
    values: {
      1: 'Acceleration',
      2: 'Braking',
      3: 'Cornering',
    },
  },
  254: {
    label: 'Green Driving Value',
    dimension: 'g*10',
  },
  255: {
    label: 'Overspeeding Event',
    dimension: 'km/h',
  },
  256: {
    label: 'VIN',
  },

  281: {
    label: 'fault codes',
  },
  155: {
    label: 'Geofence Zone 1',
    dimension: 1,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  156: {
    label: 'Geofence Zone 2',
    dimension: 2,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  157: {
    label: 'Geofence Zone 3',
    dimension: 3,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  158: {
    label: 'Geofence Zone 4',
    dimension: 4,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  159: {
    label: 'Geofence Zone 5',
    dimension: 5,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  61: {
    label: 'Geofence Zone 6',
    dimension: 6,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  62: {
    label: 'Geofence Zone 7',
    dimension: 7,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  63: {
    label: 'Geofence Zone 8',
    dimension: 8,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  64: {
    label: 'Geofence Zone 9',
    dimension: 6,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  65: {
    label: 'Geofence Zone 10',
    dimension: 10,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  70: {
    label: 'Geofence Zone 11',
    dimension: 11,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  88: {
    label: 'Geofence Zone 12',
    dimension: 12,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  91: {
    label: 'Geofence Zone 13',
    dimension: 13,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  92: {
    label: 'Geofence Zone 14',
    dimension: 14,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  93: {
    label: 'Geofence Zone 15',
    dimension: 15,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  94: {
    label: 'Geofence Zone 16',
    dimension: 16,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  95: {
    label: 'Geofence Zone 17',
    dimension: 17,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  96: {
    label: 'Geofence Zone 18',
    dimension: 18,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  97: {
    label: 'Geofence Zone 19',
    dimension: 19,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  98: {
    label: 'Geofence Zone 20',
    dimension: 20,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  99: {
    label: 'Geofence Zone 21',
    dimension: 21,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  153: {
    label: 'Geofence Zone 22',
    dimension: 22,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  154: {
    label: 'Geofence Zone 23',
    dimension: 23,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  190: {
    label: 'Geofence Zone 24',
    dimension: 24,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  191: {
    label: 'Geofence Zone 25',
    dimension: 25,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  192: {
    label: 'Geofence Zone 26',
    dimension: 26,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  193: {
    label: 'Geofence Zone 27',
    dimension: 27,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  194: {
    label: 'Geofence Zone 28',
    dimension: 28,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  195: {
    label: 'Geofence Zone 29',
    dimension: 29,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  196: {
    label: 'Geofence Zone 30',
    dimension: 30,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  197: {
    label: 'Geofence Zone 31',
    dimension: 31,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  198: {
    label: 'Geofence Zone 32',
    dimension: 32,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  208: {
    label: 'Geofence Zone 33',
    dimension: 33,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  209: {
    label: 'Geofence Zone 34',
    dimension: 34,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  216: {
    label: 'Geofence Zone 35',
    dimension: 35,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  217: {
    label: 'Geofence Zone 36',
    dimension: 36,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  218: {
    label: 'Geofence Zone 37',
    dimension: 37,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  219: {
    label: 'Geofence Zone 38',
    dimension: 38,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  220: {
    label: 'Geofence Zone 39',
    dimension: 39,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  221: {
    label: 'Geofence Zone 40',
    dimension: 40,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  222: {
    label: 'Geofence Zone 41',
    dimension: 41,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  223: {
    label: 'Geofence Zone 42',
    dimension: 42,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  224: {
    label: 'Geofence Zone 43',
    dimension: 43,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  225: {
    label: 'Geofence Zone 44',
    dimension: 44,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  226: {
    label: 'Geofence Zone 45',
    dimension: 45,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  227: {
    label: 'Geofence Zone 46',
    dimension: 46,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  228: {
    label: 'Geofence Zone 47',
    dimension: 47,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  229: {
    label: 'Geofence Zone 48',
    dimension: 48,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  230: {
    label: 'Geofence Zone 49',
    dimension: 49,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
  231: {
    label: 'Geofence Zone 50',
    dimension: 50,
    values: {
      0: 'Target Left Zone',
      1: 'Target Entered Zone',
      2: 'Overspeeding End',
      3: 'Overspeeding Start',
    },
  },
} as const;

export const GeofenceIoLabels = [
  'Geofence Zone 1',
  'Geofence Zone 2',
  'Geofence Zone 3',
  'Geofence Zone 4',
  'Geofence Zone 5',
  'Geofence Zone 6',
  'Geofence Zone 7',
  'Geofence Zone 8',
  'Geofence Zone 9',
  'Geofence Zone 10',
  'Geofence Zone 11',
  'Geofence Zone 12',
  'Geofence Zone 13',
  'Geofence Zone 14',
  'Geofence Zone 15',
  'Geofence Zone 16',
  'Geofence Zone 17',
  'Geofence Zone 18',
  'Geofence Zone 19',
  'Geofence Zone 20',
  'Geofence Zone 21',
  'Geofence Zone 22',
  'Geofence Zone 23',
  'Geofence Zone 24',
  'Geofence Zone 25',
  'Geofence Zone 26',
  'Geofence Zone 27',
  'Geofence Zone 28',
  'Geofence Zone 29',
  'Geofence Zone 30',
  'Geofence Zone 31',
  'Geofence Zone 32',
  'Geofence Zone 33',
  'Geofence Zone 34',
  'Geofence Zone 35',
  'Geofence Zone 36',
  'Geofence Zone 37',
  'Geofence Zone 38',
  'Geofence Zone 39',
  'Geofence Zone 40',
  'Geofence Zone 41',
  'Geofence Zone 42',
  'Geofence Zone 43',
  'Geofence Zone 44',
  'Geofence Zone 45',
  'Geofence Zone 46',
  'Geofence Zone 47',
  'Geofence Zone 48',
  'Geofence Zone 49',
  'Geofence Zone 50',
] as const;

export type GeofenceLabel = (typeof GeofenceIoLabels)[number];
