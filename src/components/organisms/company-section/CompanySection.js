import Image from 'next/image';

import styles from './styles.module.css';

import Acibadem from '../../../../public/images/page1/acibadem.webp';
import Akbank from '../../../../public/images/page1/akbank.webp';
import AkcanSa from '../../../../public/images/page1/akcansa.webp';
import Akkim from '../../../../public/images/page1/akkim.webp';
import Akkok from '../../../../public/images/page1/akkok.webp';
import AktifBank from '../../../../public/images/page1/aktif_bank.webp';
import Allianz from '../../../../public/images/page1/allianz.webp';
import AnadoluSigorta from '../../../../public/images/page1/anadolu_sigorta.webp';
import AnelGrup from '../../../../public/images/page1/anel_grup.webp';
import Arcelik from '../../../../public/images/page1/arc_elik_2.webp';
import Bosch from '../../../../public/images/page1/bosch_logo.webp';
import BezmiAlem from '../../../../public/images/page1/bezmi_alem_logo.webp';
import Ronesans from '../../../../public/images/page1/ronesans_holding.webp';
import TavAirport from '../../../../public/images/page1/tav_airports.webp';

export default function CompanySection() {
  return (
    <div className="container">
      <div className={styles.companyLogoContainer}>
        <Image src={Acibadem} width={100} height={100} alt="acıbadem" />
        <Image src={Akbank} width={100} height={100} alt="akbank" />
        <Image src={AkcanSa} width={100} height={100} alt="akcan_sa" />
        <Image src={Akkim} width={100} height={100} alt="akkim" />
        <Image src={Akkok} width={100} height={100} alt="akkok" />
        <Image src={AktifBank} width={100} height={100} alt="aktif bank" />
        <Image src={Allianz} width={100} height={100} alt="allianz" />
        <Image
          src={AnadoluSigorta}
          width={100}
          height={100}
          alt="anadolu sigorta"
        />
        <Image src={AnelGrup} width={100} height={100} alt="anel grup" />
        <Image src={Arcelik} width={100} height={100} alt="arcelik" />
        <Image src={Bosch} width={100} height={100} alt="bosch" />
        <Image src={BezmiAlem} width={100} height={100} alt="bezmi alem" />
        <Image src={Ronesans} width={100} height={100} alt="ronesans" />
        <Image src={TavAirport} width={100} height={100} alt="tav airport" />
      </div>
    </div>
  );
}
