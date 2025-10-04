import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { Company } from "@/constants/type";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full hover:border-accent transition-all duration-300 bg-white/40">
        <CardHeader>
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-[#8b6f47]">
                <Building2 className="h-5 w-5 text-accent" />
              </div>
            </div>
            <Badge variant="secondary" className="text-xs">
              {company.industry}
            </Badge>
          </div>
          <CardTitle className="text-xl">{company.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4" />
            <span>{company.location}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {company.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CompanyCard;
