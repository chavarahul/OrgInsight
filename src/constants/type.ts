export interface Company {
  id: number;
  name: string;
  industry: string;
  location: string;
  description: string;
}

export interface CompaniesState {
  companies: Company[];
  filteredCompanies: Company[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  selectedIndustry: string;
  selectedLocation: string;
  sortOrder: "asc" | "desc";
  sortBy: "name" | "location";
}
