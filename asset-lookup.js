const ASSET_LOOKUP = {
  "Crane/Hoist|Electric Hoist|CD13-18": {
    "code": "CN503",
    "category": "50.01.07",
    "process_areas": [
      "ACC 1 /AirCooledCon/",
      "ACC 2 /AirCooledCon/",
      "ACC 3 /AirCooledCon/"
    ],
    "asset_descriptions": [
      "Crane/Hoist|Power Plant|ACC 1",
      "Crane/Hoist|Power Plant|ACC 2",
      "Crane/Hoist|Power Plant|ACC 3"
    ]
  },
  "Breaker|Reclosers breaker": {
    "code": "BM703",
    "category": "10.05.06",
    "process_areas": [
      "Khothon SubS35kV SR",
      "WS substation"
    ],
    "asset_descriptions": [
      "Breaker|Khothon|Reclosers breaker-1|T-1 Оролт",
      "Breaker|Khothon|Reclosers breaker-2|T-2 Оролт",
      "WS-Breaker|WS substation|Reclosers breaker-1|T-1 Оролт",
      "WS-Breaker|WS substation|Reclosers breaker-2|T-2 Оролт"
    ]
  },
  "Centrifugal fan|Boiler|HX-35/3.82-450": {
    "code": "FB101",
    "category": "80.11.01",
    "process_areas": [
      "Boiler#1|BoilerH 0m",
      "Boiler#1|ID FanHouse",
      "Boiler#2|BoilerH 0m",
      "Boiler#2|ID FanHouse",
      "Boiler#3|BoilerH 0m",
      "Boiler#3|ID FanHouse"
    ],
    "asset_descriptions": [
      "Centrifugal fan|Boiler 1|ID fan",
      "Centrifugal fan|Boiler 1|PA fan",
      "Centrifugal fan|Boiler 1|Roots fan 1",
      "Centrifugal fan|Boiler 1|Roots fan 2",
      "Centrifugal fan|Boiler 1|SA fan",
      "Centrifugal fan|Boiler 2|ID fan",
      "Centrifugal fan|Boiler 2|PA fan",
      "Centrifugal fan|Boiler 2|Roots fan 1",
      "Centrifugal fan|Boiler 2|Roots fan 2",
      "Centrifugal fan|Boiler 2|SA fan",
      "Centrifugal fan|Boiler 3|ID fan",
      "Centrifugal fan|Boiler 3|PA fan",
      "Centrifugal fan|Boiler 3|Roots fan 1",
      "Centrifugal fan|Boiler 3|Roots fan 2",
      "Centrifugal fan|Boiler 3|SA fan"
    ]
  },
  "Air Conditioning|TAC- 18CHF/C": {
    "code": "AX301",
    "category": "20.03.22",
    "process_areas": [
      "MotorControl Center"
    ],
    "asset_descriptions": [
      "Air Conditioning|TAC- 18CHF/C"
    ]
  },
  "Cyclone|boiler": {
    "code": "CY601",
    "category": "20.02.12",
    "process_areas": [
      "ERT Boiler House",
      "Gallery Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "Cyclone|ERT|Boiler 1",
      "Cyclone|ERT|Boiler 2",
      "Cyclone|ERT|Boiler 3",
      "Cyclone|Gallery Camp|Boiler 1",
      "Cyclone|Gallery Camp|Boiler 2",
      "Cyclone|Tsetsii|Boiler 1",
      "Cyclone|Tsetsii|Boiler 2",
      "Cyclone|Tsetsii|Boiler 3"
    ]
  },
  "Crane/Hoist|Electric Hoist|CD12": {
    "code": "CN504",
    "category": "50.01.07",
    "process_areas": [
      "ESP 1 /ElectPrecipi/",
      "ESP 2 /ElectPrecipi/",
      "ESP 3 /ElectPrecipi/"
    ],
    "asset_descriptions": [
      "Crane/Hoist|Power Plant|ESP 1",
      "Crane/Hoist|Power Plant|ESP 2",
      "Crane/Hoist|Power Plant|ESP 3"
    ]
  },
  "Generator|Diesel generator|PPU2900": {
    "code": "GE701",
    "category": "30.05.24",
    "process_areas": [
      "UHG SubSt DieselSt-1"
    ],
    "asset_descriptions": [
      "Generator|Diesel generator|UHG substation|DG 1-1",
      "Generator|Diesel generator|UHG substation|DG 1-2",
      "Generator|Diesel generator|UHG substation|DG 1-3",
      "Generator|Diesel generator|UHG substation|DG 1-4"
    ]
  },
  "Centrifugal fan|FD fan": {
    "code": "FP601",
    "category": "80.11.01",
    "process_areas": [
      "ERT Boiler House",
      "Gallery Boiler House",
      "Mining Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-Centrifugal fan|Gallerei|FD fan 1",
      "ER(M)-Centrifugal fan|Mining|FD fan 1",
      "ER(M)-Centrifugal fan|Mining|FD fan 2",
      "ER(M)-Centrifugal fan|Tsetsii|FD fan 1",
      "ER(M)-Centrifugal fan|Tsetsii|FD fan 2",
      "ER(M)-Centrifugal fan|Tsetsii|FD fan 3",
      "ERT-Centrifugal fan|ERT|FD fan 1",
      "ERT-Centrifugal fan|ERT|FD fan 2",
      "ERT-Centrifugal fan|ERT|FD fan 3"
    ]
  },
  "Drilling and Milling|Milling machine": {
    "code": "KR502",
    "category": "80.15.99",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Drilling and Milling|Maintenance center|Milling machine"
    ]
  },
  "Bending Machine|Pipe Dn38": {
    "code": "ER501",
    "category": "80.15.99",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Bending Machine|Maintenance center"
    ]
  },
  "Centrifugal fan|ID fan": {
    "code": "FP602",
    "category": "80.11.01",
    "process_areas": [
      "ERT Boiler House",
      "Gallery Boiler House",
      "Mining Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "Centrifugal fan|ERT|ID fan 1",
      "Centrifugal fan|ERT|ID fan 2",
      "Centrifugal fan|ERT|ID fan 3",
      "ER(M)-Centrifugal fan|Gallerei|FD fan 2",
      "ER(M)-Centrifugal fan|Gallerei|ID fan 1",
      "ER(M)-Centrifugal fan|Gallerei|ID fan 2",
      "ER(M)-Centrifugal fan|Mining|ID fan 1",
      "ER(M)-Centrifugal fan|Mining|ID fan 2",
      "ER(M)-Centrifugal fan|Tsetsii|ID fan 1",
      "ER(M)-Centrifugal fan|Tsetsii|ID fan 2",
      "ER(M)-Centrifugal fan|Tsetsii|ID fan 3"
    ]
  },
  "Belt Conveyor|coal": {
    "code": "BC601",
    "category": "20.99.01",
    "process_areas": [
      "ERT Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "Belt Conveyor|ERT Boiler|Bad Ash Conveyor",
      "Belt Conveyor|ERT Boiler|Coal Conveyor",
      "Belt Conveyor|Tsetsii|Coal Conveyor 1",
      "Belt Conveyor|Tsetsii|Coal Conveyor 2",
      "Belt Conveyor|Tsetsii|Coal Conveyor 3"
    ]
  },
  "Elevator/Escalator|ash": {
    "code": "EC601",
    "category": "10.02.01",
    "process_areas": [
      "ERT Boiler House",
      "Gallery Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "Elevator/Escalator|ERT|Bad Ash 1",
      "Elevator/Escalator|ERT|Bad Ash 2",
      "Elevator/Escalator|Gallery Camp|Bad Ash 1",
      "Elevator/Escalator|Gallery Camp|Bad Ash 2",
      "Elevator/Escalator|Tsetsii|Bad Ash 1",
      "Elevator/Escalator|Tsetsii|Bad Ash 2",
      "Elevator/Escalator|Tsetsii|Bad Ash 3"
    ]
  },
  "Transformer|Power Transformer 10/04 kV": {
    "code": "TF703",
    "category": "30.05.09",
    "process_areas": [
      "CHPP Galiin usan san",
      "CHPP HayagUsguijuleh",
      "CHPP labrotor",
      "Galarei camp",
      "Gallerey camp",
      "Loop",
      "Maiga uul usan san",
      "Mining offise",
      "Mining shuuruuleh",
      "Mining simulator",
      "Mining work shop",
      "PP camp",
      "Post",
      "Post 81",
      "Public serves",
      "Sumiin Tseverleh",
      "TG New Work Shop",
      "TG Work Shop",
      "TT Airport",
      "Tsetsii horoolol",
      "UndniiUsTsevershuleh",
      "Uurhachin horoolol",
      "Uurhain Tseverleh",
      "WS Substation",
      "Water supply office",
      "Water supply/Naimdai",
      "ХОТХОН substation"
    ],
    "asset_descriptions": [
      "ER(M)-Transformer|Power transformer|KTPN-11|400kVA",
      "ER(M)-Transformer|Power transformer|KTPN-12|100kVA",
      "ER(M)-Transformer|Power transformer|KTPN-14|630kVA",
      "ER(M)-Transformer|Power transformer|KTPN-15|630kVA",
      "ER(M)-Transformer|Power transformer|KTPN-16|630kVA",
      "ER(M)-Transformer|Power transformer|KTPN-2|2500kVA",
      "ER(M)-Transformer|Power transformer|KTPN-31|250kVA",
      "ER(M)-Transformer|Power transformer|KTPN-32|250kVA",
      "ER(M)-Transformer|Power transformer|KTPN-33|400kVA",
      "ER(M)-Transformer|Power transformer|KTPN-34|400kVA",
      "ER(M)-Transformer|Power transformer|KTPN-36|30kVA",
      "ER(M)-Transformer|Power transformer|KTPN-37|160kVA",
      "ER(M)-Transformer|Power transformer|KTPN-38|100kVA",
      "ER(M)-Transformer|Power transformer|KTPN-39100kVA",
      "ER(M)-Transformer|Power transformer|KTPN-3|400kVA",
      "ER(M)-Transformer|Power transformer|KTPN-40|100kVA",
      "ER(M)-Transformer|Power transformer|KTPN-41|100kVA",
      "ER(M)-Transformer|Power transformer|KTPN-8|25kVA",
      "ER(M)-Transformer|Power transformer|ХТП-1 |800 kVA Тр-1",
      "ER(M)-Transformer|Power transformer|ХТП-1 |800 kVA Тр-2",
      "ER(M)-Transformer|Power transformer|ХТП-2 |800kVA Тр-1",
      "ER(M)-Transformer|Power transformer|ХТП-2 |800kVA Тр-2",
      "ER(M)-Transformer|Power transformer|ХТП-4 |400kVA Тр-1",
      "ER(M)-Transformer|Power transformer|ХТП-4 |400kVA Тр-2",
      "ERT-Transformer|Power transformer|KTPN-4|250kVA",
      "ERT-Transformer|Power transformer|KTPN-5|100kVA",
      "ERT-Transformer|Power transformer|KTPN-6|1000kVA",
      "TG-Transformer|Power transformer|KTPN-35|160kVA",
      "TG-Transformer|Power transformer|KTPN-47|630kVA",
      "TG-Transformer|Power transformer|KTPN-7|250kVA",
      "Transformer|Power transformer|S9-M30/10 ДХТ-1",
      "Transformer|Power transformer|S9-M30/10 ДХТ-1 УС ХАНГАМЖ",
      "Transformer|Power transformer|S9-M30/10 ДХТ-2",
      "Transformer|Power transformer|S9-M30/10 ДХТ-2 УС ХАНГАМЖ",
      "Transformer|Power transformer|ТСЗ-10 kVA ДХТ-1 ХОТХОН",
      "Transformer|Power transformer|ТСЗ-10 kVA ДХТ-2 ХОТХОН",
      "WS-Transformer|Power transformer|KTPN-10|25kVA",
      "WS-Transformer|Power transformer|KTPN-13|250kVA",
      "WS-Transformer|Power transformer|KTPN-17|400kVA",
      "WS-Transformer|Power transformer|KTPN-18|630kVA",
      "WS-Transformer|Power transformer|KTPN-19|63kVA",
      "WS-Transformer|Power transformer|KTPN-1|100kVA",
      "WS-Transformer|Power transformer|KTPN-20|100kVA",
      "WS-Transformer|Power transformer|KTPN-22|100kVA",
      "WS-Transformer|Power transformer|KTPN-23|100kVA",
      "WS-Transformer|Power transformer|KTPN-24|63kVA",
      "WS-Transformer|Power transformer|KTPN-25|100kVA",
      "WS-Transformer|Power transformer|KTPN-26|40kVA",
      "WS-Transformer|Power transformer|KTPN-27|40kVA",
      "WS-Transformer|Power transformer|KTPN-28|63kVA",
      "WS-Transformer|Power transformer|KTPN-29|63kVA",
      "WS-Transformer|Power transformer|KTPN-30|30kVA",
      "WS-Transformer|Power transformer|KTPN-44|250kVA",
      "WS-Transformer|Power transformer|KTPN-49|250kVA",
      "WS-Transformer|Power transformer|KTPN-9|400kVA",
      "WS-Transformer|[Power transformer|KTPN-21|100kVA"
    ]
  },
  "Heat Exchanger|Heat Exchanger unit": {
    "code": "HX501",
    "category": "80.01.19",
    "process_areas": [
      "PowerPlant Build 12m"
    ],
    "asset_descriptions": [
      "Heat Exchanger||Power plant heating system|Heat Exchanger 1",
      "Heat Exchanger||Power plant heating system|Heat Exchanger 2"
    ]
  },
  "Engine|Diesel engine|20V4000G23": {
    "code": "DA701",
    "category": "10.02.03",
    "process_areas": [
      "UHG SubSt DieselSt-1"
    ],
    "asset_descriptions": [
      "Engine|UHG substation|DG1-1",
      "Engine|UHG substation|DG1-2",
      "Engine|UHG substation|DG1-3",
      "Engine|UHG substation|DG1-4"
    ]
  },
  "Switchgear|motor control center2": {
    "code": "HE302",
    "category": "30.05.15",
    "process_areas": [
      "MotorControl Center2"
    ],
    "asset_descriptions": [
      "Switchgear| Invertor|ACC 2-2",
      "Switchgear| Invertor|FW pump 1",
      "Switchgear| Invertor|FW pump 2",
      "Switchgear| Invertor|FW pump 3",
      "Switchgear|Distribution panel 4-1",
      "Switchgear|Distribution panel 4-10",
      "Switchgear|Distribution panel 4-11",
      "Switchgear|Distribution panel 4-12",
      "Switchgear|Distribution panel 4-13",
      "Switchgear|Distribution panel 4-14",
      "Switchgear|Distribution panel 4-2",
      "Switchgear|Distribution panel 4-3",
      "Switchgear|Distribution panel 4-4",
      "Switchgear|Distribution panel 4-5",
      "Switchgear|Distribution panel 4-6",
      "Switchgear|Distribution panel 4-7",
      "Switchgear|Distribution panel 4-8",
      "Switchgear|Distribution panel 4-9",
      "Switchgear|Invertor|ACC 1-1",
      "Switchgear|Invertor|ACC 1-2",
      "Switchgear|Invertor|ACC 2-1",
      "Switchgear|Invertor|ACC 3-1",
      "Switchgear|Invertor|ACC 3-2",
      "Switchgear|Invertor|FW pump 4",
      "Switchgear|Invertor|ID fan1",
      "Switchgear|Invertor|ID fan2",
      "Switchgear|Invertor|ID fan3",
      "Switchgear|Invertor|PA fan1",
      "Switchgear|Invertor|PA fan2",
      "Switchgear|Invertor|PA fan3",
      "Switchgear|Invertor|SA fan1",
      "Switchgear|Invertor|SA fan2",
      "Switchgear|Invertor|SA fan3",
      "Switchgear|excitation panel 1",
      "Switchgear|excitation panel 2",
      "Switchgear|excitation panel 3",
      "Switchgear|heating control panel 1",
      "Switchgear|heating control panel 2"
    ]
  },
  "Switchgear|Switchroom 4": {
    "code": "HE308",
    "category": "30.05.15",
    "process_areas": [
      "Switchroom 4"
    ],
    "asset_descriptions": [
      "Switchgear|10kV PC 1 section panel |line 11",
      "Switchgear|10kV PC 3 section panel |line 12",
      "Switchgear|Busbar coupling panel 1",
      "Switchgear|Busbar coupling panel 2",
      "Switchgear|Generator cable incoming panel 1",
      "Switchgear|Generator cable incoming panel 2",
      "Switchgear|Generator cable incoming panel 3",
      "Switchgear|Plant distribution transformator panel 0",
      "Switchgear|Plant distribution transformator panel 1",
      "Switchgear|Plant distribution transformator panel 2",
      "Switchgear|Plant distribution transformator panel 3",
      "Switchgear|Plant distribution transformator panel 4",
      "Switchgear|Plug panel 1",
      "Switchgear|Plug panel 2",
      "Switchgear|Voltage transformator panel 1",
      "Switchgear|Voltage transformator panel 2",
      "Switchgear|Voltage transformator panel 3"
    ]
  },
  "Switchgear|Switchroom 1 2 3": {
    "code": "HE309",
    "category": "30.05.15",
    "process_areas": [
      "switchroom 1",
      "switchroom 2",
      "switchroom 3"
    ],
    "asset_descriptions": [
      "Switchgear| Withdraw able metal clad AC Switchgear 1-1",
      "Switchgear| Withdraw able metal clad AC Switchgear 1-2",
      "Switchgear| Withdraw able metal clad AC Switchgear 1-3",
      "Switchgear| Withdraw able metal clad AC Switchgear 1-4",
      "Switchgear| Withdraw able metal clad AC Switchgear 2-1",
      "Switchgear| Withdraw able metal clad AC Switchgear 2-2",
      "Switchgear| Withdraw able metal clad AC Switchgear 2-3",
      "Switchgear| Withdraw able metal clad AC Switchgear 2-4",
      "Switchgear| Withdraw able metal clad AC Switchgear 3-1",
      "Switchgear| Withdraw able metal clad AC Switchgear 3-2",
      "Switchgear| Withdraw able metal clad AC Switchgear 3-3",
      "Switchgear| Withdraw able metal clad AC Switchgear 3-4"
    ]
  },
  "Breaker|Vacuum Breaker": {
    "code": "BM701",
    "category": "10.05.06",
    "process_areas": [
      "Khothon SubS10kV SR",
      "UHG SubSt10kV Switch",
      "WS substation"
    ],
    "asset_descriptions": [
      "Breaker|Khothon|Feeder-10 Vacuum Breaker Bus Coupler",
      "Breaker|Khothon|Feeder-11 Vacuum Breaker Airport",
      "Breaker|Khothon|Feeder-12 Vacuum Breaker Worker district",
      "Breaker|Khothon|Feeder-13 Vacuum Breaker Tsetsii district 2",
      "Breaker|Khothon|Feeder-14 Vacuum Breaker ER Camp 2",
      "Breaker|Khothon|Feeder-15 Vacuum Breaker Voltage Transformer 2",
      "Breaker|Khothon|Feeder-16 Vacuum Breaker Incoming Feeder 2",
      "Breaker|Khothon|Feeder-17 Vacuum Breaker Service Transformer 2",
      "Breaker|Khothon|Feeder-2 Vacuum Breaker Incoming Feeder 1",
      "Breaker|Khothon|Feeder-3 Vacuum Breaker Voltage Transformer 1",
      "Breaker|Khothon|Feeder-4 Vacuum Breaker Tsetsii district 1",
      "Breaker|Khothon|Feeder-5 Vacuum Breaker Sumiin Zuun",
      "Breaker|Khothon|Feeder-6 Vacuum Breaker Provision",
      "Breaker|Khothon|Feeder-7 Vacuum Breaker Provision",
      "Breaker|Khothon|Feeder-8 Vacuum Breaker Provision",
      "Breaker|UHG Substation|Feeder-1 Vacuum Breaker Incoming Feeder 1",
      "Breaker|UHG Substation|Feeder-10|Vacuum Breaker Provision",
      "Breaker|UHG Substation|Feeder-11-1|Vacuum Breaker Bus Coupler",
      "Breaker|UHG Substation|Feeder-11-2|Vacuum Breaker Bus Coupler",
      "Breaker|UHG Substation|Feeder-12|Vacuum Breaker Catchment",
      "Breaker|UHG Substation|Feeder-13|Vacuum Breaker Incoming Feeder 2",
      "Breaker|UHG Substation|Feeder-14|Vacuum Breaker Camp",
      "Breaker|UHG Substation|Feeder-14|Vacuum Breaker Water Supply-B",
      "Breaker|UHG Substation|Feeder-15|Vacuum Breaker Provision",
      "Breaker|UHG Substation|Feeder-16|Vacuum Breaker Mining",
      "Breaker|UHG Substation|Feeder-16|Vacuum Breaker Modul-2",
      "Breaker|UHG Substation|Feeder-17|Vacuum Breaker Povision",
      "Breaker|UHG Substation|Feeder-17|Vacuum Breaker Provision",
      "Breaker|UHG Substation|Feeder-18 Vacuum Breaker Diesel Stattion-2",
      "Breaker|UHG Substation|Feeder-18 Vacuum Breaker Rude Coal",
      "Breaker|UHG Substation|Feeder-19 Vacuum Breaker Incoming Feeder 2",
      "Breaker|UHG Substation|Feeder-19 Vacuum Breaker Turning water hole",
      "Breaker|UHG Substation|Feeder-1|Vacuum Breaker Provision",
      "Breaker|UHG Substation|Feeder-2 Vacuum Breaker Modul-3",
      "Breaker|UHG Substation|Feeder-2 Vacuum Breaker Provision",
      "Breaker|UHG Substation|Feeder-20 Vacuum Breaker 12th line",
      "Breaker|UHG Substation|Feeder-20 Vacuum Breaker Provision",
      "Breaker|UHG Substation|Feeder-22 Vacuum Breaker HB-1B",
      "Breaker|UHG Substation|Feeder-3 Vacuum Breaker Provision",
      "Breaker|UHG Substation|Feeder-3 Vacuum Breaker Water Supply-A",
      "Breaker|UHG Substation|Feeder-4 Vacuum Breaker 11th line",
      "Breaker|UHG Substation|Feeder-4 Vacuum Breaker Provision",
      "Breaker|UHG Substation|Feeder-5 Breaker Service Transformer 1",
      "Breaker|UHG Substation|Feeder-5 Vacuum Breaker Ovoolgo",
      "Breaker|UHG Substation|Feeder-6 Vacuum Breaker HB-1A",
      "Breaker|UHG Substation|Feeder-6 Vacuum Breaker Steam Boiler",
      "Breaker|UHG Substation|Feeder-7 Vacuum Breaker Modul-1",
      "Breaker|UHG Substation|Feeder-8 Vacuum Breaker Incoming Feeder 1",
      "Breaker|UHG Substation|Feeder-8 Vacuum Breaker Povision",
      "WS-Breaker|WS substation|Vacuum breaker-10|Худгийн-А",
      "WS-Breaker|WS substation|Vacuum breaker-11|Өргөх-2",
      "WS-Breaker|WS substation|Vacuum breaker-12|Spear",
      "WS-Breaker|WS substation|Vacuum breaker-2|Spear",
      "WS-Breaker|WS substation|Vacuum breaker-3|Өргөх-1",
      "WS-Breaker|WS substation|Vacuum breaker-4|Худгийн-А",
      "WS-Breaker|WS substation|Vacuum breaker-5|Оролт-1",
      "WS-Breaker|WS substation|Vacuum breaker-6|СХТ",
      "WS-Breaker|WS substation|Vacuum breaker-8|Оролт-2",
      "WS-Breaker|WS substation|Vacuum breaker-9|Худгийн-В"
    ]
  },
  "Transformer|Power Transformer 110/35/10 kV": {
    "code": "TF701",
    "category": "30.05.09",
    "process_areas": [
      "UHG substation"
    ],
    "asset_descriptions": [
      "Transformer|Power transformer|TLSN-7651| 110/35/10 kV Tr-1",
      "Transformer|Power transformer|TLSN-7651| 110/35/10 kV Tr-2"
    ]
  },
  "High Voltage Cable|10kV": {
    "code": "HJ701",
    "category": "30.05.18",
    "process_areas": [
      "Achilchdiin horoolol",
      "Hothon10kV HVC Camp2",
      "Shuuruuleh",
      "TT Airport",
      "Tetsii horoolol-1",
      "Tetsii horoolol-2",
      "WS Hudgiin A",
      "WS Hudgiin B",
      "WS Hudgiin C",
      "WS Urguh-1",
      "WS Urguh-2"
    ],
    "asset_descriptions": [
      "ER(M)-High Voltage Cable|Hothon Achilchdiin horoolol AAБлУ-10\\3х120 L=400m",
      "ER(M)-High Voltage Cable|Hothon Camp-2 YJLV 10 kV\\3x120 L=320m",
      "ER(M)-High Voltage Cable|Hothon Tetsii horoolol-1 |YJLV 10kV/3x240 L=520",
      "ER(M)-High Voltage Cable|Shuuruuleh AAБлУ-3х120\\10кВL=83m",
      "ER(M)-High Voltage Cable|Shuuruuleh YJLV 10kV\\3x120L=250m",
      "ER(M)-High Voltage Cable|Shuuruuleh YJLV 10kV\\3x240L=106m",
      "ER(M)-High Voltage Cable|TT Airport",
      "WS-High Voltage Cable|Hothon Tetsii horoolol-2 |YJLV 10kV/3x240 L=520",
      "WS-High Voltage Cable|WS Hudgiin A |YJLV 10 kV\\3x95 L=32m",
      "WS-High Voltage Cable|WS Hudgiin B |YJLV 10 kV\\3x95 L=35m",
      "WS-High Voltage Cable|WS Hudgiin C |YJLV 10 kV\\3x95 L=40m",
      "WS-High Voltage Cable|WS Urguh-1 | YJLV 10 kV\\3x95 L=75m",
      "WS-High Voltage Cable|WS Urguh-2 |YJLV 10 kV\\3x95 L=75m"
    ]
  },
  "Lab instrument|coal lab": {
    "code": "LI402",
    "category": "30.06.03",
    "process_areas": [
      "coal lab"
    ],
    "asset_descriptions": [
      "Lab instrument|Chemical coal lab Bomb  of calorimeter",
      "Lab instrument|Chemical coal lab Drying Oven",
      "Lab instrument|Chemical coal lab Hammer Crushing and division Apparatus",
      "Lab instrument|Chemical coal lab Oxygen Bomb Calorimeter",
      "Lab instrument|Chemical coal lab Pulverizer",
      "Lab instrument|Chemical coal lab chemical balance",
      "Lab instrument|Chemical coal lab electronic scale",
      "Lab instrument|Chemical coal lab sifter",
      "Lab instrument|Chemical coal lab  Burner"
    ]
  },
  "Lab instrument|oil lab": {
    "code": "LI403",
    "category": "30.06.03",
    "process_areas": [
      "Oil lab"
    ],
    "asset_descriptions": [
      "Lab instrument|Chemical Oil lab",
      "Lab instrument|Chemical Oil lab Auto Cleveland Open Cap Flash Point Tester",
      "Lab instrument|Chemical Oil lab Automatic Pensky- Martens Closed Cup Flash Point Tester",
      "Lab instrument|Chemical Oil lab Exhaust Hood",
      "Lab instrument|Chemical Oil lab Kinematic Viscometer for Petroleum Product",
      "Lab instrument|Chemical Oil lab Tester for Water in  Crude Oil by distillation",
      "Lab instrument|Chemical Oil lab electronic scale",
      "Lab instrument|Chemical control room Exhaust hood",
      "Lab instrument|Chemical room of chemical analyst"
    ]
  },
  "Pressure Tank|outdoor": {
    "code": "NT101",
    "category": "30.01.12",
    "process_areas": [
      "Boiler house|0m",
      "Boiler house|12m",
      "Boiler house|Outside"
    ],
    "asset_descriptions": [
      "Pressure Tank|Blowdown tank",
      "Pressure Tank|Drain flash tank",
      "Pressure tank|40m³ LDO storage tank",
      "Pressure tank|Ignition oil tank"
    ]
  },
  "Hammer crasher|PCH-0808": {
    "code": "HK101",
    "category": "20.01.01",
    "process_areas": [
      "HammerCrusherHouse5m"
    ],
    "asset_descriptions": [
      "Hammer crusher|Coal hadling system"
    ]
  },
  "Engine|Diesel engine| 1006TAG2": {
    "code": "DA704",
    "category": "10.02.03",
    "process_areas": [
      "TTA Diesel station",
      "TsagaanKhad DieselSt"
    ],
    "asset_descriptions": [
      "TG-Engine|Tsagaan khad|DG-6",
      "TTA-Engine|TTA|DG-2"
    ]
  },
  "Transformer|WS Substation": {
    "code": "TF704",
    "category": "30.05.09",
    "process_areas": [
      "WS SubSt 1 A phase",
      "WS SubSt 1 B phase",
      "WS SubSt 1 C phase",
      "WS SubSt 2 A phase",
      "WS SubSt 2 B phase",
      "WS SubSt 2 C phase"
    ],
    "asset_descriptions": [
      "WS-Transformer|WS Substation|Current Transformer-1|35kV A phase",
      "WS-Transformer|WS Substation|Current Transformer-1|35kV B phase",
      "WS-Transformer|WS Substation|Current Transformer-1|35kV C phase",
      "WS-Transformer|WS Substation|Current Transformer-2|35kV A phase",
      "WS-Transformer|WS Substation|Current Transformer-2|35kV B phase",
      "WS-Transformer|WS Substation|Current Transformer-2|35kV C phase"
    ]
  },
  "Water pump|boiler main water pump": {
    "code": "WP601",
    "category": "10.10.17",
    "process_areas": [
      "ERT Boiler House",
      "ERT Camp BoilerHouse",
      "Gallery Boiler House",
      "Mining Boiler House",
      "TG Boiler House",
      "TTA Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-Water pump|ERT Camp|Boiler main water pump 1",
      "ER(M)-Water pump|ERT Camp|Boiler main water pump 2",
      "ER(M)-Water pump|Gallerei|Boiler main water pump 1",
      "ER(M)-Water pump|Gallerei|Boiler main water pump 2",
      "ER(M)-Water pump|Mining|Boiler main water pump 1",
      "ER(M)-Water pump|Mining|Boiler main water pump 2",
      "ER(M)-Water pump|Tsetsii|Boiler main water pump 1",
      "ER(M)-Water pump|Tsetsii|Boiler main water pump 2",
      "ER(M)-Water pump|Tsetsii|Boiler main water pump 3",
      "ERT-Water pump|ERT|Boiler main water pump 1",
      "ERT-Water pump|ERT|Boiler main water pump 2",
      "ERT-Water pump|ERT|Boiler main water pump 3",
      "TG-Water pump|TG|Boiler main water pump 1",
      "TG-Water pump|TG|Boiler main water pump 2",
      "TTA-Water pump| TT airport|Boiler main water pump 1",
      "TTA-Water pump| TT airport|Boiler main water pump 2"
    ]
  },
  "Water pump|Raw water pump": {
    "code": "WP401",
    "category": "20.03.17",
    "process_areas": [
      "Pure water",
      "Raw water"
    ],
    "asset_descriptions": [
      "Water pump|FAWS Lifting pump 1",
      "Water pump|FAWS Lifting pump 2",
      "Water pump|Watertreament Back Flushing Pump",
      "Water pump|Watertreament Raw water pump 1",
      "Water pump|Watertreament Raw water pump 2"
    ]
  },
  "Water pump|Water make-up pump": {
    "code": "WP602",
    "category": "10.10.17",
    "process_areas": [
      "ERT Boiler House",
      "Gallery Boiler House",
      "Mining Boiler House",
      "TG Boiler House",
      "TTA Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-Water pump|Gallerei|Boiler make-up water pump 1",
      "ER(M)-Water pump|Gallerei|Boiler make-up water pump 2",
      "TG-Water pump|TG|Boiler make-up water pump 1",
      "TTA-Water pump| TT airport|Boiler make-up water pump 1",
      "Water pump|ERT|Boiler make-up water pump 1",
      "Water pump|ERT|Boiler make-up water pump 2",
      "Water pump|Mining|Boiler make-up water pump 1",
      "Water pump|Mining|Boiler make-up water pump 2|Willo",
      "Water pump|Tsetsii|Boiler make-up water pump 1",
      "Water pump|Tsetsii|Boiler make-up water pump 2"
    ]
  },
  "Water pump|Pure water pump": {
    "code": "WP402",
    "category": "20.03.17",
    "process_areas": [
      "Pure water",
      "Reverse osmos"
    ],
    "asset_descriptions": [
      "Water pump|Watertreament RO 1 High Pressure Pump",
      "Water pump|Watertreament RO 2 High Pressure Pump",
      "Water pump|Watertreament pure water pump 1",
      "Water pump|Watertreament pure water pump 2",
      "Water pump|Watertreament pure water pump 3"
    ]
  },
  "Water pump|Cleaning pump": {
    "code": "WP403",
    "category": "20.03.17",
    "process_areas": [
      "Reverse osmos"
    ],
    "asset_descriptions": [
      "Water pump|Watertreament RO cleaning"
    ]
  },
  "Breaker|Breaker": {
    "code": "BM702",
    "category": "10.05.06",
    "process_areas": [
      "35/10kV UsHan. DedSt",
      "Khothon SubS10kV SR",
      "Khothon SubS35kV SR",
      "UHG SubSt10kV Switch",
      "WS substation"
    ],
    "asset_descriptions": [
      "Breaker|Khothon|Breaker-1|T-1 Шин.С",
      "Breaker|Khothon|Breaker-2|T-2 Шин.С",
      "Breaker|Khothon|Breaker-3|ХT-1 Шин.С",
      "Breaker|Khothon|Breaker-4|ХT-2 Шин.С",
      "Breaker|Khothon|Breaker-5|С.С-1",
      "Breaker|Khothon|Breaker-6|С.С-2",
      "Breaker|Khothon|Breaker-7Хотхон-А Шу.С",
      "Breaker|Khothon|Breaker-8|Хотхон-Б Шу.С",
      "Breaker|Khothon|Feeder-1 Breaker Service Transformer 1",
      "Breaker|Khothon|Feeder-9 Breaker Bus Riser",
      "Breaker|UHG Substation|Feeder-10|Breaker Bus Riser",
      "Breaker|UHG Substation|Feeder-15|Breaker Service Transformer 2",
      "Breaker|UHG Substation|Feeder-9 Breaker Bus Riser",
      "Breaker|WS substation|Breaker-1|ДХТ-1",
      "WS-Breaker|WS substation|Breaker-1|T-1 Шин.С",
      "WS-Breaker|WS substation|Breaker-2|T-2 Шин.С",
      "WS-Breaker|WS substation|Breaker-3|ХT-1 Шин.С",
      "WS-Breaker|WS substation|Breaker-4|ХT-2 Шин.С",
      "WS-Breaker|WS substation|Breaker-5|С.С-1",
      "WS-Breaker|WS substation|Breaker-6|С.С-2",
      "WS-Breaker|WS substation|Breaker-7|СХС",
      "WS-Breaker|WS substation|Breaker-7|Ус хангамж-А Шу.С",
      "WS-Breaker|WS substation|Breaker-8|Ус хангамж-Б Шу.С"
    ]
  },
  "Generator|Diesel generator|GEP165": {
    "code": "GE704",
    "category": "30.05.24",
    "process_areas": [
      "TTA Diesel station",
      "TsagaanKhad DieselSt"
    ],
    "asset_descriptions": [
      "Generator|Diesel generator|Airport|DG 1-2",
      "Generator|Diesel generator|Tsagaan Khad|DG 6"
    ]
  },
  "Generator|Diesel generator|GSW110": {
    "code": "GE711",
    "category": "30.05.24",
    "process_areas": [
      "Transportab.DieselSt"
    ],
    "asset_descriptions": [
      "Generator|Diesel generator|UHG substation|Portable|DG 3",
      "Generator|Diesel generator|UHG substation|Portable|DG 4"
    ]
  },
  "Generator|Diesel generator|GSW560": {
    "code": "GE707",
    "category": "30.05.24",
    "process_areas": [
      "BoiPlace-CHPP DieSt",
      "Transportab.DieselSt"
    ],
    "asset_descriptions": [
      "Generator|Diesel generator|CHPP|Emergency",
      "Generator|Diesel generator|UHG substation|Portable|DG 1"
    ]
  },
  "Switchgear|Control Station": {
    "code": "HE306",
    "category": "30.05.15",
    "process_areas": [
      "Control Station 1"
    ],
    "asset_descriptions": [
      "Switchgear|Control Station|Auxiliary power auto transfer panel 1",
      "Switchgear|Control Station|Auxiliary power auto transfer panel 2",
      "Switchgear|Control Station|Control and central signaling panel 1",
      "Switchgear|Control Station|Control and central signaling panel 2",
      "Switchgear|Control Station|Control and central signaling panel 3",
      "Switchgear|Control Station|Emergency lighting switch panel",
      "Switchgear|Control Station|Synchronization panel",
      "Switchgear|Control Station|System communication panel"
    ]
  },
  "Tank|air tank C-0.6/0.8": {
    "code": "TK303",
    "category": "30.01.13",
    "process_areas": [
      "House pump"
    ],
    "asset_descriptions": [
      "Tank|compressor|air tank C-0.6/0.8"
    ]
  },
  "Tank|air tank C-3/0.8": {
    "code": "TK302",
    "category": "30.01.13",
    "process_areas": [
      "House pump"
    ],
    "asset_descriptions": [
      "Tank|compressor|air tank C-3/0.8"
    ]
  },
  "Cutting Machine|Band sawing machine": {
    "code": "JR502",
    "category": "80.15.02",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Cutting Machine|Maintenance center|Band sawing machine"
    ]
  },
  "Quench Cooler|GTL10C": {
    "code": "QX101",
    "category": "30.02.17",
    "process_areas": [
      "Boiler#1|BoilerH 0m",
      "Boiler#2|BoilerH 0m",
      "Boiler#3|BoilerH 0m"
    ],
    "asset_descriptions": [
      "Quench Cooler|Boiler 1|Ash Cooler 1",
      "Quench Cooler|Boiler 1|Ash Cooler 2",
      "Quench Cooler|Boiler 2|Ash Cooler 1",
      "Quench Cooler|Boiler 2|Ash Cooler 2",
      "Quench Cooler|Boiler 3|Ash Cooler 1",
      "Quench Cooler|Boiler 3|Ash Cooler 2"
    ]
  },
  "Bin/Hopper|Coal": {
    "code": "BN101",
    "category": "20.02.17",
    "process_areas": [
      "Boiler house|0m-22m",
      "Boiler house|Outside",
      "Boiler#1|BoilerH 22m",
      "Boiler#2|BoilerH 22m",
      "Boiler#3|BoilerH 22m",
      "Coal handle system",
      "ID fan house|Outside"
    ],
    "asset_descriptions": [
      "Bin/Hopper|Power Plant|Bed ash bin 1",
      "Bin/Hopper|Power Plant|Bed ash bin 2",
      "Bin/Hopper|Power Plant|Boiler 1|Coal hopper A",
      "Bin/Hopper|Power Plant|Boiler 1|Coal hopper B",
      "Bin/Hopper|Power Plant|Boiler 2|Coal hopper A",
      "Bin/Hopper|Power Plant|Boiler 2|Coal hopper B",
      "Bin/Hopper|Power Plant|Boiler 3|Coal hopper A",
      "Bin/Hopper|Power Plant|Boiler 3|Coal hopper B",
      "Bin/Hopper|Power Plant|Coal Hopper 40m3",
      "Bin/Hopper|Power Plant|Coal Hopper 60m3",
      "Bin/Hopper|Power Plant|Emergency Coal Hopper",
      "Bin/Hopper|Power Plant|FAPS bin",
      "Bin/Hopper|Power Plant|Limestone hopper"
    ]
  },
  "Building - Boiler House": {
    "code": "HZ001",
    "category": "60.04.02",
    "process_areas": [
      "ERT Boiler House",
      "ERT Camp BoilerHouse",
      "Gallery Boiler House",
      "Mining Boiler House",
      "Power plant",
      "TG Boiler House",
      "TTA Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "Boiler House|ERT",
      "Boiler House|ERT Camp",
      "Boiler House|Gallery Camp",
      "Boiler House|Mining",
      "Boiler House|TG",
      "Boiler House|TT airport",
      "Boiler House|Tsetsii",
      "Building-General|Power plant|Main building"
    ]
  },
  "Boiler|DACON": {
    "code": "BB604",
    "category": "80.01.27",
    "process_areas": [
      "TTA Boiler House"
    ],
    "asset_descriptions": [
      "Boiler|TT Airport"
    ]
  },
  "Boiler|HP05": {
    "code": "BB603",
    "category": "80.01.27",
    "process_areas": [
      "ERT Boiler House",
      "ERT Camp BoilerHouse"
    ],
    "asset_descriptions": [
      "Boiler|ERT Camp|Boiler",
      "Boiler|ERT|Boiler 3"
    ]
  },
  "Transformer|Power Transformer 35/10/04 kV": {
    "code": "TF702",
    "category": "30.05.09",
    "process_areas": [
      "CHPP Boiler house",
      "CHPP HayaglaiinDalan",
      "CHPP Module-1",
      "CHPP Module-2",
      "CHPP Module-3",
      "CHPP ProductHandling",
      "CHPP Raw coal-3",
      "CHPP Retutn water",
      "Hothon substation",
      "WS substation"
    ],
    "asset_descriptions": [
      "ER(M)-Transformer|Power transformer| TM-4000\\35| 35/10 kV Хотхон дэд станц Tr-2",
      "ERT-Transformer|Power transformer|CHPP Boiler houze|SB-M-500/35| 35/04 kV TF-903",
      "ERT-Transformer|Power transformer|CHPP Hayaglaiin dalan|SB-M-2000/35| 35/04 kV",
      "ERT-Transformer|Power transformer|CHPP Moduli-1|SB-M-1000/35| 35/04 kV TF-403",
      "ERT-Transformer|Power transformer|CHPP Moduli-1|SB-M-3000/35| 35/04 kV TF-401",
      "ERT-Transformer|Power transformer|CHPP Moduli-1|SB-M-3000/35| 35/04 kV TF-402",
      "ERT-Transformer|Power transformer|CHPP Moduli-2|SB-M-1000/35| 35/04 kV TF-424",
      "ERT-Transformer|Power transformer|CHPP Moduli-2|SB-M-3000/35| 35/04 kV TF-421",
      "ERT-Transformer|Power transformer|CHPP Moduli-2|SB-M-3000/35| 35/04 kV TF-422",
      "ERT-Transformer|Power transformer|CHPP Moduli-3|SB-M-1000/35| 35/04 kV TF-444",
      "ERT-Transformer|Power transformer|CHPP Moduli-3|SB-M-3000/35| 35/04 kV TF-441",
      "ERT-Transformer|Power transformer|CHPP Moduli-3|SB-M-3000/35| 35/04 kV TF-442",
      "ERT-Transformer|Power transformer|CHPP Product Handling|SB-M-2000/35| 35/04 kV TF-801",
      "ERT-Transformer|Power transformer|CHPP Raw coal-3|SB-M-3000/35| 35/04 kV TF-101",
      "ERT-Transformer|Power transformer|CHPP Retutn water|SB-M-2000/35| 35/04 kV TF-901",
      "WS-Transformer|Power transformer| TM-1000\\35| 35/10 kV Tr-1",
      "WS-Transformer|Power transformer| TM-1000\\35| 35/10 kV Tr-2"
    ]
  },
  "Filter|Multi medium filter": {
    "code": "FT401",
    "category": "20.03.09",
    "process_areas": [
      "Raw water"
    ],
    "asset_descriptions": [
      "Filter|Watertreament Raw water MM Filter 1",
      "Filter|Watertreament Raw water MM Filter 2"
    ]
  },
  "Filter|FAWS": {
    "code": "FT402",
    "category": "20.03.09",
    "process_areas": [
      "Pure water",
      "Reverse osmos"
    ],
    "asset_descriptions": [
      "Filter|FAWS 1| 10m3/h",
      "Filter|FAWS 2| 10m3/h",
      "Filter|Watertreament RO 1",
      "Filter|Watertreament RO 2"
    ]
  },
  "Fuel pipe|Ignition": {
    "code": "EL101",
    "category": "30.04.01",
    "process_areas": [
      "Boiler house|4m"
    ],
    "asset_descriptions": [
      "Fuelpipe|Ignition oil pipe"
    ]
  },
  "Grinder|Angle grinder|Dn100": {
    "code": "QK503",
    "category": "80.14.01",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Grinder|Dn100|Angle grinder 1",
      "Grinder|Dn100|Angle grinder 2"
    ]
  },
  "Grinder|Angle grinder|Dn150": {
    "code": "QK504",
    "category": "80.14.01",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Grinder|Dn150|Angle grinder 1",
      "Grinder|Dn150|Angle grinder 2"
    ]
  },
  "Grinder|Angle grinder|Dn180": {
    "code": "QK505",
    "category": "80.14.01",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Grinder|Dn180|Angle grinder 1",
      "Grinder|Dn180|Angle grinder 2"
    ]
  },
  "Heat Exchanger|Heatihg water": {
    "code": "HX601",
    "category": "80.01.19",
    "process_areas": [
      "ERT Boiler House",
      "Gallery Boiler House",
      "Mining Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-Heat Excanger| Tsetsii| Heatihg water1",
      "ER(M)-Heat Excanger| Tsetsii| Heatihg water2",
      "ER(M)-Heat Exchanger|Gallerei|Heatihg water",
      "ER(M)-Heat excanger| Mining| Heatihg water",
      "ERT-Heat excanger|ERT|Heating water"
    ]
  },
  "Heat Exchanger|Domestic hot water": {
    "code": "HX602",
    "category": "80.01.19",
    "process_areas": [
      "ERT Camp BoilerHouse",
      "Gallery Boiler House",
      "Mining Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-Heat Exchanger| Mining| Domestic hot water",
      "ER(M)-Heat Exchanger| Tsetsii| Domestic hot water 2",
      "ER(M)-Heat Exchanger| Tsetsii|Domestic hot water 1",
      "ER(M)-Heat Exchanger|ERT camp| Domestic hot water 2",
      "ER(M)-Heat Exchanger|ERT camp|Domestic hot water 1",
      "ER(M)-Heat Exchanger|Gallerei|Domestic hot water"
    ]
  },
  "Heat Exchanger|raw water": {
    "code": "HX401",
    "category": "80.01.19",
    "process_areas": [
      "Reversed osmos"
    ],
    "asset_descriptions": [
      "Heat Exchanger|Watertreament Raw water"
    ]
  },
  "High Voltage Cable|35kV": {
    "code": "HJ702",
    "category": "30.05.18",
    "process_areas": [
      "CHPP Bolleir house",
      "CHPP Module-1",
      "CHPP Module-2",
      "CHPP Module-3",
      "CHPP ProductHandling",
      "CHPP RAW COAL"
    ],
    "asset_descriptions": [
      "ERT-High Voltage Cable|CHPP Bolleir houze SD903|HXLPSWA-26/35kV 3х240L=780m",
      "ERT-High Voltage Cable|CHPP MODULI-1 SD401|HXLPSWA-26/35kV 3х240L=650m",
      "ERT-High Voltage Cable|CHPP MODULI-2 SD421|HXLPSWA-26/35kV 3х240L=600m",
      "ERT-High Voltage Cable|CHPP MODULI-3 SD441|HXLPSWA-26/35kV 3х240L=480m",
      "ERT-High Voltage Cable|CHPP Product Handling SD801|HXLPSWA-26/35kV 3х240L=600m",
      "ERT-High Voltage Cable|CHPP RAW COAL SD101|HXLPSWA-26/35kV 3х240L=820m"
    ]
  },
  "Heater|GYY4-380/8|380V": {
    "code": "EB201",
    "category": "30.02.99",
    "process_areas": [
      "Main oil tank 1",
      "Main oil tank 2",
      "Main oil tank 3"
    ],
    "asset_descriptions": [
      "Heater|Power Plant|Main Oil Tank 1",
      "Heater|Power Plant|Main Oil Tank 2",
      "Heater|Power Plant|Main Oil Tank 3"
    ]
  },
  "Lubricating Pump|Main oil pump|2CQ-12.5/3.6": {
    "code": "LP201",
    "category": "30.02.99",
    "process_areas": [
      "Steam turbine 1",
      "Steam turbine 2",
      "Steam turbine 3"
    ],
    "asset_descriptions": [
      "Lubricating Pump|Main oil pump 1",
      "Lubricating Pump|Main oil pump 2",
      "Lubricating Pump|Main oil pump 3"
    ]
  },
  "Transformer|Potential transformer": {
    "code": "TF705",
    "category": "30.05.10",
    "process_areas": [
      "FE-83-104 A phase",
      "FE-83-104 B phase",
      "FE-83-104 C phase",
      "FE-83-107 A phase",
      "FE-83-107 B phase",
      "FE-83-107 C phase",
      "Khothon SubS10kV SR",
      "Khothon SubS35kV SR",
      "WS SubSt 1 A phase",
      "WS SubSt 1 B phase",
      "WS SubSt 1 C phase",
      "WS SubSt 2 A phase",
      "WS SubSt 2 B phase",
      "WS SubSt 2 C phase"
    ],
    "asset_descriptions": [
      "Transformer|Khothon|Potential Transformer-1|10kV A phase",
      "Transformer|Khothon|Potential Transformer-1|10kV B phase",
      "Transformer|Khothon|Potential Transformer-1|10kV C phase",
      "Transformer|Khothon|Potential Transformer-1|35kV A phase",
      "Transformer|Khothon|Potential Transformer-1|35kV B phase",
      "Transformer|Khothon|Potential Transformer-1|35kV C phase",
      "Transformer|Khothon|Potential Transformer-2|10kV A phase",
      "Transformer|Khothon|Potential Transformer-2|10kV B phase",
      "Transformer|Khothon|Potential Transformer-2|10kV C phase",
      "Transformer|Khothon|Potential Transformer-2|35kV A phase",
      "Transformer|Khothon|Potential Transformer-2|35kV B phase",
      "Transformer|Khothon|Potential Transformer-2|35kV C phase",
      "Transformer|WS Substation|Potential Transformer-1|10kV A phase",
      "Transformer|WS Substation|Potential Transformer-1|10kV B phase",
      "WS-Transformer|WS Substation|Potential Transformer-1|10kV C phase",
      "WS-Transformer|WS Substation|Potential Transformer-1|35kV A phase",
      "WS-Transformer|WS Substation|Potential Transformer-1|35kV B phase",
      "WS-Transformer|WS Substation|Potential Transformer-1|35kV C phase",
      "WS-Transformer|WS Substation|Potential Transformer-2|10kV A phase",
      "WS-Transformer|WS Substation|Potential Transformer-2|10kV B phase",
      "WS-Transformer|WS Substation|Potential Transformer-2|10kV C phase",
      "WS-Transformer|WS Substation|Potential Transformer-2|35kV A phase",
      "WS-Transformer|WS Substation|Potential Transformer-2|35kV B phase",
      "WS-Transformer|WS Substation|Potential Transformer-2|35kV C phase"
    ]
  },
  "Boiler|NRG": {
    "code": "BB602",
    "category": "80.01.27",
    "process_areas": [
      "ERT Boiler House",
      "TG Boiler House"
    ],
    "asset_descriptions": [
      "Boiler|ERT|Boiler 2",
      "Boiler|Trans Govi|Boiler 1",
      "Boiler|Trans Govi|Boiler 2"
    ]
  },
  "Boiler|DZL": {
    "code": "BB601",
    "category": "80.01.27",
    "process_areas": [
      "ERT Boiler House",
      "Gallery Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "Boiler|ERT|Boiler 1",
      "Boiler|Gallery camp|Boiler 1",
      "Boiler|Gallery camp|Boiler 2",
      "Boiler|Tsetsii|Boiler 1",
      "Boiler|Tsetsii|Boiler 2",
      "Boiler|Tsetsii|Boiler 3"
    ]
  },
  "Steam Turbine|N6-3.43": {
    "code": "JA201",
    "category": "30.02.01",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Steam turbine|Steam turbine 1",
      "Steam turbine|Steam turbine 2",
      "Steam turbine|Steam turbine 3"
    ]
  },
  "Tank|Main oil tank|YG-0400-83 ZKB54036-89|7.3 m3": {
    "code": "TK201",
    "category": "30.02.99",
    "process_areas": [
      "Oil supply system 1",
      "Oil supply system 2",
      "Oil supply system 3"
    ],
    "asset_descriptions": [
      "Tank|Main oil tank 1",
      "Tank|Main oil tank 2",
      "Tank|Main oil tank 3"
    ]
  },
  "Air Dryer|Compressor": {
    "code": "AD301",
    "category": "20.03.22",
    "process_areas": [
      "House pump"
    ],
    "asset_descriptions": [
      "Air Dryer"
    ]
  },
  "Server|control server": {
    "code": "SG301",
    "category": "80.06.01",
    "process_areas": [
      "Control Station"
    ],
    "asset_descriptions": [
      "Server|control server|Electric|F2YLG2",
      "Server|control server|boiler|FDJZ62S",
      "Server|control server|turbin|H84N62S"
    ]
  },
  "Belt conveyor|TD75": {
    "code": "BC101",
    "category": "80.10.01",
    "process_areas": [
      "Boiler house|0m",
      "Boiler house|22m",
      "Coal handle system",
      "ID fan house|Outside"
    ],
    "asset_descriptions": [
      "Belt Conveyor|Power Plant|Bed Ash Conveyor",
      "Belt Conveyor|Power Plant|Belt Conveyor 1",
      "Belt Conveyor|Power Plant|Belt Conveyor 2",
      "Belt Conveyor|Power Plant|Belt Conveyor 3",
      "Belt Conveyor|Power Plant|FAPS Conveyor"
    ]
  },
  "Pump|Feed water pump|Pump: DG46-50×12 Motor: YVF315M-2": {
    "code": "PP205",
    "category": "30.02.20",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Pump|Feed water pump 1",
      "Pump|Feed water pump 2",
      "Pump|Feed water pump 3",
      "Pump|Feed water pump 4"
    ]
  },
  "Lubricating Pump|Auxiliary Oil Pump|80YL-100": {
    "code": "LP202",
    "category": "30.02.99",
    "process_areas": [
      "Main oil tank 1",
      "Main oil tank 2",
      "Main oil tank 3",
      "Oil supply system 1",
      "Oil supply system 2",
      "Oil supply system 3"
    ],
    "asset_descriptions": [
      "Lubricating Pump|Auxiliary Oil Pump 1",
      "Lubricating Pump|Auxiliary Oil Pump 2",
      "Lubricating Pump|Auxiliary Oil Pump 3",
      "Lubricating Pump|Emergency Oil Pump 1",
      "Lubricating Pump|Emergency Oil Pump 2",
      "Lubricating Pump|Emergency Oil Pump 3"
    ]
  },
  "Pump|Heating system|Make up water pump": {
    "code": "PP506",
    "category": "40.01.99",
    "process_areas": [
      "PowerPlant Build 12m"
    ],
    "asset_descriptions": [
      "Pump|Power plant main building 12m|Make up water pump 1",
      "Pump|Power plant main building 12m|Make up water pump 2"
    ]
  },
  "Crane/Hoist|Electric Hoist|CD11-30D": {
    "code": "CN502",
    "category": "50.01.07",
    "process_areas": [
      "Boiler shop 26m",
      "Conveyor 3 house22m"
    ],
    "asset_descriptions": [
      "Crane/Hoist|Power Plant|Main Building|Belt conveyor 3",
      "Crane/Hoist|Power Plant|Main Building|Boiler 22m"
    ]
  },
  "Crane/Hoist|Manual Hoist|5tn": {
    "code": "CN505",
    "category": "50.01.07",
    "process_areas": [
      "Conveyor 3 house22m",
      "Hummer crusher house"
    ],
    "asset_descriptions": [
      "Crane/Hoist|Power Plant|Hummer crusher house",
      "Crane/Hoist|Power Plant|Main Building|Belt conveyor 3"
    ]
  },
  "Crane/Hoist|Manual Hoist|3tn": {
    "code": "CN506",
    "category": "50.01.07",
    "process_areas": [
      "Bolier 13m",
      "Bolier 23m",
      "Bolier 33m"
    ],
    "asset_descriptions": [
      "Crane/Hoist|Power Plant|Boiler 1|3m",
      "Crane/Hoist|Power Plant|Boiler 2|3m",
      "Crane/Hoist|Power Plant|Boiler 3|3m"
    ]
  },
  "Crane/Hoist|Manual Hoist|2tn": {
    "code": "CN507",
    "category": "50.01.07",
    "process_areas": [
      "Fan house",
      "Pump station"
    ],
    "asset_descriptions": [
      "Crane/Hoist|Power Plant|ID Fan house",
      "Crane/Hoist|Power Plant|Pump station"
    ]
  },
  "Pump|High pressure drain tank pump|R50-1601": {
    "code": "PP206",
    "category": "30.02.13",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Pump|High pressure drain tank pump 1",
      "Pump|High pressure drain tank pump 2"
    ]
  },
  "Pump|Cooling water pump|SLS 200-400GCMotor:Y2-225S-4": {
    "code": "PP204",
    "category": "30.02.99",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Pump|Cooling water pump 1",
      "Pump|Cooling water pump 2",
      "Pump|Cooling water pump 3"
    ]
  },
  "Pump|Domestic tap water pump": {
    "code": "PP503",
    "category": "40.01.99",
    "process_areas": [
      "Pump station"
    ],
    "asset_descriptions": [
      "Pump|Pump station|Domestic tap water pump 1",
      "Pump|Pump station|Domestic tap water pump 2"
    ]
  },
  "Pump|Firefighting water main pump": {
    "code": "PP501",
    "category": "40.01.99",
    "process_areas": [
      "Pump station"
    ],
    "asset_descriptions": [
      "Pump|Pump station|Firefighting water main pump 1",
      "Pump|Pump station|Firefighting water main pump 2"
    ]
  },
  "Pump|Pit Drainage Pump": {
    "code": "PP504",
    "category": "40.01.99",
    "process_areas": [
      "Pump station"
    ],
    "asset_descriptions": [
      "Pump|Pump station|Pit Drainage Pump"
    ]
  },
  "Pump|Fuel": {
    "code": "PP101",
    "category": "40.01.99",
    "process_areas": [
      "Boiler house|0m",
      "Boiler house|Outside"
    ],
    "asset_descriptions": [
      "Pump|40m³ LDO storage tank|Fuel pump1",
      "Pump|40m³ LDO storage tank|Fuel pump2",
      "Pump|Ignition oil tank|Fuel pump 1",
      "Pump|Ignition oil tank|Fuel pump 2"
    ]
  },
  "Overhead Crane|16T": {
    "code": "IC501",
    "category": "50.01.07",
    "process_areas": [
      "Turbine shop"
    ],
    "asset_descriptions": [
      "Overhead Crane|Turbine shop|18m"
    ]
  },
  "Drilling and Milling|Shaping machine": {
    "code": "KR504",
    "category": "80.15.99",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Drilling and Milling|Maintenance center|Shaping machine"
    ]
  },
  "Water pump|Hot water  pump": {
    "code": "WP604",
    "category": "10.10.17",
    "process_areas": [
      "ERT Camp BoilerHouse",
      "Gallery Boiler House",
      "Mining Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-Water pump|ERT Camp|Hot water  pump 1",
      "ER(M)-Water pump|Gallerei|Hot water  pump 1",
      "ER(M)-Water pump|Gallerei|Hot water  pump 2",
      "ER(M)-Water pump|Mining|Hot water  pump 1",
      "ER(M)-Water pump|Tsetsii|Hot water  pump 1",
      "ER(M)-Water pump|Tsetsii|Hot water  pump 2",
      "ER(M)-Water pump|Tsetsii|Hot water  pump 3"
    ]
  },
  "Water pump|Heating water pump": {
    "code": "WP603",
    "category": "10.10.17",
    "process_areas": [
      "ERT Boiler House",
      "Gallery Boiler House",
      "Mining Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-Water pump|Gallerei|Heating water pump 1",
      "ER(M)-Water pump|Gallerei|Heating water pump 2",
      "ER(M)-Water pump|Mining|Heating water pump 1",
      "ER(M)-Water pump|Mining|Heating water pump 2",
      "ER(M)-Water pump|Tsetsii|Heating water pump 1",
      "ER(M)-Water pump|Tsetsii|Heating water pump 2",
      "ER(M)-Water pump|Tsetsii|Heating water pump 3",
      "ERT-Water pump|ERT|Heating water pump 1",
      "ERT-Water pump|ERT|Heating water pump 2"
    ]
  },
  "Switchgear|motor control center5": {
    "code": "HE305",
    "category": "30.05.15",
    "process_areas": [
      "MotorControl Center5",
      "MotorControl Center6",
      "MotorControl Center7"
    ],
    "asset_descriptions": [
      "Switchgear| Compressor|feeding panel 1",
      "Switchgear| house pump|feeding panel 1",
      "Switchgear|Coal handling system |panel 1",
      "Switchgear|Coal handling system |panel 2",
      "Switchgear|Coal handling system |panel 3",
      "Switchgear|Coal handling system |panel 4"
    ]
  },
  "Pump|ACC cleaning water pump|Pump:CM-2A/G Motor:Y2-225S-4": {
    "code": "PP203",
    "category": "30.02.28",
    "process_areas": [
      "Annex 1"
    ],
    "asset_descriptions": [
      "Pump|ACC cleaning water pump 1",
      "Pump|ACC cleaning water pump 2"
    ]
  },
  "Air Compressor|JFD55-0125": {
    "code": "AC301",
    "category": "20.03.21",
    "process_areas": [
      "House pump"
    ],
    "asset_descriptions": [
      "Air Compressor|Power Plant|Air Compressor 1",
      "Air Compressor|Power Plant|Air Compressor 2",
      "Air Compressor|Power Plant|Air Compressor 3"
    ]
  },
  "Switchgear|motor control center1": {
    "code": "HE301",
    "category": "30.05.15",
    "process_areas": [
      "MotorControl Center2"
    ],
    "asset_descriptions": [
      "Switchgear|Distribution panel 0-1",
      "Switchgear|Distribution panel 0-2",
      "Switchgear|Distribution panel 0-3",
      "Switchgear|Distribution panel 0-4",
      "Switchgear|Distribution panel 0-5",
      "Switchgear|Distribution panel 0-6",
      "Switchgear|Distribution panel 1-1",
      "Switchgear|Distribution panel 1-2",
      "Switchgear|Distribution panel 1-3",
      "Switchgear|Distribution panel 1-4",
      "Switchgear|Distribution panel 1-5",
      "Switchgear|Distribution panel 1-6",
      "Switchgear|Distribution panel 1-7",
      "Switchgear|Distribution panel 2-1",
      "Switchgear|Distribution panel 2-2",
      "Switchgear|Distribution panel 2-3",
      "Switchgear|Distribution panel 2-4",
      "Switchgear|Distribution panel 2-5",
      "Switchgear|Distribution panel 2-6",
      "Switchgear|Distribution panel 2-7",
      "Switchgear|Distribution panel 3-1",
      "Switchgear|Distribution panel 3-2",
      "Switchgear|Distribution panel 3-3",
      "Switchgear|Distribution panel 3-4",
      "Switchgear|Distribution panel 3-5",
      "Switchgear|Distribution panel 3-6",
      "Switchgear|Distribution panel 3-7"
    ]
  },
  "Pressure Tank|Heating system": {
    "code": "NT601",
    "category": "80.01.04",
    "process_areas": [
      "ERT Boiler House",
      "Gallery Boiler House",
      "Mining Boiler House",
      "TG Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-Pressure Tank|Gallerei|Heating system 1",
      "ER(M)-Pressure Tank|Gallerei|Heating system 2",
      "ER(M)-Pressure Tank|Mining|Heating system 1",
      "ER(M)-Pressure Tank|Tsetsii|Haeting system 1",
      "ERT-Pressure Tank|ERT|heating system 1",
      "ERT-Pressure Tank|ERT|heating system 2",
      "TG-Pressure Tank|TG|Boiler system 1"
    ]
  },
  "Pump|Firefighting water pressure pump": {
    "code": "PP502",
    "category": "40.01.99",
    "process_areas": [
      "Pump station"
    ],
    "asset_descriptions": [
      "Pump|Boiler shop|Firefighting water pressure pump 1",
      "Pump|Boiler shop|Firefighting water pressure pump 2"
    ]
  },
  "Drilling and Milling|Radial drilling machine": {
    "code": "KR501",
    "category": "10.06.01",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Drilling and Milling|Maintenance center|Radial drilling machine"
    ]
  },
  "Drilling and Milling|Lathe machine": {
    "code": "KR503",
    "category": "80.15.99",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Drilling and Milling|Maintenance center|Lathe machine"
    ]
  },
  "Feeder|Coal feeder": {
    "code": "UC601",
    "category": "20.03.10",
    "process_areas": [
      "ERT Boiler House"
    ],
    "asset_descriptions": [
      "ERT-Feeder|ERT |Coal feeder"
    ]
  },
  "Switchgear|Comunication panel": {
    "code": "HE705",
    "category": "30.06.05",
    "process_areas": [
      "UHG SubSt ContrlRoom",
      "UHG SubSt DC room"
    ],
    "asset_descriptions": [
      "Switchgear|UHG Substation|Comunication panel|Control room",
      "Switchgear|UHG Substation|Comunication panel|DC room"
    ]
  },
  "Switchgear|DC panel": {
    "code": "HE702",
    "category": "30.06.05",
    "process_areas": [
      "Khothon SubS10kV SR",
      "UHG SubSt DC room"
    ],
    "asset_descriptions": [
      "Switchgear|Khothon|DC panel Section 1",
      "Switchgear|Khothon|DC panel Section 2",
      "Switchgear|UHG Substation|DC panel Section 1",
      "Switchgear|UHG Substation|DC panel Section 2"
    ]
  },
  "Switchgear|service panel": {
    "code": "HE701",
    "category": "30.06.05",
    "process_areas": [
      "Khothon SubS10kV SR",
      "UHG SubSt ContrlRoom"
    ],
    "asset_descriptions": [
      "Switchgear|Khothon|Service panel Section 1",
      "Switchgear|Khothon|Service panel Section 2",
      "Switchgear|UHG Substation|Service panel Section 1",
      "Switchgear|UHG Substation|Service panel Section 2"
    ]
  },
  "Switchgear|Signal panel": {
    "code": "HE704",
    "category": "30.06.05",
    "process_areas": [
      "Khothon SubS10kV SR",
      "UHG SubSt ContrlRoom"
    ],
    "asset_descriptions": [
      "Switchgear|Khothon|Signal panel",
      "Switchgear|UHG Substation|Signal panel"
    ]
  },
  "Switchgear|Transformer panel": {
    "code": "HE703",
    "category": "30.06.05",
    "process_areas": [
      "Khothon SubS10kV SR",
      "UHG SubSt ContrlRoom"
    ],
    "asset_descriptions": [
      "Switchgear|Khothon|Transformer panel T1",
      "Switchgear|Khothon|Transformer panel T2",
      "Switchgear|UHG Substation|Tranformer panel T1",
      "Switchgear|UHG Substation|Tranformer panel T2"
    ]
  },
  "Tank|Boiler make-up water tank": {
    "code": "TK601",
    "category": "40.03.04",
    "process_areas": [
      "ERT Boiler House",
      "ERT Camp BoilerHouse",
      "Mining Boiler House",
      "TG Boiler House",
      "TTA Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-Tank|ERT Camp|Boiler make-up water tank",
      "ER(M)-Tank|Mining|Boiler make-up water tank",
      "ER(M)-Tank|Tsetsii|Boiler make-up water tank",
      "ERT-Tank|ERT|Boiler make-up water tank",
      "TG-Tank|TG|Boiler make-up water tank",
      "TTA-Tank| TT airport|Boiler make-up water tank"
    ]
  },
  "Tank|Condensate tank": {
    "code": "TK206",
    "category": "30.02.10",
    "process_areas": [
      "PowerPlant BoiHou 6m"
    ],
    "asset_descriptions": [
      "Tank|Condensate tank"
    ]
  },
  "Tank|Cooling water system Phosphate dosing tank|JY-1/2-0.5/7.0": {
    "code": "TK204",
    "category": "30.02.99",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Tank|Cooling water system Phosphate dosing tank"
    ]
  },
  "Steam Ejector|C-3615-7": {
    "code": "JB201",
    "category": "30.02.99",
    "process_areas": [
      "Annex 1",
      "Annex 2"
    ],
    "asset_descriptions": [
      "Steam Ejector|Steam Ejector 1",
      "Steam Ejector|Steam Ejector 2",
      "Steam Ejector|Steam Ejector 3"
    ]
  },
  "Feeder|Substation|10kV": {
    "code": "FE701",
    "category": "20.03.10",
    "process_areas": [
      "Khothon SubS10kV SR",
      "UHG SubSt10kV Switch",
      "WS substation"
    ],
    "asset_descriptions": [
      "Feeder|Khothon|10kV Cubicle-1 Service Transformer 1",
      "Feeder|Khothon|10kV Cubicle-10 Bus Coupler",
      "Feeder|Khothon|10kV Cubicle-11 Airport",
      "Feeder|Khothon|10kV Cubicle-12 Worker district",
      "Feeder|Khothon|10kV Cubicle-13 Tsetsii district 2",
      "Feeder|Khothon|10kV Cubicle-14 ER Camp 2",
      "Feeder|Khothon|10kV Cubicle-15 Voltage Transformer 2",
      "Feeder|Khothon|10kV Cubicle-16 Incoming Feeder 2",
      "Feeder|Khothon|10kV Cubicle-17 Service Transformer 2",
      "Feeder|Khothon|10kV Cubicle-2 Incoming Feeder 1",
      "Feeder|Khothon|10kV Cubicle-3 Voltage Transformer 1",
      "Feeder|Khothon|10kV Cubicle-4 Tsetsii district 1",
      "Feeder|Khothon|10kV Cubicle-5 Sumiin Zuun",
      "Feeder|Khothon|10kV Cubicle-6 Provision",
      "Feeder|Khothon|10kV Cubicle-7 Provision",
      "Feeder|Khothon|10kV Cubicle-8 Provision",
      "Feeder|Khothon|10kV Cubicle-9 Bus Riser",
      "Feeder|UHG Substation|10kV Cubicle-1 Incoming Feeder 1",
      "Feeder|UHG Substation|10kV Cubicle-10 Provision",
      "Feeder|UHG Substation|10kV Cubicle-11 Bus Coupler",
      "Feeder|UHG Substation|10kV Cubicle-12 Catchment",
      "Feeder|UHG Substation|10kV Cubicle-13 Voltage Transfomer 2",
      "Feeder|UHG Substation|10kV Cubicle-14 Camp",
      "Feeder|UHG Substation|10kV Cubicle-15 Service Transformer 2",
      "Feeder|UHG Substation|10kV Cubicle-16-1|Mining",
      "Feeder|UHG Substation|10kV Cubicle-16-2|Mining",
      "Feeder|UHG Substation|10kV Cubicle-16-3|Mining",
      "Feeder|UHG Substation|10kV Cubicle-17-1|Provision",
      "Feeder|UHG Substation|10kV Cubicle-17-2|Provision",
      "Feeder|UHG Substation|10kV Cubicle-17-3|Provision",
      "Feeder|UHG Substation|10kV Cubicle-18-1|Diesel Stattion-2",
      "Feeder|UHG Substation|10kV Cubicle-18-2|Diesel Stattion-2",
      "Feeder|UHG Substation|10kV Cubicle-18-3|Diesel Stattion-2",
      "Feeder|UHG Substation|10kV Cubicle-19-1|Incoming Feeder 2",
      "Feeder|UHG Substation|10kV Cubicle-19-2|Incoming Feeder 2",
      "Feeder|UHG Substation|10kV Cubicle-19-3|Incoming Feeder 2",
      "Feeder|UHG Substation|10kV Cubicle-2 Provision",
      "Feeder|UHG Substation|10kV Cubicle-20-1|12th line",
      "Feeder|UHG Substation|10kV Cubicle-20-2|12th line",
      "Feeder|UHG Substation|10kV Cubicle-20-3|12th line",
      "Feeder|UHG Substation|10kV Cubicle-22-1|HB-1B",
      "Feeder|UHG Substation|10kV Cubicle-22-2|HB-1B",
      "Feeder|UHG Substation|10kV Cubicle-22-3|HB-1B",
      "Feeder|UHG Substation|10kV Cubicle-3|Provision",
      "Feeder|UHG Substation|10kV Cubicle-4|11th line",
      "Feeder|UHG Substation|10kV Cubicle-5|Service Transformer 1",
      "Feeder|UHG Substation|10kV Cubicle-6|HB-1A",
      "Feeder|UHG Substation|10kV Cubicle-7|Voltage Transformer 1",
      "Feeder|UHG Substation|10kV Cubicle-8|Povision",
      "Feeder|UHG Substation|10kV Cubicle-9|Bus Riser",
      "WS-Feeder-1 |Service transformer-1|S9-M-30/10",
      "WS-Feeder-10 |Khudgiin-C|MILE MP 12/20/630",
      "WS-Feeder-11 |Urgukh-2|MILE MP 12/20/630",
      "WS-Feeder-12 |Spare|MILE MP 12/20/630",
      "WS-Feeder-13| Service transformer-2",
      "WS-Feeder-2 |Spare|MILE MP 12/20/630",
      "WS-Feeder-3 |Urgukh-1|MILE MP 12/20/630",
      "WS-Feeder-4 |Khudgiin-А|MILE MP 12/20/630",
      "WS-Feeder-5 |Orolt-1|MILE MP 12/315/1250",
      "WS-Feeder-6 |CXT|MILE MP 12/315/1250",
      "WS-Feeder-7 CXC|MILE MP 12/315/1250",
      "WS-Feeder-8 |Orolt-2|MILE MP 12/315/1250",
      "WS-Feeder-9 |Khudgiin-B|MILE MP 12/20/630"
    ]
  },
  "Tank|oil tank|2m 3": {
    "code": "TK301",
    "category": "30.01.13",
    "process_areas": [
      "ECB"
    ],
    "asset_descriptions": [
      "Tank|Diesel generator|fuel tank"
    ]
  },
  "Breaker|Хуурай салгуур": {
    "code": "BM704",
    "category": "10.05.06",
    "process_areas": [
      "Tsetsii horoolol"
    ],
    "asset_descriptions": [
      "ER(M)-Breaker|Хуурай салгуур РВО-10\\400 ХТП-1 1-р секц  Шинийн салгуур-1",
      "ER(M)-Breaker|Хуурай салгуур РВО-10\\400 ХТП-1 2-р секц  Шинийн салгуур-2",
      "ER(M)-Breaker|Хуурай салгуур РВО-10\\400 ХТП-2 1-р секц  Шинийн салгуур-1",
      "ER(M)-Breaker|Хуурай салгуур РВО-10\\400 ХТП-2 2-р секц  Шинийн салгуур-2",
      "ER(M)-Breaker|Хуурай салгуур РВО-10\\400 ХТП-4 1-р секц  Шинийн салгуур-1",
      "ER(M)-Breaker|Хуурай салгуур РВО-10\\400 ХТП-4 2-р секц  Шинийн салгуур-2",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-12",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-3",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-31",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-32",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-33",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-34",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-36",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-37",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-38",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-39",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-40",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-41",
      "ER(M)-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-8",
      "ERT-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-4",
      "ERT-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-5",
      "TG-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-35",
      "TG-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-7",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-1",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-10",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-13",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-17",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-18",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-19",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-20",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-21",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-22",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-23",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-24",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-25",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-26",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-27",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-28",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-29",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-30",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-44",
      "WS-Breaker|Хуурай салгуур РЛНД-10/400 KTPN-49"
    ]
  },
  "Breaker|Ачаалал таслагч": {
    "code": "BM705",
    "category": "10.05.06",
    "process_areas": [
      "CHPP",
      "Gallerey camp",
      "Mining work shop",
      "PP camp",
      "Tsetsii horoolol",
      "Ware house",
      "Water supply office"
    ],
    "asset_descriptions": [
      "ER(M)-Breaker|Ачаалал таслагч ВНА -10/400 KTPN-2",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 KTPN-11",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 KTPN-14",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 KTPN-15",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 KTPN-16",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-1 1-р секц Гаргалгаа-1",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-1 1-р секц Оролт-1",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-1 1-р секц Тр-1",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-1 2-р секц Гаргалгаа-2",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-1 2-р секц Оролт-2",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-1 2-р секц Тр-2",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-2 1-р секц Гаргалгаа-1",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-2 1-р секц Оролт-1",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-2 1-р секц Тр-1",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-2 2-р секц Гаргалгаа-2",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-2 2-р секц Оролт-2",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-2 2-р секц Тр-2",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-4 1-р секц Гаргалгаа-1",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-4 1-р секц Оролт-1",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-4 1-р секц Тр-1",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-4 2-р секц Гаргалгаа-2",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-4 2-р секц Оролт-2",
      "ER(M)-Breaker|Ачаалал таслагч ВНА-10/400 ХТП-4 2-р секц Тр-2",
      "ERT-Breaker|Ачаалал таслагч ВНА -10/400 KTPN-6",
      "TG-Breaker|Ачаалал таслагч РЛНД-10/400 KTPN-47",
      "WS-Breaker|Ачаалал таслагч ВНА-10/400 KTPN-9"
    ]
  },
  "Air heater|Boiler|HX-35/3.82-450": {
    "code": "AB101",
    "category": "80.01.25",
    "process_areas": [
      "Boiler#1|5m",
      "Boiler#1|6m",
      "Boiler#2|5m",
      "Boiler#2|6m",
      "Boiler#3|5m",
      "Boiler#3|6m"
    ],
    "asset_descriptions": [
      "Air heater|Boiler 1|Air heater 1",
      "Air heater|Boiler 1|Air heater 2",
      "Air heater|Boiler 1|Calorifer 1",
      "Air heater|Boiler 1|Calorifer 2",
      "Air heater|Boiler 2|Air heater 1",
      "Air heater|Boiler 2|Air heater 2",
      "Air heater|Boiler 2|Calorifer 1",
      "Air heater|Boiler 2|Calorifer 2",
      "Air heater|Boiler 3|Air heater 1",
      "Air heater|Boiler 3|Air heater 2",
      "Air heater|Boiler 3|Calorifer 1",
      "Air heater|Boiler 3|Calorifer 2"
    ]
  },
  "Feeder|Substation|110kV": {
    "code": "FE703",
    "category": "20.03.10",
    "process_areas": [
      "UHG SubSt10kV Switch"
    ],
    "asset_descriptions": [
      "Feeder|UHG Substation|110kV Panel-1 Transformer Incoming",
      "Feeder|UHG Substation|110kV Panel-2 Bus Coupler",
      "Feeder|UHG Substation|110kV Panel-3 TT-A",
      "Feeder|UHG Substation|110kV Panel-4 TT-B",
      "Feeder|UHG Substation|110kV Panel-5 Synchronous Panel"
    ]
  },
  "Generator|Diesel generator|SR4B": {
    "code": "GE301",
    "category": "30.05.01",
    "process_areas": [
      "ECB"
    ],
    "asset_descriptions": [
      "Generator|Diesel generator|Power plant|Emergency"
    ]
  },
  "Tank|Emergency oil tank|8m 3": {
    "code": "TK202",
    "category": "30.02.99",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Tank|Emergency oil tank"
    ]
  },
  "Tank|Extra oil tank|2m 3": {
    "code": "TK203",
    "category": "30.02.99",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Tank|Extra oil tank"
    ]
  },
  "Tank|Firefighting and Domestic tap water tank|800m3": {
    "code": "TK501",
    "category": "40.03.04",
    "process_areas": [
      "Pump station"
    ],
    "asset_descriptions": [
      "Tank|Firefighting and Domestic tap water tank|800m3"
    ]
  },
  "Tank|High pressure drain tank|12m3": {
    "code": "TK205",
    "category": "30.02.10",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Tank|High pressure drain tank"
    ]
  },
  "Tank|Heating system|Make up water tank": {
    "code": "TK502",
    "category": "40.03.04",
    "process_areas": [
      "PowerPlant Build 12m"
    ],
    "asset_descriptions": [
      "Tank|Power plant main building 12m|Make up water tank"
    ]
  },
  "Tank|Raw water tank": {
    "code": "TK401",
    "category": "40.03.04",
    "process_areas": [
      "Raw water"
    ],
    "asset_descriptions": [
      "Tank|Watertreament Raw water"
    ]
  },
  "Tank|Pure water tank": {
    "code": "TK402",
    "category": "40.03.04",
    "process_areas": [
      "Pure water",
      "Reverse osmos"
    ],
    "asset_descriptions": [
      "Tank|Watertreament RO 1",
      "Tank|Watertreament RO 2",
      "Tank|Watertreatment Pure water"
    ]
  },
  "Power Substation|10/0.4 kV|": {
    "code": "SU704",
    "category": "60.03.02",
    "process_areas": [
      "CHPP Galiin usan san",
      "CHPP HayagUsguijuleh",
      "CHPP labrotor",
      "Galarei camp",
      "Loop",
      "Maiga uul usan san",
      "Mining offise",
      "Mining shuuruuleh",
      "Mining simulator",
      "Mining work shop",
      "PP camp",
      "Post",
      "Post 81",
      "Public serves",
      "Sumiin Tseverleh",
      "TG New Work Shop",
      "TG Work Shop",
      "TT Airport",
      "Tsetsii horoolol",
      "UndniiUsTsevershuleh",
      "Uurhachin hojoolol",
      "Uurhain Tseverleh",
      "Water supply office",
      "Water supply/Naimdai"
    ],
    "asset_descriptions": [
      "ER(M)-Substation|HTP-1 Tsetsii horoolol",
      "ER(M)-Substation|HTP-2 Tsetsii horoolol",
      "ER(M)-Substation|HTP-4 Tsetsii horoolol",
      "ER(M)-Substation|KTPN-11 PP camp",
      "ER(M)-Substation|KTPN-12 post 81",
      "ER(M)-Substation|KTPN-14 Galarei camp-1",
      "ER(M)-Substation|KTPN-15 Galarei camp-2",
      "ER(M)-Substation|KTPN-16 Tsetsii horoolol",
      "ER(M)-Substation|KTPN-2 Mining work shop",
      "ER(M)-Substation|KTPN-3 Mining offise",
      "ER(M)-Substation|KTPN-31 aerfort",
      "ER(M)-Substation|KTPN-32 Ajiljdiin horoolol",
      "ER(M)-Substation|KTPN-33 Ajilchdii horoolol",
      "ER(M)-Substation|KTPN-34 Ajilchdiin horoolol",
      "ER(M)-Substation|KTPN-36 Mining simulator",
      "ER(M)-Substation|KTPN-37  Shuuruuleh 1",
      "ER(M)-Substation|KTPN-38  Shuuruuleh 2",
      "ER(M)-Substation|KTPN-39  Shuuruuleh 3",
      "ER(M)-Substation|KTPN-40  Shuuruuleh 4",
      "ER(M)-Substation|KTPN-41  Shuuruuleh 5",
      "ER(M)-Substation|KTPN-8 urd post",
      "ERT-Substation|KTPN-4 Galiin usan san",
      "ERT-Substation|KTPN-5 CHPP labrotor",
      "ERT-Substation|KTPN-6 CHPP Hayagdal usguijuuleh",
      "TG-Substation|KTPN-35 Transgovi loop",
      "TG-Substation|KTPN-47 Transgovi work shop",
      "TG-Substation|KTPN-7 Trangovi work shop",
      "WS-Substation|KTPN-10 maiga uul",
      "WS-Substation|KTPN-13 undnii us",
      "WS-Substation|KTPN-17 Water Supply urguh-1",
      "WS-Substation|KTPN-18 WS urguh- 2",
      "WS-Substation|KTPN-19 WS A-1",
      "WS-Substation|KTPN-20 WS A-2",
      "WS-Substation|KTPN-21 WS A-3",
      "WS-Substation|KTPN-22 WS A-4",
      "WS-Substation|KTPN-23 WS B-1",
      "WS-Substation|KTPN-24 WS B-2",
      "WS-Substation|KTPN-25 WS B-3",
      "WS-Substation|KTPN-26 WS C-1",
      "WS-Substation|KTPN-27 WS C-2",
      "WS-Substation|KTPN-28 WS C-3",
      "WS-Substation|KTPN-29 WS D-1",
      "WS-Substation|KTPN-30 WS F-1",
      "WS-Substation|KTPN-44 Public serves",
      "WS-Substation|KTPN-49 Sumiin tseverleh baiguulamj",
      "WS-Substation|KTPN-9 WS offise",
      "WS-Substation|Uurhain tseverleh baiguulamj|KTPN-1-босоо зураасаар тусгаарлана уу"
    ]
  },
  "Pump station|Firefighting and Domestic tap water pump station": {
    "code": "NP501",
    "category": "10.01.09",
    "process_areas": [
      "Pump station"
    ],
    "asset_descriptions": [
      "Pump station|Firefighting and Domestic tap water pump station"
    ]
  },
  "Feeder|NJGC 500*4680": {
    "code": "UC101",
    "category": "20.03.10",
    "process_areas": [
      "Boiler#1|BoilerH 12m",
      "Boiler#2|BoilerH 12m",
      "Boiler#3|BoilerH 12m"
    ],
    "asset_descriptions": [
      "Feeder|Boiler 1|Coal feeder 1",
      "Feeder|Boiler 1|Coal feeder 2",
      "Feeder|Boiler 2|Coal feeder 1",
      "Feeder|Boiler 2|Coal feeder 2",
      "Feeder|Boiler 3|Coal feeder 1",
      "Feeder|Boiler 3|Coal feeder 2"
    ]
  },
  "Pump|Condensate pump|3N6A×2": {
    "code": "PP201",
    "category": "30.02.14",
    "process_areas": [
      "Annex 1",
      "Annex 2"
    ],
    "asset_descriptions": [
      "Pump|Condensate pump 1-1",
      "Pump|Condensate pump 1-2",
      "Pump|Condensate pump 2-1",
      "Pump|Condensate pump 2-2",
      "Pump|Condensate pump 3-1",
      "Pump|Condensate pump 3-2"
    ]
  },
  "Pump|Drain pump|GN7-22×2": {
    "code": "PP202",
    "category": "30.02.13",
    "process_areas": [
      "Annex 1",
      "Annex 2"
    ],
    "asset_descriptions": [
      "Pump|Drain pump 1-1",
      "Pump|Drain pump 1-2",
      "Pump|Drain pump 2-1",
      "Pump|Drain pump 2-2",
      "Pump|Drain pump 3-1",
      "Pump|Drain pump 3-2"
    ]
  },
  "Feeder|Substation|35kV": {
    "code": "FE702",
    "category": "20.03.10",
    "process_areas": [
      "UHG SubSt10kV Switch"
    ],
    "asset_descriptions": [
      "Feeder|UHG Substation|35kV Cubicle-1 Provision",
      "Feeder|UHG Substation|35kV Cubicle-10 Bus Riser",
      "Feeder|UHG Substation|35kV Cubicle-11 Bus Coupler",
      "Feeder|UHG Substation|35kV Cubicle-11 Turning water hole",
      "Feeder|UHG Substation|35kV Cubicle-12 Provision",
      "Feeder|UHG Substation|35kV Cubicle-12 Voltage Transformer 2",
      "Feeder|UHG Substation|35kV Cubicle-13 Incoming Feeder 2",
      "Feeder|UHG Substation|35kV Cubicle-14 Water Supply-B",
      "Feeder|UHG Substation|35kV Cubicle-15 Provision",
      "Feeder|UHG Substation|35kV Cubicle-16 Modul-2",
      "Feeder|UHG Substation|35kV Cubicle-17 Povision",
      "Feeder|UHG Substation|35kV Cubicle-18 Rude Coal",
      "Feeder|UHG Substation|35kV Cubicle-2 Modul-3",
      "Feeder|UHG Substation|35kV Cubicle-3 Water Supply-A",
      "Feeder|UHG Substation|35kV Cubicle-4 Provision",
      "Feeder|UHG Substation|35kV Cubicle-5 Ovoolgo",
      "Feeder|UHG Substation|35kV Cubicle-6 Steam Boiler",
      "Feeder|UHG Substation|35kV Cubicle-7 Modul-1",
      "Feeder|UHG Substation|35kV Cubicle-8 Incoming Feeder 1",
      "Feeder|UHG Substation|35kV Cubicle-9 Voltage Transformer 1"
    ]
  },
  "Jaw Crusher|coal": {
    "code": "JK601",
    "category": "20.01.01",
    "process_areas": [
      "ERT Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-Jaw Crusher|Tsetsii",
      "ERT-Jaw Crusher|ERT"
    ]
  },
  "Switchgear|motor control center3": {
    "code": "HE303",
    "category": "30.05.15",
    "process_areas": [
      "MotorControl Center3"
    ],
    "asset_descriptions": [
      "Switchgear|High voltage control cabinet|electrostatic precipitator 1-1",
      "Switchgear|High voltage control cabinet|electrostatic precipitator 1-2",
      "Switchgear|High voltage control cabinet|electrostatic precipitator 1-3",
      "Switchgear|High voltage control cabinet|electrostatic precipitator 1-4",
      "Switchgear|High voltage control cabinet|electrostatic precipitator 2-1",
      "Switchgear|High voltage control cabinet|electrostatic precipitator 2-2",
      "Switchgear|High voltage control cabinet|electrostatic precipitator 2-3",
      "Switchgear|High voltage control cabinet|electrostatic precipitator 2-4",
      "Switchgear|High voltage control cabinet|electrostatic precipitator 3-1",
      "Switchgear|High voltage control cabinet|electrostatic precipitator 3-2",
      "Switchgear|High voltage control cabinet|electrostatic precipitator 3-3",
      "Switchgear|High voltage control cabinet|electrostatic precipitator 3-4",
      "Switchgear|Low voltage control cabinet|electrostatic precipitator 1",
      "Switchgear|Low voltage control cabinet|electrostatic precipitator 2",
      "Switchgear|Low voltage control cabinet|electrostatic precipitator 3",
      "Switchgear|Power supply cabinet|electrostatic precipitator 1",
      "Switchgear|Power supply cabinet|electrostatic precipitator 2",
      "Switchgear|Power supply cabinet|electrostatic precipitator 3"
    ]
  },
  "Transformer|Auxiliary transformer|SGB-800/105": {
    "code": "TF302",
    "category": "30.05.09",
    "process_areas": [
      "MotorControl Center2"
    ],
    "asset_descriptions": [
      "Transformer|Auxiliary transformer|section №4"
    ]
  },
  "Transformer|Auxiliary transformer|SGB-1600/105": {
    "code": "TF301",
    "category": "30.05.09",
    "process_areas": [
      "MotorControl Center1"
    ],
    "asset_descriptions": [
      "Transformer|Auxiliary transformer|section №0",
      "Transformer|Auxiliary transformer|section №1",
      "Transformer|Auxiliary transformer|section №2",
      "Transformer|Auxiliary transformer|section №3"
    ]
  },
  "Belt Conveyor|ash": {
    "code": "BC602",
    "category": "20.99.01",
    "process_areas": [
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "Belt Conveyor|Tsetsii|Bad Ash Conveyor"
    ]
  },
  "Switchgear|Battery room": {
    "code": "HE307",
    "category": "30.05.15",
    "process_areas": [
      "Battery room"
    ],
    "asset_descriptions": [
      "Switchgear|Battery panel 1",
      "Switchgear|Battery panel 2",
      "Switchgear|Battery panel 3",
      "Switchgear|Battery panel 4",
      "Switchgear|Battery panel 5",
      "Switchgear|Battery panel 6",
      "Switchgear|Charging panel1",
      "Switchgear|Charging panel2",
      "Switchgear|Feeding panel1",
      "Switchgear|Feeding panel2"
    ]
  },
  "Cooling tower|GFNL-250": {
    "code": "DX201",
    "category": "30.02.99",
    "process_areas": [
      "Cooling water system"
    ],
    "asset_descriptions": [
      "Cooling tower|Power Plant"
    ]
  },
  "Vacuum Filter|ZJCQ-2": {
    "code": "VF201",
    "category": "30.02.99",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Vacuum Filter|"
    ]
  },
  "Grinder|Grinding machine Dn300": {
    "code": "QK501",
    "category": "80.14.01",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Grinder|Maintenance center|Grinding machine 1"
    ]
  },
  "Chemical dosing device|Flocculant": {
    "code": "CI401",
    "category": "20.03.29",
    "process_areas": [
      "Raw water",
      "Reverse osmos"
    ],
    "asset_descriptions": [
      "Chemical dosing device|Power Plant|Flocculant dosing device",
      "Chemical dosing device|Reversed Osmosis Antisludging Agent"
    ]
  },
  "Welding equipment|Plasma cutter": {
    "code": "WR502",
    "category": "80.13.13",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Welding equipment|Plasma cutter|LGK-100 35A"
    ]
  },
  "Welding equipment|Welding machine": {
    "code": "WR501",
    "category": "80.13.13",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Welding equipment|Welding machine|Asea 250",
      "Welding equipment|Welding machine|Wellstar 220",
      "Welding equipment|Welding machine|ВХ1-500 380V",
      "Welding equipment|Welding machine|СТ416"
    ]
  },
  "Lab instrument|water lab": {
    "code": "LI401",
    "category": "30.06.03",
    "process_areas": [
      "Water Lab"
    ],
    "asset_descriptions": [
      "Lab instrument|Chemical water lab Conductivity Meter",
      "Lab instrument|Chemical water lab Dissolved Oxygen Tester",
      "Lab instrument|Chemical water lab Dryning oven",
      "Lab instrument|Chemical water lab Electronic Analytical Balance",
      "Lab instrument|Chemical water lab Exhaust Hood",
      "Lab instrument|Chemical water lab Spectrophotometer 1",
      "Lab instrument|Chemical water lab Spectrophotometer 2",
      "Lab instrument|Chemical water lab Spectrophotometer 3",
      "Lab instrument|Chemical water lab Water-bath",
      "Lab instrument|Chemical water lab distiller",
      "Lab instrument|Chemical water lab larder fridge",
      "Lab instrument|Chemical water lab molecular lab water ultrapurifier",
      "Lab instrument|Chemical water lab pH meter",
      "Lab instrument|Chemical water lab shaker",
      "Lab instrument|Chemical water lab temrature Electric Heating Board",
      "Lab instrument|Chemical water labchemical balance",
      "Lab instrument|Chemical water lab  Burner"
    ]
  },
  "Other equipment|Presses": {
    "code": "ZR501",
    "category": "80.15.99",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Other equipment|Presses"
    ]
  },
  "Pipe|Domestic tap water pipe": {
    "code": "WL502",
    "category": "40.03.01",
    "process_areas": [
      "Power plant"
    ],
    "asset_descriptions": [
      "Pipe|Domestic tap water pipe"
    ]
  },
  "Pipe|Firefighting water pipe": {
    "code": "WL501",
    "category": "40.03.01",
    "process_areas": [
      "Power plant"
    ],
    "asset_descriptions": [
      "Pipe|Firefighting water pipe"
    ]
  },
  "Pipe|Heating water pipe": {
    "code": "WL503",
    "category": "40.03.01",
    "process_areas": [
      "Power plant"
    ],
    "asset_descriptions": [
      "Pipe|Heating water pipe"
    ]
  },
  "Pipe|Sewage water pipe": {
    "code": "WL504",
    "category": "40.03.01",
    "process_areas": [
      "Power plant"
    ],
    "asset_descriptions": [
      "Pipe|Sewage water pipe"
    ]
  },
  "Pneumatic Conveyor|Limestone": {
    "code": "YC101",
    "category": "20.03.01",
    "process_areas": [
      "Boiler house|Outside"
    ],
    "asset_descriptions": [
      "Pneumatic Conveyor|Limestone"
    ]
  },
  "Workshop|Maintenance center": {
    "code": "WZ501",
    "category": "60.05.01",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Workshop|Maintenancecenter"
    ]
  },
  "Building - Auxiliary": {
    "code": "BZ102",
    "category": "60.01.04",
    "process_areas": [
      "Annex 1",
      "Annex 2",
      "ESP house",
      "FAPS house",
      "Hammer crasher house",
      "ID fan house",
      "Power plant"
    ],
    "asset_descriptions": [
      "Building-General|Power Plant|Annex 1",
      "Building-General|Power Plant|Annex 2",
      "Building-General|Power Plant|Belt Conveyor 1 house",
      "Building-General|Power Plant|Belt Conveyor 2 house",
      "Building-General|Power Plant|ESP control house",
      "Building-General|Power Plant|FAPS house",
      "Building-General|Power Plant|Hammer crasher house",
      "Building-General|Power Plant|ID fan house",
      "Building-General|Power Plant|Pump station",
      "Building-general|Watertreament"
    ]
  },
  "Cartridge Filter|Safety filter": {
    "code": "HF401",
    "category": "20.03.09",
    "process_areas": [
      "Pure water",
      "Reverse osmos"
    ],
    "asset_descriptions": [
      "Cartridge Filter|Watertreament RO",
      "Cartridge Filter|Watertreatment RO Cleaning"
    ]
  },
  "Dosing Pump|Water treatment": {
    "code": "DP401",
    "category": "20.03.31",
    "process_areas": [
      "ChemicalDosingDevice",
      "Reversed osmos"
    ],
    "asset_descriptions": [
      "Dosing Pump|Power Plant|Watertreament|Flocculant dosing Pump",
      "Dosing Pump|Watertreament Dosing system Ammoniating-1",
      "Dosing Pump|Watertreament Dosing system Ammoniating-2",
      "Dosing Pump|Watertreament Dosing system Phosphate-1|",
      "Dosing Pump|Watertreament Dosing system Phosphate-2|",
      "Dosing Pump|Watertreament Dosing system Phosphate-3|",
      "Dosing Pump|Watertreament Dosing system cooling tower Antisludging Agent-1",
      "Dosing Pump|Watertreament Dosing system cooling tower Antisludging Agent-2",
      "Dosing Pump|Watertreament RO Antisludging Agent"
    ]
  },
  "Tank|Dosing tank": {
    "code": "TK403",
    "category": "40.03.04",
    "process_areas": [
      "ChemicalDosingDevice",
      "Pure water",
      "Reverse osmos",
      "Reversed osmos"
    ],
    "asset_descriptions": [
      "Tank|Dosing system Phosphate tank 1",
      "Tank|Dosing system Phosphate tank 2",
      "Tank|Dosing system cooling tower Antisludging Agent tank",
      "Tank|Watertreament Ammoniating tank",
      "Tank|Watertreament Flocculant dosing",
      "Tank|Watertreament RO Antisludging Agent tank",
      "Tank|Watertreatment FAWS tank 1",
      "Tank|Watertreatment FAWS tank 2",
      "Tank|WatertreatmentRO Cleaning"
    ]
  },
  "Engine|Diesel engine|AA-4LE2": {
    "code": "DA712",
    "category": "10.02.03",
    "process_areas": [
      "Transportab.DieselSt"
    ],
    "asset_descriptions": [
      "Engine|UHG substationDG-4"
    ]
  },
  "Pressure tank|Deaerator|ZCY50|25m3": {
    "code": "NT201",
    "category": "30.02.17",
    "process_areas": [
      "PowerPlant BoiHou12m"
    ],
    "asset_descriptions": [
      "Pressure tank|Deaerator 1",
      "Pressure tank|Deaerator 2"
    ]
  },
  "Pressure Tank|Boiler system": {
    "code": "NT602",
    "category": "80.01.04",
    "process_areas": [
      "Gallery Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-Pressure Tank|Gallerei|Boiler system 1",
      "ER(M)-Pressure Tank|Tsetsii|Boiler system 1"
    ]
  },
  "Chemical dosing device|FAWS": {
    "code": "CI404",
    "category": "10.10.99",
    "process_areas": [
      "Pure water"
    ],
    "asset_descriptions": [
      "Chemical dosing device|FAWS"
    ]
  },
  "Chemical dosing device|Cleaning": {
    "code": "CI403",
    "category": "10.10.99",
    "process_areas": [
      "Pure water",
      "Reverse osmos"
    ],
    "asset_descriptions": [
      "Chemical dosing device cleanig",
      "Chemical dosing device|Reversed Osmosis Cleaning solution dosing device"
    ]
  },
  "Chemical dosing device|Phosphate": {
    "code": "CI406",
    "category": "10.10.99",
    "process_areas": [
      "ChemicalDosingDevice"
    ],
    "asset_descriptions": [
      "Chemical dosing device|Power Plant|Phosphate dosing device"
    ]
  },
  "Chemical dosing device|Cooling tower Antisludging Agent": {
    "code": "CI407",
    "category": "10.10.99",
    "process_areas": [
      "ChemicalDosingDevice"
    ],
    "asset_descriptions": [
      "Chemical dosing device|Power Plant|Cooling tower Antisludging Agent"
    ]
  },
  "Chemical dosing device|Ammoniating": {
    "code": "CI405",
    "category": "10.10.99",
    "process_areas": [
      "ChemicalDosingDevice"
    ],
    "asset_descriptions": [
      "Chemical dosing device|Power Plant|Ammoniating dosing device"
    ]
  },
  "controlbox|boiler house main controlbox": {
    "code": "TE601",
    "category": "30.05.12",
    "process_areas": [
      "ERT Boiler House",
      "ERT Camp BoilerHouse",
      "Gallery Boiler House",
      "Mining Boiler House",
      "TG Boiler House",
      "TT Airport",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-controlbox|ERT camp|boiler house main controlbox",
      "ER(M)-controlbox|Gallerei|boiler house main controlbox",
      "ER(M)-controlbox|Mining|boiler house main controlbox1",
      "ER(M)-controlbox|Tsetsii|boiler house main controlbox1",
      "ERT-controlbox|ERT|boiler house main controlbox",
      "TG-controlbox|TG|boiler house main controlbox",
      "TTA-controlbox|TT airport|boiler house main controlbox"
    ]
  },
  "controlbox|boiler main controlbox": {
    "code": "TE602",
    "category": "30.05.12",
    "process_areas": [
      "ERT Boiler House",
      "Gallery Boiler House",
      "Mining Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-controlbox|ERT|boiler main controlbox2",
      "ER(M)-controlbox|Mining|boiler main controlbox1",
      "ER(M)-controlbox|Mining|boiler main controlbox2",
      "ER(M)-controlbox|Tsetsii|boiler main controlbox1",
      "ER(M)-controlbox|Tsetsii|boiler main controlbox2",
      "ERT-controlbox|ERT|boiler main controlbox1",
      "ERT-controlbox|ERT|boiler main controlbox3"
    ]
  },
  "controlbox|Heat Exchanger controlbox": {
    "code": "TE603",
    "category": "30.05.12",
    "process_areas": [
      "ERT Boiler House",
      "Gallery Boiler House",
      "Mining Boiler House",
      "Tsetsii Boiler house"
    ],
    "asset_descriptions": [
      "ER(M)-controlbox|ERT|Heat Exchanger controlbox 2",
      "ER(M)-controlbox|Mining|Heat Exchanger controlbox",
      "ER(M)-controlbox|Tsetsii|Heat Exchanger controlbox",
      "ER(M)-controlbox|Tsetsii|boiler main controlbox3",
      "ERT-controlbox|ERT|Heat Exchanger controlbox 1"
    ]
  },
  "Pump|Condensate tank pump|R25-125": {
    "code": "PP207",
    "category": "30.02.13",
    "process_areas": [
      "PowerPlant BoiHou 6m"
    ],
    "asset_descriptions": [
      "Pump|Condensate tank pump 1",
      "Pump|Condensate tank pump 2"
    ]
  },
  "Spirals|Spiral feeder": {
    "code": "SP101",
    "category": "20.02.03",
    "process_areas": [
      "Boiler house|Outside"
    ],
    "asset_descriptions": [
      "Spiral|Spiral feeder"
    ]
  },
  "Steam Pipe/hose|Main steam collector|219x8mm": {
    "code": "KL201",
    "category": "30.02.11",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Steam Pipe/hose|Main steam collector"
    ]
  },
  "Substation|35/04": {
    "code": "SU703",
    "category": "60.03.02",
    "process_areas": [
      "SHPP Boiler houze",
      "SHPP ErgeltinUsanSan",
      "SHPP HayagdalinDalan",
      "SHPP ProdHandlngCoal",
      "SHPP Raw coal",
      "SHPP-1",
      "SHPP-2",
      "SHPP-3"
    ],
    "asset_descriptions": [
      "ERT-Substation|CHHP Boiler houze |35/04 kV ABB",
      "ERT-Substation|CHHP Hayagdaliin dalan |35/04 kV Samara",
      "ERT-Substation|CHHP Module-1 |35/04 kV ABB",
      "ERT-Substation|CHHP Moduli-2 |35/04 kV ABB",
      "ERT-Substation|CHHP Moduli-3 |35/04 kV ABB",
      "ERT-Substation|CHHP Product Handling |35/04 kV ABB",
      "ERT-Substation|CHHP Raw coal |35/04 kV ABB",
      "ERT-Substation|CHHP Return water |35/04 kV ABB"
    ]
  },
  "Power Substation|35/10 kV|": {
    "code": "SU702",
    "category": "60.03.02",
    "process_areas": [
      "Galarei camp",
      "Water supply\\Naimdai"
    ],
    "asset_descriptions": [
      "ER(M)-Substation|Hothon substation",
      "WS-Substation|Water supply substation|35/10 kV|1x4000kVA"
    ]
  },
  "Boiler|KV": {
    "code": "BB605",
    "category": "80.01.27",
    "process_areas": [
      "Mining Boiler House"
    ],
    "asset_descriptions": [
      "Boiler|Mining|Boiler 1",
      "Boiler|Mining|boiler 2"
    ]
  },
  "Condenser|Air cooled condenser|HTAC10ACMH001": {
    "code": "CX201",
    "category": "30.02.28",
    "process_areas": [
      "ACC 1",
      "ACC 2",
      "ACC 3"
    ],
    "asset_descriptions": [
      "Condenser|Power Plant|Air Cooled Condenser 1",
      "Condenser|Power Plant|Air Cooled Condenser 2",
      "Condenser|Power Plant|Air Cooled Condenser 3"
    ]
  },
  "Cutting Machine|Hydraulic shearing machine": {
    "code": "JR501",
    "category": "80.15.02",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Cutting Machine|Maintenance center|Hydraulic shearing machine"
    ]
  },
  "Cutting Machine|Ken Dn400": {
    "code": "JR503",
    "category": "80.14.01",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Cutting Machine|Dn400"
    ]
  },
  "Cyclone|Boiler|HX-35/3.82-450": {
    "code": "CY101",
    "category": "20.02.12",
    "process_areas": [
      "Boiler#1|BoilerHouse",
      "Boiler#2|BoilerHouse",
      "Boiler#3|BoilerHouse"
    ],
    "asset_descriptions": [
      "Cyclone|Power Plant|Boiler 1",
      "Cyclone|Power Plant|Boiler 2",
      "Cyclone|Power Plant|Boiler 3"
    ]
  },
  "Device|AAC cleaning device|CM-2A/Ct": {
    "code": "ZQ201",
    "category": "30.02.11",
    "process_areas": [
      "Annex 1"
    ],
    "asset_descriptions": [
      "Device|AAC cleaning device"
    ]
  },
  "Distributing line|10 kV": {
    "code": "IN701",
    "category": "30.05.04",
    "process_areas": [
      "Ajilchidiin horoolol",
      "Hothon 10kV DL TTA",
      "Hothon10kVElectricTL",
      "Sumiin tseverleh",
      "UHG SubSt Shuuruuleh",
      "WS 10kV DL Hudgiin A",
      "WS 10kV DL Hudgiin B",
      "WS 10kV DL Hudgiin C"
    ],
    "asset_descriptions": [
      "Distributing line|Electric transmission line|2x10 kV|ACSR-400\\25|L=2x038 km",
      "ER(M)-Distributing line|Ajilchidiin horoolol|AC-70\\10|L=0973km",
      "ER(M)-Distributing line|Shuuruuleh|AC-70|L=88km",
      "ER(M)-Distributing line||Aerfort|AC-70\\10|L=61km",
      "WS-Distributing line|Hudgiin A|AC-50\\10|L=176km",
      "WS-Distributing line|Hudgiin B|AC-50\\10|L=98km",
      "WS-Distributing line|Hudgiin C|AC-50\\10|L=1525km",
      "WS-Distributing line|Sumiin tseverleh |AC-50\\10|L=082km"
    ]
  },
  "Distributing line|35 kV": {
    "code": "IN702",
    "category": "30.05.04",
    "process_areas": [
      "UHG ReturnWater",
      "UHG substation Camp",
      "UHG-WS35kV DistLine"
    ],
    "asset_descriptions": [
      "ER(M)-Distributing line|Camp|AC-50\\8|L=101km",
      "ERT-Distributing line|Return Water |AC-70\\10|L=52km",
      "WS-Distributing line|Water supply|AC-7095\\10|L=2x15km"
    ]
  },
  "Distributing line|110 kV": {
    "code": "IN703",
    "category": "30.05.04",
    "process_areas": [
      "TT-UHG110kV DistLine",
      "UHG SubSt Mining"
    ],
    "asset_descriptions": [
      "ER(M)-Distributing line|Mining|AC-70\\10|L=11km",
      "ER(M)-Distributing line|TT-UHG 110 kV|AC-240|L=2x14km"
    ]
  },
  "Drill Machine|Ken": {
    "code": "DM501",
    "category": "80.14.01",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Drill Machine|Ken 2826BS"
    ]
  },
  "Drum|Boiler|HX-35/3.82-450": {
    "code": "DT101",
    "category": "80.08.03",
    "process_areas": [
      "Boiler#1|23m",
      "Boiler#2|23m",
      "Boiler#3|23m"
    ],
    "asset_descriptions": [
      "Drum|Power Plant|Boiler 1",
      "Drum|Power Plant|Boiler 2",
      "Drum|Power Plant|Boiler 3"
    ]
  },
  "Electrostatic Precipitator| RDW33.6/4*4.0/12*0.4/7": {
    "code": "EF101",
    "category": "30.05.25",
    "process_areas": [
      "Boiler#1|Outside",
      "Boiler#2|Outside",
      "Boiler#3|Outside"
    ],
    "asset_descriptions": [
      "Electrostatic Precipitator|Powe Plant|Boiler 1",
      "Electrostatic Precipitator|Powe Plant|Boiler 2",
      "Electrostatic Precipitator|Powe Plant|Boiler 3"
    ]
  },
  "Engine|Diesel engine|3512": {
    "code": "DA301",
    "category": "30.05.01",
    "process_areas": [
      "ECB"
    ],
    "asset_descriptions": [
      "Engine|Diesel generator"
    ]
  },
  "Turbo generator|QF2-J6-2": {
    "code": "PN301",
    "category": "10.05.10",
    "process_areas": [
      "MPH"
    ],
    "asset_descriptions": [
      "Turbo generator|TG1",
      "Turbo generator|TG2",
      "Turbo generator|TG3"
    ]
  },
  "Building - ECB": {
    "code": "BZ301",
    "category": "60.01.04",
    "process_areas": [
      "ECB"
    ],
    "asset_descriptions": [
      "Building-General|Power Plant|ECB"
    ]
  },
  "Grinder|Grinding machine Dn200": {
    "code": "QK502",
    "category": "80.14.01",
    "process_areas": [
      "Workshop"
    ],
    "asset_descriptions": [
      "Grinder|Maintenance center|Grinding machine 2",
      "Grinder|Maintenance center|Grinding machine 3"
    ]
  },
  "Pump|Heating system|Main water pump": {
    "code": "PP505",
    "category": "40.01.99",
    "process_areas": [
      "PowerPlant Build 12m"
    ],
    "asset_descriptions": [
      "Pump|Power plant main building 12m|Main water pump 1",
      "Pump|Power plant main building 12m|Main water pump 2"
    ]
  },
  "Elevator|Coal handle": {
    "code": "EC101",
    "category": "30.04.14",
    "process_areas": [
      "Coal handle system"
    ],
    "asset_descriptions": [
      "Elevator/Escalator|Power Plant|Coal hadling system|Emergency"
    ]
  },
  "Substation|110\\35\\10 kV 25000 kVA": {
    "code": "SU701",
    "category": "60.03.02",
    "process_areas": [
      "UHG Men substation"
    ],
    "asset_descriptions": [
      "ER(M)-Substation|UHG substation"
    ]
  },
  "Switchgear|motor control center4": {
    "code": "HE304",
    "category": "30.05.15",
    "process_areas": [
      "MotorControl Center4"
    ],
    "asset_descriptions": [
      "Switchgear|Chemical|panel 1",
      "Switchgear|Chemical|panel 2",
      "Switchgear|Chemical|panel 3"
    ]
  },
  "Boiler|HX-35/3.82-450": {
    "code": "BB101",
    "category": "30.01.01",
    "process_areas": [
      "Boiler house"
    ],
    "asset_descriptions": [
      "Boiler|Power Plant|Boiler #1|Зуух №1",
      "Boiler|Power Plant|Boiler 2",
      "Boiler|Power Plant|Boiler 3"
    ]
  },
  "Aspirator|Coal handle system shop": {
    "code": "FX101",
    "category": "30.03.05",
    "process_areas": [
      "Boiler house|26m",
      "HammerCrusherHouse5m"
    ],
    "asset_descriptions": [
      "Aspirator|Belt Conveyor 3",
      "Aspirator|Hummer Crusher House"
    ]
  },
  "Controller|Steam turbine trip controller|SKZ-01-OM-10": {
    "code": "CE201",
    "category": "30.02.07",
    "process_areas": [
      "Steam turbine 1",
      "Steam turbine 2",
      "Steam turbine 3"
    ],
    "asset_descriptions": [
      "Controller|Power Plant|Steam turbine 1|Trip controller",
      "Controller|Power Plant|Steam turbine 2|Trip controller",
      "Controller|Power Plant|Steam turbine 3|Trip controller"
    ]
  },
  "Cooler|Oil cooler|YL-25-10": {
    "code": "KX201",
    "category": "30.02.25",
    "process_areas": [
      "Oil supply system 1",
      "Oil supply system 2",
      "Oil supply system 3"
    ],
    "asset_descriptions": [
      "Cooler|Oil cooler 1-1",
      "Cooler|Oil cooler 1-2",
      "Cooler|Oil cooler 2-1",
      "Cooler|Oil cooler 2-2",
      "Cooler|Oil cooler 3-1",
      "Cooler|Oil cooler 3-2"
    ]
  },
  "Filter|Steam turbine|Governing oil filter|": {
    "code": "FT201",
    "category": "30.02.99",
    "process_areas": [
      "Steam turbine 1",
      "Steam turbine 2",
      "Steam turbine 3"
    ],
    "asset_descriptions": [
      "Filter|Steam turbine 1|Governing oil filter 1|",
      "Filter|Steam turbine 1|Governing oil filter 2|",
      "Filter|Steam turbine 2|Governing oil filter 1|",
      "Filter|Steam turbine 2|Governing oil filter 2|",
      "Filter|Steam turbine 3|Governing oil filter 1|",
      "Filter|Steam turbine 3|Governing oil filter 2|"
    ]
  },
  "Generator|Diesel generator|SC275AS": {
    "code": "GE706",
    "category": "30.05.24",
    "process_areas": [
      "TsagaanKhad WorkShop"
    ],
    "asset_descriptions": [
      "Generator|Diesel generator|Tsagaan Khad|DG 5"
    ]
  },
  "Generator|Diesel generator|SC350AS": {
    "code": "GE705",
    "category": "30.05.24",
    "process_areas": [
      "TsagaanKhad DieselSt",
      "TsagaanKhad WorkShop"
    ],
    "asset_descriptions": [
      "Generator|Diesel generator|Tsagaan Khad|DG 1",
      "Generator|Diesel generator|Tsagaan Khad|DG 2",
      "Generator|Diesel generator|Tsagaan Khad|DG 3",
      "Generator|Diesel generator|Tsagaan Khad|DG 4"
    ]
  },
  "Generator|Diesel generator|C650D5A": {
    "code": "GE702",
    "category": "30.05.24",
    "process_areas": [
      "GalleryDieselStation",
      "UHG SubSt DieselSt-2"
    ],
    "asset_descriptions": [
      "Generator|Diesel generator|Gallery camp|Emergency",
      "Generator|Diesel generator|UHG substation|DG 2-1",
      "Generator|Diesel generator|UHG substation|DG 2-2",
      "Generator|Diesel generator|UHG substation|DG 2-3"
    ]
  },
  "Generator|Diesel generator|KD165": {
    "code": "GE708",
    "category": "30.05.24",
    "process_areas": [
      "Transportab.DieselSt"
    ],
    "asset_descriptions": [
      "Generator|Diesel generator|UHG substation|Portable|DG 2"
    ]
  },
  "Generator|Diesel generator|KD220": {
    "code": "GE709",
    "category": "30.05.24",
    "process_areas": [
      "Transportab.DieselSt"
    ],
    "asset_descriptions": [
      "Generator|Diesel generator|Power plant|Pump station"
    ]
  },
  "Engine|Diesel engine|6068HF120": {
    "code": "DA708",
    "category": "10.02.03",
    "process_areas": [
      "Transportab.DieselSt"
    ],
    "asset_descriptions": [
      "Engine|UHG substation|DG-1"
    ]
  },
  "Engine|Diesel engine|6068HF475": {
    "code": "DA709",
    "category": "10.02.03",
    "process_areas": [
      "Transportab.DieselSt"
    ],
    "asset_descriptions": [
      "Engine|UHG substation|DG-2"
    ]
  },
  "Generator|Diesel generator|GEP100": {
    "code": "GE703",
    "category": "30.05.24",
    "process_areas": [
      "TTA Diesel station"
    ],
    "asset_descriptions": [
      "Generator|Diesel generator|Airport|DG 1-1"
    ]
  },
  "Centrifugal fan|Exhaust fan of oil tank|AYF2-250-0.75": {
    "code": "FP201",
    "category": "30.02.99",
    "process_areas": [
      "Main oil tank 1",
      "Main oil tank 2",
      "Main oil tank 3"
    ],
    "asset_descriptions": [
      "Centrifugal fan|Oil Vapour Extraitor 1",
      "Centrifugal fan|Oil Vapour Extraitor 2",
      "Centrifugal fan|Oil Vapour Extraitor 3"
    ]
  },
  "Engine|Diesel engine|KTA19 G8": {
    "code": "DA702",
    "category": "10.02.03",
    "process_areas": [
      "GalleryDieselStation",
      "TTA Diesel station",
      "UHG SubSt DieselSt-2"
    ],
    "asset_descriptions": [
      "Engine|UHG substation|DG2-1",
      "Engine|UHG substation|DG2-2",
      "Engine|UHG substation|DG2-3",
      "Engine|UHG substation|DG2-4",
      "TTA-Engine|TTA|DG-1"
    ]
  },
  "Burner|Boiler|HX-35/3.82-450": {
    "code": "LB101",
    "category": "30.01.06",
    "process_areas": [
      "Boiler#1|4m",
      "Boiler#2|4m",
      "Boiler#3|4m"
    ],
    "asset_descriptions": [
      "Burner|Boiler 1|burner 1",
      "Burner|Boiler 1|burner 2",
      "Burner|Boiler 2|burner 1",
      "Burner|Boiler 2|burner 2",
      "Burner|Boiler 3|burner1",
      "Burner|Boiler 3|burner2"
    ]
  },
  "Steam Pipe/hose|Boiler|HX-35/3.82-450": {
    "code": "KL101",
    "category": "30.04.01",
    "process_areas": [
      "Boiler#1|16m",
      "Boiler#1|20m",
      "Boiler#1|22m",
      "Boiler#2|16m",
      "Boiler#2|20m",
      "Boiler#2|22m",
      "Boiler#3|16m",
      "Boiler#3|20m",
      "Boiler#3|22m"
    ],
    "asset_descriptions": [
      "Steam pipe|Boiler 1|Steam heater 1",
      "Steam pipe|Boiler 1|Steam heater 2",
      "Steam pipe|Boiler 1|Steam pipe",
      "Steam pipe|Boiler 2|Steam heater 1",
      "Steam pipe|Boiler 2|Steam heater 2",
      "Steam pipe|Boiler 2|Steam pipe",
      "Steam pipe|Boiler 3|Steam heater 1",
      "Steam pipe|Boiler 3|Steam heater 2",
      "Steam pipe|Boiler 3|Steam pipe"
    ]
  },
  "Water pipe|Feed water": {
    "code": "WL101",
    "category": "30.04.01",
    "process_areas": [
      "Boiler#1|10m",
      "Boiler#1|BoilerH 6m",
      "Boiler#2|10m",
      "Boiler#2|BoilerH 6m",
      "Boiler#3|10m",
      "Boiler#3|BoilerH 6m"
    ],
    "asset_descriptions": [
      "Water pipe|Boiler 1|Economaizer 1",
      "Water pipe|Boiler 1|Economaizer 2",
      "Water pipe|Boiler 1|Feed water",
      "Water pipe|Boiler 2|Economaizer 1",
      "Water pipe|Boiler 2|Economaizer 2",
      "Water pipe|Boiler 2|Feed water",
      "Water pipe|Boiler 3|Economaizer 1",
      "Water pipe|Boiler 3|Economaizer 2",
      "Water pipe|Boiler 3|Feed water"
    ]
  },
  "Generator|Diesel generator|GEP275": {
    "code": "GE710",
    "category": "30.05.24",
    "process_areas": [
      "BoiPla-Tsetsii DieSt"
    ],
    "asset_descriptions": [
      "Generator|Diesel generator|Tsetsii|Emergency"
    ]
  },
  "Engine|Diesel engine|DC9 65A-2": {
    "code": "DA706",
    "category": "10.02.03",
    "process_areas": [
      "TsagaanKhad WorkShop"
    ],
    "asset_descriptions": [
      "Engine|Tsagaan khad|DG-5"
    ]
  },
  "Engine|Diesel engine|DC9 65A-1": {
    "code": "DA705",
    "category": "10.02.03",
    "process_areas": [
      "TsagaanKhad DieselSt",
      "TsagaanKhad WorkShop"
    ],
    "asset_descriptions": [
      "Engine|Tsagaan khad|DG-4",
      "TG-Engine|Tsagaan khad|DG-1",
      "TG-Engine|Tsagaan khad|DG-2",
      "TG-Engine|Tsagaan khad|DG-3"
    ]
  },
  "Engine|Diesel engine|BF4M1013EC": {
    "code": "DA711",
    "category": "10.02.03",
    "process_areas": [
      "Transportab.DieselSt"
    ],
    "asset_descriptions": [
      "Engine|UHG substation|DG-3"
    ]
  },
  "Engine|Diesel engine|TAD1641GE": {
    "code": "DA707",
    "category": "10.02.03",
    "process_areas": [
      "BoiPlace-CHPP DieSt",
      "Transportab.DieselSt"
    ],
    "asset_descriptions": [
      "Engine|CHPP|DG-1",
      "TG-Engine|UHG substation|DG-5"
    ]
  },
  "Filter|Steam turbine|Lubricating oil filter|LY-38/25W-32": {
    "code": "FT202",
    "category": "30.02.99",
    "process_areas": [
      "Oil supply system 1",
      "Oil supply system 2",
      "Oil supply system 3"
    ],
    "asset_descriptions": [
      "Filter|Steam turbine 1|Lubricating oil filter 1",
      "Filter|Steam turbine 1|Lubricating oil filter 2",
      "Filter|Steam turbine 2|Lubricating oil filter 1",
      "Filter|Steam turbine 2|Lubricating oil filter 2",
      "Filter|Steam turbine 3|Lubricating oil filter 1",
      "Filter|Steam turbine 3|Lubricating oil filter 2"
    ]
  },
  "Hot-water Tank|Drain pot|JY-0450-10": {
    "code": "TX202",
    "category": "30.02.10",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Hot-water Tank|Drain pot 1",
      "Hot-water Tank|Drain pot 2",
      "Hot-water Tank|Drain pot 3"
    ]
  },
  "Hot-water Tank|Hot well|RJ-0140-22": {
    "code": "TX201",
    "category": "30.02.10",
    "process_areas": [
      "Annex 1",
      "Annex 2"
    ],
    "asset_descriptions": [
      "Hot-water Tank|Hot well 1",
      "Hot-water Tank|Hot well 2",
      "Hot-water Tank|Hot well 3"
    ]
  },
  "Steam Pipe/hose| (Pressure Reducing and Desuperheating Station)|PRDS 4.0/0.3 Mpa": {
    "code": "KL202",
    "category": "30.02.11",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Steam Pipe/hose|PRDS 1 (Pressure Reducing and Desuperheating Station)",
      "Steam Pipe/hose|PRDS 2(Pressure Reducing and Desuperheating Station)"
    ]
  },
  "Steam Pipe/hose|(Pressure Reducing and Desuperheating Station)|PRDS 0.3/0.09 Mpa": {
    "code": "KL203",
    "category": "30.02.11",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Steam Pipe/hose|PRDS 3(Pressure Reducing and Desuperheating Station)"
    ]
  },
  "Crane/Hoist|Electrical Bridge Crane|CD15": {
    "code": "CN501",
    "category": "50.01.07",
    "process_areas": [
      "workshop"
    ],
    "asset_descriptions": [
      "Crane/Hoist|Workshop"
    ]
  },
  "Substation/ Switchroom/ Switchyard|Switchroom 10kV": {
    "code": "SU705",
    "category": "60.03.02",
    "process_areas": [
      "WS Substation"
    ],
    "asset_descriptions": [
      "Substation/ Switchroom/ Switchyard|Switchroom 10kV"
    ]
  },
  "Substation/ Switchroom/ Switchyard|Switchyard 35kV": {
    "code": "SU706",
    "category": "60.03.02",
    "process_areas": [
      "WS Substation"
    ],
    "asset_descriptions": [
      "Substation/ Switchroom/ Switchyard|Switchyard 35kV"
    ]
  },
  "Engine|Diesel engine|GCB330A": {
    "code": "DA710",
    "category": "10.02.03",
    "process_areas": [
      "BoiPla-Tsetsii DieSt"
    ],
    "asset_descriptions": [
      "Engine|Boiler place of Tsetsii district|DG-1"
    ]
  },
  "Filter Press|Oil paper filter|PF-30": {
    "code": "LF201",
    "category": "30.02.99",
    "process_areas": [
      "Power plant TurHouse"
    ],
    "asset_descriptions": [
      "Filter Press|Oil paper filter|"
    ]
  },
  "Other equipment|Automobile|MCSI": {
    "code": "ZV001",
    "category": "00.00.00",
    "process_areas": [
      "Power plant"
    ],
    "asset_descriptions": [
      "Other equipment|Automobile|MCSI"
    ]
  },
  "Water Pipe|Water treatment": {
    "code": "WL401",
    "category": "40.03.01",
    "process_areas": [
      "Power plant",
      "Pure water",
      "Raw water"
    ],
    "asset_descriptions": [
      "Water Pipe|Dosing device",
      "Water Pipe|Pure water",
      "Water Pipe|Raw water"
    ]
  },
  "Tank|Waste water": {
    "code": "TK408",
    "category": "00.00.00",
    "process_areas": [
      "Power plant"
    ],
    "asset_descriptions": [
      "Tank|Waste water"
    ]
  }
};