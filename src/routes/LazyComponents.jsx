import { lazy } from "react";

const AppLayoutPage = lazy(()=>import("../components/layout"));
const HomePage = lazy(()=>import("../pages"));
const ServicesPage = lazy(()=>import("../pages/Services"));
const PricingPage = lazy(()=>import("../pages/Pricing"));
const BlogPage = lazy(()=>import("../pages/Blog"));
const PageNotFound = lazy(()=>import("../pages/404"));



export {
    AppLayoutPage,
    HomePage,
    ServicesPage,
    BlogPage,
    PricingPage,
    PageNotFound
}