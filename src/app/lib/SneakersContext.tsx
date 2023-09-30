"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ISneaker, sortingOptions } from "main/constants";
interface ISneakersContext {
  query: string;
  isSearchDisabled: boolean;
  sneakers: ISneaker[];
  brandCounts: [string, number][] | null;
  activeSortingOption: string;
  handleQueryChange: (newQuery: string) => void;
  handleSetSneakers: (sneakers: ISneaker[]) => void;
  onRemoveSneaker: (id: string) => void;
  handleSetIsSearchDisabled: (isDisabled: boolean) => void;
  resetSearchQuery: () => void;
  sortByOldestYear: () => ISneaker[];
  sortByCheapestPrice: () => ISneaker[];
  sortBySmallestSize: () => ISneaker[];
  handleActiveSortingOption: (sortingOption: string) => void;
  selectedSneaker: ISneaker | null;
  handleSetSelectedSneaker: (sneaker: ISneaker) => void;
  deselectSneaker: () => void;
  handleSneakerUpdate: (newSneaker: ISneaker) => void;
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
  //data
  const [query, setQuery] = useState("");
  const [sneakers, setSneakers] = useState<ISneaker[]>([]);
  const [isSearchDisabled, setIsSearchDisabled] = useState(false);
  const [activeSortingOption, setActiveSortingOption] = useState<string>(
    sortingOptions.oldest
  );
  const [selectedSneaker, setSelectedSneakers] = useState<ISneaker | null>(
    null
  );

  //setters
  const handleSetSneakers = (sneakers: ISneaker[]) => {
    setSneakers(sneakers);
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
  const handleActiveSortingOption = (sortingOption: string) => {
    setActiveSortingOption(sortingOption);
  };
  const handleSetSelectedSneaker = (sneaker: ISneaker) => {
    setSelectedSneakers(sneaker);
  };
  const deselectSneaker = () => {
    setSelectedSneakers(null);
  };
  //methods
  const onRemoveSneaker = (id: string) => {
    const newSneakers = sneakers.filter((sneaker) => sneaker._id !== id);
    setSneakers(newSneakers);
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
  const sortByOldestYear = () => {
    return sneakers.slice().sort((a, b) => {
      return a.year - b.year;
    });
  };
  const sortByCheapestPrice = () => {
    return sneakers.slice().sort((a, b) => {
      return a.price - b.price;
    });
  };
  const sortBySmallestSize = () => {
    return sneakers.slice().sort((a, b) => {
      return a.sizeUs - b.sizeUs;
    });
  };
  const handleSneakerUpdate = (newSneaker: ISneaker) => {
    const updatedSneakers = sneakers.map((sneaker) => {
      if (sneaker._id === newSneaker._id) {
        return newSneaker;
      } else {
        return sneaker;
      }
    });
    setSneakers(updatedSneakers);
  };
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
        sortByOldestYear,
        sortByCheapestPrice,
        sortBySmallestSize,
        activeSortingOption,
        handleActiveSortingOption,
        selectedSneaker,
        handleSetSelectedSneaker,
        deselectSneaker,
        handleSneakerUpdate,
      }}
    >
      {children}
    </SneakersContext.Provider>
  );
};
//
