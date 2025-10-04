import type { Company } from "@/constants/type"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCompanies = createAsyncThunk("companies/fetchCompanies", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("/data/companies.json");
  if (!response.ok) {
    throw new Error("Failed to fetch companies");
  }
  const data: Company[] = await response.json();
  return data;
})