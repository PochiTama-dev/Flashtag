import { createContext, useState, useEffect, ReactNode } from 'react';
import { getQrTypes } from '../../mockdata/qrTypeApiFetch';
import { getQrTags } from '../../mockdata/qrTagApiFetch';

type QRTag = {
  id: string;
  name: string;
};

type AppContextType = {
  qrTypes: { id: string; name: string }[];  
  qrTags: QRTag[];
};

const AppContext = createContext<AppContextType>({ qrTypes: [], qrTags: [] });

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [qrTypes, setQrTypes] = useState<{ id: string; name: string }[]>([]);
  const [qrTags, setQrTags] = useState<QRTag[]>([]);

  useEffect(() => {
    const fetchQrTypes = async () => {
      const result = await getQrTypes();
      setQrTypes(result);
    };

    const fetchQrTags = async () => {
      const result = await getQrTags();
      setQrTags(result);
    };

    fetchQrTypes();
    fetchQrTags();
  }, []);

  return (
    <AppContext.Provider value={{ qrTypes, qrTags }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };