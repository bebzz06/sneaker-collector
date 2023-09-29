"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ISneaker } from "main/constants";
interface ISneakersContext {
  query: string;
  isSearchDisabled: boolean;
  sneakers: ISneaker[];
  brandCounts: [string, number][] | null;
  handleQueryChange: (newQuery: string) => void;
  handleSetSneakers: (sneakers: ISneaker[]) => void;
  onRemoveSneaker: (id: string) => void;
  handleSetIsSearchDisabled: (isDisabled: boolean) => void;
  resetSearchQuery: () => void;
}

const SneakersContext = createContext<ISneakersContext | undefined>(undefined);

export const useSneakersContext = () => {
  const context = useContext(SneakersContext);
  if (!context) {
    throw new Error("useSneakers must be used within a SneakerProvider");
  }
  return context;
};

interface ISneakersProviderProps {
  children: ReactNode;
}
export const SneakersProvider: React.FC<ISneakersProviderProps> = ({
  children,
}) => {
  const [query, setQuery] = useState("");
  const [sneakers, setSneakers] = useState<ISneaker[]>([]);
  const [isSearchDisabled, setIsSearchDisabled] = useState(false);

  const handleSetSneakers = (sneakers: ISneaker[]) => {
    setSneakers(sneakers);
  };
  const onRemoveSneaker = (id: string) => {
    const newSneakers = sneakers.filter((sneaker) => sneaker._id !== id);
    setSneakers(newSneakers);
  };
  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleSetIsSearchDisabled = (isDisabled: boolean) => {
    setIsSearchDisabled(isDisabled);
  };
  const resetSearchQuery = () => {
    setQuery("");
  };
  const filteredSneakers = sneakers?.filter((sneaker) => {
    return sneaker.brand.toLowerCase().includes(query.toLowerCase());
  });
  const getUniqueBrandCounts = () => {
    const brandCounts: Record<string, number> = {};
    if (query !== "" && filteredSneakers.length > 0) {
      filteredSneakers.forEach((sneaker) => {
        const brand = sneaker.brand;
        brandCounts[brand] = (brandCounts[brand] || 0) + 1;
      });
      const brandCountPairs = Object.entries(brandCounts);

      return brandCountPairs;
    }
    return null;
  };
  const brandCounts = getUniqueBrandCounts();
  return (
    <SneakersContext.Provider
      value={{
        sneakers: filteredSneakers,
        handleSetSneakers,
        onRemoveSneaker,
        query,
        handleQueryChange,
        isSearchDisabled,
        handleSetIsSearchDisabled,
        resetSearchQuery,
        brandCounts,
      }}
    >
      {children}
    </SneakersContext.Provider>
  );
};
//
