import { CompanyCard, CompanySkeleton, EmptyState } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Company } from "@/constants/type";
import { fetchCompanies } from "@/lib/actions";
import {
  setIndustryFilter,
  setLocationFilter,
  setSearchQuery,
  setSortBy,
  setSortOrder,
} from "@/store/companiesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 9;

const Companies = () => {
  const dispatch = useAppDispatch();
  const {
    filteredCompanies,
    loading,
    error,
    searchQuery,
    selectedIndustry,
    selectedLocation,
    sortBy,
    sortOrder,
    companies,
  } = useAppSelector((state) => state.companies);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedIndustry, sortOrder, selectedLocation, sortBy]);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  const industries = [
    "all",
    ...new Set(companies.map((c: Company) => c.industry)),
  ];
  const locations = [
    "all",
    ...new Set(companies.map((c: Company) => c.location)),
  ];

  const totalPages = Math.ceil(filteredCompanies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCompanies = filteredCompanies.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f7f5f4]">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="flex gap-2 items-center">
                {/* <Link to={"/"} className="w-10 h-10 flex items-center mb-1">
                  <ArrowLeft color="black" size={40}/>
                </Link> */}
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#3d2e26]">
                  OrgInsight
                </h1>
              </div>
              <p className="text-[#6b5d54] text-base">
                Explore{" "}
                <span className="text-[#8b6f47] font-semibold text-lg">
                  {filteredCompanies.length}
                </span>{" "}
                companies across various industries and locations
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 bg-white/40 border border-[#e0dad5] rounded-lg p-6 shadow-sm">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6b5d54]" />
              <Input
                placeholder="Search companies by name..."
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className="pl-11 h-12 bg-white/50 border-[#e0dad5] focus:border-[#8b6f47] text-[#3d2e26] text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-[#3d2e26] mb-2 block">
                  Industry
                </label>
                <Select
                  value={selectedIndustry}
                  onValueChange={(value) => dispatch(setIndustryFilter(value))}
                >
                  <SelectTrigger className="bg-white border-[#e0dad5] text-[#3d2e26] h-11">
                    <SelectValue placeholder="All Industries" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry === "all" ? "all" : industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#3d2e26] mb-2 block">
                  Location
                </label>
                <Select
                  value={selectedLocation}
                  onValueChange={(value) => dispatch(setLocationFilter(value))}
                >
                  <SelectTrigger className="bg-white border-[#e0dad5] text-[#3d2e26] h-11">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location === "all" ? "All Locations" : location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#3d2e26] mb-2 block">
                  Sort By
                </label>
                <Select
                  value={sortBy}
                  onValueChange={(value: "name" | "location") =>
                    dispatch(setSortBy(value))
                  }
                >
                  <SelectTrigger className="bg-white border-[#e0dad5] text-[#3d2e26] h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Company Name</SelectItem>
                    <SelectItem value="location">Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#3d2e26] mb-2 block">
                  Order
                </label>
                <Select
                  value={sortOrder}
                  onValueChange={(value: "asc" | "desc") =>
                    dispatch(setSortOrder(value))
                  }
                >
                  <SelectTrigger className="bg-white border-[#e0dad5] text-[#3d2e26] h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asc">A → Z</SelectItem>
                    <SelectItem value="desc">Z → A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <CompanySkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-[#c44536] text-lg">{error}</p>
          </div>
        ) : currentCompanies.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentCompanies.map((company) => (
                <CompanyCard company={company} />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 flex-wrap">
                <Button
                  variant={"outline"}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage == 1}
                  className="border-[#e0dad5] hover:bg-[#8b6f47]/10 hover:border-[#8b6f47] hover:text-[#8b6f47] disabled:opacity-50"
                >
                  Previous
                </Button>
                <div className="flex gap-2 flex-wrap justify-center">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => handlePageChange(page)}
                        className={
                          currentPage === page
                            ? "w-10 bg-[#8b6f47] text-white hover:bg-[#7a5f3d]"
                            : "w-10 border-[#e0dad5] hover:bg-[#8b6f47]/10 hover:border-[#8b6f47] hover:text-[#8b6f47]"
                        }
                      >
                        {page}
                      </Button>
                    )
                  )}
                </div>
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="border-[#e0dad5] hover:bg-[#8b6f47]/10 hover:border-[#8b6f47] hover:text-[#8b6f47] disabled:opacity-50"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Companies;
