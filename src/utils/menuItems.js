import { AiOutlinePhone, AiTwotoneSecurityScan } from "react-icons/ai";
import {
  BiCalculator, BiHdd,
  BiMicrophone, BiPencil,
  BiSolidInjection,
  BiSolidShoppingBag,
  BiSolidWebcam
} from "react-icons/bi";
import {
  BsBatteryCharging,
  BsDeviceHdd,
  BsDeviceHddFill,
  BsFan,
  BsFillHouseGearFill,
  BsFillMotherboardFill,
  BsFillMouse2Fill,
  BsGpuCard,
  BsHddFill,
  BsHddNetworkFill,
  BsHeadphones,
  BsKeyboard,
  BsMemory,
  BsModem,
  BsMotherboard,
  BsMouse,
  BsProjector, BsScooter, BsSdCard,
  BsSpeaker, BsUsbSymbol,
  BsWatch
} from "react-icons/bs";
import { CiHardDrive, CiMobile4, CiSpeaker } from "react-icons/ci";
import { FaFax, FaHdd, FaNetworkWired, FaTabletAlt, FaUsb } from "react-icons/fa";
import {
  FaCompactDisc,
  FaComputer,
  FaGamepad,
  FaMobile,
  FaPrint,
  FaServer,
  FaWeightScale
} from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import {
  GiAutoRepair,
  GiBatteries,
  GiBatteryPack,
  GiBottledBolt,
  GiDesk, GiGameConsole,
  GiGreenPower,
  GiLaptop, GiPapers,
  GiProcessor, GiUnplugged
} from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoScaleOutline } from "react-icons/io5";
import { LiaKeyboardSolid, LiaMemorySolid } from "react-icons/lia";
import { MdAdfScanner, MdCable, MdOutlineCoffeeMaker, MdPower, MdQrCodeScanner } from "react-icons/md";
import { PiComputerTowerFill, PiOfficeChairBold, PiWebcamDuotone } from "react-icons/pi";
import { RiPrinterCloudLine, RiRouterFill, RiSwitchFill } from "react-icons/ri";
import { SiWire } from "react-icons/si";
import { TbBatteryCharging2, TbChargingPile, TbDeviceIpad, TbSettingsBolt, TbShredder, TbSquareAsteriskFilled } from "react-icons/tb";
import { TiPrinter } from "react-icons/ti";

const menuItems = [
  {
    id: "pvnjGPPF2SjfiBRHhBmN",
    title: "MONITORS",
    link: "monitors",
    Icon: FiMonitor,
  },
  {
    id: "CcFt1CmNQKjY0jxOP6ne",
    title: "PC PARTS",
    link: "pc-parts",
    Icon: PiComputerTowerFill,

    links: [
      {
        title: "PC cases",
        link: "pc-cases",
      },
      {
        title: "Motherboards (MBD)",
        link: "motherboards",
        SubmenuIcon: BsFillMotherboardFill,
      },
      {
        title: "Processors (CPU)",
        link: "processors",
        SubmenuIcon: GiProcessor,
      },
      {
        title: "Random Access Memory (RAM)",
        link: "ram",
        SubmenuIcon: BsMemory,
      },
      {
        title: "Video cards (GPU)",
        link: "video-cards",
        SubmenuIcon: BsGpuCard,
      },
      {
        title: "Internal hard drives (HDD)",
        link: "internal-hard-disks",
        SubmenuIcon: BsDeviceHddFill,
      },
      {
        title: "Solid State Drives (SSD)",
        link: "solid-state-drives",
        SubmenuIcon: BiHdd,
      },
      {
        title: "Optical Disc Drives",
        link: "optical-disc-drives",
        SubmenuIcon: FaCompactDisc,
      },
      {
        title: "PC power supplies",
        link: "pc-power-supplies",
        SubmenuIcon: MdPower,
      },
      {
        title: "Air and liquid cooling",
        link: "air-and-liquid-cooling",
        SubmenuIcon: BsFan,
      },
      {
        title: "Thermal interfaces",
        link: "thermal-interfaces",
        SubmenuIcon: BiSolidInjection,
      },
    ],
  },
  {
    id: "i2D6yRHS8l3Ecqg82MHH",
    title: "PERIPHERAL",
    link: "peripheral",
    Icon: BsUsbSymbol,
    links: [
      {
        title: "Webcams",
        link: "webcams",
        SubmenuIcon: BiSolidWebcam,
      },
      {
        title: "Case Accessories",
        link: "housing-accessories",
        SubmenuIcon: BsFillMouse2Fill,
      },
      {
        title: "Computer mice",
        link: "computer-mice",
        SubmenuIcon: BsMouse,
      },
      {
        title: "Keyboards",
        link: "keyboards",
        SubmenuIcon: BsKeyboard,
      },
      {
        title: "Mouse-pads",
        link: "mouse-pads",
        SubmenuIcon: TbDeviceIpad,
      },
      {
        title: "Headphones and headsets",
        link: "headphones-and-headsets",
        SubmenuIcon: BsHeadphones,
      },
      {
        title: "Speakers and soundbars",
        link: "speakers-and-soundbars",
        SubmenuIcon: BsSpeaker,
      },
      {
        title: "Portable speakers",
        link: "portable-speakers",
        SubmenuIcon: CiSpeaker,
      },
      {
        title: "Microphones",
        link: "microphones",
        SubmenuIcon: BiMicrophone,
      },
      {
        title: "Game consoles",
        link: "game-consoles",
        SubmenuIcon: FaGamepad,
      },
      {
        title: "Game controllers",
        link: "game-controllers",
        SubmenuIcon: GiGameConsole,
      },
    ],
  },
  
  {
    id: "oVPy6QzT1K7fPGXvCxQy",
    title: "DRIVES",
    link: "drives",
    Icon: CiHardDrive,
    links: [
      {
        title: "External hard drives",
        link: "external-hard-drives",
        SubmenuIcon: FaHdd,
      },
      {
        title: "Hard drive enclosures and stations",
        link: "flash-drives",
        SubmenuIcon: BsHddFill,
      },
      {
        title: "Flash drives",
        link: "flash-drives",
        SubmenuIcon: FaUsb,
      },
      {
        title: "Memory cards (SD)",
        link: "memory-cards",
        SubmenuIcon: BsSdCard,
      },
    ],
  },
  {
    id: "wg9KWercTspJHXkGipiU",
    title: "MONOBLOCKS AND PCs",
    link: "all-in-one-PC",
    Icon: FaComputer,
    links: [
      {
        title: "Monoblocks",
        link: "monoblocks",
        SubmenuIcon: FaComputer,
      },
      {
        title: "Servers",
        link: "servers",
        SubmenuIcon: FaServer,
      },
    ],
  },
  {
    id: "bCg5CjZzd2PWTqCIcdUV",
    title: "LAPTOPES AND MORE",
    link: "laptops-and-stuff",
    Icon: GiLaptop,
    links: [
      {
        title: "Laptops",
        link: "laptops",
        SubmenuIcon: GiLaptop,
      },
      {
        title: "Bags and backpacks",
        link: "bags-and-backpacks",
        SubmenuIcon: BiSolidShoppingBag,
      },
      
      {
        title: "Laptop batteries",
        link: "laptop-batteries",
        SubmenuIcon: GiBatteryPack,
      },
      {
        title: "Laptop chargers",
        link: "laptop-chargers",
        SubmenuIcon: TbBatteryCharging2,
      },
      {
        title: "Laptop Hard Drives",
        link: "hard-drives-for-laptops",
        SubmenuIcon: BsDeviceHdd,
      },
      {
        title: "RAM for laptops",
        link: "ram-for-laptops",
        SubmenuIcon: LiaMemorySolid,
      },
      {
        title: "Laptop Screens",
        link: "laptop-screens",
        SubmenuIcon: FiMonitor,
      },
      {
        title: "Laptop Keyboards",
        link: "laptop-keyboards",
        SubmenuIcon: LiaKeyboardSolid,
      },
    ],
  },

  {
    id: "rKLZ2xspKbtSPbsmhyzB",
    title: "MOBILE PERIPHERAL",
    link: "mobile-peripheral",
    Icon: FaMobile,
    links: [
      {
        title: "Mobile phones",
        link: "mobile-phones",
        SubmenuIcon: FaMobile,
      },
      {
        title: "Tablets",
        link: "tablets",
        SubmenuIcon: FaTabletAlt,
      },
      {
        title: "Smart watch",
        link: "smart-watch",
        SubmenuIcon: BsWatch,
      },
      {
        title: "Chargers for gadgets",
        link: "gadget-chargers",
        SubmenuIcon: TbChargingPile,
      },
      {
        title: "Cables for phones",
        link: "cables-for-phones",
        SubmenuIcon: MdCable,
      },
      {
        title: "Portable batteries",
        link: "portable-batteries",
        SubmenuIcon: BsBatteryCharging,
      },
      {
        title: "Miscellaneous mobile peripherals",
        link: "miscellaneous-mobile-peripherals",
        SubmenuIcon: CiMobile4,
      },
    ],
  },
  {
    id: "WRPdLZVH3VLZKqxy4Yfo",
    title: "PRINTERS",
    link: "printers",
    Icon: FaPrint,
    
    links: [
      {
        title: "Laser printers",
        link: "laser-printers",
        SubmenuIcon: FaPrint,
      },
      {
        title: "Inkjet printers",
        link: "inkjet-printers",
        SubmenuIcon: RiPrinterCloudLine,
      },
      {
        title: "Copiers",
        link: "copiers",
        SubmenuIcon: TiPrinter,
      },
      {
        title: "Scanners",
        link: "scanners",
        SubmenuIcon: MdAdfScanner,
      },
    ],
  },
  {
    id: "Igjiah30Hd2Hdik982h",
    title: "OFFICE EQUIPMENT",
    link: "office-equipment",
    Icon: HiOfficeBuilding,
    
    links: [
      {
        title: "Phones for home and office",
        link: "phones-for-home-and-office",
        SubmenuIcon: AiOutlinePhone,
      },
      {
        title: "Fax machines",
        link: "fax-machines",
        SubmenuIcon: FaFax,
      },
      {
        title: "Projectors and accessories",
        link: "projectors-and-accessories",
        SubmenuIcon: BsProjector,
      },
      {
        title: "Paper Shredders (Shredders)",
        link: "paper-shredders",
        SubmenuIcon: TbShredder,
      },
      {
        title: "Consumable Materials",
        link: "consumable-materials",
        SubmenuIcon: GiPapers,
      },
      {
        title: "Consumables",
        link: "consumables",
        SubmenuIcon: BiPencil,
      },
    ],
  },
  {
    id: "rdFK4qvT4eQg3OTPJl16",
    title: "NETWORK EQUIPMENT",
    link: "network-equipment",
    Icon: BsHddNetworkFill,
    
    links: [
      {
        title: "Routers",
        link: "routers",
        SubmenuIcon: BsHddNetworkFill,
      },
      {
        title: "Wireless Network Boosters",
        link: "wireless-amplifiers",
        SubmenuIcon: RiRouterFill,
      },
      {
        title: "Network adapters and boards",
        link: "network-adapters-and-boards",
        SubmenuIcon: FaNetworkWired,
      },
      {
        title: "Switches, converters and more",
        link: "switches-converters-etc",
        SubmenuIcon: RiSwitchFill,
      },
      {
        title: "Modems",
        link: "modems",
      SubmenuIcon: BsModem,
    },
    {
      title: "Network cables",
      link: "network-cables",
      SubmenuIcon: MdCable,
    },
  ],
},
{
  id: "pbuLvUGSlE68yY1uC6Y7",
  title: "SAFETY SYSTEM",
  link: "security-system",
  Icon: AiTwotoneSecurityScan,
  
  links: [
    {
      title: "CCTV cameras",
      link: "cctv-cameras",
      SubmenuIcon: PiWebcamDuotone,
      },
    ],
  },
  {
    id: "KFylHvzeDXFNxVZiF4l6",
    title: "AUTOMATION",
    link: "automation",
    Icon: GiAutoRepair,
    
    links: [
      {
        title: "POS Computers and More",
        link: "pos-computers-and-more",
        SubmenuIcon: GiAutoRepair,
      },
      {
        title: "Barcode scanners",
        link: "barcode-scanners",
        SubmenuIcon: MdQrCodeScanner,
      },
      {
        title: "Counter-scale",
        link: "counter-scale",
        SubmenuIcon: FaWeightScale,
      },
      {
        title: "Consumables (POS)",
        link: "consumables",
        SubmenuIcon: BiCalculator,
      },
    ],
  },
  {
    id: "Jk1d4VolEFrfqEMXO4al",
    title: "STABILIZERS AND UPS",
    link: "stabilizers-and-UPS",
    Icon: GiBottledBolt,
    
    links: [
      {
        title: "UPS (Uninterruptible Power Supplies)",
        link: "ups",
        SubmenuIcon: GiGreenPower,
      },
      {
        title: "UPS batteries",
        link: "ups-batteries",
        SubmenuIcon: GiBatteries,
      },
      
      {
        title: "Voltage stabilizers",
        link: "voltage-stabilizers",
        SubmenuIcon: TbSettingsBolt,
      },
      {
        title: "UPS Other",
        link: "ups-other",
        SubmenuIcon: BsMotherboard,
        
      },
    ],
  },
  {
    id: "iwNmaKj6o3TGUYdPmtGq",
    title: "Firniture",
    Icon: PiOfficeChairBold,
    links: [
      {
        title: "Computer chairs",
        link: "computer-chairs",
        SubmenuIcon: PiOfficeChairBold,
      },
      {
        title: "Computer desks",
        link: "computer-desks",
        SubmenuIcon: GiDesk,
      },
    ],
  },
  {
    id: "qwGNmLGnn6UxC8HZnDAy",
    title: "HOUSEHOLD APPLIANCES",
    link: "household-appliances",
    Icon: BsFillHouseGearFill,
    
    links: [
      {
        title: "Home Attributes",
        link: "home-attributes",
        SubmenuIcon: BsFillHouseGearFill,
      },
      {
        title: "Libra",
        link: "libra",
        SubmenuIcon: IoScaleOutline,
      },
      {
        title: "Coffee machines",
        link: "coffee-machines",
        SubmenuIcon: MdOutlineCoffeeMaker,
      },
    ],
  },
  {
    id: "udU6gieLWy7gfNehSjIr",
    title: "others",
    link: "others",
    Icon: TbSquareAsteriskFilled,
    links: [
      {
        title: "Batteries and accumulators",
        link: "batteries-and-accumulators",
        SubmenuIcon: GiBatteries,
      },
      {
        title: "Electric scooters",
        link: "electric-scooters",
        SubmenuIcon: BsScooter,
      },
      {
        title: "Cables",
        link: "cables",
        SubmenuIcon: SiWire,
      },
      {
        title: "Adapters and converters",
        link: "adapters-and-converters",
        SubmenuIcon: GiUnplugged,
      },
      {
        title: "Tools",
        link: "tools",
        SubmenuIcon: FaUsb,
      },
    ],
  },
];

export default menuItems;
