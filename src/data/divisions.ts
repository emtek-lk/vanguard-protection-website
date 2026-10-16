import { l, type L } from '../lib/i18n';

export interface Item { title: L; text?: L }
export interface Section {
  id: string;
  kind: 'chips' | 'cards' | 'chain';
  eyebrow?: L;
  title: L;
  intro?: L[];
  highlight?: L; // short tagline shown prominently
  items: Item[];
}
export interface Division {
  slug: string;
  name: string; // brand name, never translated
  logo: string; // path under src/assets
  photo: string;
  accent: string; // main accent colour (from the division logo)
  accentDark: string;
  accentSoft: string;
  tagline: L; // what the division is
  cardText: L; // short text for cards
  heroTitle: L;
  heroText: L;
  aboutTitle: L;
  about: L[];
  services: Item[];
  servicesTitle: L;
  sections: Section[];
}

const t = (en: string, si: string, ta: string): Item => ({ title: l(en, si, ta) });
const ti = (en: string, si: string, ta: string, ten: string, tsi: string, tta: string): Item => ({
  title: l(en, si, ta),
  text: l(ten, tsi, tta),
});

export const divisions: Division[] = [
  // ───────────────────────── FSM ─────────────────────────
  {
    slug: 'fsm',
    name: 'Vanguard FSM',
    logo: 'logos/vanguard-fsm.png',
    photo: 'images/services/fsm-lobby-inspection-team.webp',
    accent: '#e8661a',
    accentDark: '#b94c0c',
    accentSoft: '#fdf0e6',
    tagline: l('Integrated Facility Services Management', 'ඒකාබද්ධ පහසුකම් සේවා කළමනාකරණය', 'ஒருங்கிணைந்த வசதி சேவைகள் மேலாண்மை'),
    cardText: l(
      'Our flagship division: engineering, planned maintenance and facility operations under one framework.',
      'අපගේ ප්‍රධාන අංශය: ඉංජිනේරු, සැලසුම්ගත නඩත්තු සහ පහසුකම් මෙහෙයුම් එක් රාමුවක් යටතේ.',
      'எங்கள் முதன்மைப் பிரிவு: பொறியியல், திட்டமிட்ட பராமரிப்பு மற்றும் வசதி இயக்கங்கள் ஒரே கட்டமைப்பின் கீழ்.'
    ),
    heroTitle: l('Integrated Facility Management. One Accountable Partner.', 'ඒකාබද්ධ පහසුකම් කළමනාකරණය. වගකිව යුතු එක් සහකරුවෙකි.', 'ஒருங்கிணைந்த வசதி மேலாண்மை. ஒரே பொறுப்பான கூட்டாளி.'),
    heroText: l(
      'Vanguard FSM brings engineering, maintenance, cleaning, safety and facility operations together under an integrated management framework.',
      'Vanguard FSM ඉංජිනේරු, නඩත්තු, පිරිසිදු කිරීම, ආරක්ෂාව සහ පහසුකම් මෙහෙයුම් ඒකාබද්ධ කළමනාකරණ රාමුවක් යටතට ගෙන එයි.',
      'Vanguard FSM பொறியியல், பராமரிப்பு, துப்புரவு, பாதுகாப்பு மற்றும் வசதி இயக்கங்களை ஒருங்கிணைந்த மேலாண்மைக் கட்டமைப்பின் கீழ் ஒன்றிணைக்கிறது.'
    ),
    aboutTitle: l('About Vanguard FSM', 'Vanguard FSM ගැන', 'Vanguard FSM பற்றி'),
    about: [
      l('Buildings are complex operational environments.', 'ගොඩනැගිලි යනු සංකීර්ණ මෙහෙයුම් පරිසර වේ.', 'கட்டிடங்கள் சிக்கலான செயல்பாட்டுச் சூழல்கள்.'),
      l(
        'Their performance depends on hundreds of interconnected systems: electrical infrastructure, pumps, generators, elevators, water systems, fire protection, cleaning, security, preventive maintenance and day-to-day operational management.',
        'ඒවායේ ක්‍රියාකාරිත්වය රඳා පවතින්නේ එකිනෙකට සම්බන්ධ පද්ධති සිය ගණනක් මතය: විදුලි යටිතල පහසුකම්, පොම්ප, ජනක යන්ත්‍ර, විදුලි සෝපාන, ජල පද්ධති, ගිනි ආරක්ෂණය, පිරිසිදු කිරීම, ආරක්ෂාව, වැළැක්වීමේ නඩත්තුව සහ එදිනෙදා මෙහෙයුම් කළමනාකරණය.',
        'அவற்றின் செயல்திறன் நூற்றுக்கணக்கான இணைந்த அமைப்புகளைச் சார்ந்துள்ளது: மின் உள்கட்டமைப்பு, பம்புகள், ஜெனரேட்டர்கள், லிஃப்ட்கள், நீர் அமைப்புகள், தீ பாதுகாப்பு, துப்புரவு, பாதுகாப்பு, தடுப்புப் பராமரிப்பு மற்றும் அன்றாட இயக்க மேலாண்மை.'
      ),
      l(
        'Vanguard Facility Services Management (Vanguard FSM) provides integrated facility management solutions designed to bring these requirements together.',
        'Vanguard Facility Services Management (Vanguard FSM) මෙම අවශ්‍යතා සියල්ල එක්කර ගැනීමට නිර්මාණය කළ ඒකාබද්ධ පහසුකම් කළමනාකරණ විසඳුම් සපයයි.',
        'Vanguard Facility Services Management (Vanguard FSM) இந்தத் தேவைகளை ஒன்றிணைக்க வடிவமைக்கப்பட்ட ஒருங்கிணைந்த வசதி மேலாண்மைத் தீர்வுகளை வழங்குகிறது.'
      ),
      l(
        'Our objective is not simply to maintain buildings. It is to help clients operate better-performing facilities.',
        'අපගේ අරමුණ ගොඩනැගිලි නඩත්තු කිරීම පමණක් නොවේ. සේවාදායකයින්ට වඩා හොඳින් ක්‍රියාත්මක වන පහසුකම් පවත්වාගෙන යාමට උපකාර කිරීමයි.',
        'எங்கள் நோக்கம் கட்டிடங்களைப் பராமரிப்பது மட்டுமல்ல; வாடிக்கையாளர்கள் சிறப்பாகச் செயல்படும் வசதிகளை இயக்க உதவுவதே.'
      ),
    ],
    servicesTitle: l('Engineering & Technical Services', 'ඉංජිනේරු සහ තාක්ෂණික සේවා', 'பொறியியல் & தொழில்நுட்ப சேவைகள்'),
    services: [
      t('Electrical maintenance', 'විදුලි නඩත්තුව', 'மின் பராமரிப்பு'),
      t('Mechanical maintenance', 'යාන්ත්‍රික නඩත්තුව', 'இயந்திரவியல் பராமரிப்பு'),
      t('Plumbing', 'ජල නල සේවා', 'குழாய் பணிகள்'),
      t('HVAC', 'HVAC (වායු සමීකරණ)', 'HVAC'),
      t('Pumps', 'පොම්ප', 'பம்புகள்'),
      t('Generators', 'ජනක යන්ත්‍ර', 'ஜெனரேட்டர்கள்'),
      t('Water systems', 'ජල පද්ධති', 'நீர் அமைப்புகள்'),
      t('STP systems', 'STP (අපජල පිරිපහදු) පද්ධති', 'STP அமைப்புகள்'),
      t('Building services', 'ගොඩනැගිලි සේවා', 'கட்டிட சேவைகள்'),
      t('Equipment maintenance', 'උපකරණ නඩත්තුව', 'உபகரண பராமரிப்பு'),
      t('Technical troubleshooting', 'තාක්ෂණික දෝෂ නිරාකරණය', 'தொழில்நுட்பச் சிக்கல் தீர்வு'),
      t('Minor repairs', 'සුළු අලුත්වැඩියා', 'சிறு பழுதுபார்ப்புகள்'),
      t('Asset inspections', 'වත්කම් පරීක්ෂා', 'சொத்து ஆய்வுகள்'),
    ],
    sections: [
      {
        id: 'ppm',
        kind: 'chips',
        eyebrow: l('Preventive & Planned Maintenance', 'වැළැක්වීමේ සහ සැලසුම්ගත නඩත්තුව', 'தடுப்பு & திட்டமிட்ட பராமரிப்பு'),
        title: l('Moving from Reactive Maintenance to Planned Asset Care.', 'ප්‍රතික්‍රියාශීලී නඩත්තුවෙන් සැලසුම්ගත වත්කම් රැකවරණය කරා.', 'எதிர்வினைப் பராமரிப்பிலிருந்து திட்டமிட்ட சொத்துப் பராமரிப்புக்கு.'),
        intro: [
          l('Unplanned failures can disrupt operations, increase costs and shorten asset life.', 'සැලසුම් නොකළ බිඳ වැටීම් මෙහෙයුම්වලට බාධා කළ හැකි අතර, පිරිවැය වැඩි කර වත්කම්වල ආයු කාලය අඩු කරයි.', 'திட்டமிடப்படாத செயலிழப்புகள் செயல்பாடுகளைத் தடுக்கலாம், செலவை அதிகரிக்கலாம், சொத்துகளின் ஆயுளைக் குறைக்கலாம்.'),
          l(
            'Vanguard FSM develops planned preventive maintenance programmes based on asset criticality, manufacturer recommendations, operational requirements and recognised maintenance practices.',
            'Vanguard FSM වත්කමේ තීරණාත්මකභාවය, නිෂ්පාදකයාගේ නිර්දේශ, මෙහෙයුම් අවශ්‍යතා සහ පිළිගත් නඩත්තු භාවිතයන් මත පදනම්ව සැලසුම්ගත වැළැක්වීමේ නඩත්තු වැඩසටහන් සකස් කරයි.',
            'Vanguard FSM சொத்தின் முக்கியத்துவம், உற்பத்தியாளர் பரிந்துரைகள், இயக்கத் தேவைகள் மற்றும் அங்கீகரிக்கப்பட்ட பராமரிப்பு நடைமுறைகளின் அடிப்படையில் திட்டமிட்ட தடுப்புப் பராமரிப்புத் திட்டங்களை உருவாக்குகிறது.'
          ),
        ],
        items: [
          t('Asset registers', 'වත්කම් ලේඛන', 'சொத்துப் பதிவேடுகள்'),
          t('Preventive maintenance schedules', 'වැළැක්වීමේ නඩත්තු කාලසටහන්', 'தடுப்புப் பராமரிப்பு அட்டவணைகள்'),
          t('Planned inspections', 'සැලසුම්ගත පරීක්ෂාවන්', 'திட்டமிட்ட ஆய்வுகள்'),
          t('Maintenance checklists', 'නඩත්තු පරීක්ෂණ ලැයිස්තු', 'பராமரிப்புச் சரிபார்ப்புப் பட்டியல்கள்'),
          t('Work orders', 'වැඩ නියෝග', 'பணி ஆணைகள்'),
          t('Breakdown reporting', 'බිඳ වැටීම් වාර්තාකරණය', 'பழுது அறிக்கையிடல்'),
          t('Spare-parts planning', 'අමතර කොටස් සැලසුම්කරණය', 'உதிரிபாகத் திட்டமிடல்'),
          t('Asset condition assessments', 'වත්කම් තත්ත්ව ඇගයීම්', 'சொத்து நிலை மதிப்பீடுகள்'),
          t('Maintenance history', 'නඩත්තු ඉතිහාසය', 'பராமரிப்பு வரலாறு'),
          t('Lifecycle planning', 'ජීවන චක්‍ර සැලසුම්කරණය', 'ஆயுள்சுழற்சித் திட்டமிடல்'),
        ],
      },
      {
        id: 'operations',
        kind: 'chips',
        eyebrow: l('Facility Operations', 'පහසුකම් මෙහෙයුම්', 'வசதி இயக்கங்கள்'),
        title: l('Daily operations, supervised and reported.', 'එදිනෙදා මෙහෙයුම්, අධීක්ෂණය කර වාර්තා කෙරේ.', 'அன்றாட இயக்கங்கள், மேற்பார்வையுடனும் அறிக்கையுடனும்.'),
        intro: [
          l(
            'We support the daily operational requirements of managed facilities through structured supervision, reporting and service coordination.',
            'ව්‍යුහගත අධීක්ෂණය, වාර්තාකරණය සහ සේවා සම්බන්ධීකරණය හරහා කළමනාකරණය කරන පහසුකම්වල එදිනෙදා මෙහෙයුම් අවශ්‍යතා අපි සපුරාලමු.',
            'கட்டமைக்கப்பட்ட மேற்பார்வை, அறிக்கையிடல் மற்றும் சேவை ஒருங்கிணைப்பு மூலம் நிர்வகிக்கப்படும் வசதிகளின் அன்றாடத் தேவைகளுக்கு நாங்கள் ஆதரவளிக்கிறோம்.'
          ),
        ],
        items: [
          t('Engineering', 'ඉංජිනේරු', 'பொறியியல்'),
          t('Cleaning', 'පිරිසිදු කිරීම', 'துப்புரவு'),
          t('Security', 'ආරක්ෂාව', 'பாதுகாப்பு'),
          t('Landscaping', 'භූමි අලංකරණය', 'நிலத்தோற்றம்'),
          t('Waste management', 'අපද්‍රව්‍ය කළමනාකරණය', 'கழிவு மேலாண்மை'),
          t('Safety', 'ආරක්ෂණය', 'பாதுகாப்பு நடைமுறைகள்'),
          t('Vendor coordination', 'සැපයුම්කරුවන් සම්බන්ධීකරණය', 'விற்பனையாளர் ஒருங்கிணைப்பு'),
          t('Compliance monitoring', 'අනුකූලතා අධීක්ෂණය', 'இணக்க கண்காணிப்பு'),
          t('Client reporting', 'සේවාදායක වාර්තාකරණය', 'வாடிக்கையாளர் அறிக்கையிடல்'),
        ],
      },
      {
        id: 'sfg20',
        kind: 'chain',
        eyebrow: l('SFG20 / ISO-Aligned Maintenance Approach', 'SFG20 / ISO ගැළපෙන නඩත්තු ප්‍රවේශය', 'SFG20 / ISO ஒத்த பராமரிப்பு அணுகுமுறை'),
        title: l('Planned Maintenance with Structure.', 'ව්‍යුහගත සැලසුම්ගත නඩත්තුව.', 'கட்டமைப்புடன் கூடிய திட்டமிட்ட பராமரிப்பு.'),
        intro: [
          l(
            'Vanguard FSM is committed to developing structured planned preventive maintenance programmes using recognised industry practices, including SFG20-style maintenance principles and relevant ISO-based management approaches, adapted to the requirements of Sri Lankan facilities.',
            'Vanguard FSM ශ්‍රී ලාංකික පහසුකම්වල අවශ්‍යතාවන්ට අනුවර්තනය කළ, SFG20 ආකාරයේ නඩත්තු මූලධර්ම සහ අදාළ ISO පදනම් කළමනාකරණ ප්‍රවේශයන් ඇතුළු පිළිගත් කර්මාන්ත භාවිතයන් යොදාගෙන ව්‍යුහගත සැලසුම්ගත වැළැක්වීමේ නඩත්තු වැඩසටහන් සකස් කිරීමට කැපවී සිටී.',
            'Vanguard FSM, இலங்கை வசதிகளின் தேவைகளுக்கு ஏற்ப மாற்றியமைக்கப்பட்ட SFG20 பாணி பராமரிப்புக் கொள்கைகள் மற்றும் தொடர்புடைய ISO அடிப்படையிலான மேலாண்மை அணுகுமுறைகள் உள்ளிட்ட அங்கீகரிக்கப்பட்ட தொழில் நடைமுறைகளைப் பயன்படுத்தி, கட்டமைக்கப்பட்ட திட்டமிட்ட தடுப்புப் பராமரிப்புத் திட்டங்களை உருவாக்க உறுதிபூண்டுள்ளது.'
          ),
          l('Our focus is on creating a traceable maintenance cycle:', 'අපගේ අවධානය සොයාගත හැකි නඩත්තු චක්‍රයක් නිර්මාණය කිරීම කෙරෙහිය:', 'கண்டறியக்கூடிய பராமரிப்பு சுழற்சியை உருவாக்குவதில் எங்கள் கவனம்:'),
        ],
        highlight: l(
          'This enables facility owners and managers to move from reactive maintenance towards controlled and measurable asset management.',
          'මෙය පහසුකම් හිමිකරුවන්ට සහ කළමනාකරුවන්ට ප්‍රතික්‍රියාශීලී නඩත්තුවෙන් පාලිත සහ මැනිය හැකි වත්කම් කළමනාකරණය කරා ගමන් කිරීමට ඉඩ සලසයි.',
          'இது வசதி உரிமையாளர்களும் மேலாளர்களும் எதிர்வினைப் பராமரிப்பிலிருந்து கட்டுப்படுத்தப்பட்ட, அளவிடக்கூடிய சொத்து மேலாண்மைக்கு மாற உதவுகிறது.'
        ),
        items: [
          t('Asset', 'වත්කම', 'சொத்து'),
          t('Requirement', 'අවශ්‍යතාව', 'தேவை'),
          t('Frequency', 'සංඛ්‍යාතය', 'இடைவெளி'),
          t('Task', 'කාර්යය', 'பணி'),
          t('Inspection', 'පරීක්ෂාව', 'ஆய்வு'),
          t('Record', 'වාර්තාව', 'பதிவு'),
          t('Review', 'සමාලෝචනය', 'மறுஆய்வு'),
          t('Improvement', 'වැඩිදියුණු කිරීම', 'மேம்பாடு'),
        ],
      },
    ],
  },

  // ───────────────────────── SECURITY ─────────────────────────
  {
    slug: 'security',
    name: 'Vanguard Security',
    logo: 'logos/vanguard-security.png',
    photo: 'images/services/security-patrol-vehicle-gatehouse.webp',
    accent: '#0f3d5c',
    accentDark: '#0a2a41',
    accentSoft: '#e8f0f6',
    tagline: l('Security & Consultancy Services', 'ආරක්ෂක සහ උපදේශන සේවා', 'பாதுகாப்பு & ஆலோசனை சேவைகள்'),
    cardText: l(
      'Manned guarding, access control, CCTV, alarms, VIP protection and risk-based security consultancy.',
      'මිනිස් ආරක්ෂාව, ප්‍රවේශ පාලනය, CCTV, සීනු පද්ධති, VIP ආරක්ෂාව සහ අවදානම් පදනම් කරගත් ආරක්ෂක උපදේශනය.',
      'ஆட்கள் மூலம் பாதுகாப்பு, அணுகல் கட்டுப்பாடு, CCTV, அலாரங்கள், VIP பாதுகாப்பு மற்றும் இடர் அடிப்படையிலான பாதுகாப்பு ஆலோசனை.'
    ),
    heroTitle: l('Security Designed Around Risk.', 'අවදානම වටා සැලසුම් කළ ආරක්ෂාව.', 'இடரைச் சுற்றி வடிவமைக்கப்பட்ட பாதுகாப்பு.'),
    heroText: l(
      'Professional security solutions combining trained personnel, operational discipline, technology and risk-based planning.',
      'පුහුණු කාර්ය මණ්ඩලය, මෙහෙයුම් විනය, තාක්ෂණය සහ අවදානම් පදනම් කරගත් සැලසුම්කරණය ඒකාබද්ධ කළ වෘත්තීය ආරක්ෂක විසඳුම්.',
      'பயிற்சி பெற்ற பணியாளர்கள், செயல்பாட்டு ஒழுக்கம், தொழில்நுட்பம் மற்றும் இடர் அடிப்படையிலான திட்டமிடலை இணைக்கும் தொழில்முறை பாதுகாப்புத் தீர்வுகள்.'
    ),
    aboutTitle: l('About the Division', 'අංශය ගැන', 'பிரிவு பற்றி'),
    about: [
      l(
        'Vanguard Protection Security & Consultancy Services provides professional security solutions for commercial, residential, industrial, corporate and event environments.',
        'Vanguard Protection Security & Consultancy Services වාණිජ, නේවාසික, කාර්මික, ආයතනික සහ උත්සව පරිසර සඳහා වෘත්තීය ආරක්ෂක විසඳුම් සපයයි.',
        'Vanguard Protection Security & Consultancy Services வணிக, குடியிருப்பு, தொழில், நிறுவன மற்றும் நிகழ்வுச் சூழல்களுக்குத் தொழில்முறை பாதுகாப்புத் தீர்வுகளை வழங்குகிறது.'
      ),
      l(
        'We understand that effective security is not simply about placing personnel at a gate. It requires understanding the environment, identifying vulnerabilities, establishing procedures, controlling access, maintaining situational awareness and responding appropriately when circumstances change.',
        'ඵලදායී ආරක්ෂාව යනු දොරටුවක කාර්ය මණ්ඩලයක් තැබීම පමණක් නොවන බව අපි තේරුම් ගනිමු. එයට පරිසරය අවබෝධ කරගැනීම, අවදානම් ස්ථාන හඳුනාගැනීම, ක්‍රියාපටිපාටි පිහිටුවීම, ප්‍රවේශය පාලනය කිරීම, තත්ත්වය පිළිබඳ සංවේදීතාව පවත්වාගැනීම සහ තත්ත්වයන් වෙනස් වන විට සුදුසු ලෙස ප්‍රතිචාර දැක්වීම අවශ්‍ය වේ.',
        'பயனுள்ள பாதுகாப்பு என்பது வாயிலில் பணியாளர்களை நிறுத்துவது மட்டுமல்ல என்பதை நாங்கள் புரிந்துகொள்கிறோம். சூழலைப் புரிந்துகொள்வது, பாதிப்புகளைக் கண்டறிவது, நடைமுறைகளை நிறுவுவது, அணுகலைக் கட்டுப்படுத்துவது, சூழ்நிலை விழிப்புணர்வைப் பேணுவது மற்றும் சூழ்நிலை மாறும்போது பொருத்தமாகப் பதிலளிப்பது அதற்குத் தேவை.'
      ),
      l(
        'Our security solutions are therefore developed around the specific operational requirements and risk profile of each assignment.',
        'එබැවින් අපගේ ආරක්ෂක විසඳුම් සකස් කරනු ලබන්නේ එක් එක් කාර්යයේ නිශ්චිත මෙහෙයුම් අවශ්‍යතා සහ අවදානම් පැතිකඩ වටාය.',
        'எனவே எங்கள் பாதுகாப்புத் தீர்வுகள் ஒவ்வொரு பணியின் குறிப்பிட்ட செயல்பாட்டுத் தேவைகள் மற்றும் இடர் சுயவிவரத்தைச் சுற்றி உருவாக்கப்படுகின்றன.'
      ),
    ],
    servicesTitle: l('Security Services', 'ආරක්ෂක සේවා', 'பாதுகாப்பு சேவைகள்'),
    services: [
      ti('Manned Security', 'මිනිස් ආරක්ෂාව', 'ஆட்கள் மூலம் பாதுகாப்பு', 'Professional security personnel deployed for the protection of people, property, facilities and operational environments.', 'පුද්ගලයින්, දේපළ, පහසුකම් සහ මෙහෙයුම් පරිසර ආරක්ෂා කිරීමට යොදවන වෘත්තීය ආරක්ෂක නිලධාරීන්.', 'மக்கள், சொத்து, வசதிகள் மற்றும் செயல்பாட்டுச் சூழல்களைப் பாதுகாக்க நியமிக்கப்படும் தொழில்முறை பாதுகாப்புப் பணியாளர்கள்.'),
      ti('Corporate Security', 'ආයතනික ආරක්ෂාව', 'நிறுவனப் பாதுகாப்பு', 'Security solutions designed for offices, corporate facilities and business environments.', 'කාර්යාල, ආයතනික පහසුකම් සහ ව්‍යාපාරික පරිසර සඳහා සැලසුම් කළ ආරක්ෂක විසඳුම්.', 'அலுவலகங்கள், நிறுவன வசதிகள் மற்றும் வணிகச் சூழல்களுக்காக வடிவமைக்கப்பட்ட பாதுகாப்புத் தீர்வுகள்.'),
      ti('Residential & Condominium Security', 'නේවාසික සහ කොන්ඩොමිනියම් ආරක්ෂාව', 'குடியிருப்பு & கொண்டோமினியம் பாதுகாப்பு', 'Structured security services for residential developments, condominiums and managed communities.', 'නේවාසික සංවර්ධන, කොන්ඩොමිනියම් සහ කළමනාකරණය කරන ප්‍රජාවන් සඳහා ව්‍යුහගත ආරක්ෂක සේවා.', 'குடியிருப்பு மேம்பாடுகள், கொண்டோமினியங்கள் மற்றும் நிர்வகிக்கப்படும் சமூகங்களுக்கான கட்டமைக்கப்பட்ட பாதுகாப்புச் சேவைகள்.'),
      ti('Industrial Security', 'කාර්මික ආරක්ෂාව', 'தொழிற்சாலைப் பாதுகாப்பு', 'Security solutions designed for factories, warehouses, industrial sites and operational facilities.', 'කර්මාන්තශාලා, ගබඩා, කාර්මික ස්ථාන සහ මෙහෙයුම් පහසුකම් සඳහා සැලසුම් කළ ආරක්ෂක විසඳුම්.', 'தொழிற்சாலைகள், கிடங்குகள், தொழில் தளங்கள் மற்றும் செயல்பாட்டு வசதிகளுக்காக வடிவமைக்கப்பட்ட பாதுகாப்புத் தீர்வுகள்.'),
      ti('Event Security', 'උත්සව ආරක්ෂාව', 'நிகழ்வுப் பாதுகாப்பு', 'Planned security coverage for corporate events, public events, private functions and high-attendance gatherings.', 'ආයතනික උත්සව, මහජන උත්සව, පෞද්ගලික අවස්ථා සහ විශාල පිරිස් සහභාගී වන රැස්වීම් සඳහා සැලසුම්ගත ආරක්ෂාව.', 'நிறுவன நிகழ்வுகள், பொது நிகழ்வுகள், தனியார் விழாக்கள் மற்றும் அதிக எண்ணிக்கையிலானோர் கூடும் நிகழ்வுகளுக்கான திட்டமிட்ட பாதுகாப்பு.'),
      ti('VIP / Executive Security', 'VIP / විධායක ආරක්ෂාව', 'VIP / நிர்வாகிப் பாதுகாப்பு', 'Professional protection arrangements for individuals requiring enhanced security support.', 'වැඩි ආරක්ෂක සහාය අවශ්‍ය පුද්ගලයින් සඳහා වෘත්තීය ආරක්ෂණ විධිවිධාන.', 'மேம்பட்ட பாதுகாப்பு ஆதரவு தேவைப்படும் நபர்களுக்கான தொழில்முறைப் பாதுகாப்பு ஏற்பாடுகள்.'),
      ti('Access Control', 'ප්‍රවේශ පාලනය', 'அணுகல் கட்டுப்பாடு', 'Controlled entry and exit procedures designed to protect people, assets and restricted areas.', 'පුද්ගලයින්, වත්කම් සහ සීමා කළ ප්‍රදේශ ආරක්ෂා කිරීමට සැලසුම් කළ පිවිසුම් සහ ඉවත්වීමේ පාලන ක්‍රියාපටිපාටි.', 'மக்கள், சொத்துகள் மற்றும் தடைசெய்யப்பட்ட பகுதிகளைப் பாதுகாக்க வடிவமைக்கப்பட்ட நுழைவு மற்றும் வெளியேறும் கட்டுப்பாட்டு நடைமுறைகள்.'),
      ti('CCTV Solutions', 'CCTV විසඳුම්', 'CCTV தீர்வுகள்', 'CCTV installation, monitoring and security system integration.', 'CCTV ස්ථාපනය, අධීක්ෂණය සහ ආරක්ෂක පද්ධති ඒකාබද්ධ කිරීම.', 'CCTV நிறுவல், கண்காணிப்பு மற்றும் பாதுகாப்பு அமைப்பு ஒருங்கிணைப்பு.'),
      ti('Alarm Systems', 'සීනු පද්ධති', 'அலாரம் அமைப்புகள்', 'Burglar alarm installation, monitoring and response solutions.', 'සොරකම් අනතුරු ඇඟවීමේ සීනු ස්ථාපනය, අධීක්ෂණය සහ ප්‍රතිචාර විසඳුම්.', 'திருட்டு எச்சரிக்கை அலாரம் நிறுவல், கண்காணிப்பு மற்றும் பதிலளிப்புத் தீர்வுகள்.'),
      ti('Security Consultancy', 'ආරක්ෂක උපදේශනය', 'பாதுகாப்பு ஆலோசனை', 'Professional assessment of existing security arrangements, vulnerabilities, procedures and improvement opportunities.', 'පවතින ආරක්ෂක විධිවිධාන, අවදානම් ස්ථාන, ක්‍රියාපටිපාටි සහ වැඩිදියුණු කිරීමේ අවස්ථා පිළිබඳ වෘත්තීය ඇගයීම.', 'தற்போதுள்ள பாதுகாப்பு ஏற்பாடுகள், பாதிப்புகள், நடைமுறைகள் மற்றும் மேம்பாட்டு வாய்ப்புகளின் தொழில்முறை மதிப்பீடு.'),
    ],
    sections: [
      {
        id: 'beyond-manpower',
        kind: 'chips',
        eyebrow: l('Security Beyond Manpower', 'මිනිස් බලයෙන් ඔබ්බට ආරක්ෂාව', 'ஆள்பலத்தைத் தாண்டிய பாதுகாப்பு'),
        title: l('We assess the complete security environment.', 'අපි සම්පූර්ණ ආරක්ෂක පරිසරය ඇගයීමට ලක් කරමු.', 'முழுமையான பாதுகாப்புச் சூழலை நாங்கள் மதிப்பிடுகிறோம்.'),
        intro: [
          l('Our consultancy approach looks beyond the number of security officers deployed. We assess the complete security environment, including:', 'අපගේ උපදේශන ප්‍රවේශය යොදවන ආරක්ෂක නිලධාරීන් සංඛ්‍යාවෙන් ඔබ්බට බලයි. අපි පහත දෑ ඇතුළු සම්පූර්ණ ආරක්ෂක පරිසරය ඇගයීමට ලක් කරමු:', 'எங்கள் ஆலோசனை அணுகுமுறை நியமிக்கப்பட்ட பாதுகாவலர்களின் எண்ணிக்கையைத் தாண்டிப் பார்க்கிறது. பின்வருவன உட்பட முழுமையான பாதுகாப்புச் சூழலை நாங்கள் மதிப்பிடுகிறோம்:'),
        ],
        highlight: l(
          'The objective is to create a security environment where people, processes and technology work together.',
          'පුද්ගලයින්, ක්‍රියාවලි සහ තාක්ෂණය එකට ක්‍රියා කරන ආරක්ෂක පරිසරයක් නිර්මාණය කිරීම අරමුණයි.',
          'மக்கள், செயல்முறைகள் மற்றும் தொழில்நுட்பம் ஒன்றிணைந்து செயல்படும் பாதுகாப்புச் சூழலை உருவாக்குவதே நோக்கம்.'
        ),
        items: [
          t('Physical security', 'භෞතික ආරක්ෂාව', 'உடல்சார் பாதுகாப்பு'),
          t('Access control', 'ප්‍රවේශ පාලනය', 'அணுகல் கட்டுப்பாடு'),
          t('CCTV coverage', 'CCTV ආවරණය', 'CCTV கண்காணிப்பு எல்லை'),
          t('Alarm systems', 'සීනු පද්ධති', 'அலாரம் அமைப்புகள்'),
          t('Guard deployment', 'ආරක්ෂක නිලධාරී යෙදවීම', 'பாதுகாவலர் நியமனம்'),
          t('Security procedures', 'ආරක්ෂක ක්‍රියාපටිපාටි', 'பாதுகாப்பு நடைமுறைகள்'),
          t('Emergency response', 'හදිසි ප්‍රතිචාර', 'அவசரகாலப் பதிலளிப்பு'),
          t('Visitor management', 'අමුත්තන් කළමනාකරණය', 'பார்வையாளர் மேலாண்மை'),
          t('Key control', 'යතුරු පාලනය', 'சாவிக் கட்டுப்பாடு'),
          t('Incident reporting', 'සිදුවීම් වාර්තාකරණය', 'சம்பவ அறிக்கையிடல்'),
          t('Vulnerability areas', 'අවදානම් ස්ථාන', 'பாதிப்புப் பகுதிகள்'),
          t('Operational risks', 'මෙහෙයුම් අවදානම්', 'செயல்பாட்டு இடர்கள்'),
        ],
      },
      {
        id: 'vpg',
        kind: 'chips',
        eyebrow: l('Vanguard Protective Group (VPG)', 'Vanguard Protective Group (VPG)', 'Vanguard Protective Group (VPG)'),
        title: l('Specialized Protection. Heightened Awareness. Professional Response.', 'විශේෂිත ආරක්ෂාව. ඉහළ සංවේදීතාව. වෘත්තීය ප්‍රතිචාරය.', 'சிறப்புப் பாதுகாப்பு. உயர் விழிப்புணர்வு. தொழில்முறைப் பதிலளிப்பு.'),
        intro: [
          l(
            'VPG is the specialist protection division of Vanguard Protection Security & Consultancy Services, dedicated to assignments requiring enhanced operational awareness and specialized security capability.',
            'VPG යනු Vanguard Protection Security & Consultancy Services හි විශේෂිත ආරක්ෂණ අංශයයි; ඉහළ මෙහෙයුම් සංවේදීතාවක් සහ විශේෂිත ආරක්ෂක හැකියාවක් අවශ්‍ය කාර්යයන් සඳහා කැපවී ඇත.',
            'VPG என்பது Vanguard Protection Security & Consultancy Services இன் சிறப்புப் பாதுகாப்புப் பிரிவாகும்; மேம்பட்ட செயல்பாட்டு விழிப்புணர்வும் சிறப்புப் பாதுகாப்புத் திறனும் தேவைப்படும் பணிகளுக்கு அர்ப்பணிக்கப்பட்டது.'
          ),
          l(
            'Certain environments require more than conventional security deployment. VPG is structured for assignments where personnel require enhanced training, situational awareness, professional judgement and the ability to respond appropriately to changing circumstances.',
            'සමහර පරිසරවලට සාම්ප්‍රදායික ආරක්ෂක යෙදවීමට වඩා අවශ්‍ය වේ. වැඩි පුහුණුවක්, තත්ත්ව සංවේදීතාවක්, වෘත්තීය විනිශ්චයක් සහ වෙනස් වන තත්ත්වයන්ට සුදුසු ලෙස ප්‍රතිචාර දැක්වීමේ හැකියාවක් අවශ්‍ය කාර්යයන් සඳහා VPG සකස් කර ඇත.',
            'சில சூழல்களுக்குப் பாரம்பரியப் பாதுகாப்பு நியமனத்தை விட அதிகம் தேவை. மேம்பட்ட பயிற்சி, சூழ்நிலை விழிப்புணர்வு, தொழில்முறை முடிவெடுக்கும் திறன் மற்றும் மாறும் சூழ்நிலைகளுக்குப் பொருத்தமாகப் பதிலளிக்கும் ஆற்றல் தேவைப்படும் பணிகளுக்காக VPG அமைக்கப்பட்டுள்ளது.'
          ),
        ],
        items: [
          t('Close protection assignments', 'සමීප ආරක්ෂණ කාර්යයන්', 'நெருக்கமான பாதுகாப்புப் பணிகள்'),
          t('VIP/CIP security', 'VIP/CIP ආරක්ෂාව', 'VIP/CIP பாதுகாப்பு'),
          t('Executive protection', 'විධායක ආරක්ෂණය', 'நிர்வாகிப் பாதுகாப்பு'),
          t('High-profile events', 'ඉහළ පෙළේ උත්සව', 'உயர்நிலை நிகழ்வுகள்'),
          t('Special events', 'විශේෂ උත්සව', 'சிறப்பு நிகழ்வுகள்'),
          t('Event security management', 'උත්සව ආරක්ෂක කළමනාකරණය', 'நிகழ்வுப் பாதுகாப்பு மேலாண்மை'),
          t('Sensitive corporate assignments', 'සංවේදී ආයතනික කාර්යයන්', 'உணர்திறன் மிக்க நிறுவனப் பணிகள்'),
          t('High-risk operational environments', 'ඉහළ අවදානම් මෙහෙයුම් පරිසර', 'அதிக இடர் கொண்ட செயல்பாட்டுச் சூழல்கள்'),
          t('Special security requirements', 'විශේෂ ආරක්ෂක අවශ්‍යතා', 'சிறப்புப் பாதுகாப்புத் தேவைகள்'),
        ],
      },
      {
        id: 'vpg-principles',
        kind: 'cards',
        eyebrow: l('VPG Operating Principle', 'VPG මෙහෙයුම් මූලධර්මය', 'VPG இயக்கக் கொள்கை'),
        title: l('Observe. Assess. Anticipate. Respond.', 'නිරීක්ෂණය. ඇගයීම. පූර්වානුමානය. ප්‍රතිචාරය.', 'கவனி. மதிப்பிடு. முன்கணி. பதிலளி.'),
        items: [
          ti('Situational Awareness', 'තත්ත්ව සංවේදීතාව', 'சூழ்நிலை விழிப்புணர்வு', 'Understanding the environment and recognising changing circumstances.', 'පරිසරය අවබෝධ කරගැනීම සහ වෙනස් වන තත්ත්වයන් හඳුනාගැනීම.', 'சூழலைப் புரிந்துகொண்டு மாறும் சூழ்நிலைகளை அடையாளம் காணுதல்.'),
          ti('Preventive Security', 'වැළැක්වීමේ ආරක්ෂාව', 'தடுப்புப் பாதுகாப்பு', 'Identifying potential issues before they develop into incidents.', 'ගැටලු සිදුවීම් බවට පත්වීමට පෙර හඳුනාගැනීම.', 'சாத்தியமான சிக்கல்கள் சம்பவங்களாக மாறுவதற்கு முன் அடையாளம் காணுதல்.'),
          ti('Professional Conduct', 'වෘත්තීය හැසිරීම', 'தொழில்முறை நடத்தை', 'Maintaining discipline, discretion and appropriate interaction with clients and the public.', 'විනය, රහස්‍යභාවය සහ සේවාදායකයින් හා මහජනතාව සමඟ සුදුසු අන්තර්ක්‍රියාව පවත්වාගැනීම.', 'ஒழுக்கம், விவேகம் மற்றும் வாடிக்கையாளர்கள், பொதுமக்களுடன் பொருத்தமான தொடர்பைப் பேணுதல்.'),
          ti('Team Coordination', 'කණ්ඩායම් සම්බන්ධීකරණය', 'குழு ஒருங்கிணைப்பு', 'Working as a coordinated security team rather than as isolated individuals.', 'හුදකලා පුද්ගලයින් ලෙස නොව සම්බන්ධීකෘත ආරක්ෂක කණ්ඩායමක් ලෙස ක්‍රියා කිරීම.', 'தனித்தனி நபர்களாக அல்லாமல் ஒருங்கிணைந்த பாதுகாப்புக் குழுவாகச் செயல்படுதல்.'),
          ti('Incident Response', 'සිදුවීම් ප්‍රතිචාරය', 'சம்பவப் பதிலளிப்பு', 'Responding calmly and according to established procedures.', 'සන්සුන්ව සහ ස්ථාපිත ක්‍රියාපටිපාටි අනුව ප්‍රතිචාර දැක්වීම.', 'அமைதியாகவும் நிறுவப்பட்ட நடைமுறைகளின்படியும் பதிலளித்தல்.'),
        ],
      },
    ],
  },

  // ───────────────────────── TOTAL SAFETY ─────────────────────────
  {
    slug: 'total-safety',
    name: 'Vanguard Total Safety',
    logo: 'logos/vanguard-total-safety.png',
    photo: 'images/services/safety-fire-drill-demo.webp',
    accent: '#d62a1a',
    accentDark: '#a81c10',
    accentSoft: '#fdeceb',
    tagline: l('Fire, Life Safety & Risk Management', 'ගිනි, ජීවිත ආරක්ෂණ සහ අවදානම් කළමනාකරණය', 'தீ, உயிர் பாதுகாப்பு & இடர் மேலாண்மை'),
    cardText: l(
      'Fire protection, safety training, audits and emergency preparedness for safer workplaces.',
      'ආරක්ෂිත වැඩබිම් සඳහා ගිනි ආරක්ෂණය, ආරක්ෂණ පුහුණුව, විගණන සහ හදිසි සූදානම.',
      'பாதுகாப்பான பணியிடங்களுக்கான தீ பாதுகாப்பு, பாதுகாப்புப் பயிற்சி, தணிக்கைகள் மற்றும் அவசரகாலத் தயார்நிலை.'
    ),
    heroTitle: l('Safety Is Not an Add-On. It Is Part of the Operation.', 'ආරක්ෂණය අමතර දෙයක් නොවේ. එය මෙහෙයුමේම කොටසකි.', 'பாதுகாப்பு கூடுதல் அம்சம் அல்ல. அது செயல்பாட்டின் ஒரு பகுதி.'),
    heroText: l(
      'Fire protection, safety training, emergency preparedness and risk management solutions for safer workplaces and facilities.',
      'ආරක්ෂිත වැඩබිම් සහ පහසුකම් සඳහා ගිනි ආරක්ෂණ, ආරක්ෂණ පුහුණු, හදිසි සූදානම සහ අවදානම් කළමනාකරණ විසඳුම්.',
      'பாதுகாப்பான பணியிடங்கள் மற்றும் வசதிகளுக்கான தீ பாதுகாப்பு, பாதுகாப்புப் பயிற்சி, அவசரகாலத் தயார்நிலை மற்றும் இடர் மேலாண்மைத் தீர்வுகள்.'
    ),
    aboutTitle: l('About Total Safety', 'Total Safety ගැන', 'Total Safety பற்றி'),
    about: [
      l('Effective safety management begins before an emergency occurs.', 'ඵලදායී ආරක්ෂණ කළමනාකරණය ආරම්භ වන්නේ හදිසි අවස්ථාවක් සිදුවීමට පෙරය.', 'பயனுள்ள பாதுகாப்பு மேலாண்மை அவசரநிலை ஏற்படுவதற்கு முன்பே தொடங்குகிறது.'),
      l(
        'Vanguard Total Safety helps organisations strengthen their preparedness through training, inspections, risk assessments, fire protection services and safety awareness programmes.',
        'Vanguard Total Safety පුහුණුව, පරීක්ෂාවන්, අවදානම් ඇගයීම්, ගිනි ආරක්ෂණ සේවා සහ ආරක්ෂණ දැනුවත් කිරීමේ වැඩසටහන් හරහා ආයතනවලට ඔවුන්ගේ සූදානම ශක්තිමත් කරගැනීමට උපකාර කරයි.',
        'Vanguard Total Safety பயிற்சி, ஆய்வுகள், இடர் மதிப்பீடுகள், தீ பாதுகாப்புச் சேவைகள் மற்றும் பாதுகாப்பு விழிப்புணர்வுத் திட்டங்கள் மூலம் நிறுவனங்கள் தங்கள் தயார்நிலையை வலுப்படுத்த உதவுகிறது.'
      ),
    ],
    servicesTitle: l('Services', 'සේවා', 'சேவைகள்'),
    services: [
      ti('Fire Extinguisher Services', 'ගිනි නිවන උපකරණ සේවා', 'தீயணைப்பான் சேவைகள்', 'Supply, inspection, servicing and refilling of fire extinguishers.', 'ගිනි නිවන උපකරණ සැපයීම, පරීක්ෂා කිරීම, සේවා කිරීම සහ නැවත පිරවීම.', 'தீயணைப்பான்களின் விநியோகம், ஆய்வு, சேவை மற்றும் மறுநிரப்பல்.'),
      ti('Fire Safety Training', 'ගිනි ආරක්ෂණ පුහුණුව', 'தீ பாதுகாப்புப் பயிற்சி', 'Practical fire safety awareness and emergency response training.', 'ප්‍රායෝගික ගිනි ආරක්ෂණ දැනුවත් කිරීම සහ හදිසි ප්‍රතිචාර පුහුණුව.', 'நடைமுறை தீ பாதுகாப்பு விழிப்புணர்வு மற்றும் அவசரகாலப் பதிலளிப்புப் பயிற்சி.'),
      ti('First Aid Training', 'ප්‍රථමාධාර පුහුණුව', 'முதலுதவிப் பயிற்சி', 'Training programmes designed to improve workplace emergency preparedness.', 'වැඩබිම් හදිසි සූදානම වැඩිදියුණු කිරීමට සැලසුම් කළ පුහුණු වැඩසටහන්.', 'பணியிட அவசரகாலத் தயார்நிலையை மேம்படுத்த வடிவமைக்கப்பட்ட பயிற்சித் திட்டங்கள்.'),
      ti('Fire & Safety Audits', 'ගිනි සහ ආරක්ෂණ විගණන', 'தீ & பாதுகாப்புத் தணிக்கைகள்', 'Assessment of existing safety arrangements and identification of improvement areas.', 'පවතින ආරක්ෂණ විධිවිධාන ඇගයීම සහ වැඩිදියුණු කළ යුතු ක්ෂේත්‍ර හඳුනාගැනීම.', 'தற்போதுள்ள பாதுகாப்பு ஏற்பாடுகளை மதிப்பிட்டு மேம்பாட்டுப் பகுதிகளைக் கண்டறிதல்.'),
      ti('Risk Assessments', 'අවදානම් ඇගයීම්', 'இடர் மதிப்பீடுகள்', 'Structured identification and evaluation of workplace and facility risks.', 'වැඩබිම් සහ පහසුකම් අවදානම් ව්‍යුහගත ලෙස හඳුනාගැනීම සහ ඇගයීම.', 'பணியிட மற்றும் வசதி இடர்களைக் கட்டமைக்கப்பட்ட முறையில் அடையாளம் கண்டு மதிப்பிடுதல்.'),
      ti('Emergency Preparedness', 'හදිසි සූදානම', 'அவசரகாலத் தயார்நிலை', 'Support for emergency procedures, response planning and awareness.', 'හදිසි ක්‍රියාපටිපාටි, ප්‍රතිචාර සැලසුම්කරණය සහ දැනුවත්භාවය සඳහා සහාය.', 'அவசரகால நடைமுறைகள், பதிலளிப்புத் திட்டமிடல் மற்றும் விழிப்புணர்வுக்கான ஆதரவு.'),
      ti('Safety Consultancy', 'ආරක්ෂණ උපදේශනය', 'பாதுகாப்பு ஆலோசனை', 'Practical safety guidance designed around the operational environment.', 'මෙහෙයුම් පරිසරය වටා සැලසුම් කළ ප්‍රායෝගික ආරක්ෂණ මග පෙන්වීම.', 'செயல்பாட்டுச் சூழலைச் சுற்றி வடிவமைக்கப்பட்ட நடைமுறைப் பாதுகாப்பு வழிகாட்டுதல்.'),
    ],
    sections: [],
  },

  // ───────────────────────── CLEAN & CARE ─────────────────────────
  {
    slug: 'clean-and-care',
    name: 'Vanguard Clean & Care',
    logo: 'logos/vanguard-clean-and-care.png',
    photo: 'images/services/cleaning-lobby-floor-care.webp',
    accent: '#1878c0',
    accentDark: '#0f5a94',
    accentSoft: '#e7f2fa',
    tagline: l('Cleaning & Housekeeping', 'පිරිසිදු කිරීම සහ ගෘහ සේවා', 'துப்புரவு & வீட்டுப் பராமரிப்பு'),
    cardText: l(
      'Structured cleaning, housekeeping, landscaping and steward services for workplaces and residences.',
      'වැඩබිම් සහ නේවාසික ස්ථාන සඳහා ව්‍යුහගත පිරිසිදු කිරීම, ගෘහ සේවා, භූමි අලංකරණ සහ සේවක සේවා.',
      'பணியிடங்கள் மற்றும் குடியிருப்புகளுக்கான கட்டமைக்கப்பட்ட துப்புரவு, வீட்டுப் பராமரிப்பு, நிலத்தோற்றம் மற்றும் பணிப்பாளர் சேவைகள்.'
    ),
    heroTitle: l('Clean Spaces. Better Environments. Professional Standards.', 'පිරිසිදු අවකාශ. වඩා හොඳ පරිසර. වෘත්තීය ප්‍රමිතීන්.', 'தூய்மையான இடங்கள். சிறந்த சூழல்கள். தொழில்முறைத் தரங்கள்.'),
    heroText: l(
      'Professional cleaning and housekeeping solutions for workplaces, residences, commercial properties and managed facilities.',
      'වැඩබිම්, නිවාස, වාණිජ දේපළ සහ කළමනාකරණය කරන පහසුකම් සඳහා වෘත්තීය පිරිසිදු කිරීමේ සහ ගෘහ සේවා විසඳුම්.',
      'பணியிடங்கள், குடியிருப்புகள், வணிகச் சொத்துகள் மற்றும் நிர்வகிக்கப்படும் வசதிகளுக்கான தொழில்முறைத் துப்புரவு மற்றும் வீட்டுப் பராமரிப்புத் தீர்வுகள்.'
    ),
    aboutTitle: l('About Clean & Care', 'Clean & Care ගැන', 'Clean & Care பற்றி'),
    about: [
      l('Cleanliness influences how people experience a property.', 'පිරිසිදුකම මගින් මිනිසුන් දේපළක් අත්විඳින ආකාරය බලපායි.', 'ஒரு சொத்தை மக்கள் அனுபவிக்கும் விதத்தில் தூய்மை தாக்கம் செலுத்துகிறது.'),
      l(
        'It affects hygiene, appearance, employee wellbeing, customer perception and the overall operating environment.',
        'එය සනීපාරක්ෂාවට, පෙනුමට, සේවක යහපැවැත්මට, පාරිභෝගික ආකල්පයට සහ සමස්ත මෙහෙයුම් පරිසරයට බලපායි.',
        'இது சுகாதாரம், தோற்றம், ஊழியர் நலன், வாடிக்கையாளர் கருத்து மற்றும் ஒட்டுமொத்த இயக்கச் சூழலைப் பாதிக்கிறது.'
      ),
      l(
        'Vanguard Clean & Care provides structured cleaning and housekeeping services designed around the nature, occupancy and operational requirements of each facility.',
        'Vanguard Clean & Care එක් එක් පහසුකමේ ස්වභාවය, පදිංචිකරුවන් සහ මෙහෙයුම් අවශ්‍යතා වටා සැලසුම් කළ ව්‍යුහගත පිරිසිදු කිරීමේ සහ ගෘහ සේවා සපයයි.',
        'Vanguard Clean & Care ஒவ்வொரு வசதியின் தன்மை, பயன்பாட்டாளர்கள் மற்றும் இயக்கத் தேவைகளைச் சுற்றி வடிவமைக்கப்பட்ட கட்டமைக்கப்பட்ட துப்புரவு மற்றும் வீட்டுப் பராமரிப்புச் சேவைகளை வழங்குகிறது.'
      ),
    ],
    servicesTitle: l('Services', 'සේවා', 'சேவைகள்'),
    services: [
      ti('Corporate Cleaning', 'ආයතනික පිරිසිදු කිරීම', 'நிறுவனத் துப்புரவு', 'Professional cleaning services for offices and corporate environments.', 'කාර්යාල සහ ආයතනික පරිසර සඳහා වෘත්තීය පිරිසිදු කිරීමේ සේවා.', 'அலுவலகங்கள் மற்றும் நிறுவனச் சூழல்களுக்கான தொழில்முறைத் துப்புரவுச் சேவைகள்.'),
      ti('Commercial Cleaning', 'වාණිජ පිරිසිදු කිරීම', 'வணிகத் துப்புரவு', 'Cleaning programmes for commercial properties and business premises.', 'වාණිජ දේපළ සහ ව්‍යාපාරික පරිශ්‍ර සඳහා පිරිසිදු කිරීමේ වැඩසටහන්.', 'வணிகச் சொத்துகள் மற்றும் வணிக வளாகங்களுக்கான துப்புரவுத் திட்டங்கள்.'),
      ti('Condominium & Residential Cleaning', 'කොන්ඩොමිනියම් සහ නේවාසික පිරිසිදු කිරීම', 'கொண்டோமினியம் & குடியிருப்புத் துப்புரவு', 'Common-area cleaning and housekeeping for residential developments.', 'නේවාසික සංවර්ධන සඳහා පොදු ප්‍රදේශ පිරිසිදු කිරීම සහ ගෘහ සේවා.', 'குடியிருப்பு மேம்பாடுகளுக்கான பொதுப் பகுதித் துப்புரவு மற்றும் வீட்டுப் பராமரிப்பு.'),
      ti('Deep Cleaning', 'ගැඹුරු පිරිසිදු කිරීම', 'ஆழமான துப்புரவு', 'Detailed cleaning for areas requiring intensive cleaning intervention.', 'දැඩි පිරිසිදු කිරීමක් අවශ්‍ය ප්‍රදේශ සඳහා සවිස්තරාත්මක පිරිසිදු කිරීම.', 'தீவிரத் துப்புரவு தேவைப்படும் பகுதிகளுக்கான விரிவான துப்புரவு.'),
      ti('Post-Construction Cleaning', 'ඉදිකිරීමෙන් පසු පිරිසිදු කිරීම', 'கட்டுமானத்திற்குப் பிந்தைய துப்புரவு', 'Cleaning and preparation of newly constructed or renovated spaces.', 'අලුතින් ඉදිකළ හෝ අළුත්වැඩියා කළ ස්ථාන පිරිසිදු කිරීම සහ සූදානම් කිරීම.', 'புதிதாகக் கட்டப்பட்ட அல்லது புதுப்பிக்கப்பட்ட இடங்களைத் தூய்மைப்படுத்தித் தயார்செய்தல்.'),
      ti('Washroom Hygiene', 'වැසිකිළි සනීපාරක්ෂාව', 'கழிவறைச் சுகாதாரம்', 'Routine cleaning, replenishment and hygiene management.', 'නිතිපතා පිරිසිදු කිරීම, පිරවීම සහ සනීපාරක්ෂක කළමනාකරණය.', 'வழக்கமான துப்புரவு, பொருட்கள் நிரப்பல் மற்றும் சுகாதார மேலாண்மை.'),
      ti('Disinfection Services', 'විෂබීජහරණ සේවා', 'கிருமிநீக்கச் சேவைகள்', 'Disinfection services for corporate or residential spaces, provided on your requirement.', 'ඔබේ අවශ්‍යතාව අනුව ආයතනික හෝ නේවාසික ස්ථාන සඳහා විෂබීජහරණ සේවා.', 'உங்கள் தேவைக்கேற்ப நிறுவன அல்லது குடியிருப்பு இடங்களுக்கான கிருமிநீக்கச் சேவைகள்.'),
      ti('Housekeeping Services', 'ගෘහ සේවා', 'வீட்டுப் பராமரிப்புச் சேவைகள்', 'Dedicated housekeeping personnel for facilities requiring continuous operational support.', 'අඛණ්ඩ මෙහෙයුම් සහාය අවශ්‍ය පහසුකම් සඳහා කැපවූ ගෘහ සේවා කාර්ය මණ්ඩලය.', 'தொடர்ச்சியான இயக்க ஆதரவு தேவைப்படும் வசதிகளுக்கான அர்ப்பணிப்புள்ள வீட்டுப் பராமரிப்புப் பணியாளர்கள்.'),
      ti('Specialized Cleaning', 'විශේෂිත පිරිසිදු කිරීම', 'சிறப்புத் துப்புரவு', 'Task-specific cleaning solutions according to site requirements.', 'ස්ථානයේ අවශ්‍යතා අනුව කාර්ය-විශේෂිත පිරිසිදු කිරීමේ විසඳුම්.', 'தளத் தேவைகளுக்கேற்ப பணி சார்ந்த துப்புரவுத் தீர்வுகள்.'),
      ti('Landscaping & Gardening Services', 'භූමි අලංකරණ සහ උද්‍යාන සේවා', 'நிலத்தோற்றம் & தோட்டப் பராமரிப்புச் சேவைகள்', 'Professional landscaping and gardening services under Vanguard Clean & Care.', 'Vanguard Clean & Care යටතේ වෘත්තීය භූමි අලංකරණ සහ උද්‍යාන සේවා.', 'Vanguard Clean & Care இன் கீழ் தொழில்முறை நிலத்தோற்றம் மற்றும் தோட்டப் பராமரிப்புச் சேவைகள்.'),
      ti('Steward Services', 'සේවක (ස්ටුවඩ්) සේවා', 'பணிப்பாளர் (ஸ்டூவர்ட்) சேவைகள்', 'Well-trained and disciplined stewards to cover your special occasions.', 'ඔබේ විශේෂ අවස්ථා සඳහා හොඳින් පුහුණු, විනයගත සේවකයින්.', 'உங்கள் சிறப்பு நிகழ்வுகளுக்கு நன்கு பயிற்சி பெற்ற, ஒழுக்கமான பணிப்பாளர்கள்.'),
    ],
    sections: [],
  },
];

export const getDivision = (slug: string) => divisions.find((d) => d.slug === slug)!;
