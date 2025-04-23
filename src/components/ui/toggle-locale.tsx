
'use client';

import {useRouter} from 'next/navigation';
import {useLocale} from 'next-intl';
import {usePathname} from 'next/navigation';

export default function LocaleToggle() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();  


  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'sv' : 'en';


    const newPath = pathname.replace(`/${locale}`, '');


    router.push(`/${newLocale}${newPath}`);
  };

  return (
    <li className="hover:text-black actice:text-black" onClick={toggleLocale}>
      {locale === 'en' ? 'SV' : 'EN'}
    </li>
  );
}
