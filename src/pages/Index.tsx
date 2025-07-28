import Layout from "../components/layout/Layout";
import Home from "./Home";
import { PerformanceOptimizations } from "@/components/performance/PerformanceOptimizations";

const Index = () => {
  return (
    <Layout>
      <PerformanceOptimizations />
      <Home />
    </Layout>
  );
};

export default Index;
