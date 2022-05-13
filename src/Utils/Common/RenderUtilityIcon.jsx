import { BiDumbbell } from 'react-icons/bi';
import { FaHotTub } from 'react-icons/fa';
import { MdOutlineKitchen, MdOutlineDry, MdPool, MdCable } from 'react-icons/md';
import { GiHeatHaze, GiCampfire, GiWifiRouter, GiElevator } from 'react-icons/gi';

export const renderUtilityIcon = (key) => {
  switch (key) {
    case 'gym': {
      return <BiDumbbell />;
    }

    case 'wifi': {
      return <GiWifiRouter />;
    }

    case 'hotTub': {
      return <FaHotTub />;
    }

    case 'kitchen': {
      return <MdOutlineKitchen />;
    }

    case 'dryer': {
      return <MdOutlineDry />;
    }

    case 'heating': {
      return <GiHeatHaze />;
    }

    case 'pool': {
      return <MdPool />;
    }

    case 'indoorFireplace': {
      return <GiCampfire />;
    }

    case 'elevator': {
      return <GiElevator />;
    }

    case 'cableTV': {
      return <MdCable />;
    }
    default:
      return null;
  }
};
