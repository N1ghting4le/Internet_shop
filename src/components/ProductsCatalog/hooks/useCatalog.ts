import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import type { CatalogItem } from "../types";
import { getCatalogItems } from "../utils/getCatalogItems";

import { CATALOG_LOADING_ERROR_TEXT } from "@/constants/errorTexts";
import { wait } from "@/utils/wait";

export const useCatalog = () => {
  const [catalogItems, setCatalogItems] = useState<CatalogItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    wait(1500).then(() => {
      try {
        setCatalogItems(getCatalogItems());
      } catch {
        setIsError(true);
        toast.error(CATALOG_LOADING_ERROR_TEXT);
      }

      setIsLoading(false);
    });
  }, []);

  return { catalogItems, setCatalogItems, isLoading, isError };
};
