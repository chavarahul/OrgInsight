import type { CompaniesState } from "@/constants/type";

const applyFilters = (state: CompaniesState) => {
  let filtered = [...state.companies];
  if (state.searchQuery) {
    filtered = filtered.filter((company) =>
      company.name.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  }
  if (state.selectedIndustry != "all") {
    filtered = filtered.filter(
      (company) => company.industry === state.selectedIndustry
    );
  }
  if (state.selectedLocation != "all") {
    filtered = filtered.filter(
      (company) => company.location === state.selectedLocation
    );
  }
  filtered.sort((a, b) => {
    const field = state.sortBy === "name" ? "name" : "location";
    if (state.sortOrder === "asc") {
      return a[field].localeCompare(b[field]);
    } else {
      return b[field].localeCompare(a[field]);
    }
  });
  state.filteredCompanies = filtered;
};

export default applyFilters;