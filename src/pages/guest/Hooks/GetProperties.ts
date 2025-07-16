import { useEffect,useState } from "react";
import axios from 'axios';


type Property ={
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  tags:string[];
}

export function useProperties(){
    
  const [Properties, setProperties] = useState<Property[] | null>(null);
  const [Loading,setLoading] = useState<boolean>(true);
  const[Error,setError] = useState<string | null>(null);

   const token = localStorage.getItem('token');

  const url  = import.meta.env.VITE_PROPERTY_URL;

   useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('API Response:', response.data);
        setProperties(response.data.data);
      } catch (err: any) {
        setError(
          err.response?.data?.message || err.message || 'Unknown error'
        );
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchProperties();
    } else {
      setError('Authentication token not found');
      setLoading(false);
    }
  }, [url, token]);

  return { Properties,  Loading, Error };
  
}

