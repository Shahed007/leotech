type HostingPlan = {
  category: string;
  description: string;
  price: number;
  main_features: {
    storage: string[];
    bandWidth: string[];
    support: string[];
    email: string;
    ssl: string;
    freeDomain: string;
    domain?: string;
    dataTransfer?: string[];
    security?: string;
    dataBase?: string;
    speed?: string;
  };
};

const HostingPlanCard = ({
  category,
  description,
  price,
  main_features,
}: HostingPlan) => {
  return <div>HostingPlanCard</div>;
};

export default HostingPlanCard;
