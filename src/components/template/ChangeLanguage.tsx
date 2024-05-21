import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import brazilFlag from '../icons/brazilFlagIcon.svg';
import usaFlag from '../icons/usaFlagIcon.svg';

export const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    console.log('funcao');
    return await i18n.changeLanguage(lng);
  };

  console.log({ t });
  console.log({ i18n });

  return (
    <div className={`flex justify-center items-center px-4`}>
      <div
        className={`pr-2 cursor-pointer`}
        onClick={() => changeLanguage('pt-BR')}
      >
        <Image src={brazilFlag} alt={'Bandeira Nrasi'} width={40} height={40} />
      </div>
      <div
        className={` cursor-pointer`}
        onClick={() => changeLanguage('en-US')}
      >
        <Image src={usaFlag} alt={'Bandeira Nrasi'} width={40} height={40} />
      </div>
    </div>
  );
};
