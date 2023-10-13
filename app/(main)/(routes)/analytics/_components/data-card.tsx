import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumber, formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

interface DataCardProps {
  value: number;
  label: string;
  shouldFormat?: boolean;
  variant?: "default" | "sm";
  color?: "default" | "success" | "alert" | "warning" | "danger";
}

export const DataCard = ({
  value,
  label,
  shouldFormat,
  variant = "default",
  color = "default",
}: DataCardProps) => {
  return (
    <div>
      {variant === "default" ? (
        <Card
          className={cn(
            color === "success" && "bg-blue-300",
            color === "alert" && "bg-emerald-300",
            color === "danger" && "bg-rose-400",
            color === "warning" && "bg-orange-300"
          )}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{label.toLocaleUpperCase()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {shouldFormat ? formatPrice(value) : formatNumber(value)}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card
          className={cn(
            color === "success" && "bg-blue-300",
            color === "alert" && "bg-emerald-300",
            color === "danger" && "bg-rose-400",
            color === "warning" && "bg-orange-300"
          )}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
            <CardTitle className="text-sm font-medium">{label}</CardTitle>
            <CardTitle className="text-2xl font-bold">
              {shouldFormat ? formatPrice(value) : formatNumber(value)}
            </CardTitle>
          </CardHeader>
        </Card>
      )}
    </div>
  );
};
