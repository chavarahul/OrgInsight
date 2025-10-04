import type { CompaniesState } from "@/constants/type";
import { fetchCompanies } from "@/lib/actions";
import applyFilters from "@/utils/helper";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: CompaniesState = {
  companies: [],
  filteredCompanies: [],
  loading: false,
  error: null,
  searchQuery: "",
  selectedIndustry: "all",
  selectedLocation: "all",
  sortOrder: "asc",
  sortBy: "name",
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      applyFilters(state);
    },
    setIndustryFilter: (state, action: PayloadAction<string>) => {
      state.selectedIndustry = action.payload;
      applyFilters(state);
    },
    setLocationFilter: (state, action: PayloadAction<string>) => {
      state.selectedLocation = action.payload;
      applyFilters(state);
    },
    setSortOrder: (
      state,
      action: PayloadAction<CompaniesState["sortOrder"]>
    ) => {
      state.sortOrder = action.payload;
      applyFilters(state);
    },
    setSortBy: (state, action: PayloadAction<CompaniesState["sortBy"]>) => {
      state.sortBy = action.payload;
      applyFilters(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
        state.filteredCompanies = action.payload;
        applyFilters(state);
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch companies";
      });
  },
});

export const {
  setSearchQuery,
  setIndustryFilter,
  setLocationFilter,
  setSortOrder,
  setSortBy,
} = companiesSlice.actions;

export default companiesSlice.reducer;
