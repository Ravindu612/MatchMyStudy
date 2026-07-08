import { canadaUniversities } from "./canada";
import { australiaUniversities } from "./australia";
import { germanyUniversities } from "./germany";
import { finlandUniversities } from "./finland";
import { unitedKingdomUniversities } from "./unitedKingdom";
import { usaUniversities } from "./usa";
import { netherlandsUniversities } from "./netherlands";
import { swedenUniversities } from "./sweden";
import { newZealandUniversities } from "./newZealand";
import { irelandUniversities } from "./ireland";
import { switzerlandUniversities } from "./switzerland";
import { denmarkUniversities } from "./denmark";
import { norwayUniversities } from "./norway";
import { franceUniversities } from "./france";
import { italyUniversities } from "./italy";
import { austriaUniversities } from "./austria";
import { belgiumUniversities } from "./belgium";
import { singaporeUniversities } from "./singapore";
import { japanUniversities } from "./japan";
import { southKoreaUniversities } from "./southKorea";
import { chinaUniversities } from "./china";
import { hongKongUniversities } from "./hongKong";
import { malaysiaUniversities } from "./malaysia";
import { taiwanUniversities } from "./taiwan";
import { uaeUniversities } from "./uae";
import { indiaUniversities } from "./india";
import { thailandUniversities } from "./thailand";
import { saudiArabiaUniversities } from "./saudiArabia";
import { polandUniversities } from "./poland";
import { qatarUniversities } from "./qatar";
import { turkiyeUniversities } from "./turkiye";
import { spainUniversities } from "./spain";
import { portugalUniversities } from "./portugal";
import { czechRepublicUniversities } from "./czech-republic";
import { greeceUniversities } from "./greece";
import { hungaryUniversities } from "./hungary";
import { romaniaUniversities } from "./romania";
import { southAfricaUniversities } from "./south-africa";

export type CountryKey =
  | "canada"
  | "australia"
  | "germany"
  | "finland"
  | "unitedKingdom"
  | "usa"
  | "netherlands"
  | "sweden"
  | "newZealand"
  | "ireland"
  | "switzerland"
  | "denmark"
  | "norway"
  | "france"
  | "italy"
  | "austria"
  | "belgium"
  | "singapore"
  | "japan"
  | "southKorea"
  | "china"
  | "hongKong"
  | "malaysia"
  | "taiwan"
  | "uae"
  | "india"
  | "thailand"
  | "saudiArabia"
  | "poland"
  | "qatar"
  | "turkiye"
  | "spain"
  | "portugal"
  | "czech-republic"
  | "greece"
  | "hungary"
  | "romania"
  | "south-africa";


export type University = {
  name: string;
  slug: string;
  country: string;
  city: string;
  type: string;
  description: string;
  officialWebsite: string;

  founded?: string;
  popularFields?: string[];
  tuitionNote?: string;
  scholarshipNote?: string;
  admissionsWebsite?: string;

  // NEW FIELDS
  logo?: string;
  bannerImage?: string;

  ranking?: string;
  students?: string;
  internationalStudents?: string;

  descriptionShort?: string;
};

export const universities: Record<CountryKey, University[]> = {
  canada: canadaUniversities,
  australia: australiaUniversities,
  germany: germanyUniversities,
  finland: finlandUniversities,
  unitedKingdom: unitedKingdomUniversities,
  usa: usaUniversities,
  netherlands: netherlandsUniversities,
  sweden: swedenUniversities,
  newZealand: newZealandUniversities,
  ireland: irelandUniversities,
  switzerland: switzerlandUniversities,
  denmark: denmarkUniversities,
  norway: norwayUniversities,
  france: franceUniversities,
  italy: italyUniversities,
  austria: austriaUniversities,
  belgium: belgiumUniversities,
  singapore: singaporeUniversities,
  japan: japanUniversities,
  southKorea: southKoreaUniversities,
  china: chinaUniversities,
  hongKong: hongKongUniversities,
  malaysia: malaysiaUniversities,
  taiwan: taiwanUniversities,
  uae: uaeUniversities,
  india: indiaUniversities,
  thailand: thailandUniversities,
  saudiArabia: saudiArabiaUniversities,
  poland: polandUniversities,
  qatar: qatarUniversities,
  turkiye: turkiyeUniversities,
  spain: spainUniversities,
  portugal: portugalUniversities,
  "czech-republic": czechRepublicUniversities,
  greece: greeceUniversities,
  hungary: hungaryUniversities,
  romania: romaniaUniversities,
  "south-africa": southAfricaUniversities,
};